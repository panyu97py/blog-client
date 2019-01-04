import request from '@/server/utils/request'
/**
 * 编辑分类
 * @param sort_id 分类id
 * @param sort_name 分类名
 * @param sort_alias 分类别名
 * @param sort_desc 分类描述
 * @param parent_sort_id 父分类id
 */
export default (sortId, sortName, sortAlias, sortDesc, parentSortId) => {
  return request({
    url: '/:sort/edit',
    method: 'post',
    params: {
      sort_id: sortId,
      sort_name: sortName,
      sort_alias: sortAlias,
      sort_desc: sortDesc,
      parent_sort_id: parentSortId
    }
  })
}
