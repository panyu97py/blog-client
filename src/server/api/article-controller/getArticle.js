import request from '@/server/utils/request'
/**
 * 获取博文
 * @param articleId 博文id
 */
export default (articleId) => {
  return request({
    url: '/:article/edit',
    method: 'get',
    params: {
      article_id: articleId
    }
  })
}
