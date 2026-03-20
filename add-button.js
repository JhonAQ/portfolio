const fs = require("fs");
let content = fs.readFileSync("app/page.tsx", "utf8");

// Insert Theme Toggle exactly before the "Hire Me" button in desktop nav
content = content.replace(
  `<button
                onClick={() => scrollTo('contact')}
                className="ml-4 bg-[#1A1F2E] hover:bg-[#2A3143] text-slate-900 dark:text-white text-[11px] font-extrabold tracking-widest px-6 py-2.5 rounded-full border border-slate-200 dark:border-white/5 transition-all shadow-md uppercase"
              >
                Hire Me
              </button>`,
  `{mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/10 transition-all ml-1 mr-2"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}
              <button
                onClick={() => scrollTo('contact')}
                className="ml-2 bg-indigo-600 dark:bg-[#1A1F2E] hover:bg-indigo-700 dark:hover:bg-[#2A3143] text-white dark:text-white text-[11px] font-extrabold tracking-widest px-6 py-2.5 rounded-full border border-indigo-500/20 dark:border-white/5 transition-all shadow-md uppercase"
              >
                Hire Me
              </button>`,
);

// Insert Theme Toggle Mobile
content = content.replace(
  `<div className="lg:hidden flex items-center gap-4 pr-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}`,
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
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}`,
);

fs.writeFileSync("app/page.tsx", content, "utf8");
