<template>
  <div>
    <ul class="Navigation_menu_list">
      <li class="Navigation_menu_item" v-for="(item,index) in menuList" :key="index">
        <span class="Navigation_menu_item_content" @click="routerTo(item.name)">{{item.label}}</span>
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
      list: []
    }
  },
  computed: {
    routerMap () {
      return this.$router.options.routes
    },
    menuList () {
      return this.getMenuList()
    }
  },
  methods: {
    /**
     * 路由跳转
     */
    routerTo (name) {
      this.$router.push({ name })
    },
    /**
     * 筛选路由表
     * 返回其他模块的根路由
     * 及app模块中所有不隐藏的路由
     */
    getMenuList () {
      let menuList = []
      const getAllRouter = routerMap => {
        routerMap.map(item => {
          if (item.children) {
            getAllRouter(item.children)
          }
          if (
            !item.hidden &&
            (item.rootModule === 'app' ||
              (!item.rootModule && item.name !== 'app'))
          ) {
            let name = item.name
            let label = item.meta.title
            menuList.push({ name, label })
          }
        })
      }
      getAllRouter(this.routerMap)
      return menuList
    }
  }
}
</script>
