<template>
  <div class="h-[100%] p-30px animate__animated animate__fadeInDown">
    <div class="flex items-center justify-center">
      <div class="flex items-center"> 
        <img src="@/assets/img/logo.png" class="w-48px h-48px mr-10px"/>
        <span class="text-20px font-bold">ViteAdmin</span>
      </div>
    </div>
    <Transition enter-active-class="animate__animated animate__bounceIn">
      <div class="m-auto max-w-500px py-100px">
        <LoginForm class="rounded-4xl"/>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
</script>