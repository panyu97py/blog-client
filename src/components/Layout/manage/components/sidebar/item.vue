<template>
  <div v-if="!item.hidden&&item.children">
    <template v-if="item.name===rootModule||item.rootModule===rootModule">
      <template v-for="manageModule in item.children">
        <el-submenu
          v-if="manageModule.children && !hasOnlyOneShowChild(manageModule)"
          :index="manageModule.path"
          :key="manageModule.name"
        >
          <template slot="title" v-if="manageModule.meta">
            <svg-icon
              :icon-class="manageModule.meta.icon"
              v-if="manageModule.meta.icon"
              class="sidebar_icon"
            />
            <span slot="title">{{manageModule.meta.title}}</span>
          </template>
          <SlidebarItem :item="manageModule" :key="manageModule.name"/>
        </el-submenu>
        <el-menu-item
          v-else-if="manageModule.children && hasOnlyOneShowChild(manageModule)"
          :index="getOnlyOneShowChild(manageModule).path"
          :key="getOnlyOneShowChild(manageModule).name"
          :route="{name:getOnlyOneShowChild(manageModule).name}"
        >
          <svg-icon
            :icon-class="getOnlyOneShowChild(manageModule).meta.icon"
            v-if="getOnlyOneShowChild(manageModule).meta.icon"
            class="sidebar_icon"
          />
          <span slot="title">{{getOnlyOneShowChild(manageModule).meta.title}}</span>
        </el-menu-item>
        <el-menu-item
          v-else-if="manageModule.meta&&!manageModule.hidden"
          :index="manageModule.path"
          :key="manageModule.name"
          :route="{name:manageModule.name}"
        >
          <svg-icon
            :icon-class="manageModule.meta.icon"
            v-if="manageModule.meta.icon"
            class="sidebar_icon"
          />
          <span slot="title">{{manageModule.meta.title}}</span>
        </el-menu-item>
      </template>
    </template>
    <template v-else>
      <el-menu-item :index="item.path" :route="{name:item.name}" v-if="item.meta">
        <svg-icon :icon-class="item.meta.icon" v-if="item.meta.icon" class="sidebar_icon"/>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: 'SlidebarItem',
  data () {
    return {
      rootModule: 'manage'
    }
  },
  methods: {
    hasOnlyOneShowChild (manageModule) {
      let children = manageModule.children.filter(item => {
        return item.hidden === false
      })
      return children.length === 1
    },
    getOnlyOneShowChild (manageModule) {
      let child = manageModule.children.find(item => {
        return item.hidden === false
      })
      return child
    }
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
