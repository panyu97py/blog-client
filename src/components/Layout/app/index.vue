<template>
  <div id="app_layout">
    <Navigation/>
    <AppMain/>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
import AppMain from './components/App-main'

export default {
  name: 'app_layout',
  components: {
    Navigation,
    AppMain
  }
}
</script>
