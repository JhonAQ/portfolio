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
