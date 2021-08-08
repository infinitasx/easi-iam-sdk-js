/**
 * UI
 */
// 对话框
let _Modal:any = null;
// 提示框
let _message:any = null;

export function getModal(){
  return _Modal;
}

export function setModal(Modal: any){
  _Modal = Modal;
}

export function getMessage(){
  return _message;
}

export function setMessage(message: any){
  _message = message;
}
