import request from '../utils/request'
import {GET_USERINFO_URL,GET_PERMISSION_URL} from '../constant'

// 获取用户信息
export const getUserInfo = (config: {
  token: string; // 认证信息
  baseUrl: string;
}) => {
  return request({
    url: config.baseUrl + GET_USERINFO_URL,
    headers: {
      Authorization: config.token
    }
  })
}

// 获取权限信息
export const getPermissions = (config: {
  token: string;
  baseUrl: string;
  application_id: string;
  scope_id?: string | number | null
}) => {
  return request({
    url: config.baseUrl + (config.scope_id
      ? `${GET_PERMISSION_URL}?application_id=${config.application_id}&scope_id=${config.scope_id}`
      : `${GET_PERMISSION_URL}?application_id=${config.application_id}`),
    headers: {
      Authorization: config.token
    }
  })
}
