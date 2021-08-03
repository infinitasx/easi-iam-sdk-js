import Oidc from 'oidc-client'
import {Params, ResultType} from '../type/settings'
import langTexts from '../lang/index'
import {ILang} from '../type/settings'
import {getLang, setLang} from "./i18n";
import {getAuthInfo, setAuthInfo} from "./authInfo";
import {getEnv, setEnv, getAuthority} from "./env";
import {setIsDefaultUI,getIsDefaultUI,getMessage,setMessage,getModal,setModal} from "./UI";
import {Modal,message} from 'ant-design-vue';

import {HOMEPAGE_PATH} from '../constant'

import {getPermissions, getUserInfo} from '../api/common'

export default function (params: Params): ResultType {
  // 设置初始化语言
  params.lang && setLang(params.lang);
  // 设置环境变量
  setEnv(params.env);

  Oidc.Log.logger = console
  Oidc.Log.level = getEnv() === 'development' ? Oidc.Log.INFO : Oidc.Log.NONE

  // 不使用本地的UI
  if (params.useDefaultUI === false) {
    if(!params.showErrorMsg || !params.showTokenExpiredModal){
      throw new Error('easiIamSdkJs\'s params showErrorMsg or showTokenExpiredModal is must!')
    }
    setIsDefaultUI(false);
    setModal(params.showTokenExpiredModal)
    setModal(params.showErrorMsg)
  }else{// 使用本地UI
    setIsDefaultUI(true);
    setModal(Modal);
    setMessage(message);
  }


  const client_id = params.client_id[getEnv()]


  // 是否展示过期提示框
  let _show_expired_modal = false

  // oidc-client 原本的实例对象
  const _oidcClient = new Oidc.UserManager({
    userStore: new (Oidc as any).WebStorageStateStore({store: window.localStorage}),
    authority: getAuthority(),
    client_id: client_id,
    redirect_uri: params.callbackUrl,
    response_type: 'code',
    scope: 'openid offline',
    max_age: 7200,
    post_logout_redirect_uri: params.homePageUrl,
    // silent_redirect_uri: '',
    accessTokenExpiringNotificationTime: 8,
    filterProtocolClaims: true,
    loadUserInfo: true
  })

  // 令牌到期前
  _oidcClient.events.addAccessTokenExpiring(() => {
    _oidcClient
      .signinSilent()
      .then((user) => {
        // 更新本地的缓存
        setAuthInfo(user)
      })
      .catch(() => {
        setTimeout(() => {
          getIsDefaultUI() ? getMessage().error(langTexts[getLang()]?.refreshToken as string) :
            getMessage()(langTexts[getLang()]?.refreshToken as string)
        }, 2000)
      })
  })

  // 访问令牌过期
  _oidcClient.events.addAccessTokenExpired(function () {
    if (_show_expired_modal) {
      // 避免多次弹出过期提示框
      _show_expired_modal = false;
      let callback = ()=>{
        _oidcClient
          .signoutRedirect()
          .then(function (resp: any) {
            console.log('signed out', resp)
          })
          .catch(function (err: any) {
            console.log(err)
          })
      }
      getIsDefaultUI() ? getModal().error({
        title: langTexts[getLang()]?.sessionExpiredTitle,
        content: langTexts?.[getLang()]?.sessionExpired,
        okText: langTexts?.[getLang()]?.ok,
        onOk() {
          callback();
        }
      }) : getModal()({
          title: langTexts[getLang()]?.sessionExpiredTitle,
          content: langTexts?.[getLang()]?.sessionExpired,
          okText: langTexts?.[getLang()]?.ok,
        },callback)
    }
  })

  _oidcClient.events.addSilentRenewError(function () {
    getIsDefaultUI()? getMessage().error(langTexts?.[getLang()]?.refreshToken as string): getMessage()(langTexts?.[getLang()]?.refreshToken as string);
  });


  (async function () {
    try {
      let auth_info = await _oidcClient.getUser()
      setAuthInfo(auth_info)
    } catch (e) {
      setAuthInfo(null)
    }
  }())

  return {
    // 获取oidc-client-js 的 原生实例对象
    getOidcClientInstance() {
      return _oidcClient
    },

    // 更新lang
    setLang(lang: ILang) {
      setLang(lang);
    },

    // vue-router 中的路由守卫
    async routerGuard() {
      // 内存变量中，不存在认证信息
      if (!this.getAuthInfoSync()) {
        // 获取一次storage中的
        await this.getAuthInfo()
      }
      // 有
      if (this.getAuthInfoSync()) {
        // 检测是否在有效期内
        // 1、不在有效期内
        if (
          this.getAuthInfoSync()?.expired === true ||
          this.getAuthInfoSync()?.expires_in <= 0
        ) {
          // 删除过期的oidc缓存
          this.clearOidcLocalStorageData()
          this.closeExpiredModal()
          this.signIn()
          return false
        } else {
          // 2、在有效期内
          this.openExpiredModal()
          return true
        }
      } else {
        // 没有
        this.signIn()
        return false
      }
    },

    // 清除localStorage 排除oidc 的信息的
    clearLocalStorageDataExcludeOidc(excludeKey?: string[]) {
      const list = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (excludeKey?.includes(key as string)) {
          continue;
        }
        if ((key as string).includes('oidc.user:')) {
          continue;
        }
        list.push(key)
      }
      list.forEach(key => localStorage.removeItem(key as string))
    },

    // 清除oidc 的localstorage信息
    clearOidcLocalStorageData() {
      localStorage.removeItem(`oidc.user:${getAuthority()}:${client_id}`)
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
              return resolve(null)
            } else {
              setAuthInfo(user)
              return resolve(user)
            }
          })
          .catch(function (err: any) {
            return reject(err)
          })
      })
    },

    // 获取用户信息
    getUserInfo() {
      return getUserInfo({
        token: this.getAuthorization()
      }).catch((e: any) => {
        if (e.code === 401 || e.code === 403) {
          this.clearOidcLocalStorageData()
          this.signIn()
        }
      })
    },

    // 获取用户权限信息
    getPermissionsData(p: {
      scopeId: string | number;
    }) {
      return getPermissions({
        token: this.getAuthorization(),
        application_id: params.applicationId,
        scope_id: p.scopeId
      }).catch((e: any) => {
        if (e.code === 401 || e.code === 403) {
          this.clearOidcLocalStorageData()
          this.signIn()
        }
      })
    },

    // Check if there is any user logged in
    getSignedIn() {
      return new Promise((resolve, reject) => {
        _oidcClient
          .getUser()
          .then((user: any) => {
            if (user == null) {
              this.signIn()
              return resolve(false)
            } else {
              return resolve(true)
            }
          })
          .catch(function (err: any) {
            return reject(err)
          })
      })
    },

    // Redirect of the current window to the authorization endpoint.
    signIn() {
      if (getEnv() === 'development' && params.needIntercept === false) {
        return;
      }
      _oidcClient.signinRedirect().then(() => {
      }).catch(function (err: any) {
        console.log(err)
      })
    },

    // Redirect of the current window to the end session endpoint
    signOut() {
      this.closeExpiredModal()
      _oidcClient
        .signoutRedirect()
        .then(function (resp: any) {
          console.log('signed out', resp)
        })
        .catch(function (err: any) {
          console.log(err)
        })
    },

    // Get the token id
    getIdToken() {
      return new Promise((resolve, reject) => {
        _oidcClient
          .getUser()
          .then((user: any) => {
            if (user == null) {
              return resolve(null)
            } else {
              return resolve(user.id_token)
            }
          })
          .catch(function (err: any) {
            return reject(err)
          })
      })
    },

    // Get the access token of the logged in user
    getAuthorization() {
      let auth_info = getAuthInfo();
      return auth_info ? `Bearer ${auth_info.access_token}` : ''
    },

    getIamHomeUrl() {
      return getAuthority() + HOMEPAGE_PATH;
    },

    // 开启过期提醒对话框
    openExpiredModal() {
      _show_expired_modal = true
    },

    // 关闭过期提醒对话框
    closeExpiredModal() {
      _show_expired_modal = false
    }
  }
}
