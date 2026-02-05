<script setup>
import { ref, onMounted } from "vue";
import GithubComp from "../assets/GithubComp.vue";
import LinkedInComp from "../assets/LinkedInComp.vue";
import TwitterComp from "../assets/TwitterComp.vue";
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
    class="min-h-[100dvh] flex items-center justify-center relative overflow-hidden py-20 lg:py-0"
  >
    <!-- Ambient Background Lighting -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-6 w-full h-full">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-24">
        
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left space-y-8 w-full">
          
          <!-- Eyebrow -->
          <div 
            class="transition-all duration-700 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <span class="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm md:text-base font-medium tracking-wide uppercase border border-accent/20">
              Software Engineer
            </span>
          </div>

          <!-- Main Heading -->
          <div 
            class="transition-all duration-700 ease-out delay-100 space-y-2"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight font-display">
              <span class="text-textI block">David</span>
              <span class="gradient-text block">Abolade</span>
            </h1>
          </div>

          <!-- Description -->
          <div 
            class="transition-all duration-700 ease-out delay-200"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <p class="text-textII text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              Crafting exceptional digital experiences with modern web technologies. 
              <span class="text-textI font-medium">Building systems that endure.</span>
            </p>
          </div>

          <!-- CTA Buttons -->
          <div 
            class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 transition-all duration-700 ease-out delay-300"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <a
              href="/David_Abolade_Resume.pdf"
              download
              class="group px-8 py-4 bg-textI text-bgColor rounded-full font-medium text-base hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              class="group px-8 py-4 border border-border text-textI rounded-full font-medium text-base hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          <!-- Social Links -->
          <div 
            class="flex items-center justify-center lg:justify-start gap-6 pt-6 transition-all duration-700 ease-out delay-400"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/thedavid-ao"
              class="p-3 rounded-full border border-border text-textII hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedInComp class="w-6 h-6" />
            </a>
            <a
              target="_blank"
              href="https://x.com/theDavid_AO"
              class="p-3 rounded-full border border-border text-textII hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter/X"
            >
              <TwitterComp class="w-6 h-6" />
            </a>
            <a
              target="_blank"
              href="https://github.com/A-believer"
              class="p-3 rounded-full border border-border text-textII hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <GithubComp class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Hero Image -->
        <div 
          class="flex-1 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300"
          :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
        >
          <div class="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            <!-- Animated Blob Background -->
            <div class="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[60px] opacity-40 animate-[spin_10s_linear_infinite]"></div>
            
            <!-- Image Container -->
            <div class="relative w-full h-full overflow-hidden border-[8px] border-bg-secondary/50 shadow-2xl rounded-[40%_60%_70%_30%/40%_50%_60%_50%] hover:rounded-[50%_50%_50%_50%] transition-all duration-700 ease-in-out">
              <img
                src="../assets/david.jpg"
                alt="David Abolade"
                class="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-bg-bgColor/40 to-transparent"></div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute bottom-10 -left-6 bg-bgColor/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl animate-[bounce_3s_infinite] hidden md:block">
              <span class="text-4xl">�</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <a 
      href="#about" 
      class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20 group"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
    >
      <div class="p-2 rounded-full border border-textII/20 bg-bg-secondary/50 backdrop-blur-sm group-hover:border-accent group-hover:text-accent transition-colors">
        <ChevronDownIcon class="h-6 w-6 text-textII group-hover:text-accent" />
      </div>
    </a>
  </section>
</template>
