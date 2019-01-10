<template>
  <div id="articleSketch">
    <ArticleSketch/>
    <ArticleSketch/>
    <ArticleSketch/>
    <ArticleSketch/>
    <Pagination v-model="currentPage" :totalPage="10"/>

  </div>
</template>
<script>
import ArticleSketch from '@/components/article/sketch'
import Pagination from '@/components/Pagination'

export default {
  name: 'articleSketch',
  data () {
    return {
      currentPage: 10
    }
  },
  components: {
    ArticleSketch,
    Pagination
  },
  computed: {
    label_id () {
      return this.$route.query.label_id
    }
  }
}
</script>
