import { techIcons } from "@/data/icons";

export const groupedSkills = {
  "Lenguajes de Programación": [
    { name: "JavaScript", ...techIcons["JavaScript"] },
    { name: "TypeScript", ...techIcons["TypeScript"] },
    { name: "Python", ...techIcons["Python"] },
    { name: "Java", ...techIcons["Java"] },
    { name: "C++", ...techIcons["C++"] },
    { name: "C#", ...techIcons["C#"] },
    { name: "SQL", ...techIcons["SQL"] },
    { name: "Perl", ...techIcons["Perl"] },
    { name: "Shell", ...techIcons["Shell"] },
    { name: "PHP", ...techIcons["PHP"] }
  ],
  "Frontend & Mobile": [
    { name: "React", ...techIcons["React"] },
    { name: "Next.js", ...techIcons["Next.js"] },
    { name: "React Native", ...techIcons["React Native"] },
    { name: "HTML5", ...techIcons["HTML5"] },
    { name: "CSS3", ...techIcons["CSS3"] },
    { name: "Tailwind", ...techIcons["Tailwind"] },
    { name: "Sass", ...techIcons["Sass"] },
    { name: "Flutter", ...techIcons["Flutter"] },
    { name: "Expo", ...techIcons["Expo"] }
  ],
  "Backend & Frameworks": [
    { name: "Node.js", ...techIcons["Node.js"] },
    { name: "NestJS", ...techIcons["NestJS"] },
    { name: "Django", ...techIcons["Django"] },
    { name: "PostgreSQL", ...techIcons["PostgreSQL"] },
    { name: "Supabase", ...techIcons["Supabase"] },
    { name: "Laravel", ...techIcons["Laravel"] }
  ],
  "Herramientas & OS": [
    { name: "Git", ...techIcons["Git"] },
    { name: "Docker", ...techIcons["Docker"] },
    { name: "npm", ...techIcons["npm"] },
    { name: "Postman", ...techIcons["Postman"] },
    { name: "Ubuntu", ...techIcons["Ubuntu"] },
    { name: "Arch Linux", ...techIcons["Arch Linux"] },
    { name: "Neovim", ...techIcons["Neovim"] },
    { name: "Vim", ...techIcons["Vim"] }
  ],
  "Diseño & Otros": [
    { name: "Figma", ...techIcons["Figma"] },
    { name: "Illustrator", ...techIcons["Illustrator"] },
    { name: "Affinity", ...techIcons["Affinity"] },
    { name: "Premiere", ...techIcons["Premiere"] },
    { name: "LaTeX", ...techIcons["LaTeX"] }
  ]
};

export const allSkills = Object.values(groupedSkills).flat();
