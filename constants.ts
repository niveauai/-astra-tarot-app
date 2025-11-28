
import { ZodiacSign, TarotCard, Language } from './types';

export const ZODIAC_SIGNS = Object.values(ZodiacSign);

export const TAROT_DECK: TarotCard[] = [
    { name: "The Fool", image: "https://picsum.photos/seed/fool/300/500", keywords: ["Start", "Spontaneity", "Faith"] },
    { name: "The Magician", image: "https://picsum.photos/seed/magician/300/500", keywords: ["Power", "Skill", "Action"] },
    { name: "The High Priestess", image: "https://picsum.photos/seed/priestess/300/500", keywords: ["Intuition", "Mystery", "Subconscious"] },
    { name: "The Empress", image: "https://picsum.photos/seed/empress/300/500", keywords: ["Fertility", "Nature", "Abundance"] },
    { name: "The Emperor", image: "https://picsum.photos/seed/emperor/300/500", keywords: ["Authority", "Structure", "Control"] },
    { name: "The Hierophant", image: "https://picsum.photos/seed/hierophant/300/500", keywords: ["Tradition", "Beliefs", "Conformity"] },
    { name: "The Lovers", image: "https://picsum.photos/seed/lovers/300/500", keywords: ["Love", "Union", "Decisions"] },
    { name: "The Chariot", image: "https://picsum.photos/seed/chariot/300/500", keywords: ["Control", "Will", "Victory"] },
    { name: "Strength", image: "https://picsum.photos/seed/strength/300/500", keywords: ["Courage", "Persuasion", "Influence"] },
    { name: "The Hermit", image: "https://picsum.photos/seed/hermit/300/500", keywords: ["Introspection", "Solitude", "Guidance"] },
    { name: "Wheel of Fortune", image: "https://picsum.photos/seed/wheel/300/500", keywords: ["Luck", "Karma", "Cycles"] },
    { name: "Justice", image: "https://picsum.photos/seed/justice/300/500", keywords: ["Justice", "Truth", "Law"] },
    { name: "The Hanged Man", image: "https://picsum.photos/seed/hanged/300/500", keywords: ["Pause", "Surrender", "New Perspective"] },
    { name: "Death", image: "https://picsum.photos/seed/death/300/500", keywords: ["Endings", "Change", "Transformation"] },
    { name: "Temperance", image: "https://picsum.photos/seed/temperance/300/500", keywords: ["Balance", "Moderation", "Patience"] },
    { name: "The Devil", image: "https://picsum.photos/seed/devil/300/500", keywords: ["Shadow Self", "Attachment", "Restriction"] },
    { name: "The Tower", image: "https://picsum.photos/seed/tower/300/500", keywords: ["Sudden Change", "Upheaval", "Awakening"] },
    { name: "The Star", image: "https://picsum.photos/seed/star/300/500", keywords: ["Hope", "Faith", "Purpose"] },
    { name: "The Moon", image: "https://picsum.photos/seed/moon/300/500", keywords: ["Illusion", "Fear", "Subconscious"] },
    { name: "The Sun", image: "https://picsum.photos/seed/sun/300/500", keywords: ["Positivity", "Fun", "Warmth"] },
    { name: "Judgement", image: "https://picsum.photos/seed/judgement/300/500", keywords: ["Judgement", "Rebirth", "Inner Calling"] },
    { name: "The World", image: "https://picsum.photos/seed/world/300/500", keywords: ["Completion", "Integration", "Accomplishment"] }
];

export const MONETIZATION_GUIDE = `
# 🚀 Guía Maestra para Ganar $2,500/mes

## Paso 1: Configurar Pagos (El Dinero)
1. Ve a **Stripe.com** y crea una cuenta.
2. Crea un producto "Lectura Premium" ($4.99).
3. Crea un producto "Suscripción Astral" ($9.99/mes).
4. Ve a "Payment Links" y copia los enlaces.
5. Pégalos en el código (archivo \`views/Premium.tsx\`).

## Paso 2: Publicar la App (Gratis)
1. Crea una cuenta en **GitHub.com** y sube este código. (Nombre del repo: \`astra-ai-tarot\`)
2. Crea una cuenta en **Vercel.com**.
3. Importa tu proyecto de GitHub.
4. En "Environment Variables", añade \`API_KEY\` con tu llave de Gemini.
5. Dale a **Deploy**. ¡Ya tienes web!

## Paso 3: Publicar en Google Play Store
1. Copia tu URL de Vercel.
2. Ve a **PWABuilder.com**.
3. Pega la URL y descarga el paquete para Android.
4. Sube ese archivo a la Google Play Console.

## Paso 4: Marketing Viral (Tráfico Gratuito)
1. **TikTok/Reels:** Graba la pantalla de la opción "Compatibilidad".
2. Pon dos signos famosos (ej: Shakira y Piqué).
3. Muestra el resultado y di: *"¿Quieres saber si eres compatible con tu crush? Link en mi perfil"*.
4. Repite esto 1 vez al día.
`;
