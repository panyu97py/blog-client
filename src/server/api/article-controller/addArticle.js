import request from '@/server/utils/request'
/**
 * 添加博文
 * @param articleTitle 文章标题
 * @param articleContent 文章内容
 */
export default (articleTitle, articleContent) => {
  return request({
    url: '/:article/add',
    method: 'post',
    data: {
      article_title: articleTitle,
      article_content: articleContent
    }
  })
}
