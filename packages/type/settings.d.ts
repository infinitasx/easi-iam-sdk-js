import { UserManager, User } from 'oidc-client'

export interface Params {
  client_id: {
    production: string;
    testing: string;
    development: string;
  },
  homePageUrl: string;// 登录成功后跳转的主页
  callbackUrl: string;// code换token页面
  env: 'production' | 'testing' | 'development';
}

export interface ResultType {
  getOidcClientInstance: () => UserManager;
  routerGuard: () => Promise<boolean>;
  clearLocalStorageDataExcludeOidc: () => void;
  clearOidcLocalStorageData: () => void;
  getAuthInfoSync: () => User;
  getAuthInfo: () => Promise;
  getUserInfo: () => Promise;
  getPermissionsData: (any) => Promise;
  getSignedIn: () => Promise;
  signIn: () => void;
  signOut: () => void;
  getIdToken: () => Promise;
  getAuthorization: () => string;
  openExpiredModal: () => void;
  closeExpiredModal: () => void;
}
