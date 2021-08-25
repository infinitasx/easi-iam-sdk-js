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
  MessageBox.alert(langTexts.content, langTexts.title, {
    centered: true,
    showClose: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    confirmButtonText: langTexts.okText, // '确认',
    callback: () => {
      callback();
    },
  });
};
