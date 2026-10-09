"use client";

import { Icon } from "@iconify/react";

const tools = [
  { icon: "simple-icons:openai", name: "OpenAI & Gemini APIs", role: "LLM Features & Embeddings" },
  { icon: "tabler:sparkles", name: "Cursor & Claude Code", role: "AI-Augmented Dev Workflows" },
  { icon: "simple-icons:vercel", name: "Vercel AI SDK", role: "Streaming AI UI & Generative Logic" },
  { icon: "simple-icons:stripe", name: "Stripe & Paystack", role: "FinTech Checkout & Billing" },
  { icon: "teenyicons:firebase-outline", name: "Firebase Suite", role: "Auth, Firestore & Realtime DB" },
  { icon: "simple-icons:postgresql", name: "PostgreSQL & SQL", role: "Relational DBs & Data Modeling" },
  { icon: "simple-icons:reactquery", name: "TanStack Query", role: "Server Cache & Auto-Sync" },
  { icon: "simple-icons:redux", name: "Redux Toolkit", role: "Predictable Global State" },
  { icon: "simple-icons:zod", name: "Zod & Hook Form", role: "Type-Safe Schema Validation" },
  { icon: "simple-icons:docker", name: "Docker & CI/CD", role: "Containers & Automated Releases" },
];

export default function ToolComp() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="group p-3 sm:p-3.5 rounded border border-border bg-bg-secondary/30 hover:border-border-gold transition-all duration-300 flex items-center gap-3"
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
