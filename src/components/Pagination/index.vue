<template>
  <div id="Pagination">
    <prev/>
    <PaginationItem page="1" :currentPage='currentPage'/>
    <PaginationItem page="2" :currentPage='currentPage'/>
    <PaginationItem page="3" :currentPage='currentPage'/>
    <PaginationItem page="4" :currentPage='currentPage'/>
    <next/>
    <div style="clear:both"/>
  </div>
</template>
<script>
import prev from './prev'
import next from './next'
import PaginationItem from './item'
export default {
  name: 'Pagination',
  components: {
    PaginationItem,
    next,
    prev
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: String,
      required: true
    }
  }
}
</script>
