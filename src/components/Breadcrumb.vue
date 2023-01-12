<script lang="tsx">
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteLocationMatched } from 'vue-router';
import { isEmptyObj } from '@/utils/is'

export default defineComponent({
    name: 'Breadcrumb',
    setup() {
        const matched = computed(() => useRoute().matched)

        const breadcrumbItem = (levelRoutes: RouteLocationMatched[]) => {
            const levelRoutesFiltered = levelRoutes.filter((record) => !isEmptyObj(record.meta))
            return levelRoutesFiltered.map((record) => {
                return (
                    <ElBreadcrumbItem>
                        { record.meta.title }
                    </ElBreadcrumbItem>
                )
            })
        }
        return () => (
            <ElBreadcrumb>
                { breadcrumbItem(matched.value) }
            </ElBreadcrumb>
        )
    }
})
</script>