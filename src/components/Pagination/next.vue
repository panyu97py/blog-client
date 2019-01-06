<template>
<p @click="$emit('click')">{{next}}</p>
</template>
<script>
export default {
  name: 'Pagination_next',
  data () {
    return {
      next: '<<next'
    }
  }
}
</script>
