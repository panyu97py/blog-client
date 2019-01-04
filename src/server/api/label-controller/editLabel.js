import request from '@/server/utils/request'
/**
 * 编辑标签
 * @param labelId 标签id
 * @param labelName 标签名
 * @param labelAlias 标签别名
 * @param labelDesc 标签描述
 */
export default (labelId, labelName, labelAlias, labelDesc) => {
  return request({
    url: '/:label/edit',
    method: 'post',
    data: {
      label_name: labelName,
      label_alias: labelAlias,
      label_desc: labelDesc,
      label_id: labelId
    }
  })
}
