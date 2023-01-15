<template>
  <section>
    <div
      v-if="appStore.mobile && !appStore.collapse"
      class="absolute left-0 top-0 w-full h-full opacity-30 bg-[var(--el-color-black)] z-10"
      @click="appStore.setCollapse(true)"
    ></div>
    <div
      class="menu h-full absolute left-0 top-0 bg-[var(--el-menu-bg-color)]"
      :class="{
        'w-[var(--left-menu-width)]': !appStore.collapse,
        'w-[var(--left-menu-width-collapse)]': appStore.collapse,
        'z-100': appStore.mobile,
      }"
    >
      <Logo
        class="border-solid border-b border-[var(--el-border-color)] bg-[var(--el-menu-bg-color)]"
      />
      <Menu
        class="h-[calc(100%-var(--logo-height))]"
        style="transition: width var(--transition-time-02); overflow: hidden"
      />
    </div>
    <div
      class="h-full absolute top-0"
      :class="{
        'w-[calc(100%-var(--left-menu-width))] left-[var(--left-menu-width)]':
          !appStore.collapse && !appStore.mobile,
        'w-[calc(100%-var(--left-menu-width-collapse))] left-[var(--left-menu-width-collapse)]':
          appStore.collapse && !appStore.mobile,
        '!left-0 !w-full': appStore.mobile,
      }"
      style="transition: all var(--transition-time-02)"
    >
      <ToolHeader class="bg-[var(--el-menu-bg-color)]" />
      <TagsView class="border-b border-t border-[var(--el-border-color)]" />
      <AppView />
    </div>
  </section>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import Menu from '@/components/Menu/index.vue'
import TagsView from '@/components/TagsView.vue'
import ToolHeader from './ToolHeader.vue'
import AppView from './AppView.vue'

import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>
