<template>
  <div id="article_overview">
    <articleHead :title="article.article_title" :time="article.article_date" @clickTitle="$emit('clickTitle')"/>
    <articleHr/>
    <div class="article_overview_body" ref="article_overview_body" v-html="article.article_content"></div>
    <articleHr/>
    <articleFooter :labels="article.article_labels" @openTheFull="$emit('openTheFull')" @clickLabel="(label)=>{$emit('clickLabel',label)}"/>
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
    article: {
      type: Object,
      default: () => { return {article_title: '', article_date: '', article_labels: []} }
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
