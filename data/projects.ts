import type { Locale } from "@/i18n-config";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  pitchDeck?: string;
  image: string;
  video?: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  isDeveloping?: boolean;
}

type ProjectsByLocale = Record<Locale, Project[]>;

export const projects: ProjectsByLocale = {
  es: [
    {
      title: "Ingresa.pe",
      description:
        "Startup EdTech B2C en desarrollo enfocada en postulantes a la UNSA. Ofrece bancos de preguntas de exámenes pasados con una experiencia gamificada tipo Duolingo y UI/UX de alta convertibilidad. Modelo de negocio escalable replicable a nivel nacional.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      image: "/images/trabajos/ingresa-pe.png",
      imageFit: "contain",
      imageBg: "white",
      isDeveloping: true,
    },
    {
      title: "Radical Camp 2025",
      description:
        "Plataforma oficial del campamento nacional de jóvenes IELP. Sistema de inscripción virtual con integración de pagos Yape y módulo 'Social Feed' multimedia tipo TikTok para compartir fotos y videos del evento. Optimizado para SEO.",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      github: "https://github.com/JhonAQ/radical-camp-2025",
      demo: "https://radicalcamp.vercel.app",
      image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/landing-page.png",
      video: "/video/radical.webm",
    },
    {
      title: "EduCheck",
      description:
        "Sistema integral de control de asistencia para el colegio 'Fe y Ciencia'. Automatización mediante códigos QR que genera reportes de puntualidad y envía notificaciones instantáneas de ingreso/salida a los padres vía WhatsApp Web.",
      tech: ["Node.js", "WhatsApp API", "TypeScript", "QR Code"],
      github: "https://github.com/JhonAQ/qr-cole",
      image: "/images/trabajos/educheck.png",
    },
    {
      title: "WaOS Simulator",
      description:
        "Software educativo de alto nivel para simulación de Sistemas Operativos. Visualiza algoritmos de scheduling (Round Robin, FIFO, etc.) y gestión de memoria (Paginación, Segmentación) con diagramas de Gantt y mapas de memoria en tiempo real. Desarrollado en C++ con Qt.",
      tech: ["C++", "Qt Framework", "Algorithms", "OS Theory"],
      github: "https://github.com/Alfahajor/WaOS",
      image: "/images/trabajos/waos.png",
    },
    {
      title: "Knowledge Wardens",
      description:
        "RPG educativo web impulsado por IA (Vercel SDK). Los jugadores aprenden fundamentos de programación en un mundo de fantasía, resolviendo desafíos generados dinámicamente según el tema de estudio. Ganador de Hackathon.",
      tech: ["Unity WebGL", "Vercel AI SDK", "Game Design", "React"],
      github: "https://github.com/gustadev24/knowledge-wardens",
      demo: "https://knowledge-wardens.vercel.app",
      image: "/images/trabajos/knowdledge-wardens.png",
    },
    {
      title: "TeToca",
      description:
        "SaaS B2B para la gestión inteligente de colas virtuales. Permite a los establecimientos descongestionar sus espacios físicos mediante un sistema de turnos digitales y atención optimizada. Proyecto final de Ingeniería de Software.",
      tech: ["React Native", "Node.js", "SaaS", "UX Research"],
      github: "https://github.com/JhonAQ/te-toca-app",
      pitchDeck: "https://www.canva.com/design/DAGstnQBFqA/CDYdqHKvCmFpDll9_FRSiA/view",
      image: "/images/trabajos/tetoca.png",
    },
    {
      title: "IHC HeadControl",
      description:
        "Sistema de accesibilidad que permite controlar el cursor del mouse mediante gestos faciales y movimientos de cabeza. Diseñado para personas con discapacidad motriz, inspirado en tecnologías asistivas como ACAT.",
      tech: ["Python", "OpenCV", "Computer Vision", "HCI"],
      github: "https://github.com/JhonAQ/IHC-HeadControl",
      image: "/images/trabajos/ihc-head-control.png",
    },
    {
      title: "CoderDojo Platform",
      description:
        "Plataforma educativa gamificada para la enseñanza de programación a escolares (IEEE Student Chapter). Incluye módulos interactivos y juegos de typing. Foco especial en UX/UI amigable para niños.",
      tech: ["React", "UI/UX", "Gamification", "Frontend"],
      github: "https://github.com/JhonAQ/coder-dojo-front",
      demo: "https://coder-dojo-front.vercel.app",
      image: "/images/trabajos/coderdojo.png",
    },
    {
      title: "Himnario Adonai",
      description:
        "Aplicación web PWA. Facilita el acceso offline a himnos cristianos con búsqueda instantánea y base de datos local optimizada. Migrada a Next.js para máximo rendimiento en dispositivos móviles.",
      tech: ["Next.js", "SQL.js", "PWA", "Tailwind"],
      github: "https://github.com/JhonAQ/himnario-adonai",
      demo: "https://himnario-adonai.vercel.app",
      image: "/images/trabajos/adonai.jfif",
    },
    {
      title: "Proyecto Ayni",
      description:
        "Plataforma de economía colaborativa para comunidades locales. Permite el intercambio de servicios y ayuda mutua. Desarrollado durante la Hackaton InnovaSur 2025.",
      tech: ["HTML/CSS", "JavaScript", "Social Impact"],
      github: "https://github.com/JhonAQ/InnovaSur",
      pitchDeck: "https://www.canva.com/design/DAG1ZrHHCEA/tIcwRlLDbcWFEEUqotDYxQ/view",
      image: "/images/trabajos/ayni.png",
    },
  ],
  en: [
    {
      title: "Ingresa.pe",
      description:
        "B2C EdTech startup in development focused on UNSA applicants. Offers past exam question banks with a Duolingo-like gamified experience and high-converting UI/UX. Scalable model replicable nationwide.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      image: "/images/trabajos/ingresa-pe.png",
      imageFit: "contain",
      imageBg: "white",
      isDeveloping: true,
    },
    {
      title: "Radical Camp 2025",
      description:
        "Official platform for the IELP national youth camp. Online registration with Yape payments and a TikTok-style social feed for sharing event media. SEO optimized.",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      github: "https://github.com/JhonAQ/radical-camp-2025",
      demo: "https://radicalcamp.vercel.app",
      image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/landing-page.png",
      video: "/video/radical.webm",
    },
    {
      title: "EduCheck",
      description:
        "End-to-end attendance system for the 'Fe y Ciencia' school. QR automation generates punctuality reports and sends instant in/out notifications to parents via WhatsApp Web.",
      tech: ["Node.js", "WhatsApp API", "TypeScript", "QR Code"],
      github: "https://github.com/JhonAQ/qr-cole",
      image: "/images/trabajos/educheck.png",
    },
    {
      title: "WaOS Simulator",
      description:
        "Advanced educational software to simulate Operating Systems. Visualizes scheduling algorithms (Round Robin, FIFO, etc.) and memory management (Paging, Segmentation) with real-time Gantt charts and memory maps. Built in C++ with Qt.",
      tech: ["C++", "Qt Framework", "Algorithms", "OS Theory"],
      github: "https://github.com/Alfahajor/WaOS",
      image: "/images/trabajos/waos.png",
    },
    {
      title: "Knowledge Wardens",
      description:
        "AI-powered educational web RPG (Vercel SDK). Players learn programming fundamentals in a fantasy world, solving dynamically generated challenges. Hackathon winner.",
      tech: ["Unity WebGL", "Vercel AI SDK", "Game Design", "React"],
      github: "https://github.com/gustadev24/knowledge-wardens",
      demo: "https://knowledge-wardens.vercel.app",
      image: "/images/trabajos/knowdledge-wardens.png",
    },
    {
      title: "TeToca",
      description:
        "B2B SaaS for smart virtual queue management. Helps venues reduce physical crowds through digital ticketing and optimized service. Software Engineering capstone project.",
      tech: ["React Native", "Node.js", "SaaS", "UX Research"],
      github: "https://github.com/JhonAQ/te-toca-app",
      pitchDeck: "https://www.canva.com/design/DAGstnQBFqA/CDYdqHKvCmFpDll9_FRSiA/view",
      image: "/images/trabajos/tetoca.png",
    },
    {
      title: "IHC HeadControl",
      description:
        "Accessibility system that lets users control the mouse cursor with facial gestures and head movements. Designed for motor-impaired users, inspired by assistive tech like ACAT.",
      tech: ["Python", "OpenCV", "Computer Vision", "HCI"],
      github: "https://github.com/JhonAQ/IHC-HeadControl",
      image: "/images/trabajos/ihc-head-control.png",
    },
    {
      title: "CoderDojo Platform",
      description:
        "Gamified learning platform for teaching programming to kids (IEEE Student Chapter). Includes interactive modules and typing games with child-friendly UX/UI.",
      tech: ["React", "UI/UX", "Gamification", "Frontend"],
      github: "https://github.com/JhonAQ/coder-dojo-front",
      demo: "https://coder-dojo-front.vercel.app",
      image: "/images/trabajos/coderdojo.png",
    },
    {
      title: "Himnario Adonai",
      description:
        "PWA web app providing offline access to Christian hymns with instant search and optimized local database. Migrated to Next.js for top performance on mobile.",
      tech: ["Next.js", "SQL.js", "PWA", "Tailwind"],
      github: "https://github.com/JhonAQ/himnario-adonai",
      demo: "https://himnario-adonai.vercel.app",
      image: "/images/trabajos/adonai.jfif",
    },
    {
      title: "Project Ayni",
      description:
        "Collaborative economy platform for local communities, enabling service exchange and mutual aid. Built during the InnovaSur 2025 hackathon.",
      tech: ["HTML/CSS", "JavaScript", "Social Impact"],
      github: "https://github.com/JhonAQ/InnovaSur",
      pitchDeck: "https://www.canva.com/design/DAG1ZrHHCEA/tIcwRlLDbcWFEEUqotDYxQ/view",
      image: "/images/trabajos/ayni.png",
    },
  ],
};
