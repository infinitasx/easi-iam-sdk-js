import { IAMClient, version } from '../../packages/index';
import { PRODUCTION_URL, HOMEPAGE_PATH } from '../../packages/constant/index';
import { UserManager } from 'oidc-client';
import { version as v } from '../../package.json';

describe('测试sdk-js的基本东西', () => {
  const env = 'production';
  const lang = 'zh';
  const IAM = IAMClient({
    client_id: {
      production: 'production',
      testing: 'testing',
      development: 'development',
    },
    homePageUrl: 'homePageUrl',
    callbackUrl: 'callbackUrl',
    applicationId: 'applicationId',
    env,
    lang,
    UI: {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      showErrorMsg() {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      showTokenExpiredModal() {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      codeExchangeTokenPage() {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      dataActionLogComp() {},
    },
  });

  test('version号', () => {
    expect(version).toBe(v);
  });

  test('oidc实例', () => {
    const instance = IAM.getOidcClientInstance();
    expect(instance).toBeInstanceOf(UserManager);
  });

  test('国际化设置', () => {
    expect(IAM.getLang()).toBe(lang);
    IAM.setLang('en');
    expect(IAM.getLang()).toBe('en');
  });

  test('主页地址', () => {
    expect(IAM.getIAMHomeUrl()).toBe(PRODUCTION_URL + HOMEPAGE_PATH);
  });
});
