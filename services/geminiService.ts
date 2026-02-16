
import { GoogleGenAI, Type } from "@google/genai";

export const generateProjectIdea = async (techStack: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Brainstorm a unique web project idea using ${techStack}. 
    Provide a title, a short description, and 3 key features.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          features: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "description", "features"]
      }
    }
  });

  return JSON.parse(response.text);
};
