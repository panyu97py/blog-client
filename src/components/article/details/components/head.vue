<template>
  <div id="article_details_head">
    <p class="article_details_title">{{title}}</p>
    <div class="article_details_time">
      <svg-icon icon-class="date" class="article_details_time_icon"/>
      <p class="article_details_time_text">{{time}}</p>
    </div>
        <svg-icon icon-class="tag" class="article_details_tag_icon"/>
    <articleTagList>
      <articleTag tagName="标签1"/>
      <articleTag tagName="标签1"/>
      <articleTag tagName="标签1"/>
      <articleTag tagName="标签1"/>
      <articleTag tagName="标签1"/>
    </articleTagList>
    <div style="clear:both"/>
  </div>
</template>
<script>
import articleTag from '@/components/tagList/item'
import articleTagList from '@/components/tagList'
export default {
  name: 'article_details_head',
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
    articleTag,
    articleTagList
  }
}
</script>
