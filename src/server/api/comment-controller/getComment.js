import request from '@/server/utils/request'
/**
 * 获取评论
 * @param commentId 评论id
 * @param userId 用户id
 * @param articleId 博文id
 */
export default (commentId, userId, articleId) => {
  return request({
    url: '/:comment/edit',
    method: 'get',
    params: {
      user_id: userId,
      comment_id: commentId,
      article_id: articleId
    }
  })
}
