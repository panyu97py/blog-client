<template>
  <div id="Navigation_tag_list">
    <articleTagList>
      <articleTag tagName="标签1" @click="$router.push({name:'articleSketch'})"/>
    </articleTagList>
  </div>
</template>
<script>
import articleTag from '@/components/tagList/item'
import articleTagList from '@/components/tagList'
export default {
  name: 'ArticleTagList',
  components: {
    articleTag,
    articleTagList
  }
}
</script>
