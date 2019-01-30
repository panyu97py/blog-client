<template>
  <div v-if="!item.hidden&&item.children">
    <template v-if="item.name===rootModule||item.rootModule===rootModule">
      <template v-for="manageModule in item.children">
        <el-submenu
          v-if="manageModule.children"
          :index="manageModule.path"
          :key="manageModule.name"
        >
          <template slot="title" v-if="item.meta">
            <svg-icon :icon-class="manageModule.meta.icon" v-if="manageModule.meta.icon" class="sidebar_icon"/>
            <span slot="title">{{manageModule.meta.title}}</span>
          </template>
          <SlidebarItem :item="manageModule" :key="manageModule.name"/>
        </el-submenu>
        <el-menu-item
          v-else-if="item.meta"
          :index="manageModule.path"
          :key="manageModule.name"
          :route="{name:manageModule.name}"
        >
          <svg-icon :icon-class="manageModule.meta.icon" v-if="manageModule.meta.icon" class="sidebar_icon"/>
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
  props: {
    // route object
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
