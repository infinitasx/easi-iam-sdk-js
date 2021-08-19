/**
 * UI
 */
// 对话框
let _Modal: any = null;
// 提示框
let _message: any = null;
// 中转页面
let _page: any = null;
// 日志查询
let _log: any = null;

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
