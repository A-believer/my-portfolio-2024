"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HeaderComp() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-bgColor/80 border-b border-border/50">
      <div className="flex items-center justify-between py-6 w-full">
        <h1 className="text-2xl lg:text-3xl font-bold font-display">
          <a href="#" className="gradient-text">
            David Abolade
          </a>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-x-8">
            <li className="relative group">
              <a
                href="#about"
                className="text-base font-medium text-textII hover:text-textI transition-colors duration-300"
              >
                About
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <a
                href="#experience"
                className="text-base font-medium text-textII hover:text-textI transition-colors duration-300"
              >
                Experience
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <a
                href="#project"
                className="text-base font-medium text-textII hover:text-textI transition-colors duration-300"
              >
                Projects
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <a
                href="#tools"
                className="text-base font-medium text-textII hover:text-textI transition-colors duration-300"
              >
                Tools
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </li>
            <li>
              <Link
                href="/design-options"
                className="px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all duration-300 text-sm font-semibold flex items-center gap-1.5 shadow-sm"
              >
                <span>✨ 5 Design Mockups</span>
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <nav className="lg:hidden flex z-50">
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="p-2 hover:bg-bg-secondary rounded-lg transition-colors cursor-pointer"
            aria-label={toggleMenu ? "Close menu" : "Open menu"}
          >
            {toggleMenu ? (
              <XMarkIcon className="w-7 h-7 text-textI" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-textI" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-[73px] right-0 w-full h-[calc(100vh-73px)] bg-bgColor/95 backdrop-blur-lg border-t border-border lg:hidden z-40 transition-all duration-300 ease-in-out ${
            toggleMenu
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-y-8 h-full p-8">
            <li className="w-full text-center">
              <a
                onClick={() => setToggleMenu(false)}
                href="#about"
                className="block text-2xl font-semibold text-textI hover:text-accent transition-colors py-3"
              >
                About
              </a>
            </li>
            <li className="w-full text-center">
              <a
                onClick={() => setToggleMenu(false)}
                href="#experience"
                className="block text-2xl font-semibold text-textI hover:text-accent transition-colors py-3"
              >
                Experience
              </a>
            </li>
            <li className="w-full text-center">
              <a
                onClick={() => setToggleMenu(false)}
                href="#project"
                className="block text-2xl font-semibold text-textI hover:text-accent transition-colors py-3"
              >
                Projects
              </a>
            </li>
            <li className="w-full text-center">
              <a
                onClick={() => setToggleMenu(false)}
                href="#tools"
                className="block text-2xl font-semibold text-textI hover:text-accent transition-colors py-3"
              >
                Tools
              </a>
            </li>
            <li className="w-full text-center">
              <Link
                onClick={() => setToggleMenu(false)}
                href="/design-options"
                className="block text-xl font-semibold text-accent hover:text-accent-hover transition-colors py-3"
              >
                ✨ 5 Design Mockups
              </Link>
            </li>
            <li className="w-full text-center">
              <a
                onClick={() => setToggleMenu(false)}
                href="#contact"
                className="block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-all duration-300 shadow-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
