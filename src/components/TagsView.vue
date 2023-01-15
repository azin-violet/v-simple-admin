<template>
  <div class="flex items-center h-[var(--tag-view-height)]">
    <div class="flex-1">
      <div class="flex">
        <Tag v-for="view in tagStore.visitedViews" :path="view.path" :title="view.title" />
      </div>
    </div>
    <!-- <div class="cursor-pointer px-2 h-full border-l text-[var(--defalut-color)] hover:text-[var(--hover-color)]">
            <ElIcon :size="20" class="relative top-[25%]"><RefreshRight/></ElIcon>
        </div> -->
    <div class="h-full border-l border-[var(--el-border-color)] px-2">
      <ElDropdown
        trigger="click"
        @command="handleCommand"
        class="relative top-[25%] cursor-pointer hover:text-[var(--hover-color)]"
      >
        <Icon :icon="setting" />
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
import { useTagStore } from '@/store/tagsView'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import Tag from './Tag.vue'
import Icon from './Icon.vue'
import setting from '~icons/ep/setting'

const tagStore = useTagStore()
const currentRoute = useRoute()
const { push } = useRouter()

const handleCommand = (command: string) => {
  if (command === 'closeOthers') {
    tagStore.clearOtherTags(currentRoute.fullPath)
  } else if (command === 'closeAll') {
    if (currentRoute.name === 'Analysis') {
      tagStore.clearOtherTags(currentRoute.fullPath)
    } else {
      tagStore.clearAllTags()
      push({ name: 'Home' })
    }
  }
}
</script>
