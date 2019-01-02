<template>
  <div id="Layout">
    <div class="Navigation">布局</div>
    <div class="app-main">
      app-main
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#Layout{
width: 100%;
height: 100%;
background: red;
.Navigation{
  width: 20%;
  height: 100%;
  background: yellowgreen;
}
.app-main{
  background: #3f3f3f;
  height: 100%;
  width: 80%;
}
}
</style>
