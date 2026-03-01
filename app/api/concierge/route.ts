import { NextResponse } from 'next/server'
import { conciergeConfig } from '@/config/concierge.config'
import { createClient } from '@supabase/supabase-js'

const MAX_MESSAGES = 10
const MAX_MESSAGE_LENGTH = 2000
const API_TIMEOUT = 15000
const VECTOR_SEARCH_TIMEOUT = 3000

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface GeminiResponse {
  reply: string
  intent: 'neutral' | 'exploration' | 'high_intent'
  confidence: number
}

function buildSystemPrompt(context: string): string {
  return `Atlas is the strategic concierge of ${conciergeConfig.brandName}.
You are an executive assistant. Maintain a professional, direct tone without unnecessary technicalities.
You must respond ONLY based on the CONTEXT provided below. If the answer is not in the context, politely indicate that you do not have that specific information and offer to escalate to a strategic session (which will trigger a high_intent action).

CONTEXT:
${context}

Atlas always responds in valid JSON.
Structure:
{
  "reply": "string",
  "intent": "neutral | exploration | high_intent",
  "confidence": number (0-1)
}`
}

function sanitizeMessages(messages: any[]): Message[] {
  return messages
    .filter(
      (m) =>
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string'
    )
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_MESSAGE_LENGTH),
    }))
    .slice(-MAX_MESSAGES)
}

function safeParseGemini(textOutput: string): GeminiResponse {
  const jsonMatch = textOutput.match(/\{[\s\S]*\}/)

  if (!jsonMatch) {
    return {
      reply: textOutput,
      intent: 'neutral',
      confidence: 0.5,
    }
  }

  try {
    const parsed = JSON.parse(jsonMatch[0])

    return {
      reply: String(parsed.reply || ''),
      intent:
        parsed.intent === 'high_intent' ||
          parsed.intent === 'exploration' ||
          parsed.intent === 'neutral'
          ? parsed.intent
          : 'neutral',
      confidence:
        typeof parsed.confidence === 'number'
          ? Math.min(Math.max(parsed.confidence, 0), 1)
          : 0.5,
    }
  } catch {
    return {
      reply: textOutput,
      intent: 'neutral',
      confidence: 0.5,
    }
  }
}

async function getEmbedding(text: string, apiKey: string): Promise<number[] | null> {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'models/gemini-embedding-001',
        content: { parts: [{ text }] },
        outputDimensionality: 768
      })
    });

    if (!res.ok) {
      const errDetails = await res.text();
      console.error(`Gemini API Error [${res.status}]:`, errDetails);
      return null;
    }

    const data = await res.json();
    return data?.embedding?.values || null;
  } catch (error) {
    console.error("Embedding generation error:", error);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body: any = await req.json().catch(() => ({}))
    const messages = Array.isArray(body?.messages) ? body.messages : []
    const sanitizedMessages = sanitizeMessages(messages)

    if (!sanitizedMessages.length) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 })
    }

    const geminiKey = process.env.GEMINI_API_KEY
    if (!geminiKey) {
      return NextResponse.json({ error: 'No API Key' }, { status: 500 })
    }

    // --- Vector Search (RAG) ---
    let contextStr = "No additional context available."
    const lastUserMessage = sanitizedMessages.filter(m => m.role === 'user').pop()

    if (lastUserMessage) {
      // Attempt to fetch context under a timeout
      const contextPromise = async () => {
        const embedding = await getEmbedding(lastUserMessage.content, geminiKey)
        if (!embedding) return null

        // 2. Telemetry: log the first 5 values of the mapped query vector
        console.log(`\n[RAG Telemetry] Vector generated for "${lastUserMessage.content}": [${embedding.slice(0, 5).join(', ')}...]`);

        const { data, error } = await supabase.rpc('match_documents', {
          query_embedding: embedding,
          match_threshold: 0.45, // Lowered threshold for test sensitivity
          match_count: 5         // 4. Aumento de Contexto
        })

        if (error) {
          console.error("Vector search error:", error)
          return null
        }

        if (data && data.length > 0) {
          // 1. Log de Similitud (top 3)
          console.log(`\n--- RAG Search Results for: "${lastUserMessage.content}" ---`)
          data.slice(0, 3).forEach((doc: any, i: number) => { // Only show top 3 similarity scores in terminal
            console.log(`Result ${i + 1}: Score = ${doc.similarity?.toFixed(4) || 'N/A'}`)
          })
          console.log('---------------------------------------------------\n')

          return data.map((doc: any) => doc.content).join('\n\n---\n\n')
        } else {
          // 4. Prompt de Fallback
          console.warn(`\n[RAG] Zero results found for query: "${lastUserMessage.content}" using threshold 0.45`)
        }
        return null
      }

      try {
        // Promise.race to enforce timeout
        const timeoutSignal = new Promise<null>((resolve) => setTimeout(() => resolve(null), VECTOR_SEARCH_TIMEOUT))
        const result = await Promise.race([contextPromise(), timeoutSignal])

        if (result) {
          contextStr = result
        }
      } catch (e) {
        console.error("Context fetch failed or timed out:", e)
      }
    }

    // --- Answer Generation ---
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT)

    const payload = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text:
                buildSystemPrompt(contextStr) +
                '\n\nHistory:\n' +
                sanitizedMessages
                  .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
                  .join('\n') +
                '\n\nRespond ONLY with raw JSON.',
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.7, // Lower temperature could be considered for RAG grounding, but 0.7 is fine while using system prompt restrictions
        maxOutputTokens: 1024,
      },
    }

    const apiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      }
    )

    clearTimeout(timeoutId)

    const data = await apiResponse.json()

    if (!apiResponse.ok) {
      return NextResponse.json(
        { gemini_error: data },
        { status: apiResponse.status }
      )
    }

    const textOutput =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}'

    const geminiResult = safeParseGemini(textOutput)

    const responsePayload = {
      ...geminiResult,
      suggested_actions:
        geminiResult.intent === 'high_intent'
          ? [
            {
              type: 'calendly',
              label: 'Agendar Sesión Estretégica',
              url: conciergeConfig.calendlyUrl,
            },
          ]
          : geminiResult.intent === 'exploration'
            ? [
              {
                type: 'atlas',
                label: 'Ver Diagnóstico Estratégico',
                url: conciergeConfig.atlasUrl,
              },
            ]
            : [],
    }

    return NextResponse.json(responsePayload)
  } catch (error: any) {
    if (error.name === 'AbortError') {
      return NextResponse.json(
        {
          reply:
            'Estamos tardando un poco más de lo esperado. ¿Podrías intentarlo nuevamente?',
          intent: 'neutral',
          confidence: 0.5,
          suggested_actions: [],
        },
        { status: 504 }
      )
    }

    console.error('Concierge API Error:', error)

    return NextResponse.json(
      {
        reply:
          'Estamos teniendo una pequeña intermitencia técnica. ¿Podrías reformular tu mensaje?',
        intent: 'neutral',
        confidence: 0.5,
        suggested_actions: [],
      },
      { status: 500 }
    )
  }
}