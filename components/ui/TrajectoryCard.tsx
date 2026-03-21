import React from "react";
import Image from "next/image";
import {
  Terminal,
  Trophy,
  Globe,
  Briefcase,
  HeartHandshake,
  Cloud,
  Code2,
  Database,
  Users,
  GraduationCap,
} from "lucide-react";
import { TrajectoryItem } from "@/data/education";
import { techIcons } from "@/data/icons";

// Mapa de iconos: String -> Componente Lucide
const IconsMap: Record<string, any> = {
  Terminal,
  Trophy,
  Globe,
  Briefcase,
  HeartHandshake,
  Cloud,
  Code2,
  Database,
  Users,
  GraduationCap,
};

interface TrajectoryCardProps {
  item: TrajectoryItem;
  isDarkMode: boolean;
  priority?: boolean;
}

const getTagStyles = (type: string, isDark: boolean) => {
  switch (type) {
    case "work":
      return isDark
        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
        : "bg-amber-100 text-amber-700 border-amber-200";
    case "volunteer":
      return isDark
        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        : "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "education":
      return isDark
        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
        : "bg-blue-100 text-blue-700 border-blue-200";
    case "award":
      return isDark
        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
        : "bg-purple-100 text-purple-700 border-purple-200";
    case "cert":
      return isDark
        ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
        : "bg-cyan-100 text-cyan-700 border-cyan-200";
    default:
      return isDark
        ? "bg-slate-500/10 text-slate-400 border-slate-500/20"
        : "bg-slate-100 text-slate-700 border-slate-200";
  }
};

export const TrajectoryCard: React.FC<TrajectoryCardProps> = ({
  item,
  isDarkMode,
  priority = false,
}) => {
  const IconComponent = IconsMap[item.icon] || Globe;

  return (
    <div className="relative pl-8 md:pl-16 group">
      {/* Icono de la línea de tiempo */}
      <div
        className={`absolute -left-[21px] md:-left-[25px] top-0 h-10 w-10 md:h-12 md:w-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
          isDarkMode
            ? "bg-[#0A0F1C] border-indigo-500 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]"
            : "bg-white border-indigo-400 text-indigo-600 group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
        }`}
      >
        <IconComponent size={20} />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center w-full">
        {/* LA CARD DE TEXTO */}
        <div
          className={`flex-1 w-full p-6 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 ${
            isDarkMode
              ? "bg-[#111827]/60 border-white/5 hover:border-indigo-500/30 hover:bg-[#111827]/90 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              : "bg-white border-slate-200 hover:border-indigo-200 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
            <div>
              <span
                className={`inline-block mb-3 text-[10px] md:text-xs font-extrabold tracking-widest uppercase border px-3 py-1 rounded-full ${getTagStyles(
                  item.type,
                  isDarkMode,
                )}`}
              >
                {item.label}
              </span>
              <h3
                className={`text-xl md:text-2xl font-bold flex items-center flex-wrap gap-2 transition-colors ${
                  isDarkMode
                    ? "text-white group-hover:text-indigo-300"
                    : "text-slate-900 group-hover:text-indigo-600"
                }`}
              >
                {item.title}
                {/* Banderas */}
                {item.flags &&
                  item.flags.map((flag) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={flag}
                      src={`https://flagcdn.com/w20/${flag}.png`}
                      alt={`Bandera ${flag}`}
                      className="inline-block w-6 h-auto rounded-[2px] shadow-sm ml-1"
                    />
                  ))}
              </h3>
            </div>
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border shrink-0 ${
                isDarkMode
                  ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                  : "bg-indigo-50 text-indigo-600 border-indigo-200"
              }`}
            >
              {item.date}
            </span>
          </div>
          <h4
            className={`text-base md:text-lg font-semibold mb-4 transition-colors ${
              isDarkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {item.subtitle}
          </h4>
          <p
            className={`leading-relaxed text-sm md:text-base transition-colors ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {item.description}
          </p>

          {/* STACK TECNOLÓGICO */}
          {item.tech && item.tech.length > 0 && (
            <div
              className={`mt-6 pt-5 flex flex-wrap gap-2.5 border-t ${
                isDarkMode ? "border-white/10" : "border-slate-200"
              }`}
            >
              {item.tech.map((techName, i) => (
                <span
                  key={i}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                    isDarkMode
                      ? "bg-white/5 text-slate-300 border-white/10"
                      : "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {techIcons[techName] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={
                        isDarkMode
                          ? techIcons[techName].dark
                          : techIcons[techName].light
                      }
                      alt={techName}
                      className={`w-3.5 h-3.5 opacity-80 ${
                        isDarkMode ? "brightness-0 invert" : ""
                      }`}
                    />
                  )}
                  {techName}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* LA IMAGEN EXTERIOR */}
        {item.image && (
          <div className="shrink-0 flex justify-center items-center lg:pl-2 w-full lg:w-auto">
            <div className="relative inline-block p-2 md:p-2.5 pb-8 md:pb-10 bg-white rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.25)] transform md:rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 z-10 max-w-[280px] lg:max-w-[320px]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/60 backdrop-blur-md shadow-sm transform -rotate-2 border border-black/5 z-20"></div>
              <Image
                src={item.image}
                alt={`Foto de ${item.title}`}
                width={320}
                height={220}
                className="w-auto h-auto max-w-full max-h-[220px] md:max-h-[280px] object-contain rounded-sm border border-slate-200"
                priority={priority}
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
