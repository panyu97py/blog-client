<template>
  <el-table :data="data" stripe  header-cell-class-name="tableHead">
    <slot/>
  </el-table>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
