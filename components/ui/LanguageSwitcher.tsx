"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import { i18n } from "@/i18n-config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

const LanguageSwitcher = () => {
  const { locale, dictionary } = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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
    router.push(newPath);
  };

  return (
    <div
      className="flex items-center gap-2"
      aria-label={dictionary.localeSwitcher.label}
    >
      {i18n.locales.map((lang) => (
        <button
          key={lang}
          onClick={() => switchTo(lang)}
          className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
            locale === lang
              ? "bg-indigo-500 text-white border-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
              : "bg-transparent text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 dark:text-slate-300 dark:border-white/10 dark:hover:text-white"
          }`}
          aria-pressed={locale === lang}
        >
          {lang === "es"
            ? dictionary.localeSwitcher.es
            : dictionary.localeSwitcher.en}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
