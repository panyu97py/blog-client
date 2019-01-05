<template>
  <div id="Navigation_select">
    <div class="switch_icon" @mouseenter="SelectStatus_1=true" @mouseleave="closeOption">
      <img src="/static/img/Layout/Navigation/首页.png" alt>
      <div class="selectOption" @mouseenter="SelectStatus_2=true" v-if="SelectStatus_1||SelectStatus_2" @mouseleave="SelectStatus_2=false">
        <p @click="selectedOption='menu'">菜单</p>
        <p @click="selectedOption='tag'">标签</p>
      </div>
    </div>

    <!-- v-if="SelectStatus" -->
  </div>
</template>
<script>
export default {
  name: 'Navigation_select',
  data () {
    return {
      SelectStatus_1: false,
      SelectStatus_2: false,
      selectedOption: ''
    }
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    selectedOption: {
      deep: true,
      handler (selectedOption) {
        this.$emit('input', selectedOption)
      }
    }
  },
  methods: {
    closeOption () {
      setTimeout(() => {
        this.SelectStatus_1 = false
      }, 200)
    }
  },
  mounted () {
    this.selectedOption = this.value
  }
}
</script>
