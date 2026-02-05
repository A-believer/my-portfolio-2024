<script setup>
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import AboutComp from './sections/AboutComp.vue';
import ToolsComp from './sections/ToolsComp.vue';
import ProjectComp from './sections/ProjectComp.vue';
import ContactComp from './sections/ContactComp.vue';
import { useTheme } from "./useTheme"
import { useScrollAnimation } from "./useScrollAnimation"
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
import HeroComp from './sections/HeroComp.vue';

const { theme, toggleTheme } = useTheme()
useScrollAnimation()
</script>

<template>
  <main class="w-full min-h-screen bg-bgColor text-textI transition-colors duration-300 relative" :data-theme="theme">
    <div class="relative max-w-[1440px] mx-auto">
      <div
        class="relative w-[90%] lg:w-[85%] h-full mx-auto flex flex-col">
        <HeaderComp />
        <HeroComp />
        <AboutComp />
        <ProjectComp />
        <ToolsComp />
        <ContactComp />
        <FooterComp />

        <!-- Theme Toggle Button -->
        <button 
          class="fixed bottom-6 right-6 p-4 rounded-full bg-bg-secondary border-2 border-border hover:border-accent shadow-lg hover:shadow-xl transition-all duration-300 z-50 group" 
          @click="toggleTheme"
          aria-label="Toggle theme"
        >
          <div v-if="theme === 'light'" class="text-textI group-hover:text-accent transition-colors">
            <SunIcon class="h-6 w-6" />
          </div>
          <div v-else class="text-textI group-hover:text-accent transition-colors">
            <MoonIcon class="w-6 h-6" />
          </div>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
