import { IAMClient } from 'easi-iam-sdk-js'
import UI from '../../../../UI/vue2-element/index.js'

const redirectUri = '/iam/callback'
const postLogoutRedirectUri = '/iam'

export const IAM = IAMClient({
  client_id: {
    production: '',
    testing: '',
    development: '8882b276-f557-4276-b36d-d291315b70a8' // iam管理台的client_id
  },
  applicationId: 'iam',
  lang: 'zh',
  homePageUrl: window.location.origin + postLogoutRedirectUri, // 登录成功后跳转的主页
  callbackUrl: window.location.origin + redirectUri, // code换token页面
  env: 'development',
  UI
})
