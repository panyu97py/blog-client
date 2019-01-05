<template>
  <div id="article_footer">
    <svg-icon icon-class="tag" class="article_tag_icon"/>
    <articleTagList>
      <articleTag tagName="标签1"/>
      <articleTag tagName="标签1"/>
      <articleTag tagName="标签1"/>
      <articleTag tagName="标签1"/>
      <articleTag tagName="标签1"/>
    </articleTagList>
    <p class="article_show_all">展开全文 > ></p>
    <div style="clear:both"/>
  </div>
</template>
<script>
import articleTag from '@/components/tagList/item'
import articleTagList from '@/components/tagList'

export default {
  name: 'article_footer',
  components: {
    articleTag,
    articleTagList
  }
}
</script>
