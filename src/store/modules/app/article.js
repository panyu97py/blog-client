import api from '@/server'
import utils from '@/utils'
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
      let res = await api.getArticle({})
      res.map(item => {
        item.article_date = new Date(item.article_date).getTime()
      })
      console.log(res)
      res = utils.bubbleSort(res, 'article_date', 'reverse')
      res.map((item, index) => {
        item.article_serial_number = index + 1
      })
      commit('SET_ARTICLELIST', res)
      return res
    }
  }
}
export default article
