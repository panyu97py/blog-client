import articleController from './api/article-controller'
import captchaController from './api/captcha-controller'
import commentController from './api/comment-controller'
import labelController from './api/label-controller'
import sortController from './api/sort-controller'
import userController from './api/user-controller'

export default {
  ...articleController,
  ...captchaController,
  ...commentController,
  ...labelController,
  ...sortController,
  ...userController
}
