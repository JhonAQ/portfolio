
export interface TrajectoryItem {
  type: string;
  label: string;
  title: string;
  flags?: string[];
  subtitle: string;
  date: string;
  description: string;
  icon: string;
  image?: string;
  tech?: string[];
}

export const trajectory: TrajectoryItem[] = [
  {
    type: "work",
    label: "Trabajo Remoto",
    title: "Desarrollador de Software",
    flags: ["mx"],
    subtitle: "ACRU (México) | Misioneros Digitales",
    date: "2026",
    description: "Desarrollé sistemas de uso interno para la organización. Fui responsable de la creación de soluciones digitales a medida, incluyendo la implementación de plugins personalizados para WordPress.",
    icon: "Globe",
    tech: ["Laravel", "PHP", "Flutter"]
  },
  {
    type: "work",
    label: "Trabajo Freelance",
    title: "Desarrollador Freelance",
    subtitle: "Sistema de Gestión 'Brigadapp'",
    date: "2026",
    description: "Desarrollé y comercialicé 'Brigadapp', un sistema integral de software diseñado y vendido a una institución educativa. El sistema permitió gestionar y registrar a 50 brigadieres junto con sus reportes de incidencias, reduciendo el uso de papel al 0%.",
    icon: "Briefcase",
    tech: ["TypeScript", "Supabase", "Next.js"]
  },
  {
    type: "work",
    label: "Trabajo",
    title: "Desarrollador de Software",
    flags: ["pe", "no"],
    subtitle: "IELP (Iglesia Evangélica Luterana - Perú)",
    date: "2025",
    description: "Lideré la digitalización de la organización. Desarrollé una landing page interactiva para el Campamento Nacional de Jóvenes (Radical) y programé una aplicación móvil de himnario que actualmente se encuentra en producción.",
    icon: "HeartHandshake",
    tech: ["PostgreSQL", "Next.js", "React Native", "Expo"]
  },
  {
    type: "education",
    label: "Educación",
    title: "Training Camp Argentina 2025",
    flags: ["ar"],
    subtitle: "Entrenamiento de Alto Rendimiento | UTN Santa Fe",
    date: "2025",
    description: "Participé en un entrenamiento inmersivo de dos semanas junto a los mejores programadores competitivos de Latinoamérica en la UTN. Perfeccioné mi dominio en teoría de grafos, programación dinámica y tópicos avanzados de algoritmia.",
    icon: "Terminal",
    image: "/images/education/training-camp.png",
    tech: ["C++", "Python"]
  },
  {
    type: "award",
    label: "Competición",
    title: "Hackathon PeruHub",
    subtitle: "Desarrollador Participante | Unity Perú (Lima)",
    date: "2025",
    description: "Participé en el evento tecnológico organizado por Unity Perú, desarrollando soluciones innovadoras y compitiendo de la mano de talentos de todo el país.",
    icon: "Trophy",
    tech: []
  },
  {
    type: "award",
    label: "Competición",
    title: "Hackaton InnovaSur",
    subtitle: "Creador del Proyecto 'Ayni' | UCSP",
    date: "2025",
    description: "Lideré la creación de 'Ayni' en representación de la UNSA, una plataforma enfocada en facilitar el acceso oportuno a la monitorización de la salud en zonas vulnerables y sin acceso a centros médicos.",
    icon: "Trophy",
    image: "/images/education/project-ayni.png",
    tech: ["Tailwind CSS", "TypeScript", "Figma"]
  },
  {
    type: "volunteer",
    label: "Voluntariado Universitario",
    title: "Miembro Activo y Desarrollador",
    subtitle: "CEIS, IEEE & ACM Student Chapters",
    date: "Desde 2024",
    description: "Participé activamente en el Centro de Estudiantes de Ingeniería de Sistemas (CEIS) y los capítulos estudiantiles de IEEE y ACM, contribuyendo al desarrollo técnico y la organización de la comunidad académica.",
    icon: "Users",
    tech: []
  },
  {
    type: "work",
    label: "Trabajo Freelance",
    title: "Desarrollador Freelance",
    subtitle: "Sistema de Asistencia 'Educheck'",
    date: "2024",
    description: "Desarrollé y vendí comercialmente 'Educheck', un sistema de asistencia inteligente y reporte automatizado a padres. Este proyecto fue galardonado en la feria de ciencias Eureka.",
    icon: "Briefcase",
    image: "/images/education/educheck.png",
    tech: ["Supabase", "Next.js"]
  },
  {
    type: "cert",
    label: "Certificación",
    title: "Certificaciones Tech: Cloud & DB",
    subtitle: "Google Cloud Foundations & Oracle APEX",
    date: "2024",
    description: "Obtuve acreditaciones internacionales en fundamentos de infraestructura en la nube (GCP) y desarrollo ágil de aplicaciones empresariales utilizando Oracle APEX.",
    icon: "Cloud",
    tech: []
  },
  {
    type: "award",
    label: "Competición",
    title: "Programación Competitiva (RPC e IEEEXtreme)",
    subtitle: "Top 5 Perú | Top 20 Latam",
    date: "2023 - 2024",
    description: "Competí al más alto nivel en la Red de Programación Competitiva (RPC) y en maratones de 24 horas (IEEEXtreme). Destaqué en optimización algorítmica y resolución de problemas bajo presión extrema, logrando posicionar a nuestro equipo entre los mejores de la región.",
    icon: "Code2",
    tech: ["C++", "Python"]
  },
  {
    type: "work",
    label: "Trabajo",
    title: "Automatización y Scripting de Datos",
    subtitle: "Municipalidad de Cabana | Sistema INDECI",
    date: "2023",
    description: "Desarrollé scripts avanzados para la automatización, procesamiento y gestión eficiente de datos críticos correspondientes al sistema de INDECI. Logré reducir el trabajo manual de 2 meses a solo 3 días de ejecución.",
    icon: "Database",
    tech: ["Python"]
  },
  {
    type: "volunteer",
    label: "Voluntariado",
    title: "Mentor STEM y Voluntariado Educativo",
    subtitle: "Colegio de Ingenieros del Perú",
    date: "2023",
    description: "Lideré sesiones de mentoría enseñando Python a adolescentes, proceso que culminó en la organización exitosa de un concurso de programación competitiva para incentivar el talento tecnológico joven.",
    icon: "Users",
    image: "/images/education/stem-mentor.png",
    tech: ["Python"]
  },
  {
    type: "education",
    label: "Educación",
    title: "Universidad Nacional de San Agustín (UNSA)",
    subtitle: "Ingeniería de Sistemas",
    date: "Desde 2023",
    description: "Me formo académicamente de manera superior con un enfoque analítico en arquitectura de software, ingeniería de datos, análisis matemático y patrones de diseño de sistemas complejos.",
    icon: "GraduationCap",
    tech: []
  }
];
