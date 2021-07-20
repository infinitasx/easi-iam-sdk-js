export interface Params{
  client_id: {
    production: string;
    testing: string;
    development: string;
  },
  homePageUrl: string;// 登录成功后跳转的主页
  callbackUrl: string;// code换token页面
  env: 'production' | 'testing' | 'development';
}
