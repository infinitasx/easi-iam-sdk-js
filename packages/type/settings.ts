import {UserManager, User} from 'oidc-client'

export type ILang = 'zh' | 'en' | 'ja'; // 语言标识

export type env = 'production' | 'testing' | 'development';

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
    lang: ILang
}

export interface ResultType {
    getOidcClientInstance: () => UserManager;
    setLang: (lang: ILang) => void;
    routerGuard: () => Promise<boolean>;
    clearLocalStorageDataExcludeOidc: (excludeKey?: string[]) => void;
    clearOidcLocalStorageData: () => void;
    getAuthInfoSync: () => User;
    getAuthInfo: () => Promise<any>;
    getUserInfo: () => Promise<any>;
    getPermissionsData: (arg0: {
      scopeId?: string | number | null;
    }) => Promise<any>;
    getSignedIn: () => Promise<any>;
    signIn: () => void;
    signOut: () => void;
    getIdToken: () => Promise<any>;
    getAuthorization: () => string;
    getIamHomeUrl:()=>string;
    openExpiredModal: () => void;
    closeExpiredModal: () => void;
}
