const url = '/api'
const ana = '/ana'
const card = '/card'
const account = '/account'

// const card = 'http://192.168.1.167:8005'

// 服务器链接配置
export default {
  // wcc水控平台接口
  wcc: `${url}/wcc/v1`,
  // analysis-controller 模块
  ana: `${ana}/wcc/v1/analysis`,
  // project-controller 模块
  pro: `${url}/wcc/v1/project`,

  card: `${card}/wcc/v1/wechat/waterCard/`,

  sub: `${url}/wcc/v1/subsidy`,

  account: `${account}/wcc/v1`

}
