import { Location } from "@element-plus/icons-vue";
import { ElIcon } from "element-plus";
import { RouteMeta } from "vue-router";

export const useMenuTitle = () => {
    const MenuTitle = (meta: RouteMeta) => {
        return (
            <>
                <ElIcon><Location /></ElIcon>
                <span>{ meta.title }</span>
            </>
        )
    }
    return { MenuTitle } 
}