import { UserManager, User } from 'oidc-client';
export declare type ILang = 'zh' | 'en' | 'ja';
export declare type env = 'production' | 'testing' | 'development';
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
    useDefaultUI?: boolean;
    showErrorMsg?: (errorMsg: string) => void;
    showTokenExpiredModal?: (text: {
        title: string;
        content: string;
        okText: string;
    }, okCallback: () => void) => void;
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
