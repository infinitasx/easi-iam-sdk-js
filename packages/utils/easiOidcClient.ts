import Oidc from 'oidc-client';
// 页面激活监听器
import ifvisible from 'ifvisible.js';
import { Params, ResultType } from '../type';
import langTexts from '../lang/index';
import { ILang } from '../type';
import { getLang, setLang } from '../setter-getter/i18n';
import { getAuthInfo, setLocalKey } from '../setter-getter/authInfo';
import { getEnv, setEnv, getAuthority } from '../setter-getter/env';
import {
  getMessage,
  setMessage,
  getModal,
  setModal,
  setPage,
  getPage,
  setLog,
  getLog,
  setHintModal,
} from '../setter-getter/ui';
import codeExchangeToken from './codeExchangeToken';
import clientLimitErrorCheckUtil from './clientLimitErrorCheckUtil';
import { _createFrame } from './message';

import {
  HOMEPAGE_PATH,
  IAMLastLoginKey,
  ExcludeKeys,
  messageTransferUrl,
  TESTING_URL,
  PRODUCTION_URL,
  MessageConstant,
} from '../constant';

import { getPermissions, getUserInfo, getDataActionLog, getLogSearchParams } from '../api/common';
import { getDeviceId } from '../setter-getter/deviceId';
import { getYearMonthDateTimeNumber } from './index';

