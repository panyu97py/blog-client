<template>
  <div id="personalCenter">
    <cardView>
      <div class="headImg">
        <img src="/static/icon.JPG" alt class="headImg">
      </div>
    </cardView>
  </div>
</template>
<script>
import cardView from '@/components/cardView'
export default {
  components: { cardView }
}
</script>

<style lang="scss" scoped>
#personalCenter {
  .headImg {
    text-align: center;
    img {
      border-radius: 50%;
      height: 100px;
    }
  }
}
</style>
