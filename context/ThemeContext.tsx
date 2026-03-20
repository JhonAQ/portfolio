"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = mounted ? currentTheme === 'dark' : true; 

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return { isDarkMode, toggleTheme, theme, setTheme };
};

