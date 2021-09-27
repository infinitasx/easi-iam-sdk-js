import { IAMClient } from 'easi-iam-sdk-js'
import UI from '../../../../UI/vue3-antd/index.js'

const redirectUri = '/callback'
const postLogoutRedirectUri = '/'

export const IAM = IAMClient({
  client_id: {
    production: '',
    testing: '',
    development: '74a38582-04cb-4dad-a88b-68a6c96ecf9b'
  },
  applicationId: 'activity',
  lang: 'zh',
  homePageUrl: window.location.origin + postLogoutRedirectUri, // 登录成功后跳转的主页
  callbackUrl: window.location.origin + redirectUri, // code换token页面
  env: 'development',
  UI
})
