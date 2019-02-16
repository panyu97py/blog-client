<template>
  <div id="Navigation">
    <div class="Navigation_mask"/>
    <div class="Navigation_content">
      <img :src="imgSrc" alt class="headImg">
      <p v-if="loginStatus">{{userInfo.user_nickname||userInfo.user_name}}</p>
      <p  v-else><span @click="login" class="Navigation_login">登录</span>/<span class="Navigation_register" @click="register">注册</span></p>
      <p>--js无所不能--</p>
      <NavigationSelect v-model="model"/>
      <NavigationMenu v-if="model==='menu'"/>
      <NavigationLabelList v-else-if="model==='tag'"/>
      <NavigationAboutMe v-else/>
    </div>
  </div>
</template>
<script>
import NavigationMenu from './Navigation_menu'
import NavigationLabelList from './Navigation_label_list'
import NavigationSelect from './Navigation_select'
import NavigationAboutMe from './Navigation_about_me'
import {mapGetters} from 'vuex'
export default {
  name: 'Navigation',
  data () {
    return {
      imgSrc: '/static/img/Layout/Navigation/User head.JPG',
      model: 'menu'
    }
  },
  computed: {
    ...mapGetters(['loginStatus', 'userInfo'])
  },
  methods: {
    register () {
      this.$notify({
        title: '警告',
        message: '注册功能暂未开通',
        type: 'warning'
      })
    },
    login () {
      this.$router.push({name: 'login'})
    }
  },
  components: {
    NavigationSelect,
    NavigationMenu,
    NavigationLabelList,
    NavigationAboutMe
  }
}
</script>
