import api from '@/server'
const user = {
  state: {
    token: null,
    loginStatus: false
  },
  getters: {
    token: state => state.token,
    loginStatus: state => state.loginStatus
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    CHANGE_LOGIN_STATUS: (state, loginStatus) => {
      state.loginStatus = loginStatus
    }
  },
  actions: {
    async login ({commit}, {username, password}) {
      let res = await api.login(username, password)
      commit('SET_TOKEN', res)
      commit('CHANGE_LOGIN_STATUS', true)
      return res
    },
    loginOut ({commit}) {
      commit('SET_TOKEN', '')
      commit('CHANGE_LOGIN_STATUS', false)
    }
  }
}

export default user
