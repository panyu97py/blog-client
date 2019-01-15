import manageLayout from '@/components/Layout/manage';
export default [
  {
    path: '/manage',
    name: 'manage',
    redirect: '/manage/overview',
    component: manageLayout,
    hidden: true,
    children: [
      {
        path: 'overview',
        name: 'manage_overview',
        component: () => import('@/views/manage/overview'),
        meta: { title: '首页', requireLogin: true, authorizedRoles: [] }
      },
      {
        path: 'createArticles',
        name: 'createArticles',
        component: () => import('@/views/manage/articleManage/createArticles'),
        meta: { title: '创建文章', requireLogin: true, authorizedRoles: [] }
      }
    ]
  }
]
