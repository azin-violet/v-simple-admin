<template>
    <div 
    class="mx-1 py-1 px-1 border-solid border-1 flex items-center cursor-pointer"
    :class="{'bg-[var(--el-color-primary)] text-white': isActive}"
    >
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
import { Close } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useTagStore } from '@/store/tagsView';

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