<template>
<div>
    <el-radio-group v-model="isCollapse" class="Navigation_navbar">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
</div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  watch: {
    isCollapse: {
      deep: true,
      handler (isCollapse) {
        this.$emit('input', isCollapse)
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
}
</script>
