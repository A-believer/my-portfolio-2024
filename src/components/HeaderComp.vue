<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from "vue"
const toggleMenu = ref(false)

function setToggleMenu(val) {
    return toggleMenu.value = val
}
</script>
<template>
    <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-bgColor/80 border-b border-border/50">
        <div class="flex items-center justify-between py-6 w-full">
            <h1 class="text-2xl lg:text-3xl font-bold">
                <span class="gradient-text">David Abolade</span>
            </h1>
            
            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex">
                <ul class="flex items-center gap-x-8">
                    <li class="relative group">
                        <a href="#about" class="text-base font-medium text-textII hover:text-textI transition-colors duration-300">
                            About
                        </a>
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li class="relative group">
                        <a href="#tools" class="text-base font-medium text-textII hover:text-textI transition-colors duration-300">
                            Tools
                        </a>
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li class="relative group">
                        <a href="#project" class="text-base font-medium text-textII hover:text-textI transition-colors duration-300">
                            Projects
                        </a>
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li>
                        <a href="#contact" class="px-6 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-all duration-300 shadow-md hover:shadow-lg">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- Mobile Menu Button -->
            <nav class="lg:hidden flex z-50">
                <button @click="setToggleMenu(!toggleMenu)" class="p-2 hover:bg-bg-secondary rounded-lg transition-colors">
                    <Bars3Icon v-if="!toggleMenu" class="w-7 h-7 text-textI" />
                    <XMarkIcon v-else class="w-7 h-7 text-textI" />
                </button>
            </nav>

            <!-- Mobile Menu -->
            <transition 
                enter-from-class="opacity-0 translate-x-full"
                enter-active-class="transition-all duration-300 ease-out" 
                leave-from-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-300 ease-in"
                leave-to-class="opacity-0 translate-x-full">
                <div v-if="toggleMenu"
                    class="fixed top-[73px] right-0 w-full h-[calc(100vh-73px)] bg-bgColor/95 backdrop-blur-lg border-t border-border lg:hidden z-40">
                    <ul class="flex flex-col items-center justify-center gap-y-8 h-full p-8">
                        <li class="w-full text-center">
                            <a @click="setToggleMenu(false)" href="#about" class="block text-2xl font-semibold text-textI hover:text-accent transition-colors py-3">
                                About
                            </a>
                        </li>
                        <li class="w-full text-center">
                            <a @click="setToggleMenu(false)" href="#tools" class="block text-2xl font-semibold text-textI hover:text-accent transition-colors py-3">
                                Tools
                            </a>
                        </li>
                        <li class="w-full text-center">
                            <a @click="setToggleMenu(false)" href="#project" class="block text-2xl font-semibold text-textI hover:text-accent transition-colors py-3">
                                Projects
                            </a>
                        </li>
                        <li class="w-full text-center">
                            <a @click="setToggleMenu(false)" href="#contact" class="block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-all duration-300 shadow-lg">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </header>
</template>