<template>
  <div id="article_head">
    <p class="article_title">{{title}}</p>
    <div class="article_time">
      <svg-icon icon-class="date" class="article_time_icon"/>
      <p class="article_time_text">{{time}}</p>
    </div>
    <div style="clear:both"/>
  </div>
</template>
<script>
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
  components: {}
}
</script>
