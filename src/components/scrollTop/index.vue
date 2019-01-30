<template>
  <item v-if="isScrollTop" @click="scrollToTop"/>
</template>

<script>
import item from './item'
export default {
  name: 'ScrollTop',
  data () {
    return {
      // 定义滚动条默认位置
      scrollTop: null,

      // 定义按钮默认状态
      isScrollTop: false
    }
  },
  components: {
    item
  },
  props: {
    // 需要监听位置的 dom 元素
    el: String
  },
  mounted () {
    this.listenScroll(100)
  },
  methods: {
    /**
     * 滚动到顶部
     */
    scrollToTop () {
      let $this = this

      // 返回顶部动画特效
      setTimeout(function animation () {
        if ($this.scrollTop > 0) {
          setTimeout(() => {
            let size = 10
            // 步进速度
            $this.scrollTop = $this.scrollTop - size

            // 返回顶部
            if (document.documentElement.scrollTop > 0) {
              document.documentElement.scrollTop = $this.scrollTop - size
            } else if (window.pageYOffset > 0) {
              window.pageYOffset = $this.scrollTop - size
            } else if (document.body.scrollTop > 0) {
              document.body.scrollTop = $this.scrollTop - size
            } else if (document.querySelector($this.el).scrollTop) {
              document.querySelector($this.el).scrollTop =
                $this.scrollTop - size
            }

            animation()
          }, 1)
        }
      }, 1)
    },
    /**
     * 监听滚动事件
     * @param position 返回顶部按钮出现的位置
     */
    listenScroll (position) {
      window.addEventListener(
        'scroll',
        () => {
          this.scrollTop =
            document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop ||
            document.querySelector(this.el).scrollTop

          // 控制滚动按钮的隐藏或显示
          if (this.scrollTop > position) {
            this.isScrollTop = true
          } else {
            this.isScrollTop = false
          }
        },
        true
      )
    }
  }
}
</script>
