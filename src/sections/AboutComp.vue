<script setup>
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <section
    class="py-32 space-y-16 relative w-full"
    id="about"
  >
    <!-- Section Header -->
    <div class="text-center space-y-4 animate-on-scroll">
      <p class="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
        Get to know more
      </p>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
        About Me
      </h2>
    </div>

    <div class="space-y-16 max-w-6xl mx-auto">
      <!-- Stats Cards -->
      <div
        class="grid md:grid-cols-2 gap-6 animate-on-scroll"
      >
        <div
          class="group p-8 rounded-2xl border border-border hover:border-accent/50 bg-bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        >
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <BriefcaseIcon class="w-7 h-7" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-textI mb-2">Experience</h3>
              <p class="text-textII text-lg">3+ Years</p>
              <p class="text-textIII text-sm mt-2">Building production-ready web applications</p>
            </div>
          </div>
        </div>

        <div
          class="group p-8 rounded-2xl border border-border hover:border-accent/50 bg-bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        >
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <AcademicCapIcon class="w-7 h-7" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-textI mb-2">Education</h3>
              <p class="text-textII text-lg">B.Sc. Civil Engineering</p>
              <p class="text-textIII text-sm mt-2">Analytical Thinking & Problem Solving</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bio -->
      <div class="animate-on-scroll">
        <div class="p-8 md:p-12 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm">
          <p
            class="text-textI/90 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
          >
            I'm David, a <span class="text-accent font-semibold">Software Engineer</span> with over 3 years of experience transforming complex requirements into production-ready web applications. 
            My expertise extends beyond the frontend; I build scalable solutions using <span class="text-accent font-semibold">React, Next.js, Vue, Node.js, and Firebase</span>. 
            I am committed to writing clean, maintainable code and possess strong leadership and communication skills. 
            Whether optimizing performance, managing application state with <span class="text-accent font-semibold">Redux or Pinia</span>, or integrating backend services, 
            I focus on utilizing the right technologies to deliver high-quality results efficiently.
          </p>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a 
      href="#tools" 
      class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
    >
      <ChevronDownIcon class="h-6 w-6 text-textII" />
    </a>
  </section>
</template>
