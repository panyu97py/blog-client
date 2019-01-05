import request from '@/server/utils/request'
/**
 * 校验用户名是否已经存在（无需携带token）
 * @param userName 用户名
 */
export default (userName) => {
  return request({
    url: '/:user/check_username',
    method: 'get',
    data: { user_name: userName }
  })
}
