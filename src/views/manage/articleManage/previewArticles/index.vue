<template>
  <div id="previewArticles">
    <cardView>
      <articleTable :data="articleListByPage.data" @edit="edit" @delete="Delete" @add="add">
        <Pagination :totalPage="articleListByPage.totalPage" v-model="currentPage"/>
      </articleTable>
    </cardView>
  </div>
</template>
<script>
import cardView from '@/components/cardView'
import { mapGetters, mapActions } from 'vuex'
import articleTable from './components/articleTable'
import Pagination from '@/components/Pagination/manage'
export default {
  components: {
    articleTable,
    Pagination,
    cardView
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
  methods: {
    ...mapActions(['getArticleList']),
    async getTableData () {
      if (this.articleList.length === 0) {
        await this.getArticleList()
      }
    },
    add () {
      this.$router.push({
        name: 'createArticles'
      })
    },
    edit (row) {
      this.$router.push({
        name: 'editArticles',
        query: { article_id: row.article_id }
      })
    },
    async Delete (row) {
      await this.$api.deleteArticle(row.article_id)
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success'
      })
      await this.getArticleList()
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>
