<template>
  <div id="previewArticles">文章列表
    <articleTable
      :data="tableData"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import articleTable from './components/articleTable'
export default {
  components: {
    articleTable
  },
  computed: {
    ...mapGetters(['articleList'])
  },
  asyncComputed: {
    async tableData () {
      let data = this.articleList.length === 0 ? await this.getArticleList() : this.articleList
      return data
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
