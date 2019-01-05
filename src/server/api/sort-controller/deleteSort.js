import request from '@/server/utils/request'
/**
 * 取消分类
 * @param sortId 分类id
 */
export default (sortId) => {
  return request({
    url: '/:sort/delete',
    method: 'delete',
    params: {
      sort_id: sortId
    }
  })
}
