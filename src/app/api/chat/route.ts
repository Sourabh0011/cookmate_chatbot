import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = (process.env.GEMINI_API_KEY || "").trim();

  if (!apiKey || apiKey === "YOUR_API_KEY_HERE" || !apiKey) {
    return NextResponse.json({ error: "API Key missing in .env.local" }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const { message } = await req.json();
    
    // Using the stable 2026 model gemini-2.5-flash
    // Fallback to gemini-3.1-flash if needed
    const modelsToTry = ["gemini-2.5-flash", "gemini-3.1-flash", "gemini-2.0-flash"];
    
    let lastError = null;
    for (const modelName of modelsToTry) {
      try {
        console.log(`[Gemini API] Trying model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(message);
        const text = result.response.text();
        
        console.log(`[Gemini API] Success with ${modelName}`);
        return NextResponse.json({ text, model: modelName });
      } catch (err: any) {
        lastError = err;
        console.warn(`[Gemini API] ${modelName} failed:`, err.message);
        if (!err.message?.includes("404")) break; 
      }
    }

    throw lastError;

  } catch (error: any) {
    console.error("Chat Route Error:", error.message);
    return NextResponse.json({ 
      error: `Gemini API Error: ${error.message}. Please verify your key at AI Studio and RESTART your server.` 
    }, { status: 500 });
  }
}
