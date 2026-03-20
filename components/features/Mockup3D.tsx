"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Mockup3DProps {
  image: string;
}

const Mockup3D: React.FC<Mockup3DProps> = ({ image }) => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 20, y: -15, scale: 0.9 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visibleRatio = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      
      const rotX = 25 - (visibleRatio * 25);
      const rotY = -25 + (visibleRatio * 25);
      const scale = 0.85 + (visibleRatio * 0.15);

      setRotation({ x: rotX, y: rotY, scale: scale });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center"
      style={{ perspective: '1200px' }} 
    >
      <div 
        className={`relative w-full rounded-xl overflow-hidden transition-shadow duration-300 ease-out border ${isDarkMode ? 'border-white/10 shadow-[0_20px_50px_rgba(99,102,241,0.2)]' : 'border-slate-200 shadow-[0_30px_60px_rgba(0,0,0,0.15)]'}`}
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${rotation.scale})`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out' 
        }}
      >
        <div className={`w-full h-8 flex items-center px-4 gap-2 border-b ${isDarkMode ? 'bg-[#1e293b] border-white/10' : 'bg-slate-200 border-slate-300'}`}>
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
        </div>
        
        <div className={`relative ${isDarkMode ? 'bg-[#0A0F1C]' : 'bg-white'}`}>
          <div className={`absolute inset-0 mix-blend-overlay transition-opacity duration-500 pointer-events-none ${isDarkMode ? 'bg-indigo-900/20' : 'bg-indigo-200/10'}`}></div>
          <img 
            src={image} 
            alt="Project Mockup" 
            className="w-full aspect-video object-cover object-top" 
            onError={(e) => { const target = e.target as HTMLImageElement; target.src = 'https://via.placeholder.com/800x450/0A0F1C/4F46E5?text=Proyecto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Mockup3D;
