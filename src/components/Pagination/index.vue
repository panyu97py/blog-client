<template>
<div id="Pagination">
  <!-- 总页码大于需要显示的页码时 -->
  <template v-if="totalPage>pagerCount">
    <prev @click="currentPage-=1"/>
    <template>
      <template v-if="currentPage>(pagerCount-2)">
      <PaginationItem @click="currentPage=1" :page="1" :currentPage='currentPage'/>
      <PaginationItem  page="..." :currentPage='currentPage'/>
      </template>
      <template v-if="currentPage>(pagerCount-2)&&currentPage+(pagerCount-3)/2+1<totalPage">
        <PaginationItem @click="currentPage=page + x" :page="page + x" :currentPage='currentPage' v-for="page in pagerCount-2" :key="page" />
      </template>
      <template v-else-if="currentPage<=(pagerCount-2)&&currentPage+(pagerCount-3)/2+1<totalPage">
        <PaginationItem  @click="currentPage=page" :page="page" :currentPage='currentPage' v-for="page in pagerCount -1" :key="page"/>
      </template>
      <template v-else-if="currentPage>(pagerCount-2)&&currentPage+(pagerCount-3)/2+1>=totalPage">
        <PaginationItem  @click="currentPage=page+totalPage-pagerCount+1" :page="page+totalPage-pagerCount+1" :currentPage='currentPage' v-for="page in pagerCount -1" :key="page"/>
      </template>
      <template v-if="currentPage+(pagerCount-3)/2+1<totalPage">
        <PaginationItem  page="..." :currentPage='currentPage'/>
        <PaginationItem @click="currentPage=totalPage" :page="totalPage" :currentPage='currentPage' />
      </template>
    </template>
    <next  @click="currentPage+=1"/>
  </template>
  <!-- 总页码小于需要显示的页码时 -->
  <template v-else>
    <prev @click="currentPage-=1"/>
    <PaginationItem  @click="currentPage=page" :page="page" :currentPage='currentPage' v-for="page in totalPage" :key="page"/>
    <next  @click="currentPage+=1"/>
    <div style="clear:both"/>
  </template>
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
      currentPage: 10,
      pagerCount: 9,
      totalPage: 100
    }
  },
  computed: {
    x () {
      return this.currentPage - Math.ceil((this.pagerCount - 3) / 2) - 1
    }
  },
  props: {
    // totalPage: {
    //   type: Number,
    //   required: true
    // }
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
