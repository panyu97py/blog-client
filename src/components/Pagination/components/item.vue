<template>
  <p class="Pagination_Item" :class="currentPage===page?'current':''" @click="$emit('click')">{{page}}</p>
</template>
<script>
export default {
  name: 'PaginationItem',
  props: {
    page: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>
