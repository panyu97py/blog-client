<template>
  <div id="article_overview_footer">
    <svg-icon icon-class="tag" class="article_overview_tag_icon"/>
    <articleLabelList>
      <articlelabel v-for="label in labels" :key="label.label_id" :labelName="label.label_name" @click="$emit('clickLabel',label)"/>
    </articleLabelList>
    <p class="article_overview_show_all" @click="$emit('openTheFull')">展开全文 > ></p>
  </div>
</template>
<script>
import articlelabel from '@/components/labelList/item'
import articleLabelList from '@/components/labelList'
export default {
  name: 'article_overview_footer',
  components: {
    articlelabel,
    articleLabelList
  },
  props: {
    labels: {
      type: Array,
      required: true
    }
  }
}
</script>
