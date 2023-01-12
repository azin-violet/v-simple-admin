<template>
    <div class="h-[var(--top-tool-height)] relative flex items-center justify-between">
        <div class="flex items-center h-full">
            <Icon :size="30" :icon="appStore.getCollapse ? expand : fold" @click="toggleCollapse" class="cursor-pointer mx-10px"/>
            <Breadcrumb class="mx-5px"/>
        </div>
        <div class="flex items-center h-full">
            <Icon @click="toggleScreen" :size="30" class="cursor-pointer mx-20px" :icon="isFullscreen ? fullscreenExit : fullscreen"/>
            <UserInfo class="mr-15px"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { useToggle } from '@/composable/useToggle';
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserInfo from '@/components/UserInfo.vue';
import { useFullscreen } from '@vueuse/core'
import Icon from '@/components/Icon.vue';
import expand from '~icons/ep/expand'
import fold from '~icons/ep/fold'
import fullscreen from '~icons/mdi/fullscreen'
import fullscreenExit from '~icons/mdi/fullscreen-exit'

const appStore = useAppStore()
const { toggleCollapse } = useToggle()
const { isFullscreen, toggle: toggleScreen } = useFullscreen()
</script>