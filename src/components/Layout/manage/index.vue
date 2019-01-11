<template>
  <div id="manage_layout">
    <manageMain/>
    <navigation/>
  </div>
</template>
<script>
import navigation from './components/navigation'
import manageMain from './components/Manage-main'
export default {
  name: 'manage_layout',
  components: {
    manageMain,
    navigation
  }
}
</script>
