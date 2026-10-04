"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";

const projects = [
  {
    id: "cerium6",
    name: "Cerium6 / LabSoft (Labwox)",
    category: "Enterprise SaaS",
    description:
      "Enterprise Multi-Tenant LIMS SaaS platform with strict RBAC, automated PDF lab certificate generation, digital signature integration, and high-performance data grids.",
    tags: [
      "Next.js 14",
      "Firebase",
      "TanStack Table",
      "Recharts",
      "Redux Toolkit",
      "Zod",
    ],
    githubUrl: "https://github.com/A-believer/Labwox",
    liveUrl: "https://labsoft-report-app.vercel.app/",
    image: "/assets/labwox.png",
    featured: true,
  },
  {
    id: "mmos",
    name: "Market Master USA (MMOS)",
    category: "Full-Stack",
    description:
      "Real-time business management & communications suite with WebRTC video/audio conferencing, screen sharing, credit tracking, and automated inspection workflows.",
    tags: [
      "React",
      "TypeScript",
      "WebSockets",
      "WebRTC",
      "Node.js",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/A-believer/mmos",
    liveUrl: "https://marketmasterusa.com",
    image: "/assets/shopping-cart.png",
    featured: true,
  },
  {
    id: "google-drive-clone",
    name: "CloudVault (Google Drive Clone)",
    category: "Full-Stack",
    description:
      "Full-stack cloud file storage platform with real-time synchronization, nested folder management, Clerk authentication, and Convex reactive database.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Convex",
      "Clerk Auth",
      "Tailwind CSS",
      "Radix UI",
    ],
    githubUrl: "https://github.com/A-believer/google-drive-clone",
    liveUrl: "https://github.com/A-believer/google-drive-clone",
    featured: true,
  },
  {
    id: "s-e-mind-reset",
    name: "S-E Mind Reset Center",
    category: "HealthTech",
    description:
      "Mental health and clinical wellness platform featuring structured onboarding flows, client intake forms, and state management via Redux Toolkit and TanStack Query.",
    tags: [
      "Next.js 15",
      "React 19",
      "Redux Toolkit",
      "TanStack Query",
      "Zod",
      "Radix UI",
    ],
    githubUrl: "https://github.com/A-believer/s-e-mind-reset-center",
    liveUrl: "https://s-e-mind-reset-center.vercel.app",
    featured: true,
  },
  {
    id: "streams-foundation",
    name: "Streams Foundation Web App",
    category: "Frontend",
    description:
      "Community and empowerment organization platform translating complex Figma design systems into high-performance, accessible Next.js web applications.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "REST APIs"],
    githubUrl: "https://github.com/A-believer/stream-web-app",
    liveUrl: "https://stream-web-app-one.vercel.app",
    featured: false,
  },
  {
    id: "geegpay-dashboard",
    name: "Geegpay FinTech Dashboard",
    category: "FinTech",
    description:
      "FinTech analytics dashboard featuring interactive multi-currency financial metrics, real-time charts, and automated transaction monitoring.",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "FinTech"],
    githubUrl: "https://github.com/A-believer/geegpay-dashboard",
    liveUrl: "https://geegpay-dashboard-sigma.vercel.app/",
    image: "/assets/dashboard.png",
    featured: false,
  },
  {
    id: "teachmate-todo",
    name: "TeachMate Todo AI",
    category: "Web App",
    description:
      "AI-assisted task management application for educators to structure curricula, organize classroom priorities, and track daily teaching goals.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Productivity"],
    githubUrl: "https://github.com/A-believer/teachmateai-task-manager",
    liveUrl: "https://teachmateai-task-manager.vercel.app/",
    image: "/assets/teachmate-todo.png",
    featured: false,
  },
  {
    id: "getlinked-ai",
    name: "GetLinked AI Platform",
    category: "Frontend",
    description:
      "Tech hackathon registration platform designed with fluid glassmorphic UI, responsive layouts, countdown systems, and modern micro-animations.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "UI/UX"],
    githubUrl: "https://github.com/A-believer/get-linked",
    liveUrl: "https://get-linked-ai.vercel.app/",
    image: "/assets/getLinked.png",
    featured: false,
  },
  {
    id: "klord-tech",
    name: "Klord Technologies",
    category: "Web App",
    description:
      "Corporate technology services and digital consulting platform built with modern responsive architecture and fast asset delivery.",
    tags: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    githubUrl: "https://github.com/A-believer/klord-technologies",
    liveUrl: "https://klord-technologies.vercel.app",
    featured: false,
  },
  {
    id: "dudurewa",
    name: "Dudurewa",
    category: "Web App",
    description:
      "Modern restaurant website with online ordering system, interactive menu navigation, and integrated backend ordering workflows.",
    tags: ["Next.js", "Tailwind CSS", "Laravel", "PHP"],
    githubUrl: "https://github.com/A-believer",
    liveUrl: "https://dudurewas-kitchen.vercel.app/",
    featured: false,
  },
];

const categories = ["All", "Enterprise SaaS", "Full-Stack", "FinTech", "Frontend", "Web App"];

export default function ProjectComp() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeCategory ||
            (activeCategory === "Full-Stack" &&
              (p.category === "Full-Stack" || p.category === "Enterprise SaaS" || p.category === "HealthTech")) ||
            (activeCategory === "Web App" &&
              (p.category === "Web App" || p.category === "HealthTech"))
        );

  return (
    <section className="py-32 space-y-16 relative w-full" id="project">
      {/* Section Header */}
      <div className="text-center space-y-4 animate-on-scroll">
        <p className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
          Featured Engineering Work
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
          Projects & Platforms
        </h2>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-4 animate-on-scroll">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === category
                ? "bg-accent text-white shadow-md scale-105"
                : "bg-bg-secondary/60 text-textII hover:text-textI hover:bg-bg-secondary border border-border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group animate-on-scroll flex">
            <div className="w-full flex flex-col rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl">
              {/* Project Preview (iframe or image) */}
              <div className="relative w-full h-64 bg-border/20 overflow-hidden">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/90 via-transparent to-transparent opacity-60"></div>
                  </div>
                ) : (
                  <iframe
                    src={project.liveUrl}
                    title={project.name}
                    className="w-full h-full scale-50 origin-top-left pointer-events-none"
                    style={{ width: "200%", height: "200%" }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  ></iframe>
                )}

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-bgColor/90 text-accent border border-accent/20 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-textI group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-textII text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2 border-t border-border/40">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 text-sm font-medium text-textI hover:text-accent"
                    >
                      <Icon icon="mdi:github" className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                    {project.liveUrl && project.liveUrl !== project.githubUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105"
                      >
                        <Icon icon="mdi:open-in-new" className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#tools"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Scroll to Tools section"
      >
        <ChevronDownIcon className="h-6 w-6 text-textII" />
      </a>
    </section>
  );
}
