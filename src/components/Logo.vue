<template>
  <RouterLink class="flex h-[var(--logo-height)] items-center cursor-pointer border-r" to="/">
    <img
      src="@/assets/vite.svg"
      alt="logo"
      class="p-1 h-full w-[var(--left-menu-width-collapse)]"
    />
    <div v-if="!appStore.collapse" class="text-lg font-bold mx-1">
      {{ appStore.title }}
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>
