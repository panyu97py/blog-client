<template>
  <div class="Navigation_navbar">
    <svg-icon
      icon-class="manage_menu"
      :class="isCollapse?'manage_menu':'manage_menu_collapse'"
      @click="isCollapse=!isCollapse"
    />
    <el-breadcrumb separator-class="el-icon-arrow-right" class="manage_breadcrumb">
      <el-breadcrumb-item
        :to="{ name:item.name }"
        v-for="item in router"
        :key="item.name"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="manage_dropdown" @command="handleClick">
      <div>
        <img :src="imgSrc" alt class="manage_userHead">
        <p class="manage_userName">{{userInfo.user_nickname||userInfo.user_name}}</p>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
        <el-dropdown-item command="loginout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      isCollapse: false,
      imgSrc: '/static/img/Layout/Navigation/user.png'
    }
  },
  watch: {
    isCollapse: {
      deep: true,
      handler (isCollapse) {
        this.$emit('input', isCollapse)
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapActions(['loginOut']),
    handleClick (command) {
      this[command]()
    },
    loginout () {
      this.loginOut()
      this.$router.push({ name: 'login' })
    },
    personalCenter () {
      this.$router.push({ name: 'personalCenter' })
    }
  },
  computed: {
    router () {
      return this.$route.matched
    },
    ...mapGetters(['userInfo'])
  }
}
</script>
