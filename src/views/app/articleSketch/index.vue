<template>
  <div id="articleSketch">
    <ArticleSketch v-for="article in articleListByPage.data" :key="article.article_id" :article="article"/>
    <Pagination v-model="currentPage" :totalPage="articleListByPage.totalPage"/>
  </div>
</template>
<script>
import ArticleSketch from '@/components/article/sketch'
import Pagination from '@/components/Pagination'

export default {
  name: 'articleSketch',
  data () {
    return {
      currentPage: 1,
      articleList: []
    }
  },
  components: {
    ArticleSketch,
    Pagination
  },
  computed: {
    label_id () {
      return this.$route.query.label_id
    },
    articleListByPage () {
      return this.$utils.pagination(this.articleList, this.currentPage, 5)
    }
  },
  watch: {
    label_id: {
      deep: true,
      handler (labelId) {
        this.getArticleList(labelId)
      }
    }
  },
  methods: {
    async getArticleList (labelId) {
      this.articleList = await this.$api.getArticle({ labelId })
    }
  },
  mounted () {
    this.getArticleList(this.label_id)
  }
}
</script>
