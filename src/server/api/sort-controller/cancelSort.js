import request from '@/server/utils/request'
/**
 * 删除分类
 * @param articleId 文章id
 * @param sortId 分类id
 */
export default (articleId, sortId) => {
  return request({
    url: '/:sort/cancel',
    method: 'delete',
    params: {
      article_id: articleId,
      sort_id: sortId
    }
  })
}