export default function (params: Params): ResultType {
  // 设置初始化语言
  params.lang && setLang(params.lang);
  // 设置环境变量
  setEnv(params.env);

  Oidc.Log.logger = console;
  Oidc.Log.level = getEnv() === 'development' ? Oidc.Log.INFO : Oidc.Log.NONE;

  // 不使用本地的UI
  if (
    !params.UI.showErrorMsg ||
    !params.UI.showTokenExpiredModal ||
    !params.UI.codeExchangeTokenPage ||
    !params.UI.hintModalComp
  ) {
    throw new Error('参数UI缺少具体内容');
  }
  // 设置UI
  setModal(params.UI.showTokenExpiredModal);
  setMessage(params.UI.showErrorMsg);
  setPage(params.UI.codeExchangeTokenPage);
  setLog(params.UI.dataActionLogComp);
  setHintModal(params.UI.hintModalComp);
  // 当前环境client_id
  const client_id = params.client_id[getEnv()];

  // oidc-client 原本的实例对象
  const _oidcClient = new Oidc.UserManager({
    userStore: new (Oidc as any).WebStorageStateStore({ store: window.localStorage }),
    authority: getAuthority(),
    client_id: client_id,
    redirect_uri: params.callbackUrl,
    response_type: 'code',
    scope: 'openid offline',
    post_logout_redirect_uri: params.homePageUrl,
    accessTokenExpiringNotificationTime: 120,
    filterProtocolClaims: true,
    loadUserInfo: true,
  });

  // 设置localKey
  setLocalKey(
    (_oidcClient as any)._settings._userStore._prefix + (_oidcClient as any)._userStoreKey,
  );

  // 登录过期的提示
  let loginExpiredTipStatus = params.applicationId === 'iam' ? false : true; // 只显示一次,true，显示了，false，没有显示
  const loginExpiredTip = () => {
    if (loginExpiredTipStatus) return;
    const callback = () => {
      _oidcClient
        .signoutRedirect()
        .then(function (resp: any) {
          Oidc.Log.logger.info('signed out', resp);
        })
        .catch(function (err: any) {
          Oidc.Log.logger.error(err);
        });
      loginExpiredTipStatus = false;
    };
    getModal()(
      {
        title: langTexts[getLang()]?.sessionExpiredTitle,
        content: langTexts?.[getLang()]?.sessionExpired,
        okText: langTexts?.[getLang()]?.ok,
      },
      callback,
    );
    loginExpiredTipStatus = true;
  };

  // 检测今天是否登录过了
  const _checkTodayLogged = () => {
    let time: any = window.localStorage.getItem(IAMLastLoginKey);
    if (time && !isNaN(time)) {
      time = Number(time);
      const nowTime = getYearMonthDateTimeNumber();
      // 今天未登录过，提示，并重新登录
      if (Number(nowTime) - time > 0) {
        // 登录过期的提示
        loginExpiredTip();
        return false;
      }
    }
    return true;
  };

  // 删除陈旧的oidc 的参数
  _oidcClient.clearStaleState();

  // 令牌到期前
  _oidcClient.events.addAccessTokenExpiring(() => {
    _oidcClient
      .signinSilent()
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .then(() => {})
      .catch(() => {
        setTimeout(() => {
          getMessage()(langTexts[getLang()]?.refreshToken as string);
        }, 2000);
      });
  });

  // 添加静默刷新的失败的提示
  _oidcClient.events.addSilentRenewError(function () {
    getMessage()(langTexts?.[getLang()]?.refreshToken as string);
  });

  // 是否开启唤醒检测
  let wakeupListenerStatus = 0;

  // 监听收到的消息
  window.addEventListener(
    'message',
    (e: MessageEvent) => {
      console.log('当前页面收到消息了====开始');
      console.log(e);
      console.log('当前页面收到消息了====结束');
      const data = e.data;
      if (data) {
        // 最后一次登录时间
        if (data.type === MessageConstant.lastLoginTime) {
          console.log('收到了最后一次登录时间的更新');
          console.log(data.message);
          // 收到iframe传递的消息，恢复默认的false
          if (params.applicationId !== 'iam') {
            loginExpiredTipStatus = false;
          }
          let oldTime: any = window.localStorage.getItem(IAMLastLoginKey);
          oldTime = oldTime ? Number(oldTime) : 0;
          if (data.message && data.message > oldTime) {
            window.localStorage.setItem(IAMLastLoginKey, data.message);
            // 刷新页面
            window.location.reload();
          }
          // 检测时间
          _checkTodayLogged();
        }
      }
    },
    false,
  );

  // 添加消息中间页面
  _createFrame(
    getEnv() === 'production'
      ? PRODUCTION_URL + messageTransferUrl
      : TESTING_URL + messageTransferUrl,
    params.applicationId,
  );

  return {
    // 获取oidc-client-js 的 原生实例对象
    getOidcClientInstance() {
      return _oidcClient;
    },

    // 获取当前环境
    getCurrentEnv() {
      return getEnv();
    },

    // 获取code换token 的页面
    codeExchangeTokenPage(homePageUrl: string) {
      return codeExchangeToken(getPage(), homePageUrl);
    },

    // ajax错误检测-（检测设备被踢下去的情况）
    ajaxErrorCheck(error: any, okCallback?: () => void) {
      return clientLimitErrorCheckUtil(
        error,
        langTexts?.[getLang()].hintModalForDevice,
        langTexts?.[getLang()].hintModalForToken,
        () => {
          if (okCallback) {
            okCallback();
          }
          this.signOut();
        },
      );
    },

    // 获取设备id
    getDeviceId() {
      return getDeviceId();
    },

    // 获取日志操作组件
    dataActionLogComp(function_type: string, title?: string) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      return getLog()(
        {
          application_id: params.applicationId,
          function_type: function_type,
          token: this.getAuthorization(),
          title,
        },
        getDataActionLog,
        getLogSearchParams,
        langTexts[getLang()]?.actionLog,
        // 错误检验的
        that.ajaxErrorCheck.bind(that),
      );
    },

    // 更新lang
    setLang(lang: ILang) {
      setLang(lang);
    },

    // 获取lang
    getLang() {
      return getLang();
    },

    // 检测今天是否登录过
    checkTodayLogged: _checkTodayLogged,

    // vue-router 中的路由守卫
    async routerGuard() {
      // 有
      if (this.getAuthInfoSync()) {
        // 检测是否在有效期内
        // 1、不在有效期内
        if (
          this.getAuthInfoSync()?.expires_at <= Number(parseInt(new Date().getTime() / 1000 + ''))
        ) {
          //    检测今天是否登录过
          if (this.checkTodayLogged()) {
            // 登录过，删除过期的oidc缓存
            this.clearOidcLocalStorageData();
            this.signIn();
            return false;
          } else {
            // 没有登录过
            return false;
          }
        } else {
          // 2、在有效期内
          //    检测今天是否登录过
          if (this.checkTodayLogged()) {
            this.addEveryDayLoginListener();
            return true;
          } else {
            return false;
          }
        }
      } else {
        // 没有
        this.signIn();
        return false;
      }
    },

    // 清除localStorage 排除oidc 的信息的
    clearLocalStorageDataExcludeOidc(excludeKey?: string[]) {
      const list = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (excludeKey?.includes(key as string)) {
          continue;
        }
        if (ExcludeKeys.some(item => (key as string).includes(item))) {
          continue;
        }
        list.push(key);
      }
      list.forEach(key => localStorage.removeItem(key as string));
    },

    // 清除oidc 的localstorage信息
    clearOidcLocalStorageData() {
      localStorage.removeItem(`oidc.user:${getAuthority()}:${client_id}`);
    },

    // 获取认证信息
    getAuthInfoSync() {
      return getAuthInfo();
    },

    // Get the user who is logged in
    getAuthInfo() {
      return new Promise((resolve, reject) => {
        _oidcClient
          .getUser()
          .then((user: any) => {
            if (user == null) {
              return resolve(null);
            } else {
              return resolve(user);
            }
          })
          .catch(function (err: any) {
            return reject(err);
          });
      });
    },

    // 获取用户信息
    getUserInfo() {
      return getUserInfo({
        token: this.getAuthorization(),
      })
        .then((res: any) => {
          res.application_id = params.applicationId;
          return Promise.resolve(res);
        })
        .catch((e: any) => {
          // 检测是否匹配上错误
          this.ajaxErrorCheck(e);
          return Promise.reject(e);
        });
    },

    // 获取用户权限信息
    getPermissionsData(p: { scopeId: string | number }) {
      return getPermissions({
        token: this.getAuthorization(),
        application_id: params.applicationId,
        scope_id: p.scopeId,
      }).catch((e: any) => {
        // 检测是否匹配上错误
        this.ajaxErrorCheck(e);
        return Promise.reject(e);
      });
    },

    // Check if there is any user logged in
    getSignedIn() {
      return new Promise((resolve, reject) => {
        _oidcClient
          .getUser()
          .then((user: any) => {
            if (user == null) {
              this.signIn();
              return resolve(false);
            } else {
              return resolve(true);
            }
          })
          .catch(function (err: any) {
            return reject(err);
          });
      });
    },

    // Redirect of the current window to the authorization endpoint.
    signIn() {
      if (getEnv() === 'development' && params.needIntercept === false) {
        return;
      }
      _oidcClient
        .signinRedirect()
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .then(() => {})
        .catch(function (err: any) {
          Oidc.Log.logger.error(err);
        });
    },

    // Redirect of the current window to the end session endpoint
    signOut(callback?: {
      logoutBeforeCallback?: () => void;
      logoutSuccessCallback?: () => void;
      logoutErrorCallback?: () => void;
    }) {
      if (typeof callback?.logoutBeforeCallback === 'function') {
        callback.logoutBeforeCallback();
      }
      this.removeEveryDayLoginListener();
      _oidcClient
        .signoutRedirect()
        .then(function (resp: any) {
          if (typeof callback?.logoutSuccessCallback === 'function') {
            callback.logoutSuccessCallback();
          }
          Oidc.Log.logger.info('signed out', resp);
        })
        .catch(function (err: any) {
          if (typeof callback?.logoutErrorCallback === 'function') {
            callback.logoutErrorCallback();
          }
          Oidc.Log.logger.error(err);
        });
    },

    // 获取token
    getAuthorization() {
      const auth_info = getAuthInfo();
      return auth_info ? `Bearer ${auth_info.access_token}` : '';
    },

    // 返回当前环境下IAM的dashboard的地址
    getIAMHomeUrl() {
      return getAuthority() + HOMEPAGE_PATH;
    },

    // 添加每日登录约束校验
    addEveryDayLoginListener() {
      if (wakeupListenerStatus == 0) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
        // 添加唤醒检测是否今天登录过
        ifvisible.on('wakeup', that.checkTodayLogged);
        wakeupListenerStatus++;
      }
    },

    // 去除每日登录约束校验
    removeEveryDayLoginListener() {
      // 关闭唤醒检测是否今天登录过
      for (let i = 0; i < wakeupListenerStatus; i++) {
        ifvisible.off('wakeup');
      }
      wakeupListenerStatus = 0;
    },
  };
}
