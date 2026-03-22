"use client";

import React from "react";
import { Terminal } from "lucide-react";
import { groupedSkills, allSkills } from "@/data/skills";
import { useTheme } from "@/context/ThemeContext";
import { useLocale } from "@/context/LocaleContext";

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { dictionary } = useLocale();

  return (
    <section
      id="about"
      className={`py-24 border-t transition-colors duration-500 ${isDarkMode ? "border-white/5" : "border-slate-200"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div
            className={`md:col-span-2 space-y-6 text-lg leading-relaxed reveal delay-100 transition-colors duration-300 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <div className="mb-8 reveal">
              <h2
                className={`text-4xl md:text-5xl font-bold transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                {dictionary.about.title}
                <span className="text-indigo-500">.</span>
              </h2>
            </div>

            <p
              className={
                isDarkMode
                  ? "hover:text-slate-200 transition-colors duration-300"
                  : "hover:text-slate-900 transition-colors duration-300"
              }
            >
              {dictionary.about.intro}
            </p>
            <p
              className={
                isDarkMode
                  ? "hover:text-slate-200 transition-colors duration-300"
                  : "hover:text-slate-900 transition-colors duration-300"
              }
            >
              {dictionary.about.body}
            </p>
          </div>

          <div
            className={`md:col-span-3 reveal delay-200 pl-0 md:pl-8 lg:pl-0`}
          >
            <h3
              className={`text-2xl font-bold mb-8 flex items-center md:items-start md:pt-4 gap-3 transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              <Terminal className="text-indigo-500 mt-1 md:mt-0" size={28} />
              <span className="flex-1">{dictionary.about.arsenal}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {Object.entries(groupedSkills).map(
                ([category, skillsGroup], idx) => (
                  <div key={idx} className={idx === 0 ? "sm:col-span-2" : ""}>
                    <h4
                      className={`text-xs font-bold uppercase tracking-widest mb-3 transition-colors ${isDarkMode ? "text-indigo-400/80" : "text-indigo-600/80"}`}
                    >
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {skillsGroup.map((skill, index) => (
                        <span
                          key={index}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium text-xs border transition-all duration-300 cursor-default group hover:-translate-y-1 ${isDarkMode ? "bg-white/5 text-slate-300 border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:text-white hover:shadow-[0_5px_15px_rgba(99,102,241,0.2)]" : "bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 shadow-sm hover:shadow-md"}`}
                        >
                          <img
                            src={
                              (isDarkMode
                                ? skill.dark || skill.light
                                : skill.light) || ""
                            }
                            alt={skill.name}
                            className={`w-3.5 h-3.5 transition-all opacity-80 group-hover:opacity-100 ${isDarkMode ? "brightness-0 invert group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" : ""}`}
                            onError={(e) => {
                              const target = e.target as HTMLElement;
                              target.style.display = "none";
                            }}
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Carrusel Infinito */}
      <div
        className="relative w-full py-10 mt-16 overflow-hidden flex items-center reveal delay-300"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex w-max animate-scroll">
          <div className="flex gap-10 md:gap-14 px-5 md:px-7 items-center justify-center">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-300 cursor-pointer group flex items-center justify-center min-w-[4rem] md:min-w-[5rem] ${isDarkMode ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" : ""}`}
                title={skill.name}
              >
                <img
                  src={
                    (isDarkMode ? skill.dark || skill.light : skill.light) || ""
                  }
                  alt={skill.name}
                  className={`h-14 md:h-20 w-auto transform group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? "brightness-0 invert" : ""}`}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-10 md:gap-14 px-5 md:px-7 items-center justify-center">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={`clone-${index}`}
                className={`transition-all duration-300 cursor-pointer group flex items-center justify-center min-w-[4rem] md:min-w-[5rem] ${isDarkMode ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" : ""}`}
                title={skill.name}
              >
                <img
                  src={isDarkMode ? skill.dark : skill.light}
                  alt={skill.name}
                  className={`h-14 md:h-20 w-auto transform group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? "brightness-0 invert" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
