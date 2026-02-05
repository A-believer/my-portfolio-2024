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
              <p class="text-textII text-lg">B.Sc. Bachelor's Degree</p>
              <p class="text-textIII text-sm mt-2">Strong foundation in computer science</p>
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
            I'm David, a passionate frontend web developer with a knack for turning
            digital dreams into reality. I handle <span class="text-accent font-semibold">technical planning, timelines, QA,
            and cross-browser optimization</span> to ensure reliable delivery. With a
            palette of tools ranging from basic HTML, CSS, and Javascript to
            frameworks and libraries like <span class="text-accent font-semibold">Tailwind, React and Next.js</span>, I craft immersive user experiences that leave a lasting
            impression. Whether it's responsive layouts that dance across screens or
            interactive interfaces that spark curiosity, I thrive on pushing the
            boundaries of web technology.
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
