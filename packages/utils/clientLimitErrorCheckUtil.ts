import { getHintModal } from '../setter-getter/ui';

/**
 * 客户端约束错误检测工具(检测唯一设备被挤下去，检测被强制下线等)
 * @param error ajax的返回的错误
 * @param langText 国际化语言包-设备被挤下线的
 * @param langText2 国际化语言包-令牌失效的
 * @param callback 回调
 * @return false 没有匹配上
 * @return true 有匹配上
 */
let number = 0;
export default function (error: any, langText: any, langText2: any, callback: any) {
  const details = error?.error?.details || [];
  // 设备被挤下线了
  const b = details.some((item: any) => item.reason === 'NOT_MATCHED_ACTIVE_DEVICE');
  // 设备唯一，被挤下线
  if (b) {
    if (number === 0) {
      getHintModal()(langText, callback);
    }
    number++;
    return true;
  }
  // 令牌失效
  const c = details.some((item: any) => item.reason === 'ACCESS_TOKEN_NOT_ACTIVE');
  if (c) {
    if (number === 0) {
      getHintModal()(langText2, callback);
    }
    number++;
    return true;
  }

  return false;
}
