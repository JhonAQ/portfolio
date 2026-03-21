"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { trajectory } from "@/data/education";
import { TrajectoryCard } from "@/components/ui/TrajectoryCard";

const Education = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="education"
      className={`relative py-20 overflow-hidden transition-colors duration-500 font-sans ${isDarkMode ? "bg-[#0A0F1C] text-slate-300" : "bg-slate-50 text-slate-600"}`}
    >
      <div
        className={`absolute inset-0 z-[-1] bg-[size:32px_32px] pointer-events-none transition-colors duration-500 ${isDarkMode ? "bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)]"}`}
      ></div>
      <div
        className={`absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] z-[-1] pointer-events-none transition-colors duration-1000 ${isDarkMode ? "bg-indigo-600/10" : "bg-indigo-300/30"}`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center md:text-left">
          <h2
            className={`text-4xl md:text-5xl font-bold transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            Trayectoria<span className="text-indigo-500">.</span>
          </h2>
          <p
            className={`mt-4 text-lg transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Mi camino profesional, logros académicos y experiencia colaborativa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto md:mx-0">
          <div
            className={`relative border-l-2 ml-4 md:ml-6 space-y-16 md:space-y-20 transition-colors ${isDarkMode ? "border-indigo-500/30" : "border-indigo-200"}`}
          >
            {trajectory.map((item, index) => (
              <TrajectoryCard key={index} item={item} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
