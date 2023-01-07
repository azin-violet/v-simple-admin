import type { RouteRecordRaw } from "vue-router"

export const pathJoin = (parent: string, path: string) => {
    return parent === '' ? path : `${parent}/${path}`
}

export const hasorOneChildren = (route: RouteRecordRaw) => {
    let hasChildren = false
    let OneChildren = false
    if (route.children) {
        hasChildren = true
        if (route.children.length === 1) {
            OneChildren = true
        }
    }
    return { hasChildren, OneChildren }
}

