<template>
  <div id="manage_layout">
    <sidebar :isCollapse="isCollapse"/>
    <div style="width:calc(100% - 200px);height:100%;background:red;margin-left:200px;">
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
