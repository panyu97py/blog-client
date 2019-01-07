<template>
<div id="Pagination">
  <div v-if="currentPage>(pagerCount-2)">
    <prev @click="currentPage-=1"/>
    <PaginationItem @click="currentPage=page + x" :page="page + x" :currentPage='currentPage' v-for="page in pagerCount-2" :key="page" />
    <next  @click="currentPage+=1"/>
  </div>
  <div v-else>
    <prev @click="currentPage-=1"/>
    <PaginationItem  @click="currentPage=page" :page="page" :currentPage='currentPage' v-for="page in totalPage" :key="page"/>
    <next  @click="currentPage+=1"/>
    <div style="clear:both"/>
  </div>
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
  data () {
    return {
      currentPage: 1,
      pagerCount: 9
    }
  },
  computed: {
    x () {
      return this.currentPage - Math.ceil((this.pagerCount - 3) / 2) - 1
    }
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    }
    // currentPage: {
    //   type: String,
    //   required: true
    // },
    // pagerCount: {
    //   type: String,
    //   required: true
    // }
  }
}
</script>
