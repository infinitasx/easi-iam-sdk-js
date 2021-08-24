import Oidc from 'oidc-client';
import { getMessage } from '../setter-getter/ui';
import { getLang } from '../setter-getter/i18n';
import langText from '../lang/index';
import { getQueryStringArgs } from './index';
import { setDeviceId } from '../setter-getter/deviceId';

// code => token 方法
export default function (Component: any, homePageUrl: string) {
  return Component(() => {
    const query = getQueryStringArgs();
    if ((query as any).did) {
      const did = (query as any).did;
      window.sessionStorage.setItem('IAM:deviceId', did);
      setDeviceId(did);
    }

    const mgr = new Oidc.UserManager({
      userStore: new (Oidc as any).WebStorageStateStore({ store: window.localStorage }),
      loadUserInfo: true,
      filterProtocolClaims: true,
      response_mode: 'query',
    });

    // code ==》 token
    mgr
      .signinRedirectCallback()
      .then(() => {
        const url = window.sessionStorage.getItem('IAM-start-url');
        window.location.href = url || homePageUrl || '/';
      })
      .catch(err => {
        getMessage()(langText[getLang()]?.getTokenFailed);
        throw err;
      });
  });
}
