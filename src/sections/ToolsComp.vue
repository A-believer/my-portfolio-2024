<script setup>
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'
import SectionHeaderComp from '../components/SectionHeaderComp.vue';
import LanguageComp from '../components/LanguageComp.vue';
import ToolComp from '../components/ToolComp.vue';


</script>
<template>
    <section class="h-fit space-y-5 relative md:py-16 py-12 lg:w-[85%] w-full mx-auto" id="tools">
        <SectionHeaderComp mainText="tools" preText="I use these" />
        <div class="flex md:flex-row flex-col gap-10 font-bold text-3xl leading-[42px] w-full">
            <div
                class="border border-textII rounded-[32px] p-6 flex flex-col items-center gap-y-8 w-full shadow-lg hover:shadow-2xl shadow-textII hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
                <h2 class="text-center text-textII underline decoration-4 underline-offset-2">Languages</h2>
                <LanguageComp />

            </div>
            <div
                class="border border-textII rounded-[32px] p-6 flex flex-col items-center gap-y-8 w-full h-fit shadow-lg hover:shadow-2xl shadow-textII hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
                <h2 class="text-center text-textII underline decoration-4 underline-offset-2">Tools</h2>
                <ToolComp />
            </div>
        </div>
        <a class="absolute bottom-0 right-0 cursor-pointer" href="#project">
            <ChevronDoubleDownIcon class="h-8 w-8" />
        </a>
    </section>
</template>