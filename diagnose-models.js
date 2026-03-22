const { GoogleGenerativeAI } = require("@google/generative-ai");

// Directly using the key provided by the user for diagnostics
const apiKey = "AIzaSyCS_qDANtcdUVNHeu30RD0wDNiEoy7vP04";

async function listModels() {
  const genAI = new GoogleGenerativeAI(apiKey);
  
  try {
    console.log("--- Gemini API Diagnostics ---");
    console.log("Using API Key: " + apiKey.substring(0, 6) + "...");
    
    // Attempt to fetch models using the official API endpoint
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    
    if (data.error) {
      console.error("API Error:", JSON.stringify(data.error, null, 2));
      if (data.error.status === "PERMISSION_DENIED") {
        console.log("\nPossible Reason: The API key is restricted or the 'Generative Language API' is not enabled in your Google Cloud project.");
      }
      return;
    }

    if (data.models) {
      console.log("\nAvailable Models for this key:");
      data.models.forEach(m => {
        console.log(`- ${m.name} (ID: ${m.name.replace('models/', '')})`);
      });
    } else {
      console.log("No models found in the response.");
      console.log("Full response:", JSON.stringify(data, null, 2));
    }
  } catch (err) {
    console.error("Connection Error:", err.message);
  }
}

listModels();
