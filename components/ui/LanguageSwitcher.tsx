"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import { i18n } from "@/i18n-config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

const flagIcons: Record<string, string> = {
  es: "/icons/flags/es.svg",
  en: "/icons/flags/us.svg",
};

const LanguageSwitcher = () => {
  const { locale, dictionary } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const switchTo = (nextLocale: string) => {
    if (nextLocale === locale) return;

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      segments.push(nextLocale);
    } else {
      segments[0] = nextLocale;
    }

    const newPath = `/${segments.join("/")}` || "/";

    document.cookie = `NEXT_LOCALE=${nextLocale}; Path=/; Max-Age=${COOKIE_MAX_AGE}`;
    setIsOpen(false);
    // Forzar navegación completa para que el proxy aplique cookies y locale
    if (typeof window !== "undefined") {
      window.location.href = newPath;
    } else {
      router.push(newPath);
    }
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      aria-label={dictionary.localeSwitcher.label}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 bg-white shadow-sm hover:border-indigo-300 hover:shadow-md transition-all dark:bg-white/5 dark:border-white/10 dark:hover:border-indigo-300/50"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <img
          src={flagIcons[locale] ?? "/icons/globe.svg"}
          alt={locale.toUpperCase()}
          width={20}
          height={20}
          className="rounded-full w-5 h-5 object-cover"
        />
        <span className="sr-only">{dictionary.localeSwitcher.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-max min-w-[3rem] rounded-xl border border-slate-200 bg-white shadow-lg p-1 backdrop-blur-sm dark:bg-[#0f172a] dark:border-white/10 overflow-hidden z-50">
          {i18n.locales.map((lang) => {
            const isActive = locale === lang;
            return (
              <button
                key={lang}
                onClick={() => switchTo(lang)}
                className={`flex w-full items-center justify-center gap-2 px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-white"
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                }`}
                role="option"
                aria-selected={isActive}
                title={lang === "es" ? "Español" : "English"}
              >
                <img
                  src={flagIcons[lang] ?? "/icons/globe.svg"}
                  alt={lang.toUpperCase()}
                  width={20}
                  height={20}
                  className="rounded-full w-5 h-5 object-cover shadow-sm"
                />
                <span className="sr-only">{lang.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
