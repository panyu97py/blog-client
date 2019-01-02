<template>
  <div id="article_head">
    <!-- <div class="article_head"> -->
    <p class="article_title">{{title}}</p>
    <p class="article_time">
      <dateIcon/>
      {{time}}
    </p>
    <div style="clear:both"/>
    <!-- </div> -->
  </div>
</template>
<script>
import dateIcon from '@/assets/icon/date'

export default {
  name: 'article_head',
  props: {
    title: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  },
  components: {
    dateIcon
  }
}
</script>

<style lang="scss">
#article_head {
  // .article_head {
  border-left: rgba(63, 63, 63, 0) 5px solid;
  padding: 15px 25px 15px 25px;
  .article_title {
    color: #999;
    font-weight: initial;
    line-height: 35px;
    margin-bottom: 20px;
    text-align: left;
    font-size: 26px;
    width: 50%;
    float: left;
    margin: 0;
  }
  .article_time {
    text-align: right;
    color: #999;
    font-weight: initial;
    line-height: 35px;
    margin-bottom: 20px;
    font-size: 15px;
    width: 120px;
    float: right;
    margin: 0;
    margin-right: 10px;
  }
  .article_title:hover {
    color: white;
  }
  // }
}
</style>
