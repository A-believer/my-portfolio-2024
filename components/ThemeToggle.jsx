"use client";

import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      className="fixed bottom-6 right-6 p-3.5 rounded-full bg-bg-secondary/90 backdrop-blur-md border border-border hover:border-accent shadow-xl hover:shadow-2xl transition-all duration-300 z-50 group cursor-pointer"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="text-textII group-hover:text-accent transition-colors">
        {mounted && theme === "dark" ? (
          <SunIcon className="w-5 h-5 text-accent" />
        ) : (
          <MoonIcon className="w-5 h-5 text-textI" />
        )}
      </div>
    </button>
  );
}
