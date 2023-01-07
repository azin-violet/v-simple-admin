
<script lang="tsx">
import { defineComponent } from 'vue';
import { useAppStore } from '@/store/app';
import { ElMenu } from "element-plus";
import { innerRoutes } from "@/router/routes";
import { useMenuItem } from "./useMenuItem";
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default defineComponent({
    name: 'Menu',
    setup(props) {

        const appStore = useAppStore()
        const { menuItem } = useMenuItem()

        const activeIndex = computed(() => useRoute().fullPath )

        return () => (
            <ElMenu collapse={appStore.getCollapse} defaultActive={ activeIndex.value } router>
                {{
                    default: () => menuItem(innerRoutes, '')
                }}
            </ElMenu>
        )
    }
})
</script>
<style scoped>
.el-menu--collapse {
  width: var(--left-menu-min-width)
}
</style>