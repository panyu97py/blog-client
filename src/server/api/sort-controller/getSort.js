import request from '@/server/utils/request'
/**
 * 获取分类
 * @param sortId 分类id
 */
export default (sortId) => {
  return request({
    url: '/:sort/get',
    method: 'delete',
    params: {
      sort_id: sortId
    }
  })
}
