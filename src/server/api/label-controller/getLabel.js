import request from '@/server/utils/request'
/**
 * 编辑标签
 * @param labelId 标签id
 */
export default (labelId) => {
  return request({
    url: '/:label/get',
    method: 'get',
    params: {
      label_id: labelId
    }
  })
}
