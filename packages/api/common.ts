import request from '../utils/request';
import { getAuthority } from '../setter-getter/env';
import { getDeviceId } from '../setter-getter/deviceId';
import { GET_USERINFO_URL, GET_PERMISSION_URL, UPDATE_INIT_PWD_URL } from '../constant';

// 获取用户信息
export const getUserInfo = (config: {
  token: string; // 认证信息
}) => {
  return request({
    url: getAuthority() + GET_USERINFO_URL,
    headers: {
      Authorization: config.token,
      'Easi-Device-Id': getDeviceId(),
    },
  }).then((res: any) => {
    // 判断用户是否初次登录
    if (res?.set_password && !window.location.href.includes(UPDATE_INIT_PWD_URL)) {
      window.location.replace(getAuthority() + UPDATE_INIT_PWD_URL);
    }
    return res;
  });
};

// 获取权限信息
export const getPermissions = (config: {
  token: string;
  application_id: string;
  scope_id: string | number;
}) => {
  return request({
    url:
      getAuthority() +
      (config.scope_id
        ? `${GET_PERMISSION_URL}?application_id=${config.application_id}&scope_id=${config.scope_id}`
        : `${GET_PERMISSION_URL}?application_id=${config.application_id}`),
    headers: {
      'Easi-Device-Id': getDeviceId(),
      Authorization: config.token,
    },
  });
};

// 查询数据的日志信息
export const getDataActionLog = (config: {
  token: string;
  application_id: string;
  function_type: string;
  data_id: string | number;
  log_type: string | number;
  page: number;
  page_size: number;
}) => {
  return request({
    url: getAuthority() + '/v1/admin/logs/timeline',
    headers: {
      'Easi-Device-Id': getDeviceId(),
      Authorization: config.token,
    },
    params: {
      application_id: config.application_id,
      function_type: config.function_type,
      data_id: config.data_id,
      log_type_id: config.log_type,
      page: config.page,
      page_size: config.page_size,
    },
  });
};

// 查询日志查询条件的接口
export const getLogSearchParams = (config: {
  token: string;
  application_id: string;
  function_type: string;
}) => {
  return request({
    url: getAuthority() + `/v1/admin/logs/timeline-types`,
    headers: {
      'Easi-Device-Id': getDeviceId(),
      Authorization: config.token,
    },
    params: {
      application_id: config.application_id,
      function_type: config.function_type,
    },
  });
};
