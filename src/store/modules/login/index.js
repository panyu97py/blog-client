import api from '@/server'
const user = {
  state: {
    token: null,
    userInfo: {},
    loginStatus: false
  },
  getters: {
    token: state => state.token,
    userInfo: state => state.userInfo,
    loginStatus: state => state.loginStatus
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    CHANGE_LOGIN_STATUS: (state, loginStatus) => {
      state.loginStatus = loginStatus
    }
  },
  actions: {
    async login ({commit, action}, {username, password}) {
      let res = await api.login(username, password)
      commit('SET_TOKEN', res)
      commit('CHANGE_LOGIN_STATUS', true)
      action('gerUserInfo')
      return res
    },
    async gerUserInfo ({commit}) {
      let userInfo = await api.getUserInfo()
      commit('SET_USERINFO', userInfo)
    },
    loginOut ({commit}) {
      commit('SET_TOKEN', '')
      commit('CHANGE_LOGIN_STATUS', false)
    }
  }
}

export default user
