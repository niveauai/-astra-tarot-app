import { GoogleGenAI } from "@google/genai";
import { ZodiacSign } from "../types";

// Initialize with environment variable
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHoroscope = async (sign: ZodiacSign, name: string): Promise<string> => {
    try {
        const model = "gemini-2.5-flash";
        const prompt = `
        Actúa como un astrólogo místico y empático con 20 años de experiencia.
        Genera un horóscopo diario para ${name}, que es del signo ${sign}.
        
        Estructura la respuesta en formato Markdown con:
        1. Una frase inspiradora corta.
        2. **Amor:** Predicción breve.
        3. **Dinero/Trabajo:** Consejo práctico.
        4. **Energía del día:** (Baja/Media/Alta) y un color de la suerte.
        
        El tono debe ser misterioso pero útil. Máximo 200 palabras.
        `;

        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });

        return response.text || "Los astros están nublados hoy, intenta más tarde.";
    } catch (error) {
        console.error("Error fetching horoscope:", error);
        return "No se pudo conectar con el cosmos. Verifica tu conexión o API Key.";
    }
};

export const getTarotReading = async (question: string, cards: string[], context: 'love' | 'general' | 'career'): Promise<string> => {
    try {
        const model = "gemini-2.5-flash";
        const prompt = `
        Eres una lectora de Tarot profesional y espiritual.
        El usuario ha preguntado: "${question}".
        Contexto de la lectura: ${context}.
        
        Las cartas que han salido son:
        1. Pasado/Causa: ${cards[0]}
        2. Presente/Situación: ${cards[1]}
        3. Futuro/Resultado: ${cards[2]}

        Interpreta estas cartas en conjunto relacionándolas con la pregunta del usuario.
        Sé directa pero compasiva. Si las cartas son negativas, ofrece un consejo constructivo.
        Usa formato Markdown.
        `;

        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });

        return response.text || "Las cartas guardan silencio por ahora.";
    } catch (error) {
        console.error("Error fetching tarot:", error);
        return "Error en la lectura mística. Intenta de nuevo.";
    }
};

export const getCompatibility = async (sign1: ZodiacSign, sign2: ZodiacSign): Promise<string> => {
    try {
        const model = "gemini-2.5-flash";
        const prompt = `
        Analiza la compatibilidad astrológica entre ${sign1} y ${sign2}.
        Dame un porcentaje de compatibilidad estimado.
        
        Desglosa en:
        - **Comunicación**
        - **Intimidad**
        - **Desafíos Mayores**
        
        Termina con un consejo para que la relación funcione. Sé realista y entretenido.
        `;

        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });

        return response.text || "Las estrellas no revelan esta unión hoy.";
    } catch (error) {
        console.error("Error fetching compatibility:", error);
        return "Error al calcular la alineación estelar.";
    }
};