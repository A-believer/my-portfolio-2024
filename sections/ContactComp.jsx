"use client";

import { useState } from "react";
import SectionHeaderComp from "../components/SectionHeaderComp";
import LinkedInComp from "../components/icons/LinkedInComp";
import TwitterComp from "../components/icons/TwitterComp";
import GithubComp from "../components/icons/GithubComp";
import {
  EnvelopeIcon,
  PhoneIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

export default function ContactComp() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("davidabolade29@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:davidabolade29@gmail.com?subject=Project Inquiry from ${encodeURIComponent(
      formData.name || "Client"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 space-y-10 sm:space-y-16 relative w-full" id="contact">
      {/* Chapter 05 Header */}
      <SectionHeaderComp
        chapter="05"
        title="CONTACT & INQUIRIES"
        subtitle="ENGINEERING APPOINTMENTS, COLLABORATIONS & ROLES"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        {/* Left Column: Direct Narrative & Coordinates */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 animate-on-scroll">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-textI leading-tight">
              Let&apos;s build scalable systems together.
            </h3>
            <p className="text-textII text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Available for full-time senior engineering opportunities, technical consulting, and high-impact web development.
            </p>
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-3 sm:space-y-4">
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded border border-border bg-bg-secondary/50 space-y-2 hover:border-border-gold transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] sm:text-xs text-accent uppercase tracking-wider flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4" />
                  <span>Email</span>
                </span>
                <button
                  onClick={copyEmail}
                  className="font-mono text-[11px] sm:text-xs text-textIII hover:text-accent transition-colors flex items-center gap-1 cursor-pointer py-1"
                >
                  {copied ? (
                    <>
                      <ClipboardDocumentCheckIcon className="w-4 h-4 text-accent" />
                      <span className="text-accent">COPIED</span>
                    </>
                  ) : (
                    <>
                      <ClipboardDocumentIcon className="w-4 h-4" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href="mailto:davidabolade29@gmail.com"
                className="font-serif text-base sm:text-lg md:text-xl font-bold text-textI hover:text-accent transition-colors block break-all"
              >
                davidabolade29@gmail.com
              </a>
            </div>

            {/* WhatsApp Direct */}
            <div className="p-4 sm:p-5 rounded border border-border bg-bg-secondary/50 space-y-2 hover:border-border-gold transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] sm:text-xs text-accent uppercase tracking-wider flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>Direct Messaging // WhatsApp</span>
                </span>
                <span className="font-mono text-[10px] text-textIII uppercase">
                  Active
                </span>
              </div>

              <a
                href="https://wa.me/2348138146850"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base sm:text-lg md:text-xl font-bold text-textI hover:text-accent transition-colors flex items-center justify-between group"
              >
                <span>+234 813 814 6850</span>
                <ArrowUpRightIcon className="w-4 h-4 text-textIII group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Verified Social Channels */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-xs text-textIII uppercase tracking-wider block">
              Professional Profiles:
            </span>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href="https://github.com/A-believer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded border border-border hover:border-accent text-textI hover:text-accent transition-all flex items-center gap-2"
              >
                <GithubComp className="w-4 h-4" />
                <span>GITHUB</span>
              </a>
              <a
                href="https://www.linkedin.com/in/thedavid-ao"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded border border-border hover:border-accent text-textI hover:text-accent transition-all flex items-center gap-2"
              >
                <LinkedInComp className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="https://x.com/theDavid_AO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded border border-border hover:border-accent text-textI hover:text-accent transition-all flex items-center gap-2"
              >
                <TwitterComp className="w-4 h-4" />
                <span>X // TWITTER</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Dispatcher Form */}
        <div className="lg:col-span-6 animate-on-scroll">
          <form
            onSubmit={handleFormSubmit}
            className="p-5 sm:p-7 md:p-8 rounded border border-border bg-bg-secondary/50 backdrop-blur-sm space-y-5"
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Send a Message
              </span>
              <span className="font-mono text-[10px] text-textIII uppercase">
                Fast Response
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-mono text-xs text-textIII uppercase block mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan / Tech Team"
                  className="w-full px-4 py-3 rounded bg-bg-tertiary border border-border focus:border-accent text-textI text-base sm:text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-textIII uppercase block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded bg-bg-tertiary border border-border focus:border-accent text-textI text-base sm:text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-textIII uppercase block mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Project overview, role requirements, or collaboration goals..."
                  className="w-full px-4 py-3 rounded bg-bg-tertiary border border-border focus:border-accent text-textI text-base sm:text-sm focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 bg-accent text-bgColor font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-accent-hover transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>Send Message</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
