<template>
    <div class="v-logo flex h-[var(--logo-height)] items-center cursor-pointer">
        <img
            src="@/assets/vite.svg" alt="logo"
            class="
            h-[calc(var(--logo-height)-10px)]
            pl-2
            "
        >
        <div 
        v-if="!appStore.getCollapse"
        class="ml-4 text-16px font-700" 
        >
            {{ title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '@/store/app';

const title = ref('ViteAdmin')
const appStore = useAppStore()

</script>
