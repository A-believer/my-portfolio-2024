<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const projectArray = ref([
  {
    id: 0,
    name: "Market Master USA",
    description: "E-commerce platform with advanced analytics and inventory management",
    tags: ["React", "Next.js", "Tailwind"],
    githubUrl: "https://github.com/A-believer",
    liveUrl: "https://marketmasterusa.com",
  },
  {
    id: 1,
    name: "Dudurewa",
    description: "Modern restaurant website with online ordering system",
    tags: ["Vue", "Tailwind", "Firebase"],
    githubUrl: "https://github.com/A-believer",
    liveUrl: "https://dudurewas-kitchen.vercel.app/",
  },
  {
    id: 2,
    name: "Hernexcube",
    description: "Corporate website with dynamic content management",
    tags: ["Vue", "Vite", "CSS"],
    githubUrl: "https://github.com/A-believer",
    liveUrl: "https://hernexcube.vercel.app/",
  },
  {
    id: 3,
    name: "Labwox",
    description: "Laboratory management system with real-time updates",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/A-believer/Labwox",
    liveUrl: "https://labwox.com.ng/",
  },
  {
    id: 4,
    name: "TeachMate Todo",
    description: "AI-powered task management application for educators",
    tags: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/A-believer/teachmateai-task-manager",
    liveUrl: "https://teachmateai-task-manager.vercel.app/",
  },
  {
    id: 5,
    name: "Dashboard",
    description: "Analytics dashboard with interactive data visualizations",
    tags: ["React", "Chart.js", "Tailwind"],
    githubUrl: "https://github.com/A-believer/geegpay-dashboard",
    liveUrl: "https://geegpay-dashboard-sigma.vercel.app/",
  },
  {
    id: 6,
    name: "GetLinked AI",
    description: "Hackathon registration platform with modern UI",
    tags: ["React", "Framer Motion", "CSS"],
    githubUrl: "https://github.com/A-believer/get-linked",
    liveUrl: "https://get-linked-ai.vercel.app/",
  },
]);
</script>
<template>
  <section
    class="py-32 space-y-16 relative w-full"
    id="project"
  >
    <!-- Section Header -->
    <div class="text-center space-y-4 animate-on-scroll">
      <p class="text-accent text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
        Browse my recent
      </p>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-textI">
        Projects
      </h2>
    </div>

    <!-- Projects Grid -->
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
      <div
        v-for="project in projectArray"
        :key="project.id"
        class="group animate-on-scroll"
      >
        <div class="h-full flex flex-col rounded-2xl border border-border bg-bg-secondary/30 backdrop-blur-sm overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl">
          <!-- Project Preview with iframe -->
          <div class="relative w-full h-64 bg-border/20 overflow-hidden">
            <iframe
              :src="project.liveUrl"
              :title="project.name"
              class="w-full h-full scale-50 origin-top-left"
              style="width: 200%; height: 200%;"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
            <div class="absolute inset-0 bg-gradient-to-t from-bg-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Project Info -->
          <div class="flex-1 p-6 space-y-4">
            <div>
              <h3 class="text-2xl font-bold text-textI mb-2 group-hover:text-accent transition-colors">
                {{ project.name }}
              </h3>
              <p class="text-textII text-base leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex items-center gap-4 pt-4">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 text-sm font-medium text-textI hover:text-accent"
              >
                <Icon icon="mdi:github" class="w-5 h-5" />
                <span>Code</span>
              </a>
              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Icon icon="mdi:open-in-new" class="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a 
      href="#contact" 
      class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
    >
      <ChevronDownIcon class="h-6 w-6 text-textII" />
    </a>
  </section>
</template>
