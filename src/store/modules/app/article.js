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
      for (let key in res) {
        console.log(key, res[key]['article_date'], new Date(res[key]['article_date']))
      }
      res = utils.bubbleSort(res, 'article_date', 'reverse')
      commit('SET_ARTICLELIST', res)
      return res
    }
  }
}
export default article
