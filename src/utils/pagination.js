/**
 * 数组分页方法
 * @param array 原始数组
 * @param currentPage 当前页码
 * @param size 每页的数据量
 */
export default (array, currentPage, size) => {
  let totalPage = Math.ceil(array.length / size)// 向上取整（若有小数则 +1）
  let start = (currentPage - 1) * size
  let end = currentPage * size
  let data = array.slice(start, end) // 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
  return {totalPage, currentPage, data}
}
