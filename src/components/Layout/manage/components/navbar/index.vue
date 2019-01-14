<template>
  <div class="Navigation_navbar">
    <svg-icon
      icon-class="manage_menu"
      :class="isCollapse?'manage_menu':'manage_menu_collapse'"
      @click="isCollapse=!isCollapse"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: false
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
  }
}
</script>
