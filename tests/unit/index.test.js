import { IamClient } from '../../packages/index';
import { UserManager } from 'oidc-client';

test('测试', () => {
  const env = 'production';
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
    lang: 'zh',
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
  const instance = iamClient.getOidcClientInstance();
  expect(instance).toBeInstanceOf(UserManager);
});
