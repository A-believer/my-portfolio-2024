<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import LanguageComp from '../components/LanguageComp.vue';
import ToolComp from '../components/ToolComp.vue';
</script>
<template>
  <section class="py-32 space-y-16 relative w-full" id="tools">
    <!-- Section Header -->
    <div class="text-center space-y-4 animate-on-scroll">
      <p class="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
        I use these
      </p>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
        Tools & Technologies
      </h2>
    </div>

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
      <div
        class="animate-on-scroll p-8 md:p-10 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl">
        <h3 class="text-3xl font-bold text-textI mb-8 text-center">Languages</h3>
        <LanguageComp />
      </div>
      
      <div
        class="animate-on-scroll p-8 md:p-10 rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:shadow-xl">
        <h3 class="text-3xl font-bold text-textI mb-8 text-center">Tools</h3>
        <ToolComp />
      </div>
    </div>

    <!-- Scroll indicator -->
    <a 
      href="#project" 
      class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
    >
      <ChevronDownIcon class="h-6 w-6 text-textII" />
    </a>
  </section>
</template>