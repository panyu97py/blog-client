<template>
  <div>
    <articleTagList>
      <articleTag tagName="标签1"/>
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
