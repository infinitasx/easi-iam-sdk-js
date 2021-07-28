import {UserManager, User} from 'oidc-client'

export interface Params {
    client_id: {
        production: string;
        testing: string;
        development: string;
    },
    homePageUrl: string;// 登录成功后跳转的主页
    callbackUrl: string;// code换token页面
    applicationId: string;// 应用的id
    env: 'production' | 'testing' | 'development';
    needIntercept?: boolean; // 是否需要拦截
    routers?: any[]; // 定义路由数组
}

export interface ResultType {
    getOidcClientInstance: () => UserManager;
    routerGuard: () => Promise<boolean>;
    clearLocalStorageDataExcludeOidc: () => void;
    clearOidcLocalStorageData: () => void;
    getAuthInfoSync: () => User;
    getAuthInfo: () => Promise<any>;
    getUserInfo: () => Promise<any>;
    getPermissionsData: (arg0: any) => Promise<any>;
    getSignedIn: () => Promise<any>;
    signIn: () => void;
    signOut: () => void;
    getIdToken: () => Promise<any>;
    getAuthorization: () => string;
    openExpiredModal: () => void;
    closeExpiredModal: () => void;
}
