export interface EducationItem {
  institution: string;
  role: string;
  year: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    institution: "Universidad Nacional de San Agustín",
    role: "Estudiante de Ciencias de la Computación",
    year: "Presente",
    description: "Formación académica enfocada en structures de datos, análisis de algoritmos, y desarrollo de software."
  },
  {
    institution: "Hackaton InnovaSur",
    role: "Participante & Desarrollador",
    year: "2025",
    description: "Desarrollo del \"Proyecto Ayni\", creando soluciones tecnológicas para problemáticas locales mediante el trabajo colaborativo y metodologías ágiles."
  }
];
