import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY || "";
  
  if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
    return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  try {
    // Note: The SDK doesn't have a direct 'listModels' in the same way as the REST API 
    // but we can try to fetch from the raw endpoint to see what's happening.
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
