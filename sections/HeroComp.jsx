"use client";

import { useEffect, useState } from "react";
import LinkedInComp from "../components/icons/LinkedInComp";
import TwitterComp from "../components/icons/TwitterComp";
import GithubComp from "../components/icons/GithubComp";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function HeroComp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-center py-12 sm:py-16 md:py-20 border-b border-border overflow-hidden">
      {/* Editorial Watermark / Subtle Radial Backlight */}
      <div className="absolute top-1/4 right-[-10%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col space-y-8 sm:space-y-10 md:space-y-12">
        {/* Status / Category Kicker */}
        <div
          className={`flex flex-wrap items-center gap-2 sm:gap-3 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-accent bg-accent/10 px-2.5 py-1 rounded border border-border-gold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Available for Full-Stack & Engineering Roles</span>
          </span>
          <span className="text-textIII font-mono text-xs hidden sm:inline">•</span>
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-textIII">
            Lagos, Nigeria // Worldwide Remote
          </span>
        </div>

        {/* Main Editorial Kinetic Headline */}
        <div
          className={`space-y-2 sm:space-y-3 transition-all duration-700 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-textI leading-[1.08] break-words">
            David Abolade <span className="text-accent font-light">–</span>
            <span className="block italic font-light text-textI/90 mt-1 sm:mt-2">
              Full-Stack Developer &
            </span>
            <span className="block text-accent">
              Software Architect
            </span>
          </h1>
        </div>

        {/* Narrative & Metric Columns */}
        <div
          className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-2 transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Narrative Paragraph */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-textII text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Building scalable, high-performance web applications with over 3+ years of production experience. Specialized in{" "}
              <strong className="font-medium text-textI">enterprise multi-tenant SaaS</strong>,{" "}
              <strong className="font-medium text-textI">real-time WebRTC communications</strong>, and{" "}
              <strong className="font-medium text-textI">FinTech payment architectures</strong> (Stripe, Paystack) engineered for reliability.
            </p>

            {/* Editorial CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#project"
                className="group px-6 py-3.5 bg-accent text-bgColor font-mono text-xs uppercase tracking-widest font-semibold rounded hover:bg-accent-hover transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>View Selected Work</span>
                <ArrowDownIcon className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/David_Abolade_Resume.pdf"
                download="David_Abolade_Resume.pdf"
                className="px-6 py-3.5 border border-border hover:border-accent text-textI hover:text-accent font-mono text-xs uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Download Résumé</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="px-4 py-3.5 text-textII hover:text-textI font-mono text-xs uppercase tracking-wider transition-colors duration-200 text-center sm:text-left"
              >
                Get In Touch →
              </a>
            </div>
          </div>

          {/* Technical Spec Summary Card */}
          <div className="lg:col-span-4 p-5 sm:p-6 rounded border border-border bg-bg-secondary/50 backdrop-blur-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                Key Metrics
              </span>
              <span className="font-mono text-[10px] text-textIII uppercase">
                Production Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-mono">
              <div className="p-2 rounded bg-bg-tertiary/40 border border-border/40">
                <span className="text-textIII block uppercase text-[10px]">Experience</span>
                <span className="text-textI font-semibold text-sm">3+ Years</span>
              </div>
              <div className="p-2 rounded bg-bg-tertiary/40 border border-border/40">
                <span className="text-textIII block uppercase text-[10px]">Deployments</span>
                <span className="text-textI font-semibold text-sm">20+ Production</span>
              </div>
              <div className="p-2 rounded bg-bg-tertiary/40 border border-border/40">
                <span className="text-textIII block uppercase text-[10px]">Primary Stack</span>
                <span className="text-textI font-semibold text-sm">Next.js / TypeScript</span>
              </div>
              <div className="p-2 rounded bg-bg-tertiary/40 border border-border/40">
                <span className="text-textIII block uppercase text-[10px]">FinTech</span>
                <span className="text-textI font-semibold text-sm">Stripe & Paystack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monospace Social Channels Row */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-hairline font-mono text-xs text-textIII transition-all duration-700 ease-out delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href="https://github.com/A-believer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <GithubComp className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thedavid-ao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <LinkedInComp className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
            <a
              href="https://x.com/theDavid_AO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <TwitterComp className="w-4 h-4" />
              <span>X // TWITTER</span>
            </a>
          </div>

          <span className="text-[11px] tracking-wider uppercase text-textIII/80">
            SYSTEM ARCHITECTURE & PRODUCTION ENGINEERING
          </span>
        </div>
      </div>
    </section>
  );
}
