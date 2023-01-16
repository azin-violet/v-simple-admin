import { RouteMeta } from 'vue-router'
import Icon from '@/components/Icon.vue'

export const useMenuTitle = () => {
  const MenuTitle = (meta: RouteMeta) => {
    return meta.icon ? (
      <>
        <Icon icon={meta.icon} />
        <span>{meta.title}</span>
      </>
    ) : (
      <>
        <span>{meta.title}</span>
      </>
    )
  }
  return { MenuTitle }
}
