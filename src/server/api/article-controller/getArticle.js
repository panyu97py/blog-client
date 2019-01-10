import request from '@/server/utils/request'
/**
 * 获取博文（两个参数只能传入一个）
 * @param articleId 博文id
 * @param labelId 标签id
 */
export default ({articleId, labelId}) => {
  return request({
    url: '/:article/get',
    method: 'get',
    params: {
      article_id: articleId,
      label_id: labelId
    }
  })
}
