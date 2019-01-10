import api from '@/server'
const user = {
  state: {
    token: null
  },
  getters: {
    token: state => state.token
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    async login ({commit}, {username, password}) {
      let res = await api.login(username, password)
      commit('SET_TOKEN', res)
      return res
    }
  }
}

export default user
