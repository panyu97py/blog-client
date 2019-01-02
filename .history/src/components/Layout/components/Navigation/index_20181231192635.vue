<template>
  <div id="Navigation">
    <div class="Navigation_content">
      <img :src="imgSrc" alt class="headImg">
      <p>{{name}}</p>
      <p>--路漫漫其修远兮--</p>
      <div class="switch_icon">
        <img src="/static/img/Layout/Navigation/首页.png" alt>
      </div>
      <p>博客主页</p>
      <p>随笔</p>
      <p>相册</p>
      <p>个人主页</p>
      <p>个人简历</p>
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
    position: relative;
    .Navigation_content {
      height: 80%;
      width: 100%;
    }
    .headImg {
      width: 40%;
      border-radius: 50%;
      border: white 1px solid;
    }
    .switch_icon {
      width: 40%;
      margin: auto;
      background: white;
      border-radius: 50%;
      img {
        width: 70%;
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
