import request from '@/server/utils/request'
/**
 * 编辑标签
 * @param labelId 标签id
 * @param articleId 博文id
 */
export default (labelId, articleId) => {
  return request({
    url: '/:label/set',
    method: 'get',
    params: {
      label_id: labelId,
      article_id: articleId
    }
  })
}
