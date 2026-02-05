<script setup>
import LinkedInComp from "../assets/LinkedInComp.vue";
import TwitterComp from "../assets/TwitterComp.vue";
import GithubComp from "../assets/GithubComp.vue";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <section class="py-32 space-y-16" id="contact">
    <!-- Section Header -->
    <div class="text-center space-y-4 animate-on-scroll">
      <p class="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
        For projects and contracts
      </p>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
        Get In Touch
      </h2>
    </div>

    <!-- Contact Cards -->
    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-4 animate-on-scroll">
      <!-- Email -->
      <a
        href="mailto:davidabolade29@gmail.com"
        target="_blank"
        class="group p-8 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      >
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <EnvelopeIcon class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-textI mb-2">Email</h3>
            <p class="text-textII group-hover:text-accent transition-colors">
              davidabolade29@gmail.com
            </p>
          </div>
        </div>
      </a>

      <!-- WhatsApp -->
      <a
        href="https://wa.me/2348138146850"
        target="_blank"
        class="group p-8 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      >
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <PhoneIcon class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-textI mb-2">WhatsApp</h3>
            <p class="text-textII group-hover:text-accent transition-colors">
              +234 813 814 6850
            </p>
          </div>
        </div>
      </a>
    </div>

    <!-- Social Links -->
    <div class="flex items-center justify-center gap-6 animate-on-scroll">
      <a
        href="https://www.linkedin.com/in/thedavid-ao/"
        target="_blank"
        class="p-4 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
        aria-label="LinkedIn"
      >
        <LinkedInComp class="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://x.com/theDavid_AO"
        target="_blank"
        class="p-4 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
        aria-label="Twitter/X"
      >
        <TwitterComp class="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://github.com/A-believer"
        target="_blank"
        class="p-4 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
        aria-label="GitHub"
      >
        <GithubComp class="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  </section>
</template>
