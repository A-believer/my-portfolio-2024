"use client";

import SectionHeaderComp from "../components/SectionHeaderComp";
import { CheckIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function AboutComp() {
  return (
    <section className="py-16 sm:py-20 md:py-24 space-y-10 sm:space-y-14 relative w-full border-b border-border" id="about">
      {/* Chapter 03 Header */}
      <SectionHeaderComp
        chapter="03"
        title="ABOUT & APPROACH"
        subtitle="PRODUCT MINDSET, VELOCITY & ENGINEERING VALUES"
      />

      {/* Editorial Pull Quote */}
      <div className="animate-on-scroll max-w-4xl border-l-2 border-accent pl-4 sm:pl-6 md:pl-8 py-2">
        <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-textI font-normal leading-snug">
          “I turn product roadmaps into resilient, revenue-generating software—pairing solid full-stack engineering with AI-accelerated delivery.”
        </blockquote>
      </div>

      {/* 2-Column Editorial Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Narrative & Principles */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-on-scroll order-2 lg:order-1">
          <div className="space-y-4 sm:space-y-5 text-textII text-sm sm:text-base md:text-lg leading-relaxed font-light">
            <p>
              I am <strong className="text-textI font-medium">David Abolade</strong>, a product-minded Full-Stack Software Developer with over 3+ years of experience delivering high-velocity web platforms, enterprise SaaS, and mission-critical payment workflows.
            </p>
            <p>
              My sweet spot is bridging business goals and technical execution across the entire stack—from high-performance frontend interfaces (<strong className="text-textI font-medium">React, Next.js, TypeScript</strong>) down through backend services (<strong className="text-textI font-medium">Node.js, Firebase, PostgreSQL, WebSockets</strong>) and compliant payment gateways (<strong className="text-accent font-medium">Stripe & Paystack</strong>).
            </p>
            <p className="p-4 rounded border border-border-gold/40 bg-accent/5 text-textI">
              <span className="font-mono text-xs text-accent font-semibold flex items-center gap-1.5 mb-1 uppercase tracking-wider">
                <SparklesIcon className="w-4 h-4" />
                <span>AI in My Workflow</span>
              </span>
              I actively integrate modern AI tools into my daily engineering cycle—leveraging LLM copilots (Cursor, Claude Code) and AI APIs (OpenAI, Gemini) for rapid architectural scaffolding, automated test generation, and intelligent features. This enables me to ship production-ready features <strong className="text-accent">2-3x faster</strong> without cutting corners on maintainability.
            </p>
          </div>

          {/* Architectural Pillars */}
          <div className="space-y-4 pt-4 sm:pt-6 border-t border-border">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              What I Bring to Your Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 rounded border border-border bg-bg-secondary/40 space-y-1.5 hover:border-border-gold transition-colors">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-textI">
                    0-to-1 Product Execution
                  </h4>
                </div>
                <p className="text-xs text-textII font-light leading-relaxed">
                  Fast translation of wireframes and founder roadmaps into reliable production code.
                </p>
              </div>

              <div className="p-4 rounded border border-border bg-bg-secondary/40 space-y-1.5 hover:border-border-gold transition-colors">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-textI">
                    AI-Accelerated Velocity
                  </h4>
                </div>
                <p className="text-xs text-textII font-light leading-relaxed">
                  Leveraging LLMs and AI developer tools to compress sprint delivery timelines.
                </p>
              </div>

              <div className="p-4 rounded border border-border bg-bg-secondary/40 space-y-1.5 hover:border-border-gold transition-colors">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-textI">
                    FinTech & Payment Systems
                  </h4>
                </div>
                <p className="text-xs text-textII font-light leading-relaxed">
                  High-reliability billing pipelines and checkout architectures via Stripe & Paystack.
                </p>
              </div>

              <div className="p-4 rounded border border-border bg-bg-secondary/40 space-y-1.5 hover:border-border-gold transition-colors">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-textI">
                    Multi-Tenant SaaS & Real-Time
                  </h4>
                </div>
                <p className="text-xs text-textII font-light leading-relaxed">
                  Strict tenant data isolation, RBAC, WebSockets, and low-latency WebRTC media.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Portrait & Academic Foundation */}
        <div className="lg:col-span-5 space-y-6 animate-on-scroll order-1 lg:order-2 w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
          {/* Framed Editorial Portrait */}
          <div className="relative group p-2 rounded border border-border bg-bg-secondary/30">
            <div className="relative aspect-[4/5] overflow-hidden rounded bg-black/80 border border-border-gold">
              <img
                src="/assets/david.jpg"
                alt="David Abolade"
                className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-serif text-lg font-bold text-white block">
                  David Abolade
                </span>
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                  Full-Stack Developer & Product Builder
                </span>
              </div>
            </div>
          </div>

          {/* Academic & Professional Coordinates */}
          <div className="p-5 sm:p-6 rounded border border-border bg-bg-secondary/40 space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent block pb-2 border-b border-border">
              Background & Coordinates
            </span>

            <div className="space-y-3 text-sm">
              <div>
                <span className="font-mono text-[10px] uppercase text-textIII block">
                  Education
                </span>
                <span className="font-serif font-bold text-textI block">
                  B.Sc. Civil Engineering
                </span>
                <span className="text-xs text-textII font-mono">
                  Obafemi Awolowo University (OAU)
                </span>
                <p className="text-xs text-textIII font-light mt-1">
                  Rigorous analytical foundation, structural problem-solving, and systems design.
                </p>
              </div>

              <div className="pt-2 border-t border-hairline flex justify-between items-center text-xs font-mono">
                <span className="text-textIII">Location:</span>
                <span className="text-textI font-medium">Lagos, Nigeria // Remote Globally</span>
              </div>

              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-textIII">Languages:</span>
                <span className="text-textI font-medium">English (Fluent) • Yoruba (Native)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
