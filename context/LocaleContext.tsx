"use client";

import { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/i18n-config";

type Dictionary = Awaited<ReturnType<typeof import("@/lib/dictionary")["getDictionary"]>>;

interface LocaleContextValue {
  locale: Locale;
  dictionary: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}

export const LocaleProvider = ({ locale, dictionary, children }: LocaleProviderProps) => {
  const value = useMemo(() => ({ locale, dictionary }), [locale, dictionary]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
