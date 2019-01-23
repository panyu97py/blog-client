import appLayout from '@/components/Layout/app'
export default [
  {
    path: '/app',
    name: 'app',
    redirect: '/app/overview',
    component: appLayout,
    hidden: false,
    meta: { title: '博客前台', icon: 'collection', requireLogin: false, authorizedRoles: [] },
    children: [
      {
        path: 'overview',
        rootModule: 'app',
        name: 'app_overview',
        component: () => import('@/views/app/overview'),
        meta: { title: '博客主页', requireLogin: false, authorizedRoles: [] }
      },
      {
        path: 'articleDetails',
        rootModule: 'app',
        name: 'articleDetails',
        component: () => import('@/views/app/articleDetails'),
        meta: { title: '文章详情', requireLogin: false, authorizedRoles: [] },
        hidden: true
      },
      {
        path: 'articleSketch',
        rootModule: 'app',
        name: 'articleSketch',
        component: () => import('@/views/app/articleSketch'),
        meta: { title: '文章筛选', requireLogin: false, authorizedRoles: [] },
        hidden: true
      }
    ]
  }
]
