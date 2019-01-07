<template>
<p @click="$emit('click')" class="Pagination_prev" :class="status?'Pagination_prev_not_allowed':''">{{prev}}</p>
</template>
<script>
export default {
  name: 'Pagination_prev',
  data () {
    return {
      prev: '« Prev'
    }
  },
  props: {
    status: {
      type: Boolean
    }
  }
}
</script>
