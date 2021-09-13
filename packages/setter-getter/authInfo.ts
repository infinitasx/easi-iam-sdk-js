// 权限信息存储的key
let _localKey: string | null = null;

export function setLocalKey(key: string) {
  _localKey = key;
}

export function getLocalKey() {
  return _localKey;
}

// 权限信息
export function getAuthInfo() {
  if (!getLocalKey()) {
    return null;
  }
  const data = window.localStorage.getItem(getLocalKey() as string);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}
