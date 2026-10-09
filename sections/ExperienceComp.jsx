"use client";

import SectionHeaderComp from "../components/SectionHeaderComp";

const experiences = [
  {
    initials: "MM",
    role: "Front-end Software Developer",
    company: "Market Master USA",
    location: "Remote, USA",
    period: "Oct 2024 – Present",
    scope: "Real-Time Comms, WebRTC Media Processing & SaaS Dashboards",
    highlights: [
      "Architected and shipped 20+ production web applications across real-time comms, FinTech, and operations, leveraging AI-assisted developer workflows to cut feature turnaround times.",
      "Engineered a WebRTC virtual conferencing platform supporting multi-user video/audio calls, screen sharing, dynamic room routing, and automated FFmpeg media processing.",
      "Built the Zenith Properties management suite, automating inspection requests and contractor job dispatch across connected dashboards.",
      "Shipped automated personal and business credit tracking & dispute tools, empowering users to monitor financial health in real time.",
    ],
    skills: ["#REACT", "#TYPESCRIPT", "#WEBRTC", "#WEBSOCKETS", "#NODEJS", "#AI-WORKFLOWS", "#TAILWIND"],
  },
  {
    initials: "LW",
    role: "Full-Stack Web Developer",
    company: "Labwox",
    location: "Remote, Nigeria",
    period: "Apr 2023 – Present",
    scope: "Cerium6 / LabSoft — Enterprise Multi-Tenant LIMS SaaS Platform",
    highlights: [
      "Built a 3-tier multi-tenant LIMS SaaS platform using Next.js 14 and Firebase, enforcing strict tenant data isolation and role-based access control.",
      "Engineered an automated serverless PDF generation engine for compliant lab test certificates with digital signatures, eliminating manual processing bottlenecks.",
      "Delivered high-performance analytical data grids handling thousands of concurrent clinical records using TanStack Table, Recharts, and Redux Toolkit.",
      "Implemented document parsing pipelines (SheetJS, Mammoth) for automated batch test result ingestion.",
    ],
    skills: ["#NEXTJS14", "#FIREBASE", "#TANSTACK-TABLE", "#REDUX-TOOLKIT", "#RECHARTS", "#ZOD"],
  },
  {
    initials: "DL",
    role: "Software Engineer",
    company: "Davies Limited",
    location: "Remote, Nigeria",
    period: "Apr 2024 – Jun 2024",
    scope: "Internal Enterprise Management System Optimization",
    highlights: [
      "Redesigned the enterprise management system interface using Vue.js to deliver a fast, intuitive workflow for internal operators.",
      "Refactored backend API integrations to eliminate navigation bottlenecks, driving a 15% increase in user task completion rates.",
    ],
    skills: ["#VUEJS", "#JAVASCRIPT", "#REST-APIS", "#STATE-MANAGEMENT"],
  },
  {
    initials: "SF",
    role: "Front-end Developer",
    company: "Streams Foundation",
    location: "Remote, Nigeria",
    period: "Dec 2023 – Mar 2024",
    scope: "Community Empowerment Web Application",
    highlights: [
      "Translated Figma design systems into responsive Next.js web applications with accessible components and fast asset delivery.",
      "Integrated real-time REST APIs for dynamic content rendering while collaborating on rapid iterative design sprints.",
    ],
    skills: ["#NEXTJS", "#TYPESCRIPT", "#TAILWIND", "#FIGMA"],
  },
  {
    initials: "HG",
    role: "Front-end Developer (Internship)",
    company: "Hotels NG (Zuri HNGix)",
    location: "Remote, Nigeria",
    period: "Sep 2023 – Oct 2023",
    scope: "Fast-Paced Agile Production Sprints",
    highlights: [
      "Delivered responsive web applications using React and Tailwind CSS under high-pressure, fast-paced sprint cycles.",
      "Partnered with cross-functional pods to debug critical issues and ship production features on strict deadlines.",
    ],
    skills: ["#REACT", "#TAILWIND", "#JAVASCRIPT", "#AGILE"],
  },
];

export default function ExperienceComp() {
  return (
    <section className="py-16 sm:py-20 md:py-24 space-y-8 sm:space-y-12 relative w-full border-b border-border" id="experience">
      {/* Chapter 02 Header */}
      <SectionHeaderComp
        chapter="02"
        title="EXPERIENCE"
        subtitle="CAREER IMPACT & PROVEN EXECUTION"
      />

      {/* Experience Timeline Rows */}
      <div className="space-y-6 sm:space-y-8 max-w-5xl">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="group animate-on-scroll p-4 sm:p-6 md:p-8 rounded border border-border/70 bg-bg-secondary/30 hover:border-border-gold transition-all duration-300 space-y-4"
          >
            {/* Header: Avatar Badge & Role Details */}
            <div className="flex items-start gap-3 sm:gap-5">
              {/* Monogram Badge */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-border group-hover:border-accent bg-bg-secondary flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                <span className="font-serif font-bold text-xs sm:text-sm md:text-base text-textI group-hover:text-accent transition-colors">
                  {exp.initials}
                </span>
              </div>

              {/* Title, Company & Period */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-textI group-hover:text-accent transition-colors leading-snug">
                    {exp.role} <span className="font-light text-textIII hidden sm:inline">–</span>{" "}
                    <span className="block sm:inline text-textI">{exp.company}</span>
                  </h3>
                  <span className="font-mono text-[11px] sm:text-xs text-accent tracking-wider whitespace-nowrap bg-accent/10 px-2 py-0.5 rounded w-fit sm:w-auto">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] sm:text-xs text-textIII">
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span className="text-textII font-sans italic">{exp.scope}</span>
                </div>
              </div>
            </div>

            {/* Bullet Points with Mobile-Adaptive Left Margin */}
            <div className="pt-2 space-y-3 sm:pl-16 md:pl-20">
              <ul className="space-y-2 text-textII text-xs sm:text-sm md:text-base font-light leading-relaxed list-disc list-outside ml-4">
                {exp.highlights.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>

              {/* Skills Monospace Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] sm:text-[11px] text-textIII px-2 py-0.5 rounded bg-bg-secondary border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
