import { ChevronDownIcon } from "@heroicons/react/24/outline";
import LanguageComp from "../components/LanguageComp";
import ToolComp from "../components/ToolComp";

export default function ToolsComp() {
  return (
    <section className="py-32 space-y-16 relative w-full" id="tools">
      {/* Section Header */}
      <div className="text-center space-y-4 animate-on-scroll">
        <p className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
          Technical Expertise
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
          Tools & Technologies
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        <div className="animate-on-scroll p-8 md:p-10 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-textI mb-8 text-center">
            Languages & Frameworks
          </h3>
          <LanguageComp />
        </div>

        <div className="animate-on-scroll p-8 md:p-10 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-textI mb-8 text-center">
            Libraries, Cloud & Tools
          </h3>
          <ToolComp />
        </div>
      </div>

      {/* Competencies Badges */}
      <div className="max-w-5xl mx-auto px-4 animate-on-scroll">
        <div className="p-6 md:p-8 rounded-2xl border border-border bg-bg-secondary/20 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-textI text-center mb-6">
            Core Specialized Competencies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Multi-Tenant SaaS Architecture",
              "Payment Processing (Stripe & Paystack)",
              "Strict RBAC & Data Isolation",
              "Automated PDF Generation & Signatures",
              "WebRTC Video & Real-Time WebSockets",
              "TanStack Table & Recharts Dashboards",
              "Document Parsing (SheetJS & Mammoth)",
              "Schema Validation (Zod & Hook Form)",
              "High Performance & SEO Optimization",
              "Agile & Scrum Sprints",
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all duration-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#contact"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Scroll to Contact section"
      >
        <ChevronDownIcon className="h-6 w-6 text-textII" />
      </a>
    </section>
  );
}
