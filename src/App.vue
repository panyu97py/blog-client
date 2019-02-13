<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log(this.$api)
    console.log(this.$store)
  }
}
</script>
