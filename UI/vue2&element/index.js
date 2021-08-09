import { Message,MessageBox } from 'element-ui';
import CallbackPage from './views/Callback.js'

export default {
  showErrorMsg: (msg) => Message.error({
    message: msg,
  }),
  showTokenExpiredModal: ({title, content, okText}, callback) => {
    MessageBox.alert(content, title, {
      confirmButtonText: okText,
      callback: () => {
        callback();
      }
    });
  },
  codeExchangeTokenPage: CallbackPage,
}
