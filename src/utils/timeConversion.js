export default (date) => {
  date = new Date(date)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  month = (month < 10 ? '0' + month : month)
  let day = date.getDate()
  let hour = date.getHours()
  hour = hour < 10 ? '0' + hour : hour
  let minutes = date.getMinutes()
  minutes = minutes < 10 ? '0' + minutes : minutes
  return {year, month, day, hour, minutes}
}
