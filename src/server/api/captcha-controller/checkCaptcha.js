import request from '@/server/utils/request'
/**
 * 校验验证码
 * @param captchaId 验证码Id
 * @param captchaText 用户输入的验证码
 */
export default (captchaId, captchaText) => {
  return request({
    url: '/:captcha',
    method: 'post',
    params: {
      captcha_id: captchaId,
      captcha_text: captchaText
    }
  })
}
