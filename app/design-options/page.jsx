"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  SparklesIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const options = [
  {
    id: 1,
    title: "The Linear Bento & Obsidian Glow",
    tagline: "Silicon Valley Standard: High-precision engineering & modular data density",
    image: "/mockups/bento-obsidian.jpg",
    vibe: "Sleek, data-dense, hyper-modern, authoritative",
    palette: [
      { name: "Obsidian Base", color: "#08090C" },
      { name: "Card Surface", color: "#11141B" },
      { name: "Neon Violet", color: "#8B5CF6" },
      { name: "Electric Cyan", color: "#06B6D4" },
      { name: "Luminous Border", color: "rgba(255,255,255,0.12)" },
    ],
    features: [
      "Modular Bento Grid layout organizing metrics, tech stacks, and live code cards",
      "Live metrics widgets (e.g. '3+ Years', '20+ Deployed Apps', '1.2M+ LOC')",
      "Obsidian dark mode with subtle radial backlights and luminous hairline borders",
      "Interactive audio/visual soundwave and code snippet widgets",
    ],
    bestFor: "Full-Stack SaaS, Systems & FinTech engineering portfolios",
  },
  {
    id: 2,
    title: "Cyber Aurora & Cosmic Glow",
    tagline: "Awwwards Creative Luxury: Luminous atmospheric waves & glowing glass",
    image: "/mockups/cyber-aurora.jpg",
    vibe: "Jaw-dropping, artistic, ultra-premium, memorable",
    palette: [
      { name: "Midnight Void", color: "#05070D" },
      { name: "Aurora Cyan", color: "#00F5FF" },
      { name: "Neon Emerald", color: "#00FF87" },
      { name: "Cosmic Violet", color: "#9D4EDD" },
      { name: "Glow Accent", color: "rgba(0, 245, 255, 0.4)" },
    ],
    features: [
      "Atmospheric animated aurora background waves with multi-color neon gradients",
      "Floating frosted glass cards with radiant glow borders that pulse on hover",
      "Glowing cursor spotlight following movement across cards and interactive badges",
      "Mini interactive terminal drawer with live deployment status",
    ],
    bestFor: "Maximum visual WOW factor and unforgettable creative presence",
  },
  {
    id: 3,
    title: "Editorial Minimalist & Bold Kinetic Typography",
    tagline: "High-End Studio: Architectural serif typography & chapter storytelling",
    image: "/mockups/editorial-minimalist.jpg",
    vibe: "Refined, intellectual, magazine-grade, executive presence",
    palette: [
      { name: "Charcoal Stone", color: "#0E1015" },
      { name: "Warm Off-White", color: "#F3F2EE" },
      { name: "Champagne Gold", color: "#D4AF37" },
      { name: "Subtle Hairline", color: "rgba(255,255,255,0.1)" },
    ],
    features: [
      "Magazine-grade display serif typography paired with geometric sans-serif",
      "Chapter-based narrative layout ('01 // Selected Work', '02 // Experience')",
      "Understated elegance with luxury warm stone background and gold accents",
      "Clean monochromatic project cards with high-contrast imagery",
    ],
    bestFor: "Senior / Lead Software Architect communicating taste and technical depth",
  },
  {
    id: 4,
    title: "Neo-Brutalist Tech & High-Voltage Accents",
    tagline: "Modern Hacker / Framer: High-contrast black with electric lime widgets",
    image: "/mockups/neobrutalist-tech.jpg",
    vibe: "High-energy, disruptive, confident, cutting-edge startup vibe",
    palette: [
      { name: "Stark Black", color: "#0A0A0A" },
      { name: "Voltage Lime", color: "#CCFF00" },
      { name: "Cyber Cyan", color: "#00F0FF" },
      { name: "Pure White", color: "#FFFFFF" },
    ],
    features: [
      "Pitch-black background with high-voltage neon lime green and electric cyan accents",
      "Terminal badges reading 'david@abolade:~# status: available for hire'",
      "Thick crisp borders, monospace code chips, and technical geometric widgets",
      "Snappy tactile button micro-interactions and bold typography",
    ],
    bestFor: "Developers wanting a punchy, unmistakable high-impact identity",
  },
  {
    id: 5,
    title: "Spatial 3D & Glassmorphic Frost",
    tagline: "Apple Vision Pro & Raycast: Frosted glass physics & tactile 3D depth",
    image: "/mockups/spatial-glassmorphism.jpg",
    vibe: "Tactile, multi-layered, smooth, futuristic",
    palette: [
      { name: "Midnight Navy", color: "#0A0E1A" },
      { name: "Translucent Glass", color: "rgba(255,255,255,0.06)" },
      { name: "Specular White", color: "rgba(255,255,255,0.8)" },
      { name: "Sunset Violet", color: "#795290" },
    ],
    features: [
      "Multi-layered frosted glass surfaces with specular highlights and physics-based blur",
      "Interactive 3D tilt cards that react to mouse position with dynamic glare",
      "Diffused warm violet and electric blue ray illumination bleeding through glass panels",
      "Ultra-modern floating pill navigation bar and spatial badges",
    ],
    bestFor: "Front-end engineering excellence with cutting-edge fluid aesthetics",
  },
];

