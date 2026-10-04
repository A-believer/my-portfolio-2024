"use client";

import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import ThemeToggle from "../components/ThemeToggle";
import HeroComp from "../sections/HeroComp";
import AboutComp from "../sections/AboutComp";
import ExperienceComp from "../sections/ExperienceComp";
import ProjectComp from "../sections/ProjectComp";
import ToolsComp from "../sections/ToolsComp";
import ContactComp from "../sections/ContactComp";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <main className="w-full min-h-screen bg-bgColor text-textI transition-colors duration-300 relative">
      <div className="relative max-w-[1440px] mx-auto">
        <div className="relative w-[90%] lg:w-[85%] h-full mx-auto flex flex-col">
          <HeaderComp />
          <HeroComp />
          <AboutComp />
          <ExperienceComp />
          <ProjectComp />
          <ToolsComp />
          <ContactComp />
          <FooterComp />
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}
