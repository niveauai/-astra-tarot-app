import React, { useState, useEffect } from 'react';
import { AppView, UserProfile, ZodiacSign } from './types';
import { Navbar } from './components/Navbar';
import { Landing } from './views/Landing';
import { Dashboard } from './views/Dashboard';
import { Tarot } from './views/Tarot';
import { Compatibility } from './views/Compatibility';
import { Premium } from './views/Premium';
import { ZODIAC_SIGNS } from './constants';
import { Button } from './components/Button';

const USER_STORAGE_KEY = 'astra_user_profile_v1';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<AppView>(AppView.Landing);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    // Initial user state
    const [user, setUser] = useState<UserProfile>({
        name: '',
        email: '',
        sign: ZodiacSign.Aries,
        birthDate: '',
        isPremium: false
    });

    // Load user from local storage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem(USER_STORAGE_KEY);
        if (savedUser) {
            try {
                const parsedUser = JSON.parse(savedUser);
                setUser(parsedUser);
                setCurrentView(AppView.Dashboard);
            } catch (e) {
                console.error("Failed to load user profile");
            }
        }
        setIsLoading(false);
    }, []);

    const handleStart = () => {
        setShowOnboarding(true);
    };

    const completeOnboarding = (name: string, email: string, sign: ZodiacSign, date: string) => {
        const newUser: UserProfile = { ...user, name, email, sign, birthDate: date };
        setUser(newUser);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
        setShowOnboarding(false);
        setCurrentView(AppView.Dashboard);
    };

    const renderView = () => {
        if (isLoading) return <div className="min-h-screen bg-cosmic-dark"></div>;

        if (showOnboarding) {
            return <Onboarding onComplete={completeOnboarding} />;
        }

        switch (currentView) {
            case AppView.Landing:
                return <Landing onStart={handleStart} />;
            case AppView.Dashboard:
                return <Dashboard user={user} setView={setCurrentView} />;
            case AppView.Tarot:
                return <Tarot />;
            case AppView.Compatibility:
                return <Compatibility />;
            case AppView.Premium:
                return <Premium user={user} />;
            default:
                return <Dashboard user={user} setView={setCurrentView} />;
        }
    };

    return (
        <div className="min-h-screen text-white font-sans selection:bg-amber-500 selection:text-black">
            {renderView()}
            <Navbar currentView={currentView} setView={setCurrentView} />
        </div>
    );
};

// Internal Onboarding Component
const Onboarding: React.FC<{ onComplete: (name: string, email: string, sign: ZodiacSign, date: string) => void }> = ({ onComplete }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sign, setSign] = useState<ZodiacSign>(ZodiacSign.Aries);
    const [date, setDate] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center p-6 animate-float">
            <div className="glass-panel p-8 rounded-3xl w-full max-w-md border border-white/20">
                <h2 className="text-2xl font-serif mb-6 text-center">Configura tu Perfil Astral</h2>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Nombre</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 outline-none focus:border-amber-400 transition-colors"
                            placeholder="Tu nombre mágico"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Correo Electrónico</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 outline-none focus:border-amber-400 transition-colors"
                            placeholder="cosmos@ejemplo.com"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Fecha de Nacimiento</label>
                        <input 
                            type="date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 outline-none focus:border-amber-400 transition-colors text-white scheme-dark"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Signo Solar</label>
                        <select 
                            value={sign}
                            onChange={(e) => setSign(e.target.value as ZodiacSign)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 outline-none focus:border-amber-400 transition-colors text-white"
                        >
                            {ZODIAC_SIGNS.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    <Button 
                        onClick={() => onComplete(name, email, sign, date)} 
                        disabled={!name || !email || !date}
                        className="w-full mt-6"
                    >
                        Entrar al Cosmos
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                        Tus datos se guardan localmente en tu dispositivo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;