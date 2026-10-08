"use client";

import { Icon } from "@iconify/react";

const tools = [
  { icon: "simple-icons:redux", name: "Redux Toolkit", role: "Predictable Global State" },
  { icon: "simple-icons:reactquery", name: "TanStack Query", role: "Server Cache & Revalidation" },
  { icon: "teenyicons:firebase-outline", name: "Firebase Suite", role: "Auth, Firestore & Storage" },
  { icon: "simple-icons:stripe", name: "Stripe & Paystack", role: "FinTech & Transaction Security" },
  { icon: "simple-icons:shadcnui", name: "Radix UI / Shadcn", role: "Accessible Component Primitives" },
  { icon: "simple-icons:postgresql", name: "PostgreSQL & SQL", role: "Relational Persistence" },
  { icon: "simple-icons:zod", name: "Zod & Hook Form", role: "Type-Safe Runtime Validation" },
  { icon: "simple-icons:framer", name: "Framer Motion", role: "Kinetic Micro-Interactions" },
  { icon: "simple-icons:vercel", name: "Vercel & CI/CD", role: "Edge Routing & Deployment" },
  { icon: "teenyicons:git-solid", name: "Git & GitHub", role: "VCS & Collaborative Sprints" },
];

export default function ToolComp() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="group p-3.5 rounded border border-border bg-bg-secondary/30 hover:border-border-gold transition-all duration-300 flex items-center gap-3.5"
        >
          <div className="p-2 rounded bg-bg-secondary border border-border group-hover:border-accent text-accent transition-colors shrink-0">
            <Icon icon={tool.icon} className="text-xl" />
          </div>
          <div className="min-w-0">
            <span className="font-serif font-bold text-sm text-textI block truncate group-hover:text-accent transition-colors">
              {tool.name}
            </span>
            <span className="font-mono text-[10px] text-textIII block truncate">
              {tool.role}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
