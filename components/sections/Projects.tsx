"use client";

import React from "react";
import { Github, ExternalLink, FileText } from "lucide-react";
import Mockup3D from "@/components/features/Mockup3D";
import { projects } from "@/data/projects";
import { useTheme } from "@/context/ThemeContext";

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`pt-32 pb-10 border-t transition-colors duration-500 ${isDarkMode ? "border-white/5" : "border-slate-200"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 reveal">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center md:text-left transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            Proyectos Destacados<span className="text-indigo-500">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-40">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center group`}
            >
              <div className="w-full lg:w-1/2 relative reveal">
                <Mockup3D image={project.image} />
              </div>

              <div
                className={`w-full lg:w-1/2 flex flex-col items-start text-left reveal delay-200`}
              >
                {project.isDeveloping && (
                  <span className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    En Desarrollo
                  </span>
                )}
                <h3
                  className={`text-3xl md:text-5xl font-extrabold mb-6 transition-colors ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-base md:text-lg leading-relaxed mb-8 transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${isDarkMode ? "bg-white/10 text-slate-200" : "bg-slate-800 text-white"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 border ${
                        isDarkMode
                          ? "border-white/20 text-white hover:bg-white/10"
                          : "border-slate-800 text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      Código Fuente <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shadow-lg ${
                        isDarkMode
                          ? "bg-indigo-500 text-white hover:bg-indigo-600"
                          : "bg-slate-800 text-white hover:bg-slate-900"
                      }`}
                    >
                      Visitar Web <ExternalLink size={18} />
                    </a>
                  )}
                  {project.pitchDeck && (
                    <a
                      href={project.pitchDeck}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 border ${
                        isDarkMode
                          ? "border-white/20 text-white hover:bg-white/10"
                          : "border-slate-800 text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      Pitch Deck <FileText size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Más Proyectos */}
        <div className="mt-40 reveal">
          <h3
            className={`text-3xl font-bold text-center mb-16 transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            Otros Proyectos Interesantes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(3).map((project, index) => (
              <div
                key={index}
                className={`reveal delay-${((index % 3) + 1) * 100} backdrop-blur-sm border rounded-xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? "bg-[#111827]/60 border-white/5 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]" : "bg-white/60 border-slate-200 hover:border-indigo-300 hover:shadow-xl"}`}
              >
                <div
                  className={`w-full h-40 relative overflow-hidden border-b transition-colors ${isDarkMode ? "border-white/5" : "border-slate-200"}`}
                >
                  <div
                    className={`absolute inset-0 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none ${isDarkMode ? "bg-indigo-900/40" : "bg-indigo-200/40"}`}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/800x450/0A0F1C/4F46E5?text=Proyecto";
                    }}
                  />

                  {/* Overlay con Botones al Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex z-20">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 h-full flex flex-col items-center justify-center gap-2 backdrop-blur-sm transition-all duration-300 group/btn bg-black/10 hover:bg-black/30 text-white border-r border-white/10 last:border-0"
                      >
                        <Github
                          size={28}
                          className="transition-transform group-hover/btn:scale-110 group-hover/btn:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        />
                        <span className="font-bold text-xs uppercase tracking-wider group-hover/btn:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                          Repo
                        </span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 h-full flex flex-col items-center justify-center gap-2 backdrop-blur-sm transition-all duration-300 group/btn bg-black/10 hover:bg-black/30 text-white border-r border-white/10 last:border-0"
                      >
                        <ExternalLink
                          size={28}
                          className="transition-transform group-hover/btn:scale-110 group-hover/btn:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        />
                        <span className="font-bold text-xs uppercase tracking-wider group-hover/btn:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                          Web
                        </span>
                      </a>
                    )}
                    {project.pitchDeck && (
                      <a
                        href={project.pitchDeck}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 h-full flex flex-col items-center justify-center gap-2 backdrop-blur-sm transition-all duration-300 group/btn bg-black/10 hover:bg-black/30 text-white"
                      >
                        <FileText
                          size={28}
                          className="transition-transform group-hover/btn:scale-110 group-hover/btn:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        />
                        <span className="font-bold text-xs uppercase tracking-wider group-hover/btn:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                          Pitch
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h4
                    className={`text-lg font-bold mb-2 transition-colors ${isDarkMode ? "text-white group-hover:text-indigo-300" : "text-slate-900 group-hover:text-indigo-600"}`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`text-xs leading-relaxed mb-4 flex-grow transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap border transition-colors ${isDarkMode ? "bg-white/10 text-slate-200 border-white/10" : "bg-slate-800 text-white border-slate-800"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
