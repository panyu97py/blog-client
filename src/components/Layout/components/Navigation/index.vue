<template>
  <div id="Navigation">
    <div class="Navigation_mask"/>
    <div class="Navigation_content">
      <img :src="imgSrc" alt class="headImg">
      <p>{{name}}</p>
      <p>--路漫漫其修远兮--</p>
      <NavigationSelect v-model="model"/>
      <NavigationMenu v-if="model==='menu'"/>
      <NavigationLabelList v-else-if="model==='tag'"/>
    </div>
  </div>
</template>
<script>
import NavigationMenu from './Navigation_menu'
import NavigationLabelList from './Navigation_label_list'
import NavigationSelect from './Navigation_select'
export default {
  name: 'Navigation',
  data () {
    return {
      imgSrc: '/static/img/Layout/Navigation/User head.JPG',
      name: '鹿丶羽',
      model: 'menu'
    }
  },
  components: {
    NavigationSelect,
    NavigationMenu,
    NavigationLabelList
  }
}
</script>
