import request from '@/server/utils/request'
/**
 * 注册
 * @param userName 用户名
 * @param userPassword 用户密码
 * @param userNickname 昵称
 */
export default (userName, userPassword, userNickname) => {
  return request({
    url: '/:user/register',
    method: 'post',
    data: {
      user_name: userName,
      user_password: userPassword,
      user_nickname: userNickname
    }
  })
}
