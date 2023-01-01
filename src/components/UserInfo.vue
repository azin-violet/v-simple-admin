<template>
    <el-dropdown trigger="click" class="cursor-pointer">
      <div class="flex items-center">
        <img src="@/assets/img/avatar.jpg" alt="avatar" class="w-[calc(var(--logo-height)-15px)] rounded-1/2">
        <span class="pl-5px">Lancer</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>profile</el-dropdown-item>
          <el-dropdown-item divided>Exit</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
</script>
