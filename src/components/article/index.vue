<template>
  <div id="article">
    <articleHead :title="title" :time="time"/>
    <articleHr/>
    <div class="article_body"></div>
    <articleFooter/>
  </div>
</template>
<script>
import articleHead from './components/head'
import articleFooter from './components/footer'
import articleHr from './components/hr'
export default {
  name: 'Article',
  data () {
    return {
      title: '标题',
      time: '2019-01-02'
    }
  },
  components: {
    articleHead,
    articleFooter,
    articleHr
  }
}
</script>
