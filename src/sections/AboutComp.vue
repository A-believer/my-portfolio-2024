<script setup>
import { AcademicCapIcon, StarIcon, ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'
import SectionHeaderComp from '../components/SectionHeaderComp.vue';
</script>
<template>
    <section class="md:py-16 py-10 space-y-5 relative md:w-[85%] w-full mx-auto" id="about">
        <SectionHeaderComp mainText="about me" preText="get to know more" />
        <div class="space-y-10">
            <div class="flex flex-col md:flex-row items-center justify-center w-full gap-5 text-center">
                <div
                    class="flex flex-col items-center justify-center lg:w-[30%] w-[80%] border border-textII p-6 rounded-[32px]">
                    <StarIcon class="w-10 h-10" />
                    <p class="text-[18px] leading-[28px] font-bold">Experience</p>
                    <p class="text-textII">2+ Years</p>
                </div>
                <div
                    class="flex flex-col items-center justify-center lg:w-[30%] w-[80%] border border-textII p-6 rounded-[32px]">
                    <AcademicCapIcon class="w-10 h-10" />
                    <p class="text-[18px] leading-[28px] font-bold">Education</p>
                    <p class="text-textII">B.Sc. Bachelor's Degree</p>
                </div>
            </div>

            <p class="text-justify text-textI/5 font-medium">I'm David, a passionate frontend web developer with a
                knack for
                turning
                digital
                dreams into reality. With
                a
                palette of tools ranging from basic HTML, CSS, and Javascript to frameworks and libraries like Tailwind,
                React and Next JS at my fingertips. I craft immersive user experiences that leave a lasting impression.
                Whether it's responsive layouts that dance across screens or interactive interfaces that spark
                curiosity, I
                thrive on pushing the boundaries of web technology. Join me on a journey through my digital playground,
                where innovation knows no bounds, and every click tells a story. Let's make the web a more beautiful and
                functional place together, one line of code at a time.</p>
        </div>
        <a class="absolute bottom-0 right-0 cursor-pointer" href="#tools">
            <ChevronDoubleDownIcon class="h-8 w-8" />
        </a>

    </section>
</template>