import { IamClient, version } from '../../packages/index';
import { UserManager } from 'oidc-client';

describe('测试sdk-js的基本东西', () => {
  const env = 'production';
  const lang = 'zh';
  const iamClient = IamClient({
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

  test('version', () => {
    expect(version).toBe('');
  });

  test('oidc实例', () => {
    const instance = iamClient.getOidcClientInstance();
    expect(instance).toBeInstanceOf(UserManager);
  });

  test('国际化设置', () => {
    iamClient.setLang('en');
    expect(iamClient.getLang()).toBe('en');
  });
});
