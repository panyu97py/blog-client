<template>
  <div id="Navigation_label_list">
    <articleLabelList>
      <articleLabel
        v-for=" label in labelList"
        :key="label.label_id"
        :labelName="label.label_name"
        @click="$router.push({name:'articleSketch',query:{label_id:label.label_id}})"
      />
    </articleLabelList>
  </div>
</template>
<script>
import articleLabel from '@/components/labelList/item'
import articleLabelList from '@/components/labelList'
export default {
  name: 'ArticleLabelList',
  data () {
    return {
      labelList: []
    }
  },
  components: {
    articleLabel,
    articleLabelList
  },
  methods: {
    async getLabelList () {
      this.labelList = await this.$api.getLabel()
    }
  },
  mounted () {
    this.getLabelList()
  }
}
</script>
