# easi-iam-sdk-js

> 对接IAM的前端sdk代码库

## 目录说明

- dist 由packages打出来的的内容，最终供第三方使用的包； 使用index.js
- example demo工程目录
    - vue3-antdv (vue3 和 antUI的demo工程)
    - vue2-element (vue2 和 element的demo工程)
    - js-demo （原生js的调用demo）
- packages 具体的sdk代码
    - 入口 index.ts
- UI 原来的packages中拆分出来的UI，不同技术栈有不同的UI使用
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
import {IAMClient} from 'easi-iam-sdk-js';
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
    applicationId: 'iam', // IAM系统给出的id值
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
| data_id | number/string | 不必填 |
| title | string | 不必填（默认：操作日志） | 
| left | slot| 不必填 | 
| right | slot | 不必填 | 

### 使用案例

```vue

<template>
  <!-- 当前数据的id（后端上报给iam的数据id）title默认为操作日志，可不传 -->
  <data-log :data_id="123123123123" title="操作日志">
    <!-- 可以省略 -->
    <template #left>
      <a-divider type="vertical"/>
    </template>
    <EASIButton type="link">操作日志</EASIButton>
    <!-- 可以省略 -->
    <template #left>
      <a-divider type="vertical"/>
    </template>
  </data-log>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IAMSdkUtils} from '@/utils/iamSdkUtils.ts'
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
// 正式环境
scriptCdn.push(`https://static.easiglobal.com/easi-iam-sdk-js/0.0.55/index.js`);
// 测试环境
scriptCdn.push(`https://static.melbdelivery.com/easi-iam-sdk-js/0.0.55/index.js`);
```

### 响应数据拦截
> axios 的响应拦截里
```ts
// ...
// some code。。。。

instance.interceptors.response.use(
    function (response: CustomerAxiosResponse) {
        // 对响应数据做点什么
        const {data} = response;
        return Promise.resolve(data);
    },
    function (error) {
        const hideError = error?.config?.hideError;
        if (error && error.response) {
            const {data, status} = error.response;
            /// ++++++++++++++++++++++++++++++++++++++++++++ 开始 +++++++++++++++++++++ 使用IAM函数
            // 判断错误的信息中是否存在当前账号被踢下去的情况
            const matchError = IAM.ajaxErrorCheck(data,()=>{
                // 用户点击弹出的提示框的确定后的回调函数
                // 可不填 
            });
            // true，有被踢，false，没有被踢
            if (!matchError) {
                if (hideError !== true) message.error(parseErrMsg(data, status));
            } else {
                // ...
                // some code
            }
            /// ++++++++++++++++++++++++++++++++++++++++++++ 结束 +++++++++++++++++++++ 使用IAM函数
            return Promise.reject(data.error ? data.error : data);
        } else {
            if (hideError !== true) message.error(`连接服务器失败`);
            return Promise.reject(error);
        }
    },
);

// ...
// some code。。。。


```

### 使用api说明
- IAM.getOidcClientInstance()
    - 获取oidc-client-js 原本的实例对象（https://github.com/IdentityModel/oidc-client-js/wiki）
- IAM.getCurrentEnv()
    - 获取当前环境参数枚举字符串儿：'production' | 'testing' | 'development'
- IAM.codeExchangeTokenPage(homePageUrl?: string)
    - 获取callback组件
- IAM.dataActionLogComp(moduleName: string,title?: string)
    - 获取操作日志组件（具体用法见上文）
- IAM.ajaxErrorCheck(error: any,okCallback?: () => void): boolean
    - ajax错误响应时的检测，校验错误中是否有符合，被踢的情况，true 为被踢了，false 为没有被踢
- IAM.getDeviceId(): string
    - 获取设备id
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
    - 后端返回的信息中，用户的基本信息、用户的权限信息、用户活跃的设备信息
- IAM.getPermissionsData({scopeId?: string | number | null })
    - scopeId 城市/范围id
    - 获取用户权限点信息，返回Promise对象
- IAM.setLange(lang: 'zh'|'en'|'ja')
    - 设置当前国际化语言
- IAM.getLang()
    - 获取当前的国际化语言标识
- IAM.signIn()
    - 登录
- IAM.signOut(callback?: {logoutBeforeCallback?: () => void;logoutSuccessCallback?: () => void;logoutErrorCallback?: () => void;})
    - 登出 （登录前）
- IAM.getAuthorization()
    - 获取token值
- IAM.getIAMHomeUrl()
    - 获取iam的主页地址
- IAM.addEveryDayLoginListener()
    - 添加每日登录约束校验
- IAM.removeEveryDayLoginListener()
    - 去除每日登录约束校验
