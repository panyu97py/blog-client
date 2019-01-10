var api = {}
if (process.env.ENV === 'prod') {
  api = require('../config/api.prod').default
} else {
  api = require('../config/api.dev').default
}
/**
 * uri转url
 */
export default (url) => {
  for (const key in api) {
    const reg = new RegExp(`^/?:${key}`)
    if (reg.test(url)) {
      return url.replace(reg, api[key])
    }
  }
  return url
}
