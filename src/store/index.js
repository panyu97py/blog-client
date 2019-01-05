import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate' //vuex 本地持久化
import modules from './modules'
Vue.use(Vuex)

const store = new Vuex.Store({
  // plugins: [createPersistedState()],//vuex 本地持久化
  modules
})

export default store
