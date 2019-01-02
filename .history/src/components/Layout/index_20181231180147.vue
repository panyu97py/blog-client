<template>
  <div id="Layout">
    <div class="Navigation">布局</div>
    <div>
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
  width: 30%;
  height: 100%;
}
}
</style>
