import request from '@/server/utils/request'
/**
 * 取消博文标签
 * @param articleId 博文id
 * @param labelId 标签id
 */
export default (articleId, labelId) => {
  return request({
    url: '/:label/cancel',
    method: 'delete',
    param: {
      article_id: articleId,
      label_id: labelId
    }
  })
}
