<template>
  <div id="createArticles">
    <div>
      <el-input v-model="form.articleTitle" placeholder="输入文章标题" class="createArticles_title"/>
      <el-button type="primary" class="createArticles_save" @click="saveArticles">保存</el-button>
      <tinymce :height="300" v-model="form.articleContent"/>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import {mapGetters} from 'vuex'
export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  computed: {
    ...mapGetters(['userInfo']),
    userId: () => {
      return this.userInfo.user_id
    }
  },
  data () {
    return {
      form: {
        articleContent: `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`
      }
    }
  },
  methods: {
    async saveArticles () {
      let {articleTitle, articleContent} = this.form
      await this.$api.addArticle(this.userId, articleTitle, articleContent)
      this.$notify({
        title: '成功',
        message: '保存成功',
        type: 'success'
      })
    }
  }
}
</script>
