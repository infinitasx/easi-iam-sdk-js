import Oidc from 'oidc-client'
import { Modal, message } from 'ant-design-vue'
import { Params } from '../type/settings'

import { PRODUCTION_URL, TESTING_URL, DEVELOPMENT_URL } from '../constant'

export default async function (params:Params) {
  Oidc.Log.logger = console
  Oidc.Log.level = params.env === 'production' ? Oidc.Log.NONE : Oidc.Log.INFO

  const client_id = params.client_id[params.env]
  const authority = params.env === 'production' ? PRODUCTION_URL : params.env === 'testing' ? TESTING_URL : DEVELOPMENT_URL

  // 是否展示过期提示框
  let _show_expired_modal = false
  // 认证信息
  let auth_info = null

  // oidc-client 原本的实例对象
  const _oidcClient = new Oidc.UserManager({
    userStore: new (Oidc as any).WebStorageStateStore({ store: window.localStorage }), // 只能使用
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
          message.error('自动更新token失败')
        }, 2000)
      })
  })

  // 访问令牌过期
  _oidcClient.events.addAccessTokenExpired(function () {
    if (_show_expired_modal) {
      Modal.error({
        title: '会话到期',
        content: '会话已到期，请重新登录！',
        onOk () {
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
    message.error('自动更新token失败')
  })

  // 判断是否拥有缓存
  try {
    auth_info = await _oidcClient.getUser()
  } catch (e) {
    auth_info = null
  }

  return {
    // 获取oidc-client-js 的 原生实例对象
    getOidcClientInstance () {
      return _oidcClient
    },

    // Get the user who is logged in
    getAuthInfo () {
      return new Promise((resolve, reject) => {
        _oidcClient
          .getUser()
          .then((user: any) => {
            if (user == null) {
              return resolve(null)
            } else {
              return resolve(user)
            }
          })
          .catch(function (err: any) {
            return reject(err)
          })
      })
    },

    // Check if there is any user logged in
    getSignedIn () {
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
    signIn () {
      _oidcClient.signinRedirect().catch(function (err: any) {
        console.log(err)
      })
    },

    // Redirect of the current window to the end session endpoint
    logout () {
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
    getIdToken () {
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
    getAuthorization () {
      return new Promise((resolve, reject) => {
        _oidcClient
          .getUser()
          .then((user: any) => {
            if (user == null) {
              return resolve(null)
            } else {
              return resolve(`${user.token_type} ${user.access_token}`)
            }
          })
          .catch(function (err: any) {
            console.log(err)
            return reject(err)
          })
      })
    },

    // 开启过期提醒对话框
    openExpiredModal () {
      _show_expired_modal = true
    },

    // 关闭过期提醒对话框
    closeExpiredModal () {
      _show_expired_modal = false
    }
  }
}
