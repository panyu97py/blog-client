<template>
<p @click="$emit('click')" class="Pagination_prev">{{prev}}</p>
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
