<template>
  <div class="flex justify-center">
    <div class="text-center">
      <img width="350" src="@/assets/error/404.svg" />
      <div class="text-14px text-[var(--el-color-info)]">404 Not Found</div>
      <div class="mt-20px">
        <ElButton type="primary" @click="push({ name: 'Home' })">return to Home</ElButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus';

const { push } = useRouter()
</script>
