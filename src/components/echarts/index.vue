<template>
  <div style="width:100%;height:100%"/>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'echarts',
  props: {
    chartOption: {
      type: Object,
      required: true
    }
  },
  watch: {
    chartOption: {
      deep: true,
      handler (chartOption) {
        this.chart.setOption(chartOption)
      }
    }
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption(this.chartOption)
    }
  },
  mounted () {
    this.initChart()
  }
}
</script>
