<template>
  <div id="Layout_app">
    <Navigation/>
    <AppMain/>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
import AppMain from './components/App-main'

export default {
  name: 'Layout',
  components: {
    Navigation,
    AppMain
  }
}
</script>
