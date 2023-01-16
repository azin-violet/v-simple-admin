import type { RouteRecordRaw } from 'vue-router'
import fileDocument from '~icons/mdi/file-document'
import dashboardFilled from '~icons/ant-design/dashboard-filled'
import warning from '~icons/ep/warning-filled'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Dashboard' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
]

const innerRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/layout'),
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          title: 'Dashboard',
          icon: dashboardFilled,
        },
      },
    ],
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/layout'),
    meta: {
      title: 'Error',
      icon: warning,
    },
    children: [
      {
        path: '404',
        component: () => import('@/views/error/404.vue'),
        meta: {
          title: '404',
        },
      },
      {
        path: '403',
        component: () => import('@/views/error/403.vue'),
        meta: {
          title: '403',
        },
      },
      {
        path: '500',
        component: () => import('@/views/error/500.vue'),
        meta: {
          title: '500',
        },
      },
    ],
  },
]

const routes = constantRoutes.concat(innerRoutes)

export { innerRoutes }

export default routes
