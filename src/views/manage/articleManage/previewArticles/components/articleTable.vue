<template>
  <el-table
    :data="data"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="作者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="创建时间">
    </el-table-column>
        <el-table-column
      label="操作"
      width="100">
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
    }
  },
  props: ['data']
}
</script>