export default function DesignOptionsPage() {
  const [selectedId, setSelectedId] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const currentOption = options.find((o) => o.id === selectedId) || options[0];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-3"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back to Current Portfolio</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <SparklesIcon className="w-6 h-6" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Design Explorations & Visual Snapshots
              </h1>
            </div>
            <p className="text-slate-400 text-base md:text-lg mt-2 max-w-3xl">
              Curated from trending award-winning portfolios on Dribbble, Pinterest, and Awwwards.
              Select any option below to view its visual snapshot, color palette, and layout architecture.
            </p>
          </div>
        </div>

        {/* Option Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedId(opt.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedId === opt.id
                  ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 scale-102"
                  : "bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                  Option {opt.id}
                </span>
                {selectedId === opt.id && (
                  <CheckCircleIcon className="w-5 h-5 text-indigo-400" />
                )}
              </div>
              <p className="font-semibold text-sm line-clamp-2">{opt.title}</p>
            </button>
          ))}
        </div>

        {/* Selected Option Deep-Dive */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Visual Snapshot */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
              <img
                src={currentOption.image}
                alt={currentOption.title}
                className="w-full h-auto object-cover object-top"
              />
              <button
                onClick={() => setModalImage(currentOption.image)}
                className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/80 text-white border border-white/20 backdrop-blur-md text-xs font-medium hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg"
              >
                <EyeIcon className="w-4 h-4" />
                <span>View Fullscreen</span>
              </button>
            </div>
            <p className="text-xs text-slate-500 text-center">
              Snapshot preview for Option {currentOption.id}: {currentOption.title}
            </p>
          </div>

          {/* Option Spec Sheet */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                  Option 0{currentOption.id} Breakdown
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  {currentOption.title}
                </h2>
                <p className="text-sm text-slate-400 mt-2">
                  {currentOption.tagline}
                </p>
              </div>

              {/* Vibe */}
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-mono text-slate-400">
                  Atmosphere & Aesthetic
                </span>
                <p className="text-sm font-medium text-slate-200">
                  {currentOption.vibe}
                </p>
              </div>

              {/* Palette */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono text-slate-400">
                  Color System
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentOption.palette.map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs"
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: p.color }}
                      ></span>
                      <span className="text-slate-300 font-mono text-[11px]">
                        {p.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono text-slate-400">
                  Signature UX Features
                </span>
                <ul className="space-y-2 text-sm text-slate-300">
                  {currentOption.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold shrink-0 mt-0.5">
                        •
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
                <span className="font-semibold text-white block mb-0.5">
                  Strategic Advantage:
                </span>
                {currentOption.bestFor}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid of All 5 Side-by-Side */}
        <div className="space-y-6 pt-12 border-t border-white/10">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold">
              Compare All 5 Options Side-by-Side
            </h3>
            <p className="text-slate-400 text-sm md:text-base">
              Click on any option below to inspect its visual mockup in full resolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => setSelectedId(opt.id)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
                  selectedId === opt.id
                    ? "border-indigo-500 ring-2 ring-indigo-500/30 shadow-xl shadow-indigo-500/10"
                    : "border-white/10 hover:border-white/30 bg-white/[0.02]"
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-black/60">
                  <img
                    src={opt.image}
                    alt={opt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-mono bg-black/80 text-white border border-white/20 backdrop-blur-md">
                    Option {opt.id}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {opt.tagline}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-indigo-400 font-medium">
                      {selectedId === opt.id ? "Currently Selected" : "Click to view"}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImage(opt.image);
                      }}
                      className="text-slate-400 hover:text-white"
                    >
                      Enlarge
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fullscreen Image Modal */}
        {modalImage && (
          <div
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg p-4 md:p-12 flex items-center justify-center cursor-zoom-out"
          >
            <div className="relative max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <img
                src={modalImage}
                alt="Enlarged Mockup"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-mono border border-white/20"
              >
                Close (Esc)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
