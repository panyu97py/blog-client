<template>
  <div id="Layout">
    <Navigation/>
    <div class="app-main">app-main
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
export default {
  name: 'Layout',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
#Layout {
  width: 100%;
  height: 100%;
  background: red;

}
</style>
