<template>
  <el-popover placement="top" width="160" v-model="visible">
    <p>{{tips}}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false">取消</el-button>
      <el-button type="primary" size="mini" @click="ok">确定</el-button>
    </div>
    <el-button :type="type" :size="size" slot="reference">删除</el-button>
  </el-popover>
</template>
<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  props: ['type', 'size', 'tips'],
  methods: {
    ok () {
      this.$emit('click')
      this.visible = false
    }
  }
}
</script>
