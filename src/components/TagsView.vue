<template>
    <div class="flex items-center h-[var(--tag-view-height)] border-b">
        <div class="flex-1">
            <div class="flex">
            <Tag 
            v-for="view in tagStore.visitedViews" 
            :path="view.path"
            :title="view.title"/>
            </div>
        </div>
        <!-- <div class="cursor-pointer px-2 h-full border-l text-[var(--el-text-color-regular)] hover:text-[var(--el-color-black)]">
            <ElIcon :size="20" class="relative top-[25%]"><RefreshRight/></ElIcon>
        </div> -->
        <div class="h-full border-l px-2">
            <ElDropdown 
            trigger="click"
            @command="handleCommand"
            class="relative top-[25%] cursor-pointer hover:text-[var(--el-color-black)]">
                <ElIcon :size="20"><Setting/></ElIcon>
                <template #dropdown>
                    <ElDropdownMenu>
                        <ElDropdownItem command="closeOthers">Close Others</ElDropdownItem>
                        <ElDropdownItem command="closeAll">Close All</ElDropdownItem>
                    </ElDropdownMenu>
                </template>
            </ElDropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTagStore } from '@/store/tagsView';
import { ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { RefreshRight, Setting } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
import Tag from './Tag.vue';

const tagStore = useTagStore()
const currentRoute = useRoute()

const handleCommand = (command: string) => {
  if (command === 'closeOthers') {
    tagStore.clearOtherTags(currentRoute.fullPath)
  }
  else if (command === 'closeAll') {
    tagStore.clearAllTags()
  }
}
</script>
