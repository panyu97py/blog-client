import Vue from 'vue'
import Router from 'vue-router'
import routerMap from './RouterMap'
import store from '@/store'
import { Notification } from 'element-ui'
Vue.use(Router)
const router = new Router({
  routes: routerMap
})
const getAccessAuthority = (store, to) => {
  let requireLogin = to.meta
    ? to.meta.requireLogin
      ? to.meta.requireLogin
      : false
    : false
  let loginStatus = store.getters.loginStatus
  let accessAuthority = requireLogin ? loginStatus : true
  return {accessAuthority}
}
router.beforeEach((to, from, next) => {
  let {accessAuthority} = getAccessAuthority(store, to)
  console.log(accessAuthority)
  if (accessAuthority) {
    next()
  } else {
    Notification.error({
      title: '错误',
      message: '您还没有登录'
    })
    next({name: 'login'})
  }
})
export default router
