import request from '@/server/utils/request'
/**
 * 添加标签
 * @param label_name 标签名
 * @param label_alias 标签别名
 * @param label_desc 标签描述
 */
export default (labelName, labelAlias, labelDesc) => {
  return request({
    url: '/:label/add',
    method: 'post',
    data: {
      label_name: labelName,
      label_alias: labelAlias,
      label_desc: labelDesc
    }
  })
}
