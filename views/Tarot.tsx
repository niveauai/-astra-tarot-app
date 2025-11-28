import React, { useState } from 'react';
import { Button } from '../components/Button';
import { TAROT_DECK } from '../constants';
import { TarotCard } from '../types';
import { getTarotReading } from '../services/geminiService';
import { Shuffle, Sparkles, Lock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const Tarot: React.FC = () => {
    const [step, setStep] = useState<'input' | 'shuffle' | 'reveal' | 'reading'>('input');
    const [question, setQuestion] = useState('');
    const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
    const [interpretation, setInterpretation] = useState('');
    const [loadingAI, setLoadingAI] = useState(false);

    const handleStart = () => {
        if (!question.trim()) return;
        setStep('shuffle');
        setTimeout(() => {
            drawCards();
            setStep('reveal');
        }, 2000);
    };

    const drawCards = () => {
        // Randomly select 3 unique cards
        const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
        setSelectedCards(shuffled.slice(0, 3));
    };

    const handleInterpret = async () => {
        setLoadingAI(true);
        const cardNames = selectedCards.map(c => c.name);
        const text = await getTarotReading(question, cardNames, 'general');
        setInterpretation(text);
        setLoadingAI(false);
        setStep('reading');
    };

    const handleUpsell = () => {
         // Aquí iría el link de Stripe para una lectura más profunda
         alert("Redirigiendo a Stripe para desbloquear lectura profunda...");
         // window.open('https://buy.stripe.com/....', '_blank');
    };

    return (
        <div className="pt-10 pb-24 px-4 max-w-4xl mx-auto min-h-screen">
            <h2 className="text-3xl font-serif text-center mb-2 text-amber-100">Oráculo Tarot</h2>
            
            {step === 'input' && (
                <div className="flex flex-col items-center animate-float mt-10">
                    <div className="w-full max-w-md">
                        <label className="block text-gray-400 mb-2 text-sm text-center">Concéntrate en tu pregunta</label>
                        <textarea 
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="¿Volverá mi ex? ¿Conseguiré ese trabajo? ¿Qué me depara el destino?"
                            className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-center text-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none h-32 mb-6 resize-none"
                        />
                        <Button onClick={handleStart} disabled={!question} className="w-full">
                            Barajar Cartas
                        </Button>
                    </div>
                </div>
            )}

            {step === 'shuffle' && (
                <div className="flex flex-col items-center justify-center h-64">
                    <Shuffle className="text-amber-400 animate-spin mb-4" size={48} />
                    <p className="text-xl font-serif animate-pulse">Conectando con tu energía...</p>
                </div>
            )}

            {(step === 'reveal' || step === 'reading') && (
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-3 gap-2 md:gap-4 w-full mb-8">
                        {selectedCards.map((card, idx) => (
                            <div key={idx} className="flex flex-col items-center opacity-0 animate-[pulse_0.5s_ease-out_forwards]" style={{ animationDelay: `${idx * 0.3}s`, animationFillMode: 'forwards' }}>
                                <div className="aspect-[2/3] bg-black/40 rounded-lg border-2 border-amber-500/30 p-1 relative overflow-hidden w-full">
                                    <img src={card.image} alt={card.name} className="w-full h-full object-cover rounded opacity-60" />
                                    <div className="absolute bottom-0 left-0 w-full bg-black/80 text-center text-[10px] md:text-xs py-1 font-bold text-amber-100">
                                        {card.name}
                                    </div>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">
                                    {idx === 0 ? 'Pasado' : idx === 1 ? 'Presente' : 'Futuro'}
                                </span>
                            </div>
                        ))}
                    </div>

                    {step === 'reveal' && (
                        <Button onClick={handleInterpret} isLoading={loadingAI} className="animate-bounce mt-4">
                            <span className="flex items-center gap-2">
                                <Sparkles size={18} /> Interpretar Cartas
                            </span>
                        </Button>
                    )}

                    {step === 'reading' && (
                        <div className="glass-panel p-6 rounded-2xl w-full animate-[float_4s_ease-in-out_1]">
                            <h3 className="text-lg font-serif text-amber-300 mb-4 border-b border-white/10 pb-2">La Respuesta del Universo</h3>
                            <div className="prose prose-invert prose-sm max-w-none text-gray-200">
                                <ReactMarkdown>{interpretation}</ReactMarkdown>
                            </div>
                            
                            <div className="mt-8 p-5 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-xl border border-amber-500/30 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                                <p className="text-sm mb-3 text-amber-100">¿La respuesta fue muy general?</p>
                                <p className="text-xs text-gray-400 mb-4">Obtén detalles específicos sobre fechas y nombres.</p>
                                <Button onClick={handleUpsell} variant="primary" className="text-sm py-2 px-4 w-full md:w-auto shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                    <span className="flex items-center justify-center gap-2">
                                        <Lock size={14} /> Desbloquear Lectura Profunda ($1.99)
                                    </span>
                                </Button>
                            </div>

                            <button onClick={() => setStep('input')} className="mt-6 text-gray-400 text-sm hover:text-white w-full text-center underline decoration-gray-600">
                                Hacer otra pregunta
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};