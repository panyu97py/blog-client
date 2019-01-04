import request from '@/server/utils/request'
/**
 * 获取用户信息
 */
export default () => {
  return request({
    url: '/:user/userInfo',
    method: 'get'
  })
}
