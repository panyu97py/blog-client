<template>
<div id="Pagination">
  <prev @click="currentPage-=1" :status="currentPage<=1"/>
  <!-- 总页码大于需要显示的页码时 -->
  <template v-if="totalPage>pagerCount">
    <!-- 分页前半部分 -->
      <template v-if="currentPage>(pagerCount-2)">
      <PaginationItem @click="currentPage=1" :page="1" :currentPage='currentPage'/>
      <PaginationItem  page="..." :currentPage='currentPage'/>
      </template>
      <!-- 分页前中间部分 -->
      <template v-if="currentPage>(pagerCount-2)&&currentPage+(pagerCount-3)/2+1<totalPage">
        <PaginationItem @click="currentPage=page + currentPage - Math.ceil((pagerCount - 3) / 2) - 1" :page="page + currentPage - Math.ceil((pagerCount - 3) / 2) - 1" :currentPage='currentPage' v-for="page in pagerCount-2" :key="page" />
      </template>
      <template v-else-if="currentPage<=(pagerCount-2)&&currentPage+(pagerCount-3)/2+1<totalPage">
        <PaginationItem  @click="currentPage=page" :page="page" :currentPage='currentPage' v-for="page in pagerCount -1" :key="page"/>
      </template>
      <template v-else-if="currentPage>(pagerCount-2)&&currentPage+(pagerCount-3)/2+1>=totalPage">
        <PaginationItem  @click="currentPage=page+totalPage-pagerCount+1" :page="page+totalPage-pagerCount+1" :currentPage='currentPage' v-for="page in pagerCount -1" :key="page"/>
      </template>
      <!-- 分页后半部分 -->
      <template v-if="currentPage+(pagerCount-3)/2+1<totalPage">
        <PaginationItem  page="..." :currentPage='currentPage'/>
        <PaginationItem @click="currentPage=totalPage" :page="totalPage" :currentPage='currentPage' />
      </template>
  </template>
  <!-- 总页码小于需要显示的页码时 -->
  <template v-else>
    <PaginationItem  @click="currentPage=page" :page="page" :currentPage='currentPage' v-for="page in totalPage" :key="page"/>
  </template>
  <next  @click="currentPage+=1" :status="currentPage>=totalPage"/>
</div>
</template>
<script>
import prev from './components/prev'
import next from './components/next'
import PaginationItem from './components/item'
/**
 * 分页组件
 * v-model="当前页码/需要显示的页码"
 * :pagerCount="需要显示的页码数量"
 * :totalPage="总页数"
 */
export default {
  name: 'Pagination',
  components: {
    PaginationItem,
    next,
    prev
  },
  data () {
    return {
      currentPage: 0
    }
  },
  watch: {
    currentPage: {
      deep: true,
      handler (currentPage) {
        this.$emit('input', currentPage)
      }
    }
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    pagerCount: {
      type: Number,
      default: () => 5
    }
  },
  mounted () {
    this.currentPage = this.value
  }
}
</script>
