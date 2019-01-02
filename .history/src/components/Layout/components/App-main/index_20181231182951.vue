<template>
  <div id="app-main">
    <router-view/>
  </div>
</template>
<style lang="scss">
  @media (min-width: 768px) {
    #app-main {
      float: left;
      background: #3f3f3f;
      height: 80px;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    #app-main {
      background: yellowgreen;
      height: 80px;

    }
  }
</style>
