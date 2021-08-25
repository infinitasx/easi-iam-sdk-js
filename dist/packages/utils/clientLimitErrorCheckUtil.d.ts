/**
 * 客户端约束错误检测工具(检测唯一设备被挤下去，检测被强制下线等)
 * @param error ajax的返回的错误
 * @param langText 国际化语言包
 * @param callback 回调
 * @return false 没有匹配上
 * @return true 有匹配上
 */
export default function (error: any, langText: any, callback: any): boolean;
