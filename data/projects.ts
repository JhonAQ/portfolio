export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  pitchDeck?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Ingresa.pe",
    description: "Startup EdTech B2C en desarrollo enfocada en postulantes a la UNSA. Ofrece bancos de preguntas de exámenes pasados con una experiencia gamificada tipo Duolingo y UI/UX de alta convertibilidad. Modelo de negocio escalable replicable a nivel nacional.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    pitchDeck: "#",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/library-app.png"
  },
  {
    title: "Radical Camp 2025",
    description: "Plataforma oficial del campamento nacional de jóvenes IELP. Sistema de inscripción virtual con integración de pagos Yape y módulo 'Social Feed' multimedia tipo TikTok para compartir fotos y videos del evento. Optimizado para SEO.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/JhonAQ/radical-camp-2025",
    demo: "https://radicalcamp.vercel.app",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/landing-page.png"
  },
  {
    title: "EduCheck",
    description: "Sistema integral de control de asistencia para el colegio 'Fe y Ciencia'. Automatización mediante códigos QR que genera reportes de puntualidad y envía notificaciones instantáneas de ingreso/salida a los padres vía WhatsApp Web.",
    tech: ["Node.js", "WhatsApp API", "TypeScript", "QR Code"],
    github: "https://github.com/JhonAQ/qr-cole",
    pitchDeck: "#",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/admin-dashboard.png"
  },
  {
    title: "WaOS Simulator",
    description: "Software educativo de alto nivel para simulación de Sistemas Operativos. Visualiza algoritmos de scheduling (Round Robin, FIFO, etc.) y gestión de memoria (Paginación, Segmentación) con diagramas de Gantt y mapas de memoria en tiempo real. Desarrollado en C++ con Qt.",
    tech: ["C++", "Qt Framework", "Algorithms", "OS Theory"],
    github: "https://github.com/Alfahajor/WaOS",
    demo: "https://github.com/Alfahajor/WaOS",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/episunsa.png"
  },
  {
    title: "Knowledge Wardens",
    description: "RPG educativo web impulsado por IA (Vercel SDK). Los jugadores aprenden fundamentos de programación en un mundo de fantasía, resolviendo desafíos generados dinámicamente según el tema de estudio. Ganador de Hackathon.",
    tech: ["Unity WebGL", "Vercel AI SDK", "Game Design", "React"],
    github: "https://github.com/gustadev24/knowledge-wardens",
    demo: "https://knowledge-wardens.vercel.app",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/rps.png"
  },
  {
    title: "TeToca",
    description: "SaaS B2B para la gestión inteligente de colas virtuales. Permite a los establecimientos descongestionar sus espacios físicos mediante un sistema de turnos digitales y atención optimizada. Proyecto final de Ingeniería de Software.",
    tech: ["React Native", "Node.js", "SaaS", "UX Research"],
    github: "https://github.com/JhonAQ/te-toca-app",
    demo: "https://www.canva.com/design/DAGstnQBFqA/CDYdqHKvCmFpDll9_FRSiA/view",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/admin-dashboard.png"
  },
  {
    title: "IHC HeadControl",
    description: "Sistema de accesibilidad que permite controlar el cursor del mouse mediante gestos faciales y movimientos de cabeza. Diseñado para personas con discapacidad motriz, inspirado en tecnologías asistivas como ACAT.",
    tech: ["Python", "OpenCV", "Computer Vision", "HCI"],
    github: "https://github.com/JhonAQ/IHC-HeadControl",
    demo: "https://github.com/JhonAQ/IHC-HeadControl",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/paz.gif"
  },
  {
    title: "CoderDojo Platform",
    description: "Plataforma educativa gamificada para la enseñanza de programación a escolares (IEEE Student Chapter). Incluye módulos interactivos y juegos de typing. Foco especial en UX/UI amigable para niños.",
    tech: ["React", "UI/UX", "Gamification", "Frontend"],
    github: "https://github.com/JhonAQ/coder-dojo-front",
    demo: "https://coder-dojo-front.vercel.app",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/landing-page.png"
  },
  {
    title: "Himnario Adonai",
    description: "Aplicación web PWA. Facilita el acceso offline a himnos cristianos con búsqueda instantánea y base de datos local optimizada. Migrada a Next.js para máximo rendimiento en dispositivos móviles.",
    tech: ["Next.js", "SQL.js", "PWA", "Tailwind"],
    github: "https://github.com/JhonAQ/himnario-adonai",
    demo: "https://himnario-adonai.vercel.app",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/library-app.png"
  },
  {
    title: "Proyecto Ayni",
    description: "Plataforma de economía colaborativa para comunidades locales. Permite el intercambio de servicios y ayuda mutua. Desarrollado durante la Hackaton InnovaSur 2025.",
    tech: ["HTML/CSS", "JavaScript", "Social Impact"],
    github: "https://github.com/JhonAQ/InnovaSur",
    demo: "https://www.canva.com/design/DAG1ZrHHCEA/tIcwRlLDbcWFEEUqotDYxQ/view",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/landing-page.png"
  }
];
