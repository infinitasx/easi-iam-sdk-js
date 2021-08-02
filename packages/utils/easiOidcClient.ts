import Oidc from 'oidc-client'
import {Modal, message} from 'ant-design-vue'
import {Params, ResultType} from '../type/settings'
import langTexts from '../lang/index'
import { ILang } from '../type/settings'

import {PRODUCTION_URL, TESTING_URL, DEVELOPMENT_URL, HOMEPAGE_PATH} from '../constant'

import {getPermissions, getUserInfo} from '../api/common'

export default function (params: Params): ResultType {
  Oidc.Log.logger = console
  Oidc.Log.level = params.env === 'development' ? Oidc.Log.INFO : Oidc.Log.NONE

  const client_id = params.client_id[params.env]
  const authority = params.env === 'production' ? PRODUCTION_URL : params.env === 'testing' ? TESTING_URL : DEVELOPMENT_URL

  params.lang = params.lang ? params.lang : 'cn';

  // 是否展示过期提示框
  let _show_expired_modal = false
  // 认证信息
  let auth_info: any = null

  // oidc-client 原本的实例对象
  const _oidcClient = new Oidc.UserManager({
    userStore: new (Oidc as any).WebStorageStateStore({store: window.localStorage}), // 只能使用
    authority: authority,
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
        auth_info = user
      })
      .catch(() => {
        setTimeout(() => {
          message.error(langTexts[params.lang]?.refreshToken)
        }, 2000)
      })
  })

  // 访问令牌过期
  _oidcClient.events.addAccessTokenExpired(function () {
    if (_show_expired_modal) {
      // 避免多次弹出过期提示框
      _show_expired_modal = false
      Modal.error({
        title: langTexts[params.lang]?.sessionExpiredTitle,
        content: langTexts?.[params.lang]?.sessionExpired,
        okText: langTexts?.[params.lang]?.ok,
        onOk() {
          _oidcClient
            .signoutRedirect()
            .then(function (resp: any) {
              console.log('signed out', resp)
            })
            .catch(function (err: any) {
              console.log(err)
            })
        }
      })
    }
  })

  _oidcClient.events.addSilentRenewError(function () {
    message.error(langTexts?.[params.lang]?.refreshToken)
  });


    (async function () {
      try {
        auth_info = await _oidcClient.getUser()
      } catch (e) {
        auth_info = null
      }
    }())

  return {
    // 获取oidc-client-js 的 原生实例对象
    getOidcClientInstance() {
      return _oidcClient
    },

    // 更新lang
    setLang(lang: ILang){
      params.lang = lang;
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
        if(excludeKey?.includes(key as string)){
          continue;
        }
        if ((key as string).includes('oidc.user:') ) {
          continue;
        }
        list.push(key)
      }
      list.forEach(key => localStorage.removeItem(key as string))
    },

    // 清除oidc 的localstorage信息
    clearOidcLocalStorageData() {
      localStorage.removeItem(`oidc.user:${authority}:${client_id}`)
    },

    // 获取认证信息
    getAuthInfoSync() {
      return auth_info
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
              auth_info = user
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
        baseUrl: authority,
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
      scopeId?: string | number | null;
    }) {
      return getPermissions({
        baseUrl: authority,
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
      if (params.env === 'development' && params.needIntercept === false) {
        return;
      }
      _oidcClient.signinRedirect().catch(function (err: any) {
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
      return auth_info ? `Bearer ${auth_info.access_token}` : ''
    },

    getIamHomeUrl(){
      return authority + HOMEPAGE_PATH;
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
