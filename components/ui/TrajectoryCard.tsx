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
import { TrajectoryItem, techIcons } from "@/data/education";

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
            ? "bg-indigo-950 border-[#0a192f] text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
            : "bg-white border-slate-50 text-indigo-600 shadow-[0_4px_10px_rgba(99,102,241,0.2)]"
        }`}
      >
        <IconComponent size={20} />
      </div>

      {/* Contenido de la tarjeta */}
      <div
        className={`relative p-6 rounded-2xl border transition-all duration-300 ${
          isDarkMode
            ? "bg-[#111827]/80 backdrop-blur-sm border-slate-800/50 hover:border-indigo-500/30 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]"
            : "bg-white/80 backdrop-blur-sm border-indigo-100 hover:border-indigo-300 hover:shadow-lg"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full border ${getTagStyles(
                  item.type,
                  isDarkMode,
                )}`}
              >
                {item.label}
              </span>
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {item.date}
              </span>
              {item.flags && (
                <div className="flex gap-1.5 ml-1">
                  {item.flags.map((flag, idx) => (
                    <span
                      key={idx}
                      className={`fi fi-${flag} rounded-sm shadow-sm`}
                    />
                  ))}
                </div>
              )}
            </div>
            <h3
              className={`text-xl font-bold mb-1 ${
                isDarkMode ? "text-slate-100" : "text-slate-800"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`text-sm font-medium ${
                isDarkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              {item.subtitle}
            </p>
          </div>
        </div>

        <p
          className={`mb-4 text-sm leading-relaxed ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {item.description}
        </p>

        {/* Imagen opcional */}
        {item.image && (
          <div className="mb-4 relative w-full h-48 md:h-56 rounded-xl overflow-hidden border border-slate-200/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <Image
              src={item.image}
              alt="Evidence"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Stack Tecnológico */}
        {item.tech && item.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dashed border-slate-700/30">
            {item.tech.map((tech) => (
              <div
                key={tech}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors ${
                  isDarkMode
                    ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                }`}
                title={tech}
              >
                <img
                  src={
                    isDarkMode ? techIcons[tech]?.dark : techIcons[tech]?.light
                  }
                  alt={tech}
                  className="w-3.5 h-3.5 opacity-90"
                />
                <span className="text-xs font-medium">{tech}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
