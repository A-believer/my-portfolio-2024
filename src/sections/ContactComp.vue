<script setup>
import LinkedInComp from '../assets/LinkedInComp.vue';
import GmailComp from '../assets/GmailComp.vue';
import SectionHeaderComp from '../components/SectionHeaderComp.vue';
</script>


<template>
    <section class="space-y-5" id="contact">
        <SectionHeaderComp mainText="contact me" preText="for projects and contracts," />
        <div
            class="md:text-[20px] text-base leading-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 p-4 rounded-[32px] shadow-lg hover:shadow-2xl shadow-textII hover:translate-x-1 hover:translate-y-1 transition-all duration-300">

            <a class="flex items-center gap-2" target="_blank" href="mailto:davidabolade29@gmail.com">
                <GmailComp height="40" width="40" />
                <span>davidabolade29@gmail.com</span>
            </a>
            <a class="flex items-center gap-2" href="https://www.linkedin.com/in/thedavid-ao/">
                <LinkedInComp height="40" width="40" />
                <span>@thedavid-ao</span>
            </a>
        </div>
    </section>
</template>