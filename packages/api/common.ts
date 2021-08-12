import request from '../utils/request'
import {getAuthority} from '../utils/env'
import {GET_USERINFO_URL,GET_PERMISSION_URL,UPDATE_INIT_PWD_URL} from '../constant'

// 获取用户信息
export const getUserInfo = (config: {
  token: string; // 认证信息
}) => {
  return request({
    url: getAuthority() + GET_USERINFO_URL,
    headers: {
      Authorization: config.token
    }
  }).then((res:any)=>{
    // 判断用户是否初次登录
    if(res?.user?.set_password && !window.location.href.includes(UPDATE_INIT_PWD_URL)){
      window.location.replace(getAuthority() + UPDATE_INIT_PWD_URL)
    }
    return res;
  })
}

// 获取权限信息
export const getPermissions = (config: {
  token: string;
  application_id: string;
  scope_id: string | number;
}) => {
  return request({
    url: getAuthority() + (config.scope_id
      ? `${GET_PERMISSION_URL}?application_id=${config.application_id}&scope_id=${config.scope_id}`
      : `${GET_PERMISSION_URL}?application_id=${config.application_id}`),
    headers: {
      Authorization: config.token
    }
  })
}
