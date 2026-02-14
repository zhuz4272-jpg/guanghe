import React from 'react';
import { ArrowLeft, MoreHorizontal, Sun, Droplets, Star, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { IMAGES, SOUNDS } from '../constants';

interface LandingScreenProps {
  onGenerate: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({ onGenerate }) => {
  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white overflow-hidden font-sans touch-none">
      
      {/* Background Floating Bubbles */}
      <div className="absolute top-10 -right-5 w-32 h-32 rounded-full bg-white/10 blur-xl animate-float pointer-events-none" />
      <div className="absolute bottom-32 -left-5 w-24 h-24 rounded-full bg-blue-400/20 blur-xl animate-float-delayed pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-md px-6 pt-6 pb-2 flex justify-between items-center z-10 shrink-0">
        <Button variant="icon" aria-label="Go back" className="w-10 h-10">
          <ArrowLeft size={20} />
        </Button>
        
        <div className="px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full border border-white/20">
          <h1 className="text-[10px] font-black tracking-[0.2em] text-white uppercase drop-shadow-sm">
            绿洲 · 今日光合作用
          </h1>
        </div>

        <Button variant="icon" aria-label="Menu" className="w-10 h-10">
          <MoreHorizontal size={20} />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md flex flex-col items-center justify-center relative z-10 px-6 min-h-0">
        
        {/* Seed Container - Responsive size based on viewport height */}
        <div className="relative w-[32vh] h-[32vh] max-w-[280px] max-h-[280px] aspect-square flex items-center justify-center mb-4 group perspective-1000 shrink-0">
          
          {/* Glow behind */}
          <div className="absolute inset-0 m-auto w-[90%] h-[90%] bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-500 rounded-full blur-[40px] opacity-70 animate-pulse-fast" />
          
          {/* Card/Image Container */}
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/10 border-4 border-white/40 backdrop-blur-md transform transition-transform duration-500 hover:rotate-3 animate-float">
            <img 
              src={IMAGES.SEED} 
              alt="Seed in sand" 
              crossOrigin="anonymous"
              className="w-full h-full object-cover scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/40 via-transparent to-white/20 pointer-events-none" />
          </div>

          {/* Floating Icons */}
          <div className="absolute -top-2 right-4 w-12 h-12 bg-dopa-lime rounded-full border-2 border-white shadow-lg animate-bounce-slow flex items-center justify-center z-20">
            <Sun size={24} className="text-black" strokeWidth={2.5} />
          </div>
          
          <div className="absolute bottom-4 left-0 w-10 h-10 bg-dopa-purple rounded-full border-2 border-white shadow-lg animate-float-delayed flex items-center justify-center z-20">
            <Droplets size={16} className="text-white fill-current" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-3 relative z-20 shrink-0">
          <div className="inline-block px-3 py-1 bg-black text-white rounded-full transform -rotate-2 shadow-lg">
            <p className="text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={10} className="text-dopa-yellow" /> 
              休眠状态 SLEEPING 
              <Sparkles size={10} className="text-dopa-yellow" />
            </p>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-md leading-tight">
            今日缺水？<br/>
            缺阳光？还是缺个朋友？
          </h2>
          
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-xl inline-block border border-white/10">
            <p className="text-xs text-white/90 font-bold tracking-wide flex items-center gap-2">
              <span className="text-base">🌱</span> 运势正在土壤中酝酿...
            </p>
          </div>
        </div>
      </main>

      {/* Footer / Action */}
      <footer className="w-full max-w-md px-6 pb-8 pt-2 flex flex-col items-center gap-4 z-20 shrink-0">
        <Button 
          onClick={onGenerate} 
          fullWidth 
          className="relative h-18 py-0 overflow-visible group"
          soundUrl={SOUNDS.WATER}
          aria-label="Water the seed to generate your plant personality"
        >
           {/* Badge on button */}
           <div className="absolute -top-2 -right-2 w-7 h-7 bg-dopa-pink rounded-full border-2 border-black flex items-center justify-center animate-bounce z-10">
              <Star size={12} className="text-white fill-white" />
           </div>
           
           <div className="flex items-center gap-3">
             <Droplets size={26} className="text-black fill-black/10" strokeWidth={2.5} />
             <div className="flex flex-col items-start text-black">
               <span className="text-lg font-black tracking-wide">浇水唤醒</span>
               <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">生成 · Generate</span>
             </div>
           </div>
        </Button>

        <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-white/70">
          <span className="w-1 h-1 bg-white rounded-full" />
          <span>绿洲APP</span>
          <span className="w-1 h-1 bg-white rounded-full" />
        </div>
      </footer>
    </div>
  );
};