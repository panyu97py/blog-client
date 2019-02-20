<template>
  <div id="articleSketch">
    <template v-if="articleList.length>0">
      <ArticleSketch
        v-for="article in articleListByPage.data"
        :key="article.article_id"
        :article="article"
      />
      <Pagination v-model="currentPage" :totalPage="articleListByPage.totalPage"/>
    </template>
        <template v-else>
      <noArticle/>
    </template>
  </div>
</template>
<script>
import ArticleSketch from '@/components/article/sketch'
import Pagination from '@/components/Pagination/app'
import noArticle from '@/components/article/none'
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
    noArticle,
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
