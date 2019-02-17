<template>
  <div id="createArticles">
    <div>
      <el-input v-model="article.article_title" placeholder="输入文章标题" class="createArticles_title"/>
      <el-button type="primary" class="createArticles_save" @click="saveArticles">保存</el-button>
      <tinymce :height="300" v-model="article.article_content"/>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import {mapGetters} from 'vuex'
export default {
  components: { Tinymce },
  data () {
    return {
      article: {}
    }
  },
  computed: {
    ...mapGetters(['articleList']),
    articleId () {
      return this.$route.query.article_id
    }
  },
  methods: {
    async saveArticles () {
      await this.$api.editArticle(this.articleId, this.article.article_title, this.article.article_content)
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success'
      })
    },
    async getArticle (articleId) {
      let article = this.articleList.find(article => {
        return article.article_id === articleId
      }) || await this.$api.getArticle({articleId})
      this.article = article
    }
  },
  mounted () {
    this.getArticle(this.articleId)
  }
}
</script>
