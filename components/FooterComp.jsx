"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function FooterComp() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 sm:py-16 border-t border-border mt-8 sm:mt-12 w-full text-xs font-mono space-y-8 sm:space-y-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="font-serif text-lg sm:text-xl font-bold text-textI block">
            David Abolade
          </span>
          <span className="text-textIII text-[11px] uppercase tracking-wider block mt-0.5">
            Full-Stack Developer & Software Architect
          </span>
        </div>

        {/* Navigation Chapter Jumps */}
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-textII text-xs">
          <li>
            <a href="#project" className="hover:text-accent transition-colors">
              01 // Work
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-accent transition-colors">
              02 // Experience
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-accent transition-colors">
              03 // About
            </a>
          </li>
          <li>
            <a href="#tools" className="hover:text-accent transition-colors">
              04 // Arsenal
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent transition-colors">
              05 // Contact
            </a>
          </li>
        </ul>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-2 rounded border border-border text-textII hover:text-accent hover:border-accent transition-all cursor-pointer text-xs"
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUpIcon className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-hairline text-textIII text-[11px]">
        <p>
          © {year} David Abolade. All rights reserved.
        </p>
        <p>
          Designed & Engineered with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
