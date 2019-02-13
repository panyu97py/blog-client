<template>
  <div id="previewArticles">文章列表
    <articleTable
      :data="[{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]"
    />
  </div>
</template>
<script>
import articleTable from './components/articleTable'
export default {
  components: {
    articleTable
  },
  asyncComputed: {
    async tableData () {

    }
  }
}
</script>
