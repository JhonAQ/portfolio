const fs = require("fs");
let content = fs.readFileSync("app/page.tsx", "utf8");

// Fix TypeScript errors:
content = content.replace(
  "const handleMouseMove = (e) =>",
  "const handleMouseMove = (e: MouseEvent) =>",
);
content = content.replace(
  "let animationFrameId;",
  "let animationFrameId: number;",
);
content = content.replace(
  "const scrollTo = (id) =>",
  "const scrollTo = (id: string) =>",
);
content = content.replace(
  "const scroll = `${(totalScroll / windowHeight) * 100}`;",
  "const scroll = (totalScroll / windowHeight) * 100;",
);
content = content.replace(
  "setScrollProgress(scroll);",
  "setScrollProgress(scroll);",
); // actually need to change state type or what? It was `const scroll = (totalScroll / windowHeight) * 100;` then `setScrollProgress(scroll);`

content = content.replaceAll(
  /const scroll = `\$\{\(totalScroll \/ windowHeight\) \* 100\}`;/g,
  "const scroll = (totalScroll / windowHeight) * 100;",
);
content = content.replaceAll(
  "const handleFormSubmit = (e) =>",
  "const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>",
);
content = content.replaceAll(
  "e.target.reset(); // Limpia el formulario",
  "e.currentTarget.reset(); // Limpia el formulario",
);
content = content.replaceAll(
  "onError={(e) => { e.target.style.display = 'none'; }}",
  "onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}",
);
content = content.replaceAll(
  "onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450/0A0F1C/4F46E5?text=Proyecto' }}",
  "onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x450/0A0F1C/4F46E5?text=Proyecto' }}",
);
content = content.replaceAll('rows="4"', "rows={4}");
content = content.replace(
  "import { Github, Linkedin, Mail, ExternalLink, BookOpen, Terminal, ArrowRight, MapPin, Menu, X, Download, ChevronUp, Award, Send, CheckCircle } from 'lucide-react';",
  "import { Github, Linkedin, Mail, ExternalLink, BookOpen, Terminal, ArrowRight, MapPin, Menu, X, Download, ChevronUp, Award, Send, CheckCircle, Moon, Sun } from 'lucide-react';\nimport { useTheme } from 'next-themes';",
);

fs.writeFileSync("app/page.tsx", content, "utf8");
