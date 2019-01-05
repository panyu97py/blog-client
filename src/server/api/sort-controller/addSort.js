import request from '@/server/utils/request'
/**
 * 添加分类
 * @param sortName 标签名
 * @param sortAlias 标签别名
 * @param sortDesc 标签描述
 * @param parentSortId 父分类id
 */
export default (sortName, sortAlias, sortDesc, parentSortId) => {
  return request({
    url: '/:sort/add',
    method: 'post',
    data: {
      sort_name: sortName,
      sort_alias: sortAlias,
      sort_desc: sortDesc,
      parent_sort_id: parentSortId
    }
  })
}
