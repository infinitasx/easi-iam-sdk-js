import Oidc, { User } from 'oidc-client';
import { getHintModal } from '../setter-getter/ui';
import { getLang } from '../setter-getter/i18n';
import langText from '../lang/index';
import { setDeviceId } from '../setter-getter/deviceId';
import { getYearMonthDateTimeNumber } from './index';
import { IAMLastLoginKey, MessageConstant } from '../constant';
import { sendMessageToIAM } from './message';

// code => token 方法
export default function (Component: any, homePageUrl: string) {
  return Component(() => {
    const mgr = new Oidc.UserManager({
      userStore: new (Oidc as any).WebStorageStateStore({ store: window.localStorage }),
      loadUserInfo: true,
      filterProtocolClaims: true,
      response_mode: 'query',
    });

    // code ==》 token
    mgr
      .signinRedirectCallback()
      .then((user: User) => {
        setDeviceId(user.profile.acr || '');
        const time = getYearMonthDateTimeNumber();
        // 记录登录的时间
        window.localStorage.setItem(IAMLastLoginKey, time);
        // 同步最后登录时间
        sendMessageToIAM(MessageConstant.lastLoginTime, time);
        window.location.href = homePageUrl || '/';
      })
      .catch(err => {
        getHintModal()(
          {
            title: langText[getLang()]?.getTokenFailedTexts?.title,
            content: langText[getLang()]?.getTokenFailedTexts?.content,
            okText: langText[getLang()]?.getTokenFailedTexts?.ok,
          },
          () => {
            window.location.href = homePageUrl || '/';
          },
        );
        throw err;
      });
  });
}
