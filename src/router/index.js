import Vue from 'vue'
import Router from 'vue-router'
import routerMap from './RouterMap'
import store from '@/store'
import { Notification } from 'element-ui'
Vue.use(Router)
const router = new Router({
  routes: routerMap
})
/**
 * 判断用户是否有权限进入 to 路由
 * @param {*} store vuex store
 * @param {*} to 前往的路由
 */
const getAccessAuthority = (store, to) => {
  let requireLogin = to.meta
    ? to.meta.requireLogin
      ? to.meta.requireLogin
      : false
    : false
  let loginStatus = store.getters.loginStatus
  let accessAuthority = requireLogin ? loginStatus : true
  let message = loginStatus ? '' : '您还没有登陆'
  return {accessAuthority, message}
}
router.beforeEach((to, from, next) => {
  let {accessAuthority, message} = getAccessAuthority(store, to)
  if (accessAuthority) {
    next()
  } else {
    Notification.error({
      title: '错误',
      message: message
    })
    next({name: 'login', query: {to: to.name}})
  }
})
export default router
