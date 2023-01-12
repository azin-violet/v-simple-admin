import { RouteMeta } from "vue-router";
import Icon from '@/components/Icon.vue';

export const useMenuTitle = () => {
    const MenuTitle = (meta: RouteMeta) => {
        return (
            <>
                <Icon icon={meta.icon} />
                <span>{ meta.title }</span>
            </>
        )
    }
    return { MenuTitle } 
}