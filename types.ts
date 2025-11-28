
export enum ZodiacSign {
    Aries = "Aries",
    Taurus = "Taurus",
    Gemini = "Gemini",
    Cancer = "Cancer",
    Leo = "Leo",
    Virgo = "Virgo",
    Libra = "Libra",
    Scorpio = "Scorpio",
    Sagittarius = "Sagittarius",
    Capricorn = "Capricorn",
    Aquarius = "Aquarius",
    Pisces = "Pisces"
}

export type Language = 'es' | 'en' | 'de' | 'fr';

export enum AppView {
    Landing = 'LANDING',
    Dashboard = 'DASHBOARD',
    Horoscope = 'HOROSCOPE',
    Tarot = 'TAROT',
    Compatibility = 'COMPATIBILITY',
    Premium = 'PREMIUM',
    Terms = 'TERMS'
}

export interface TarotCard {
    name: string;
    image: string; // Placeholder URL
    keywords: string[];
}

export interface UserProfile {
    name: string;
    email: string;
    sign: ZodiacSign;
    birthDate: string;
    isPremium: boolean;
    language: Language;
}
