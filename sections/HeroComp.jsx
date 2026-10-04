"use client";

import { useEffect, useState } from "react";
import GithubComp from "../components/icons/GithubComp";
import LinkedInComp from "../components/icons/LinkedInComp";
import TwitterComp from "../components/icons/TwitterComp";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function HeroComp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden py-20 lg:py-0">
      {/* Ambient Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 w-full">
            {/* Eyebrow */}
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold tracking-wider uppercase border border-accent/20">
                Frontend-Focused Full-Stack Developer
              </span>
            </div>

            {/* Main Heading */}
            <div
              className={`transition-all duration-700 ease-out delay-100 space-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight font-display">
                <span className="text-textI block">David</span>
                <span className="gradient-text block">Abolade</span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-700 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-textII text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Over 3+ years delivering digital solutions for customer-facing platforms,{" "}
                <span className="text-textI font-medium">FinTech payment integrations</span> (Stripe, Paystack),{" "}
                secure authentication systems, and scalable enterprise SaaS.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 transition-all duration-700 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="/David_Abolade_Resume.pdf"
                download="David_Abolade_Resume.pdf"
                className="group px-8 py-4 bg-accent text-white rounded-full font-medium text-base hover:bg-accent-hover hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Download Resume
              </a>
              <a
                href="#experience"
                className="group px-8 py-4 bg-textI text-bgColor rounded-full font-medium text-base hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Experience
              </a>
              <a
                href="#project"
                className="group px-8 py-4 border border-border text-textI rounded-full font-medium text-base hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
              >
                Explore Projects
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-6 pt-6 transition-all duration-700 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/thedavid-ao"
                className="p-3 rounded-full border border-border text-textII hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedInComp className="w-6 h-6" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/theDavid_AO"
                className="p-3 rounded-full border border-border text-textII hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter/X"
              >
                <TwitterComp className="w-6 h-6" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/A-believer"
                className="p-3 rounded-full border border-border text-textII hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <GithubComp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              {/* Animated Blob Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[60px] opacity-40 animate-[spin_10s_linear_infinite]"></div>

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden border-[8px] border-bg-secondary/50 shadow-2xl rounded-[40%_60%_70%_30%/40%_50%_60%_50%] hover:rounded-[50%_50%_50%_50%] transition-all duration-700 ease-in-out">
                <img
                  src="/assets/david.jpg"
                  alt="David Abolade"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-bgColor/40 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-6 bg-bgColor/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl animate-[bounce_3s_infinite] hidden md:block">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20 group ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to About section"
      >
        <div className="p-2 rounded-full border border-textII/20 bg-bg-secondary/50 backdrop-blur-sm group-hover:border-accent group-hover:text-accent transition-colors">
          <ChevronDownIcon className="h-6 w-6 text-textII group-hover:text-accent" />
        </div>
      </a>
    </section>
  );
}
