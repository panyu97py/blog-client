import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/app'
    // },
    {
      path: '/',
      name: 'Layout',
      redirect: '/articleList',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: '/articleList',
          name: 'articleList',
          component: () => import('@/view/app/articleList')
          // component: () => import('@/view/app/article/test')

        }
      ]
    }
  ]
})
