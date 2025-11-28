import React from 'react';
import { Sparkles, User, LayoutDashboard } from 'lucide-react';
import { AppView } from '../types';

interface NavbarProps {
    currentView: AppView;
    setView: (view: AppView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
    if (currentView === AppView.Landing) return null;

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-[#0f0c29]/90 backdrop-blur-lg border-t border-white/10 p-4 z-50 md:top-0 md:bottom-auto">
            <div className="max-w-4xl mx-auto flex justify-around items-center text-xs md:text-sm">
                <button 
                    onClick={() => setView(AppView.Dashboard)}
                    className={`flex flex-col items-center gap-1 ${currentView === AppView.Dashboard ? 'text-cosmic-gold' : 'text-gray-400 hover:text-white'}`}
                >
                    <LayoutDashboard size={24} />
                    <span>Inicio</span>
                </button>
                
                <button 
                    onClick={() => setView(AppView.Tarot)}
                    className={`flex flex-col items-center gap-1 ${currentView === AppView.Tarot ? 'text-cosmic-gold' : 'text-gray-400 hover:text-white'}`}
                >
                    <Sparkles size={24} />
                    <span>Tarot AI</span>
                </button>

                <button 
                    onClick={() => setView(AppView.Premium)}
                    className={`flex flex-col items-center gap-1 ${currentView === AppView.Premium ? 'text-cosmic-gold' : 'text-gray-400 hover:text-white'}`}
                >
                    <User size={24} />
                    <span>Perfil</span>
                </button>
            </div>
        </nav>
    );
};