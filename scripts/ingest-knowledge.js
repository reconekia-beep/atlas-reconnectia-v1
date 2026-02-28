"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var supabase_js_1 = require("@supabase/supabase-js");
var genai_1 = require("@google/genai");
var dotenv = require("dotenv");
var path = require("path");
var fs = require("fs");
// Load environment variables from .env.local
var envPath = path.resolve(process.cwd(), ".env.local");
dotenv.config({ path: envPath });
console.log("Loading env from: ".concat(envPath));
var SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
var SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
var GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || !GEMINI_API_KEY) {
    console.error("Missing required environment variables in .env.local");
    process.exit(1);
}
console.log("API Key loaded correctly (length: ".concat(GEMINI_API_KEY.length, ")"));
// Initialize Supabase Admin client
var supabaseAdmin = (0, supabase_js_1.createClient)(SUPABASE_URL, SUPABASE_SERVICE_KEY);
// Initialize Gemini SDK
var ai = new genai_1.GoogleGenAI({ apiKey: GEMINI_API_KEY.trim() });
// Dummy text to show functionality. 
// Ideally, this could read from a .txt, .md, or .json file.
var sampleText = "\nReconnectIA: The Future of Strategic Operations\n\nReconnectIA is a vanguard technology firm specializing in B2B AI consulting and the deployment of advanced cognitive architectures for enterprise environments. Our primary mission is to bridge the gap between abstract AI capabilities and tangible operational efficiency. We do not just build chatbots; we forge strategic digital assets that integrate seamlessly into executive workflows.\n\nAtlas Engine Overview:\nAtlas is the core proprietary engine powering ReconnectIA's intelligent solutions. Atlas leverages a sophisticated Retrieval-Augmented Generation (RAG) architecture to ensure that every interaction is grounded in verifiable, company-specific knowledge. It employs multi-agent collaboration to break down complex tasks, from data analysis to automated reporting. \n\nPricing and Engagement:\nOur baseline engagement model starts with a Strategic Diagnosis, an immersive two-week process where our experts map out your operational bottlenecks and propose precise AI interventions. Following the diagnosis, implementation phases vary depending on scope, but a standard deployment of the Atlas Engine starts at a competitive enterprise rate. We strongly believe in ROI-driven implementations; if we cannot mathematically prove that our solution will save your company time or money within the first quarter, we will not take the project.\n\nSecurity and Data Privacy:\nSecurity is not an afterthought at ReconnectIA; it is the foundation. All data processed by the Atlas Engine is encrypted in transit and at rest. We utilize isolated vector databases for each client, ensuring zero cross-contamination of proprietary knowledge. Our infrastructure is compliant with major data protection regulations, and we offer on-premise deployment options for organizations with extreme security requirements.\n\nContact and Support:\nFor immediate inquiries, clients can leverage the Atlas Concierge built directly into our platform. For escalation, our dedicated support team is available 24/7. To initiate a partnership, prospective clients are encouraged to book a Strategic Diagnosis session via our Calendly integration.\n";
/**
 * Chunks text into approximate token counts.
 * Note: A simple word-based heuristic is used here for demonstration since
 * a true token-based chunker requires a specialized tokenizer (like tiktoken).
 * 1 word ~= 1.3 tokens.
 * Target: 500-800 tokens -> ~380-615 words.
 * Overlap: 100 tokens -> ~75 words.
 */
function chunkText(text, maxWords, overlapWords) {
    if (maxWords === void 0) { maxWords = 400; }
    if (overlapWords === void 0) { overlapWords = 75; }
    var words = text.split(/\s+/).filter(function (w) { return w.length > 0; });
    var chunks = [];
    for (var i = 0; i < words.length; i += maxWords - overlapWords) {
        var chunk = words.slice(i, i + maxWords).join(" ");
        chunks.push(chunk);
        if (i + maxWords >= words.length) {
            break;
        }
    }
    return chunks;
}
function getEmbedding(text) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, url, res, errDetails, data, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    apiKey = GEMINI_API_KEY.trim();
                    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=".concat(apiKey);
                    return [4 /*yield*/, fetch(url, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                model: "models/gemini-embedding-001",
                                content: {
                                    parts: [{ text: text }]
                                },
                                outputDimensionality: 768
                            })
                        })];
                case 1:
                    res = _b.sent();
                    if (!!res.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, res.text()];
                case 2:
                    errDetails = _b.sent();
                    console.error("Gemini API Error [".concat(res.status, "]:"), errDetails);
                    return [2 /*return*/, null];
                case 3: return [4 /*yield*/, res.json()];
                case 4:
                    data = _b.sent();
                    return [2 /*return*/, ((_a = data === null || data === void 0 ? void 0 : data.embedding) === null || _a === void 0 ? void 0 : _a.values) || null];
                case 5:
                    error_1 = _b.sent();
                    console.error("Embedding generation error:", error_1);
                    return [2 /*return*/, null];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function runIngestion() {
    return __awaiter(this, void 0, void 0, function () {
        var chunks, insertedCount, i, chunk, embedding, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Starting Knowledge Ingestion...");
                    chunks = chunkText(sampleText);
                    console.log("Generated ".concat(chunks.length, " chunks from the source document."));
                    insertedCount = 0;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < chunks.length)) return [3 /*break*/, 6];
                    chunk = chunks[i];
                    console.log("Processing chunk ".concat(i + 1, "/").concat(chunks.length, "..."));
                    return [4 /*yield*/, getEmbedding(chunk)];
                case 2:
                    embedding = _a.sent();
                    if (!embedding) {
                        console.error("Failed to generate embedding for chunk ".concat(i + 1, ". Skipping."));
                        return [3 /*break*/, 5];
                    }
                    return [4 /*yield*/, supabaseAdmin
                            .from("knowledge_documents")
                            .insert({
                            content: chunk,
                            embedding: embedding,
                            metadata: {
                                source: "internal_manifesto",
                                chunk_index: i,
                                ingested_at: new Date().toISOString(),
                            },
                        })];
                case 3:
                    error = (_a.sent()).error;
                    if (error) {
                        console.error("Supabase Insert Error for chunk ".concat(i + 1, ":"), error.message);
                        fs.writeFileSync("error.json", JSON.stringify(error, null, 2));
                    }
                    else {
                        insertedCount++;
                    }
                    // Slight delay to respect rate limits if there are many chunks
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                case 4:
                    // Slight delay to respect rate limits if there are many chunks
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    // 4. Execution Interface Summary
                    console.log("\n\u2705 ".concat(insertedCount, " fragmentos insertados con \u00E9xito en la base de datos vectorial.\n"));
                    return [2 /*return*/];
            }
        });
    });
}
// Execute the script
runIngestion().catch(function (e) {
    console.error("Ingestion failed:", e);
});
