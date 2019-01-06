<template>
  <li class="tag_list_item" :class="theme">
     <span class="tag">{{tagName}}</span>
  </li>
</template>
<script>
export default {
  name: 'tag',
  data () {
    return {
      classList: ['yellow', 'blue', 'pink', 'lightBlue', 'orange', 'green']
    }
  },
  computed: {
    theme () {
      let index = Math.floor(Math.random() * this.classList.length)
      return this.classList[index]
    }
  },
  props: {
    tagName: {
      type: String,
      required: true
    }
  }
}
</script>
