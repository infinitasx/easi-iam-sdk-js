/**
 * iam 和 相同浏览器的各个子系统页面的消息传递
 */
export declare function _createFrame(url: string, applicationId: string): void;
export declare function sendMessageToIAM(type: string, message: any): void;
declare const utils: {
    _createFrame: (url: string, applicationId: string) => void;
    sendMessageToIAM: (type: string, message: any) => void;
};
export default utils;
