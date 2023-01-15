import type { RouteRecordRaw } from 'vue-router'
import fileDocument from '~icons/mdi/file-document'
import laptop from '~icons/mdi/laptop'
import dashboardFilled from '~icons/ant-design/dashboard-filled'
import compassOutline from '~icons/ant-design/compass-outline'

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
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  },
]

const innerRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/layout'),
    redirect: '/dashboard/analysis',
    meta: {
      title: 'Dashboard',
      icon: dashboardFilled,
    },
    children: [
      {
        path: 'analysis',
        name: 'Analysis',
        component: () => import('@/views/dashboard/Analysis.vue'),
        meta: {
          title: 'Analysis',
          icon: compassOutline,
        },
      },
      {
        path: 'workspace',
        name: 'Workspace',
        component: () => import('@/views/dashboard/Workspace.vue'),
        meta: {
          title: 'Workspace',
          icon: laptop,
        },
      },
    ],
  },
  {
    path: '/document',
    name: 'Document',
    component: () => import('@/layout'),
    redirect: '/document/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Document'),
        meta: {
          title: 'Document',
          icon: fileDocument,
        },
      },
    ],
  },
]

const routes = constantRoutes.concat(innerRoutes)

export { innerRoutes }

export default routes
