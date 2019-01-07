<template>
  <div id="articleList">
    <Article title="标题" time="2018-01-06" :content="content"/>
    <!-- <Article title="标题" time="2018-01-06" :content="content"/>
    <Article title="标题" time="2018-01-06" :content="content"/>
    <Article title="标题" time="2018-01-06" :content="content"/> -->
    <Pagination v-model="currentPage" :totalPage="10"/>
  </div>
</template>
<script>
import Article from '@/components/article'
import Pagination from '@/components/Pagination'

export default {
  name: 'articleList',
  data () {
    return {
      currentPage: 10,
      content: `<pre class="language-javascript">
    <code>import Article from '@/components/article'
      export default {
        name: 'articleList',
        data () {
          return {

          }
        },
        components: {
          Article
        }
      }</code>
</pre>`
    }
  },
  components: {
    Article,
    Pagination
  }
}
</script>
