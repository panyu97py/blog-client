<template>
  <div>
    <articleTable :data="data" addText="添加文章" @add="$emit('add')">
      <el-table-column prop="article_serial_number" label="#" align="center" width="80"></el-table-column>
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
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <deleteButton
            type="text"
            size="small"
            :tips="tips(scope.row.article_title)"
            @click="Delete(scope.row)"
          />
        </template>
      </el-table-column>
      <slot slot="pagination"/>
    </articleTable>
  </div>
</template>

<script>
import articleTable from '@/components/table'
import deleteButton from './deleteButton'
export default {
  components: {
    articleTable,
    deleteButton
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    Delete (row) {
      this.$emit('delete', row)
    },
    edit (row) {
      this.$emit('edit', row)
    },
    tips (title) {
      return `您将永久删除标题为${title}的文章`
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
