import request from '@/server/utils/request'
/**
 * 获取验证码
 */
export default () => {
  return request({
    url: '/:captcha',
    method: 'get'
  })
}
