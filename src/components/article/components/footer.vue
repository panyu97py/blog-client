<template>
  <div id="article_footer">
    <svg-icon icon-class="tag" class="article_tag_icon"/>
    <ul class="article_tag_list">
      <li class="article_tag_list_item">
        <articleTag tagName="标签1"/>
      </li>
    </ul>
    <div style="clear:both"/>
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
