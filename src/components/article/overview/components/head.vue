<template>
  <div id="article_overview_head">
    <p class="article_overview_title">{{title}}</p>
    <div class="article_overview_time">
      <svg-icon icon-class="date" class="article_overview_time_icon"/>
      <p class="article_overview_time_text">{{time}}</p>
    </div>
    <div style="clear:both"/>
  </div>
</template>
<script>
export default {
  name: 'article_overview_head',
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
