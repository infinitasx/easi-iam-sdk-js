/**
 * 设备id
 */

let deviceId: string;

const d = window.sessionStorage.getItem('IAM:deviceId');
deviceId = d ? d : '';

export function getDeviceId(): string {
  return deviceId;
}

export function setDeviceId(_deviceId: string) {
  window.sessionStorage.setItem('IAM:deviceId', _deviceId);
  deviceId = _deviceId;
}
