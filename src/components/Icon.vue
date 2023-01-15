<script setup lang="ts">
import { ElIcon } from 'element-plus'
import type { Component } from 'vue'

interface Props {
  size?: number | string
  icon: Component
  color?: string
  rootIconCls?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 20,
})
</script>
<template>
  <ElIcon :size="props.size" :color="props.color">
    <component :class="rootIconCls" :is="props.icon" />
  </ElIcon>
</template>
