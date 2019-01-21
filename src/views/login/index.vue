<template>
  <div id="login_layout">
    <login :from="from" :to="to"/>
  </div>
</template>
<script>
import login from './components/login'
export default {
  name: 'login_layout',
  components: {
    login
  },
  data () {
    return {
      from: null,
      to: null
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      // 参数vm就是当前组件的实例。
      vm.from = from.name
      vm.to = to.name
    })
  }
}
</script>
