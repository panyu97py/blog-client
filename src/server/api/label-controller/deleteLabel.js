import request from '@/server/utils/request'
/**
 * 删除标签
 * @param labelId 标签id
 */
export default (labelId) => {
  return request({
    url: '/:label/delete',
    method: 'delete',
    param: {
      label_id: labelId
    }
  })
}
