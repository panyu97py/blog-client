<template>
  <div id="article_sketch">
    <div class="article_sketch_head">
      <p class="article_sketch_title" @click="$emit('ToDetail')">{{article.article_title}}</p>
      <div class="article_sketch_time">
        <svg-icon icon-class="date" class="article_sketch_time_icon"/>
        <p class="article_sketch_time_text">{{getTime(article.article_date)}}</p>
      </div>
    </div>
    <div class="article_sketch_footer">
      <svg-icon icon-class="tag" class="article_sketch_tag_icon"/>
      <articleLabelList>
        <articlelabel
          v-for="label in article.article_labels"
          :key="label.label_id"
          :labelName="label.label_name"
        />
      </articleLabelList>
    </div>
  </div>
</template>
<script>
import articlelabel from '@/components/labelList/item'
import articleLabelList from '@/components/labelList'
export default {
  name: 'sketch',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {
    articlelabel,
    articleLabelList
  },
  methods: {
    getTime (time) {
      let { year, month, day } = this.$utils.timeConversion(time)
      return year + '-' + month + '-' + day
    }
  }
}
</script>
