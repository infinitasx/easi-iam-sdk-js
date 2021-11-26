import { UserManager, User } from 'oidc-client';

export type ILang = 'zh' | 'en' | 'ja'; // 语言标识

export type env = 'production' | 'testing' | 'development';

export interface IDataActionLogCompParams {
  function_type: string;
}

// 对应的UI
interface IUi {
  // 展示错误信息的方法，接受错误信息
  showErrorMsg: (errorMsg: string) => void;
  // 展示token过期提示框
  showTokenExpiredModal: (
    text: {
      // 展示token到期后的弹出框
      title: string;
      content: string;
      okText: string;
    },
    okCallback: () => void,
  ) => void;
  // code换token的函数
  codeExchangeTokenPage: (callback: () => void) => any;
  // 数据操作日志组件
  dataActionLogComp: (params: IDataActionLogCompParams) => any;
  // 提示框
  hintModalComp: (
    langTexts: {
      title: string;
      content: string;
      okText: string;
    },
    callback: () => void,
  ) => void;
}

export interface Params {
  client_id: {
    production: string;
    testing: string;
    development: string;
  };
  homePageUrl: string; // 登录成功后跳转的主页
  callbackUrl: string; // code换token页面
  applicationId: string; // 应用的id
  env: env;
  needIntercept?: boolean; // 是否需要拦截
  lang: ILang;
  UI: IUi;
}

export interface ResultType {
  getOidcClientInstance: () => UserManager;
  getCurrentEnv: () => env;
  codeExchangeTokenPage: (homePageUrl: string) => any;
  ajaxErrorCheck: (error: any, okCallback?: () => void) => boolean;
  getDeviceId: () => string;
  dataActionLogComp: (function_type: string, title?: string) => any;
  setLang: (lang: ILang) => void;
  getLang: () => ILang;
  checkTodayLogged: () => boolean;
  routerGuard: () => Promise<boolean>;
  clearLocalStorageDataExcludeOidc: (excludeKey?: string[]) => void;
  clearOidcLocalStorageData: () => void;
  getAuthInfoSync: () => User;
  getAuthInfo: () => Promise<any>;
  getUserInfo: () => Promise<any>;
  getPermissionsData: (arg0: { scopeId: string | number }) => Promise<any>;
  getSignedIn: () => Promise<any>;
  signIn: () => void;
  signOut: (callback?: {
    logoutBeforeCallback?: () => void;
    logoutSuccessCallback?: () => void;
    logoutErrorCallback?: () => void;
  }) => void;
  getAuthorization: () => string;
  getIAMHomeUrl: () => string;
  addEveryDayLoginListener: () => void;
  removeEveryDayLoginListener: () => void;
}
