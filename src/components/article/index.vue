<template>
  <div class="article">
    <articleHead :title="title" :time="time"/>
    <articleHr/>
    <div class="body">

    </div>
  </div>
</template>
<script>
import articleHead from './components/head'
import articleHr from './components/hr'
export default {
  name: 'article',
  data () {
    return {
      title: '标题',
      time: '2019-01-02'
    }
  },
  components: {
    articleHead,
    articleHr
  }
}
</script>

<style lang="scss">
.article {
  background: #3f3f3f;
  margin: 30px;
  border-radius: 6px;
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
  -webkit-box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
  .body{
    height: 80px;
    width: 100%;
  }
}
</style>
