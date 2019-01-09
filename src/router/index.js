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
      redirect: '/app/overview',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: () => import('@/view/app/overview')
        },
        {
          path: 'articleDetails',
          name: 'articleDetails',
          component: () => import('@/view/app/articleDetails')
        },
        {
          path: 'articleSketch',
          name: 'articleSketch',
          component: () => import('@/view/app/articleSketch')
        }
      ]
    }
  ]
})
