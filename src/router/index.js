import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/article',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: '/article',
          name: 'article',
          component: () => import('@/components/article')
        }
      ]
    }
  ]
})
