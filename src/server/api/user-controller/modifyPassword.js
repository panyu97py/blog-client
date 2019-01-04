
import request from '@/server/utils/request'
/**
 * 修改用户密码 (需要携带token)
 * @param userName 用户名
 * @param originalUserPassword 原密码
 * @param newUserPassword 新密码
 */
export default (userName, originalUserPassword, newUserPassword) => {
  return request({
    url: '/:user/modify_password',
    method: 'post',
    data: {
      user_name: userName,
      original_user_password: originalUserPassword,
      new_user_password: newUserPassword
    }
  })
}
