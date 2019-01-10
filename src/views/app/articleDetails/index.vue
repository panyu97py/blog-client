<template>
  <div id="articleDetails">
    <Article
      :article="article"
      v-if="article"
      @clickLabel="(label)=>{$router.push({name:'articleSketch',query:{label_id:label.label_id}})}"
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
        res = res.data.find(item => {
          return item.article_id === this.article_id
        })
        return res
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
