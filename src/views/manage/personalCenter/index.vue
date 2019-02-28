<template>
  <div id="personalCenter">
    <cardView>
      <div class="headImg">
        <img src="/static/icon.JPG" alt >
      </div>
      <div class="infoBox">
        <h1 class="userName">鹿丶羽</h1>
        <p class="signature">个人签名</p>
      </div>
    </cardView>
  </div>
</template>
<script>
import cardView from "@/components/cardView";
export default {
  components: { cardView }
};
</script>

<style lang="scss" scoped>
#personalCenter {
  #cardView {
    padding: 25px;
    display: flex;
      width: 100%;
      height: 100%;
  }
  .headImg {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      img{
        width: 100%;
      }
  }
  .infoBox {
    display: flex;
    flex-flow: row wrap;
    // margin-left: 25px;
    height: 100px;
    width: 200px;
    .signature,
    .userName {
      margin: 0;
      width: 100%;
    }
  }
}
</style>
