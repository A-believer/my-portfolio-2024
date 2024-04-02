<script setup>
import { ref } from "vue"
import SectionHeaderComp from "../components/SectionHeaderComp.vue";
import GithubComp from "../assets/GithubComp.vue";
import LinkedInComp from "../assets/LinkedInComp.vue";
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'
</script>


<template>
    <section class="flex lg:flex-row flex-col justify-center items-center gap-x-[80px] gap-y-10 py-10 relative">
        <img src="../assets/david.jpg" alt="image"
            class="xl:w-[400px] xl:h-[400px] md:w-[275px] md:h-[275px] w-[150px] h-[150px] rounded-full object-contain" />
        <div class="flex flex-col items-center justify-center">
            <SectionHeaderComp mainText="David Abolade" preText="Hello, I'm" />
            <h3
                class="text-textII md:text-[28px] md:leading-[42px] text-[20px] leading-[30px] text-center font-semibold underline decoration-4 underline-offset-2">
                Frontend Developer</h3>
            <div class="flex items-center justify-center gap-x-5 w-full py-5 text-sm font-semibold">
                <a class="p-4 rounded-[32px] bg-none border border-textI hover:bg-bgColorII hover:text-text hover:border-text"
                    target="_blank"
                    href="https://drive.google.com/file/d/1I78eTcPgMqNLmXl42XSgdPPO1EJ1Ad7S/view?usp=drivesdk">Download
                    CV</a>
                <a class="p-4 rounded-[32px] text-text hover:bg-bgColorI bg-bgColorII" href="#contact">Contact
                    Info</a>
            </div>
            <div class="flex items-center justify-center gap-x-4">
                <a target="_blank" href="https://www.linkedin.com/in/thedavid-ao">
                    <LinkedInComp height="48" width="48" />

                </a>
                <a target="_blank" href="https://github.com/A-believer">
                    <GithubComp />
                </a>
            </div>
        </div>
        <a class="absolute bottom-0 right-0 cursor-pointer" href="#about">
            <ChevronDoubleDownIcon class="h-8 w-8" />
        </a>
    </section>
</template>