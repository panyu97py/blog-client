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

<style lang="scss">
#Navigation_select {
  position: relative;
  width: 100%;
  .switch_icon {
    width: 2.5vw;
    height: 2.5vw;
    margin: auto;
    // padding: 3vw;
    background: white;
    border-radius: 50%;
    img {
      margin-top: 10%;
      height: 80%;
    }
  }
  .selectOption::before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: -1;
    margin: auto;
    left: 0;
    right: 0;
    transform: rotate(45deg);
    background: black;
  }
  .selectOption {
    position: absolute;
    width: 30%;
    z-index: 1;
    border-radius: 5px;
    background: black;
    color: white;
    margin: auto;
    top: 3vw;
    left: 0;
    right: 0;
    p {
      margin: 0;
      padding: 10px;
      border-radius: 5px;
    }
    p:hover {
      background: greenyellow;
      border-radius: 5px;
    }
  }
}
</style>
