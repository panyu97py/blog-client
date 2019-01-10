<template>
  <div id="article_sketch">
    <div class="article_sketch_head">
      <p class="article_sketch_title" @click="$emit('ToDetail')">{{title}}</p>
      <div class="article_sketch_time">
        <svg-icon icon-class="date" class="article_sketch_time_icon"/>
        <p class="article_sketch_time_text">{{time}}</p>
      </div>
    </div>
    <div class="article_sketch_footer">
      <svg-icon icon-class="tag" class="article_sketch_tag_icon"/>
      <articleLabelList>
        <articlelabel labelName="标签1"/>
        <articlelabel labelName="标签1"/>
        <articlelabel labelName="标签1"/>
        <articlelabel labelName="标签1"/>
        <articlelabel labelName="标签1"/>
      </articleLabelList>
    </div>
  </div>
</template>
<script>
import articlelabel from '@/components/labelList/item'
import articleLabelList from '@/components/labelList'
export default {
  name: 'sketch',
  data () {
    return {
      title: '测试标题',
      time: '11-11'
    }
  },
  components: {
    articlelabel,
    articleLabelList
  }
}
</script>
