import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

async function testFetch() {
    console.log("Starting minimal fetch test...");
    const apiKey = process.env.GEMINI_API_KEY!;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${apiKey}`;

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "models/text-embedding-004",
            content: {
                parts: [{ text: "Hello world" }]
            }
        })
    });

    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Response:", text);
}

testFetch();
