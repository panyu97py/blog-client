<template>
  <div id="Navigation">
    <img :src="imgSrc" alt class="headImg">
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  data () {
    return {
      imgSrc: '/static/User head.JPG'
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
    .headImg{
      width: 80%;

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
