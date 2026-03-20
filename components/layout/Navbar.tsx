"use client";

import React, { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { navSections } from "@/data/constants";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <nav
        className={`backdrop-blur-md border rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15)] px-6 py-3 flex justify-between items-center transition-all duration-300 relative ${isDarkMode ? "bg-[#111827]/90 border-white/5" : "bg-white/90 border-slate-200"}`}
      >
        <span
          className={`font-bold text-xl tracking-tight pl-2 transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
        >
          Jhon<span className="text-indigo-500">AQ.</span>
        </span>

        <div className="hidden lg:flex items-center">
          <div className="flex space-x-7 mr-6">
            {navSections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 ${activeSection === item.id ? "text-indigo-500" : isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 pl-6 border-l border-slate-700/30">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 ${isDarkMode ? "bg-white/5 text-yellow-400 hover:bg-white/10" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="/cv-jhonatan.pdf"
              download
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-indigo-500/25 ${isDarkMode ? "bg-white text-slate-900 hover:bg-indigo-50" : "bg-slate-900 text-white hover:bg-slate-800"}`}
            >
              <Download size={16} />
              <span>CV</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-full transition-colors ${isDarkMode ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100"}`}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menú Móvil */}
      <div
        className={`absolute top-full left-0 w-full mt-4 p-4 rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 origin-top ${isMobileMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"} ${isDarkMode ? "bg-[#111827]/95 border-white/10" : "bg-white/95 border-slate-200"}`}
      >
        <div className="flex flex-col space-y-2">
          {navSections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`p-4 rounded-xl text-left font-bold transition-all ${activeSection === item.id ? (isDarkMode ? "bg-indigo-500/20 text-indigo-400" : "bg-indigo-50 text-indigo-600") : isDarkMode ? "text-slate-300 hover:bg-white/5" : "text-slate-600 hover:bg-slate-50"}`}
            >
              {item.label}
            </button>
          ))}
          <div
            className={`h-px w-full my-2 ${isDarkMode ? "bg-white/10" : "bg-slate-200"}`}
          ></div>
          <div className="flex items-center justify-between p-2">
            <span
              className={`text-sm font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
            >
              Tema
            </span>
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all ${isDarkMode ? "bg-white/5 text-yellow-400" : "bg-slate-100 text-slate-700"}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <a
            href="/cv-jhonatan.pdf"
            download
            className={`flex items-center justify-center gap-2 p-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all mt-2 ${isDarkMode ? "bg-white text-slate-900" : "bg-slate-900 text-white"}`}
          >
            <Download size={18} />
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
