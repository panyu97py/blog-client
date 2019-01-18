import Vue from 'vue'
import Router from 'vue-router'
import routerMap from './RouterMap'
import store from '@/store'
Vue.use(Router)
const router = new Router({
  routes: routerMap
})
const getRequireLogin = (to) => {
  return to.meta
    ? to.meta.requireLogin
      ? to.meta.requireLogin
      : false
    : false
}
router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
  let requireLogin = getRequireLogin(to)
  console.log(requireLogin)
  next()
})
export default router
