import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useTagStore } from "@/store/tagsView";



const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
// navigation 
router.beforeEach((to, from) => {
    const tagStore = useTagStore()
    if (to.meta.title) {
        tagStore.addTag({title: to.meta.title, path: to.fullPath})
    }
})
export default router