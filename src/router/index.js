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
const getAccessAuthority = async (store, to) => {
  let token = localStorage.getItem('token') || null
  let loginStatus = store.getters.loginStatus

  /**
   * 若 token存在
   * 且用户未登陆
   * 则校验token 发起免密登陆
   */
  if (token && !loginStatus) {
    store.commit('SET_TOKEN', token)
    await store.dispatch('gerUserInfo')
    Notification({
      title: '成功',
      message: '自动登录成功',
      type: 'success'
    })
    return {accessAuthority: true}
  } else {
    let requireLogin = to.meta
      ? to.meta.requireLogin
        ? to.meta.requireLogin
        : false
      : false
    let accessAuthority = requireLogin ? loginStatus : true
    let message = loginStatus ? '' : '您还没有登陆'
    return {accessAuthority, message}
  }
}
router.beforeEach(async (to, from, next) => {
  let {accessAuthority, message} = await getAccessAuthority(store, to)
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
