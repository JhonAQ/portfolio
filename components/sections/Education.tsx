"use client";

import React from 'react';
import { EducationItem, education } from '@/data/education';
import { useTheme } from '@/context/ThemeContext';

const Education: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="education" className={`py-24 border-t transition-colors duration-500 ${isDarkMode ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center reveal">
          <h2 className={`text-4xl md:text-5xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Educación<span className="text-indigo-500">.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto reveal delay-100">
          <div className="relative border-l border-indigo-500/30 ml-3 md:ml-6 space-y-12">
            {education.map((item, index) => (
               <div key={index} className="relative pl-8 md:pl-10 group cursor-default">
                  <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-indigo-500 transition-colors ${isDarkMode ? 'bg-[#0A0F1C] group-hover:bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]' : 'bg-white group-hover:bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.4)]'}`}></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'}`}>{item.institution}</h3>
                    <span className="text-sm font-medium text-indigo-500 md:text-indigo-400">{item.year}</span>
                  </div>
                  <h4 className={`text-lg font-medium mb-3 transition-colors ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-900'}`}>{item.role}</h4>
                  <p className={`leading-relaxed text-sm transition-colors ${isDarkMode ? 'text-slate-500 group-hover:text-slate-400' : 'text-slate-600 group-hover:text-slate-800'}`}>
                    {item.description}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
