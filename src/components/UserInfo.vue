<template>
    <el-dropdown trigger="click" class="cursor-pointer" @command="handleCommand">
      <div class="flex items-center">
        <img src="@/assets/img/avatar.jpg" alt="avatar" class="w-[calc(var(--logo-height)-15px)] rounded-1/2">
        <span class="pl-5px">{{ userStore.username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided command="logout">Exit</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { useLogin } from '@/composable/useLogin';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
const { logout } = useLogin()
const handleCommand = (command: string) => {
  switch (command) {
    case 'logout': 
      logout()
    default: 
      break
  }
}
</script>
