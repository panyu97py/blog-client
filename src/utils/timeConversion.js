const addZero = (data) => {
  data = data < 10 ? '0' + data : data
  return data
}
export default (date) => {
  if (new Date(date)) {
    date = new Date(date)
    let year = date.getFullYear()
    let month = addZero(date.getMonth() + 1)
    let day = addZero(date.getDate())
    let hour = addZero(date.getHours())
    let minutes = addZero(date.getMinutes())
    let second = addZero(date.getSeconds())
    return {year, month, day, hour, minutes, second}
  } else {
    return date
  }
}
