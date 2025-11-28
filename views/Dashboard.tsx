import React, { useEffect, useState } from 'react';
import { UserProfile, AppView } from '../types';
import { getHoroscope } from '../services/geminiService';
import { Button } from '../components/Button';
import { Sun, Moon, Heart, PlayCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface DashboardProps {
    user: UserProfile;
    setView: (view: AppView) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, setView }) => {
    const [horoscope, setHoroscope] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHoroscope = async () => {
            setLoading(true);
            const text = await getHoroscope(user.sign, user.name);
            setHoroscope(text);
            setLoading(false);
        };

        if (!horoscope) {
            fetchHoroscope();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="pb-24 pt-10 px-4 max-w-4xl mx-auto">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-serif">Hola, <span className="text-amber-300">{user.name}</span></h2>
                    <p className="text-gray-400 text-sm">Sol en {user.sign}</p>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <Sun className="text-amber-400" />
                </div>
            </header>

            {/* Daily Horoscope Card */}
            <section className="glass-panel p-6 rounded-3xl mb-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <Moon className="text-purple-300" size={20} /> Tu Horóscopo de Hoy
                </h3>
                
                <div className="prose prose-invert prose-sm max-w-none text-gray-200 leading-relaxed">
                    {loading ? (
                        <div className="animate-pulse flex flex-col gap-2">
                            <div className="h-4 bg-white/10 rounded w-3/4"></div>
                            <div className="h-4 bg-white/10 rounded w-full"></div>
                            <div className="h-4 bg-white/10 rounded w-5/6"></div>
                        </div>
                    ) : (
                        <ReactMarkdown>{horoscope || ''}</ReactMarkdown>
                    )}
                </div>
                
                {!loading && (
                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                        <span className="text-xs text-gray-400">Actualizado hace 1h</span>
                        <button className="text-xs text-amber-300 font-bold hover:underline">Ver Carta Astral (+)</button>
                    </div>
                )}
            </section>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
                <div 
                    onClick={() => setView(AppView.Tarot)}
                    className="glass-panel p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 cursor-pointer hover:bg-white/10 transition-colors group"
                >
                    <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🃏</span>
                    </div>
                    <h4 className="font-bold">Tarot AI</h4>
                    <p className="text-xs text-gray-400">Respuesta inmediata a tus dudas</p>
                </div>

                <div 
                    onClick={() => setView(AppView.Compatibility)}
                    className="glass-panel p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 cursor-pointer hover:bg-white/10 transition-colors group"
                >
                    <div className="w-14 h-14 rounded-full bg-pink-900/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Heart className="text-pink-400" />
                    </div>
                    <h4 className="font-bold">Amor Match</h4>
                    <p className="text-xs text-gray-400">Calculadora de almas gemelas</p>
                </div>
            </div>

            {/* Monetization Teaser */}
            <div className="mt-8 p-1 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600">
                <div className="bg-[#1a1638] rounded-xl p-5 text-center">
                    <h4 className="font-serif font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white mb-2">
                        ¿Quieres saber tu futuro a 5 años?
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">
                        Desbloquea el reporte completo de tránsito planetario.
                    </p>
                    <Button variant="primary" className="w-full py-2 text-sm">
                        <span className="flex items-center justify-center gap-2">
                            Desbloquear Premium <PlayCircle size={16} />
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};