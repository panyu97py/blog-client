<template>
<p @click="$emit('click')" class="Pagination_next">{{next}}</p>
</template>
<script>
export default {
  name: 'Pagination_next',
  data () {
    return {
      next: 'next>>'
    }
  }
}
</script>
