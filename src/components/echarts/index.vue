<template>
  <div style="width:100%;height:100%"/>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'echarts',
  props: {
    /** 传入 echart 配置项 （官网样式 直接传入即可） */
    chartOption: {
      type: Object,
      required: true
    }
  },
  watch: {
    /** 监听图表数据的变化 （最好将配置选项作为函数方法的返回值） */
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
