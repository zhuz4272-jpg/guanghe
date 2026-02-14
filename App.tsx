import React, { useState, useEffect } from 'react';
import { LandingScreen } from './components/LandingScreen';
import { ResultScreen } from './components/ResultScreen';
import { AppState, PlantData } from './types';
import { Loader2 } from 'lucide-react';
import { SOUNDS, PLANT_RESULTS } from './constants';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [resultData, setResultData] = useState<PlantData>(PLANT_RESULTS[0]);

  const handleGenerate = () => {
    // Select a random plant before showing loading screen
    const randomIndex = Math.floor(Math.random() * PLANT_RESULTS.length);
    setResultData(PLANT_RESULTS[randomIndex]);
    setAppState('generating');
  };

  const handleReset = () => {
    // Optional: Reset to landing page for demo purposes
    setAppState('landing');
  };

  useEffect(() => {
    if (appState === 'generating') {
      const timer = setTimeout(() => {
        setAppState('result');
      }, 2500); // Simulate network request/processing
      return () => clearTimeout(timer);
    }

    if (appState === 'result') {
      // Play success/reveal sound
      const audio = new Audio(SOUNDS.SUCCESS);
      audio.volume = 0.6;
      audio.play().catch(e => console.debug("Audio play failed", e));
    }
  }, [appState]);

  if (appState === 'generating') {
    return (
      <div className="w-full h-[100dvh] bg-gradient-to-br from-violet-600 to-fuchsia-500 flex flex-col items-center justify-center text-white z-50 fixed inset-0">
        <div className="relative">
            <div className="absolute inset-0 bg-dopa-lime blur-xl opacity-50 animate-pulse rounded-full"></div>
            <Loader2 size={64} className="animate-spin text-white relative z-10" />
        </div>
        <p className="mt-8 font-black text-xl tracking-widest animate-pulse">正在吸收阳光...</p>
        <p className="text-xs mt-2 opacity-70 font-mono">PHOTOSYNTHESIS IN PROGRESS</p>
      </div>
    );
  }

  return (
    <div className="antialiased">
      {appState === 'landing' && <LandingScreen onGenerate={handleGenerate} />}
      {appState === 'result' && <ResultScreen data={resultData} onReset={handleReset} />}
    </div>
  );
};

export default App;