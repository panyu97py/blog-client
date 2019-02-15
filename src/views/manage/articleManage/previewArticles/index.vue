<template>
  <div id="previewArticles">
    <articleTable :data="articleListByPage.data"/>
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
      return this.$utils.pagination(this.articleList, this.currentPage, 5)
    }
  },
  data () {
    return {
      // 当前页码
      currentPage: 1
    }
  },
  watch: {
    currentPage: {
      deep: true,
      handler (currentPage) {
        this.$emit('input', currentPage)
      }
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
        console.log(this.articleList)
        console.log(this.articleListByPage)
      }
    }
  },
  mounted () {
    // this.getArticleList()
    this.getTableData()
  }
}
</script>
