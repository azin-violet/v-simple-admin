<script setup lang="ts">
import { ElIcon } from 'element-plus';
import type { Component } from 'vue';

interface Props {
    size?: number | string,
    icon: Component,
    color?: string,
}

const props = withDefaults(defineProps<Props>(), {
    size: 20,
})
</script>
<template>
    <ElIcon :size="props.size" :color="props.color">
        <component :is="props.icon" />
    </ElIcon>
</template>