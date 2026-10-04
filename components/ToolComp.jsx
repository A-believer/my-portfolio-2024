"use client";

import { Icon } from "@iconify/react";

const tools = [
  { icon: "simple-icons:redux", name: "Redux Toolkit" },
  { icon: "simple-icons:reactquery", name: "TanStack Query" },
  { icon: "teenyicons:firebase-outline", name: "Firebase (Auth/DB)" },
  { icon: "simple-icons:stripe", name: "Stripe Payments" },
  { icon: "simple-icons:shadcnui", name: "Shadcn UI & Radix" },
  { icon: "simple-icons:framer", name: "Framer Motion" },
  { icon: "simple-icons:postgresql", name: "PostgreSQL" },
  { icon: "simple-icons:mongodb", name: "MongoDB" },
  { icon: "mdi:database", name: "SQL" },
  { icon: "simple-icons:zod", name: "Zod & Hook Form" },
  { icon: "simple-icons:vercel", name: "Vercel" },
  { icon: "teenyicons:git-solid", name: "Git & GitHub" },
  { icon: "teenyicons:figma-outline", name: "Figma" },
  { icon: "codicon:vscode", name: "VSCode" },
];

export default function ToolComp() {
  return (
    <div className="text-textI text-base md:text-lg leading-7 grid grid-cols-2 gap-6 md:gap-8 mx-auto">
      {tools.map((tool) => (
        <div key={tool.name} className="flex items-center gap-x-3 group">
          <Icon
            icon={tool.icon}
            className="text-[28px] md:text-[32px] text-accent group-hover:scale-110 transition-transform duration-200"
          />
          <span className="font-medium">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}
