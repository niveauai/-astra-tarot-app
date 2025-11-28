import React from 'react';
import { ArrowRight, Star, Heart, Eye } from 'lucide-react';
import { Button } from '../components/Button';
import { AppView } from '../types';

interface LandingProps {
    onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="mb-8 animate-float">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-600 rounded-full mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(255,215,0,0.4)]">
                    <Eye size={48} className="text-black opacity-80" />
                </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white drop-shadow-lg">
                Astra AI
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed">
                Descubre lo que el universo tiene reservado para ti. <br/>
                <strong className="text-amber-300">Tarot, Horóscopo y Amor</strong> interpretados por Inteligencia Artificial avanzada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center">
                    <Star className="text-amber-400 mb-3" size={32} />
                    <h3 className="font-bold text-lg">Horóscopo Preciso</h3>
                    <p className="text-sm text-gray-400 mt-2">Predicciones diarias basadas en tu carta astral simulada.</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center">
                    <Eye className="text-purple-400 mb-3" size={32} />
                    <h3 className="font-bold text-lg">Tarot IA</h3>
                    <p className="text-sm text-gray-400 mt-2">Lecturas de cartas instantáneas para tus dudas urgentes.</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center">
                    <Heart className="text-pink-400 mb-3" size={32} />
                    <h3 className="font-bold text-lg">Compatibilidad</h3>
                    <p className="text-sm text-gray-400 mt-2">Descubre si esa persona especial es tu alma gemela.</p>
                </div>
            </div>

            <Button onClick={onStart} className="text-xl px-10 py-4">
                <span className="flex items-center gap-2">
                    Comenzar Ahora <ArrowRight size={20} />
                </span>
            </Button>
            
            <p className="mt-6 text-xs text-gray-500">
                Más de 10,000 lecturas realizadas hoy.
            </p>
        </div>
    );
};