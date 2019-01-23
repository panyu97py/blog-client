<template>
  <div id="Navigation">
    <div class="Navigation_mask"/>
    <div class="Navigation_content">
      <img :src="imgSrc" alt class="headImg">
      <p v-if="loginStatus">{{name}}</p>
      <p  v-else><span @click="$router.push({name:'login'})" class="Navigation_login">登录</span>/<span class="Navigation_register">注册</span></p>
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
      name: '鹿丶羽',
      model: 'menu'
    }
  },
  computed: {
    ...mapGetters(['loginStatus'])
  },
  components: {
    NavigationSelect,
    NavigationMenu,
    NavigationLabelList,
    NavigationAboutMe
  }
}
</script>
