import appLayout from '@/components/Layout/app'
export default [
  {
    path: '/app',
    name: 'app',
    redirect: '/app/overview',
    component: appLayout,
    hidden: true,
    children: [
      {
        path: 'overview',
        name: 'app_overview',
        component: () => import('@/views/app/overview'),
        meta: { title: '首页', requireLogin: false, authorizedRoles: [] }
      },
      {
        path: 'articleDetails',
        name: 'articleDetails',
        component: () => import('@/views/app/articleDetails'),
        meta: { title: '详情', requireLogin: false, authorizedRoles: [] },
        hidden: true
      },
      {
        path: 'articleSketch',
        name: 'articleSketch',
        component: () => import('@/views/app/articleSketch'),
        meta: { title: '用户管理', requireLogin: false, authorizedRoles: [] },
        hidden: true
      }
    ]
  }
]
