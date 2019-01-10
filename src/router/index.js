import Vue from 'vue'
import Router from 'vue-router'
import app from './RouterMap/app'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/app',
      hidden: true
    },
    ...app,
    { path: '/404', component: () => import('@/views/404'), hidden: true },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
