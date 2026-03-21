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
      className={`py-24 border-t transition-colors duration-500 ${
        isDarkMode ? "border-white/5" : "border-slate-200"
      }`}
    >

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
              <TrajectoryCard
                key={index}
                item={item}
                isDarkMode={isDarkMode}
                priority={index < 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
