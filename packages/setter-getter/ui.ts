/**
 * UI
 */
// 对话框
let _Modal: any = null;
// 消息提示
let _message: any = null;
// 中转页面
let _page: any = null;
// 日志查询
let _log: any = null;
// 有确认按钮的提示框
let _hintModal: any = null;

export function getModal() {
  return _Modal;
}

export function setModal(Modal: any) {
  _Modal = Modal;
}

export function getMessage() {
  return _message;
}

export function setMessage(message: any) {
  _message = message;
}

export function setPage(page: any) {
  _page = page;
}

export function getPage() {
  return _page;
}

export function setLog(log: any) {
  _log = log;
}

export function getLog() {
  return _log;
}

export function setHintModal(hintModal: any) {
  _hintModal = hintModal;
}

export function getHintModal() {
  return _hintModal;
}
