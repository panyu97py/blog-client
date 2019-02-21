<template>
  <div id="table">
    <addButton :text="addText" @click="$emit('add')"/>
    <el-table :data="data" stripe header-cell-class-name="tableHead" class="table">
      <slot/>
    </el-table>
    <slot name="pagination"/>
  </div>
</template>
<script>
import addButton from '@/components/button/addButton'
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    addText: {
      type: String,
      required: true
    }
  },
  components: {addButton}
}
</script>
