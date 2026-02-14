import React from 'react';
import { SOUNDS } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  fullWidth?: boolean;
  soundUrl?: string;
  quiet?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  fullWidth = false,
  soundUrl,
  quiet = false,
  onClick,
  ...props 
}) => {
  const baseStyles = "transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none border-2 border-black flex items-center justify-center font-bold";
  
  const variants = {
    primary: "bg-dopa-lime hover:bg-[#bfff00] text-black shadow-neobrutal rounded-2xl py-4",
    secondary: "bg-white text-black shadow-neobrutal-sm rounded-xl py-2 px-4 text-sm",
    icon: "w-12 h-12 rounded-full bg-white/20 backdrop-blur-md shadow-neobrutal-sm border-black/5 text-white hover:bg-white/30"
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!quiet) {
      try {
        const audio = new Audio(soundUrl || SOUNDS.CLICK);
        // Lower volume for UI clicks so they aren't annoying
        audio.volume = soundUrl ? 0.6 : 0.4;
        audio.play().catch(err => {
          // Auto-play policies might block this if not triggered by direct interaction, 
          // but inside an onClick it should be fine.
          console.debug('Audio playback failed', err);
        });
      } catch (error) {
        console.warn('Audio error', error);
      }
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
