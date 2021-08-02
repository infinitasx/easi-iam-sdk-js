export declare const getUserInfo: (config: {
    token: string;
    baseUrl: string;
}) => Promise<void>;
export declare const getPermissions: (config: {
    token: string;
    baseUrl: string;
    application_id: string;
    scope_id?: string | number | null;
}) => import("axios").AxiosPromise<any>;
