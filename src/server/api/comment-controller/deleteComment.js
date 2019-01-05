import request from '@/server/utils/request'
/**
 * 删除评论
 * @param commentId 评论id
 */
export default (commentId) => {
  return request({
    url: '/:comment/delete',
    method: 'delete',
    params: {
      comment_id: commentId
    }
  })
}
