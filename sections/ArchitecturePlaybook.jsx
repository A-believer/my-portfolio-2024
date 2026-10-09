"use client";

import { useState } from "react";
import SectionHeaderComp from "../components/SectionHeaderComp";
import {
  SparklesIcon,
  CurrencyDollarIcon,
  VideoCameraIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const blueprints = [
  {
    id: "mvp-engine",
    number: "01",
    title: "0-to-1 MVP Engine",
    subtitle: "AI-Accelerated Rapid Product Delivery",
    tagline: "Compressing 3-month roadmaps into 2-week production launches without technical debt.",
    icon: SparklesIcon,
    founderProblem:
      "Startups burn critical runway waiting months for traditional development cycles, delaying customer feedback and revenue validation.",
    solution:
      "I leverage modern AI developer workflows (Cursor, Claude Code, Vercel AI SDK) combined with strict TypeScript contracts and reusable design systems to ship fully functional, scalable MVPs in days.",
    flowSteps: [
      { step: "01", title: "Figma & Scope", desc: "User flows & database schema design" },
      { step: "02", title: "AI Scaffolding", desc: "Rapid component & API contract generation" },
      { step: "03", title: "Next.js Core", desc: "Server Actions, type safety & auth" },
      { step: "04", title: "Automated Tests", desc: "Critical path validation & linting" },
      { step: "05", title: "Edge Deploy", desc: "Zero-downtime CI/CD on Vercel" },
    ],
    metrics: [
      { label: "Delivery Speed", val: "2-3x Faster" },
      { label: "Type Safety", val: "100% Strict" },
      { label: "Tech Debt", val: "Zero-Fat Architecture" },
    ],
    tags: ["#NEXTJS15", "#TYPESCRIPT", "#CURSOR", "#CLAUDE-CODE", "#TAILWIND-V4", "#VERCEL"],
  },
  {
    id: "fintech-billing",
    number: "02",
    title: "FinTech & Monetization",
    subtitle: "High-Reliability Payment & Billing Architecture",
    tagline: "Zero-loss checkout sessions, idempotent webhook handlers, and automated subscription lifecycles.",
    icon: CurrencyDollarIcon,
    founderProblem:
      "Dropped webhooks, race conditions, and billing edge cases lead to lost revenue, duplicate charges, and frustrated paying users.",
    solution:
      "Engineered robust Stripe and Paystack integrations with cryptographic signature verification, database transaction locking, idempotent ledger event logs, and automated dunning recovery.",
    flowSteps: [
      { step: "01", title: "Checkout Session", desc: "Tokenized customer card authorization" },
      { step: "02", title: "Payment Gateway", desc: "Stripe & Paystack multi-currency processing" },
      { step: "03", title: "Webhook Verifier", desc: "Cryptographic signature check" },
      { step: "04", title: "Idempotent Log", desc: "Race-condition prevention & lock" },
      { step: "05", title: "Provisioning", desc: "Instant tier unlock & receipt dispatch" },
    ],
    metrics: [
      { label: "Webhook Reliability", val: "99.99% SLA" },
      { label: "Duplicate Charges", val: "Zero Risk" },
      { label: "Compliance", val: "PCI-DSS Best Practices" },
    ],
    tags: ["#STRIPE", "#PAYSTACK", "#NODEJS", "#POSTGRESQL", "#IDEMPOTENCY", "#SECURITY"],
  },
  {
    id: "webrtc-media",
    number: "03",
    title: "Real-Time WebRTC Media",
    subtitle: "Low-Latency Video, Audio & Screen Streaming",
    tagline: "Sub-150ms real-time conferencing with automated server-side transcoding pipelines.",
    icon: VideoCameraIcon,
    founderProblem:
      "Real-time video is notorious for dropped peer connections, jitter, desynced audio, and complex signaling failures.",
    solution:
      "Architected WebRTC multi-user video/audio conferencing platform with resilient WebSocket signaling fallbacks, dynamic bitrate scaling, ICE auto-renegotiation, and custom FFmpeg transcoding.",
    flowSteps: [
      { step: "01", title: "User Media", desc: "Adaptive camera & screen capture" },
      { step: "02", title: "Signaling Server", desc: "WebSockets room & participant state" },
      { step: "03", title: "ICE Handshake", desc: "STUN/TURN optimal peer routing" },
      { step: "04", title: "P2P Stream", desc: "Low-latency bidirectional audio/video" },
      { step: "05", title: "FFmpeg Pipeline", desc: "Server-side recording & compression" },
    ],
    metrics: [
      { label: "Peer Latency", val: "< 150ms" },
      { label: "Reconnection", val: "Auto-Healing Sockets" },
      { label: "Resolution", val: "1080p HD Screen Share" },
    ],
    tags: ["#WEBRTC", "#WEBSOCKETS", "#NODEJS", "#FFMPEG", "#CANVAS-API", "#STREAMING"],
  },
  {
    id: "enterprise-saas",
    number: "04",
    title: "Multi-Tenant SaaS & RBAC",
    subtitle: "Enterprise Data Isolation & Automated Compliance",
    tagline: "Strict tenant boundary enforcement, compliant document engines, and sub-second analytics.",
    icon: ShieldCheckIcon,
    founderProblem:
      "Cross-tenant data exposure is an existential disaster for B2B startups, while manual report generation wastes hundreds of team hours.",
    solution:
      "Built multi-tenant LIMS SaaS platform (Cerium6) with cryptographic tenant data partitioning, strict role-based access control (RBAC), and automated PDF test certificates with digital signatures.",
    flowSteps: [
      { step: "01", title: "Tenant Routing", desc: "Subdomain & organization resolution" },
      { step: "02", title: "RBAC Middleware", desc: "Strict role permission enforcement" },
      { step: "03", title: "Isolated Partition", desc: "Cryptographic database data boundaries" },
      { step: "04", title: "Data Grid", desc: "TanStack Table high-density analytics" },
      { step: "05", title: "PDF Engine", desc: "Digital signature verification & export" },
    ],
    metrics: [
      { label: "Data Isolation", val: "100% Partitioned" },
      { label: "Manual Reports", val: "Zero Bottlenecks" },
      { label: "Grid Query Speed", val: "< 250ms Render" },
    ],
    tags: ["#NEXTJS14", "#FIREBASE", "#TANSTACK-TABLE", "#ZOD", "#PDF-LIB", "#REDUX"],
  },
];

export default function ArchitecturePlaybook() {
  const [activeId, setActiveId] = useState("mvp-engine");
  const activeBlueprint = blueprints.find((b) => b.id === activeId) || blueprints[0];
  const IconComponent = activeBlueprint.icon;

  return (
    <section className="py-16 sm:py-20 md:py-24 space-y-10 sm:space-y-14 relative w-full border-b border-border" id="playbook">
      {/* Chapter 02 Header */}
      <SectionHeaderComp
        chapter="02"
        title="THE BUILDER'S PLAYBOOK"
        subtitle="HOW I SHIP & SCALE: PRODUCTION ARCHITECTURE BLUEPRINTS"
      />

      {/* Blueprint Selector Tabs */}
      <div className="w-full overflow-x-auto no-scrollbar py-1">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 min-w-[620px] lg:min-w-full">
          {blueprints.map((bp) => {
            const BpIcon = bp.icon;
            const isActive = bp.id === activeId;
            return (
              <button
                key={bp.id}
                onClick={() => setActiveId(bp.id)}
                className={`p-3.5 sm:p-4 rounded border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-accent/10 border-accent text-textI shadow-md shadow-accent/5 ring-1 ring-accent/30"
                    : "bg-bg-secondary/40 border-border text-textII hover:border-border-gold hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-mono text-[10px] sm:text-xs text-accent">
                    BLUEPRINT // {bp.number}
                  </span>
                  <BpIcon className={`w-4 h-4 ${isActive ? "text-accent" : "text-textIII group-hover:text-white"}`} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-textI leading-snug">
                    {bp.title}
                  </h4>
                  <p className="font-mono text-[10px] text-textIII mt-0.5 line-clamp-1">
                    {bp.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Blueprint Canvas Card */}
      <div className="p-6 sm:p-8 md:p-10 rounded border border-border-gold/50 bg-bg-secondary/50 backdrop-blur-md space-y-8 animate-on-scroll">
        {/* Top Spec Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded bg-accent/10 text-accent border border-accent/20">
                <IconComponent className="w-5 h-5" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                System Blueprint {activeBlueprint.number}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-textI">
              {activeBlueprint.title}
            </h3>
            <p className="text-textII text-sm sm:text-base font-light leading-relaxed">
              {activeBlueprint.tagline}
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0">
            {activeBlueprint.metrics.map((m) => (
              <div
                key={m.label}
                className="p-2.5 sm:p-3 rounded bg-bg-tertiary/60 border border-border text-center space-y-0.5"
              >
                <span className="font-mono text-[10px] text-textIII block uppercase tracking-wider">
                  {m.label}
                </span>
                <span className="font-serif font-bold text-xs sm:text-sm text-textI block">
                  {m.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The Problem vs Solution (Founder POV) */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded border border-border/80 bg-bg-tertiary/30 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-rose-400 block font-semibold">
              The Founder / Business Bottleneck:
            </span>
            <p className="text-textII text-xs sm:text-sm leading-relaxed font-light">
              {activeBlueprint.founderProblem}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded border border-accent/40 bg-accent/5 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent block font-semibold flex items-center gap-1.5">
              <CheckCircleIcon className="w-3.5 h-3.5" />
              <span>How I Engineer The Solution:</span>
            </span>
            <p className="text-textI text-xs sm:text-sm leading-relaxed font-light">
              {activeBlueprint.solution}
            </p>
          </div>
        </div>

        {/* Visual Architectural Data Flow Pipeline */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-accent flex items-center gap-1.5">
              <CpuChipIcon className="w-4 h-4" />
              <span>Architectural Data Flow Pipeline</span>
            </span>
            <span className="font-mono text-[10px] text-textIII uppercase hidden sm:inline">
              Step-by-Step Execution
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {activeBlueprint.flowSteps.map((s, idx) => (
              <div
                key={s.step}
                className="relative p-3.5 rounded border border-border bg-bg-tertiary/40 space-y-1.5 group hover:border-accent transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-accent font-bold">
                    STEP {s.step}
                  </span>
                  {idx < 4 && (
                    <ArrowRightIcon className="w-3.5 h-3.5 text-textIII hidden lg:block group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
                <h5 className="font-serif font-bold text-sm text-textI">
                  {s.title}
                </h5>
                <p className="font-mono text-[11px] text-textII leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase text-textIII tracking-wider mr-1">
              Tech Stack:
            </span>
            {activeBlueprint.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-textII hover:text-white px-2 py-0.5 rounded bg-bg-secondary border border-border transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="font-mono text-xs text-accent hover:text-accent-hover flex items-center gap-1 font-semibold group cursor-pointer"
          >
            <span>Discuss This Architecture</span>
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
