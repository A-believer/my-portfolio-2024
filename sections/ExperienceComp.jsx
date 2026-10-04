"use client";

import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const experiences = [
  {
    role: "Front-end Software (Web) Developer",
    company: "Market Master USA",
    location: "Remote, USA",
    period: "October 2024 – Present",
    highlights: [
      "Architected and deployed 20+ web applications using React, TypeScript, Node.js, and WebSockets across real-time communications, construction tech, healthcare, and financial services.",
      "Built WebRTC-powered virtual conference platform supporting multi-user video/audio calls, screen sharing, dynamic room routing, and custom FFmpeg media processing.",
      "Spearheaded the Zenith Properties software suite, constructing connected Client, Contractor, and Admin dashboards that automated inspection requests and job management workflows.",
      "Engineered automated credit tracking & dispute tools empowering users to monitor financial health across personal and business credit categories.",
      "Developed HIPAA-mindful patient referral tracking system, improving provider-to-patient intake turnarounds and case oversight.",
      "Standardized modern UI/UX design systems, building reusable, glassmorphic React component libraries with dark mode support and fluid micro-animations.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "WebRTC",
      "Tailwind CSS",
      "FFmpeg",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Labwox",
    location: "Remote, Nigeria",
    period: "April 2023 – Present",
    project: "Cerium6 / LabSoft — Enterprise Multi-Tenant LIMS SaaS Platform",
    highlights: [
      "Architected a 3-tier multi-tenant LIMS SaaS using Next.js 14 and Firebase, implementing strict RBAC and secure data isolation.",
      "Developed an automated PDF generation engine for compliant lab certificates, featuring digital signature integration and dynamic layouts.",
      "Engineered high-performance analytical dashboards and data grids using TanStack Table, Recharts, and Redux Toolkit.",
      "Implemented robust forms, schema validation (Zod, React Hook Form), and document parsing pipelines (SheetJS, Mammoth) for seamless data ingestion.",
    ],
    skills: [
      "Next.js 14",
      "Firebase",
      "Redux Toolkit",
      "TanStack Table",
      "Recharts",
      "Zod",
      "React Hook Form",
    ],
  },
  {
    role: "Software Engineer",
    company: "Davies Limited",
    location: "Remote, Nigeria",
    period: "April 2024 – June 2024",
    highlights: [
      "Refined the management system’s interface using Vue.js to deliver a more intuitive and cohesive user experience.",
      "Architected backend API integrations to eliminate navigation bottlenecks, resulting in a 15% surge in overall customer engagement metrics.",
    ],
    skills: ["Vue.js", "JavaScript", "API Integration", "UI/UX", "State Management"],
  },
  {
    role: "Front-end Developer",
    company: "Streams Foundation",
    location: "Remote, Nigeria",
    period: "December 2023 – March 2024",
    highlights: [
      "Translated intricate Figma mockups for landing pages and profile dashboards into high-fidelity, functional code utilizing Next.js.",
      "Engineered seamless API integrations for real-time data rendering while partnering on iterative design cycles to maximize product accessibility.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "REST APIs"],
  },
  {
    role: "Front-end Developer (Internship)",
    company: "Hotels NG (Zuri HNGix)",
    location: "Remote, Nigeria",
    period: "September 2023 – October 2023",
    highlights: [
      "Developed responsive web apps using React and Tailwind CSS, ensuring high-quality user experience across devices.",
      "Collaborated with a cross-functional team to resolve key issues in multiple applications under fast-paced agile sprints.",
    ],
    skills: ["React", "Tailwind CSS", "JavaScript", "Agile", "Responsive Design"],
  },
];

export default function ExperienceComp() {
  return (
    <section className="py-32 space-y-16 relative w-full" id="experience">
      {/* Section Header */}
      <div className="text-center space-y-4 animate-on-scroll">
        <p className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
          Career Journey
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
          Professional Experience
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 px-4">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="animate-on-scroll group p-6 md:p-8 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-border/50">
              <div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <BriefcaseIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-textI group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-textII mt-2">
                  <span className="font-semibold text-textI">{exp.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="w-4 h-4 text-accent" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs md:text-sm font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 w-fit">
                <CalendarIcon className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
            </div>

            {exp.project && (
              <p className="mt-3 text-sm font-medium text-accent">
                {exp.project}
              </p>
            )}

            <ul className="mt-4 space-y-2 text-textII text-sm md:text-base leading-relaxed list-disc list-outside ml-5">
              {exp.highlights.map((point, pIndex) => (
                <li key={pIndex}>{point}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 pt-2 border-t border-border/30">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-bg-secondary text-textII border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#project"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Scroll to Projects section"
      >
        <ChevronDownIcon className="h-6 w-6 text-textII" />
      </a>
    </section>
  );
}
