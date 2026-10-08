"use client";

import { useState } from "react";
import SectionHeaderComp from "../components/SectionHeaderComp";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import GithubComp from "../components/icons/GithubComp";

const projects = [
  {
    id: "cerium6",
    index: "01",
    name: "Cerium6 // Enterprise LIMS SaaS",
    subtitle: "Multi-Tenant Laboratory Information Management System",
    category: "Enterprise SaaS",
    description:
      "Engineered multi-tenant laboratory SaaS architecture featuring tenant data isolation, role-based access control (RBAC), automated certificate PDF generation with digital signature verification, and high-density analytical data grids.",
    tags: ["#NEXTJS14", "#FIREBASE", "#TANSTACK-TABLE", "#RECHARTS", "#ZOD", "#REDUX"],
    githubUrl: "https://github.com/A-believer/Labwox",
    liveUrl: "https://labsoft-report-app.vercel.app/",
    image: "/assets/labwox.png",
    featured: true,
  },
  {
    id: "mmos",
    index: "02",
    name: "Market Master USA // MMOS Suite",
    subtitle: "WebRTC Virtual Conferencing & Operations Platform",
    category: "Full-Stack",
    description:
      "Enterprise operations suite featuring multi-user WebRTC audio/video conferencing, real-time screen sharing, dynamic room routing, automated FFmpeg media transcoding, and business credit tracking dashboards.",
    tags: ["#REACT", "#TYPESCRIPT", "#WEBRTC", "#WEBSOCKETS", "#NODEJS", "#TAILWIND"],
    githubUrl: "https://github.com/A-believer/mmos",
    liveUrl: "https://marketmasterusa.com",
    image: "/assets/shopping-cart.png",
    featured: true,
  },
  {
    id: "google-drive-clone",
    index: "03",
    name: "CloudVault // Cloud Storage Engine",
    subtitle: "Real-Time Cloud Storage & Document Sync System",
    category: "Full-Stack",
    description:
      "Full-stack cloud file vault built with reactive database queries, tree-structured folder hierarchies, multi-file uploads, Clerk authentication, and real-time state synchronization.",
    tags: ["#NEXTJS15", "#TYPESCRIPT", "#CONVEX-DB", "#CLERK-AUTH", "#RADIX-UI"],
    githubUrl: "https://github.com/A-believer/google-drive-clone",
    liveUrl: "https://github.com/A-believer/google-drive-clone",
    image: "/assets/dashboard.png",
    featured: true,
  },
  {
    id: "geegpay-dashboard",
    index: "04",
    name: "Geegpay // FinTech Analytics Dashboard",
    subtitle: "Multi-Currency Financial Metrics & Transaction Engine",
    category: "FinTech",
    description:
      "Interactive financial analytics dashboard featuring live currency exchange metrics, automated payout workflows, interactive cashflow charts, and high-security transaction monitoring.",
    tags: ["#REACT", "#TYPESCRIPT", "#CHARTJS", "#FINTECH", "#TAILWIND"],
    githubUrl: "https://github.com/A-believer/geegpay-dashboard",
    liveUrl: "https://geegpay-dashboard-sigma.vercel.app/",
    image: "/assets/dashboard.png",
    featured: true,
  },
  {
    id: "s-e-mind-reset",
    index: "05",
    name: "S-E Mind Reset // HealthTech Platform",
    subtitle: "Clinical Wellness & Patient Intake Architecture",
    category: "HealthTech",
    description:
      "Clinical wellness platform featuring structured psychiatric onboarding flows, validated client intake pipelines, and state management via Redux Toolkit and TanStack Query with HIPAA data protection principles.",
    tags: ["#NEXTJS15", "#REACT19", "#TANSTACK-QUERY", "#REDUX-TOOLKIT", "#ZOD"],
    githubUrl: "https://github.com/A-believer/s-e-mind-reset-center",
    liveUrl: "https://s-e-mind-reset-center.vercel.app",
    image: "/assets/teachmate-todo.png",
    featured: false,
  },
  {
    id: "teachmate-todo",
    index: "06",
    name: "TeachMate Todo // Educational Task Manager",
    subtitle: "Curriculum Planning & Priority Matrix for Educators",
    category: "Web App",
    description:
      "Task management application designed for educators to structure curricula, organize classroom priorities, and track daily teaching milestones with zero latency.",
    tags: ["#REACT", "#TYPESCRIPT", "#PRODUCTIVITY", "#LOCALSTORAGE"],
    githubUrl: "https://github.com/A-believer/teachmateai-task-manager",
    liveUrl: "https://teachmateai-task-manager.vercel.app/",
    image: "/assets/teachmate-todo.png",
    featured: false,
  },
  {
    id: "getlinked-ai",
    index: "07",
    name: "GetLinked // Hackathon Platform",
    subtitle: "Event Registration & Countdown Architecture",
    category: "Frontend",
    description:
      "Hackathon portal with responsive layouts, fluid glassmorphic UI, real-time registration counters, and interactive schedule timeline components.",
    tags: ["#REACT", "#FRAMER-MOTION", "#TAILWIND", "#UI-UX"],
    githubUrl: "https://github.com/A-believer/get-linked",
    liveUrl: "https://get-linked-ai.vercel.app/",
    image: "/assets/getLinked.png",
    featured: false,
  },
  {
    id: "streams-foundation",
    index: "08",
    name: "Streams Foundation // Non-Profit Portal",
    subtitle: "Community Portal & Program Engagement",
    category: "Frontend",
    description:
      "Translated Figma design systems into accessible, performant Next.js applications with optimized asset loading, accessible forms, and localized content delivery.",
    tags: ["#NEXTJS", "#TYPESCRIPT", "#FIGMA", "#REST-APIS"],
    githubUrl: "https://github.com/A-believer/stream-web-app",
    liveUrl: "https://stream-web-app-one.vercel.app",
    image: "/assets/labwox.png",
    featured: false,
  },
  {
    id: "dudurewa",
    index: "09",
    name: "Dudurewa // Culinary Commerce System",
    subtitle: "Online Ordering & Kitchen Dispatch Architecture",
    category: "Web App",
    description:
      "Food ordering web application with dynamic cart calculations, custom checkout workflows, and fast server-side menu rendering.",
    tags: ["#NEXTJS", "#TAILWIND", "#PHP", "#ECOMMERCE"],
    githubUrl: "https://github.com/A-believer",
    liveUrl: "https://dudurewas-kitchen.vercel.app/",
    image: "/assets/shopping-cart.png",
    featured: false,
  },
];

