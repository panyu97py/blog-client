<template>
  <div :class="isCollapse?'Navigation_sidebar':'Navigation_sidebar_collapse'">
    <el-menu
      class="Navigation_menu"
      :show-timeout="200"
      :hide-timeout="200"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      mode="vertical"
      :router="true"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <SidebarItem v-for="(item,index) in router" :key="index" :item="item" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './item'
export default {
  props: {
    isCollapse: {
      type: Boolean,
      required: true
    }
  },
  components: {
    SidebarItem
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    router () {
      return this.$router.options.routes
    }
  }
}
</script>
