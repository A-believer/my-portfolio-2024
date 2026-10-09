"use client";

import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import ThemeToggle from "../components/ThemeToggle";
import ScrollProgress from "../components/ScrollProgress";
import TechMarquee from "../components/TechMarquee";
import HeroComp from "../sections/HeroComp";
import ProjectComp from "../sections/ProjectComp";
import ArchitecturePlaybook from "../sections/ArchitecturePlaybook";
import AboutComp from "../sections/AboutComp";
import ToolsComp from "../sections/ToolsComp";
import ContactComp from "../sections/ContactComp";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <main className="w-full min-h-screen bg-bgColor text-textI transition-colors duration-300 relative overflow-x-hidden selection:bg-accent selection:text-bgColor">
      {/* Top Scroll Indicator Animation */}
      <ScrollProgress />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        <HeaderComp />
        <HeroComp />
      </div>

      {/* Kinetic Continuous Tech Marquee Animation */}
      <div className="w-full my-6 sm:my-10">
        <TechMarquee />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        <ProjectComp />
        <ArchitecturePlaybook />
        <AboutComp />
        <ToolsComp />
        <ContactComp />
        <FooterComp />
        <ThemeToggle />
      </div>
    </main>
  );
}
