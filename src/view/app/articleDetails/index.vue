<template>
  <div id="articleDetails">
    <Article title="标题" time="2018-01-06" :content="content"/>
  </div>
</template>
<script>
import Article from '@/components/article/details'
import Pagination from '@/components/Pagination'

export default {
  name: 'articleList',
  data () {
    return {
      currentPage: 1,
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
