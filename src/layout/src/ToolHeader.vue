<template>
  <div class="h-[var(--top-tool-height)] flex items-center justify-between">
    <div class="flex items-center h-full">
      <Icon
        :icon="appStore.collapse ? expand : fold"
        @click="appStore.setCollapse(!appStore.collapse)"
        class="cursor-pointer mx-10px"
      />
      <Breadcrumb class="mx-10px" />
    </div>
    <div class="flex items-center h-full">
      <Icon
        @click="isDark = !isDark"
        class="cursor-pointer mx-10px hover:text-[var(--hover-color)]"
        color="var(--default-color)"
        :icon="isDark ? moon : sunny"
        rootIconCls="animate__animated animate__fadeIn"
      />
      <Icon
        @click="toggleScreen"
        class="cursor-pointer mx-10px hover:text-[var(--hover-color)]"
        color="var(--default-color)"
        :icon="isFullscreen ? fullscreenExit : fullscreen"
      />
      <UserInfo class="mx-10px pr-12px cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
import Breadcrumb from '@/components/Breadcrumb.vue'
import UserInfo from '@/components/UserInfo.vue'
import { useFullscreen, useDark } from '@vueuse/core'
import Icon from '@/components/Icon.vue'
import sunny from '~icons/ep/sunny'
import moon from '~icons/ep/moon'
import expand from '~icons/ep/expand'
import fold from '~icons/ep/fold'
import fullscreen from '~icons/ant-design/fullscreen-outlined'
import fullscreenExit from '~icons/ant-design/fullscreen-exit-outlined'

const isDark = useDark()
const appStore = useAppStore()
const { isFullscreen, toggle: toggleScreen } = useFullscreen()
</script>
