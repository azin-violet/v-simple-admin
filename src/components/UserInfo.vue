<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <div class="flex items-center">
      <img
        src="@/assets/img/avatar.jpg"
        alt="avatar"
        class="w-[calc(var(--logo-height)-15px)] rounded-1/2"
      />
      <span class="pl-8px">{{ userStore.username }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="repo">
          <Icon :icon="github" />
          repository
        </el-dropdown-item>
        <el-dropdown-item divided command="logout">Exit</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { useLogin } from '@/composable/useLogin'
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'
import Icon from './Icon.vue'
import github from '~icons/ant-design/github-filled'

const userStore = useUserStore()
const appStore = useAppStore()
const { logout } = useLogin()
const handleCommand = (command: string) => {
  switch (command) {
    case 'repo':
      window.open(appStore.repository)
      break

    case 'logout':
      logout()
      break

    default:
      break
  }
}
</script>
