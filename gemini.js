// import { GoogleGenAI } from "@google/genai";

// // 1. Using Gemini 2.0 Flash (Recommended for Free Tier)
// const ai = new GoogleGenAI({ 
//   apiKey: "AIzaSyC8loEINE8eNZYYlrXgA7A5HGhGOCqL0v8" 
// });

// async function main() {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.0-flash", // Changed from gemini-3-pro-preview
//       contents: "Explain how AI works in a few words",
//     });
    
//     console.log("Response:", response.text);
//   } catch (error) {
//     // 2. Handle the Quota/Rate Limit error gracefully
//     if (error.status === 429) {
//       console.error("Quota Exceeded: Please wait a minute or switch to a different model.");
//     } else {
//       console.error("API Error:", error.message);
//     }
//   }
// }

// await main();


import { GoogleGenAI } from "@google/genai";

// Replace with your NEW API key (since the old one was exposed)
const ai = new GoogleGenAI({ 
  apiKey: "AIzaSyC8loEINE8eNZYYlrXgA7A5HGhGOCqL0v8" 
});

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash", // Use 1.5-flash for the highest chance of success
      contents: "Say 'Hello from Gemini Flash'",
    });

    // In the new SDK, the text is inside response.text
    console.log("Gemini says:", response.text);
  } catch (error) {
    if (error.status === 429) {
      console.error("Quota Exceeded: The Free Tier is busy. Wait 60s and try again.");
    } else {
      console.error("Error Detail:", error.message);
    }
  }
}

main();