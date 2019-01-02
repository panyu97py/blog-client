<template>
  <div id="Navigation">
    <img :src="imgSrc" alt class="headImg">
    <p>{{name}}</p>
    <p>--路漫漫其修远兮--</p>
    <div class="switch_icon">
      <img src="/static/img/Layout/Navigation/首页.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  data () {
    return {
      imgSrc: '/static/img/Layout/Navigation/User head.JPG',
      name: 'panyu'
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 768px) {
  #Navigation {
    float: left;
    width: 20%;
    height: 100%;
    background: yellowgreen;
    text-align: center;
    .headImg {
      width: 50%;
      border-radius: 50%;
    }
    .switch_icon {
      width: 20%;
      margin: auto;
      img {
        width: 100%;
      }
    }
  }
}
@media (max-width: 768px) {
  #Navigation {
    background: white;
    height: 50px;
  }
}
</style>
