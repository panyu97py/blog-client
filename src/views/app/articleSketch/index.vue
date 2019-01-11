<template>
  <div id="articleSketch">
    <ArticleSketch v-for="article in arricleList" :key="article.article_id" :article="article"/>
    <Pagination v-model="currentPage" :totalPage="totalPage"/>
  </div>
</template>
<script>
import ArticleSketch from '@/components/article/sketch'
import Pagination from '@/components/Pagination'

export default {
  name: 'articleSketch',
  data () {
    return {
      currentPage: 10,
      totalPage: 10,
      arricleList: []
    }
  },
  components: {
    ArticleSketch,
    Pagination
  },
  computed: {
    label_id () {
      return this.$route.query.label_id
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
      this.arricleList = await this.$api.getArticle({ labelId })
    }
  },
  mounted () {
    this.getArticleList(this.label_id)
  }
}
</script>
