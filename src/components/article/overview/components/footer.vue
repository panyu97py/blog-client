<template>
  <div id="article_overview_footer">
    <svg-icon icon-class="tag" class="article_overview_tag_icon"/>
    <articleTagList>
      <articleTag v-for="label in labels" :key="label.label_id" :tagName="label.label_name"/>
    </articleTagList>
    <p class="article_overview_show_all" @click="$emit('openTheFull')">展开全文 > ></p>
  </div>
</template>
<script>
import articleTag from '@/components/tagList/item'
import articleTagList from '@/components/tagList'
export default {
  name: 'article_overview_footer',
  components: {
    articleTag,
    articleTagList
  },
  props: {
    labels: {
      type: Array,
      required: true
    }
  }
}
</script>
