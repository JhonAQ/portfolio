"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Terminal, ArrowRight, MapPin, Menu, X, Download, ChevronUp, Award, Send, CheckCircle, Sun, Moon, Globe, Database, Code2, Cpu } from 'lucide-react';

// ==========================================
// COMPONENTE: Mockup 3D Interactivo
// ==========================================
const Mockup3D = ({ image, isDarkMode }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 20, y: -15, scale: 0.9 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visibleRatio = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      
      const rotX = 25 - (visibleRatio * 25);
      const rotY = -25 + (visibleRatio * 25);
      const scale = 0.85 + (visibleRatio * 0.15);

      setRotation({ x: rotX, y: rotY, scale: scale });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center"
      style={{ perspective: '1200px' }} 
    >
      <div 
        className={`relative w-full rounded-xl overflow-hidden transition-shadow duration-300 ease-out border ${isDarkMode ? 'border-white/10 shadow-[0_20px_50px_rgba(99,102,241,0.2)]' : 'border-slate-200 shadow-[0_30px_60px_rgba(0,0,0,0.15)]'}`}
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${rotation.scale})`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out' 
        }}
      >
        <div className={`w-full h-8 flex items-center px-4 gap-2 border-b ${isDarkMode ? 'bg-[#1e293b] border-white/10' : 'bg-slate-200 border-slate-300'}`}>
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
        </div>
        
        <div className={`relative ${isDarkMode ? 'bg-[#0A0F1C]' : 'bg-white'}`}>
          <div className={`absolute inset-0 mix-blend-overlay transition-opacity duration-500 pointer-events-none ${isDarkMode ? 'bg-indigo-900/20' : 'bg-indigo-200/10'}`}></div>
          <img 
            src={image} 
            alt="Project Mockup" 
            className="w-full aspect-video object-cover object-top" 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450/0A0F1C/4F46E5?text=Proyecto' }}
          />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Estados para el Formulario y la simulación del Chat
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageText, setMessageText] = useState("");

  const spotlightRef = useRef(null);
  const cursorRef = useRef(null); 
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);

  const roles = ["Desarrollador de Software.", "Estudiante de CS.", "Solucionador de Problemas."];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // EFECTO TYPEWRITER
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000); 
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 100); 

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  // EFECTO REVEAL ON SCROLL
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-reveal');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // EFECTO SPOTLIGHT Y CURSOR PERSONALIZADO
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'a' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    let animationFrameId;
    const animate = () => {
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.08;
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.08;

      if (spotlightRef.current) {
        const spotColor = isDarkMode ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.06)';
        spotlightRef.current.style.background = `radial-gradient(250px circle at ${delayedMouse.current.x}px ${delayedMouse.current.y}px, ${spotColor}, transparent 80%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, isHovering]);

  // ACTUALIZACIÓN DE NAVBAR Y SCROLL PROGRESS
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);

      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const groupedSkills = {
    "Frontend & Mobile": [
      { name: "React", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/react.svg" },
      { name: "Next.js", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/nextdotjs.svg" },
      { name: "React Native", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/react.svg" },
      { name: "JavaScript", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/javascript.svg" },
      { name: "TypeScript", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/typescript.svg" },
      { name: "Tailwind", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/tailwindcss.svg" },
      { name: "Sass", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/sass.svg" },
      { name: "HTML5", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/html5.svg" },
      { name: "CSS3", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/css3.svg" }
    ],
    "Backend & BD": [
      { name: "Node.js", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/nodedotjs.svg" },
      { name: "NestJS", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/nestjs.svg" },
      { name: "Python", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/python.svg" },
      { name: "Django", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/django.svg" },
      { name: "Java", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/java.svg" },
      { name: "C++", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/cplusplus.svg" },
      { name: "C#", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/csharp.svg" },
      { name: "PostgreSQL", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/postgresql.svg" },
      { name: "SQL", light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/mysql.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/mysql.svg" },
      { name: "Supabase", light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/supabase.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/supabase.svg" }
    ],
    "Herramientas & OS": [
      { name: "Git", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/git.svg" },
      { name: "Docker", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/docker.svg" },
      { name: "npm", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/npm.svg" },
      { name: "Postman", light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/postman.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/postman.svg" },
      { name: "Ubuntu", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/ubuntu.svg" },
      { name: "Arch Linux", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/archlinux/archlinux-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/archlinux.svg" },
      { name: "Neovim", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/neovim/neovim-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/neovim.svg" },
      { name: "Vim", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vim/vim-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/vim.svg" },
      { name: "Shell", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/gnubash.svg" }
    ],
    "Diseño & Otros": [
      { name: "Figma", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/figma.svg" },
      { name: "Illustrator", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/adobeillustrator.svg" },
      { name: "Affinity", light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/affinitydesigner.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/affinitydesigner.svg" },
      { name: "Premiere", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/premierepro/premierepro-plain.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/adobepremierepro.svg" },
      { name: "LaTeX", light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/latex.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/latex.svg" },
      { name: "Perl", light: "https://raw.githubusercontent.com/devicons/devicon/master/icons/perl/perl-original.svg", dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/perl.svg" }
    ]
  };
  
  const allSkills = Object.values(groupedSkills).flat();

  const projects = [
    {
      title: "Himnario Adonai",
      description: "Aplicación web que facilita el acceso a los himnos del grupo cristiano 'Adonai'. Migrada a Next.js para un rendimiento óptimo. Incluye búsqueda rápida, diseño responsive y base de datos local mediante SQL.js que funciona sin backend.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/JhonAQ/himnario-adonai",
      demo: "https://github.com/JhonAQ/himnario-adonai",
      image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/library-app.png"
    },
    {
      title: "QR-Cole",
      description: "Proyecto de asistencia inteligente y sistema de notificación a padres de familia para colegios y escuelas. Diseñado para optimizar el control de entrada y salida de los alumnos de manera automatizada.",
      tech: ["TypeScript", "Node.js", "Frontend"],
      github: "https://github.com/JhonAQ/qr-cole",
      demo: "https://github.com/JhonAQ/qr-cole",
      image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/admin-dashboard.png"
    },
    {
      title: "Proyecto Ayni - Hackaton",
      description: "Proyecto desarrollado durante la Hackaton InnovaSur 2025 enfocado en resolver problemáticas locales a través de la tecnología colaborativa (Ayni).",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JhonAQ/InnovaSur",
      demo: "https://github.com/JhonAQ/InnovaSur",
      image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/landing-page.png"
    },
    {
      title: "Knowledge Wardens",
      description: "Un juego/aplicación interactiva. 'El poderoso brujo ha poseído a tu maestro... busca a los guardianes del conocimiento y véncelo'. Proyecto colaborativo enfocado en la lógica y entretenimiento.",
      tech: ["TypeScript", "Frontend"],
      github: "https://github.com/JhonAQ/knowledge-wardens",
      demo: "https://github.com/JhonAQ/knowledge-wardens",
      image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/rps.png"
    },
    {
      title: "Salve Paz",
      description: "Aplicación basada en Java para expresar gratitud a un maestro estimado, utilizando las librerías gráficas/lógicas Galapagos y EpisUnsa.",
      tech: ["Java", "Galapagos", "EpisUnsa"],
      github: "https://github.com/JhonAQ/salve-paz",
      demo: "https://github.com/JhonAQ/salve-paz",
      image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/paz.gif"
    },
    {
      title: "Competitive Programming",
      description: "Repositorio personal dedicado a la resolución de problemas de programación competitiva, optimización de algoritmos y estructuras de datos.",
      tech: ["C++"],
      github: "https://github.com/JhonAQ/competitive-programming",
      demo: "https://github.com/JhonAQ/competitive-programming",
      image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/episunsa.png"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envío y luego transición al chat
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reiniciar después de 5 segundos para que puedan leer los mensajes
      setTimeout(() => {
        setIsSubmitted(false);
        setTimeout(() => {
          setMessageText("");
          e.target.reset();
        }, 500); // Esperar que acabe la animación de desvanecimiento
      }, 5000); 
    }, 1500);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-indigo-500/30 relative z-0 overflow-x-hidden transition-colors duration-500 cursor-default sm:cursor-none ${isDarkMode ? 'bg-[#0A0F1C] text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
      
      {/* CURSOR MÁGICO */}
      <div 
        ref={cursorRef}
        className={`hidden sm:block pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border-2 z-[9999] transition-all duration-150 ease-out ${isDarkMode ? 'border-indigo-400' : 'border-indigo-600'} ${isHovering ? 'bg-indigo-500/20 backdrop-blur-sm' : 'bg-transparent'}`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-indigo-400' : 'bg-indigo-600'} ${isHovering ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}></div>
      </div>

      {/* Barra de progreso de scroll */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-indigo-500 z-[100] transition-all duration-150 ease-out shadow-[0_0_15px_rgba(99,102,241,1)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Efecto Noise */}
      <div 
        className={`pointer-events-none fixed inset-0 z-[60] mix-blend-overlay transition-opacity duration-500 ${isDarkMode ? 'opacity-[0.035]' : 'opacity-[0.02]'}`}
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />

      {/* Spotlight */}
      <div 
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 mix-blend-screen"
      />

      {/* Estilos GLOBALES */}
      <style>{`
        @media (min-width: 640px) {
          a, button, input, textarea {
            cursor: none !important;
          }
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#0A0F1C' : '#f8fafc'};
          border-left: 1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? '#1e1b4b' : '#c7d2fe'};
          border-radius: 10px;
          border: 2px solid ${isDarkMode ? '#0A0F1C' : '#f8fafc'};
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4f46e5; 
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(60px, -80px) scale(1.15); }
          66% { transform: translate(-40px, 60px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(-10px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
        }

        .animate-float-1 { animation: float-1 5s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 6.5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }

        .animate-blob {
          animation: blob 12s infinite alternate ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Delay extra sutil para la burbuja de respuesta del chat */
        .animation-delay-400 { animation-delay: 400ms; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scroll {
          animation: scroll 90s linear infinite; 
        }

        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.active-reveal {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
      `}</style>

      {/* BACKGROUND GRID & GLOW ORBS */}
      <div className={`fixed inset-0 z-[-2] transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0F1C]' : 'bg-slate-50'}`}></div>
      <div className={`fixed inset-0 z-[-1] bg-[size:32px_32px] transition-colors duration-500 ${isDarkMode ? 'bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)]'}`}></div>
      
      <div className={`fixed top-[-10%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full blur-[100px] md:blur-[150px] z-[-1] pointer-events-none animate-blob transition-colors duration-1000 ${isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-300/40'}`}></div>
      <div className={`fixed bottom-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full blur-[100px] md:blur-[150px] z-[-1] pointer-events-none animate-blob animation-delay-2000 transition-colors duration-1000 ${isDarkMode ? 'bg-blue-600/15' : 'bg-blue-300/40'}`}></div>
      <div className={`fixed top-[20%] left-[60%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] z-[-1] pointer-events-none animate-blob animation-delay-4000 transition-colors duration-1000 ${isDarkMode ? 'bg-purple-600/15' : 'bg-purple-300/40'}`}></div>
      
      {/* NAVBAR FLOTANTE */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl z-50">
        <nav className={`backdrop-blur-md border rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15)] px-6 py-3 flex justify-between items-center transition-all duration-300 relative ${isDarkMode ? 'bg-[#111827]/90 border-white/5' : 'bg-white/90 border-slate-200'}`}>
          
          <span className={`font-bold text-xl tracking-tight pl-2 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Jhon<span className="text-indigo-500">AQ.</span>
          </span>
          
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-7 mr-6">
              {['home', 'about', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`uppercase text-[11px] font-extrabold tracking-widest transition-colors ${
                    activeSection === item 
                      ? 'text-indigo-500' 
                      : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900')
                  }`}
                >
                  {item === 'home' ? 'Home' : item === 'about' ? 'About' : item === 'education' ? 'Educación' : item === 'projects' ? 'Work' : 'Contact'}
                </button>
              ))}
            </div>

            <div className={`w-px h-5 mx-2 transition-colors ${isDarkMode ? 'bg-white/10' : 'bg-slate-300'}`}></div>

            <div className="flex items-center space-x-5 ml-6">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className={`transition-colors p-1.5 rounded-full ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
                title={isDarkMode ? "Modo Claro" : "Modo Oscuro"}
              >
                {isDarkMode ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
              </button>

              <div className={`w-px h-4 mx-1 transition-colors ${isDarkMode ? 'bg-white/10' : 'bg-slate-300'}`}></div>

              <a href="mailto:jariasq@unsa.edu.pe" className={`transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                <Mail size={16} strokeWidth={2.5} />
              </a>
              <a href="https://linkedin.com/in/jhon-aq" target="_blank" rel="noreferrer" className={`transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                <Linkedin size={16} strokeWidth={2.5} />
              </a>
              <a href="https://github.com/JhonAQ" target="_blank" rel="noreferrer" className={`transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                <Github size={16} strokeWidth={2.5} />
              </a>
              
              <button 
                onClick={() => scrollTo('contact')}
                className={`ml-4 text-[11px] font-extrabold tracking-widest px-6 py-2.5 rounded-full transition-all shadow-md uppercase ${isDarkMode ? 'text-white bg-[#1A1F2E] hover:bg-[#2A3143] border border-white/5' : 'text-white bg-slate-900 hover:bg-slate-800'}`}
              >
                Hire Me
              </button>
            </div>
          </div>
          
          <div className="lg:hidden flex items-center gap-4 pr-2">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`transition-colors p-1.5 rounded-full ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className={`absolute top-[120%] left-0 w-full backdrop-blur-xl border rounded-2xl p-5 flex flex-col gap-4 shadow-2xl lg:hidden animate-fade-in-up ${isDarkMode ? 'bg-[#111827]/95 border-white/10' : 'bg-white/95 border-slate-200'}`}>
              {['home', 'about', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`uppercase text-[12px] font-extrabold tracking-widest text-left px-4 py-3 rounded-xl transition-colors ${
                    activeSection === item 
                      ? (isDarkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600') 
                      : (isDarkMode ? 'text-slate-400 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900')
                  }`}
                >
                  {item === 'home' ? 'Home' : item === 'about' ? 'About' : item === 'education' ? 'Educación' : item === 'projects' ? 'Work' : 'Contact'}
                </button>
              ))}
              <div className={`h-px w-full my-2 ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`}></div>
              <button 
                onClick={() => scrollTo('contact')}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-[12px] font-extrabold tracking-widest px-4 py-3 rounded-xl transition-all shadow-md uppercase"
              >
                Hire Me
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-36 md:pt-48 pb-20 px-4 max-w-6xl mx-auto min-h-[100dvh] flex flex-col justify-center relative">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8">
          
          <div className="max-w-2xl flex-1 animate-fade-in-up">
            <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-2 transition-all duration-300 ${isDarkMode ? 'text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'text-slate-900'}`}>
              Hola, soy Jhonatan<span className="text-indigo-500">.</span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-500 md:text-indigo-400 mb-6 h-[40px] md:h-[60px] flex items-center">
              <span>Soy {currentText}</span>
              <span className={`w-[3px] h-[30px] md:h-[45px] bg-indigo-500 ml-1 cursor-blink ${isDarkMode ? 'shadow-[0_0_8px_rgba(99,102,241,0.8)]' : ''}`}></span>
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full border text-sm font-medium cursor-default transition-colors ${isDarkMode ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-200' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}>
                2+ años de experiencia
              </span>
              <span className={`px-4 py-1.5 rounded-full border text-sm font-medium cursor-default transition-colors ${isDarkMode ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-200' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}>
                Disponible para proyectos
              </span>
              <span className={`px-4 py-1.5 rounded-full border text-sm font-medium cursor-default transition-colors ${isDarkMode ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-200' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}>
                Trabajando globalmente
              </span>
            </div>

            <p className={`text-lg mb-10 max-w-xl leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}>
              Construyo aplicaciones web, sistemas robustos y herramientas digitales eficientes, con un enfoque en la confiabilidad, el rendimiento y escribir código limpio.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollTo('contact')}
                className={`px-7 py-3 rounded-md font-bold transition-all flex items-center gap-2 hover:-translate-y-1 uppercase text-[13px] tracking-wide ${isDarkMode ? 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.2)]' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-[0_4px_14px_rgba(99,102,241,0.3)]'}`}
              >
                Ponerse en contacto <ArrowRight size={18} />
              </button>
              
              <a 
                href="/cv-jhonatan-arias.pdf" 
                download
                className={`bg-transparent border px-7 py-3 rounded-md font-bold transition-all flex items-center gap-2 hover:-translate-y-1 uppercase text-[13px] tracking-wide ${isDarkMode ? 'border-white/20 text-white hover:bg-white/5 hover:border-indigo-400' : 'border-slate-300 text-slate-900 hover:bg-slate-100 hover:border-indigo-500'}`}
              >
                Descargar CV <Download size={18} />
              </a>
            </div>
          </div>
          
          <div className="relative flex-shrink-0 animate-fade-in-up animation-delay-200 mb-6 md:mb-0 mr-4 md:mr-10">
            <div className={`relative w-56 h-56 md:w-[320px] md:h-[320px] rounded-full p-2 transition-all duration-500 z-10 ${isDarkMode ? 'bg-indigo-500/10 shadow-[0_0_50px_rgba(99,102,241,0.2)]' : 'bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)]'}`}>
              <div className={`w-full h-full rounded-full overflow-hidden relative group border-[6px] ${isDarkMode ? 'border-[#0A0F1C]' : 'border-white'}`}>
                <img 
                  src="https://avatars.githubusercontent.com/u/139652922?s=400&u=6318f8c516349a9e69365efb64eb177506be0b1d&v=4" 
                  alt="Jhonatan Arias" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 pointer-events-none ${isDarkMode ? 'bg-indigo-900/10' : 'bg-indigo-300/10'}`}></div>
              </div>
            </div>

            <div className={`absolute top-4 -left-6 md:-left-8 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center animate-float-1 z-20 transition-all ${isDarkMode ? 'bg-[#111827] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-slate-300' : 'bg-white border border-slate-100 shadow-xl text-slate-700'}`}>
              <Globe size={24} strokeWidth={1.5} />
            </div>

            <div className={`absolute bottom-10 -left-2 md:-left-4 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center animate-float-2 z-20 transition-all ${isDarkMode ? 'bg-[#111827] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-slate-300' : 'bg-white border border-slate-100 shadow-xl text-slate-700'}`}>
              <Database size={20} strokeWidth={1.5} />
            </div>

            <div className={`absolute top-12 -right-4 md:-right-8 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center animate-float-3 z-20 transition-all ${isDarkMode ? 'bg-[#111827] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-slate-300' : 'bg-white border border-slate-100 shadow-xl text-slate-700'}`}>
              <Code2 size={24} strokeWidth={1.5} />
            </div>

            <div className={`absolute bottom-6 -right-2 md:-right-6 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center animate-float-1 z-20 transition-all ${isDarkMode ? 'bg-[#111827] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] text-slate-300' : 'bg-white border border-slate-100 shadow-xl text-slate-700'}`} style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
               <Cpu size={20} strokeWidth={1.5} />
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 border-t transition-colors duration-500 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 reveal">
            <h2 className={`text-4xl md:text-5xl font-bold text-center md:text-left transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Sobre Mí<span className="text-indigo-500">.</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className={`lg:col-span-2 space-y-6 text-lg leading-relaxed reveal delay-100 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <p className={isDarkMode ? 'hover:text-slate-200 transition-colors duration-300' : 'hover:text-slate-900 transition-colors duration-300'}>
                ¡Hola! Soy Jhonatan, un desarrollador apasionado con sede en Arequipa, Perú. Mi interés por la programación comenzó formalmente en 2023, aunque mi curiosidad técnica me llevó a hacer mis primeros commits allá por el 2017.
              </p>
              <p className={isDarkMode ? 'hover:text-slate-200 transition-colors duration-300' : 'hover:text-slate-900 transition-colors duration-300'}>
                Actualmente estoy vinculado a la <strong className={`transition-colors ${isDarkMode ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-600 hover:text-indigo-500'}`}>Universidad Nacional de San Agustín (UNSA)</strong>, donde he fortalecido mis bases en ciencias de la computación. Me encanta participar en iniciativas colaborativas y desarrollar herramientas que aporten valor real.
              </p>
            </div>
            
            <div className="lg:col-span-3 reveal delay-200">
              <h3 className={`text-2xl font-semibold mb-8 flex items-center gap-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                <Terminal className="text-indigo-500" size={24} /> Mi Arsenal Tecnológico
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {Object.entries(groupedSkills).map(([category, skillsGroup], idx) => (
                  <div key={idx}>
                    <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 transition-colors ${isDarkMode ? 'text-indigo-400/80' : 'text-indigo-600/80'}`}>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {skillsGroup.map((skill, index) => (
                        <span 
                          key={index} 
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium text-xs border transition-all duration-300 cursor-default group hover:-translate-y-1 ${isDarkMode ? 'bg-white/5 text-slate-300 border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:text-white hover:shadow-[0_5px_15px_rgba(99,102,241,0.2)]' : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 shadow-sm hover:shadow-md'}`}
                        >
                          <img 
                            src={isDarkMode ? skill.dark : skill.light} 
                            alt={skill.name} 
                            className={`w-3.5 h-3.5 transition-all opacity-80 group-hover:opacity-100 ${isDarkMode ? 'brightness-0 invert group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]' : ''}`} 
                            onError={(e) => { e.target.style.display = 'none'; }} 
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel Infinito */}
        <div 
          className="relative w-full py-10 mt-16 overflow-hidden flex items-center reveal delay-300"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="flex w-max animate-scroll">
            <div className="flex gap-10 md:gap-14 px-5 md:px-7 items-center justify-center">
              {[...allSkills, ...allSkills].map((skill, index) => (
                <div key={index} className={`transition-all duration-300 cursor-pointer group flex items-center justify-center min-w-[4rem] md:min-w-[5rem] ${isDarkMode ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' : ''}`} title={skill.name}>
                  <img src={isDarkMode ? skill.dark : skill.light} alt={skill.name} className={`h-14 md:h-20 w-auto transform group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? 'brightness-0 invert' : ''}`} />
                </div>
              ))}
            </div>
            <div className="flex gap-10 md:gap-14 px-5 md:px-7 items-center justify-center">
              {[...allSkills, ...allSkills].map((skill, index) => (
                <div key={`clone-${index}`} className={`transition-all duration-300 cursor-pointer group flex items-center justify-center min-w-[4rem] md:min-w-[5rem] ${isDarkMode ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' : ''}`} title={skill.name}>
                  <img src={isDarkMode ? skill.dark : skill.light} alt={skill.name} className={`h-14 md:h-20 w-auto transform group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? 'brightness-0 invert' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-24 border-t transition-colors duration-500 ${isDarkMode ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center reveal">
            <h2 className={`text-4xl md:text-5xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Educación<span className="text-indigo-500">.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto reveal delay-100">
            <div className="relative border-l border-indigo-500/30 ml-3 md:ml-6 space-y-12">
              <div className="relative pl-8 md:pl-10 group">
                <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-indigo-500 transition-colors ${isDarkMode ? 'bg-[#0A0F1C] group-hover:bg-indigo-500' : 'bg-white group-hover:bg-indigo-500'}`}></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'}`}>Universidad Nacional de San Agustín</h3>
                  <span className="text-sm font-medium text-indigo-500 md:text-indigo-400">Presente</span>
                </div>
                <h4 className={`text-lg font-medium mb-3 transition-colors ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-900'}`}>Estudiante de Ciencias de la Computación</h4>
                <p className={`leading-relaxed text-sm transition-colors ${isDarkMode ? 'text-slate-500 group-hover:text-slate-400' : 'text-slate-600 group-hover:text-slate-800'}`}>
                  Formación académica enfocada en structures de datos, análisis de algoritmos, y desarrollo de software.
                </p>
              </div>

              <div className="relative pl-8 md:pl-10 group cursor-default">
                <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-indigo-500 transition-colors ${isDarkMode ? 'bg-[#0A0F1C] group-hover:bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]' : 'bg-white group-hover:bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.4)]'}`}></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'}`}>Hackaton InnovaSur</h3>
                  <span className="text-sm font-medium text-indigo-500 md:text-indigo-400">2025</span>
                </div>
                <h4 className={`text-lg font-medium mb-3 transition-colors ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-900'}`}>Participante & Desarrollador</h4>
                <p className={`leading-relaxed text-sm transition-colors ${isDarkMode ? 'text-slate-500 group-hover:text-slate-400' : 'text-slate-600 group-hover:text-slate-800'}`}>
                  Desarrollo del "Proyecto Ayni", creando soluciones tecnológicas para problemáticas locales mediante el trabajo colaborativo y metodologías ágiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - MOCKUPS 3D */}
      <section id="projects" className={`py-32 border-t transition-colors duration-500 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 reveal">
            <h2 className={`text-4xl md:text-5xl font-bold text-center md:text-left transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Proyectos Destacados<span className="text-indigo-500">.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-32 md:gap-40">
            {projects.slice(0, 3).map((project, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center group`}
              >
                <div className="w-full lg:w-1/2 relative reveal">
                   <Mockup3D image={project.image} isDarkMode={isDarkMode} />
                </div>

                <div className={`w-full lg:w-1/2 flex flex-col items-start text-left reveal delay-200`}>
                  <h3 className={`text-3xl md:text-5xl font-extrabold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-base md:text-lg leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-slate-200' : 'bg-slate-800 text-white'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 border ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-800 text-slate-800 hover:bg-slate-100'}`}>
                      Código Fuente <Github size={18} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shadow-lg ${isDarkMode ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-slate-800 text-white hover:bg-slate-900'}`}>
                      Ver Portal <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Más Proyectos */}
          <div className="mt-40 reveal">
            <h3 className={`text-3xl font-bold text-center mb-16 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Otros Proyectos Interesantes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(3).map((project, index) => (
                <div key={index} className={`reveal delay-${(index % 3 + 1) * 100} backdrop-blur-sm border rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#111827]/60 border-white/5 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'bg-white/60 border-slate-200 hover:border-indigo-300 hover:shadow-xl'}`}>
                  <div className={`w-full h-48 relative overflow-hidden border-b transition-colors ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
                    <div className={`absolute inset-0 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none ${isDarkMode ? 'bg-indigo-900/40' : 'bg-indigo-200/40'}`}></div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450/0A0F1C/4F46E5?text=Proyecto' }} />
                  </div>
                  
                  <div className="p-7 flex flex-col flex-grow">
                    <h4 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'}`}>{project.title}</h4>
                    <p className={`text-sm leading-relaxed mb-6 flex-grow transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`text-[11px] font-mono px-2.5 py-1 rounded-full whitespace-nowrap border transition-colors ${isDarkMode ? 'bg-white/10 text-slate-200 border-white/10' : 'bg-slate-800 text-white border-slate-800'}`}>{tech}</span>
                      ))}
                    </div>
                    
                    <div className={`flex items-center gap-5 mt-auto pt-5 border-t transition-colors ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
                      <a href={project.github} target="_blank" rel="noreferrer" className={`flex items-center gap-2 font-bold text-sm transition-colors ${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-600'}`}><Github size={18} /> Repo</a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className={`flex items-center gap-2 font-bold text-sm transition-colors ${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-600'}`}><ExternalLink size={18} /> Demo</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section - FORMULARIO MAC INTERACTIVO */}
      <section id="contact" className={`py-32 border-t relative overflow-hidden reveal transition-colors duration-500 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] z-[-1] pointer-events-none animate-blob"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            <div>
              <h4 className="text-indigo-500 md:text-indigo-400 font-bold tracking-widest text-xs uppercase mb-3">¿Qué sigue?</h4>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Trabajemos <span className="text-indigo-500">Juntos.</span>
              </h2>
              <p className={`text-lg mb-10 max-w-lg leading-relaxed transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Actualmente estoy abierto a nuevas oportunidades de trabajo y proyectos freelance. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible para responderte pronto.
              </p>

              <div className="space-y-4 mb-10">
                <a href="mailto:jariasq@unsa.edu.pe" className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all group ${isDarkMode ? 'bg-[#111827]/60 border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.02]' : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50 shadow-sm'}`}>
                  <div className={`p-3 rounded-lg transition-all ${isDarkMode ? 'bg-indigo-500/10 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white' : 'bg-indigo-100 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white'}`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Correo Electrónico</h5>
                    <p className={`text-sm transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>jariasq@unsa.edu.pe</p>
                  </div>
                </a>

                <div className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all ${isDarkMode ? 'bg-[#111827]/60 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ubicación</h5>
                    <p className={`text-sm transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Arequipa, Perú (Remoto global)</p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all ${isDarkMode ? 'bg-[#111827]/60 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                    <Github size={20} />
                  </div>
                  <div className="flex-1">
                    <h5 className={`text-sm font-semibold mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Redes Sociales</h5>
                    <div className="flex gap-4">
                      <a href="https://github.com/JhonAQ" target="_blank" rel="noreferrer" className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-500 hover:text-indigo-600'}`}>GitHub</a>
                      <a href="https://linkedin.com/in/jhon-aq" target="_blank" rel="noreferrer" className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-500 hover:text-indigo-600'}`}>LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario Estilo Mac con Animación Chat */}
            <div className={`backdrop-blur-xl border rounded-2xl relative overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-[#0B1120]/90 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-white/90 border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)]'}`}>
              
              {/* Cabecera Mac */}
              <div className={`w-full h-12 flex items-center px-5 gap-2.5 border-b ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_rgba(255,95,86,0.3)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_rgba(255,189,46,0.3)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_5px_rgba(39,201,63,0.3)]"></div>
                <div className={`absolute left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-widest uppercase ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Let's Talk</div>
              </div>

              <div className="relative min-h-[480px]">
                
                {/* ESTADO 1: FORMULARIO */}
                <div className={`absolute inset-0 p-8 transition-all duration-500 flex flex-col justify-center ${isSubmitting || isSubmitted ? 'opacity-0 translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                  <form onSubmit={handleFormSubmit} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="relative z-0 w-full group">
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className={`block py-3 px-0 w-full text-base bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${isDarkMode ? 'text-white border-white/20 focus:border-indigo-400' : 'text-slate-900 border-slate-300 focus:border-indigo-600'}`}
                          placeholder=" "
                        />
                        <label htmlFor="name" className={`absolute text-base duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isDarkMode ? 'text-slate-400 peer-focus:text-indigo-400' : 'text-slate-500 peer-focus:text-indigo-600'}`}>Nombre completo</label>
                      </div>
                      <div className="relative z-0 w-full group">
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className={`block py-3 px-0 w-full text-base bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${isDarkMode ? 'text-white border-white/20 focus:border-indigo-400' : 'text-slate-900 border-slate-300 focus:border-indigo-600'}`}
                          placeholder=" "
                        />
                        <label htmlFor="email" className={`absolute text-base duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isDarkMode ? 'text-slate-400 peer-focus:text-indigo-400' : 'text-slate-500 peer-focus:text-indigo-600'}`}>Correo electrónico</label>
                      </div>
                    </div>

                    <div className="relative z-0 w-full group">
                      <textarea 
                        id="message" 
                        rows="4" 
                        required
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className={`block py-3 px-0 w-full text-base bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors resize-none ${isDarkMode ? 'text-white border-white/20 focus:border-indigo-400' : 'text-slate-900 border-slate-300 focus:border-indigo-600'}`}
                        placeholder=" "
                      ></textarea>
                      <label htmlFor="message" className={`absolute text-base duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isDarkMode ? 'text-slate-400 peer-focus:text-indigo-400' : 'text-slate-500 peer-focus:text-indigo-600'}`}>Cuéntame sobre tu proyecto...</label>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button 
                        type="submit" 
                        className={`group relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 w-full md:w-auto ${
                          isDarkMode ? 'bg-white text-slate-900 hover:bg-indigo-500 hover:text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]' : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]'
                        }`}
                      >
                         <span className="relative z-10">Enviar Mensaje</span>
                         <Send size={16} className="relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* ESTADO 2: ENVIANDO ANIMACIÓN */}
                <div className={`absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-500 ${isSubmitting && !isSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <Send size={40} className="text-indigo-500 animate-bounce mb-4" />
                  <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Enviando a través del ciberespacio...</p>
                </div>

                {/* ESTADO 3: ENVIADO (BURBUJAS DE CHAT) */}
                <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-center transition-all duration-500 delay-300 ${isSubmitted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                  <div className="flex flex-col w-full gap-6">
                    {/* Mensaje del Usuario (Lo que acaba de escribir) */}
                    <div className={`max-w-[85%] self-end rounded-2xl rounded-tr-sm p-5 shadow-lg animate-fade-in-up ${isDarkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'}`}>
                      <p className="text-sm leading-relaxed">{messageText || "¡Hola! Me encantaría que trabajemos juntos."}</p>
                      <div className="text-[10px] text-indigo-200 text-right mt-2 font-medium tracking-wide">Justo ahora</div>
                    </div>
                    
                    {/* Respuesta Automática de JhonAQ */}
                    <div className={`max-w-[85%] self-start rounded-2xl rounded-tl-sm p-5 shadow-lg animate-fade-in-up animation-delay-400 ${isDarkMode ? 'bg-white/10 text-slate-300 border border-white/5' : 'bg-white text-slate-600 border border-slate-100'}`}>
                      <p className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-1.5"><CheckCircle size={14}/> JhonAQ</p>
                      <p className="text-sm leading-relaxed">¡Mensaje recibido con éxito! Muchas gracias por escribirme, lo leeré y me pondré en contacto contigo muy pronto.</p>
                      <div className="text-[10px] text-slate-500 text-right mt-2 font-medium tracking-wide">Automático</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`border-t pt-16 pb-8 relative overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0F1C] border-white/5' : 'bg-slate-100 border-slate-200'}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            <div className="col-span-1 md:col-span-1">
              <span className={`font-bold text-3xl tracking-tight block mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Jhon<span className="text-indigo-500">AQ.</span></span>
              <p className={`text-sm leading-relaxed mb-6 max-w-sm transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Desarrollador de Software especializado en crear soluciones digitales escalables, limpias y eficientes desde Arequipa, Perú, hacia el mundo.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/JhonAQ" target="_blank" rel="noreferrer" className={`hover:scale-110 transition-all p-2.5 rounded-full ${isDarkMode ? 'text-slate-400 hover:text-white bg-white/5 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 'text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm'}`}>
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/jhon-aq" target="_blank" rel="noreferrer" className={`hover:scale-110 transition-all p-2.5 rounded-full ${isDarkMode ? 'text-slate-400 hover:text-white bg-white/5 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 'text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm'}`}>
                  <Linkedin size={18} />
                </a>
                <a href="mailto:jariasq@unsa.edu.pe" className={`hover:scale-110 transition-all p-2.5 rounded-full ${isDarkMode ? 'text-slate-400 hover:text-white bg-white/5 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 'text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm'}`}>
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="col-span-1 flex flex-col md:items-center">
              <div>
                <h4 className={`font-bold mb-4 uppercase text-xs tracking-widest transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Navegación</h4>
                <ul className="space-y-3">
                  {['home', 'about', 'education', 'projects'].map((item) => (
                    <li key={item}>
                      <button 
                        onClick={() => scrollTo(item)}
                        className={`text-sm font-medium transition-colors capitalize flex items-center gap-2 group ${isDarkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}
                      >
                        <span className="w-0 h-px bg-indigo-400 transition-all group-hover:w-3"></span>
                        {item === 'home' ? 'Inicio' : item === 'about' ? 'Sobre mí' : item === 'education' ? 'Educación' : 'Proyectos'}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-span-1 flex flex-col md:items-end justify-between">
              <button 
                onClick={scrollToTop}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group hover:-translate-y-2 ${isDarkMode ? 'bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]' : 'bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white border border-slate-200 hover:border-transparent shadow-sm hover:shadow-lg'}`}
                aria-label="Volver arriba"
              >
                <ChevronUp size={20} className="group-hover:animate-bounce" />
              </button>

              <div className="text-left md:text-right mt-8 md:mt-0">
                <h4 className={`font-bold mb-2 uppercase text-xs tracking-widest transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Status Actual</h4>
                <div className={`flex items-center gap-2 text-sm justify-start md:justify-end transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  Disponible para contratación
                </div>
              </div>
            </div>

          </div>
          
          <div className={`border-t pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4 transition-colors ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Jhonatan Arias Quispe. Todos los derechos reservados.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              Hecho con <span className="text-indigo-500 font-medium">React</span> y mucha lógica.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;