<template>
    <div class="h-[var(--top-tool-height)] relative flex items-center justify-between">
        <div class="flex items-center h-full">
            <el-icon @click=toggleCollapse :size="20" v-if="appStore.getCollapse" class="cursor-pointer mx-10px"><Expand /></el-icon>
            <el-icon @click=toggleCollapse :size="20" v-else class="cursor-pointer mx-10px"><Fold /></el-icon>
            <Breadcrumb class="mx-5px"/>
        </div>
        <div class="flex items-center h-full">
            <el-icon @click="toggleScreen" :size="20" class="cursor-pointer mx-20px" v-if="!isFullscreen"><FullScreen /></el-icon>
            <el-icon @click="toggleScreen" :size="20" class="cursor-pointer mx-20px" v-else><CloseBold /></el-icon>
            <UserInfo class="mr-15px"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ElIcon } from 'element-plus';
import { useAppStore } from '@/store/app';
import { Expand, Fold, FullScreen, CloseBold } from '@element-plus/icons-vue';
import { useToggle } from '@/composable/useToggle';
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserInfo from '@/components/UserInfo.vue';
import { useFullscreen } from '@vueuse/core'

const appStore = useAppStore()
const { toggleCollapse } = useToggle()
const { isFullscreen, toggle: toggleScreen } = useFullscreen()
</script>

<style scoped>

</style>