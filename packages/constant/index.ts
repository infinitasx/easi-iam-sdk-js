// 地址
// 开发环境
export const DEVELOPMENT_URL = 'https://iam.melbdelivery.com';
// 测试环境
export const TESTING_URL = 'https://iam.melbdelivery.com';
// 生产环境
export const PRODUCTION_URL = 'https://iam.easi.com.au';

// api接口地址
// 主页路径地址
export const HOMEPAGE_PATH = '/dashboard';
// 修改初始密码
export const UPDATE_INIT_PWD_URL = '/dashboard/modify/init';
// 获取用户信息
export const GET_USERINFO_URL = '/v1/admin/userinfo';
// 获取权限信息
export const GET_PERMISSION_URL = '/v1/admin/users/menus';

// 上一次登录额key
export const IAMLastLoginKey = 'IAM:last-login';

// IAM 设备ID key
export const IAMDeviceIDKey = 'IAM:deviceId';

// 清空localStorage 时排除的key
export const ExcludeKeys = ['oidc.user:', 'IAM:', 'EASI:', 'SELF:'];
