import type { RouteRecordRaw } from "vue-router";
import { hasorOneChildren } from "@/utils/routerHelper";
import { ElMenuItem, ElSubMenu } from 'element-plus'
import { pathJoin } from "@/utils/routerHelper";
import { useMenuTitle } from "./useMenuTitle";

export const useMenuItem = () => {
    const menuItem = (routes: RouteRecordRaw[], parentPath: string) => {
        return routes.map((route) => {
            const { MenuTitle } = useMenuTitle() 
            const { hasChildren, OneChildren } = hasorOneChildren(route)
            if (!hasChildren) {
                return (
                    <ElMenuItem index={pathJoin(parentPath, route.path)}>
                        {{
                            default: () => MenuTitle(route.meta!)
                        }}
                    </ElMenuItem>
                )
            }
            else if (OneChildren && !route.meta) {
                return (
                    <ElMenuItem index={ pathJoin(route.path, route.children![0].path)}>
                        {{
                            default: () => MenuTitle(route.children![0].meta!)
                        }}
                    </ElMenuItem>
                )
            } else {
                const currentPath = pathJoin(parentPath, route.path)
                return(
                    <ElSubMenu index={ currentPath }>
                        {{
                            title: () => MenuTitle(route.meta!),
                            default: () => menuItem(route.children!, currentPath)
                        }}
                    </ElSubMenu>
                )
            }
        })
    }

    return {
        menuItem
    }
}