const categories = ["ALL", "ENTERPRISE SAAS", "FULL-STACK", "FINTECH", "HEALTHTECH", "FRONTEND"];

export default function ProjectComp() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => {
          if (activeCategory === "ENTERPRISE SAAS") return p.category === "Enterprise SaaS";
          if (activeCategory === "FULL-STACK") return p.category === "Full-Stack" || p.category === "Enterprise SaaS";
          if (activeCategory === "FINTECH") return p.category === "FinTech";
          if (activeCategory === "HEALTHTECH") return p.category === "HealthTech";
          if (activeCategory === "FRONTEND") return p.category === "Frontend" || p.category === "Web App";
          return true;
        });

  return (
    <section className="py-16 sm:py-20 md:py-24 space-y-8 sm:space-y-12 relative w-full border-b border-border" id="project">
      {/* Chapter 01 Header */}
      <SectionHeaderComp
        chapter="01"
        title="SELECTED WORK"
        subtitle="PRODUCTION CASE STUDIES & APPLICATIONS"
      />

      {/* Horizontally scrollable category filter for mobile and tablet */}
      <div className="w-full overflow-x-auto no-scrollbar py-1">
        <div className="flex items-center gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 py-1.5 rounded text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-accent text-bgColor font-semibold shadow-sm"
                  : "border border-border text-textII hover:text-textI hover:border-accent"
              }`}
            >
              [ {category} ]
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on xl desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group animate-on-scroll flex flex-col justify-between rounded border border-border bg-bg-secondary/50 backdrop-blur-sm overflow-hidden hover:border-border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              {/* Thumbnail with Signature Champagne Gold Bottom Accent */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b-2 border-accent">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-bg-secondary text-textIII font-mono text-xs">
                    PROJECT PREVIEW
                  </div>
                )}

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-black/80 text-accent border border-border-gold backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="font-mono text-[10px] text-textI/80 bg-black/70 px-2 py-0.5 rounded font-medium">
                    {project.index}
                  </span>
                </div>
              </div>

              {/* Card Meta & Summary */}
              <div className="p-5 sm:p-6 space-y-2.5">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-textI group-hover:text-accent transition-colors leading-snug">
                    {project.name}
                  </h3>
                  <p className="font-mono text-xs text-accent/90 tracking-wide line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-textII text-xs sm:text-sm leading-relaxed font-light line-clamp-3 sm:line-clamp-4">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tags & Action Links */}
            <div className="p-5 sm:p-6 pt-0 space-y-4">
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-textIII tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-hairline font-mono text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-textII hover:text-accent transition-colors py-1"
                >
                  <GithubComp className="w-4 h-4" />
                  <span>SOURCE</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent hover:text-accent-hover transition-colors font-semibold py-1"
                  >
                    <span>LIVE DEMO</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
