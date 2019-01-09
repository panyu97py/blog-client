<template>
  <div>
    <ul class="Navigation_menu_list">
      <li class="Navigation_menu_item" v-for="(item,index) in menuList" :key="index">
        <span class="Navigation_menu_item_content" @click="routerTo(item.path)">{{item.label}}</span>
      </li>
    </ul>
    <div class="Navigation_icon_list">
      <a href="https://github.com/panyu97py" class="Navigation_github_icon">
        <svg-icon icon-class="github" class-name/>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation_menu',
  data () {
    return {
      menuList: [
        { label: '主页', path: 'overview' },
        { label: 'test', path: '' },
        { label: 'test', path: '' },
        { label: 'test', path: '' },
        { label: 'test', path: '' }
      ]
    }
  },
  methods: {
    routerTo (name) {
      this.$router.push({name})
    }
  }
}
</script>
