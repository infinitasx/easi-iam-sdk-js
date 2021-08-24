# easi-iam-sdk-js
> 对接IAM的前端sdk代码库

## 目录说明
- dist 由packages打出来的的内容，最终供第三方使用的包； 使用index.js
- packages 具体的sdk代码
    - 入口 index.ts
- UI  原来的packages中拆分出来的UI，不同技术栈有不同的UI使用
  - vue2-element 依赖vue2 和 element-ui技术的IAM-SDK的ui （使用说明见下文）
  - vue3-antd 依赖vue3 和 antdv技术的IAM-SDK的ui （使用说明见下文）

## 依赖
- vite
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
import { IAMClient } from 'easi-iam-sdk-js';
// 文件中提供两种UI模式
// 注意，如果使用ts时，在 easi-iam-sdk-js.d.ts中声明：declare module 'easi-iam-sdk-js/UI/vue3-antd/index.js';
// 1. vue3 antdv 的UI 
// import UI from 'easi-iam-sdk-js/UI/vue3-antd/index.js'

// 2. vue2 element 的UI
import UI from 'easi-iam-sdk-js/UI/vue2-element/index.js'

// code 换 token的相对地址
const redirect_uri = '/iam/callback';
// index 页面地址
const post_logout_redirect_uri = '/iam';

export const IAM = IAMClient({
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
  UI,
});



// code 换 token的页面，直接配置到路由里面即可
// import { IAM } from 'iamSdkUtils.ts'
// {
//  path: '/callback',
//  name: 'Callback',
//  component: IAM.codeExchangeTokenPage('/'),
//  meta: { title: '正在登录', icon: '' },
// }
```

### 操作日志查询 组件
### api
| 参数 | 说明 | 其他 |
| --- | --- | --- |
| data_id | number/string | 必填 |
| left | slot| 不必填 | 
| right | slot | 不必填 | 

### 使用案例
```vue
  <template>
    <!-- 当前数据的id（后端上报给iam的数据id） -->
    <data-log :data_id="123123123123">
      <!-- 可以省略 -->
      <template #left>
        <a-divider type="vertical" />
      </template>
      <EASIButton type="link">操作日志</EASIButton>
      <!-- 可以省略 -->
      <template #left>
        <a-divider type="vertical" />
      </template>
    </data-log>
  </template>
<script>
import { defineComponent } from 'vue';
import { IAMSdkUtils } from '@/utils/iamSdkUtils.ts'
// vue2的用法类似
export default defineComponent({
  components: {
    DataLog: IAMSdkUtils.dataActionLogComp('apps'), // 参数为当前的模块名（对应的业务系统后端上报给iam的模块名）
  },
});
</script>
```

### vue-router 路由守卫页面
```ts
// 在vue-router的路由守卫beforeEach函数中添加如下:
// 放开callback
if (to.name === 'Callback') {
  if (to.query.code) {
    next()
    return
  } else {
    // 不允许直接进入callback页面
    next({
      name: 'Home' // 系统中首页的地址
    })
    return
  }
}

// 判断是否已经存在认证信息
// ...
let canGo = false;
try {
  // 此方法会判断是否存在认证信息，如果没有会自动跳转到登录页面的  
  canGo = await IAM.routerGuard();
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
> !!! 本工具强依赖于axios
> 所以在使用时，axios必须引入
```js
// vue.config.js

const externals = {
  axios: 'axios',
  'easi-iam-sdk-js': 'easiIamSdkJs',// 《=========
};

const scriptCdn = [
    // ...
];
scriptCdn.push(`https://static.easiglobal.com/easi-iam-sdk-js/0.0.19/index.js`);
```

### 使用api说明
- IAM.getOidcClientInstance()
    - 获取oidc-client-js 原本的实例对象（https://github.com/IdentityModel/oidc-client-js/wiki）
- IAM.codeExchangeTokenPage(homePageUrl?: string)
    - 获取callback组件
- IAM.clearLocalStorageDataExcludeOidc(excludeKey?: string[])
    - 清除除了oidc认证的key之外的东西
- IAM.clearOidcLocalStorageData()
    - 清除oidc认证的key的东西
- IAM.getAuthInfoSync()
    - 获取用户认证信息
- IAM.getAuthInfo()
    - 获取用户认证信息，返回Promise对象
- IAM.getUserInfo()
    - 获取用户信息，返回Promise对象
- IAM.getPermissionsData({scopeId?: string | number | null })
    - scopeId 城市/范围id
    - 获取用户权限点信息，返回Promise对象
- IAM.setLange(lang: 'zh'|'en'|'ja')  
    - 设置当前国际化语言
- IAM.getLang()
    - 获取当前的国际化语言标识
- IAM.signIn()
    - 登录
- IAM.signOut()
    - 登出
- IAM.getAuthorization()
    - 获取token值
- IAM.getIAMHomeUrl()
    - 获取iam的主页地址
- IAM.openExpiredModal()
    - 开启过期对话框
- IAM.closeExpiredModal()
    - 关闭过期对话框
