import request from '@/server/utils/request'
/**
 * 编辑评论
 * @param commentId 评论id
 * @param commitContent 评论内容
 */
export default (commentId, commitContent) => {
  return request({
    url: '/:comment/edit',
    method: 'post',
    data: {
      comment_id: commentId,
      commit_content: commitContent
    }
  })
}
