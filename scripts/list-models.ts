import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

async function listModels() {
    console.log("Fetching models...");
    const apiKey = process.env.GEMINI_API_KEY!;
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.models) {
        const names = data.models.map((m: any) => m.name).filter((n: string) => n.includes("embed"));
        fs.writeFileSync("models.json", JSON.stringify(names, null, 2));
        console.log("Wrote embedding models to models.json");
    } else {
        console.log("Response:", data);
    }
}

listModels();
