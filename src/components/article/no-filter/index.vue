<template>
  <div id="article">
    <articleHead :title="title" :time="time"/>
    <articleHr/>
    <div class="article_body" ref="article_body" v-html="content"></div>
    <articleHr/>
    <articleFooter/>
  </div>
</template>
<script>
import articleHead from './components/head'
import articleFooter from './components/footer'
import articleHr from './components/hr'
import Prism from 'prismjs'
/**
 * 博文组件
 * title="标题"
 * time="日期"
 * content="内容"
 */
export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  components: {
    articleHead,
    articleFooter,
    articleHr
  },
  mounted () {
    Prism.highlightAll()
    // Prism.highlightElement(this.$refs.article_body)
  }
}
</script>
