<script lang="tsx">
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { defineComponent, computed, TransitionGroup } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationMatched } from 'vue-router'
import { isEmptyObj } from '@/utils'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const matched = computed(() => useRoute().matched)

    const breadcrumbItem = (levelRoutes: RouteLocationMatched[]) => {
      const levelRoutesFiltered = levelRoutes.filter((record) => !isEmptyObj(record.meta))
      return levelRoutesFiltered.map((record) => {
        return <ElBreadcrumbItem key={record.path}>{record.meta.title}</ElBreadcrumbItem>
      })
    }
    return () => (
      <ElBreadcrumb>
        <TransitionGroup appear enterActiveClass="animate__animated animate__fadeInRight">
          {breadcrumbItem(matched.value)}
        </TransitionGroup>
      </ElBreadcrumb>
    )
  },
})
</script>
