import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useTagStore } from '@/store/tagsView'
import { useUserStore } from '@/store/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_PATH),
  routes: routes,
})
// navigation
router.beforeEach((to) => {
  const tagStore = useTagStore()
  const userStore = useUserStore()
  if (to.path !== '/login' && !userStore.isAuthorized) return { name: 'Login' }
  if (to.path === '/login' && userStore.isAuthorized) return { name: 'Home' }
  if (to.meta.title) {
    tagStore.addTag({ title: to.meta.title, path: to.fullPath })
  }
})
export default router
