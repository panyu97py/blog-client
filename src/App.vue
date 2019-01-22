<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'App',
  computed: {
    token () {
      return localStorage.getItem('token') || null
    }
  },
  methods: {
    ...mapActions(['login', 'gerUserInfo']),
    ...mapMutations(['SET_TOKEN']),
    /**
     * 校验localStorage中的token若有效则免密登陆
     */
    async loginByToken () {
      if (this.token) {
        this.SET_TOKEN(this.token)
        await this.gerUserInfo()
        this.$notify({
          title: '成功',
          message: '自动登录成功',
          type: 'success'
        })
      }
    }
  },
  mounted () {
    this.loginByToken()
    console.log(this.$api)
  }
}
</script>
