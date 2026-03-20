"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const BackgroundEffects: React.FC = () => {
  const { isDarkMode } = useTheme();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false).current; // Simplified for now, full implementation would require context or event listeners

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.08;
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.08;

      if (spotlightRef.current) {
        const spotColor = isDarkMode ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.06)';
        spotlightRef.current.style.background = `radial-gradient(250px circle at ${delayedMouse.current.x}px ${delayedMouse.current.y}px, ${spotColor}, transparent 80%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, isHovering]);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`hidden sm:block pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border-2 z-[9999] transition-all duration-150 ease-out ${isDarkMode ? 'border-indigo-400' : 'border-indigo-600'} ${isHovering ? 'bg-indigo-500/20 backdrop-blur-sm' : 'bg-transparent'}`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-indigo-400' : 'bg-indigo-600'} ${isHovering ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}></div>
      </div>

       <div 
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 mix-blend-screen"
      />

      <div className={`fixed inset-0 z-[-2] transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0F1C]' : 'bg-slate-50'}`}></div>
      <div className={`fixed inset-0 z-[-1] bg-[size:32px_32px] transition-colors duration-500 ${isDarkMode ? 'bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)]'}`}></div>
      
      <div className={`fixed top-[-10%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full blur-[100px] md:blur-[150px] z-[-1] pointer-events-none animate-blob transition-colors duration-1000 ${isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-300/40'}`}></div>
      <div className={`fixed bottom-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full blur-[100px] md:blur-[150px] z-[-1] pointer-events-none animate-blob animation-delay-2000 transition-colors duration-1000 ${isDarkMode ? 'bg-blue-600/15' : 'bg-blue-300/40'}`}></div>
      <div className={`fixed top-[20%] left-[60%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] z-[-1] pointer-events-none animate-blob animation-delay-4000 transition-colors duration-1000 ${isDarkMode ? 'bg-purple-600/15' : 'bg-purple-300/40'}`}></div>
      
       <div 
        className={`pointer-events-none fixed inset-0 z-[60] mix-blend-overlay transition-opacity duration-500 ${isDarkMode ? 'opacity-[0.035]' : 'opacity-[0.02]'}`}
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />
    </>
  );
};

export default BackgroundEffects;
