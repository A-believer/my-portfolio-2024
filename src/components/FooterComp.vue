<script setup></script>
<template>
  <footer class="py-10 flex flex-col items-center justify-center">
    <ul
      class="flex flex-wrap items-center justify-center gap-6 md:text-2xl text-base md:py-9 py-5"
    >
      <li
        class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600"
      >
        <a href="#about">About</a>
      </li>
      <li
        class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600"
      >
        <a href="#tools">Tools</a>
      </li>
      <li
        class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600"
      >
        <a href="#project">Projects</a>
      </li>
      <li
        class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600"
      >
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <p
      class="text-textII text-center underline decoration-2 underline-offset-2"
    >
      Copyright © {{ new Date().getFullYear() }} David Abolade. All Rights
      Reserved.
    </p>
  </footer>
</template>
