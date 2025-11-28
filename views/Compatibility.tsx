import React, { useState } from 'react';
import { ZodiacSign } from '../types';
import { ZODIAC_SIGNS } from '../constants';
import { getCompatibility } from '../services/geminiService';
import { Button } from '../components/Button';
import { Heart, Flame } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const Compatibility: React.FC = () => {
    const [sign1, setSign1] = useState<ZodiacSign>(ZodiacSign.Aries);
    const [sign2, setSign2] = useState<ZodiacSign>(ZodiacSign.Libra);
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleCalculate = async () => {
        setLoading(true);
        const text = await getCompatibility(sign1, sign2);
        setResult(text);
        setLoading(false);
    };

    return (
        <div className="pt-10 pb-24 px-4 max-w-4xl mx-auto min-h-screen flex flex-col items-center">
            <Heart className="text-pink-500 animate-pulse-slow mb-4" size={48} />
            <h2 className="text-3xl font-serif text-center mb-8">Compatibilidad Amorosa</h2>

            {!result ? (
                <div className="glass-panel p-8 rounded-3xl w-full max-w-md">
                    <div className="flex justify-between items-center gap-4 mb-6">
                        <div className="flex-1">
                            <label className="block text-xs text-gray-400 mb-1">Tu Signo</label>
                            <select 
                                value={sign1}
                                onChange={(e) => setSign1(e.target.value as ZodiacSign)}
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-pink-500"
                            >
                                {ZODIAC_SIGNS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <span className="text-2xl text-pink-500">+</span>
                        <div className="flex-1">
                            <label className="block text-xs text-gray-400 mb-1">Su Signo</label>
                            <select 
                                value={sign2}
                                onChange={(e) => setSign2(e.target.value as ZodiacSign)}
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-pink-500"
                            >
                                {ZODIAC_SIGNS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                    </div>

                    <Button onClick={handleCalculate} isLoading={loading} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-pink-500/20">
                        Calcular Amor
                    </Button>
                </div>
            ) : (
                <div className="glass-panel p-6 rounded-3xl w-full max-w-lg animate-float">
                    <div className="flex justify-center items-center gap-4 mb-6 border-b border-white/10 pb-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-400">{sign1}</div>
                        </div>
                        <Flame className="text-red-500 fill-red-500" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-400">{sign2}</div>
                        </div>
                    </div>
                    
                    <div className="prose prose-invert prose-sm max-w-none mb-6">
                        <ReactMarkdown>{result}</ReactMarkdown>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl text-center">
                        <p className="text-xs text-gray-300 mb-2">¿Quieres saber si durará para siempre?</p>
                        <Button variant="outline" className="text-xs py-2 w-full">
                            Ver Análisis de Matrimonio ($4.99)
                        </Button>
                    </div>

                    <button onClick={() => setResult(null)} className="mt-6 text-gray-500 text-sm w-full hover:text-white">
                        Calcular otra pareja
                    </button>
                </div>
            )}
        </div>
    );
};