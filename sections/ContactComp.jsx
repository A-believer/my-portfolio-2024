import LinkedInComp from "../components/icons/LinkedInComp";
import TwitterComp from "../components/icons/TwitterComp";
import GithubComp from "../components/icons/GithubComp";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactComp() {
  return (
    <section className="py-32 space-y-16" id="contact">
      {/* Section Header */}
      <div className="text-center space-y-4 animate-on-scroll">
        <p className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
          For projects and contracts
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
          Get In Touch
        </h2>
      </div>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-4 animate-on-scroll">
        {/* Email */}
        <a
          href="mailto:davidabolade29@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <EnvelopeIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-textI mb-2">Email</h3>
              <p className="text-textII group-hover:text-accent transition-colors">
                davidabolade29@gmail.com
              </p>
            </div>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348138146850"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <PhoneIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-textI mb-2">WhatsApp</h3>
              <p className="text-textII group-hover:text-accent transition-colors">
                +234 813 814 6850
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-6 animate-on-scroll">
        <a
          href="https://www.linkedin.com/in/thedavid-ao/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
          aria-label="LinkedIn"
        >
          <LinkedInComp className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://x.com/theDavid_AO"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
          aria-label="Twitter/X"
        >
          <TwitterComp className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://github.com/A-believer"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
          aria-label="GitHub"
        >
          <GithubComp className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
}
