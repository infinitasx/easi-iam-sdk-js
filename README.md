# easi-iam-sdk-js
> 对接iam的前端sdk代码库

## 目录说明
- lib 最终打包后的供第三方使用的包； 一般使用easi-iam-sdk-js.umd.min.js
- packages 具体的sdk代码
    - 入口 index.ts

## 打包
```
yarn run build
```

## 使用说明
### ts需要声明包
```ts
// easi-iam-sdk.d.ts
declare module 'easi-iam-sdk-js';
```
### 引入
```ts
// iamSdkUtils.ts
import easiIamSdk from 'easi-iam-sdk-js';
const { easiOidcClientUtils, CallbackPage } = easiIamSdk;

// code 换 token的相对地址
const redirect_uri = '/iam/callback';
// index 页面地址
const post_logout_redirect_uri = '/iam';

export const iamSdkUtils = easiOidcClientUtils({
  client_id: {
    production: '*****',
    testing: '******',
    development: '*******',
  },
  homePageUrl: window.location.origin + post_logout_redirect_uri, // 登录成功后跳转的主页
  callbackUrl: window.location.origin + redirect_uri, // code换token页面
  env: '', // env: 'production' | 'testing' | 'development'，项目对应的运行环境
});

// code 换 token的页面，直接配置到路由里面即可
//{
//  path: '/callback',
//  name: 'Callback',
//  component: CallBack,
//  meta: { title: '正在登录', icon: '' },
//},
export const CallBack = CallbackPage;
```

### vue-router 路由守卫页面
```ts
// 在vue-router的路由守卫beforeEach函数中添加如下:
// 判断是否已经存在认证信息
let canGo = false;
try {
  canGo = await iamSdkUtils.routerGuard();
} catch (e) {
  canGo = false;
}
if (!canGo) {
  store.commit('SET_LOADING', true);
  return;
}
```

### 使用api说明
- iamSdkUtils.getOidcClientInstance()
  - 获取oidc-client-js 原本的实例对象（https://github.com/IdentityModel/oidc-client-js/wiki）
- iamSdkUtils.clearLocalStorageDataExcludeOidc() 
  - 清除除了oidc认证的key之外的东西
- iamSdkUtils.clearOidcLocalStorageData()
  - 清除oidc认证的key的东西
- iamSdkUtils.getAuthInfoSync()
  - 获取用户认证信息
- iamSdkUtils.getAuthInfo()
  - 获取用户认证信息，返回Promise对象
- iamSdkUtils.getUserInfo()
  - 获取用户信息，返回Promise对象
- iamSdkUtils.signIn()
  - 登录
- iamSdkUtils.signOut()
  - 登出
- iamSdkUtils.getAuthorization()
  - 获取token值
- iamSdkUtils.openExpiredModal()
  - 开启过期对话框
- iamSdkUtils.closeExpiredModal()
  - 关闭过期对话框
