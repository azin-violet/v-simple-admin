<template>
    <el-menu
      default-active="4"
      :collapse="isCollapse"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
</template>
  
<script lang="ts" setup>
import { computed } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {
  ElMenu,
  ElMenuItem,
  ElIcon,
  ElSubMenu,
} from 'element-plus'
import { useAppStore } from '@/store/app'
import { pathJoin } from '@/utils/routerHelper'

console.log(pathJoin('/document', 'index'))

const store = useAppStore()
const isCollapse = computed(() => store.getCollapse)
</script>

<style scoped>
.el-menu--collapse {
  width: var(--left-menu-min-width)
}
</style>
  
  