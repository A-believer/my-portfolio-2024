"use client";

import SectionHeaderComp from "../components/SectionHeaderComp";
import LanguageComp from "../components/LanguageComp";
import ToolComp from "../components/ToolComp";

const competencies = [
  "AI-Augmented Development (2-3x Velocity)",
  "0-to-1 Product Scaffolding & Rapid MVP Delivery",
  "FinTech Checkout & Subscriptions (Stripe & Paystack)",
  "Multi-Tenant SaaS Architecture & Strict RBAC",
  "Real-Time WebRTC Media & WebSockets",
  "Automated PDF Generation & Digital Signatures",
  "TanStack Table & Recharts Analytics",
  "Type-Safe APIs & Schema Validation (Zod)",
  "Idempotent Webhooks & Event-Driven Systems",
  "Agile Ownership & Direct Founder Collaboration",
];

export default function ToolsComp() {
  return (
    <section className="py-16 sm:py-20 md:py-24 space-y-12 sm:space-y-16 relative w-full border-b border-border" id="tools">
      {/* Chapter 04 Header */}
      <SectionHeaderComp
        chapter="04"
        title="TECHNICAL ARSENAL"
        subtitle="LANGUAGES, AI WORKFLOWS & PRODUCTION INFRASTRUCTURE"
      />

      {/* 2-Column Domain Grid: 1 col on mobile/tablet, 2 cols on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Domain 01: Languages & Frameworks */}
        <div className="space-y-4 sm:space-y-6 animate-on-scroll">
          <div className="flex items-baseline justify-between border-b border-border pb-3">
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-textI">
              Languages & Core Frameworks
            </h3>
            <span className="font-mono text-xs text-accent">DOMAIN // 01</span>
          </div>
          <LanguageComp />
        </div>

        {/* Domain 02: AI Workflows, Cloud & Tools */}
        <div className="space-y-4 sm:space-y-6 animate-on-scroll">
          <div className="flex items-baseline justify-between border-b border-border pb-3">
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-textI">
              AI Tools, Cloud & Persistence
            </h3>
            <span className="font-mono text-xs text-accent">DOMAIN // 02</span>
          </div>
          <ToolComp />
        </div>
      </div>

      {/* Domain 03: Specialized Production Competencies */}
      <div className="pt-6 sm:pt-8 border-t border-hairline space-y-4 sm:space-y-6 animate-on-scroll">
        <div className="flex items-baseline justify-between">
          <h4 className="font-mono text-xs uppercase tracking-widest text-accent">
            High-Impact Core Capabilities
          </h4>
          <span className="font-mono text-[10px] text-textIII uppercase hidden sm:inline">
            Battle-Tested in Production
          </span>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {competencies.map((comp) => (
            <span
              key={comp}
              className="px-3 sm:px-3.5 py-1.5 rounded font-mono text-[11px] sm:text-xs text-textI bg-bg-secondary border border-border hover:border-border-gold transition-colors duration-200"
            >
              • {comp}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
