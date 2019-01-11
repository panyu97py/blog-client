import Vue from 'vue'
import Router from 'vue-router'
import routerMap from './RouterMap'
Vue.use(Router)
const router = new Router({
  routes: routerMap
})
// router.beforeEach((to, from, next) => {})
export default router
