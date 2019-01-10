import api from '@/server'
const article = {
  state: {
    articleList: []
  },
  getters: {
    articleList: state => state.articleList
  },
  mutations: {
    SET_ARTICLELIST: (state, articleList) => {
      state.articleList = articleList
    }
  },
  actions: {
    async getArticleList ({commit}) {
      let res = await api.getArticle()
      commit('SET_ARTICLELIST', res)
      return res
    }
  }
}
export default article
