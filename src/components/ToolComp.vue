<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="text-textI text-lg leading-7 grid grid-cols-2 gap-10 mx-auto">
        <div class="flex items-center gap-x-2">
            <Icon icon="teenyicons:git-solid" class="text-[32px]" />
            <span>Git</span>
        </div>
        <div class="flex items-center gap-x-2">
            <Icon icon="teenyicons:github-solid" class="text-[32px]" />
            <span>Github</span>
        </div>
        <div class="flex items-center gap-x-2">
            <Icon icon="simple-icons:vercel" class="text-[32px]" />
            <span>Vercel</span>
        </div>
        <div class="flex items-center gap-x-2">
            <Icon icon="teenyicons:netlify-solid" class="text-[32px]" />
            <span>Netlify</span>
        </div>
        <div class="flex items-center gap-x-2">
            <Icon icon="codicon:vscode" class="text-[32px]" />
            <span>VSCode</span>
        </div>
        <div class="flex items-center gap-x-2">
            <Icon icon="teenyicons:figma-outline" class="text-[32px]" />
            <span>Figma</span>
        </div>

    </div>
</template>