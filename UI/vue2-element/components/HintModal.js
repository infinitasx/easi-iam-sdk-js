import { MessageBox } from 'element-ui';
/**
 * 提示框
 * @param langTexts 国际化文字
 * @param langTexts.title 标题
 * @param langTexts.content 文字内容
 * @param langTexts.okText 确认文字
 * @param callback 确定的回调
 */
export default (langTexts, callback) => {
  MessageBox.alert({
    title: langTexts.title, // '登录设备通知',
    centered: true,
    showClose: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    message: langTexts.content, // '您的账号在另一设备上已经登录，由于登录设备限制，当前设备将会强制下线。',
    confirmButtonText: langTexts.okText, // '确认',
    callback: () => {
      callback();
    },
  });
};
