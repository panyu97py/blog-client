<template>
  <div id="article_details_head">
    <p class="article_details_title">{{title}}</p>
    <div class="article_details_time">
      <svg-icon icon-class="date" class="article_details_time_icon"/>
      <p class="article_details_time_text">{{time}}</p>
    </div>
        <svg-icon icon-class="tag" class="article_details_tag_icon" v-if="labels.length>0"/>
    <articleLabelList>
      <articlelabel v-for="label in labels" :key="label.label_id" :labelName="label.label_name" @click="$emit('clickLabel',label)"/>
    </articleLabelList>
  </div>
</template>
<script>
import articlelabel from '@/components/labelList/item'
import articleLabelList from '@/components/labelList'
export default {
  name: 'article_details_head',
  props: {
    title: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  },
  components: {
    articlelabel,
    articleLabelList
  }
}
</script>
