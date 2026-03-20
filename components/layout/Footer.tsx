"use client";

import React from "react";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import { navSections } from "@/data/constants";
import { useTheme } from "@/context/ThemeContext";

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className={`border-t pt-16 pb-8 relative overflow-hidden transition-colors duration-500 ${isDarkMode ? "bg-[#0A0F1C] border-white/5" : "bg-slate-100 border-slate-200"}`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span
              className={`font-bold text-3xl tracking-tight block mb-4 transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Jhon<span className="text-indigo-500">AQ.</span>
            </span>
            <p
              className={`text-sm leading-relaxed mb-6 max-w-sm transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
            >
              Desarrollador de Software especializado en crear soluciones
              digitales escalables, limpias y eficientes desde Arequipa, Perú,
              hacia el mundo.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/JhonAQ"
                target="_blank"
                rel="noreferrer"
                className={`hover:scale-110 transition-all p-2.5 rounded-full ${isDarkMode ? "text-slate-400 hover:text-white bg-white/5 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]" : "text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm"}`}
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/jhon-aq"
                target="_blank"
                rel="noreferrer"
                className={`hover:scale-110 transition-all p-2.5 rounded-full ${isDarkMode ? "text-slate-400 hover:text-white bg-white/5 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]" : "text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm"}`}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:jariasq@unsa.edu.pe"
                className={`hover:scale-110 transition-all p-2.5 rounded-full ${isDarkMode ? "text-slate-400 hover:text-white bg-white/5 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]" : "text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm"}`}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1 flex flex-col md:items-center">
            <div>
              <h4
                className={`font-bold mb-4 uppercase text-xs tracking-widest transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                Navegación
              </h4>
              <ul className="space-y-3">
                {navSections.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`text-sm font-medium transition-colors capitalize flex items-center gap-2 group ${isDarkMode ? "text-slate-400 hover:text-indigo-400" : "text-slate-600 hover:text-indigo-600"}`}
                    >
                      <span className="w-0 h-px bg-indigo-400 transition-all group-hover:w-3"></span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-1 flex flex-col md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group hover:-translate-y-2 ${isDarkMode ? "bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white border border-slate-200 hover:border-transparent shadow-sm hover:shadow-lg"}`}
              aria-label="Volver arriba"
            >
              <ChevronUp size={20} className="group-hover:animate-bounce" />
            </button>

            <div className="text-left md:text-right mt-8 md:mt-0">
              <h4
                className={`font-bold mb-2 uppercase text-xs tracking-widest transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                Status Actual
              </h4>
              <div
                className={`flex items-center gap-2 text-sm justify-start md:justify-end transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Disponible para contratación
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border-t pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4 transition-colors ${isDarkMode ? "border-white/5" : "border-slate-200"}`}
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jhonatan Arias Quispe. Todos los
            derechos reservados.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Hecho con <span className="text-indigo-500 font-medium">React</span>{" "}
            y mucha lógica.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
