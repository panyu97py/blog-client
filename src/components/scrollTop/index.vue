<script>
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
  props: {
    el: String
  },
  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop ||
                        window.pageYOffset ||
                        document.body.scrollTop ||
                        document.querySelector(this.el).scrollTop

      // 控制滚动按钮的隐藏或显示
      if (this.scrollTop > 150) {
        this.isScrollTop = true
      } else {
        this.isScrollTop = false
      }
    }, true)
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
            // 步进速度
            $this.scrollTop = $this.scrollTop - 30

            // 返回顶部
            if (document.documentElement.scrollTop > 0) {
              document.documentElement.scrollTop = $this.scrollTop - 30
            } else if (window.pageYOffset > 0) {
              window.pageYOffset = $this.scrollTop - 30
            } else if (document.body.scrollTop > 0) {
              document.body.scrollTop = $this.scrollTop - 30
            } else if (document.querySelector($this.el).scrollTop) {
              document.querySelector($this.el).scrollTop = $this.scrollTop - 30
            }

            animation()
          }, 1)
        }
      }, 1)
    }
  }
}

</script>
