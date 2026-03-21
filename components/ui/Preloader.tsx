"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Code2, Terminal } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const { isDarkMode } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("Initializing system...");

  const loadingTexts = [
    "Compiling assets...",
    "Optimizing performance...",
    "Connecting to server...",
    "Loading portfolio data...",
    "Ready to launch...",
  ];

  useEffect(() => {
    // Bloquear scroll
    document.body.style.overflow = "hidden";

    // Texto cambiante
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setText(loadingTexts[randomIndex]);
    }, 400);

    // Progreso
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 20 + 5; // Aumentar velocidad (5 a 25)
        const newProgress = Math.min(prev + increment, 100);

        if (newProgress === 100) {
          clearInterval(interval);
          clearInterval(textInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              document.body.style.overflow = "unset";
              onComplete();
            }, 300); // Reducir tiempo de transición final
          }, 300); // Reducir tiempo de espera final
        }
        
        return newProgress;
      });
    }, 100); // Reducir intervalo de actualización (100ms)

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${isDarkMode ? "bg-[#0A0F1C] text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="relative mb-8 flex flex-col items-center">
        <div className="relative flex items-center justify-center w-24 h-24 mb-4">
          <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full animate-ping"></div>
          <div className="absolute inset-0 border-4 border-t-indigo-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <Code2 size={40} className="text-indigo-500 animate-pulse" />
        </div>

        <h1 className="text-4xl font-bold tracking-tighter text-center">
          Jhon<span className="text-indigo-500">AQ.</span>
        </h1>
      </div>

      <div className="w-64 md:w-80 space-y-2">
        {/* Barra de progreso */}
        <div
          className={`h-1 w-full rounded-full overflow-hidden ${isDarkMode ? "bg-slate-800" : "bg-slate-200"}`}
        >
          <div
            className="h-full bg-indigo-500 transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_1s_infinite] translate-x-[-100%]"></div>
          </div>
        </div>

        <div className="flex justify-between text-xs font-mono opacity-60">
          <span>{text}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] animate-pulse delay-700"></div>
      </div>
    </div>
  );
};

export default Preloader;
