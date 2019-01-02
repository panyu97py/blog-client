<template>
  <div id="Navigation_select">
    <div class="switch_icon" @mouseenter="SelectStatus=true" @mouseleave="SelectStatus=false">
      <img src="/static/img/Layout/Navigation/首页.png" alt>
    </div>
    <!-- <p v-if="SelectStatus">SelectStatus</p> -->
    <div >
      
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      SelectStatus: false

    }
  }
}
</script>

<style lang="scss">
#Navigation_select {

}
</style>
