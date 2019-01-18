import manageLayout from '@/components/Layout/manage'
import routerView from '@/components/routerView'
export default [
  {
    path: '/manage',
    name: 'manage',
    redirect: '/manage/overview',
    component: manageLayout,
    hidden: false,
    meta: {
      title: '博客后台',
      icon: 'collection',
      requireLogin: true,
      authorizedRoles: []
    },
    children: [
      {
        path: 'overview',
        name: 'manage_overview',
        rootModule: 'manage',
        component: () => import('@/views/manage/overview'),
        meta: {
          title: '首页',
          icon: 'collection',
          requireLogin: true,
          authorizedRoles: []
        }
      },
      {
        path: 'articles',
        rootModule: 'manage',
        name: 'articles',
        redirect: '/manage/articles/create',
        component: routerView,
        meta: {
          title: '博文管理',
          icon: 'collection',
          requireLogin: true,
          authorizedRoles: []
        },
        children: [
          {
            path: 'create',
            rootModule: 'manage',
            name: 'createArticles',
            component: () =>
              import('@/views/manage/articleManage/createArticles'),
            meta: {
              title: '创建文章',
              icon: 'collection',
              requireLogin: true,
              authorizedRoles: []
            }
          }
        ]
      }
    ]
  }
]
