<template>
  <div class="Navigation_navbar">
    <svg-icon
      icon-class="manage_menu"
      :class="isCollapse?'manage_menu':'manage_menu_collapse'"
      @click="isCollapse=!isCollapse"
    />
    <el-breadcrumb separator-class="el-icon-arrow-right" class="manage_breadcrumb">
      <el-breadcrumb-item
        :to="{ name:item.name }"
        v-for="item in router"
        :key="item.name"
      >{{item.meta.title}}</el-breadcrumb-item>
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
  },
  computed: {
    router () {
      return this.$route.matched
    }
  }
}
</script>
