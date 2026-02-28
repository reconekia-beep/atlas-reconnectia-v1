import { createClient } from "@supabase/supabase-js";
import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), ".env.local");
dotenv.config({ path: envPath });

console.log(`Loading env from: ${envPath}`);

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || !GEMINI_API_KEY) {
    console.error("Missing required environment variables in .env.local");
    process.exit(1);
}

console.log(`API Key loaded correctly (length: ${GEMINI_API_KEY.length})`);

// Initialize Supabase Admin client
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Initialize Gemini SDK
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY.trim() });

// Dummy text to show functionality. 
// Ideally, this could read from a .txt, .md, or .json file.
const sampleText = `
ReconnectIA: The Future of Strategic Operations

ReconnectIA is a vanguard technology firm specializing in B2B AI consulting and the deployment of advanced cognitive architectures for enterprise environments. Our primary mission is to bridge the gap between abstract AI capabilities and tangible operational efficiency. We do not just build chatbots; we forge strategic digital assets that integrate seamlessly into executive workflows.

Atlas Engine Overview:
Atlas is the core proprietary engine powering ReconnectIA's intelligent solutions. Atlas leverages a sophisticated Retrieval-Augmented Generation (RAG) architecture to ensure that every interaction is grounded in verifiable, company-specific knowledge. It employs multi-agent collaboration to break down complex tasks, from data analysis to automated reporting. 

Pricing and Engagement:
Our baseline engagement model starts with a Strategic Diagnosis, an immersive two-week process where our experts map out your operational bottlenecks and propose precise AI interventions. Following the diagnosis, implementation phases vary depending on scope, but a standard deployment of the Atlas Engine starts at a competitive enterprise rate. We strongly believe in ROI-driven implementations; if we cannot mathematically prove that our solution will save your company time or money within the first quarter, we will not take the project.

Security and Data Privacy:
Security is not an afterthought at ReconnectIA; it is the foundation. All data processed by the Atlas Engine is encrypted in transit and at rest. We utilize isolated vector databases for each client, ensuring zero cross-contamination of proprietary knowledge. Our infrastructure is compliant with major data protection regulations, and we offer on-premise deployment options for organizations with extreme security requirements.

Contact and Support:
For immediate inquiries, clients can leverage the Atlas Concierge built directly into our platform. For escalation, our dedicated support team is available 24/7. To initiate a partnership, prospective clients are encouraged to book a Strategic Diagnosis session via our Calendly integration.
`;


/**
 * Chunks text into approximate token counts.
 * Note: A simple word-based heuristic is used here for demonstration since
 * a true token-based chunker requires a specialized tokenizer (like tiktoken).
 * 1 word ~= 1.3 tokens. 
 * Target: 500-800 tokens -> ~380-615 words.
 * Overlap: 100 tokens -> ~75 words.
 */
function chunkText(text: string, maxWords: number = 400, overlapWords: number = 75): string[] {
    const words = text.split(/\s+/).filter((w) => w.length > 0);
    const chunks: string[] = [];

    for (let i = 0; i < words.length; i += maxWords - overlapWords) {
        const chunk = words.slice(i, i + maxWords).join(" ");
        chunks.push(chunk);
        if (i + maxWords >= words.length) {
            break;
        }
    }

    return chunks;
}


async function getEmbedding(text: string): Promise<number[] | null> {
    try {
        const apiKey = GEMINI_API_KEY.trim();
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${apiKey}`;

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "models/gemini-embedding-001",
                content: {
                    parts: [{ text }]
                },
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

async function runIngestion() {
    console.log("Starting Knowledge Ingestion...");

    // 1. Processing Text (Chunking)
    const chunks = chunkText(sampleText);
    console.log(`Generated ${chunks.length} chunks from the source document.`);

    let insertedCount = 0;

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        console.log(`Processing chunk ${i + 1}/${chunks.length}...`);

        // 2. Generate Embeddings
        const embedding = await getEmbedding(chunk);

        if (!embedding) {
            console.error(`Failed to generate embedding for chunk ${i + 1}. Skipping.`);
            continue;
        }

        // 3. Insert into Supabase
        const { error } = await supabaseAdmin
            .from("knowledge_documents")
            .insert({
                content: chunk,
                embedding: embedding,
                metadata: {
                    source: "internal_manifesto",
                    chunk_index: i,
                    ingested_at: new Date().toISOString(),
                },
            });

        if (error) {
            console.error(`Supabase Insert Error for chunk ${i + 1}:`, error.message);
        } else {
            insertedCount++;
        }

        // Slight delay to respect rate limits if there are many chunks
        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    // 4. Execution Interface Summary
    console.log(`\n✅ ${insertedCount} fragmentos insertados con éxito en la base de datos vectorial.\n`);
}

// Execute the script
runIngestion().catch((e) => {
    console.error("Ingestion failed:", e);
});
