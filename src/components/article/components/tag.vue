<template>
    <a href class="article_tag">{{tagName}}</a>
</template>
<script>
export default {
  name: 'articleTag',
  props: {
    tagName: {
      type: String,
      required: true
    }
  }
}
</script>
