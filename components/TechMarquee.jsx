"use client";

const techStack = [
  "AI-AUGMENTED WORKFLOWS",
  "OPENAI & GEMINI APIS",
  "CURSOR & CLAUDE CODE",
  "NEXT.JS 15",
  "REACT 19",
  "TYPESCRIPT",
  "WEBRTC STREAMING",
  "FINTECH (STRIPE & PAYSTACK)",
  "NODE.JS",
  "FIREBASE & POSTGRESQL",
  "TANSTACK QUERY & TABLE",
  "TAILWIND CSS V4",
  "REAL-TIME WEBSOCKETS",
  "0-TO-1 PRODUCT DELIVERY",
];

export default function TechMarquee() {
  return (
    <div className="w-full py-4 sm:py-5 border-y border-border overflow-hidden bg-bg-secondary/30 relative select-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-bgColor to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-bgColor to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Doubled list for seamless infinite loop */}
        {[...techStack, ...techStack].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-textII hover:text-accent transition-colors duration-200">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
