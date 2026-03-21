export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Ingresa.pe",
    description: "Startup EdTech B2C en desarrollo enfocada en postulantes a la UNSA. Ofrece bancos de preguntas de exámenes pasados con una experiencia gamificada tipo Duolingo y UI/UX de alta convertibilidad. Modelo de negocio escalable replicable a nivel nacional.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
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
    demo: "#",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/admin-dashboard.png"
  },
  {
    title: "Himnario Adonai",
    description: "Aplicación web que facilita el acceso a los himnos del grupo cristiano 'Adonai'. Migrada a Next.js para un rendimiento óptimo. Incluye búsqueda rápida, diseño responsive y base de datos local mediante SQL.js que funciona sin backend.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JhonAQ/himnario-adonai",
    demo: "https://github.com/JhonAQ/himnario-adonai",
    image: "https://raw.githubusercontent.com/JhonAQ/pweb1-personal-page/main/img/projects/library-app.png"
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
