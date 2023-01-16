<template>
  <div class="h-full p-30px animate__animated animate__fadeInDown">
    <div class="flex items-center justify-center">
      <div class="flex items-center">
        <img src="@/assets/vite.svg" class="w-48px h-48px mx-10px" />
        <span class="text-20px font-bold">ViteAdmin</span>
      </div>
    </div>
    <div class="m-auto max-w-500px py-100px">
      <LoginForm class="rounded-4xl" />
    </div>
  </div>
</template>
<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>
