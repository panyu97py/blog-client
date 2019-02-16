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
          title: '概览',
          icon: 'overview',
          requireLogin: true,
          authorizedRoles: []
        }
      },
      {
        path: 'personalCenter',
        name: 'personalCenter',
        rootModule: 'manage',
        component: () => import('@/views/manage/personalCenter'),
        meta: {
          title: '个人中心',
          icon: 'personal',
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
          icon: 'article',
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
              icon: 'edit',
              requireLogin: true,
              authorizedRoles: []
            }
          }, {
            path: 'preview',
            rootModule: 'manage',
            name: 'previewArticles',
            component: () =>
              import('@/views/manage/articleManage/previewArticles'),
            meta: {
              title: '文章列表',
              icon: 'list',
              requireLogin: true,
              authorizedRoles: []
            }
          }
        ]
      }
    ]
  }
]
