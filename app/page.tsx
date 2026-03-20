"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  BookOpen,
  Terminal,
  ArrowRight,
  MapPin,
  Menu,
  X,
  Download,
  ChevronUp,
  Award,
  Send,
  CheckCircle,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Estados para el formulario de contacto
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const spotlightRef = useRef<HTMLDivElement>(null);

  // Referencias para el movimiento suave del cursor
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });

  // 1. EFECTO REVEAL ON SCROLL (Animaciones al hacer scroll)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-reveal");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 2. EFECTO SPOTLIGHT (Haz de luz del cursor)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      delayedMouse.current.x +=
        (mouse.current.x - delayedMouse.current.x) * 0.08;
      delayedMouse.current.y +=
        (mouse.current.y - delayedMouse.current.y) * 0.08;

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(250px circle at ${delayedMouse.current.x}px ${delayedMouse.current.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // <- Se corrigió el cierre del useEffect que causaba el error

  // 3. ACTUALIZACIÓN DE SECCIÓN ACTIVA EN NAVBAR Y SCROLL PROGRESS
  useEffect(() => {
    const handleScroll = () => {
      // Calcular progreso del scroll para el indicador de lectura
      const totalScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);

      const sections = ["home", "about", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false); // Cierra el menú móvil si está abierto
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const skills = [
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: "C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
  ];

  const projects = [
    {
      title: "Himnario Adonai",
      description:
        "Aplicación web que facilita el acceso a los himnos del grupo cristiano 'Adonai'. Migrada a Next.js para un rendimiento óptimo. Incluye búsqueda rápida, diseño responsive y base de datos local mediante SQL.js que funciona sin backend.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/JhonAQ/himnario-adonai",
      demo: "https://github.com/JhonAQ/himnario-adonai",
      image:
        "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/library-app.png",
    },
    {
      title: "QR-Cole",
      description:
        "Proyecto de asistencia inteligente y sistema de notificación a padres de familia para colegios y escuelas. Diseñado para optimizar el control de entrada y salida de los alumnos de manera automatizada.",
      tech: ["TypeScript", "Node.js", "Frontend"],
      github: "https://github.com/JhonAQ/qr-cole",
      demo: "https://github.com/JhonAQ/qr-cole",
      image:
        "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/admin-dashboard.png",
    },
    {
      title: "Proyecto Ayni - Hackaton",
      description:
        "Proyecto desarrollado durante la Hackaton InnovaSur 2025 enfocado en resolver problemáticas locales a través de la tecnología colaborativa (Ayni).",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JhonAQ/InnovaSur",
      demo: "https://github.com/JhonAQ/InnovaSur",
      image:
        "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/landing-page.png",
    },
    {
      title: "Knowledge Wardens",
      description:
        "Un juego/aplicación interactiva. 'El poderoso brujo ha poseído a tu maestro... busca a los guardianes del conocimiento y véncelo'. Proyecto colaborativo enfocado en la lógica y entretenimiento.",
      tech: ["TypeScript", "Frontend"],
      github: "https://github.com/JhonAQ/knowledge-wardens",
      demo: "https://github.com/JhonAQ/knowledge-wardens",
      image:
        "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/rps.png",
    },
    {
      title: "Salve Paz",
      description:
        "Aplicación basada en Java para expresar gratitud a un maestro estimado, utilizando las librerías gráficas/lógicas Galapagos y EpisUnsa.",
      tech: ["Java", "Galapagos", "EpisUnsa"],
      github: "https://github.com/JhonAQ/salve-paz",
      demo: "https://github.com/JhonAQ/salve-paz",
      image:
        "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/paz.gif",
    },
    {
      title: "Competitive Programming",
      description:
        "Repositorio personal dedicado a la resolución de problemas de programación competitiva, optimización de algoritmos y estructuras de datos.",
      tech: ["C++"],
      github: "https://github.com/JhonAQ/competitive-programming",
      demo: "https://github.com/JhonAQ/competitive-programming",
      image:
        "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/episunsa.png",
    },
  ];

  // Manejador del formulario (Simulación de envío)
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simula una petición de red de 1.5 segundos
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Resetea el mensaje de éxito después de 4 segundos
      setTimeout(() => setIsSubmitted(false), 4000);
      e.currentTarget.reset(); // Limpia el formulario
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0F1C] text-slate-700 dark:text-slate-300 font-sans selection:bg-indigo-500/30 relative z-0 overflow-x-hidden">
      {/* Indicador de Lectura Superior (Barra de progreso de scroll) */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-indigo-500 z-[100] transition-all duration-150 ease-out shadow-[0_0_15px_rgba(99,102,241,1)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Efecto Noise (Textura de grano premium) */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 mix-blend-screen"
      />

      {/* Estilos GLOBALES: Scrollbar, Animaciones y Reveal */}
      <style>{`
        /* Custom Scrollbar Premium - Adaptive */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          background: #f8fafc;
          border-left: 1px solid rgba(0,0,0,0.05);
        }
        :is(.dark) ::-webkit-scrollbar-track {
          background: #0A0F1C;
          border-left: 1px solid rgba(255,255,255,0.05);
        }

        /* Thumb */
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1; /* Slate-300 */
          border-radius: 10px;
          border: 2px solid #f8fafc;
        }
        :is(.dark) ::-webkit-scrollbar-thumb {
          background: #1e1b4b; /* Indigo muy oscuro */
          border: 2px solid #0A0F1C;
        }

        /* Thumb Hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; /* Slate-400 */
        }
        :is(.dark) ::-webkit-scrollbar-thumb:hover {
          background: #4f46e5;
        }

        /* Animaciones base */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        /* Clases para REVEAL ON SCROLL */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.active-reveal {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Retrasos para elementos en grid (cascada) */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
      `}</style>

      {/* Background Grid & Glow Effects */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] z-[-1] pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      {/* NAVBAR FLOTANTE */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl z-50">
        <nav className="bg-white/80 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-full shadow-lg shadow-slate-200/50 dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] px-6 py-3 flex justify-between items-center transition-all duration-300 relative">
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white pl-2">
            Jhon<span className="text-indigo-500">AQ.</span>
          </span>

          <div className="hidden lg:flex items-center">
            {/* Links de navegación escritorio */}
            <div className="flex space-x-7 mr-6">
              {["home", "about", "education", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className={`uppercase text-[11px] font-extrabold tracking-widest transition-colors hover:text-slate-900 dark:text-white ${
                      activeSection === item
                        ? "text-indigo-400"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {item === "home"
                      ? "Home"
                      : item === "about"
                        ? "About"
                        : item === "education"
                          ? "Educación"
                          : item === "projects"
                            ? "Work"
                            : "Contact"}
                  </button>
                ),
              )}
            </div>

            <div className="w-px h-5 bg-white/10 mx-2"></div>

            {/* Redes Sociales y Contacto Rápido */}
            <div className="flex items-center space-x-5 ml-6">
              <a
                href="mailto:jariasq@unsa.edu.pe"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors"
                title="Email"
              >
                <Mail size={16} strokeWidth={2.5} />
              </a>
              <a
                href="https://linkedin.com/in/jhon-aq"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} strokeWidth={2.5} />
              </a>
              <a
                href="https://github.com/JhonAQ"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors"
                title="GitHub"
              >
                <Github size={16} strokeWidth={2.5} />
              </a>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/10 transition-all ml-1 mr-2"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}

              <button
                onClick={() => scrollTo("contact")}
                className="ml-2 bg-indigo-600 dark:bg-[#1A1F2E] hover:bg-indigo-700 dark:hover:bg-[#2A3143] text-white dark:text-white text-[11px] font-extrabold tracking-widest px-6 py-2.5 rounded-full border border-slate-200 dark:border-white/5 transition-all shadow-md uppercase"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Botón Menú Móvil */}
          <div className="lg:hidden flex items-center gap-4 pr-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-1.5 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menú Desplegable Móvil */}
          {isMobileMenuOpen && (
            <div className="absolute top-[120%] left-0 w-full bg-white dark:bg-[#111827]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl lg:hidden animate-fade-in-up">
              {["home", "about", "education", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className={`uppercase text-[12px] font-extrabold tracking-widest text-left px-4 py-3 rounded-xl transition-colors ${
                      activeSection === item
                        ? "bg-indigo-500/10 text-indigo-400"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-100 dark:bg-white/5 hover:text-slate-900 dark:text-white"
                    }`}
                  >
                    {item === "home"
                      ? "Home"
                      : item === "about"
                        ? "About"
                        : item === "education"
                          ? "Educación"
                          : item === "projects"
                            ? "Work"
                            : "Contact"}
                  </button>
                ),
              )}
              <div className="h-px w-full bg-white/10 my-2"></div>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-slate-900 dark:text-white text-[12px] font-extrabold tracking-widest px-4 py-3 rounded-xl transition-all shadow-md uppercase"
              >
                Hire Me
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-36 md:pt-48 pb-20 px-4 max-w-6xl mx-auto min-h-[100dvh] flex flex-col justify-center relative"
      >
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          <div className="max-w-2xl flex-1 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
              Hola, soy Jhonatan<span className="text-indigo-500">.</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-6 hover:text-indigo-300 hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
              Soy Desarrollador de Software
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-200 text-sm font-medium cursor-default">
                2+ años de experiencia
              </span>
              <span className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-200 text-sm font-medium cursor-default">
                Disponible para proyectos
              </span>
              <span className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-200 text-sm font-medium cursor-default">
                Trabajando globalmente
              </span>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300">
              Construyo aplicaciones web, sistemas robustos y herramientas
              digitales eficientes, con un enfoque en la confiabilidad, el
              rendimiento y escribir código limpio.
            </p>

            {/* Botones de Contacto y Descarga de CV */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-indigo-500 text-slate-900 dark:text-white px-7 py-3 rounded-md font-bold hover:bg-indigo-600 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 uppercase text-[13px] tracking-wide"
              >
                Ponerse en contacto <ArrowRight size={18} />
              </button>

              <a
                href="/cv-jhonatan-arias.pdf"
                download
                className="bg-transparent border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white px-7 py-3 rounded-md font-bold hover:bg-slate-100 dark:hover:bg-slate-100 dark:bg-white/5 hover:border-indigo-400 transition-all flex items-center gap-2 hover:-translate-y-1 uppercase text-[13px] tracking-wide"
              >
                Descargar CV <Download size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0 animate-fade-in-up animation-delay-200 mb-6 md:mb-0 flex flex-col">
            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500/80 via-purple-500/20 to-transparent shadow-[0_0_35px_rgba(99,102,241,0.25)] group hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] transition-all duration-500">
              <div className="w-full h-full rounded-2xl bg-slate-50 dark:bg-[#0A0F1C] overflow-hidden relative">
                <img
                  src="https://avatars.githubusercontent.com/u/139652922?s=400&u=6318f8c516349a9e69365efb64eb177506be0b1d&v=4"
                  alt="Jhonatan Arias"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            <div className="mt-5 space-y-2.5 w-full md:max-w-[320px] mx-auto px-2 font-medium">
              <a
                href="mailto:jariasq@unsa.edu.pe"
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors group"
              >
                <Mail
                  size={16}
                  className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-400 transition-colors"
                />
                jariasq@unsa.edu.pe
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 group cursor-default">
                <MapPin
                  size={16}
                  className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-400 transition-colors"
                />
                Arequipa, Perú
              </div>
              <a
                href="https://github.com/JhonAQ"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors group"
              >
                <Github
                  size={16}
                  className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-400 transition-colors"
                />
                JhonAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - REVEAL APLICADO */}
      <section
        id="about"
        className="py-24 border-t border-slate-200 dark:border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center md:text-left">
              Sobre Mí<span className="text-indigo-500">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed reveal delay-100">
              <p className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300">
                ¡Hola! Soy Jhonatan, un desarrollador apasionado con sede en
                Arequipa, Perú. Mi interés por la programación comenzó
                formalmente en 2023, aunque mi curiosidad técnica me llevó a
                hacer mis primeros commits allá por el 2017.
              </p>
              <p className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300">
                Actualmente estoy vinculado a la{" "}
                <strong className="text-indigo-300 hover:text-indigo-200 transition-colors">
                  Universidad Nacional de San Agustín (UNSA)
                </strong>
                , donde he fortalecido mis bases en ciencias de la computación.
                Me encanta participar en iniciativas colaborativas y desarrollar
                herramientas que aporten valor real.
              </p>
              <div className="bg-indigo-950/30 border border-indigo-500/20 p-5 rounded-lg flex items-start gap-4 hover:bg-indigo-900/40 hover:border-indigo-500/40 transition-all duration-300 group">
                <Award
                  className="text-indigo-400 shrink-0 mt-1 group-hover:text-indigo-300 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all"
                  size={24}
                />
                <p className="text-sm text-indigo-200 group-hover:text-slate-900 dark:text-white transition-colors">
                  <strong className="text-slate-900 dark:text-white block mb-1">
                    Dato destacado:
                  </strong>
                  Fui reconocido entre los 40 usuarios de GitHub más activos en
                  todo el Perú, reflejo de mi constancia y pasión por el
                  desarrollo.
                </p>
              </div>
            </div>

            <div className="reveal delay-200">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Terminal className="text-indigo-500" size={24} /> Tecnologías
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-md font-medium text-sm border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-white hover:shadow-md dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all cursor-default group"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4 transition-all grayscale group-hover:grayscale-0 dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel Infinito */}
        <div className="relative w-full py-10 mt-16 overflow-hidden flex items-center reveal delay-300">
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-slate-50 dark:from-[#0A0F1C] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-slate-50 dark:from-[#0A0F1C] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-scroll">
            <div className="flex gap-12 md:gap-16 px-6 md:px-8 items-center justify-center">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer group flex items-center justify-center min-w-[5rem]" title={skill.name}>
                  <img src={skill.icon} alt={skill.name} className="h-20 md:h-28 w-auto transform group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0 dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0" />
                </div>
              ))}
            </div>
            <div className="flex gap-12 md:gap-16 px-6 md:px-8 items-center justify-center">
              {[...skills, ...skills].map((skill, index) => (
                <div key={`clone-${index}`} className="drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer group flex items-center justify-center min-w-[5rem]" title={skill.name}>
                  <img src={skill.icon} alt={skill.name} className="h-20 md:h-28 w-auto transform group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0 dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - REVEAL APLICADO */}
      <section
        id="education"
        className="py-24 border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.02]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Educación<span className="text-indigo-500">.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto reveal delay-100">
            <div className="relative border-l border-indigo-500/30 ml-3 md:ml-6 space-y-12">
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slate-50 dark:bg-[#0A0F1C] border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-300 transition-colors">
                    Universidad Nacional de San Agustín
                  </h3>
                  <span className="text-sm font-medium text-indigo-400">
                    Presente
                  </span>
                </div>
                <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-3 group-hover:text-slate-700 dark:text-slate-300 transition-colors">
                  Estudiante de Ciencias de la Computación
                </h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm group-hover:text-slate-700 dark:text-slate-300 transition-colors">
                  Formación académica enfocada en estructuras de datos, análisis
                  de algoritmos, y desarrollo de software.
                </p>
              </div>

              <div className="relative pl-8 md:pl-10 group cursor-default">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slate-50 dark:bg-[#0A0F1C] border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-300 transition-colors">
                    Hackaton InnovaSur
                  </h3>
                  <span className="text-sm font-medium text-indigo-400">
                    2025
                  </span>
                </div>
                <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-3 group-hover:text-slate-700 dark:text-slate-300 transition-colors">
                  Participante & Desarrollador
                </h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm group-hover:text-slate-700 dark:text-slate-300 transition-colors">
                  Desarrollo del "Proyecto Ayni", creando soluciones
                  tecnológicas para problemáticas locales mediante el trabajo
                  colaborativo y metodologías ágiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - REVEAL APLICADO */}
      <section
        id="projects"
        className="py-24 border-t border-slate-200 dark:border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center md:text-left">
              Proyectos Destacados<span className="text-indigo-500">.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-20 md:gap-32">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className={`reveal delay-${(index + 1) * 100} flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center group transition-all duration-500`}
              >
                <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20 dark:group-hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] transition-all duration-500">
                  <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-900/40 dark:mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/800x450/0A0F1C/4F46E5?text=Proyecto";
                    }}
                  />
                </div>

                <div
                  className={`w-full lg:w-1/2 flex flex-col ${index % 2 === 1 ? "lg:items-start" : "lg:items-end"} text-left ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}
                >
                  <h4 className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2">
                    Proyecto Destacado
                  </h4>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="w-full bg-white dark:bg-[#111827]/90 backdrop-blur-md border border-slate-200 dark:border-white/5 group-hover:border-indigo-500/30 p-6 md:p-8 rounded-xl mb-6 shadow-xl group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500 relative z-20">
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed text-left">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`flex flex-wrap gap-3 mb-8 ${index % 2 === 1 ? "justify-start" : "lg:justify-end"}`}
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex items-center gap-6 ${index % 2 === 1 ? "justify-start" : "lg:justify-end"}`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-400 font-bold text-sm tracking-wide transition-colors"
                    >
                      <Github size={20} /> Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-400 font-bold text-sm tracking-wide transition-colors"
                    >
                      <ExternalLink size={20} /> Demo en vivo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Más Proyectos (Galería) - REVEAL APLICADO */}
          <div className="mt-40 reveal">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-16">
              Otros Proyectos Interesantes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(3).map((project, index) => (
                <div
                  key={index}
                  className={`reveal delay-${((index % 3) + 1) * 100} bg-white dark:bg-[#111827]/60 backdrop-blur-sm border border-slate-200 dark:border-white/5 hover:border-indigo-500/40 rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]`}
                >
                  <div className="w-full h-48 relative overflow-hidden border-b border-slate-200 dark:border-white/5">
                    <div className="absolute inset-0 bg-indigo-900/40 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/800x450/0A0F1C/4F46E5?text=Proyecto";
                      }}
                    />
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-5 mt-auto pt-5 border-t border-slate-200 dark:border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-400 font-bold text-sm transition-colors"
                      >
                        <Github size={18} /> Repo
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-400 font-bold text-sm transition-colors"
                      >
                        <ExternalLink size={18} /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - ESTILO PREMIUM */}
      <section
        id="contact"
        className="py-32 border-t border-slate-200 dark:border-white/5 relative overflow-hidden reveal"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] z-[-1] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start">
            {/* Columna Izquierda: Información */}
            <div>
              <h4 className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-3">
                ¿Qué sigue?
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Trabajemos <span className="text-indigo-500">Juntos.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
                Actualmente estoy abierto a nuevas oportunidades de trabajo y
                proyectos freelance. Ya sea que tengas una pregunta o
                simplemente quieras saludar, haré todo lo posible para
                responderte pronto.
              </p>

              <div className="space-y-4 mb-10">
                {/* Tarjeta de Correo */}
                <a
                  href="mailto:jariasq@unsa.edu.pe"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111827]/60 backdrop-blur-sm border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all group"
                >
                  <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-slate-900 dark:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Correo Electrónico
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      jariasq@unsa.edu.pe
                    </p>
                  </div>
                </a>

                {/* Tarjeta de Ubicación */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111827]/60 backdrop-blur-sm border border-slate-200 dark:border-white/5 transition-all">
                  <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Ubicación
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Arequipa, Perú (Remoto global)
                    </p>
                  </div>
                </div>

                {/* Tarjeta de Redes */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111827]/60 backdrop-blur-sm border border-slate-200 dark:border-white/5 transition-all">
                  <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                    <Github size={20} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      Redes Sociales
                    </h5>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/JhonAQ"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/jhon-aq"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Formulario */}
            <div className="bg-white dark:bg-[#111827]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-2xl shadow-2xl relative">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Envíame un mensaje
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-600 dark:text-slate-400"
                    >
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-slate-50 dark:bg-[#0A0F1C]/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-600 dark:text-slate-400"
                    >
                      Tu Correo
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="juan@ejemplo.com"
                      className="w-full bg-slate-50 dark:bg-[#0A0F1C]/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-600 dark:text-slate-400"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Propuesta de proyecto, Hola, etc."
                    className="w-full bg-slate-50 dark:bg-[#0A0F1C]/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-600 dark:text-slate-400"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Cuéntame sobre tu proyecto o lo que tienes en mente..."
                    className="w-full bg-slate-50 dark:bg-[#0A0F1C]/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all flex justify-center items-center gap-2 ${
                    isSubmitted
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-indigo-500 text-slate-900 dark:text-white hover:bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 animate-pulse">
                      Enviando...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle size={18} /> Mensaje Enviado
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Mensaje <Send size={18} />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer className="bg-slate-50 dark:bg-[#0A0F1C] border-t border-slate-200 dark:border-white/5 pt-16 pb-8 relative overflow-hidden">
        {/* Glow sutil en el centro del footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Branding y Descripción */}
            <div className="col-span-1 md:col-span-1">
              <span className="font-bold text-3xl tracking-tight text-slate-900 dark:text-white block mb-4">
                Jhon<span className="text-indigo-500">AQ.</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                Desarrollador de Software especializado en crear soluciones
                digitales escalables, limpias y eficientes desde Arequipa, Perú,
                hacia el mundo.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/JhonAQ"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:scale-110 transition-all bg-slate-100 dark:bg-white/5 p-2.5 rounded-full hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/jhon-aq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:scale-110 transition-all bg-slate-100 dark:bg-white/5 p-2.5 rounded-full hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:jariasq@unsa.edu.pe"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:scale-110 transition-all bg-slate-100 dark:bg-white/5 p-2.5 rounded-full hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div className="col-span-1 flex flex-col md:items-center">
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-4 uppercase text-xs tracking-widest">
                  Navegación
                </h4>
                <ul className="space-y-3">
                  {["home", "about", "education", "projects"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollTo(item)}
                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors capitalize flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-indigo-400 transition-all group-hover:w-3"></span>
                        {item === "home"
                          ? "Inicio"
                          : item === "about"
                            ? "Sobre mí"
                            : item === "education"
                              ? "Educación"
                              : "Proyectos"}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Back to top & Info */}
            <div className="col-span-1 flex flex-col md:items-end justify-between">
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-slate-900 dark:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-2 group"
                aria-label="Volver arriba"
              >
                <ChevronUp size={20} className="group-hover:animate-bounce" />
              </button>

              <div className="text-left md:text-right mt-8 md:mt-0">
                <h4 className="text-slate-900 dark:text-white font-bold mb-2 uppercase text-xs tracking-widest">
                  Status Actual
                </h4>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 justify-start md:justify-end">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  Disponible para contratación
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-200 dark:border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} Jhonatan Arias Quispe. Todos los
              derechos reservados.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1.5">
              Hecho con{" "}
              <span className="text-indigo-500 font-medium">React</span> y mucha
              lógica.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
