<template>
<p @click="$emit('click')" class="Pagination_next " :class="status?'Pagination_next_not_allowed':''">{{next}}</p>
</template>
<script>
export default {
  name: 'Pagination_next',
  data () {
    return {
      next: 'Next »'
    }
  },
  props: {
    status: {
      type: Boolean
    }
  }
}
</script>
