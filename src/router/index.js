import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'app',
      redirect: '/app/articleDetails',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: 'articleList',
          name: 'articleList',
          component: () => import('@/view/app/articleList')
        }, {
          path: 'articleDetails',
          name: 'articleDetails',
          component: () => import('@/view/app/articleDetails')
        }
      ]
    }
  ]
})
