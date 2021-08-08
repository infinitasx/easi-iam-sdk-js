import {UserManager, User} from 'oidc-client'

export type ILang = 'zh' | 'en' | 'ja'; // 语言标识

export type env = 'production' | 'testing' | 'development';

// 对应的UI
interface IUi {
  showErrorMsg: (errorMsg: string) => void; // 展示错误信息的方法，接受错误信息
  showTokenExpiredModal: (text: { // 展示token到期后的弹出框
    title: string;
    content: string;
    okText: string;
  }, okCallback: () => void) => void;
  codeExchangeTokenPage: (callback: () => void) => any; // code换token的函数
}

export interface Params {
  client_id: {
    production: string;
    testing: string;
    development: string;
  },
  homePageUrl: string;// 登录成功后跳转的主页
  callbackUrl: string;// code换token页面
  applicationId: string;// 应用的id
  env: env;
  needIntercept?: boolean; // 是否需要拦截
  lang: ILang;
  UI: IUi;
}

export interface ResultType {
  getOidcClientInstance: () => UserManager;
  codeExchangeTokenPage: (homePageUrl: string) => any;
  setLang: (lang: ILang) => void;
  routerGuard: () => Promise<boolean>;
  clearLocalStorageDataExcludeOidc: (excludeKey?: string[]) => void;
  clearOidcLocalStorageData: () => void;
  getAuthInfoSync: () => User;
  getAuthInfo: () => Promise<any>;
  getUserInfo: () => Promise<any>;
  getPermissionsData: (arg0: {
    scopeId: string | number;
  }) => Promise<any>;
  getSignedIn: () => Promise<any>;
  signIn: () => void;
  signOut: () => void;
  getIdToken: () => Promise<any>;
  getAuthorization: () => string;
  getIamHomeUrl: () => string;
  openExpiredModal: () => void;
  closeExpiredModal: () => void;
}
