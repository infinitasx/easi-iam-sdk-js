/**
 * 权限信息
 */
let auth_info:any = null;

export function getAuthInfo(){
  return auth_info;
}

export function setAuthInfo(authInfo: any){
  auth_info = authInfo;
}
