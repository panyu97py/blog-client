
import request from '@/server/utils/request'
/**
 * 修改用户信息（需要携带token）
 * @param userId 用户id
 * @param userNickname 用户昵称
 * @param userEamil 用户邮箱地址
 */
export default (userId, userNickname, userEamil) => {
  return request({
    url: '/:user/modify_userInfo',
    method: 'post',
    data: {
      user_id: userId,
      user_nickname: userNickname,
      user_email: userEamil
    }
  })
}
