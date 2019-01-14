<template>
  <div class="Navigation_navbar">
    <svg-icon
      icon-class="manage_menu"
      :class="isCollapse?'manage_menu':'manage_menu_collapse'"
      @click="isCollapse=!isCollapse"
    />
    <el-breadcrumb separator-class="el-icon-arrow-right" class="manage_breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
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
