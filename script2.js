const fs = require("fs");
let content = fs.readFileSync("app/page.tsx", "utf8");

// 1. Typescript errors first
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

// 2. Add state for Theme and the toggle buttons
content = content.replace(
  "const [isSubmitted, setIsSubmitted] = useState(false);",
  `const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);`,
);

// Toggle Desktop
content = content.replace(
  "<button \n                onClick={() => scrollTo('contact')}",
  `{mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/10 transition-all ml-1 mr-2"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}
              <button \n                onClick={() => scrollTo('contact')}`,
);

// Toggle Mobile
content = content.replace(
  '<div className="lg:hidden flex items-center gap-4 pr-2">\n            <button',
  `<div className="lg:hidden flex items-center gap-4 pr-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button`,
);

// Helper to replace carefully
function safeReplace(str, search, replacement) {
  return str.split(search).join(replacement);
}

// Backgrounds
content = safeReplace(content, "bg-[#0A0F1C]", "bg-slate-50 dark:bg-[#0A0F1C]");
content = safeReplace(content, "bg-[#111827]", "bg-white dark:bg-[#111827]");

// Texts
content = safeReplace(
  content,
  "text-slate-300",
  "text-slate-700 dark:text-slate-300",
);
content = safeReplace(
  content,
  "text-slate-400",
  "text-slate-600 dark:text-slate-400",
);
content = safeReplace(
  content,
  "text-slate-500",
  "text-slate-500 dark:text-slate-400",
);
content = safeReplace(content, "text-white", "text-slate-900 dark:text-white");

// Borders
content = safeReplace(
  content,
  "border-white/5",
  "border-slate-200 dark:border-white/5",
);
content = safeReplace(
  content,
  "border-white/10",
  "border-slate-200 dark:border-white/10",
);
content = safeReplace(
  content,
  "border-white/20",
  "border-slate-300 dark:border-white/20",
);

// Hover states
content = safeReplace(
  content,
  "hover:text-white",
  "hover:text-indigo-600 dark:hover:text-white",
);
content = safeReplace(
  content,
  "hover:bg-white/5",
  "hover:bg-slate-100 dark:hover:bg-white/5",
);
content = safeReplace(
  content,
  "hover:text-slate-200",
  "hover:text-slate-800 dark:hover:text-slate-200",
);

// Bg with opacity
content = safeReplace(content, "bg-white/5", "bg-slate-100 dark:bg-white/5");

// Save
fs.writeFileSync("app/page.tsx", content, "utf8");
