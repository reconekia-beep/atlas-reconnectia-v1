import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

async function testDim() {
    console.log("Testing dimensionality...");
    const apiKey = process.env.GEMINI_API_KEY!;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${apiKey}`;

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "models/gemini-embedding-001",
            content: { parts: [{ text: "this is a test of dimensionality" }] },
            outputDimensionality: 768
        })
    });

    if (!res.ok) {
        console.log("Failed:", await res.text());
        return;
    }

    const data = await res.json();
    console.log("Values length:", data?.embedding?.values?.length);
}

testDim();
