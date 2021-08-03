/**
 * UI
 */
// 默认UI
let _defaultUI:boolean = true;
// 对话框
let _Modal:any = null;
// 提示框
let _message:any = null;

export function getIsDefaultUI(){
  return _defaultUI;
}

export function setIsDefaultUI(b: boolean){
  _defaultUI = b;
}

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
