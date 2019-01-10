<template>
  <div id="articleDetails">
    <Article
      :title="article?article.article_title:'加载中...'"
      :time="article?article.article_date:'加载中...'"
      :content="article?article.article_content:'加载中...'"
    />
  </div>
</template>
<script>
import Article from '@/components/article/details'
import Pagination from '@/components/Pagination'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'articleList',
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters(['articleList']),
    article_id () {
      return this.$route.query.article_id
    }
  },
  asyncComputed: {
    async article () {
      if (this.articleList.length !== 0) {
        let res = this.articleList.find(item => {
          return item.article_id === this.article_id
        })
        return res
      } else {
        let res = await this.getArticleList()
        return res.data
      }
    }
  },
  methods: {
    ...mapActions(['getArticleList'])
  },
  components: {
    Article,
    Pagination
  }
}
</script>
