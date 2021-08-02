export declare const getUserInfo: (config: {
    token: string;
    baseUrl: string;
}) => Promise<any>;
export declare const getPermissions: (config: {
    token: string;
    baseUrl: string;
    application_id: string;
    scope_id?: string | number | null;
}) => import("axios").AxiosPromise<any>;
