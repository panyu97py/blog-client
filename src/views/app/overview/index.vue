<template>
  <div id="articleList">
    <template v-if="articleList.length>0">
      <Article
        v-for=" article in articleListByPage.data"
        :key="article.article_id"
        :article="article"
        @clickTitle="$router.push({name:'articleDetails',query:{article_id:article.article_id}})"
        @openTheFull="$router.push({name:'articleDetails',query:{article_id:article.article_id}})"
        @clickLabel="(label)=>{$router.push({name:'articleSketch',query:{label_id:label.label_id}})}"
      />
      <Pagination v-model="currentPage" :totalPage="articleListByPage.totalPage"/>
    </template>
    <template v-else>
      <noArticle/>
    </template>
  </div>
</template>
<script>
import noArticle from '@/components/article/none'
import Article from '@/components/article/overview'
import Pagination from '@/components/Pagination/app'
import { mapGetters, mapActions } from 'vuex'
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
    noArticle,
    Pagination
  },
  computed: {
    ...mapGetters(['articleList']),
    articleListByPage () {
      return this.$utils.pagination(this.articleList, this.currentPage, 5)
    }
  },
  methods: {
    ...mapActions(['getArticleList'])
  },
  mounted () {
    this.getArticleList()
  }
}
</script>
