<template>
  <div id="Navigation">
    <div class="Navigation_content">
      <img :src="imgSrc" alt class="headImg">
      <p>{{name}}</p>
      <p>--路漫漫其修远兮--</p>
      <NavigationSelect v-model="model"/>
      <NavigationMenu v-if="model==='menu'"/>
      <NavigationTagList v-else-if="model==='tag'"/>
    </div>
  </div>
  <!-- background-color: rgba(0,0,0,0.75); -->
</template>
<script>
import NavigationMenu from './Navigation_menu'
import NavigationTagList from './Navigation_tag_list'
import NavigationSelect from './Navigation_select'
export default {
  name: 'Navigation',
  data () {
    return {
      imgSrc: '/static/img/Layout/Navigation/User head.JPG',
      name: 'panyu',
      model: 'menu'
    }
  },
  components: {
    NavigationSelect,
    NavigationMenu,
    NavigationTagList
  },
  methods: {
    test () {
      console.log('test')
    },
    test2 () {
      console.log('test2')
    }
  }
}
</script>
