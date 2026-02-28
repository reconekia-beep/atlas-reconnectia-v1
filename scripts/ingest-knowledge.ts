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

interface KnowledgeItem {
    title: string;
    keywords: string[];
    content: string;
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

    // 1. Read JSON file
    const kbFilePath = path.resolve(process.cwd(), "reconnectia_kb.json");
    if (!fs.existsSync(kbFilePath)) {
        console.error(`Knowledge base file not found at: ${kbFilePath}`);
        process.exit(1);
    }

    const kbData = fs.readFileSync(kbFilePath, "utf8");
    const knowledgeItems: KnowledgeItem[] = JSON.parse(kbData);
    console.log(`Loaded ${knowledgeItems.length} knowledge items from the JSON file.`);

    let insertedCount = 0;

    for (let i = 0; i < knowledgeItems.length; i++) {
        const item = knowledgeItems[i];
        console.log(`Processing item ${i + 1}/${knowledgeItems.length}: ${item.title}...`);

        // 2. Generate Embeddings using item.content
        const embedding = await getEmbedding(item.content);

        if (!embedding) {
            console.error(`Failed to generate embedding for item ${i + 1} (${item.title}). Skipping.`);
            continue;
        }

        // 3. Insert into Supabase
        const { error } = await supabaseAdmin
            .from("knowledge_documents")
            .insert({
                content: item.content,
                embedding: embedding,
                metadata: {
                    title: item.title,
                    keywords: item.keywords,
                    source: "reconnectia_kb.json",
                    item_index: i,
                    ingested_at: new Date().toISOString(),
                },
            });

        if (error) {
            console.error(`Supabase Insert Error for item ${i + 1}:`, error.message);
        } else {
            insertedCount++;
        }

        // Slight delay to respect rate limits if there are many items
        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    // 4. Execution Interface Summary
    console.log(`\n✅ ${insertedCount} fragmentos insertados con éxito en la base de datos vectorial.\n`);
}

// Execute the script
runIngestion().catch((e) => {
    console.error("Ingestion failed:", e);
});
