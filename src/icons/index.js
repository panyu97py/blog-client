import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
/* require.context("./test", false, /.test.js$/);
    这行代码就会去 test 文件夹（不包含子目录） 下面的找所有文件名以 .test.js 结尾的文件能被 require 的文件。
    更直白的说就是 我们可以通过正则匹配引入相应的文件模块。
     require.context有三个参数：
     directory：说明需要检索的目录
     useSubdirectories：是否检索子目录
     regExp: 匹配文件的正则表达式 */
// 全局注册
Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
