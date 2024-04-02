<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from "vue"
const toggleMenu = ref(false)

function setToggleMenu(val) {
    return toggleMenu.value = val
}
</script>
<template>
    <header class="flex items-center justify-between text-2xl xl:py-10 md:py-8 py-5 w-full">
        <h1 class="lg:text-[32px] text-2xl">David Abolade</h1>
        <nav class="hidden lg:flex">
            <ul class="flex items-center gap-x-6">
                <li class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600"><a
                        href="#about">About</a>
                </li>
                <li class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600"><a
                        href="#tools">Tools</a></li>
                <li class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600"><a
                        href="#project">Projects</a></li>
                <li class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600"><a
                        href="#contact">Contact</a></li>
            </ul>
        </nav>

        <nav class="lg:hidden flex">
            <div>
                <button v-if="!toggleMenu" @click="setToggleMenu(true)">
                    <Bars3Icon class="w-8 h-8 hover:text-textII transition-all duration-600" />
                </button>
                <button v-else @click="setToggleMenu(false)">
                    <XMarkIcon class="w-8 h-8 hover:text-textII transition-all duration-600" />
                </button>
            </div>
            <transition enter-from-class="translate-x-5 opacity-0"
                enter-active-class="transition-all duration-800 ease-out" leave-from-class="translate-x-0 opacity-100"
                leave-active-class="transition-all duration-800 cubic-bezier(1, 0.5, 0.8, 1)"
                leave-to-class="translate-x-5 opacity-0">
                <ul v-if="toggleMenu"
                    class="bg-bgColor absolute border-y-2 right-0 md:top-[90px] top-[70px] flex flex-col items-center justify-center gap-y-8 p-8 text-right ">
                    <li class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600">
                        <a href="#about">About</a>
                    </li>
                    <li class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600">
                        <a href="#tools">Tools</a>
                    </li>
                    <li class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-600">
                        <a href="#project">Projects</a>
                    </li>
                    <li class="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-700">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </transition>

        </nav>
    </header>
</template>