import request from '@/server/utils/request'
/**
 * 删除博文
 * @param articleId 文章id
 */
export default articleId => {
  return request({
    url: '/:article/delete',
    method: 'delete',
    params: { article_id: articleId }
  })
}
