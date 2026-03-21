"use client";

import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import BackgroundEffects from "@/components/features/BackgroundEffects";
import Preloader from "@/components/ui/Preloader";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navSections } from "@/data/constants";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const scrollProgress = useScrollProgress();
  useRevealOnScroll();

  const sectionIds = navSections.map((section) => section.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-indigo-500/30 relative z-0 overflow-x-hidden transition-colors duration-500 cursor-default sm:cursor-none ${
        isDarkMode ? "bg-[#0A0F1C] text-slate-300" : "bg-slate-50 text-slate-600"
      }`}
    >
      <Analytics />
      
      {/* Componente de Carga Inicial */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <BackgroundEffects />

      {/* Barra de progreso de scroll */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-indigo-500 z-[100] transition-all duration-150 ease-out shadow-[0_0_15px_rgba(99,102,241,1)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
