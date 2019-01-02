<template>
  <div id="Navigation_select">
    <div class="switch_icon" @mouseenter="SelectStatus=true" @mouseleave="SelectStatus=false">
      <img src="/static/img/Layout/Navigation/首页.png" alt>
    </div>
    <!-- v-if="SelectStatus" -->
    <div class="selectOption" >
      <p>菜单</p>
      <p>标签</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation_select',
  data () {
    return {
      SelectStatus: false
    }
  }
}
</script>

<style lang="scss">
#Navigation_select {
  position: relative;
  width: 100%;
  .switch_icon {
    width: 2.5vw;
    height: 2.5vw;
    margin: auto;
    background: white;
    border-radius: 50%;
    img {
      margin-top: 10%;
      height: 80%;
    }
  }
  .selectOption {
    position: absolute;
    width: 50px;
    height: 60px;
    background: black;
    margin: auto;
  }
}
</style>
