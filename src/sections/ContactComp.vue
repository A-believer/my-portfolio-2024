<script setup>
import LinkedInComp from "../assets/LinkedInComp.vue";
import GmailComp from "../assets/GmailComp.vue";
import SectionHeaderComp from "../components/SectionHeaderComp.vue";
</script>

<template>
  <section class="space-y-5" id="contact">
    <SectionHeaderComp
      mainText="contact me"
      preText="for projects and contracts,"
    />
    <div
      class="md:text-[20px] text-base leading-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 border border-bdr p-4 rounded-[32px] shadow-lg hover:shadow-2xl shadow-textII hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
    >
      <a
        class="flex items-center gap-2 hover:text-textI transition-colors duration-300"
        target="_blank"
        href="mailto:davidabolade29@gmail.com"
      >
        <GmailComp height="32" width="32" />
        <span>davidabolade29@gmail.com</span>
      </a>
      <a
        class="flex items-center gap-2 hover:text-textI transition-colors duration-300"
        target="_blank"
        href="https://wa.me/2348138146850"
      >
        <!-- Basic WhatsApp Icon SVG since I can't import a new component easily without creating it -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.15-2.9-7.02zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.09c0 1.23.89 2.42 1.02 2.61c.13.19 1.75 2.67 4.25 3.74c.59.25 1.05.4 1.41.52c.61.19 1.16.16 1.6.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
          />
        </svg>
        <span>+234 813 814 6850</span>
      </a>
      <a
        class="flex items-center gap-2"
        href="https://www.linkedin.com/in/thedavid-ao/"
      >
        <LinkedInComp height="40" width="40" />
        <span>@thedavid-ao</span>
      </a>
    </div>
  </section>
</template>
