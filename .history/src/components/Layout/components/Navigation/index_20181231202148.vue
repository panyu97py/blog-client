<template>
  <div id="Navigation">
    <div class="Navigation_content">
      <img :src="imgSrc" alt class="headImg">
      <p>{{name}}</p>
      <p>--路漫漫其修远兮--</p>
      <selectOptions/>
<menu/>
    </div>
  </div>
</template>
<script>
import menu from './menu'
import selectOptions from './select_options'
export default {
  name: 'Navigation',
  data () {
    return {
      imgSrc: '/static/img/Layout/Navigation/User head.JPG',
      name: 'panyu'
    }
  },
  components: {
    selectOptions,
    menu
  },
  methods: {
    test () {
      console.log('test')
    },
    test2 () {
      console.log('test2')
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
    position: relative;
    .Navigation_content {
      height: 65%;
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    .headImg {
      width: 40%;
      border-radius: 50%;
      border: white 1px solid;
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
