<script setup>
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import AboutComp from './sections/AboutComp.vue';
import ToolsComp from './sections/ToolsComp.vue';
import ProjectComp from './sections/ProjectComp.vue';
import ContactComp from './sections/ContactComp.vue';
import { useTheme } from "./useTheme"
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
import HeroComp from './sections/HeroComp.vue';

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <main class="w-full min-h-screen bg-bgColor text-textI transition-all duration-600 relative z-30" :data-theme="theme">
    <div class="relative max-w-[1440px] mx-auto">
      <div
        class="relative w-[85%] h-full mx-auto flex flex-col items-center justify-center lg:gap-y-10 md:gap-y-8 gap-y-5">
        <HeaderComp />
        <HeroComp />
        <AboutComp />
        <ToolsComp />
        <ProjectComp />
        <ContactComp />
        <FooterComp />

        <button class="fixed bottom-4 left-4 transition-all duration-600" @click="toggleTheme">
          <div v-if="theme === 'light'">
            <SunIcon class="h-8 w-8" />
          </div>
          <div v-else>
            <MoonIcon class="w-8 h-8" />
          </div>
        </button>
        <!-- <TrailingCursor /> -->

      </div>
    </div>
  </main>
</template>

<style scoped></style>
