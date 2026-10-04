import {
  AcademicCapIcon,
  BriefcaseIcon,
  CreditCardIcon,
  ChevronDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function AboutComp() {
  return (
    <section className="py-32 space-y-16 relative w-full" id="about">
      {/* Section Header */}
      <div className="text-center space-y-4 animate-on-scroll">
        <p className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
          Get to know more
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
          About Me
        </h2>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 animate-on-scroll">
          <div className="group p-8 rounded-2xl border border-border hover:border-accent/50 bg-bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <BriefcaseIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-textI mb-1">
                  Experience
                </h3>
                <p className="text-textII text-base font-medium">3+ Years</p>
                <p className="text-textIII text-xs mt-1">
                  Enterprise SaaS & Production Web Systems
                </p>
              </div>
            </div>
          </div>

          <div className="group p-8 rounded-2xl border border-border hover:border-accent/50 bg-bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <CreditCardIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-textI mb-1">
                  FinTech & Security
                </h3>
                <p className="text-textII text-base font-medium">Stripe & Paystack</p>
                <p className="text-textIII text-xs mt-1">
                  Secure Payments, RBAC & Data Isolation
                </p>
              </div>
            </div>
          </div>

          <div className="group p-8 rounded-2xl border border-border hover:border-accent/50 bg-bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <AcademicCapIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-textI mb-1">
                  Education
                </h3>
                <p className="text-textII text-base font-medium">B.Sc. Civil Eng.</p>
                <p className="text-textIII text-xs mt-1">
                  Obafemi Awolowo University
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="animate-on-scroll">
          <div className="p-8 md:p-12 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm space-y-6 max-w-5xl mx-auto">
            <p className="text-textI/90 text-lg md:text-xl leading-relaxed">
              I&apos;m David, a{" "}
              <span className="text-accent font-semibold">
                Frontend-focused Full-Stack Software Developer
              </span>{" "}
              with 3+ years of experience delivering digital solutions for customer-facing platforms,
              payment integrations, secure authentication systems, and business process automation.
            </p>
            <p className="text-textII text-base md:text-lg leading-relaxed">
              I have extensive hands-on experience building scalable applications using{" "}
              <span className="text-textI font-medium">
                React, Next.js, TypeScript, Vue.js, Node.js, and Firebase
              </span>
              . In financial technology, I integrate seamless payment gateways via{" "}
              <span className="text-accent font-medium">Stripe and Paystack</span>,
              supporting high-reliability transaction processing, user account management, and strict data security.
            </p>
            <p className="text-textII text-base md:text-lg leading-relaxed">
              Whether architecting enterprise multi-tenant LIMS SaaS platforms (like{" "}
              <span className="text-textI font-medium">Cerium6 / LabSoft</span>), building WebRTC-enabled virtual conferencing systems, or engineering automated document parsing and PDF generation pipelines, I emphasize writing clean, maintainable code with a strong focus on operational efficiency and user experience.
            </p>

            <div className="pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-textII">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent shrink-0" />
                <span>Modern Glassmorphic UI/UX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent shrink-0" />
                <span>Multi-Tenant SaaS Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent shrink-0" />
                <span>Real-Time WebSockets & WebRTC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent shrink-0" />
                <span>TanStack Query & Redux Toolkit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent shrink-0" />
                <span>Strict RBAC & Data Isolation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent shrink-0" />
                <span>Fluent in English & Yoruba</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Scroll to Experience section"
      >
        <ChevronDownIcon className="h-6 w-6 text-textII" />
      </a>
    </section>
  );
}
