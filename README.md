# easi-iam-sdk-js
> 对接iam的前端sdk代码库

## 目录说明
- dist 最终打包后的供第三方使用的包； 使用index.js
- packages 具体的sdk代码
    - 入口 index.ts

## 依赖
- vite
- vue@3
- ant-design-vue@2
- axios
- oidc-client

## 打包
```
yarn run build
```

## 使用说明
### 安装依赖
```text
yarn add https://github.com/infinitasx/easi-iam-sdk-js.git#master
```
### 引入
```ts
// iamSdkUtils.ts
import { IamClient, CallbackPage } from 'easi-iam-sdk-js';

// code 换 token的相对地址
const redirect_uri = '/iam/callback';
// index 页面地址
const post_logout_redirect_uri = '/iam';

export const iam = IamClient({
  client_id: {
    production: '*****',
    testing: '******',
    development: '*******',
  },
  applicationId: 'iam',
  lang: 'zh', // 'zh' | 'en' | 'ja'
  homePageUrl: window.location.origin + post_logout_redirect_uri, // 登录成功后跳转的主页
  callbackUrl: window.location.origin + redirect_uri, // code换token页面
  needIntercept: true, // 可不传， development 环境下，false，不跳转登录界面
  env: 'testing', // env: 'production' | 'testing' | 'development'，项目对应的运行环境
});

export const CallBack = CallbackPage;


// code 换 token的页面，直接配置到路由里面即可
// import { CallBack } from 'iamSdkUtils.ts'
//{
//  path: '/callback',
//  name: 'Callback',
// props: {
//   homePageUrl: '/iam',
// },
// component: CallBack,
// meta: { title: '正在登录', icon: '' },
//}
```

### vue-router 路由守卫页面
```ts
// 在vue-router的路由守卫beforeEach函数中添加如下:
// 判断是否已经存在认证信息
// ...
let canGo = false;
try {
  // 此方法会判断是否存在认证信息，如果没有会自动跳转到登录页面的  
  canGo = await iam.routerGuard();
} catch (e) {
  canGo = false;
}
if (!canGo) {
  store.commit('SET_LOADING', true);
  return;
}
// ...
```

### 配置cdn
> !!! 本工具强依赖于vue@3、axios、ant-design-vue@2
> 所以在使用时，这四个工具必须引入
```js
// vue.config.js

const externals = {
  vue: 'Vue',
  axios: 'axios',
  'ant-design-vue': 'antd',
  'ant-design-vue/dist/antd.css': 'antd',
  // ... 
  'easi-iam-sdk-js': 'easiIamSdkJs',// 《=========
};

const scriptCdn = [
    // ...
];
scriptCdn.push(`https://static.easiglobal.com/easi-iam-sdk-js/0.0.8/index.js`);
```

### 使用api说明
- iam.getOidcClientInstance()
    - 获取oidc-client-js 原本的实例对象（https://github.com/IdentityModel/oidc-client-js/wiki）
- iam.clearLocalStorageDataExcludeOidc(excludeKey?: string[])
    - 清除除了oidc认证的key之外的东西
- iam.clearOidcLocalStorageData()
    - 清除oidc认证的key的东西
- iam.getAuthInfoSync()
    - 获取用户认证信息
- iam.getAuthInfo()
    - 获取用户认证信息，返回Promise对象
- iam.getUserInfo()
    - 获取用户信息，返回Promise对象
- iam.getPermissionsData({scopeId?: string | number | null })
    - scopeId 城市/范围id
    - 获取用户权限点信息，返回Promise对象
- iam.setLange(lang: 'zh'|'en'|'ja')  
    - 设置当前国际化语言
- iam.signIn()
    - 登录
- iam.signOut()
    - 登出
- iam.getAuthorization()
    - 获取token值
- iam.getIamHomeUrl()
    - 获取iam的主页地址
- iam.openExpiredModal()
    - 开启过期对话框
- iam.closeExpiredModal()
    - 关闭过期对话框
