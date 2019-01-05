import request from '@/server/utils/request'
/**
 * 添加博文
 * @param userId 用户id
 * @param articleTitle 文章标题
 * @param articleContent 文章内容
 */
export default (userId, articleTitle, articleContent) => {
  return request({
    url: '/:article/add',
    method: 'post',
    data: {
      user_id: userId,
      article_title: articleTitle,
      article_content: articleContent
    }
  })
}
