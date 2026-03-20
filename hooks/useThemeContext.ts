"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeContext = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = mounted ? currentTheme === 'dark' : true; // Default to dark on server/first render to match original

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return { isDarkMode, toggleTheme, theme, setTheme };
};
