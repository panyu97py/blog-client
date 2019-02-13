<template>
  <el-table :data="data" stripe style="width: 100%">
    <el-table-column prop="article_title" label="标题"></el-table-column>
        <el-table-column label="作者">
      <template slot-scope="scope">
        <span>{{scope.row.article_author_info.user_nickname||scope.row.article_author_info.user_name}}</span>
      </template>
    </el-table-column>
    <el-table-column label="创建时间">
      <template slot-scope="scope">
        <span>{{getTime(scope.row.article_date)}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
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
