<template>
  <div id="article_footer">
    <svg-icon icon-class="tag" class="article_tag_icon"/>
    <ul class="article_tag_list">
      <li class="article_tag_list_item">
        <articleTag/>
      </li>
    </ul>
    <div style="clear:both"/>
    <!-- <div><a href="" class="article_tag">标签</a></div> -->
  </div>
</template>
<script>
import articleTag from './tag'
export default {
  name: 'article_footer',
  components: {
    articleTag
  }
}
</script>
