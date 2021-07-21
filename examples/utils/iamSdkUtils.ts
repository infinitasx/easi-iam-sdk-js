import easiOidcClientUtils from '../../packages/utils/easiOidcClient'

export const iamSdkUtils = easiOidcClientUtils({
  client_id: {
    production: '',
    testing: '',
    development: ''
  },
  homePageUrl: window.location.origin + '/', // 登录成功后跳转的主页
  callbackUrl: window.location.origin + '/', // code换token页面
  env: 'testing'
})
