
import { GoogleGenAI, Type } from "@google/genai";
import { StrategyStep } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateMarketingStrategy = async (goal: string): Promise<StrategyStep[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `My business goal is: "${goal}"`,
      config: {
        systemInstruction: "You are a world-class marketing strategist AI. Your goal is to provide a concise, high-level, 3-step marketing strategy outline for businesses. The output must be in JSON format. The steps should be actionable and tailored to the user's goal. Each step must have a 'title' and a 'description'.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'The concise title for the marketing strategy step.'
              },
              description: {
                type: Type.STRING,
                description: 'A detailed, actionable description of the strategy step.'
              }
            },
            required: ['title', 'description']
          }
        },
      },
    });

    const text = response.text.trim();
    if (!text) {
        throw new Error("Received an empty response from the AI.");
    }

    const parsedResponse = JSON.parse(text);
    return parsedResponse as StrategyStep[];

  } catch (error) {
    console.error("Error generating marketing strategy:", error);
    throw new Error("Failed to generate a marketing strategy. The AI might be busy or an error occurred. Please try again.");
  }
};
