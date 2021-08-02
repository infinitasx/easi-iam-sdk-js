/**
 * 当前sdk运行的环境
 */
declare type IEvn = 'development' | 'production' | 'testing';
export declare function getEnv(): IEvn;
export declare function setEnv(env: IEvn): void;
export declare function getAuthority(): "https://accounts-admin.easi.com.au" | "https://accounts-admin.melbdelivery.com";
export {};
