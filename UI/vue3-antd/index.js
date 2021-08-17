import {Modal, message} from "ant-design-vue";
import CallbackPage from './views/Callback.js'
import dataActionLogComp from './components/DataActionLogsModal.js'

export default {
  showErrorMsg: (msg) => message.error(msg),
  showTokenExpiredModal: ({title, content, okText}, callback) => {
    Modal.error({
      title,
      content,
      okText,
      onOk() {
        callback();
      }
    })
  },
  codeExchangeTokenPage: CallbackPage,
  dataActionLogComp,
}
