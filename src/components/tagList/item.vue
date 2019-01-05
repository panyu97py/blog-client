<template>
  <li class="tag_list_item">
   <a href class="tag">{{tagName}}</a>
  </li>
</template>
<script>
export default {
  name: 'tag',
  props: {
    tagName: {
      type: String,
      required: true
    }
  }
}
</script>
