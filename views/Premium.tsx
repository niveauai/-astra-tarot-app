import React from 'react';
import { UserProfile } from '../types';
import { Crown, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';
import { MONETIZATION_GUIDE } from '../constants';
import ReactMarkdown from 'react-markdown';

interface PremiumProps {
    user: UserProfile;
}

export const Premium: React.FC<PremiumProps> = ({ user }) => {
    
    const handlePurchase = (type: 'subscription' | 'one-time') => {
        // AQUÍ ES DONDE PONES TUS LINKS DE STRIPE REALES
        // Ejemplo:
        // if (type === 'subscription') window.open('https://buy.stripe.com/tu_link_suscripcion', '_blank');
        // else window.open('https://buy.stripe.com/tu_link_unico', '_blank');
        
        alert("En modo producción, esto redirigirá a tu Pasarela de Pago (Stripe/LemonSqueezy). Mira la guía abajo para configurarlo.");
    };

    return (
        <div className="pt-10 pb-24 px-4 max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-lg mb-4">
                    <Crown className="text-black" size={40} />
                </div>
                <h2 className="text-3xl font-serif font-bold">Astra Premium</h2>
                <p className="text-gray-400">Desbloquea todo tu potencial cósmico</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMENDADO</div>
                    <h3 className="text-xl font-bold mb-2">Suscripción Mística</h3>
                    <p className="text-3xl font-bold text-amber-300 mb-4">$9.99<span className="text-sm text-gray-400 font-normal">/mes</span></p>
                    <ul className="space-y-3 text-sm text-gray-300 mb-6">
                        <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-400"/> Horóscopo Extendido</li>
                        <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-400"/> Tiradas de Tarot Ilimitadas</li>
                        <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-400"/> Chat con Astrólogo IA 24/7</li>
                    </ul>
                    <Button onClick={() => handlePurchase('subscription')} className="w-full font-bold shadow-lg shadow-amber-500/20">
                        Suscribirse Ahora
                    </Button>
                </div>

                <div className="glass-panel p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Pase Diario</h3>
                    <p className="text-3xl font-bold text-white mb-4">$1.99<span className="text-sm text-gray-400 font-normal">/día</span></p>
                    <ul className="space-y-3 text-sm text-gray-300 mb-6">
                        <li className="flex items-center gap-2"><Zap size={16} className="text-blue-400"/> 3 Preguntas al Tarot</li>
                        <li className="flex items-center gap-2"><Zap size={16} className="text-blue-400"/> 1 Análisis de Compatibilidad</li>
                    </ul>
                    <Button onClick={() => handlePurchase('one-time')} variant="outline" className="w-full hover:bg-white hover:text-black">
                        Comprar Pase
                    </Button>
                </div>
            </div>

            {/* Admin/Developer Guide Section */}
            <div className="mt-16 p-6 bg-[#1a1638] rounded-xl border border-purple-500/30 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                    <ExternalLink className="text-amber-400" size={20} />
                    <h3 className="text-lg font-bold text-amber-100 uppercase tracking-widest">Guía de Monetización (Solo Admin)</h3>
                </div>
                <div className="prose prose-invert prose-sm max-w-none text-gray-300">
                    <ReactMarkdown>{MONETIZATION_GUIDE}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};