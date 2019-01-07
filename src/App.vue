<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  name: 'App',
  mounted () {
    console.log(this.$api)
    Prism.highlightAll()
  }
}
</script>
