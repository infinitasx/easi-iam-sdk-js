/**
 * 设备id
 */
import { IAMDeviceIDKey } from '../constant';
let deviceId: string;

const d = window.localStorage.getItem(IAMDeviceIDKey);
deviceId = d ? d : '';

export function getDeviceId(): string {
  return deviceId;
}

export function setDeviceId(_deviceId: string) {
  window.localStorage.setItem(IAMDeviceIDKey, _deviceId);
  deviceId = _deviceId;
}
