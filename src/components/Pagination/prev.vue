<template>
<p @click="$emit('click')">{{prev}}</p>
</template>
<script>
export default {
  name: 'Pagination_prev',
  data () {
    return {
      prev: '<<prev'
    }
  }
}
</script>
