<script setup lang="ts">
import { useWindowSize, useDark } from '@vueuse/core'
import { watch } from 'vue';
import { useAppStore } from './store/app';
import { setCssVar } from '@/utils'

const { width } = useWindowSize()
const appStore = useAppStore()
watch(
  () => width.value,
  (width: number) => {
    if (width < 768) {
      appStore.mobile ? undefined : appStore.setMobile(true)
      setCssVar('--left-menu-min-width', '0')
    } else {
      appStore.mobile ? appStore.setMobile(false) : undefined
      setCssVar('--left-menu-min-width', '64px')
    }
  },
  {
    immediate: true
  }
)
const isDark = useDark()
console.log(isDark.value)
</script>

<template>
  <!-- <Layout /> -->
  <RouterView />
</template>
