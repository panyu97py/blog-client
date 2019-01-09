<template>
  <div id="article_details">
    <articleHead :title="title" :time="getTime(time)"/>
    <articleHr/>
    <div class="article_details_body" ref="article_details_body" v-html="content"></div>
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
  watch: {
    content: {
      deep: true,
      handler () {
        setTimeout(() => { Prism.highlightAll() }, 10)
      }
    }
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
