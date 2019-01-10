<template>
  <div id="articleList">
    <Article
      v-for=" article in articleList"
      :key="article.article_id"
      :article="article"
      @clickTitle="$router.push({name:'articleDetails',query:{article_id:article.article_id}})"
      @openTheFull="$router.push({name:'articleDetails',query:{article_id:article.article_id}})"
    />
    <Pagination v-model="currentPage" :totalPage="10"/>
  </div>
</template>
<script>
import Article from '@/components/article/overview'
import Pagination from '@/components/Pagination'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'articleList',
  data () {
    return {
      // 当前页码
      currentPage: 1
    }
  },
  components: {
    Article,
    Pagination
  },
  computed: {
    ...mapGetters(['articleList'])
  },
  methods: {
    ...mapActions(['getArticleList'])
  },
  mounted () {
    this.getArticleList()
  }
}
</script>
