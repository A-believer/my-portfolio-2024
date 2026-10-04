"use client";

import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      className="fixed bottom-6 right-6 p-4 rounded-full bg-bg-secondary border-2 border-border hover:border-accent shadow-lg hover:shadow-xl transition-all duration-300 z-50 group cursor-pointer"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="text-textI group-hover:text-accent transition-colors">
        {mounted && theme === "dark" ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </div>
    </button>
  );
}
