<template>
  <ElCard>
    <template #header>
      <div class="text-center font-bold text-2xl">Login</div>
    </template>
    <ElForm
      :model="loginForm"
      label-position="top"
      >
        <ElFormItem label="username">
          <ElInput v-model="loginForm.username"/>
        </ElFormItem>
        <ElFormItem label="password">
          <ElInput v-model="loginForm.password" type="password"/>
        </ElFormItem>
        <ElFormItem>
          <ElButton @click="login(loginForm)" class="w-screen">Login</ElButton>
        </ElFormItem>
      </ElForm>
  </ElCard>
</template>
<script setup lang="ts">
import { ElCard, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { reactive } from 'vue';
import { useLogin } from '@/composable/useLogin';

const loginForm = reactive({
  username: 'azin',
  password: '123456',
})

const { login } = useLogin()
</script>