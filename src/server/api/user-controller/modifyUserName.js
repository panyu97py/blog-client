import request from '@/server/utils/request'
/**
 * 修改用户名（需要携带token）
 * @param userId 用户id
 * @param newUserName 新用户名
 * @param userPassword 密码
 */
export default (userId, newUserName, userPassword) => {
  return request({
    url: '/:user/modify_username',
    method: 'post',
    data: {
      user_id: userId,
      new_user_name: newUserName,
      user_password: userPassword
    }
  })
}
