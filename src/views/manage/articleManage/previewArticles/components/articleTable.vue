<template>
  <articleTable :data="data">
    <el-table-column prop="article_serial_number" label="#" align="center"></el-table-column>
    <el-table-column prop="article_title" label="标题" align="center"></el-table-column>
    <el-table-column label="作者" align="center">
      <template slot-scope="scope">
        <span>{{scope.row.article_author_info.user_nickname||scope.row.article_author_info.user_name}}</span>
      </template>
    </el-table-column>
    <el-table-column label="创建时间" align="center">
      <template slot-scope="scope">
        <span>{{getTime(scope.row.article_date)}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </articleTable>
</template>

<script>
import articleTable from '@/components/table'
export default {
  components: {
    articleTable
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    getTime (date) {
      let { year, month, day, hour, minutes } = this.$utils.timeConversion(
        date
      )
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes
    }
  },
  props: ['data']
}
</script>
