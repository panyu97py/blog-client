import api from '@/server'
// import router from '@/router'
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
    async login ({commit, dispatch}, {username, password}) {
      return new Promise(async (resolve, reject) => {
        let res = await api.login(username, password)
        commit('SET_TOKEN', res)
        localStorage.setItem('token', res)
        commit('CHANGE_LOGIN_STATUS', true)
        dispatch('gerUserInfo')
        resolve()
      })
    },
    async gerUserInfo ({commit}) {
      let userInfo = await api.getUserInfo()
      commit('CHANGE_LOGIN_STATUS', true)
      commit('SET_USERINFO', userInfo)
    },
    loginOut ({commit}) {
      localStorage.removeItem('token')
      commit('SET_TOKEN', '')
      commit('CHANGE_LOGIN_STATUS', false)
    }
  }
}

export default user
