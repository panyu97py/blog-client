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
        hidden: false,
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
        hidden: false,
        component: () => import('@/views/manage/personalCenter'),
        meta: {
          title: '个人中心',
          icon: 'personal',
          requireLogin: true,
          authorizedRoles: []
        }
      },
      {
        path: 'userManage',
        name: 'userManage',
        rootModule: 'manage',
        hidden: false,
        component: () => import('@/views/manage/userManage'),
        meta: {
          title: '用户管理',
          icon: 'personal',
          requireLogin: true,
          authorizedRoles: []
        }
      },
      {
        path: 'labelManage',
        name: 'labelManage',
        rootModule: 'manage',
        hidden: false,
        component: () => import('@/views/manage/labelManage'),
        meta: {
          title: '标签管理',
          icon: 'label_manage',
          requireLogin: true,
          authorizedRoles: []
        }
      },
      {
        path: 'articles',
        rootModule: 'manage',
        name: 'articles',
        redirect: '/manage/articles/preview',
        component: routerView,
        hidden: false,
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
            hidden: true,
            component: () =>
              import('@/views/manage/articleManage/createArticles'),
            meta: {
              title: '创建文章',
              icon: 'edit',
              requireLogin: true,
              authorizedRoles: []
            }
          },
          {
            path: 'edit',
            rootModule: 'manage',
            name: 'editArticles',
            hidden: true,
            component: () =>
              import('@/views/manage/articleManage/editArticle'),
            meta: {
              title: '编辑文章',
              icon: 'edit',
              requireLogin: true,
              authorizedRoles: []
            }
          },
          {
            path: 'preview',
            rootModule: 'manage',
            name: 'previewArticles',
            hidden: false,
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
