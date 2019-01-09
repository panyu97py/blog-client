<template>
  <div id="article_sketch">
    <div>
      <p class="article_sketch_title" @click="$emit('ToDetail')">{{title}}</p>
      <div class="article_sketch_time">
        <svg-icon icon-class="date" class="article_sketch_time_icon"/>
        <p class="article_sketch_time_text">{{time}}</p>
      </div>
      <div style="clear:both"/>
    </div>
    <div>
      <svg-icon icon-class="tag" class="article_sketch_tag_icon"/>
      <articleTagList>
        <articleTag tagName="标签1"/>
        <articleTag tagName="标签1"/>
        <articleTag tagName="标签1"/>
        <articleTag tagName="标签1"/>
        <articleTag tagName="标签1"/>
      </articleTagList>
       <div style="clear:both"/>
    </div>
  </div>
</template>
<script>
import articleTag from '@/components/tagList/item'
import articleTagList from '@/components/tagList'
export default {
  name: 'sketch',
  data () {
    return {
      title: '测试标题',
      time: '11-11'
    }
  },
  components: {
    articleTag,
    articleTagList
  }
}
</script>
