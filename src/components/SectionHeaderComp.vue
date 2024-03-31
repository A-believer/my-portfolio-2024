<script setup>
const props = defineProps({
    preText: String,
    mainText: String
})
</script>
<template>
    <div class="text-center flex flex-col items-center justify-center capitalize">
        <p class="text-textII font-semibold">{{ preText }}</p>
        <h2 class="text-textI font-bold md:text-5xl md:leading-[72px] text-[32px] leading-[48px]">{{ mainText }}</h2>
    </div>
</template>