import React, { useState, useRef } from 'react';
import { Download, Zap, ShieldAlert, Droplets, Sparkles, Eye, StopCircle, Sun, Coffee, Star, Camera, X, Share2, RefreshCw, Loader2, Save } from 'lucide-react';
import { IMAGES, SOUNDS } from '../constants';
import { PlantData } from '../types';
import { toPng } from 'html-to-image';

interface ResultScreenProps {
  onReset: () => void;
  data: PlantData;
}

// Helper component to render dynamic icons
const DynamicIcon = ({ name, size, className }: { name: string; size: number; className?: string }) => {
  switch (name) {
    case 'zap': return <Zap size={size} className={className} fill="currentColor" />;
    case 'shield-alert': return <ShieldAlert size={size} className={className} />;
    case 'eye': return <Eye size={size} className={className} />;
    case 'stop-circle': return <StopCircle size={size} className={className} />;
    case 'sun': return <Sun size={size} className={className} />;
    case 'coffee': return <Coffee size={size} className={className} />;
    case 'star': return <Star size={size} className={className} fill="currentColor" />;
    case 'camera': return <Camera size={size} className={className} />;
    default: return <Zap size={size} className={className} />;
  }
};

export const ResultScreen: React.FC<ResultScreenProps> = ({ onReset, data }) => {
  const { name, image, description, tags, number } = data;
  const [isWatering, setIsWatering] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleGeneratePoster = async () => {
    if (cardRef.current === null || isGenerating) return;

    setIsGenerating(true);
    // Sound effect
    try {
        const audio = new Audio(SOUNDS.CLICK);
        audio.volume = 0.4;
        audio.play().catch(e => console.debug(e));
    } catch (e) {
        // Ignore audio errors
    }

    try {
        // Wait a slight delay to ensure UI is ready if needed, then capture
        // CRITICAL: useCORS: true allows capturing images from external domains like Unsplash
        const dataUrl = await toPng(cardRef.current, { 
            cacheBust: true, 
            pixelRatio: 2,
            useCORS: true, 
            skipAutoScale: true,
            filter: (node) => {
                // Safely exclude the watering button
                if (node instanceof HTMLElement) {
                     return !node.classList.contains('exclude-from-capture');
                }
                return true;
            }
        });
        setPosterUrl(dataUrl);
    } catch (err) {
        console.error('Failed to generate poster', err);
        alert('生成图片失败，这可能是由于网络图片跨域限制。请重试。');
    } finally {
        setIsGenerating(false);
    }
  };

  const handleDownloadImage = () => {
    if (!posterUrl) return;
    const link = document.createElement('a');
    link.download = `oasis-plant-${Date.now()}.png`;
    link.href = posterUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWater = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isWatering) return;
    
    setIsWatering(true);
    try {
        const audio = new Audio(SOUNDS.WATER);
        audio.volume = 0.5;
        audio.play().catch(e => console.debug(e));
    } catch (e) {
        // Ignore audio errors
    }

    // Reset animation state after effect completes
    setTimeout(() => setIsWatering(false), 1500);
  };

  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-center bg-white overflow-hidden font-display text-gray-900 select-none touch-none">
      
      {/* Dopamine Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract Texture Background */}
         <div className="absolute inset-0 opacity-10 bg-repeat" 
             style={{ backgroundImage: `url(${IMAGES.TEXTURE_CUBES})`, backgroundSize: '300px' }}></div>
        
        {/* Blobs */}
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-dopa-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-dopa-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />
        <div className="absolute top-[40%] left-[30%] w-56 h-56 bg-dopa-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <main className="relative z-10 w-full max-w-md px-5 h-full flex flex-col items-center justify-center py-4">
        
        {/* Glass Card - The part we want to screenshot */}
        <div ref={cardRef} className="w-full bg-white/70 backdrop-blur-xl border-4 border-white rounded-[2rem] px-5 py-5 shadow-glow transform transition-all flex flex-col items-center text-center relative shrink-0">
          
          {/* Top Tag */}
          <div className="mb-3 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-black text-dopa-lime font-black text-xs tracking-wide shadow-neobrutal transform -rotate-2 border-2 border-white">
              <DynamicIcon name={tags[0].icon || 'zap'} size={14} className="mr-1.5 animate-pulse" />
              {tags[0].text}
            </div>
          </div>

          {/* Image Area - Responsive Height to fit screen */}
          <div className="relative h-[25vh] aspect-square mb-4 rounded-3xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-dopa-lime/20 to-dopa-cyan/20 border-4 border-white shadow-inner group">
             {/* Texture overlay */}
             <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `url(${IMAGES.TEXTURE_DIAMONDS})`, backgroundSize: '100px' }}></div>
             
             {/* Wrapper for breathing animation */}
             <div className="relative z-10 w-full h-full flex items-center justify-center animate-breathe p-4">
               <img 
                 src={image} 
                 alt={name} 
                 crossOrigin="anonymous" 
                 className={`w-full h-full object-cover rounded-2xl drop-shadow-2xl transition-all duration-500 filter contrast-110 saturate-125
                   ${isWatering ? 'scale-105 rotate-2 brightness-110' : 'hover:rotate-2 hover:scale-105'}`}
               />
             </div>

             {/* Water Effect Overlay */}
             {isWatering && (
               <div className="absolute inset-0 z-20 pointer-events-none">
                 <div className="absolute top-[20%] left-[45%] animate-bounce text-blue-400">
                   <Droplets size={24} fill="currentColor" />
                 </div>
                 <div className="absolute top-[30%] left-[25%] animate-bounce delay-100 text-cyan-400">
                   <Droplets size={16} fill="currentColor" />
                 </div>
                 <div className="absolute top-[25%] right-[30%] animate-bounce delay-75 text-blue-300">
                   <Droplets size={20} fill="currentColor" />
                 </div>
                 <div className="absolute bottom-[30%] right-[20%] animate-ping text-yellow-400">
                   <Sparkles size={32} fill="currentColor" />
                 </div>
                 <div className="absolute bottom-[20%] left-[20%] animate-pulse text-dopa-pink">
                   <Sparkles size={24} />
                 </div>
               </div>
             )}

             {/* Watering Button - Exclude from screenshot */}
             <div className="absolute bottom-2 right-2 z-30 exclude-from-capture">
               <button 
                 onClick={handleWater}
                 className="w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-neobrutal-sm flex items-center justify-center border-2 border-black active:scale-95 transition-all hover:bg-dopa-cyan group-hover:animate-bounce-slow"
                 aria-label="Water again for effect"
               >
                 <Droplets size={18} className="text-black fill-cyan-400" />
               </button>
             </div>
          </div>

          {/* Typography */}
          <h1 className="text-3xl font-black text-dopa-pink tracking-tight mb-2 drop-shadow-[2px_2px_0_#000]"
              style={{ WebkitTextStroke: '1.2px black', paintOrder: 'stroke fill' }}>
             {name}
          </h1>

          {/* Warning Tag */}
          <div className="inline-block transform rotate-1 mb-4">
            <div className="border-2 border-black rounded-xl px-4 py-1.5 bg-dopa-yellow shadow-neobrutal">
              <p className="text-xs font-bold text-black flex items-center justify-center gap-2">
                <DynamicIcon name={tags[1].icon || 'shield-alert'} size={16} className="text-red-600 fill-red-600/20" />
                {tags[1].text}
              </p>
            </div>
          </div>

          {/* Description Box */}
          <div className="w-full bg-white/60 rounded-xl p-3 backdrop-blur-sm border border-white/50 mb-4">
            <p className="text-gray-800 leading-relaxed font-sans text-xs font-bold line-clamp-3">
              {description}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full pt-3 border-t-2 border-dashed border-gray-300 flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            <span className="bg-gray-100 px-2 py-0.5 rounded">Oasis 绿洲</span>
            <span className="font-mono">NO. {number}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5 flex flex-col items-center gap-2 w-full shrink-0">
          <button 
            onClick={handleGeneratePoster}
            disabled={isGenerating}
            className="group flex flex-col items-center gap-2 transition-transform active:scale-95 relative"
            aria-label="Save result"
          >
            <div className={`w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-neobrutal border-2 border-white group-hover:bg-dopa-pink transition-colors relative overflow-hidden ${isGenerating ? 'cursor-wait' : ''}`}>
               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
               {isGenerating ? (
                 <Loader2 size={24} className="text-dopa-lime animate-spin" />
               ) : (
                 <Share2 size={24} className="text-dopa-lime group-hover:text-white transition-colors" strokeWidth={3} />
               )}
            </div>
            <span className="text-[10px] font-bold text-gray-800 bg-white/90 px-3 py-1 rounded-full backdrop-blur shadow-sm border border-white">
              {isGenerating ? '生成中...' : '生成保存卡片'}
            </span>
          </button>
          
          <button onClick={onReset} className="mt-1 text-[10px] font-bold text-gray-500 hover:text-black flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
            <RefreshCw size={10} />
            <span>寻找同类</span>
          </button>
        </div>

      </main>

      {/* Fullscreen Poster Overlay */}
      {posterUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 animate-in fade-in duration-200">
           <div className="relative w-full max-w-md animate-in zoom-in-95 duration-300 flex flex-col items-center">
              <button 
                onClick={() => setPosterUrl(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm active:scale-90 transition-transform"
              >
                <X size={20} />
              </button>
              
              <div className="bg-white rounded-[2.5rem] p-2 shadow-2xl rotate-1 w-full max-h-[70vh] flex items-center justify-center overflow-hidden">
                 <img src={posterUrl} alt="Result Card" className="w-full h-auto object-contain rounded-[2rem] border-2 border-gray-100" />
              </div>

              <div className="mt-6 text-center w-full space-y-4">
                 {/* Primary Instruction */}
                 <div className="inline-block bg-dopa-lime text-black px-6 py-2 rounded-full font-black text-sm shadow-neobrutal border-2 border-black animate-bounce">
                    长按图片保存到相册
                 </div>
                 
                 {/* Secondary Actions */}
                 <div className="flex gap-4 justify-center items-center">
                    <button 
                        onClick={handleDownloadImage}
                        className="text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors border border-white/10"
                    >
                        <Save size={14} /> 保存原图
                    </button>
                    <button onClick={onReset} className="text-white/70 hover:text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors">
                        <RefreshCw size={14} /> 再测一次
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};