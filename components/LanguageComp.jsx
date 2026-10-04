"use client";

import { Icon } from "@iconify/react";

const languages = [
  { icon: "akar-icons:typescript-fill", name: "TypeScript" },
  { icon: "tabler:brand-javascript", name: "JavaScript (ES6+)" },
  { icon: "teenyicons:react-solid", name: "React" },
  { icon: "teenyicons:nextjs-outline", name: "Next.js 14/15" },
  { icon: "teenyicons:vue-outline", name: "Vue.js" },
  { icon: "teenyicons:nodejs-outline", name: "Node.js" },
  { icon: "akar-icons:python-fill", name: "Python" },
  { icon: "mdi:language-php", name: "PHP" },
  { icon: "simple-icons:laravel", name: "Laravel" },
  { icon: "teenyicons:tailwind-solid", name: "Tailwind CSS v4" },
  { icon: "akar-icons:html-fill", name: "HTML 5" },
  { icon: "akar-icons:css-fill", name: "CSS 3" },
  { icon: "simple-icons:astro", name: "Astro" },
  { icon: "bi:filetype-scss", name: "SCSS" },
];

export default function LanguageComp() {
  return (
    <div className="text-textI text-base md:text-lg leading-7 grid grid-cols-2 gap-6 md:gap-8 mx-auto">
      {languages.map((lang) => (
        <div key={lang.name} className="flex items-center gap-x-3 group">
          <Icon
            icon={lang.icon}
            className="text-[28px] md:text-[32px] text-accent group-hover:scale-110 transition-transform duration-200"
          />
          <span className="font-medium">{lang.name}</span>
        </div>
      ))}
    </div>
  );
}
