import request from '@/server/utils/request'
/**
 * 添加评论
 * @param articleId 博文id
 * @param commitContent 评论内容
 * @param parentCommentId 父评论id
 */
export default (articleId, commitContent, parentCommentId) => {
  return request({
    url: '/:comment/add',
    method: 'post',
    data: {
      article_id: articleId,
      commit_content: commitContent,
      parent_comment_id: parentCommentId
    }
  })
}
