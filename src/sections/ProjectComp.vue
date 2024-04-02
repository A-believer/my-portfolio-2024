<script setup>
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'
import SectionHeaderComp from '../components/SectionHeaderComp.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue'
import labwox from "../assets/labwox.png"
import teachmate from "../assets/teachmate-todo.png"
import dashboard from "../assets/dashboard.png"
import getlinked from "../assets/getLinked.png"

const projectArray = ref([
    {
        id: 0,
        name: 'Labwox',
        image: labwox,
        githubUrl: "https://github.com/A-believer/Labwox",
        liveUrl: 'https://labwox.com.ng/'
    },
    {
        id: 1,
        name: 'TeachMate Todo',
        image: teachmate,
        githubUrl: "https://github.com/A-believer/teachmateai-task-manager", liveUrl: 'https://teachmateai-task-manager.vercel.app/'
    },
    {
        id: 2,
        name: 'Dashboard',
        image: dashboard,
        githubUrl: "https://github.com/A-believer/geegpay-dashboard",
        liveUrl: 'https://geegpay-dashboard-sigma.vercel.app/'
    },
    {
        id: 3,
        name: 'GetLinked AI',
        image: getlinked,
        githubUrl: "https://github.com/A-believer/get-linked",
        liveUrl: 'https://get-linked-ai.vercel.app/'
    },
])
</script>
<template>
    <section class="py-16 space-y-5 relative md:w-[85%] w-full mx-auto" id="project">
        <SectionHeaderComp mainText="projects" preText="browse my recent" />
        <div class="w-full flex flex-wrap items-center gap-10 justify-center">
            <div v-for="project in projectArray"
                class="flex flex-col items-center gap-5 justify-center border border-textII rounded-[24px] p-4 shadow-lg hover:shadow-2xl shadow-textII hover:translate-x-1 hover:translate-y-1 transition-all duration-300">


                <img :src="project.image" :alt="project.id" class="w-80 h-40 rounded-[10px] shadow-lg shadow-textII">
                <p class="text-2xl font-bold">{{ project.name }}</p>



                <div class="flex items-center  gap-x-8 text-sm">
                    <a class="flex items-center gap-x-2 p-2 border border-textII hover:bg-bgColorII hover:text-textI rounded-3xl"
                        target="_blank" :href="project.githubUrl">
                        <Icon icon="teenyicons:github-solid" />
                        <span>Github</span>
                    </a>
                    <a class="flex items-center gap-x-2 p-2 border border-textII hover:bg-bgColorII hover:text-textI rounded-3xl"
                        target="_blank" :href="project.liveUrl">
                        <Icon icon="ph:planet-bold" />
                        <span>Live Demo</span>
                    </a>
                </div>

            </div>
        </div>


        <a class="absolute bottom-0 right-0 cursor-pointer" href="#contact">
            <ChevronDoubleDownIcon class="h-8 w-8" />
        </a>
    </section>
</template>