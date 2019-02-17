<template>
  <div id="previewArticles">
    <articleTable :data="articleListByPage.data" @edit="edit" @view="view"/>
    <Pagination :totalPage="articleListByPage.totalPage" v-model="currentPage"/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import articleTable from './components/articleTable'
import Pagination from '@/components/Pagination/manage'
export default {
  components: {
    articleTable,
    Pagination
  },
  computed: {
    ...mapGetters(['articleList']),
    articleListByPage () {
      return this.$utils.pagination(this.articleList, this.currentPage, 10)
    }
  },
  data () {
    return {
      // 当前页码
      currentPage: 1
    }
  },
  // asyncComputed: {
  //   async tableData () {
  //     let data =
  //       this.articleList.length === 0
  //         ? await this.getArticleList()
  //         : this.articleList
  //     return data
  //   }
  // },
  methods: {
    ...mapActions(['getArticleList']),
    async getTableData () {
      if (this.articleList.length === 0) {
        await this.getArticleList()
      }
    },
    edit (row) {
      this.$router.push({name: 'editArticles', query: {article_id: row.article_id}})
    },
    view (row) {
      console.log(row)
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>
