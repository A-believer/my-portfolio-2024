"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HeaderComp() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggleMenu]);

  return (
    <header className="relative w-full border-b border-border/40 py-5 sm:py-6 transition-all duration-300">
      <div className="flex items-center justify-between w-full">
        {/* Monogram / Brand Wordmark */}
        <div className="flex items-center gap-3">
          <a href="#" className="group flex items-baseline gap-2">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-textI group-hover:text-white transition-colors duration-200">
              David Abolade
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-accent border border-border-gold px-1.5 py-0.5 rounded">
              Architect
            </span>
          </a>
        </div>

        {/* Desktop Editorial Navigation (lg and up) */}
        <nav className="hidden lg:flex items-center gap-x-8">
          <ul className="flex items-center gap-x-8 font-sans text-sm font-medium tracking-wide">
            <li className="relative group">
              <a
                href="#project"
                className="text-textII hover:text-white transition-colors duration-200 flex items-center gap-1.5 py-1"
              >
                <span>Selected Work</span>
                <span className="text-accent font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              </a>
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <a
                href="#playbook"
                className="text-textII hover:text-white transition-colors duration-200 py-1"
              >
                Playbook
              </a>
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <a
                href="#about"
                className="text-textII hover:text-white transition-colors duration-200 py-1"
              >
                About
              </a>
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <a
                href="#tools"
                className="text-textII hover:text-white transition-colors duration-200 py-1"
              >
                Arsenal
              </a>
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <a
                href="#contact"
                className="text-textII hover:text-white transition-colors duration-200 py-1"
              >
                Contact
              </a>
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>

          <div className="flex items-center pl-4 border-l border-border">
            <a
              href="/David_Abolade_Resume.pdf"
              download="David_Abolade_Resume.pdf"
              className="px-4 py-2 border border-border hover:border-accent text-textII hover:text-white rounded text-xs font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-sm"
            >
              Rèsumè ↗
            </a>
          </div>
        </nav>

        {/* Mobile & Tablet Toggle Button (visible below lg) */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="/David_Abolade_Resume.pdf"
            download="David_Abolade_Resume.pdf"
            className="px-3 py-1.5 border border-border text-textII hover:text-white rounded text-xs font-mono uppercase tracking-wider transition-colors duration-200"
          >
            CV ↗
          </a>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="p-2 hover:bg-bg-secondary rounded border border-border text-textI transition-colors cursor-pointer"
            aria-label={toggleMenu ? "Close navigation menu" : "Open navigation menu"}
          >
            {toggleMenu ? (
              <XMarkIcon className="w-6 h-6 text-accent" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile & Tablet Full-Screen Menu Overlay */}
        <div
          className={`fixed inset-0 bg-bgColor/98 backdrop-blur-2xl z-50 transition-all duration-300 ease-in-out lg:hidden ${
            toggleMenu
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-between h-full p-6 sm:p-10 max-w-lg mx-auto overflow-y-auto">
            {/* Mobile Menu Top Header Bar with Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl font-bold tracking-tight text-textI">
                  David Abolade
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent border border-border-gold px-1.5 py-0.5 rounded">
                  Architect
                </span>
              </div>
              <button
                onClick={() => setToggleMenu(false)}
                className="p-2 hover:bg-bg-secondary rounded border border-border text-textI transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <XMarkIcon className="w-6 h-6 text-accent" />
              </button>
            </div>

            <ul className="flex flex-col gap-y-4 pt-4">
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  href="#project"
                  className="flex items-baseline gap-4 group py-2.5 border-b border-border/50"
                >
                  <span className="font-mono text-xs text-accent">01 //</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-textI group-hover:text-white transition-colors duration-200">
                    Selected Work
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  href="#playbook"
                  className="flex items-baseline gap-4 group py-2.5 border-b border-border/50"
                >
                  <span className="font-mono text-xs text-accent">02 //</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-textI group-hover:text-white transition-colors duration-200">
                    Playbook
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  href="#about"
                  className="flex items-baseline gap-4 group py-2.5 border-b border-border/50"
                >
                  <span className="font-mono text-xs text-accent">03 //</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-textI group-hover:text-white transition-colors duration-200">
                    About & Philosophy
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  href="#tools"
                  className="flex items-baseline gap-4 group py-2.5 border-b border-border/50"
                >
                  <span className="font-mono text-xs text-accent">04 //</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-textI group-hover:text-white transition-colors duration-200">
                    Technical Arsenal
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setToggleMenu(false)}
                  href="#contact"
                  className="flex items-baseline gap-4 group py-2.5 border-b border-border/50"
                >
                  <span className="font-mono text-xs text-accent">05 //</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-textI group-hover:text-white transition-colors duration-200">
                    Contact & Inquiries
                  </span>
                </a>
              </li>
            </ul>

            <div className="space-y-4 pt-6 border-t border-border mt-auto">
              <a
                href="/David_Abolade_Resume.pdf"
                download="David_Abolade_Resume.pdf"
                className="w-full block text-center py-3.5 bg-accent text-bgColor rounded font-mono text-xs uppercase tracking-widest font-semibold transition-all hover:bg-accent-hover"
              >
                Download Résumé (PDF)
              </a>
              <p className="text-center text-xs font-mono text-textIII">
                Lagos, Nigeria • Worldwide Remote
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
