/** 不需要 Authorization 的接口列表 */
const apiList = [
  /user\/token/,
  /user\/register/,
  /user\/check_username/,
  /captcha/,
  /article\/get/,
  /sort\/get/,
  /label\/get/
]
/** 判断是否需要携带 token */
export default url => {
  return apiList.every(item => {
    return !item.test(url)
  })
}
