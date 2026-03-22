"use client";

import React from "react";
import {
  ArrowRight,
  Download,
  Globe,
  Database,
  Code2,
  Cpu,
} from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { roles } from "@/data/constants";
import { useTheme } from "@/context/ThemeContext";
import DownloadCV from "@/components/ui/DownloadCV";
import { sendGAEvent } from "@next/third-parties/google";

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentText = useTypewriter(roles);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 md:pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-[100dvh] flex flex-col justify-center relative"
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8">
        <div className="max-w-2xl flex-1 animate-fade-in-up">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2 transition-all duration-300 ${isDarkMode ? "text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "text-slate-900"}`}
          >
            Hola, soy Jhonatan<span className="text-indigo-500">.</span>
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-indigo-500 md:text-indigo-400 mb-6 min-h-[50px] md:min-h-[60px] block">
            <span>Soy {currentText}</span>
            <span
              className={`inline-block w-[3px] h-[30px] md:h-[45px] bg-indigo-500 ml-1 cursor-blink align-text-bottom ${isDarkMode ? "shadow-[0_0_8px_rgba(99,102,241,0.8)]" : ""}`}
            ></span>
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            <span
              className={`px-4 py-1.5 rounded-full border text-sm font-medium cursor-default transition-colors ${isDarkMode ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-200" : "border-indigo-200 bg-indigo-50 text-indigo-700"}`}
            >
              2+ años de experiencia
            </span>
            <span
              className={`px-4 py-1.5 rounded-full border text-sm font-medium cursor-default transition-colors ${isDarkMode ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-200" : "border-indigo-200 bg-indigo-50 text-indigo-700"}`}
            >
              Disponible para proyectos
            </span>
            <span
              className={`px-4 py-1.5 rounded-full border text-sm font-medium cursor-default transition-colors ${isDarkMode ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-200" : "border-indigo-200 bg-indigo-50 text-indigo-700"}`}
            >
              Trabajando globalmente
            </span>
          </div>

          <p
            className={`text-lg mb-10 max-w-xl leading-relaxed transition-colors duration-300 ${isDarkMode ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900"}`}
          >
            Construyo aplicaciones web, sistemas robustos y herramientas
            digitales eficientes, con un enfoque en la confiabilidad, el
            rendimiento y escribir código limpio.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                scrollToContact();
                sendGAEvent("event", "contact_click", { method: "Hero Button" });
              }}
              className={`px-7 py-3 rounded-md font-bold transition-all flex items-center gap-2 hover:-translate-y-1 uppercase text-[13px] tracking-wide ${isDarkMode ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.2)]" : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-[0_4px_14px_rgba(99,102,241,0.3)]"}`}
            >
              Ponerse en contacto <ArrowRight size={18} />
            </button>

            <DownloadCV styleType="hero" />
          </div>
        </div>

        <div className="relative flex-shrink-0 animate-fade-in-up animation-delay-200 mb-6 md:mb-0 mr-4 md:mr-10">
          <div
            className={`relative w-56 h-56 md:w-[320px] md:h-[320px] rounded-full p-2 transition-all duration-500 z-10 ${isDarkMode ? "bg-indigo-500/10 shadow-[0_0_50px_rgba(99,102,241,0.2)]" : "bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)]"}`}
          >
            <div
              className={`w-full h-full rounded-full overflow-hidden relative group border-[6px] ${isDarkMode ? "border-[#0A0F1C]" : "border-white"}`}
            >
              <img
                src="https://avatars.githubusercontent.com/u/139652922?s=400&u=6318f8c516349a9e69365efb64eb177506be0b1d&v=4"
                alt="Jhonatan Arias"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 pointer-events-none ${isDarkMode ? "bg-indigo-900/10" : "bg-indigo-300/10"}`}
              ></div>
            </div>
          </div>

          <div
            className={`absolute top-4 -left-6 md:-left-8 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center animate-float-1 z-20 transition-all ${isDarkMode ? "bg-[#111827] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-slate-300" : "bg-white border border-slate-100 shadow-xl text-slate-700"}`}
          >
            <Globe size={24} strokeWidth={1.5} />
          </div>

          <div
            className={`absolute bottom-10 -left-2 md:-left-4 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center animate-float-2 z-20 transition-all ${isDarkMode ? "bg-[#111827] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-slate-300" : "bg-white border border-slate-100 shadow-xl text-slate-700"}`}
          >
            <Database size={20} strokeWidth={1.5} />
          </div>

          <div
            className={`absolute top-12 -right-4 md:-right-8 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center animate-float-3 z-20 transition-all ${isDarkMode ? "bg-[#111827] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-slate-300" : "bg-white border border-slate-100 shadow-xl text-slate-700"}`}
          >
            <Code2 size={24} strokeWidth={1.5} />
          </div>

          <div
            className={`absolute bottom-6 -right-2 md:-right-6 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center animate-float-1 z-20 transition-all ${isDarkMode ? "bg-[#111827] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-slate-300" : "bg-white border border-slate-100 shadow-xl text-slate-700"}`}
            style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
          >
            <Cpu size={20} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
