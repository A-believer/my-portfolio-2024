<script setup>
import { ref, onMounted } from "vue";
import GithubComp from "../assets/GithubComp.vue";
import LinkedInComp from "../assets/LinkedInComp.vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <section
    class="min-h-[90vh] flex flex-col justify-center items-center relative py-20 overflow-hidden"
  >
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 pointer-events-none"></div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-4">
      <!-- Profile Picture -->
      <div 
        class="transition-all duration-700 ease-out mb-8"
        :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <div class="relative inline-block">
          <img
            src="../assets/david.jpg"
            alt="David Abolade"
            class="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-border shadow-2xl mx-auto"
          />
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- Eyebrow text -->
      <div 
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <p class="text-textII text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4">
          Frontend Developer
        </p>
      </div>

      <!-- Main heading -->
      <div 
        class="transition-all duration-700 ease-out delay-100"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span class="text-textI">David</span>
          <span class="gradient-text block mt-2">Abolade</span>
        </h1>
      </div>

      <!-- Subtitle -->
      <div 
        class="transition-all duration-700 ease-out delay-200"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <p class="text-textII text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
          Crafting exceptional digital experiences with modern web technologies. 
          <span class="text-textI font-medium">Building systems that endure.</span>
        </p>
      </div>

      <!-- CTA Buttons -->
      <div 
        class="flex flex-wrap items-center justify-center gap-4 pt-8 transition-all duration-700 ease-out delay-300"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <a
          href="/David_Abolade_Resume.pdf"
          download
          class="group px-8 py-4 bg-textI text-bgColor rounded-lg font-medium text-base hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          class="group px-8 py-4 border-2 border-border text-textI rounded-lg font-medium text-base hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>

      <!-- Social Links -->
      <div 
        class="flex items-center justify-center gap-6 pt-6 transition-all duration-700 ease-out delay-400"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/thedavid-ao"
          class="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
          aria-label="LinkedIn"
        >
          <LinkedInComp height="24" width="24" class="group-hover:scale-110 transition-transform" />
        </a>
        <a
          target="_blank"
          href="https://github.com/A-believer"
          class="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
          aria-label="GitHub"
        >
          <GithubComp class="w-6 h-6 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a 
      href="#about" 
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
    >
      <ChevronDownIcon class="h-8 w-8 text-textII" />
    </a>
  </section>
</template>
