import Oidc from "oidc-client";
import {getMessage} from './UI'
import {getLang} from "./i18n";
import langText from '../lang/index'

// code => token 方法
export default function (Component: any, homePageUrl: string) {
  return Component(() => {
    const mgr = new Oidc.UserManager({
      userStore: new (Oidc as any).WebStorageStateStore({store: window.localStorage}),
      loadUserInfo: true,
      filterProtocolClaims: true,
      response_mode: 'query'
    })

    // code ==》 token
    mgr
      .signinRedirectCallback()
      .then(() => {
        // 最初进入的地址
        let url = window.localStorage.getItem('iam-url');
        if (url) {
          if (url.indexOf('login') > -1) {
            window.location.href = homePageUrl || '/';
          } else {
            window.location.href = url;
          }
        } else {
          window.location.href = homePageUrl || '/';
        }
      })
      .catch((err) => {
        getMessage()(langText[getLang()]?.getTokenFailed)
        throw err;
      })
  });
}
