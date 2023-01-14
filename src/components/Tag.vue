<template>
    <div 
    class="mx-1 py-1 px-1 border border-[var(--el-border-color)] flex items-center cursor-pointer rounded"
    :class="{'bg-[var(--el-color-primary)] text-white': isActive}"
    >
        <ElIcon :size="15">
        </ElIcon>
        <RouterLink 
        :to="props.path" 
        class="text-sm"
        :class="{'hover:text-[var(--el-color-primary)]': !isActive}"
        >
            {{ props.title }}
        </RouterLink>
        <ElIcon :size="15" class="ml-1">
            <Close 
            v-if="!isActive"
            @click="close()"
            class="hover:text-[var(--el-color-primary)]"/>
        </ElIcon>
    </div>
</template>
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useTagStore } from '@/store/tagsView';
import Close from '~icons/ep/close'

interface Props {
    title: string,
    path: string,
}

const props = defineProps<Props>()
const currentRoute = useRoute()
const tagStore = useTagStore()

const isActive = computed(() => props.path === currentRoute.fullPath)
const close = () => {
    tagStore.delTag({
        title: props.title,
        path: props.path
    })
}
</script>