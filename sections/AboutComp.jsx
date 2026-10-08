"use client";

import SectionHeaderComp from "../components/SectionHeaderComp";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function AboutComp() {
  return (
    <section className="py-16 sm:py-20 md:py-24 space-y-10 sm:space-y-14 relative w-full border-b border-border" id="about">
      {/* Chapter 03 Header */}
      <SectionHeaderComp
        chapter="03"
        title="ABOUT & PHILOSOPHY"
        subtitle="ENGINEERING ETHOS, BACKGROUND & METHODOLOGY"
      />

      {/* Editorial Pull Quote */}
      <div className="animate-on-scroll max-w-4xl border-l-2 border-accent pl-4 sm:pl-6 md:pl-8 py-2">
        <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-textI font-normal leading-snug">
          “Software engineering is the craft of building resilient, scalable systems that solve complex problems and quietly empower everyday lives.”
        </blockquote>
      </div>

      {/* 2-Column Editorial Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Narrative & Principles */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-on-scroll order-2 lg:order-1">
          <div className="space-y-4 sm:space-y-5 text-textII text-sm sm:text-base md:text-lg leading-relaxed font-light">
            <p>
              I am <strong className="text-textI font-medium">David Abolade</strong>, a Full-Stack Software Developer and Systems Architect with 3+ years of experience delivering high-scale web platforms, distributed applications, and secure transaction systems.
            </p>
            <p>
              My expertise covers modern frontend architecture (<strong className="text-textI font-medium">React, Next.js, TypeScript, Vue</strong>) and backend runtime services (<strong className="text-textI font-medium">Node.js, Firebase, PostgreSQL, WebSockets</strong>). In financial engineering, I specialize in building reliable, fault-tolerant payment flows with <strong className="text-accent font-medium">Stripe and Paystack</strong>, implementing idempotent webhook handlers, automated reconciliation, and strict access controls.
            </p>
            <p>
              Whether engineering an enterprise LIMS platform for diagnostic laboratories or deploying real-time WebRTC audio/video systems with FFmpeg media processing, I build clean, maintainable systems designed to scale smoothly under heavy production loads.
            </p>
          </div>

          {/* Architectural Pillars */}
          <div className="space-y-4 pt-4 sm:pt-6 border-t border-border">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              Core Engineering Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 rounded border border-border bg-bg-secondary/40 space-y-1.5 hover:border-border-gold transition-colors">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-textI">
                    Multi-Tenant Isolation
                  </h4>
                </div>
                <p className="text-xs text-textII font-light leading-relaxed">
                  Strict cryptographic separation, tenant routing, and granular RBAC.
                </p>
              </div>

              <div className="p-4 rounded border border-border bg-bg-secondary/40 space-y-1.5 hover:border-border-gold transition-colors">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-textI">
                    Real-Time Communications
                  </h4>
                </div>
                <p className="text-xs text-textII font-light leading-relaxed">
                  Low-latency WebRTC conferencing, live WebSockets, and media streaming.
                </p>
              </div>

              <div className="p-4 rounded border border-border bg-bg-secondary/40 space-y-1.5 hover:border-border-gold transition-colors">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-textI">
                    FinTech Reliability
                  </h4>
                </div>
                <p className="text-xs text-textII font-light leading-relaxed">
                  Idempotent payment pipelines via Stripe and Paystack with compliance.
                </p>
              </div>

              <div className="p-4 rounded border border-border bg-bg-secondary/40 space-y-1.5 hover:border-border-gold transition-colors">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-textI">
                    Type-Safe Systems
                  </h4>
                </div>
                <p className="text-xs text-textII font-light leading-relaxed">
                  End-to-end schema validation with Zod, TypeScript, and TanStack Query.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Portrait & Academic Foundation */}
        <div className="lg:col-span-5 space-y-6 animate-on-scroll order-1 lg:order-2 w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
          {/* Framed Editorial Portrait (Cleaned up, no AI 'FIG' tags) */}
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
                  Software Developer & Systems Architect
                </span>
              </div>
            </div>
          </div>

          {/* Academic & Professional Coordinates */}
          <div className="p-5 sm:p-6 rounded border border-border bg-bg-secondary/40 space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent block pb-2 border-b border-border">
              Academic & Professional Foundation
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
                  Structural systems design, quantitative modeling & analytical problem-solving.
                </p>
              </div>

              <div className="pt-2 border-t border-hairline flex justify-between items-center text-xs font-mono">
                <span className="text-textIII">Location:</span>
                <span className="text-textI font-medium">Lagos, Nigeria (UTC+1)</span>
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
