<script setup>
import { ref } from "vue"
import SectionHeaderComp from "../components/SectionHeaderComp.vue";

const heroImg = ref("../assets/david.jpg")
</script>
<template>
    <section class="min-h-[90vh]">
        <img :src="heroImg" alt="image">
        <div>
            <SectionHeaderComp :mainText="Hello, I am" :preText="David Abolade " />
        </div>
    </section>
</template>