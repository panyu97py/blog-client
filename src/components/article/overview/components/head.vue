<template>
  <div id="article_overview_head">
    <p class="article_overview_title"  @click="$emit('clickTitle')">{{title}}</p>
    <div class="article_overview_time">
      <svg-icon icon-class="date" class="article_overview_time_icon"/>
      <p class="article_overview_time_text">{{getTime(time)}}</p>
    </div>
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
  methods: {
    getTime (time) {
      let {year, month, day} = this.$utils.timeConversion(time)
      return year + '-' + month + '-' + day
    }
  }}
</script>
