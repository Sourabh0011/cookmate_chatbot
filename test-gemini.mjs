import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual key if the env variable isn't working
const API_KEY = "AIzaSyCS_qDANtcdUVNHeu30RD0wDNiEoy7vP04"; 

const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  console.log("Testing Gemini API Connection...");
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Say 'System Online'");
    const response = await result.response;
    console.log("✅ SUCCESS! Response:", response.text());
  } catch (error) {
    console.error("❌ FAILED!");
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    
    if (error.message.includes("404")) {
      console.log("\n--- Troubleshooting 404 ---");
      console.log("1. Your API Key might be invalid or not from https://aistudio.google.com/");
      console.log("2. Your region might not support this model yet.");
      console.log("3. Try using 'gemini-1.5-pro' instead of 'gemini-1.5-flash' in the script.");
    }
  }
}

run();
