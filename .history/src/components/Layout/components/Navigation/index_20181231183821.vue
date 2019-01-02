<template>
  <div id="Navigation">
    <img :src="imgSrc" alt class="headImg">
    <p>{{name}}</p>
    <p>签名</p>
    <!-- <img src="" alt=""> -->
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  data () {
    return {
      imgSrc: '/static/img/Layout/Navigation/User head.JPG',
      name: 'name'
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
    .headImg{
      width: 50%;
      border-radius: 50%;
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
