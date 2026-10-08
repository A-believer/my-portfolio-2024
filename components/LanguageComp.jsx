"use client";

import { Icon } from "@iconify/react";

const languages = [
  { icon: "akar-icons:typescript-fill", name: "TypeScript", role: "Primary Language / Static Typing" },
  { icon: "tabler:brand-javascript", name: "JavaScript (ES6+)", role: "Web Engine & Async Systems" },
  { icon: "teenyicons:react-solid", name: "React 19 / 18", role: "Component Architecture" },
  { icon: "teenyicons:nextjs-outline", name: "Next.js 14 / 15", role: "App Router / SSR & SSG" },
  { icon: "teenyicons:vue-outline", name: "Vue.js", role: "Reactive SPA Architecture" },
  { icon: "teenyicons:nodejs-outline", name: "Node.js", role: "Backend Event Loop & APIs" },
  { icon: "teenyicons:tailwind-solid", name: "Tailwind CSS v4", role: "Design Systems & Tokenization" },
  { icon: "akar-icons:python-fill", name: "Python", role: "Automation & Data Pipelines" },
  { icon: "mdi:language-php", name: "PHP / Laravel", role: "Legacy Enterprise Systems" },
  { icon: "simple-icons:astro", name: "Astro", role: "Content-First Performance" },
];

export default function LanguageComp() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {languages.map((lang) => (
        <div
          key={lang.name}
          className="group p-3.5 rounded border border-border bg-bg-secondary/30 hover:border-border-gold transition-all duration-300 flex items-center gap-3.5"
        >
          <div className="p-2 rounded bg-bg-secondary border border-border group-hover:border-accent text-accent transition-colors shrink-0">
            <Icon icon={lang.icon} className="text-xl" />
          </div>
          <div className="min-w-0">
            <span className="font-serif font-bold text-sm text-textI block truncate group-hover:text-accent transition-colors">
              {lang.name}
            </span>
            <span className="font-mono text-[10px] text-textIII block truncate">
              {lang.role}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
