<script setup>
const props = defineProps({
    preText: String,
    mainText: String
})
</script>
<template>
    <div class="">
        <p>{{ preText }}</p>
        <h2>{{ mainText }}</h2>
    </div>
</template>