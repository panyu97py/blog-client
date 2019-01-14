<template>
  <div id="manage_layout">
    <sidebar :isCollapse="isCollapse"/>
    <div :class="isCollapse?'manage_layout_main':'manage_layout_main_collapse'">
      <navbar v-model="isCollapse"/>
      <manageMain/>
    </div>
  </div>
</template>
<script>
import navbar from './components/navbar'
import sidebar from './components/sidebar'
import manageMain from './components/Manage-main'
export default {
  name: 'manage_layout',
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    manageMain,
    navbar,
    sidebar
  },
  watch: {
    isCollapse: {
      deep: true,
      handler (isCollapse) {
        console.log(isCollapse)
      }
    }
  }
}
</script>
