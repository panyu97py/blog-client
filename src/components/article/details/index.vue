<template>
  <div id="article_details">
    <articleHead :title="article.article_title" :time="getTime(article.article_date)" :labels="article?article.article_labels:[]"/>
    <articleHr/>
    <div class="article_details_body" ref="article_details_body" v-html="article.article_content"></div>
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
  name: 'article_details',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {
    articleHead,
    articleFooter,
    articleHr
  },
  methods: {
    getTime (time) {
      let {year, month, day} = this.$utils.timeConversion(time)
      return year + '-' + month + '-' + day
    }
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>
