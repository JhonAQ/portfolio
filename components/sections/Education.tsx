"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
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

const Education = () => {
  const { isDarkMode } = useTheme();

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

  // Diccionario de Íconos para los Stacks Tecnológicos
  const techIcons: Record<string, { dark: string; light: string }> = {
    Laravel: {
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/laravel.svg",
      light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/laravel.svg",
    },
    PHP: {
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/php.svg",
      light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/php.svg",
    },
    Flutter: {
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/flutter.svg",
      light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/flutter.svg",
    },
    TypeScript: {
      light:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/typescript.svg",
    },
    Supabase: {
      light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/supabase.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/supabase.svg",
    },
    "Next.js": {
      light:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/nextdotjs.svg",
    },
    PostgreSQL: {
      light:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/postgresql.svg",
    },
    "React Native": {
      light:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/react.svg",
    },
    Expo: {
      light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/expo.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/expo.svg",
    },
    "C++": {
      light:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/cplusplus.svg",
    },
    Python: {
      light:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/python.svg",
    },
    "Tailwind CSS": {
      light:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/tailwindcss.svg",
    },
    Figma: {
      light:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
      dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/figma.svg",
    },
  };

  const trajectory = [
    {
      type: "work",
      label: "Trabajo Remoto",
      title: "Desarrollador de Software",
      flags: ["mx"],
      subtitle: "ACRU (México) | Misioneros Digitales",
      date: "Desde 2026",
      description:
        "Desarrollé sistemas de uso interno para la organización. Fui responsable de la creación de soluciones digitales a medida, incluyendo la implementación de plugins personalizados para WordPress.",
      icon: <Globe size={18} />,
      tech: ["Laravel", "PHP", "Flutter"],
    },
    {
      type: "work",
      label: "Trabajo Freelance",
      title: "Desarrollador Freelance",
      subtitle: "Sistema de Gestión 'Brigadapp'",
      date: "2026",
      description:
        "Desarrollé y comercialicé 'Brigadapp', un sistema integral de software diseñado y vendido a una institución educativa. El sistema permitió gestionar y registrar a 50 brigadieres junto con sus reportes de incidencias, reduciendo el uso de papel al 0%.",
      icon: <Briefcase size={18} />,
      tech: ["TypeScript", "Supabase", "Next.js"],
    },
    {
      type: "work",
      label: "Trabajo",
      title: "Desarrollador de Software",
      flags: ["pe", "no"],
      subtitle: "IELP (Iglesia Evangélica Luterana - Perú)",
      date: "Desde 2025",
      description:
        "Lideré la digitalización de la organización. Desarrollé una landing page interactiva para el Campamento Nacional de Jóvenes (Radical) y programé una aplicación móvil de himnario que actualmente se encuentra en producción.",
      icon: <HeartHandshake size={18} />,
      tech: ["PostgreSQL", "Next.js", "React Native", "Expo"],
    },
    {
      type: "education",
      label: "Educación",
      title: "Training Camp Argentina 2025",
      flags: ["ar"],
      subtitle: "Entrenamiento de Alto Rendimiento | UTN Santa Fe",
      date: "2025",
      description:
        "Participé en un entrenamiento inmersivo de dos semanas junto a los mejores programadores competitivos de Latinoamérica en la UTN. Perfeccioné mi dominio en teoría de grafos, programación dinámica y tópicos avanzados de algoritmia.",
      icon: <Terminal size={18} />,
      image: "https://i.ibb.co/fz0rPJfd/TC.png",
      tech: ["C++", "Python"],
    },
    {
      type: "award",
      label: "Competición",
      title: "Hackathon PeruHub",
      subtitle: "Desarrollador Participante | Unity Perú (Lima)",
      date: "2025",
      description:
        "Participé en el evento tecnológico organizado por Unity Perú, desarrollando soluciones innovadoras y compitiendo de la mano de talentos de todo el país.",
      icon: <Trophy size={18} />,
      tech: [],
    },
    {
      type: "award",
      label: "Competición",
      title: "Hackaton InnovaSur",
      subtitle: "Creador del Proyecto 'Ayni' | UCSP",
      date: "2025",
      description:
        "Lideré la creación de 'Ayni' en representación de la UNSA, una plataforma enfocada en facilitar el acceso oportuno a la monitorización de la salud en zonas vulnerables y sin acceso a centros médicos.",
      icon: <Trophy size={18} />,
      image: "https://i.ibb.co/RkpzNxnj/AYNI.png",
      tech: ["Tailwind CSS", "TypeScript", "Figma"],
    },
    {
      type: "volunteer",
      label: "Voluntariado Universitario",
      title: "Miembro Activo y Desarrollador",
      subtitle: "CEIS, IEEE & ACM Student Chapters",
      date: "Desde 2024",
      description:
        "Participé activamente en el Centro de Estudiantes de Ingeniería de Sistemas (CEIS) y los capítulos estudiantiles de IEEE y ACM, contribuyendo al desarrollo técnico y la organización de la comunidad académica.",
      icon: <Users size={18} />,
      tech: [],
    },
    {
      type: "work",
      label: "Trabajo Freelance",
      title: "Desarrollador Freelance",
      subtitle: "Sistema de Asistencia 'Educheck'",
      date: "2024",
      description:
        "Desarrollé y vendí comercialmente 'Educheck', un sistema de asistencia inteligente y reporte automatizado a padres. Este proyecto fue galardonado en la feria de ciencias Eureka.",
      icon: <Briefcase size={18} />,
      image: "https://i.ibb.co/ccr96WqW/imagen-2026-03-20-203500911.png",
      tech: ["Supabase", "Next.js"],
    },
    {
      type: "cert",
      label: "Certificación",
      title: "Certificaciones Tech: Cloud & DB",
      subtitle: "Google Cloud Foundations & Oracle APEX",
      date: "2024",
      description:
        "Obtuve acreditaciones internacionales en fundamentos de infraestructura en la nube (GCP) y desarrollo ágil de aplicaciones empresariales utilizando Oracle APEX.",
      icon: <Cloud size={18} />,
      tech: [],
    },
    {
      type: "award",
      label: "Competición",
      title: "Programación Competitiva (RPC e IEEEXtreme)",
      subtitle: "Top 5 Perú | Top 20 Latam",
      date: "2023 - 2024",
      description:
        "Competí al más alto nivel en la Red de Programación Competitiva (RPC) y en maratones de 24 horas (IEEEXtreme). Destaqué en optimización algorítmica y resolución de problemas bajo presión extrema, logrando posicionar a nuestro equipo entre los mejores de la región.",
      icon: <Code2 size={18} />,
      tech: ["C++", "Python"],
    },
    {
      type: "work",
      label: "Trabajo",
      title: "Automatización y Scripting de Datos",
      subtitle: "Municipalidad de Cabana | Sistema INDECI",
      date: "2023",
      description:
        "Desarrollé scripts avanzados para la automatización, procesamiento y gestión eficiente de datos críticos correspondientes al sistema de INDECI. Logré reducir el trabajo manual de 2 meses a solo 3 días de ejecución.",
      icon: <Database size={18} />,
      tech: ["Python"],
    },
    {
      type: "volunteer",
      label: "Voluntariado",
      title: "Mentor STEM y Voluntariado Educativo",
      subtitle: "Colegio de Ingenieros del Perú",
      date: "2023",
      description:
        "Lideré sesiones de mentoría enseñando Python a adolescentes, proceso que culminó en la organización exitosa de un concurso de programación competitiva para incentivar el talento tecnológico joven.",
      icon: <Users size={18} />,
      image: "https://i.ibb.co/9HmWtwgM/imagen-2026-03-20-204254229.png",
      tech: ["Python"],
    },
    {
      type: "education",
      label: "Educación",
      title: "Universidad Nacional de San Agustín (UNSA)",
      subtitle: "Ingeniería de Sistemas",
      date: "Desde 2023",
      description:
        "Me formo académicamente de manera superior con un enfoque analítico en arquitectura de software, ingeniería de datos, análisis matemático y patrones de diseño de sistemas complejos.",
      icon: <GraduationCap size={18} />,
      tech: [],
    },
  ];

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
              <div key={index} className="relative pl-8 md:pl-16 group">
                <div
                  className={`absolute -left-[21px] md:-left-[25px] top-0 h-10 w-10 md:h-12 md:w-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    isDarkMode
                      ? "bg-[#0A0F1C] border-indigo-500 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                      : "bg-white border-indigo-400 text-indigo-600 group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  }`}
                >
                  {item.icon}
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center w-full">
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
                          className={`inline-block mb-3 text-[10px] md:text-xs font-extrabold tracking-widest uppercase border px-3 py-1 rounded-full ${getTagStyles(item.type, isDarkMode)}`}
                        >
                          {item.label}
                        </span>
                        <h3
                          className={`text-xl md:text-2xl font-bold flex items-center flex-wrap gap-2 transition-colors ${isDarkMode ? "text-white group-hover:text-indigo-300" : "text-slate-900 group-hover:text-indigo-600"}`}
                        >
                          {item.title}
                          {item.flags &&
                            item.flags.map((flag) => (
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
                      className={`text-base md:text-lg font-semibold mb-4 transition-colors ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      {item.subtitle}
                    </h4>
                    <p
                      className={`leading-relaxed text-sm md:text-base transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {item.description}
                    </p>

                    {item.tech && item.tech.length > 0 && (
                      <div
                        className={`mt-6 pt-5 flex flex-wrap gap-2.5 border-t ${isDarkMode ? "border-white/10" : "border-slate-200"}`}
                      >
                        {item.tech.map((techName, i) => (
                          <span
                            key={i}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors ${isDarkMode ? "bg-white/5 text-slate-300 border-white/10" : "bg-slate-50 text-slate-600 border-slate-200"}`}
                          >
                            {techIcons[techName] && (
                              <img
                                src={
                                  isDarkMode
                                    ? techIcons[techName].dark
                                    : techIcons[techName].light
                                }
                                alt={techName}
                                className={`w-3.5 h-3.5 opacity-80 ${isDarkMode ? "brightness-0 invert" : ""}`}
                              />
                            )}
                            {techName}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {item.image && (
                    <div className="shrink-0 flex justify-center items-center lg:pl-2 w-full lg:w-auto">
                      <div className="relative inline-block p-2 md:p-2.5 pb-8 md:pb-10 bg-white rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.25)] transform md:rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 z-10 max-w-[280px] lg:max-w-[320px]">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/60 backdrop-blur-md shadow-sm transform -rotate-2 border border-black/5 z-20"></div>
                        <img
                          src={item.image}
                          alt={`Foto de ${item.title}`}
                          className="w-auto h-auto max-w-full max-h-[220px] md:max-h-[280px] object-contain rounded-sm border border-slate-200"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
