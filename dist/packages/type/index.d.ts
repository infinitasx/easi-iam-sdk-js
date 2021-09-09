import { UserManager, User } from 'oidc-client';
export declare type ILang = 'zh' | 'en' | 'ja';
export declare type env = 'production' | 'testing' | 'development';
export interface IDataActionLogCompParams {
    function_type: string;
}
interface IUi {
    showErrorMsg: (errorMsg: string) => void;
    showTokenExpiredModal: (text: {
        title: string;
        content: string;
        okText: string;
    }, okCallback: () => void) => void;
    codeExchangeTokenPage: (callback: () => void) => any;
    dataActionLogComp: (params: IDataActionLogCompParams) => any;
    hintModalComp: (langTexts: {
        title: string;
        content: string;
        okText: string;
    }, callback: () => void) => void;
}
export interface Params {
    client_id: {
        production: string;
        testing: string;
        development: string;
    };
    homePageUrl: string;
    callbackUrl: string;
    applicationId: string;
    env: env;
    needIntercept?: boolean;
    lang: ILang;
    UI: IUi;
}
export interface ResultType {
    getOidcClientInstance: () => UserManager;
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
    getPermissionsData: (arg0: {
        scopeId: string | number;
    }) => Promise<any>;
    getSignedIn: () => Promise<any>;
    signIn: () => void;
    signOut: () => void;
    getIdToken: () => Promise<any>;
    getAuthorization: () => string;
    getIAMHomeUrl: () => string;
}
export {};
