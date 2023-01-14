<template>
    <div class="h-[var(--top-tool-height)] relative flex items-center justify-between">
        <div class="flex items-center h-full">
            <Icon :icon="appStore.getCollapse ? expand : fold" @click="toggleCollapse" class="cursor-pointer mx-10px"/>
            <Breadcrumb class="mx-5px"/>
        </div>
        <div class="flex items-center h-full">
            <Icon @click="isDark = !isDark"  class="cursor-pointer mr-20px hover:text-[var(--hover-color)]" color="var(--default-color)" :icon="isDark ? moon : sunny"/>
            <Icon @click="toggleScreen" class="cursor-pointer mr-20px hover:text-[var(--hover-color)]" color="var(--default-color)" :icon="isFullscreen ? fullscreenExit : fullscreen"/>
            <UserInfo class="mr-15px"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { useToggle } from '@/composable/useToggle';
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserInfo from '@/components/UserInfo.vue';
import { useFullscreen, useDark } from '@vueuse/core'
import Icon from '@/components/Icon.vue';
import sunny from '~icons/ep/sunny'
import moon from '~icons/ep/moon'
import expand from '~icons/ep/expand'
import fold from '~icons/ep/fold'
import fullscreen from '~icons/ant-design/fullscreen-outlined'
import fullscreenExit from '~icons/ant-design/fullscreen-exit-outlined'

const isDark = useDark()
const appStore = useAppStore()
const { toggleCollapse } = useToggle()
const { isFullscreen, toggle: toggleScreen } = useFullscreen()
</script>