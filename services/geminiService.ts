import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

// System instruction to guide the AI's behavior as a travel concierge
const SYSTEM_INSTRUCTION = `
You are the "SmallStay Concierge", a sophisticated AI assistant for a comprehensive travel platform.
Your goal is to help users find Shortlet Apartments, Hotels, Car Rentals, and Boat Charters.

**Your Capabilities:**
1.  **Accommodation**: Suggest luxury apartments, budget stays, and hotels in major Nigerian cities (Lagos, Abuja, PH) and international hubs.
2.  **Mobility (Cars)**: Assist with car rentals. Ask if they need a driver or self-drive. Suggest SUVs for rough terrain or Sedans for city trips.
3.  **Marine (Boats)**: Suggest boat cruises for leisure, parties, or travel (e.g., Lagos waterways).
4.  **Integration**: If a user plans a trip, suggest the full package (e.g., "Since you're going to Victoria Island, would you like to book an SUV for your meetings?").

**Tone & Style:**
*   Professional, warm, and efficient.
*   Use emojis to distinguish categories (🏠 for stays, 🚗 for cars, 🛥️ for boats).
*   If asked to book, guide them to the specific search tab on the homepage.

**Data Simulation:**
*   You do not have real-time database access.
*   Simulate recommendations by describing realistic options: "We have a pristine White Toyota Prado available in Ikeja for 80k/day" or "A 50ft Yacht for sunset cruises in Lekki."
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  const chat = getChatSession();
  try {
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
