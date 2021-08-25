import { Modal, message } from 'ant-design-vue';
// code => token 页面
import CallbackPage from './views/Callback.js';
// 操作日志查询组件
import dataActionLogComp from './components/DataActionLogsModal.js';
// 提示框组件
import hintModalComp from './components/HintModal';

export default {
  showErrorMsg: msg => message.error(msg),
  showTokenExpiredModal: ({ title, content, okText }, callback) => {
    Modal.error({
      title,
      content,
      okText,
      onOk() {
        callback();
      },
    });
  },
  codeExchangeTokenPage: CallbackPage,
  dataActionLogComp,
  hintModalComp,
};
