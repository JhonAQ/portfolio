"use client";

import React, { useState, useRef, useEffect } from "react";
import { Download, ChevronDown } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface DownloadCVProps {
  className?: string;
  styleType: "hero" | "navbar";
}

const DownloadCV: React.FC<DownloadCVProps> = ({ className, styleType }) => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cvOptions = [
    { label: "Español (CV)", file: "/pdf/Jhonatan-Arias-CV.pdf" },
    { label: "English (Resume)", file: "/pdf/Resume-Jhonatan-Arias.pdf" },
  ];

  // Base styles depending on where it's used
  const heroClasses = `bg-transparent border px-7 py-3 rounded-md font-bold transition-all flex items-center gap-2 hover:-translate-y-1 uppercase text-[13px] tracking-wide ${
    isDarkMode
      ? "border-white/20 text-white hover:bg-white/5 hover:border-indigo-400"
      : "border-slate-300 text-slate-900 hover:bg-slate-100 hover:border-indigo-500"
  }`;

  const navbarClasses = `flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-indigo-500/25 ${
    isDarkMode
      ? "bg-white text-slate-900 hover:bg-indigo-50"
      : "bg-slate-900 text-white hover:bg-slate-800"
  }`;

  const buttonClasses = styleType === "hero" ? heroClasses : navbarClasses;

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${buttonClasses} ${className || ""}`}
      >
        {styleType === "navbar" && <Download size={16} />}
        <span>{styleType === "hero" ? "Descargar CV" : "CV"}</span>
        {styleType === "hero" && <Download size={18} />}
        {styleType === "navbar" && (
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>

      <div
        className={`absolute top-full mt-2 min-w-[180px] rounded-xl border backdrop-blur-xl shadow-xl z-50 overflow-hidden flex flex-col py-1 transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        } ${styleType === "navbar" ? "right-0" : "left-0"} ${
          isDarkMode
            ? "bg-[#111827]/95 border-white/10"
            : "bg-white/95 border-slate-200"
        }`}
      >
        <span
          className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${
            isDarkMode ? "text-slate-500" : "text-slate-400"
          }`}
        >
          Seleccionar Idioma
        </span>
        {cvOptions.map((option) => (
          <a
            key={option.file}
            href={option.file}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2.5 text-sm font-medium transition-colors hover:bg-indigo-500 hover:text-white flex items-center justify-between group ${
              isDarkMode ? "text-slate-300" : "text-slate-700"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {option.label}
            <Download
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default DownloadCV;
