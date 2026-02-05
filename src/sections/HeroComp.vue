<script setup>
import { ref } from "vue";
import SectionHeaderComp from "../components/SectionHeaderComp.vue";
import GithubComp from "../assets/GithubComp.vue";
import LinkedInComp from "../assets/LinkedInComp.vue";
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section
    class="flex lg:flex-row flex-col justify-center items-center gap-x-[80px] gap-y-10 py-10 relative"
  >
    <img
      src="../assets/david.jpg"
      alt="image"
      class="xl:w-[400px] xl:h-[400px] md:w-[275px] md:h-[275px] w-[150px] h-[150px] rounded-full object-contain shadow-lg hover:shadow-2xl shadow-textII hover:translate-x-1 hover:translate-y-1 transition-all duration-300 z-10"
    />
    <div class="flex flex-col items-center justify-center">
      <SectionHeaderComp mainText="David Abolade" preText="Hello, I'm" />
      <h3
        class="text-textII md:text-[32px] md:leading-[48px] text-[24px] leading-[36px] text-center font-bold tracking-wide"
      >
        Frontend Developer
      </h3>
      <p
        class="text-textII/80 text-sm mt-2 font-light tracking-widest uppercase"
      >
        Building Digital Experiences
      </p>

      <div
        class="flex items-center justify-center gap-x-6 w-full py-8 text-sm font-semibold"
      >
        <a
          class="px-8 py-3 rounded-full bg-textI text-bgColor border border-transparent hover:bg-transparent hover:text-textI hover:border-textI transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          target="_blank"
          href="/David_Abolade_Resume.pdf"
          download
          >Download CV</a
        >
        <a
          class="px-8 py-3 rounded-full text-textI border border-bdr hover:bg-bgColorII hover:border-textI transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
          href="#contact"
          >Contact Me</a
        >
      </div>
      <div class="flex items-center justify-center gap-x-6">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/thedavid-ao"
          class="hover:scale-110 transition-transform duration-300 text-textII hover:text-textI"
        >
          <LinkedInComp height="32" width="32" />
        </a>
        <a
          target="_blank"
          href="https://github.com/A-believer"
          class="hover:scale-110 transition-transform duration-300 text-textII hover:text-textI"
        >
          <GithubComp />
        </a>
      </div>
    </div>
    <a class="absolute bottom-0 right-0 cursor-pointer" href="#about">
      <ChevronDoubleDownIcon class="h-8 w-8" />
    </a>
  </section>
</template>
