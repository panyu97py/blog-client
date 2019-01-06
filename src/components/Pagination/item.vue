<template>
  <p class="Pagination_Item" :class="currentPage===page?'current':''">{{page}}</p>
</template>
<script>
export default {
  name: 'PaginationItem',
  props: {
    page: {
      type: String,
      required: true
    },
    currentPage: {
      type: String,
      required: true
    }
  }
}
</script>
