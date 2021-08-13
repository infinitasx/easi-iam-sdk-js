export declare const getUserInfo: (config: {
    token: string;
}) => Promise<any>;
export declare const getPermissions: (config: {
    token: string;
    application_id: string;
    scope_id: string | number;
}) => import("axios").AxiosPromise<any>;
export declare const getDataActionLog: (config: {
    token: string;
    application_id: string;
    function_type: string;
    data_id: string | number;
    log_type: string | number;
    page: number;
    page_size: number;
}) => import("axios").AxiosPromise<any>;
export declare const getLogSearchParams: (config: {
    token: string;
    application_id: string;
    type_id: string;
}) => import("axios").AxiosPromise<any>;
