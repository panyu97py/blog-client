/**
 * 冒泡排序
 * @param arr 排序数组
 * @param key 根据属性 key 的值排序
 * @param sort 正序（ positive ） / 倒序（ reverse ）
 */
export default (arr, key, sort) => {
  let low = 0
  let high = arr.length - 1 // 设置变量的初始值
  let tmpi, tmpj
  while (low < high) {
    let pos1 = 0
    let pos2 = 0
    for (let i = low; i < high; ++i) {
      // 正向冒泡,找到最大者
      if (key ? arr[i][key] > arr[i + 1][key] : arr[i] > arr[i + 1]) {
        tmpi = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmpi
        pos1 = i
      }
    }
    high = pos1 // 记录上次位置
    for (let j = high; j > low; --j) {
      // 反向冒泡,找到最小者
      if (key ? arr[j][key] < arr[j - 1][key] : arr[j] < arr[j - 1]) {
        tmpj = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmpj
        pos2 = j
      }
    }
    low = pos2 // 修改low值
  }
  arr = sort === 'reverse' ? arr.reverse() : arr // 倒序输出
  return arr
}
