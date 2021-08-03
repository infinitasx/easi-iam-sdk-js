export declare const getUserInfo: (config: {
    token: string;
}) => Promise<any>;
export declare const getPermissions: (config: {
    token: string;
    application_id: string;
    scope_id: string | number;
}) => import("axios").AxiosPromise<any>;
