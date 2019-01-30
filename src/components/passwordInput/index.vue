<template>
  <div id="passwordInput">
    <el-input
      v-model="password"
      class="hiddenInput"
      type="number"
      :maxlength="6"
      @blur="focus=false"
      @focus="focus=true"
    ></el-input>
    <div class="sixDigitPassword">
      <div
        v-for="i in 6"
        :key="i"
        :class="itemClass(i)"
      >
        <i :style="password.length>=i?{'visibility': 'visible'}:{}"></i>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 仿支付宝密码输入框
 */
export default {
  name: 'ElimPasswordInput',
  data () {
    return {
      password: '',
      focus: false
    }
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    password: {
      deep: true,
      handler (password) {
        this.$emit('input', password)
      }
    }
  },
  methods: {
    itemClass (i) {
      if (this.focus) {
        if (this.password.length + 1 === i) {
          return 'lightBorder active'
        } else if (this.password.length === 6 && i === 6) {
          return 'lightBorder'
        }
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.password = this.value
  }
}
</script>
<style lang="scss">
#passwordInput {
  position: relative;
  width: 182px;
  .hiddenInput {
    opacity: 0;
    position: absolute;
    z-index: 20;
  }
  .sixDigitPassword {
    position: relative;
    z-index: 10;
    cursor: text;
    outline: none;
    height: 30px;
    background: #fff;
    border: 1px solid #cccccc;
    border-radius: 2px;
    div {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
      position: relative;
      width: 28px;
      text-align: center;
      height: 100%;
      display: inline-block;
    }
    div:not(:first-child) {
      border-left: 1px solid #cccccc;
    }
    i {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 7px;
      height: 7px;
      overflow: hidden;
      visibility: hidden;
      background-image: url(https://t.alipayobjects.com/tfscom/T1sl0fXcBnXXXXXXXX.png);
      background-repeat: no-repeat;
    }
    .lightBorder {
      height: calc(100% - 2px);
      border: 1px solid rgba(82, 168, 236, 0.8) !important;
      border-radius: 2px;
      -webkit-box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.75),
        0 0 8px rgba(82, 168, 236, 0.6);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(82, 168, 236, 0.6);
    }
    .active {
      background-image: url(https://t.alipayobjects.com/images/rmsweb/T1nYJhXalXXXXXXXXX.gif);
      background-size: auto 70%;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}
</style>
