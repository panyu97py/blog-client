import request from '@/server/utils/request'
/**
 * 登陆 获取token
 * @param userName 用户名
 * @param userPassword 用户密码
 */
export default (userName, userPassword) => {
  return request({
    url: '/:user/token',
    method: 'post',
    data: { user_name: userName, user_password: userPassword }
  })
}
