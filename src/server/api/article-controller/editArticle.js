import request from '@/server/utils/request'
/**
 * 编辑博文
 * @param articleId 博文id
 * @param articleTitle 文章标题
 * @param articleContent 文章内容
 */
export default (articleId, articleTitle, articleContent) => {
  return request({
    url: '/:article/edit',
    method: 'post',
    data: {
      article_id: articleId,
      article_title: articleTitle,
      article_content: articleContent
    }
  })
}
