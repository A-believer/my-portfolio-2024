<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'

const cursorPosition = reactive({
    x: 0,
    y: 0,
})

const updateCursorPosition = (event) => {
    cursorPosition.x = event.pageX
    cursorPosition.y = event.pageY
}

onMounted(() => {
    window.addEventListener('mousemove', updateCursorPosition)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', updateCursorPosition)
})
</script>

<template>
    <div class="relative h-screen">
        <div class="absolute h-4 w-4 rounded-full bg-textI pointer-events-none z-50"
            :style="{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }"></div>
        <!-- Your content goes here -->
    </div>
</template>