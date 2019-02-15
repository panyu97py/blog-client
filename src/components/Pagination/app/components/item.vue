<template>
  <p class="Pagination_Item" :class="currentPage===page?'current':''" @click="$emit('click')">
    <template v-if="page===0">
      <svg-icon icon-class="ellipsis"/>
    </template>
    <template v-else>{{page}}</template>
  </p>
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
