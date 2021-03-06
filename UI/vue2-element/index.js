import { Message, MessageBox } from 'element-ui';
import CallbackPage from './views/Callback.js';
import dataActionLogComp from './components/DataActionLogsModal.js';
import hintModalComp from './components/HintModal.js';

export default {
  showErrorMsg: msg =>
    Message.error({
      message: msg,
    }),
  showTokenExpiredModal: ({ title, content, okText }, callback) => {
    MessageBox.alert(content, title, {
      type: 'error',
      confirmButtonText: okText,
      callback: () => {
        callback();
      },
    });
  },
  codeExchangeTokenPage: CallbackPage,
  dataActionLogComp,
  hintModalComp,
};
