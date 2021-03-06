var __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __defNormalProp = (e, t, r) =>
    t in e
      ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  __spreadValues = (e, t) => {
    for (var r in t || (t = {})) __hasOwnProp.call(t, r) && __defNormalProp(e, r, t[r]);
    if (__getOwnPropSymbols)
      for (var r of __getOwnPropSymbols(t)) __propIsEnum.call(t, r) && __defNormalProp(e, r, t[r]);
    return e;
  },
  __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t));
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('axios'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'axios'], t)
    : t(
        ((e = 'undefined' != typeof globalThis ? globalThis : e || self).easiIamSdkJs = {}),
        e.axios,
      );
})(this, function (e, t) {
  'use strict';
  function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  var n = r(t),
    i =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {};
  function o(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var s,
    a = o(function (e, t) {
      var r;
      (r = function () {
        return (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var i = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
              r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
              )
                for (var i in e)
                  r.d(
                    n,
                    i,
                    function (t) {
                      return e[t];
                    }.bind(null, i),
                  );
              return n;
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return r.d(t, 'a', t), t;
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ''),
            r((r.s = 22))
          );
        })([
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = {
                debug: function () {},
                info: function () {},
                warn: function () {},
                error: function () {},
              },
              o = void 0,
              s = void 0;
            (t.Log = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
              }
              return (
                (e.reset = function () {
                  (s = 3), (o = i);
                }),
                (e.debug = function () {
                  if (s >= 4) {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                      t[r] = arguments[r];
                    o.debug.apply(o, Array.from(t));
                  }
                }),
                (e.info = function () {
                  if (s >= 3) {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                      t[r] = arguments[r];
                    o.info.apply(o, Array.from(t));
                  }
                }),
                (e.warn = function () {
                  if (s >= 2) {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                      t[r] = arguments[r];
                    o.warn.apply(o, Array.from(t));
                  }
                }),
                (e.error = function () {
                  if (s >= 1) {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                      t[r] = arguments[r];
                    o.error.apply(o, Array.from(t));
                  }
                }),
                n(e, null, [
                  {
                    key: 'NONE',
                    get: function () {
                      return 0;
                    },
                  },
                  {
                    key: 'ERROR',
                    get: function () {
                      return 1;
                    },
                  },
                  {
                    key: 'WARN',
                    get: function () {
                      return 2;
                    },
                  },
                  {
                    key: 'INFO',
                    get: function () {
                      return 3;
                    },
                  },
                  {
                    key: 'DEBUG',
                    get: function () {
                      return 4;
                    },
                  },
                  {
                    key: 'level',
                    get: function () {
                      return s;
                    },
                    set: function (e) {
                      if (!(0 <= e && e <= 4)) throw new Error('Invalid log level');
                      s = e;
                    },
                  },
                  {
                    key: 'logger',
                    get: function () {
                      return o;
                    },
                    set: function (e) {
                      if (
                        (!e.debug && e.info && (e.debug = e.info),
                        !(e.debug && e.info && e.warn && e.error))
                      )
                        throw new Error('Invalid logger');
                      o = e;
                    },
                  },
                ]),
                e
              );
            })()).reset();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = {
                setInterval: (function (e) {
                  function t(t, r) {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function (e, t) {
                  return setInterval(e, t);
                }),
                clearInterval: (function (e) {
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function (e) {
                  return clearInterval(e);
                }),
              },
              o = !1,
              s = null;
            t.Global = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
              }
              return (
                (e._testing = function () {
                  o = !0;
                }),
                (e.setXMLHttpRequest = function (e) {
                  s = e;
                }),
                n(e, null, [
                  {
                    key: 'location',
                    get: function () {
                      if (!o) return location;
                    },
                  },
                  {
                    key: 'localStorage',
                    get: function () {
                      if (!o && 'undefined' != typeof window) return localStorage;
                    },
                  },
                  {
                    key: 'sessionStorage',
                    get: function () {
                      if (!o && 'undefined' != typeof window) return sessionStorage;
                    },
                  },
                  {
                    key: 'XMLHttpRequest',
                    get: function () {
                      if (!o && 'undefined' != typeof window) return s || XMLHttpRequest;
                    },
                  },
                  {
                    key: 'timer',
                    get: function () {
                      if (!o) return i;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.MetadataService = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0),
              o = r(7);
            function s(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            var a = '.well-known/openid-configuration';
            t.MetadataService = (function () {
              function e(t) {
                var r =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.JsonService;
                if ((s(this, e), !t))
                  throw (
                    (i.Log.error('MetadataService: No settings passed to MetadataService'),
                    new Error('settings'))
                  );
                (this._settings = t), (this._jsonService = new r(['application/jwk-set+json']));
              }
              return (
                (e.prototype.resetSigningKeys = function () {
                  (this._settings = this._settings || {}), (this._settings.signingKeys = void 0);
                }),
                (e.prototype.getMetadata = function () {
                  var e = this;
                  return this._settings.metadata
                    ? (i.Log.debug('MetadataService.getMetadata: Returning metadata from settings'),
                      Promise.resolve(this._settings.metadata))
                    : this.metadataUrl
                    ? (i.Log.debug(
                        'MetadataService.getMetadata: getting metadata from',
                        this.metadataUrl,
                      ),
                      this._jsonService.getJson(this.metadataUrl).then(function (t) {
                        i.Log.debug('MetadataService.getMetadata: json received');
                        var r = e._settings.metadataSeed || {};
                        return (
                          (e._settings.metadata = Object.assign({}, r, t)), e._settings.metadata
                        );
                      }))
                    : (i.Log.error(
                        'MetadataService.getMetadata: No authority or metadataUrl configured on settings',
                      ),
                      Promise.reject(
                        new Error('No authority or metadataUrl configured on settings'),
                      ));
                }),
                (e.prototype.getIssuer = function () {
                  return this._getMetadataProperty('issuer');
                }),
                (e.prototype.getAuthorizationEndpoint = function () {
                  return this._getMetadataProperty('authorization_endpoint');
                }),
                (e.prototype.getUserInfoEndpoint = function () {
                  return this._getMetadataProperty('userinfo_endpoint');
                }),
                (e.prototype.getTokenEndpoint = function () {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                  return this._getMetadataProperty('token_endpoint', e);
                }),
                (e.prototype.getCheckSessionIframe = function () {
                  return this._getMetadataProperty('check_session_iframe', !0);
                }),
                (e.prototype.getEndSessionEndpoint = function () {
                  return this._getMetadataProperty('end_session_endpoint', !0);
                }),
                (e.prototype.getRevocationEndpoint = function () {
                  return this._getMetadataProperty('revocation_endpoint', !0);
                }),
                (e.prototype.getKeysEndpoint = function () {
                  return this._getMetadataProperty('jwks_uri', !0);
                }),
                (e.prototype._getMetadataProperty = function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return (
                    i.Log.debug('MetadataService.getMetadataProperty for: ' + e),
                    this.getMetadata().then(function (r) {
                      if (
                        (i.Log.debug('MetadataService.getMetadataProperty: metadata recieved'),
                        void 0 === r[e])
                      ) {
                        if (!0 === t)
                          return void i.Log.warn(
                            'MetadataService.getMetadataProperty: Metadata does not contain optional property ' +
                              e,
                          );
                        throw (
                          (i.Log.error(
                            'MetadataService.getMetadataProperty: Metadata does not contain property ' +
                              e,
                          ),
                          new Error('Metadata does not contain property ' + e))
                        );
                      }
                      return r[e];
                    })
                  );
                }),
                (e.prototype.getSigningKeys = function () {
                  var e = this;
                  return this._settings.signingKeys
                    ? (i.Log.debug(
                        'MetadataService.getSigningKeys: Returning signingKeys from settings',
                      ),
                      Promise.resolve(this._settings.signingKeys))
                    : this._getMetadataProperty('jwks_uri').then(function (t) {
                        return (
                          i.Log.debug('MetadataService.getSigningKeys: jwks_uri received', t),
                          e._jsonService.getJson(t).then(function (t) {
                            if (
                              (i.Log.debug('MetadataService.getSigningKeys: key set received', t),
                              !t.keys)
                            )
                              throw (
                                (i.Log.error(
                                  'MetadataService.getSigningKeys: Missing keys on keyset',
                                ),
                                new Error('Missing keys on keyset'))
                              );
                            return (e._settings.signingKeys = t.keys), e._settings.signingKeys;
                          })
                        );
                      });
                }),
                n(e, [
                  {
                    key: 'metadataUrl',
                    get: function () {
                      return (
                        this._metadataUrl ||
                          (this._settings.metadataUrl
                            ? (this._metadataUrl = this._settings.metadataUrl)
                            : ((this._metadataUrl = this._settings.authority),
                              this._metadataUrl &&
                                this._metadataUrl.indexOf(a) < 0 &&
                                ('/' !== this._metadataUrl[this._metadataUrl.length - 1] &&
                                  (this._metadataUrl += '/'),
                                (this._metadataUrl += a)))),
                        this._metadataUrl
                      );
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.UrlUtility = void 0);
            var n = r(0),
              i = r(1);
            t.UrlUtility = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
              }
              return (
                (e.addQueryParam = function (e, t, r) {
                  return (
                    e.indexOf('?') < 0 && (e += '?'),
                    '?' !== e[e.length - 1] && (e += '&'),
                    (e += encodeURIComponent(t)),
                    (e += '=') + encodeURIComponent(r)
                  );
                }),
                (e.parseUrlFragment = function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '#',
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Global;
                  'string' != typeof e && (e = r.location.href);
                  var o = e.lastIndexOf(t);
                  o >= 0 && (e = e.substr(o + 1)),
                    '?' === t && (o = e.indexOf('#')) >= 0 && (e = e.substr(0, o));
                  for (var s, a = {}, u = /([^&=]+)=([^&]*)/g, c = 0; (s = u.exec(e)); )
                    if (
                      ((a[decodeURIComponent(s[1])] = decodeURIComponent(s[2].replace(/\+/g, ' '))),
                      c++ > 50)
                    )
                      return (
                        n.Log.error(
                          'UrlUtility.parseUrlFragment: response exceeded expected number of parameters',
                          e,
                        ),
                        { error: 'Response exceeded expected number of parameters' }
                      );
                  for (var h in a) return a;
                  return {};
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.JoseUtil = void 0);
            var n,
              i = r(26),
              o = (n = r(33)) && n.__esModule ? n : { default: n };
            t.JoseUtil = (0, o.default)({
              jws: i.jws,
              KeyUtil: i.KeyUtil,
              X509: i.X509,
              crypto: i.crypto,
              hextob64u: i.hextob64u,
              b64tohex: i.b64tohex,
              AllowedSigningAlgs: i.AllowedSigningAlgs,
            });
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.OidcClientSettings = void 0);
            var n =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        'function' == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    },
              i = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              o = r(0),
              s = r(23),
              a = r(6),
              u = r(24),
              c = r(2);
            function h(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            var l = '.well-known/openid-configuration',
              f = 'id_token',
              d = 'openid',
              g = 'client_secret_post';
            t.OidcClientSettings = (function () {
              function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = t.authority,
                  i = t.metadataUrl,
                  o = t.metadata,
                  l = t.signingKeys,
                  p = t.metadataSeed,
                  v = t.client_id,
                  y = t.client_secret,
                  m = t.response_type,
                  _ = void 0 === m ? f : m,
                  S = t.scope,
                  b = void 0 === S ? d : S,
                  w = t.redirect_uri,
                  F = t.post_logout_redirect_uri,
                  E = t.client_authentication,
                  x = void 0 === E ? g : E,
                  k = t.prompt,
                  A = t.display,
                  P = t.max_age,
                  C = t.ui_locales,
                  T = t.acr_values,
                  I = t.resource,
                  R = t.response_mode,
                  D = t.filterProtocolClaims,
                  L = void 0 === D || D,
                  N = t.loadUserInfo,
                  U = void 0 === N || N,
                  O = t.staleStateAge,
                  B = void 0 === O ? 900 : O,
                  j = t.clockSkew,
                  M = void 0 === j ? 300 : j,
                  H = t.clockService,
                  V = void 0 === H ? new s.ClockService() : H,
                  K = t.userInfoJwtIssuer,
                  q = void 0 === K ? 'OP' : K,
                  J = t.mergeClaims,
                  W = void 0 !== J && J,
                  z = t.stateStore,
                  Y = void 0 === z ? new a.WebStorageStateStore() : z,
                  G = t.ResponseValidatorCtor,
                  X = void 0 === G ? u.ResponseValidator : G,
                  $ = t.MetadataServiceCtor,
                  Q = void 0 === $ ? c.MetadataService : $,
                  Z = t.extraQueryParams,
                  ee = void 0 === Z ? {} : Z,
                  te = t.extraTokenParams,
                  re = void 0 === te ? {} : te;
                h(this, e),
                  (this._authority = r),
                  (this._metadataUrl = i),
                  (this._metadata = o),
                  (this._metadataSeed = p),
                  (this._signingKeys = l),
                  (this._client_id = v),
                  (this._client_secret = y),
                  (this._response_type = _),
                  (this._scope = b),
                  (this._redirect_uri = w),
                  (this._post_logout_redirect_uri = F),
                  (this._client_authentication = x),
                  (this._prompt = k),
                  (this._display = A),
                  (this._max_age = P),
                  (this._ui_locales = C),
                  (this._acr_values = T),
                  (this._resource = I),
                  (this._response_mode = R),
                  (this._filterProtocolClaims = !!L),
                  (this._loadUserInfo = !!U),
                  (this._staleStateAge = B),
                  (this._clockSkew = M),
                  (this._clockService = V),
                  (this._userInfoJwtIssuer = q),
                  (this._mergeClaims = !!W),
                  (this._stateStore = Y),
                  (this._validator = new X(this)),
                  (this._metadataService = new Q(this)),
                  (this._extraQueryParams =
                    'object' === (void 0 === ee ? 'undefined' : n(ee)) ? ee : {}),
                  (this._extraTokenParams =
                    'object' === (void 0 === re ? 'undefined' : n(re)) ? re : {});
              }
              return (
                (e.prototype.getEpochTime = function () {
                  return this._clockService.getEpochTime();
                }),
                i(e, [
                  {
                    key: 'client_id',
                    get: function () {
                      return this._client_id;
                    },
                    set: function (e) {
                      if (this._client_id)
                        throw (
                          (o.Log.error(
                            'OidcClientSettings.set_client_id: client_id has already been assigned.',
                          ),
                          new Error('client_id has already been assigned.'))
                        );
                      this._client_id = e;
                    },
                  },
                  {
                    key: 'client_secret',
                    get: function () {
                      return this._client_secret;
                    },
                  },
                  {
                    key: 'response_type',
                    get: function () {
                      return this._response_type;
                    },
                  },
                  {
                    key: 'scope',
                    get: function () {
                      return this._scope;
                    },
                  },
                  {
                    key: 'redirect_uri',
                    get: function () {
                      return this._redirect_uri;
                    },
                  },
                  {
                    key: 'post_logout_redirect_uri',
                    get: function () {
                      return this._post_logout_redirect_uri;
                    },
                  },
                  {
                    key: 'client_authentication',
                    get: function () {
                      return this._client_authentication;
                    },
                  },
                  {
                    key: 'prompt',
                    get: function () {
                      return this._prompt;
                    },
                  },
                  {
                    key: 'display',
                    get: function () {
                      return this._display;
                    },
                  },
                  {
                    key: 'max_age',
                    get: function () {
                      return this._max_age;
                    },
                  },
                  {
                    key: 'ui_locales',
                    get: function () {
                      return this._ui_locales;
                    },
                  },
                  {
                    key: 'acr_values',
                    get: function () {
                      return this._acr_values;
                    },
                  },
                  {
                    key: 'resource',
                    get: function () {
                      return this._resource;
                    },
                  },
                  {
                    key: 'response_mode',
                    get: function () {
                      return this._response_mode;
                    },
                  },
                  {
                    key: 'authority',
                    get: function () {
                      return this._authority;
                    },
                    set: function (e) {
                      if (this._authority)
                        throw (
                          (o.Log.error(
                            'OidcClientSettings.set_authority: authority has already been assigned.',
                          ),
                          new Error('authority has already been assigned.'))
                        );
                      this._authority = e;
                    },
                  },
                  {
                    key: 'metadataUrl',
                    get: function () {
                      return (
                        this._metadataUrl ||
                          ((this._metadataUrl = this.authority),
                          this._metadataUrl &&
                            this._metadataUrl.indexOf(l) < 0 &&
                            ('/' !== this._metadataUrl[this._metadataUrl.length - 1] &&
                              (this._metadataUrl += '/'),
                            (this._metadataUrl += l))),
                        this._metadataUrl
                      );
                    },
                  },
                  {
                    key: 'metadata',
                    get: function () {
                      return this._metadata;
                    },
                    set: function (e) {
                      this._metadata = e;
                    },
                  },
                  {
                    key: 'metadataSeed',
                    get: function () {
                      return this._metadataSeed;
                    },
                    set: function (e) {
                      this._metadataSeed = e;
                    },
                  },
                  {
                    key: 'signingKeys',
                    get: function () {
                      return this._signingKeys;
                    },
                    set: function (e) {
                      this._signingKeys = e;
                    },
                  },
                  {
                    key: 'filterProtocolClaims',
                    get: function () {
                      return this._filterProtocolClaims;
                    },
                  },
                  {
                    key: 'loadUserInfo',
                    get: function () {
                      return this._loadUserInfo;
                    },
                  },
                  {
                    key: 'staleStateAge',
                    get: function () {
                      return this._staleStateAge;
                    },
                  },
                  {
                    key: 'clockSkew',
                    get: function () {
                      return this._clockSkew;
                    },
                  },
                  {
                    key: 'userInfoJwtIssuer',
                    get: function () {
                      return this._userInfoJwtIssuer;
                    },
                  },
                  {
                    key: 'mergeClaims',
                    get: function () {
                      return this._mergeClaims;
                    },
                  },
                  {
                    key: 'stateStore',
                    get: function () {
                      return this._stateStore;
                    },
                  },
                  {
                    key: 'validator',
                    get: function () {
                      return this._validator;
                    },
                  },
                  {
                    key: 'metadataService',
                    get: function () {
                      return this._metadataService;
                    },
                  },
                  {
                    key: 'extraQueryParams',
                    get: function () {
                      return this._extraQueryParams;
                    },
                    set: function (e) {
                      'object' === (void 0 === e ? 'undefined' : n(e))
                        ? (this._extraQueryParams = e)
                        : (this._extraQueryParams = {});
                    },
                  },
                  {
                    key: 'extraTokenParams',
                    get: function () {
                      return this._extraTokenParams;
                    },
                    set: function (e) {
                      'object' === (void 0 === e ? 'undefined' : n(e))
                        ? (this._extraTokenParams = e)
                        : (this._extraTokenParams = {});
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.WebStorageStateStore = void 0);
            var n = r(0),
              i = r(1);
            function o(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.WebStorageStateStore = (function () {
              function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = t.prefix,
                  n = void 0 === r ? 'oidc.' : r,
                  s = t.store,
                  a = void 0 === s ? i.Global.localStorage : s;
                o(this, e), (this._store = a), (this._prefix = n);
              }
              return (
                (e.prototype.set = function (e, t) {
                  return (
                    n.Log.debug('WebStorageStateStore.set', e),
                    (e = this._prefix + e),
                    this._store.setItem(e, t),
                    Promise.resolve()
                  );
                }),
                (e.prototype.get = function (e) {
                  n.Log.debug('WebStorageStateStore.get', e), (e = this._prefix + e);
                  var t = this._store.getItem(e);
                  return Promise.resolve(t);
                }),
                (e.prototype.remove = function (e) {
                  n.Log.debug('WebStorageStateStore.remove', e), (e = this._prefix + e);
                  var t = this._store.getItem(e);
                  return this._store.removeItem(e), Promise.resolve(t);
                }),
                (e.prototype.getAllKeys = function () {
                  n.Log.debug('WebStorageStateStore.getAllKeys');
                  for (var e = [], t = 0; t < this._store.length; t++) {
                    var r = this._store.key(t);
                    0 === r.indexOf(this._prefix) && e.push(r.substr(this._prefix.length));
                  }
                  return Promise.resolve(e);
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.JsonService = void 0);
            var n = r(0),
              i = r(1);
            function o(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.JsonService = (function () {
              function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : i.Global.XMLHttpRequest,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                o(this, e),
                  t && Array.isArray(t)
                    ? (this._contentTypes = t.slice())
                    : (this._contentTypes = []),
                  this._contentTypes.push('application/json'),
                  n && this._contentTypes.push('application/jwt'),
                  (this._XMLHttpRequest = r),
                  (this._jwtHandler = n);
              }
              return (
                (e.prototype.getJson = function (e, t) {
                  var r = this;
                  if (!e)
                    throw (n.Log.error('JsonService.getJson: No url passed'), new Error('url'));
                  return (
                    n.Log.debug('JsonService.getJson, url: ', e),
                    new Promise(function (i, o) {
                      var s = new r._XMLHttpRequest();
                      s.open('GET', e);
                      var a = r._contentTypes,
                        u = r._jwtHandler;
                      (s.onload = function () {
                        if (
                          (n.Log.debug(
                            'JsonService.getJson: HTTP response received, status',
                            s.status,
                          ),
                          200 === s.status)
                        ) {
                          var t = s.getResponseHeader('Content-Type');
                          if (t) {
                            var r = a.find(function (e) {
                              if (t.startsWith(e)) return !0;
                            });
                            if ('application/jwt' == r) return void u(s).then(i, o);
                            if (r)
                              try {
                                return void i(JSON.parse(s.responseText));
                              } catch (c) {
                                return (
                                  n.Log.error(
                                    'JsonService.getJson: Error parsing JSON response',
                                    c.message,
                                  ),
                                  void o(c)
                                );
                              }
                          }
                          o(Error('Invalid response Content-Type: ' + t + ', from URL: ' + e));
                        } else o(Error(s.statusText + ' (' + s.status + ')'));
                      }),
                        (s.onerror = function () {
                          n.Log.error('JsonService.getJson: network error'),
                            o(Error('Network Error'));
                        }),
                        t &&
                          (n.Log.debug(
                            'JsonService.getJson: token passed, setting Authorization header',
                          ),
                          s.setRequestHeader('Authorization', 'Bearer ' + t)),
                        s.send();
                    })
                  );
                }),
                (e.prototype.postForm = function (e, t, r) {
                  var i = this;
                  if (!e)
                    throw (n.Log.error('JsonService.postForm: No url passed'), new Error('url'));
                  return (
                    n.Log.debug('JsonService.postForm, url: ', e),
                    new Promise(function (o, s) {
                      var a = new i._XMLHttpRequest();
                      a.open('POST', e);
                      var u = i._contentTypes;
                      (a.onload = function () {
                        if (
                          (n.Log.debug(
                            'JsonService.postForm: HTTP response received, status',
                            a.status,
                          ),
                          200 !== a.status)
                        ) {
                          if (
                            400 === a.status &&
                            (r = a.getResponseHeader('Content-Type')) &&
                            u.find(function (e) {
                              if (r.startsWith(e)) return !0;
                            })
                          )
                            try {
                              var t = JSON.parse(a.responseText);
                              if (t && t.error)
                                return (
                                  n.Log.error('JsonService.postForm: Error from server: ', t.error),
                                  void s(new Error(t.error))
                                );
                            } catch (i) {
                              return (
                                n.Log.error(
                                  'JsonService.postForm: Error parsing JSON response',
                                  i.message,
                                ),
                                void s(i)
                              );
                            }
                          s(Error(a.statusText + ' (' + a.status + ')'));
                        } else {
                          var r;
                          if (
                            (r = a.getResponseHeader('Content-Type')) &&
                            u.find(function (e) {
                              if (r.startsWith(e)) return !0;
                            })
                          )
                            try {
                              return void o(JSON.parse(a.responseText));
                            } catch (i) {
                              return (
                                n.Log.error(
                                  'JsonService.postForm: Error parsing JSON response',
                                  i.message,
                                ),
                                void s(i)
                              );
                            }
                          s(Error('Invalid response Content-Type: ' + r + ', from URL: ' + e));
                        }
                      }),
                        (a.onerror = function () {
                          n.Log.error('JsonService.postForm: network error'),
                            s(Error('Network Error'));
                        });
                      var c = '';
                      for (var h in t) {
                        var l = t[h];
                        l &&
                          (c.length > 0 && (c += '&'),
                          (c += encodeURIComponent(h)),
                          (c += '='),
                          (c += encodeURIComponent(l)));
                      }
                      a.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                        void 0 !== r && a.setRequestHeader('Authorization', 'Basic ' + btoa(r)),
                        a.send(c);
                    })
                  );
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SigninRequest = void 0);
            var n = r(0),
              i = r(3),
              o = r(13);
            t.SigninRequest = (function () {
              function e(t) {
                var r = t.url,
                  s = t.client_id,
                  a = t.redirect_uri,
                  u = t.response_type,
                  c = t.scope,
                  h = t.authority,
                  l = t.data,
                  f = t.prompt,
                  d = t.display,
                  g = t.max_age,
                  p = t.ui_locales,
                  v = t.id_token_hint,
                  y = t.login_hint,
                  m = t.acr_values,
                  _ = t.resource,
                  S = t.response_mode,
                  b = t.request,
                  w = t.request_uri,
                  F = t.extraQueryParams,
                  E = t.request_type,
                  x = t.client_secret,
                  k = t.extraTokenParams,
                  A = t.skipUserInfo;
                if (
                  ((function (e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                  })(this, e),
                  !r)
                )
                  throw (n.Log.error('SigninRequest.ctor: No url passed'), new Error('url'));
                if (!s)
                  throw (
                    (n.Log.error('SigninRequest.ctor: No client_id passed'), new Error('client_id'))
                  );
                if (!a)
                  throw (
                    (n.Log.error('SigninRequest.ctor: No redirect_uri passed'),
                    new Error('redirect_uri'))
                  );
                if (!u)
                  throw (
                    (n.Log.error('SigninRequest.ctor: No response_type passed'),
                    new Error('response_type'))
                  );
                if (!c)
                  throw (n.Log.error('SigninRequest.ctor: No scope passed'), new Error('scope'));
                if (!h)
                  throw (
                    (n.Log.error('SigninRequest.ctor: No authority passed'), new Error('authority'))
                  );
                var P = e.isOidc(u),
                  C = e.isCode(u);
                S || (S = e.isCode(u) ? 'query' : null),
                  (this.state = new o.SigninState({
                    nonce: P,
                    data: l,
                    client_id: s,
                    authority: h,
                    redirect_uri: a,
                    code_verifier: C,
                    request_type: E,
                    response_mode: S,
                    client_secret: x,
                    scope: c,
                    extraTokenParams: k,
                    skipUserInfo: A,
                  })),
                  (r = i.UrlUtility.addQueryParam(r, 'client_id', s)),
                  (r = i.UrlUtility.addQueryParam(r, 'redirect_uri', a)),
                  (r = i.UrlUtility.addQueryParam(r, 'response_type', u)),
                  (r = i.UrlUtility.addQueryParam(r, 'scope', c)),
                  (r = i.UrlUtility.addQueryParam(r, 'state', this.state.id)),
                  P && (r = i.UrlUtility.addQueryParam(r, 'nonce', this.state.nonce)),
                  C &&
                    ((r = i.UrlUtility.addQueryParam(
                      r,
                      'code_challenge',
                      this.state.code_challenge,
                    )),
                    (r = i.UrlUtility.addQueryParam(r, 'code_challenge_method', 'S256')));
                var T = {
                  prompt: f,
                  display: d,
                  max_age: g,
                  ui_locales: p,
                  id_token_hint: v,
                  login_hint: y,
                  acr_values: m,
                  resource: _,
                  request: b,
                  request_uri: w,
                  response_mode: S,
                };
                for (var I in T) T[I] && (r = i.UrlUtility.addQueryParam(r, I, T[I]));
                for (var R in F) r = i.UrlUtility.addQueryParam(r, R, F[R]);
                this.url = r;
              }
              return (
                (e.isOidc = function (e) {
                  return !!e.split(/\s+/g).filter(function (e) {
                    return 'id_token' === e;
                  })[0];
                }),
                (e.isOAuth = function (e) {
                  return !!e.split(/\s+/g).filter(function (e) {
                    return 'token' === e;
                  })[0];
                }),
                (e.isCode = function (e) {
                  return !!e.split(/\s+/g).filter(function (e) {
                    return 'code' === e;
                  })[0];
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.State = void 0);
            var n,
              i = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              o = r(0),
              s = (n = r(14)) && n.__esModule ? n : { default: n };
            function a(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.State = (function () {
              function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = t.id,
                  n = t.data,
                  i = t.created,
                  o = t.request_type;
                a(this, e),
                  (this._id = r || (0, s.default)()),
                  (this._data = n),
                  (this._created = 'number' == typeof i && i > 0 ? i : parseInt(Date.now() / 1e3)),
                  (this._request_type = o);
              }
              return (
                (e.prototype.toStorageString = function () {
                  return (
                    o.Log.debug('State.toStorageString'),
                    JSON.stringify({
                      id: this.id,
                      data: this.data,
                      created: this.created,
                      request_type: this.request_type,
                    })
                  );
                }),
                (e.fromStorageString = function (t) {
                  return o.Log.debug('State.fromStorageString'), new e(JSON.parse(t));
                }),
                (e.clearStaleState = function (t, r) {
                  var n = Date.now() / 1e3 - r;
                  return t.getAllKeys().then(function (r) {
                    o.Log.debug('State.clearStaleState: got keys', r);
                    for (
                      var i = [],
                        s = function (s) {
                          var a = r[s];
                          (u = t.get(a).then(function (r) {
                            var i = !1;
                            if (r)
                              try {
                                var s = e.fromStorageString(r);
                                o.Log.debug(
                                  'State.clearStaleState: got item from key: ',
                                  a,
                                  s.created,
                                ),
                                  s.created <= n && (i = !0);
                              } catch (u) {
                                o.Log.error(
                                  'State.clearStaleState: Error parsing state for key',
                                  a,
                                  u.message,
                                ),
                                  (i = !0);
                              }
                            else
                              o.Log.debug('State.clearStaleState: no item in storage for key: ', a),
                                (i = !0);
                            if (i)
                              return (
                                o.Log.debug('State.clearStaleState: removed item for key: ', a),
                                t.remove(a)
                              );
                          })),
                            i.push(u);
                        },
                        a = 0;
                      a < r.length;
                      a++
                    ) {
                      var u;
                      s(a);
                    }
                    return (
                      o.Log.debug('State.clearStaleState: waiting on promise count:', i.length),
                      Promise.all(i)
                    );
                  });
                }),
                i(e, [
                  {
                    key: 'id',
                    get: function () {
                      return this._id;
                    },
                  },
                  {
                    key: 'data',
                    get: function () {
                      return this._data;
                    },
                  },
                  {
                    key: 'created',
                    get: function () {
                      return this._created;
                    },
                  },
                  {
                    key: 'request_type',
                    get: function () {
                      return this._request_type;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.OidcClient = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0),
              o = r(5),
              s = r(12),
              a = r(8),
              u = r(34),
              c = r(35),
              h = r(36),
              l = r(13),
              f = r(9);
            function d(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.OidcClient = (function () {
              function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                d(this, e),
                  t instanceof o.OidcClientSettings
                    ? (this._settings = t)
                    : (this._settings = new o.OidcClientSettings(t));
              }
              return (
                (e.prototype.createSigninRequest = function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = t.response_type,
                    n = t.scope,
                    o = t.redirect_uri,
                    s = t.data,
                    u = t.state,
                    c = t.prompt,
                    h = t.display,
                    l = t.max_age,
                    f = t.ui_locales,
                    d = t.id_token_hint,
                    g = t.login_hint,
                    p = t.acr_values,
                    v = t.resource,
                    y = t.request,
                    m = t.request_uri,
                    _ = t.response_mode,
                    S = t.extraQueryParams,
                    b = t.extraTokenParams,
                    w = t.request_type,
                    F = t.skipUserInfo,
                    E = arguments[1];
                  i.Log.debug('OidcClient.createSigninRequest');
                  var x = this._settings.client_id;
                  (r = r || this._settings.response_type),
                    (n = n || this._settings.scope),
                    (o = o || this._settings.redirect_uri),
                    (c = c || this._settings.prompt),
                    (h = h || this._settings.display),
                    (l = l || this._settings.max_age),
                    (f = f || this._settings.ui_locales),
                    (p = p || this._settings.acr_values),
                    (v = v || this._settings.resource),
                    (_ = _ || this._settings.response_mode),
                    (S = S || this._settings.extraQueryParams),
                    (b = b || this._settings.extraTokenParams);
                  var k = this._settings.authority;
                  return a.SigninRequest.isCode(r) && 'code' !== r
                    ? Promise.reject(new Error('OpenID Connect hybrid flow is not supported'))
                    : this._metadataService.getAuthorizationEndpoint().then(function (t) {
                        i.Log.debug(
                          'OidcClient.createSigninRequest: Received authorization endpoint',
                          t,
                        );
                        var A = new a.SigninRequest({
                            url: t,
                            client_id: x,
                            redirect_uri: o,
                            response_type: r,
                            scope: n,
                            data: s || u,
                            authority: k,
                            prompt: c,
                            display: h,
                            max_age: l,
                            ui_locales: f,
                            id_token_hint: d,
                            login_hint: g,
                            acr_values: p,
                            resource: v,
                            request: y,
                            request_uri: m,
                            extraQueryParams: S,
                            extraTokenParams: b,
                            request_type: w,
                            response_mode: _,
                            client_secret: e._settings.client_secret,
                            skipUserInfo: F,
                          }),
                          P = A.state;
                        return (E = E || e._stateStore)
                          .set(P.id, P.toStorageString())
                          .then(function () {
                            return A;
                          });
                      });
                }),
                (e.prototype.readSigninResponseState = function (e, t) {
                  var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                  i.Log.debug('OidcClient.readSigninResponseState');
                  var n =
                      'query' === this._settings.response_mode ||
                      (!this._settings.response_mode &&
                        a.SigninRequest.isCode(this._settings.response_type)),
                    o = n ? '?' : '#',
                    s = new u.SigninResponse(e, o);
                  if (!s.state)
                    return (
                      i.Log.error('OidcClient.readSigninResponseState: No state in response'),
                      Promise.reject(new Error('No state in response'))
                    );
                  t = t || this._stateStore;
                  var c = r ? t.remove.bind(t) : t.get.bind(t);
                  return c(s.state).then(function (e) {
                    if (!e)
                      throw (
                        (i.Log.error(
                          'OidcClient.readSigninResponseState: No matching state found in storage',
                        ),
                        new Error('No matching state found in storage'))
                      );
                    return { state: l.SigninState.fromStorageString(e), response: s };
                  });
                }),
                (e.prototype.processSigninResponse = function (e, t) {
                  var r = this;
                  return (
                    i.Log.debug('OidcClient.processSigninResponse'),
                    this.readSigninResponseState(e, t, !0).then(function (e) {
                      var t = e.state,
                        n = e.response;
                      return (
                        i.Log.debug(
                          'OidcClient.processSigninResponse: Received state from storage; validating response',
                        ),
                        r._validator.validateSigninResponse(t, n)
                      );
                    })
                  );
                }),
                (e.prototype.createSignoutRequest = function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = t.id_token_hint,
                    n = t.data,
                    o = t.state,
                    s = t.post_logout_redirect_uri,
                    a = t.extraQueryParams,
                    u = t.request_type,
                    h = arguments[1];
                  return (
                    i.Log.debug('OidcClient.createSignoutRequest'),
                    (s = s || this._settings.post_logout_redirect_uri),
                    (a = a || this._settings.extraQueryParams),
                    this._metadataService.getEndSessionEndpoint().then(function (t) {
                      if (!t)
                        throw (
                          (i.Log.error(
                            'OidcClient.createSignoutRequest: No end session endpoint url returned',
                          ),
                          new Error('no end session endpoint'))
                        );
                      i.Log.debug(
                        'OidcClient.createSignoutRequest: Received end session endpoint',
                        t,
                      );
                      var l = new c.SignoutRequest({
                          url: t,
                          id_token_hint: r,
                          post_logout_redirect_uri: s,
                          data: n || o,
                          extraQueryParams: a,
                          request_type: u,
                        }),
                        f = l.state;
                      return (
                        f &&
                          (i.Log.debug(
                            'OidcClient.createSignoutRequest: Signout request has state to persist',
                          ),
                          (h = h || e._stateStore).set(f.id, f.toStorageString())),
                        l
                      );
                    })
                  );
                }),
                (e.prototype.readSignoutResponseState = function (e, t) {
                  var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                  i.Log.debug('OidcClient.readSignoutResponseState');
                  var n = new h.SignoutResponse(e);
                  if (!n.state)
                    return (
                      i.Log.debug('OidcClient.readSignoutResponseState: No state in response'),
                      n.error
                        ? (i.Log.warn(
                            'OidcClient.readSignoutResponseState: Response was error: ',
                            n.error,
                          ),
                          Promise.reject(new s.ErrorResponse(n)))
                        : Promise.resolve({ state: void 0, response: n })
                    );
                  var o = n.state;
                  t = t || this._stateStore;
                  var a = r ? t.remove.bind(t) : t.get.bind(t);
                  return a(o).then(function (e) {
                    if (!e)
                      throw (
                        (i.Log.error(
                          'OidcClient.readSignoutResponseState: No matching state found in storage',
                        ),
                        new Error('No matching state found in storage'))
                      );
                    return { state: f.State.fromStorageString(e), response: n };
                  });
                }),
                (e.prototype.processSignoutResponse = function (e, t) {
                  var r = this;
                  return (
                    i.Log.debug('OidcClient.processSignoutResponse'),
                    this.readSignoutResponseState(e, t, !0).then(function (e) {
                      var t = e.state,
                        n = e.response;
                      return t
                        ? (i.Log.debug(
                            'OidcClient.processSignoutResponse: Received state from storage; validating response',
                          ),
                          r._validator.validateSignoutResponse(t, n))
                        : (i.Log.debug(
                            'OidcClient.processSignoutResponse: No state from storage; skipping validating response',
                          ),
                          n);
                    })
                  );
                }),
                (e.prototype.clearStaleState = function (e) {
                  return (
                    i.Log.debug('OidcClient.clearStaleState'),
                    (e = e || this._stateStore),
                    f.State.clearStaleState(e, this.settings.staleStateAge)
                  );
                }),
                n(e, [
                  {
                    key: '_stateStore',
                    get: function () {
                      return this.settings.stateStore;
                    },
                  },
                  {
                    key: '_validator',
                    get: function () {
                      return this.settings.validator;
                    },
                  },
                  {
                    key: '_metadataService',
                    get: function () {
                      return this.settings.metadataService;
                    },
                  },
                  {
                    key: 'settings',
                    get: function () {
                      return this._settings;
                    },
                  },
                  {
                    key: 'metadataService',
                    get: function () {
                      return this._metadataService;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.TokenClient = void 0);
            var n = r(7),
              i = r(2),
              o = r(0);
            function s(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.TokenClient = (function () {
              function e(t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.JsonService,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : i.MetadataService;
                if ((s(this, e), !t))
                  throw (
                    (o.Log.error('TokenClient.ctor: No settings passed'), new Error('settings'))
                  );
                (this._settings = t),
                  (this._jsonService = new r()),
                  (this._metadataService = new a(this._settings));
              }
              return (
                (e.prototype.exchangeCode = function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  ((t = Object.assign({}, t)).grant_type = t.grant_type || 'authorization_code'),
                    (t.client_id = t.client_id || this._settings.client_id),
                    (t.client_secret = t.client_secret || this._settings.client_secret),
                    (t.redirect_uri = t.redirect_uri || this._settings.redirect_uri);
                  var r = void 0,
                    n = t._client_authentication || this._settings._client_authentication;
                  return (
                    delete t._client_authentication,
                    t.code
                      ? t.redirect_uri
                        ? t.code_verifier
                          ? t.client_id
                            ? t.client_secret || 'client_secret_basic' != n
                              ? ('client_secret_basic' == n &&
                                  ((r = t.client_id + ':' + t.client_secret),
                                  delete t.client_id,
                                  delete t.client_secret),
                                this._metadataService.getTokenEndpoint(!1).then(function (n) {
                                  return (
                                    o.Log.debug(
                                      'TokenClient.exchangeCode: Received token endpoint',
                                    ),
                                    e._jsonService.postForm(n, t, r).then(function (e) {
                                      return (
                                        o.Log.debug('TokenClient.exchangeCode: response received'),
                                        e
                                      );
                                    })
                                  );
                                }))
                              : (o.Log.error('TokenClient.exchangeCode: No client_secret passed'),
                                Promise.reject(new Error('A client_secret is required')))
                            : (o.Log.error('TokenClient.exchangeCode: No client_id passed'),
                              Promise.reject(new Error('A client_id is required')))
                          : (o.Log.error('TokenClient.exchangeCode: No code_verifier passed'),
                            Promise.reject(new Error('A code_verifier is required')))
                        : (o.Log.error('TokenClient.exchangeCode: No redirect_uri passed'),
                          Promise.reject(new Error('A redirect_uri is required')))
                      : (o.Log.error('TokenClient.exchangeCode: No code passed'),
                        Promise.reject(new Error('A code is required')))
                  );
                }),
                (e.prototype.exchangeRefreshToken = function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  ((t = Object.assign({}, t)).grant_type = t.grant_type || 'refresh_token'),
                    (t.client_id = t.client_id || this._settings.client_id),
                    (t.client_secret = t.client_secret || this._settings.client_secret);
                  var r = void 0,
                    n = t._client_authentication || this._settings._client_authentication;
                  return (
                    delete t._client_authentication,
                    t.refresh_token
                      ? t.client_id
                        ? ('client_secret_basic' == n &&
                            ((r = t.client_id + ':' + t.client_secret),
                            delete t.client_id,
                            delete t.client_secret),
                          this._metadataService.getTokenEndpoint(!1).then(function (n) {
                            return (
                              o.Log.debug(
                                'TokenClient.exchangeRefreshToken: Received token endpoint',
                              ),
                              e._jsonService.postForm(n, t, r).then(function (e) {
                                return (
                                  o.Log.debug(
                                    'TokenClient.exchangeRefreshToken: response received',
                                  ),
                                  e
                                );
                              })
                            );
                          }))
                        : (o.Log.error('TokenClient.exchangeRefreshToken: No client_id passed'),
                          Promise.reject(new Error('A client_id is required')))
                      : (o.Log.error('TokenClient.exchangeRefreshToken: No refresh_token passed'),
                        Promise.reject(new Error('A refresh_token is required')))
                  );
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.ErrorResponse = void 0);
            var n = r(0);
            function i(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function o(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            }
            t.ErrorResponse = (function (e) {
              function t() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  s = r.error,
                  a = r.error_description,
                  u = r.error_uri,
                  c = r.state,
                  h = r.session_state;
                if ((i(this, t), !s))
                  throw (n.Log.error('No error passed to ErrorResponse'), new Error('error'));
                var l = o(this, e.call(this, a || s));
                return (
                  (l.name = 'ErrorResponse'),
                  (l.error = s),
                  (l.error_description = a),
                  (l.error_uri = u),
                  (l.state = c),
                  (l.session_state = h),
                  l
                );
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                t
              );
            })(Error);
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SigninState = void 0);
            var n,
              i = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              o = r(0),
              s = r(9),
              a = r(4),
              u = (n = r(14)) && n.__esModule ? n : { default: n };
            function c(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function h(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            }
            t.SigninState = (function (e) {
              function t() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = r.nonce,
                  i = r.authority,
                  o = r.client_id,
                  s = r.redirect_uri,
                  l = r.code_verifier,
                  f = r.response_mode,
                  d = r.client_secret,
                  g = r.scope,
                  p = r.extraTokenParams,
                  v = r.skipUserInfo;
                c(this, t);
                var y = h(this, e.call(this, arguments[0]));
                if (
                  (!0 === n ? (y._nonce = (0, u.default)()) : n && (y._nonce = n),
                  !0 === l
                    ? (y._code_verifier = (0, u.default)() + (0, u.default)() + (0, u.default)())
                    : l && (y._code_verifier = l),
                  y.code_verifier)
                ) {
                  var m = a.JoseUtil.hashString(y.code_verifier, 'SHA256');
                  y._code_challenge = a.JoseUtil.hexToBase64Url(m);
                }
                return (
                  (y._redirect_uri = s),
                  (y._authority = i),
                  (y._client_id = o),
                  (y._response_mode = f),
                  (y._client_secret = d),
                  (y._scope = g),
                  (y._extraTokenParams = p),
                  (y._skipUserInfo = v),
                  y
                );
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.toStorageString = function () {
                  return (
                    o.Log.debug('SigninState.toStorageString'),
                    JSON.stringify({
                      id: this.id,
                      data: this.data,
                      created: this.created,
                      request_type: this.request_type,
                      nonce: this.nonce,
                      code_verifier: this.code_verifier,
                      redirect_uri: this.redirect_uri,
                      authority: this.authority,
                      client_id: this.client_id,
                      response_mode: this.response_mode,
                      client_secret: this.client_secret,
                      scope: this.scope,
                      extraTokenParams: this.extraTokenParams,
                      skipUserInfo: this.skipUserInfo,
                    })
                  );
                }),
                (t.fromStorageString = function (e) {
                  return o.Log.debug('SigninState.fromStorageString'), new t(JSON.parse(e));
                }),
                i(t, [
                  {
                    key: 'nonce',
                    get: function () {
                      return this._nonce;
                    },
                  },
                  {
                    key: 'authority',
                    get: function () {
                      return this._authority;
                    },
                  },
                  {
                    key: 'client_id',
                    get: function () {
                      return this._client_id;
                    },
                  },
                  {
                    key: 'redirect_uri',
                    get: function () {
                      return this._redirect_uri;
                    },
                  },
                  {
                    key: 'code_verifier',
                    get: function () {
                      return this._code_verifier;
                    },
                  },
                  {
                    key: 'code_challenge',
                    get: function () {
                      return this._code_challenge;
                    },
                  },
                  {
                    key: 'response_mode',
                    get: function () {
                      return this._response_mode;
                    },
                  },
                  {
                    key: 'client_secret',
                    get: function () {
                      return this._client_secret;
                    },
                  },
                  {
                    key: 'scope',
                    get: function () {
                      return this._scope;
                    },
                  },
                  {
                    key: 'extraTokenParams',
                    get: function () {
                      return this._extraTokenParams;
                    },
                  },
                  {
                    key: 'skipUserInfo',
                    get: function () {
                      return this._skipUserInfo;
                    },
                  },
                ]),
                t
              );
            })(s.State);
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function () {
                return (
                  'undefined' != n && null !== n && void 0 !== n.getRandomValues ? i : o
                )().replace(/-/g, '');
              });
            var n = 'undefined' != typeof window ? window.crypto || window.msCrypto : null;
            function i() {
              return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (e) {
                return (e ^ (n.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(
                  16,
                );
              });
            }
            function o() {
              return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (e) {
                return (e ^ ((16 * Math.random()) >> (e / 4))).toString(16);
              });
            }
            e.exports = t.default;
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.User = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0);
            t.User = (function () {
              function e(t) {
                var r = t.id_token,
                  n = t.session_state,
                  i = t.access_token,
                  o = t.refresh_token,
                  s = t.token_type,
                  a = t.scope,
                  u = t.profile,
                  c = t.expires_at,
                  h = t.state;
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this.id_token = r),
                  (this.session_state = n),
                  (this.access_token = i),
                  (this.refresh_token = o),
                  (this.token_type = s),
                  (this.scope = a),
                  (this.profile = u),
                  (this.expires_at = c),
                  (this.state = h);
              }
              return (
                (e.prototype.toStorageString = function () {
                  return (
                    i.Log.debug('User.toStorageString'),
                    JSON.stringify({
                      id_token: this.id_token,
                      session_state: this.session_state,
                      access_token: this.access_token,
                      refresh_token: this.refresh_token,
                      token_type: this.token_type,
                      scope: this.scope,
                      profile: this.profile,
                      expires_at: this.expires_at,
                    })
                  );
                }),
                (e.fromStorageString = function (t) {
                  return i.Log.debug('User.fromStorageString'), new e(JSON.parse(t));
                }),
                n(e, [
                  {
                    key: 'expires_in',
                    get: function () {
                      if (this.expires_at) {
                        var e = parseInt(Date.now() / 1e3);
                        return this.expires_at - e;
                      }
                    },
                    set: function (e) {
                      var t = parseInt(e);
                      if ('number' == typeof t && t > 0) {
                        var r = parseInt(Date.now() / 1e3);
                        this.expires_at = r + t;
                      }
                    },
                  },
                  {
                    key: 'expired',
                    get: function () {
                      var e = this.expires_in;
                      if (void 0 !== e) return e <= 0;
                    },
                  },
                  {
                    key: 'scopes',
                    get: function () {
                      return (this.scope || '').split(' ');
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.AccessTokenEvents = void 0);
            var n = r(0),
              i = r(46);
            function o(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.AccessTokenEvents = (function () {
              function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = t.accessTokenExpiringNotificationTime,
                  n = void 0 === r ? 60 : r,
                  s = t.accessTokenExpiringTimer,
                  a = void 0 === s ? new i.Timer('Access token expiring') : s,
                  u = t.accessTokenExpiredTimer,
                  c = void 0 === u ? new i.Timer('Access token expired') : u;
                o(this, e),
                  (this._accessTokenExpiringNotificationTime = n),
                  (this._accessTokenExpiring = a),
                  (this._accessTokenExpired = c);
              }
              return (
                (e.prototype.load = function (e) {
                  if (e.access_token && void 0 !== e.expires_in) {
                    var t = e.expires_in;
                    if (
                      (n.Log.debug(
                        'AccessTokenEvents.load: access token present, remaining duration:',
                        t,
                      ),
                      t > 0)
                    ) {
                      var r = t - this._accessTokenExpiringNotificationTime;
                      r <= 0 && (r = 1),
                        n.Log.debug('AccessTokenEvents.load: registering expiring timer in:', r),
                        this._accessTokenExpiring.init(r);
                    } else
                      n.Log.debug(
                        "AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration.",
                      ),
                        this._accessTokenExpiring.cancel();
                    var i = t + 1;
                    n.Log.debug('AccessTokenEvents.load: registering expired timer in:', i),
                      this._accessTokenExpired.init(i);
                  } else this._accessTokenExpiring.cancel(), this._accessTokenExpired.cancel();
                }),
                (e.prototype.unload = function () {
                  n.Log.debug('AccessTokenEvents.unload: canceling existing access token timers'),
                    this._accessTokenExpiring.cancel(),
                    this._accessTokenExpired.cancel();
                }),
                (e.prototype.addAccessTokenExpiring = function (e) {
                  this._accessTokenExpiring.addHandler(e);
                }),
                (e.prototype.removeAccessTokenExpiring = function (e) {
                  this._accessTokenExpiring.removeHandler(e);
                }),
                (e.prototype.addAccessTokenExpired = function (e) {
                  this._accessTokenExpired.addHandler(e);
                }),
                (e.prototype.removeAccessTokenExpired = function (e) {
                  this._accessTokenExpired.removeHandler(e);
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.Event = void 0);
            var n = r(0);
            t.Event = (function () {
              function e(t) {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this._name = t),
                  (this._callbacks = []);
              }
              return (
                (e.prototype.addHandler = function (e) {
                  this._callbacks.push(e);
                }),
                (e.prototype.removeHandler = function (e) {
                  var t = this._callbacks.findIndex(function (t) {
                    return t === e;
                  });
                  t >= 0 && this._callbacks.splice(t, 1);
                }),
                (e.prototype.raise = function () {
                  n.Log.debug('Event: Raising event: ' + this._name);
                  for (var e = 0; e < this._callbacks.length; e++) {
                    var t;
                    (t = this._callbacks)[e].apply(t, arguments);
                  }
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SessionMonitor = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0),
              o = r(19),
              s = r(1);
            function a(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.SessionMonitor = (function () {
              function e(t) {
                var r = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : o.CheckSessionIFrame,
                  u =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Global.timer;
                if ((a(this, e), !t))
                  throw (
                    (i.Log.error('SessionMonitor.ctor: No user manager passed to SessionMonitor'),
                    new Error('userManager'))
                  );
                (this._userManager = t),
                  (this._CheckSessionIFrameCtor = n),
                  (this._timer = u),
                  this._userManager.events.addUserLoaded(this._start.bind(this)),
                  this._userManager.events.addUserUnloaded(this._stop.bind(this)),
                  Promise.resolve(
                    this._userManager
                      .getUser()
                      .then(function (e) {
                        e
                          ? r._start(e)
                          : r._settings.monitorAnonymousSession &&
                            r._userManager
                              .querySessionStatus()
                              .then(function (e) {
                                var t = { session_state: e.session_state };
                                e.sub && e.sid && (t.profile = { sub: e.sub, sid: e.sid }),
                                  r._start(t);
                              })
                              .catch(function (e) {
                                i.Log.error(
                                  'SessionMonitor ctor: error from querySessionStatus:',
                                  e.message,
                                );
                              });
                      })
                      .catch(function (e) {
                        i.Log.error('SessionMonitor ctor: error from getUser:', e.message);
                      }),
                  );
              }
              return (
                (e.prototype._start = function (e) {
                  var t = this,
                    r = e.session_state;
                  r &&
                    (e.profile
                      ? ((this._sub = e.profile.sub),
                        (this._sid = e.profile.sid),
                        i.Log.debug(
                          'SessionMonitor._start: session_state:',
                          r,
                          ', sub:',
                          this._sub,
                        ))
                      : ((this._sub = void 0),
                        (this._sid = void 0),
                        i.Log.debug(
                          'SessionMonitor._start: session_state:',
                          r,
                          ', anonymous user',
                        )),
                    this._checkSessionIFrame
                      ? this._checkSessionIFrame.start(r)
                      : this._metadataService
                          .getCheckSessionIframe()
                          .then(function (e) {
                            if (e) {
                              i.Log.debug(
                                'SessionMonitor._start: Initializing check session iframe',
                              );
                              var n = t._client_id,
                                o = t._checkSessionInterval,
                                s = t._stopCheckSessionOnError;
                              (t._checkSessionIFrame = new t._CheckSessionIFrameCtor(
                                t._callback.bind(t),
                                n,
                                e,
                                o,
                                s,
                              )),
                                t._checkSessionIFrame.load().then(function () {
                                  t._checkSessionIFrame.start(r);
                                });
                            } else
                              i.Log.warn(
                                'SessionMonitor._start: No check session iframe found in the metadata',
                              );
                          })
                          .catch(function (e) {
                            i.Log.error(
                              'SessionMonitor._start: Error from getCheckSessionIframe:',
                              e.message,
                            );
                          }));
                }),
                (e.prototype._stop = function () {
                  var e = this;
                  if (
                    ((this._sub = void 0),
                    (this._sid = void 0),
                    this._checkSessionIFrame &&
                      (i.Log.debug('SessionMonitor._stop'), this._checkSessionIFrame.stop()),
                    this._settings.monitorAnonymousSession)
                  )
                    var t = this._timer.setInterval(function () {
                      e._timer.clearInterval(t),
                        e._userManager
                          .querySessionStatus()
                          .then(function (t) {
                            var r = { session_state: t.session_state };
                            t.sub && t.sid && (r.profile = { sub: t.sub, sid: t.sid }), e._start(r);
                          })
                          .catch(function (e) {
                            i.Log.error(
                              'SessionMonitor: error from querySessionStatus:',
                              e.message,
                            );
                          });
                    }, 1e3);
                }),
                (e.prototype._callback = function () {
                  var e = this;
                  this._userManager
                    .querySessionStatus()
                    .then(function (t) {
                      var r = !0;
                      t
                        ? t.sub === e._sub
                          ? ((r = !1),
                            e._checkSessionIFrame.start(t.session_state),
                            t.sid === e._sid
                              ? i.Log.debug(
                                  'SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:',
                                  t.session_state,
                                )
                              : (i.Log.debug(
                                  'SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:',
                                  t.session_state,
                                ),
                                e._userManager.events._raiseUserSessionChanged()))
                          : i.Log.debug(
                              'SessionMonitor._callback: Different subject signed into OP:',
                              t.sub,
                            )
                        : i.Log.debug('SessionMonitor._callback: Subject no longer signed into OP'),
                        r &&
                          (e._sub
                            ? (i.Log.debug(
                                'SessionMonitor._callback: SessionMonitor._callback; raising signed out event',
                              ),
                              e._userManager.events._raiseUserSignedOut())
                            : (i.Log.debug(
                                'SessionMonitor._callback: SessionMonitor._callback; raising signed in event',
                              ),
                              e._userManager.events._raiseUserSignedIn()));
                    })
                    .catch(function (t) {
                      e._sub &&
                        (i.Log.debug(
                          'SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event',
                          t.message,
                        ),
                        e._userManager.events._raiseUserSignedOut());
                    });
                }),
                n(e, [
                  {
                    key: '_settings',
                    get: function () {
                      return this._userManager.settings;
                    },
                  },
                  {
                    key: '_metadataService',
                    get: function () {
                      return this._userManager.metadataService;
                    },
                  },
                  {
                    key: '_client_id',
                    get: function () {
                      return this._settings.client_id;
                    },
                  },
                  {
                    key: '_checkSessionInterval',
                    get: function () {
                      return this._settings.checkSessionInterval;
                    },
                  },
                  {
                    key: '_stopCheckSessionOnError',
                    get: function () {
                      return this._settings.stopCheckSessionOnError;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.CheckSessionIFrame = void 0);
            var n = r(0);
            function i(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.CheckSessionIFrame = (function () {
              function e(t, r, n, o) {
                var s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                i(this, e),
                  (this._callback = t),
                  (this._client_id = r),
                  (this._url = n),
                  (this._interval = o || 2e3),
                  (this._stopOnError = s);
                var a = n.indexOf('/', n.indexOf('//') + 2);
                (this._frame_origin = n.substr(0, a)),
                  (this._frame = window.document.createElement('iframe')),
                  (this._frame.style.visibility = 'hidden'),
                  (this._frame.style.position = 'absolute'),
                  (this._frame.style.display = 'none'),
                  (this._frame.width = 0),
                  (this._frame.height = 0),
                  (this._frame.src = n);
              }
              return (
                (e.prototype.load = function () {
                  var e = this;
                  return new Promise(function (t) {
                    (e._frame.onload = function () {
                      t();
                    }),
                      window.document.body.appendChild(e._frame),
                      (e._boundMessageEvent = e._message.bind(e)),
                      window.addEventListener('message', e._boundMessageEvent, !1);
                  });
                }),
                (e.prototype._message = function (e) {
                  e.origin === this._frame_origin &&
                    e.source === this._frame.contentWindow &&
                    ('error' === e.data
                      ? (n.Log.error(
                          'CheckSessionIFrame: error message from check session op iframe',
                        ),
                        this._stopOnError && this.stop())
                      : 'changed' === e.data
                      ? (n.Log.debug(
                          'CheckSessionIFrame: changed message from check session op iframe',
                        ),
                        this.stop(),
                        this._callback())
                      : n.Log.debug(
                          'CheckSessionIFrame: ' + e.data + ' message from check session op iframe',
                        ));
                }),
                (e.prototype.start = function (e) {
                  var t = this;
                  if (this._session_state !== e) {
                    n.Log.debug('CheckSessionIFrame.start'), this.stop(), (this._session_state = e);
                    var r = function () {
                      t._frame.contentWindow.postMessage(
                        t._client_id + ' ' + t._session_state,
                        t._frame_origin,
                      );
                    };
                    r(), (this._timer = window.setInterval(r, this._interval));
                  }
                }),
                (e.prototype.stop = function () {
                  (this._session_state = null),
                    this._timer &&
                      (n.Log.debug('CheckSessionIFrame.stop'),
                      window.clearInterval(this._timer),
                      (this._timer = null));
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.TokenRevocationClient = void 0);
            var n = r(0),
              i = r(2),
              o = r(1);
            function s(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            var a = 'access_token',
              u = 'refresh_token';
            t.TokenRevocationClient = (function () {
              function e(t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : o.Global.XMLHttpRequest,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : i.MetadataService;
                if ((s(this, e), !t))
                  throw (
                    (n.Log.error('TokenRevocationClient.ctor: No settings provided'),
                    new Error('No settings provided.'))
                  );
                (this._settings = t),
                  (this._XMLHttpRequestCtor = r),
                  (this._metadataService = new a(this._settings));
              }
              return (
                (e.prototype.revoke = function (e, t) {
                  var r = this,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 'access_token';
                  if (!e)
                    throw (
                      (n.Log.error('TokenRevocationClient.revoke: No token provided'),
                      new Error('No token provided.'))
                    );
                  if (i !== a && i != u)
                    throw (
                      (n.Log.error('TokenRevocationClient.revoke: Invalid token type'),
                      new Error('Invalid token type.'))
                    );
                  return this._metadataService.getRevocationEndpoint().then(function (o) {
                    if (o) {
                      n.Log.debug('TokenRevocationClient.revoke: Revoking ' + i);
                      var s = r._settings.client_id,
                        a = r._settings.client_secret;
                      return r._revoke(o, s, a, e, i);
                    }
                    if (t)
                      throw (
                        (n.Log.error('TokenRevocationClient.revoke: Revocation not supported'),
                        new Error('Revocation not supported'))
                      );
                  });
                }),
                (e.prototype._revoke = function (e, t, r, i, o) {
                  var s = this;
                  return new Promise(function (a, u) {
                    var c = new s._XMLHttpRequestCtor();
                    c.open('POST', e),
                      (c.onload = function () {
                        n.Log.debug(
                          'TokenRevocationClient.revoke: HTTP response received, status',
                          c.status,
                        ),
                          200 === c.status ? a() : u(Error(c.statusText + ' (' + c.status + ')'));
                      }),
                      (c.onerror = function () {
                        n.Log.debug('TokenRevocationClient.revoke: Network Error.'),
                          u('Network Error');
                      });
                    var h = 'client_id=' + encodeURIComponent(t);
                    r && (h += '&client_secret=' + encodeURIComponent(r)),
                      (h += '&token_type_hint=' + encodeURIComponent(o)),
                      (h += '&token=' + encodeURIComponent(i)),
                      c.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                      c.send(h);
                  });
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.CordovaPopupWindow = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0);
            t.CordovaPopupWindow = (function () {
              function e(t) {
                var r = this;
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this._promise = new Promise(function (e, t) {
                    (r._resolve = e), (r._reject = t);
                  })),
                  (this.features = t.popupWindowFeatures || 'location=no,toolbar=no,zoom=no'),
                  (this.target = t.popupWindowTarget || '_blank'),
                  (this.redirect_uri = t.startUrl),
                  i.Log.debug('CordovaPopupWindow.ctor: redirect_uri: ' + this.redirect_uri);
              }
              return (
                (e.prototype._isInAppBrowserInstalled = function (e) {
                  return [
                    'cordova-plugin-inappbrowser',
                    'cordova-plugin-inappbrowser.inappbrowser',
                    'org.apache.cordova.inappbrowser',
                  ].some(function (t) {
                    return e.hasOwnProperty(t);
                  });
                }),
                (e.prototype.navigate = function (e) {
                  if (e && e.url) {
                    if (!window.cordova) return this._error('cordova is undefined');
                    var t = window.cordova.require('cordova/plugin_list').metadata;
                    if (!1 === this._isInAppBrowserInstalled(t))
                      return this._error('InAppBrowser plugin not found');
                    (this._popup = cordova.InAppBrowser.open(e.url, this.target, this.features)),
                      this._popup
                        ? (i.Log.debug('CordovaPopupWindow.navigate: popup successfully created'),
                          (this._exitCallbackEvent = this._exitCallback.bind(this)),
                          (this._loadStartCallbackEvent = this._loadStartCallback.bind(this)),
                          this._popup.addEventListener('exit', this._exitCallbackEvent, !1),
                          this._popup.addEventListener(
                            'loadstart',
                            this._loadStartCallbackEvent,
                            !1,
                          ))
                        : this._error('Error opening popup window');
                  } else this._error('No url provided');
                  return this.promise;
                }),
                (e.prototype._loadStartCallback = function (e) {
                  0 === e.url.indexOf(this.redirect_uri) && this._success({ url: e.url });
                }),
                (e.prototype._exitCallback = function (e) {
                  this._error(e);
                }),
                (e.prototype._success = function (e) {
                  this._cleanup(),
                    i.Log.debug(
                      'CordovaPopupWindow: Successful response from cordova popup window',
                    ),
                    this._resolve(e);
                }),
                (e.prototype._error = function (e) {
                  this._cleanup(), i.Log.error(e), this._reject(new Error(e));
                }),
                (e.prototype.close = function () {
                  this._cleanup();
                }),
                (e.prototype._cleanup = function () {
                  this._popup &&
                    (i.Log.debug('CordovaPopupWindow: cleaning up popup'),
                    this._popup.removeEventListener('exit', this._exitCallbackEvent, !1),
                    this._popup.removeEventListener('loadstart', this._loadStartCallbackEvent, !1),
                    this._popup.close()),
                    (this._popup = null);
                }),
                n(e, [
                  {
                    key: 'promise',
                    get: function () {
                      return this._promise;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = r(0),
              i = r(10),
              o = r(5),
              s = r(6),
              a = r(37),
              u = r(38),
              c = r(16),
              h = r(2),
              l = r(48),
              f = r(49),
              d = r(19),
              g = r(20),
              p = r(18),
              v = r(1),
              y = r(15),
              m = r(50);
            (t.default = {
              Version: m.Version,
              Log: n.Log,
              OidcClient: i.OidcClient,
              OidcClientSettings: o.OidcClientSettings,
              WebStorageStateStore: s.WebStorageStateStore,
              InMemoryWebStorage: a.InMemoryWebStorage,
              UserManager: u.UserManager,
              AccessTokenEvents: c.AccessTokenEvents,
              MetadataService: h.MetadataService,
              CordovaPopupNavigator: l.CordovaPopupNavigator,
              CordovaIFrameNavigator: f.CordovaIFrameNavigator,
              CheckSessionIFrame: d.CheckSessionIFrame,
              TokenRevocationClient: g.TokenRevocationClient,
              SessionMonitor: p.SessionMonitor,
              Global: v.Global,
              User: y.User,
            }),
              (e.exports = t.default);
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.ClockService = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                  })(this, e);
                }
                return (
                  (e.prototype.getEpochTime = function () {
                    return Promise.resolve((Date.now() / 1e3) | 0);
                  }),
                  e
                );
              })());
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.ResponseValidator = void 0);
            var n =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        'function' == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    },
              i = r(0),
              o = r(2),
              s = r(25),
              a = r(11),
              u = r(12),
              c = r(4);
            function h(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            var l = ['nonce', 'at_hash', 'iat', 'nbf', 'exp', 'aud', 'iss', 'c_hash'];
            t.ResponseValidator = (function () {
              function e(t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : o.MetadataService,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : s.UserInfoService,
                  u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.JoseUtil,
                  l =
                    arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.TokenClient;
                if ((h(this, e), !t))
                  throw (
                    (i.Log.error('ResponseValidator.ctor: No settings passed to ResponseValidator'),
                    new Error('settings'))
                  );
                (this._settings = t),
                  (this._metadataService = new r(this._settings)),
                  (this._userInfoService = new n(this._settings)),
                  (this._joseUtil = u),
                  (this._tokenClient = new l(this._settings));
              }
              return (
                (e.prototype.validateSigninResponse = function (e, t) {
                  var r = this;
                  return (
                    i.Log.debug('ResponseValidator.validateSigninResponse'),
                    this._processSigninParams(e, t).then(function (t) {
                      return (
                        i.Log.debug('ResponseValidator.validateSigninResponse: state processed'),
                        r._validateTokens(e, t).then(function (t) {
                          return (
                            i.Log.debug(
                              'ResponseValidator.validateSigninResponse: tokens validated',
                            ),
                            r._processClaims(e, t).then(function (e) {
                              return (
                                i.Log.debug(
                                  'ResponseValidator.validateSigninResponse: claims processed',
                                ),
                                e
                              );
                            })
                          );
                        })
                      );
                    })
                  );
                }),
                (e.prototype.validateSignoutResponse = function (e, t) {
                  return e.id !== t.state
                    ? (i.Log.error(
                        'ResponseValidator.validateSignoutResponse: State does not match',
                      ),
                      Promise.reject(new Error('State does not match')))
                    : (i.Log.debug('ResponseValidator.validateSignoutResponse: state validated'),
                      (t.state = e.data),
                      t.error
                        ? (i.Log.warn(
                            'ResponseValidator.validateSignoutResponse: Response was error',
                            t.error,
                          ),
                          Promise.reject(new u.ErrorResponse(t)))
                        : Promise.resolve(t));
                }),
                (e.prototype._processSigninParams = function (e, t) {
                  if (e.id !== t.state)
                    return (
                      i.Log.error('ResponseValidator._processSigninParams: State does not match'),
                      Promise.reject(new Error('State does not match'))
                    );
                  if (!e.client_id)
                    return (
                      i.Log.error('ResponseValidator._processSigninParams: No client_id on state'),
                      Promise.reject(new Error('No client_id on state'))
                    );
                  if (!e.authority)
                    return (
                      i.Log.error('ResponseValidator._processSigninParams: No authority on state'),
                      Promise.reject(new Error('No authority on state'))
                    );
                  if (this._settings.authority) {
                    if (this._settings.authority && this._settings.authority !== e.authority)
                      return (
                        i.Log.error(
                          'ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state',
                        ),
                        Promise.reject(new Error('authority mismatch on settings vs. signin state'))
                      );
                  } else this._settings.authority = e.authority;
                  if (this._settings.client_id) {
                    if (this._settings.client_id && this._settings.client_id !== e.client_id)
                      return (
                        i.Log.error(
                          'ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state',
                        ),
                        Promise.reject(new Error('client_id mismatch on settings vs. signin state'))
                      );
                  } else this._settings.client_id = e.client_id;
                  return (
                    i.Log.debug('ResponseValidator._processSigninParams: state validated'),
                    (t.state = e.data),
                    t.error
                      ? (i.Log.warn(
                          'ResponseValidator._processSigninParams: Response was error',
                          t.error,
                        ),
                        Promise.reject(new u.ErrorResponse(t)))
                      : e.nonce && !t.id_token
                      ? (i.Log.error(
                          'ResponseValidator._processSigninParams: Expecting id_token in response',
                        ),
                        Promise.reject(new Error('No id_token in response')))
                      : !e.nonce && t.id_token
                      ? (i.Log.error(
                          'ResponseValidator._processSigninParams: Not expecting id_token in response',
                        ),
                        Promise.reject(new Error('Unexpected id_token in response')))
                      : e.code_verifier && !t.code
                      ? (i.Log.error(
                          'ResponseValidator._processSigninParams: Expecting code in response',
                        ),
                        Promise.reject(new Error('No code in response')))
                      : !e.code_verifier && t.code
                      ? (i.Log.error(
                          'ResponseValidator._processSigninParams: Not expecting code in response',
                        ),
                        Promise.reject(new Error('Unexpected code in response')))
                      : (t.scope || (t.scope = e.scope), Promise.resolve(t))
                  );
                }),
                (e.prototype._processClaims = function (e, t) {
                  var r = this;
                  if (t.isOpenIdConnect) {
                    if (
                      (i.Log.debug(
                        'ResponseValidator._processClaims: response is OIDC, processing claims',
                      ),
                      (t.profile = this._filterProtocolClaims(t.profile)),
                      !0 !== e.skipUserInfo && this._settings.loadUserInfo && t.access_token)
                    )
                      return (
                        i.Log.debug('ResponseValidator._processClaims: loading user info'),
                        this._userInfoService.getClaims(t.access_token).then(function (e) {
                          return (
                            i.Log.debug(
                              'ResponseValidator._processClaims: user info claims received from user info endpoint',
                            ),
                            e.sub !== t.profile.sub
                              ? (i.Log.error(
                                  'ResponseValidator._processClaims: sub from user info endpoint does not match sub in id_token',
                                ),
                                Promise.reject(
                                  new Error(
                                    'sub from user info endpoint does not match sub in id_token',
                                  ),
                                ))
                              : ((t.profile = r._mergeClaims(t.profile, e)),
                                i.Log.debug(
                                  'ResponseValidator._processClaims: user info claims received, updated profile:',
                                  t.profile,
                                ),
                                t)
                          );
                        })
                      );
                    i.Log.debug('ResponseValidator._processClaims: not loading user info');
                  } else
                    i.Log.debug(
                      'ResponseValidator._processClaims: response is not OIDC, not processing claims',
                    );
                  return Promise.resolve(t);
                }),
                (e.prototype._mergeClaims = function (e, t) {
                  var r = Object.assign({}, e);
                  for (var i in t) {
                    var o = t[i];
                    Array.isArray(o) || (o = [o]);
                    for (var s = 0; s < o.length; s++) {
                      var a = o[s];
                      r[i]
                        ? Array.isArray(r[i])
                          ? r[i].indexOf(a) < 0 && r[i].push(a)
                          : r[i] !== a &&
                            ('object' === (void 0 === a ? 'undefined' : n(a)) &&
                            this._settings.mergeClaims
                              ? (r[i] = this._mergeClaims(r[i], a))
                              : (r[i] = [r[i], a]))
                        : (r[i] = a);
                    }
                  }
                  return r;
                }),
                (e.prototype._filterProtocolClaims = function (e) {
                  i.Log.debug('ResponseValidator._filterProtocolClaims, incoming claims:', e);
                  var t = Object.assign({}, e);
                  return (
                    this._settings._filterProtocolClaims
                      ? (l.forEach(function (e) {
                          delete t[e];
                        }),
                        i.Log.debug(
                          'ResponseValidator._filterProtocolClaims: protocol claims filtered',
                          t,
                        ))
                      : i.Log.debug(
                          'ResponseValidator._filterProtocolClaims: protocol claims not filtered',
                        ),
                    t
                  );
                }),
                (e.prototype._validateTokens = function (e, t) {
                  return t.code
                    ? (i.Log.debug('ResponseValidator._validateTokens: Validating code'),
                      this._processCode(e, t))
                    : t.id_token
                    ? t.access_token
                      ? (i.Log.debug(
                          'ResponseValidator._validateTokens: Validating id_token and access_token',
                        ),
                        this._validateIdTokenAndAccessToken(e, t))
                      : (i.Log.debug('ResponseValidator._validateTokens: Validating id_token'),
                        this._validateIdToken(e, t))
                    : (i.Log.debug(
                        'ResponseValidator._validateTokens: No code to process or id_token to validate',
                      ),
                      Promise.resolve(t));
                }),
                (e.prototype._processCode = function (e, t) {
                  var r = this,
                    o = {
                      client_id: e.client_id,
                      client_secret: e.client_secret,
                      code: t.code,
                      redirect_uri: e.redirect_uri,
                      code_verifier: e.code_verifier,
                    };
                  return (
                    e.extraTokenParams &&
                      'object' === n(e.extraTokenParams) &&
                      Object.assign(o, e.extraTokenParams),
                    this._tokenClient.exchangeCode(o).then(function (n) {
                      for (var o in n) t[o] = n[o];
                      return t.id_token
                        ? (i.Log.debug(
                            'ResponseValidator._processCode: token response successful, processing id_token',
                          ),
                          r._validateIdTokenAttributes(e, t))
                        : (i.Log.debug(
                            'ResponseValidator._processCode: token response successful, returning response',
                          ),
                          t);
                    })
                  );
                }),
                (e.prototype._validateIdTokenAttributes = function (e, t) {
                  var r = this;
                  return this._metadataService.getIssuer().then(function (n) {
                    var o = e.client_id,
                      s = r._settings.clockSkew;
                    return (
                      i.Log.debug(
                        'ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ',
                        s,
                      ),
                      r._settings.getEpochTime().then(function (a) {
                        return r._joseUtil
                          .validateJwtAttributes(t.id_token, n, o, s, a)
                          .then(function (r) {
                            return e.nonce && e.nonce !== r.nonce
                              ? (i.Log.error(
                                  'ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token',
                                ),
                                Promise.reject(new Error('Invalid nonce in id_token')))
                              : r.sub
                              ? ((t.profile = r), t)
                              : (i.Log.error(
                                  'ResponseValidator._validateIdTokenAttributes: No sub present in id_token',
                                ),
                                Promise.reject(new Error('No sub present in id_token')));
                          });
                      })
                    );
                  });
                }),
                (e.prototype._validateIdTokenAndAccessToken = function (e, t) {
                  var r = this;
                  return this._validateIdToken(e, t).then(function (e) {
                    return r._validateAccessToken(e);
                  });
                }),
                (e.prototype._getSigningKeyForJwt = function (e) {
                  var t = this;
                  return this._metadataService.getSigningKeys().then(function (r) {
                    var n = e.header.kid;
                    if (!r)
                      return (
                        i.Log.error(
                          'ResponseValidator._validateIdToken: No signing keys from metadata',
                        ),
                        Promise.reject(new Error('No signing keys from metadata'))
                      );
                    i.Log.debug('ResponseValidator._validateIdToken: Received signing keys');
                    var o = void 0;
                    if (n)
                      o = r.filter(function (e) {
                        return e.kid === n;
                      })[0];
                    else {
                      if ((r = t._filterByAlg(r, e.header.alg)).length > 1)
                        return (
                          i.Log.error(
                            'ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata',
                          ),
                          Promise.reject(
                            new Error(
                              'No kid found in id_token and more than one key found in metadata',
                            ),
                          )
                        );
                      o = r[0];
                    }
                    return Promise.resolve(o);
                  });
                }),
                (e.prototype._getSigningKeyForJwtWithSingleRetry = function (e) {
                  var t = this;
                  return this._getSigningKeyForJwt(e).then(function (r) {
                    return r
                      ? Promise.resolve(r)
                      : (t._metadataService.resetSigningKeys(), t._getSigningKeyForJwt(e));
                  });
                }),
                (e.prototype._validateIdToken = function (e, t) {
                  var r = this;
                  if (!e.nonce)
                    return (
                      i.Log.error('ResponseValidator._validateIdToken: No nonce on state'),
                      Promise.reject(new Error('No nonce on state'))
                    );
                  var n = this._joseUtil.parseJwt(t.id_token);
                  return n && n.header && n.payload
                    ? e.nonce !== n.payload.nonce
                      ? (i.Log.error(
                          'ResponseValidator._validateIdToken: Invalid nonce in id_token',
                        ),
                        Promise.reject(new Error('Invalid nonce in id_token')))
                      : this._metadataService.getIssuer().then(function (o) {
                          return (
                            i.Log.debug('ResponseValidator._validateIdToken: Received issuer'),
                            r._getSigningKeyForJwtWithSingleRetry(n).then(function (s) {
                              if (!s)
                                return (
                                  i.Log.error(
                                    'ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys',
                                  ),
                                  Promise.reject(
                                    new Error('No key matching kid or alg found in signing keys'),
                                  )
                                );
                              var a = e.client_id,
                                u = r._settings.clockSkew;
                              return (
                                i.Log.debug(
                                  'ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ',
                                  u,
                                ),
                                r._joseUtil.validateJwt(t.id_token, s, o, a, u).then(function () {
                                  return (
                                    i.Log.debug(
                                      'ResponseValidator._validateIdToken: JWT validation successful',
                                    ),
                                    n.payload.sub
                                      ? ((t.profile = n.payload), t)
                                      : (i.Log.error(
                                          'ResponseValidator._validateIdToken: No sub present in id_token',
                                        ),
                                        Promise.reject(new Error('No sub present in id_token')))
                                  );
                                })
                              );
                            })
                          );
                        })
                    : (i.Log.error(
                        'ResponseValidator._validateIdToken: Failed to parse id_token',
                        n,
                      ),
                      Promise.reject(new Error('Failed to parse id_token')));
                }),
                (e.prototype._filterByAlg = function (e, t) {
                  var r = null;
                  if (t.startsWith('RS')) r = 'RSA';
                  else if (t.startsWith('PS')) r = 'PS';
                  else {
                    if (!t.startsWith('ES'))
                      return (
                        i.Log.debug('ResponseValidator._filterByAlg: alg not supported: ', t), []
                      );
                    r = 'EC';
                  }
                  return (
                    i.Log.debug(
                      'ResponseValidator._filterByAlg: Looking for keys that match kty: ',
                      r,
                    ),
                    (e = e.filter(function (e) {
                      return e.kty === r;
                    })),
                    i.Log.debug(
                      'ResponseValidator._filterByAlg: Number of keys that match kty: ',
                      r,
                      e.length,
                    ),
                    e
                  );
                }),
                (e.prototype._validateAccessToken = function (e) {
                  if (!e.profile)
                    return (
                      i.Log.error(
                        'ResponseValidator._validateAccessToken: No profile loaded from id_token',
                      ),
                      Promise.reject(new Error('No profile loaded from id_token'))
                    );
                  if (!e.profile.at_hash)
                    return (
                      i.Log.error('ResponseValidator._validateAccessToken: No at_hash in id_token'),
                      Promise.reject(new Error('No at_hash in id_token'))
                    );
                  if (!e.id_token)
                    return (
                      i.Log.error('ResponseValidator._validateAccessToken: No id_token'),
                      Promise.reject(new Error('No id_token'))
                    );
                  var t = this._joseUtil.parseJwt(e.id_token);
                  if (!t || !t.header)
                    return (
                      i.Log.error(
                        'ResponseValidator._validateAccessToken: Failed to parse id_token',
                        t,
                      ),
                      Promise.reject(new Error('Failed to parse id_token'))
                    );
                  var r = t.header.alg;
                  if (!r || 5 !== r.length)
                    return (
                      i.Log.error('ResponseValidator._validateAccessToken: Unsupported alg:', r),
                      Promise.reject(new Error('Unsupported alg: ' + r))
                    );
                  var n = r.substr(2, 3);
                  if (!n)
                    return (
                      i.Log.error('ResponseValidator._validateAccessToken: Unsupported alg:', r, n),
                      Promise.reject(new Error('Unsupported alg: ' + r))
                    );
                  if (256 !== (n = parseInt(n)) && 384 !== n && 512 !== n)
                    return (
                      i.Log.error('ResponseValidator._validateAccessToken: Unsupported alg:', r, n),
                      Promise.reject(new Error('Unsupported alg: ' + r))
                    );
                  var o = 'sha' + n,
                    s = this._joseUtil.hashString(e.access_token, o);
                  if (!s)
                    return (
                      i.Log.error(
                        'ResponseValidator._validateAccessToken: access_token hash failed:',
                        o,
                      ),
                      Promise.reject(new Error('Failed to validate at_hash'))
                    );
                  var a = s.substr(0, s.length / 2),
                    u = this._joseUtil.hexToBase64Url(a);
                  return u !== e.profile.at_hash
                    ? (i.Log.error(
                        'ResponseValidator._validateAccessToken: Failed to validate at_hash',
                        u,
                        e.profile.at_hash,
                      ),
                      Promise.reject(new Error('Failed to validate at_hash')))
                    : (i.Log.debug('ResponseValidator._validateAccessToken: success'),
                      Promise.resolve(e));
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.UserInfoService = void 0);
            var n = r(7),
              i = r(2),
              o = r(0),
              s = r(4);
            function a(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.UserInfoService = (function () {
              function e(t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.JsonService,
                  u =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : i.MetadataService,
                  c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.JoseUtil;
                if ((a(this, e), !t))
                  throw (
                    (o.Log.error('UserInfoService.ctor: No settings passed'), new Error('settings'))
                  );
                (this._settings = t),
                  (this._jsonService = new r(void 0, void 0, this._getClaimsFromJwt.bind(this))),
                  (this._metadataService = new u(this._settings)),
                  (this._joseUtil = c);
              }
              return (
                (e.prototype.getClaims = function (e) {
                  var t = this;
                  return e
                    ? this._metadataService.getUserInfoEndpoint().then(function (r) {
                        return (
                          o.Log.debug('UserInfoService.getClaims: received userinfo url', r),
                          t._jsonService.getJson(r, e).then(function (e) {
                            return o.Log.debug('UserInfoService.getClaims: claims received', e), e;
                          })
                        );
                      })
                    : (o.Log.error('UserInfoService.getClaims: No token passed'),
                      Promise.reject(new Error('A token is required')));
                }),
                (e.prototype._getClaimsFromJwt = function (e) {
                  var t = this;
                  try {
                    var r = this._joseUtil.parseJwt(e.responseText);
                    if (!r || !r.header || !r.payload)
                      return (
                        o.Log.error('UserInfoService._getClaimsFromJwt: Failed to parse JWT', r),
                        Promise.reject(new Error('Failed to parse id_token'))
                      );
                    var n = r.header.kid,
                      i = void 0;
                    switch (this._settings.userInfoJwtIssuer) {
                      case 'OP':
                        i = this._metadataService.getIssuer();
                        break;
                      case 'ANY':
                        i = Promise.resolve(r.payload.iss);
                        break;
                      default:
                        i = Promise.resolve(this._settings.userInfoJwtIssuer);
                    }
                    return i.then(function (i) {
                      return (
                        o.Log.debug('UserInfoService._getClaimsFromJwt: Received issuer:' + i),
                        t._metadataService.getSigningKeys().then(function (s) {
                          if (!s)
                            return (
                              o.Log.error(
                                'UserInfoService._getClaimsFromJwt: No signing keys from metadata',
                              ),
                              Promise.reject(new Error('No signing keys from metadata'))
                            );
                          o.Log.debug('UserInfoService._getClaimsFromJwt: Received signing keys');
                          var a = void 0;
                          if (n)
                            a = s.filter(function (e) {
                              return e.kid === n;
                            })[0];
                          else {
                            if ((s = t._filterByAlg(s, r.header.alg)).length > 1)
                              return (
                                o.Log.error(
                                  'UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata',
                                ),
                                Promise.reject(
                                  new Error(
                                    'No kid found in id_token and more than one key found in metadata',
                                  ),
                                )
                              );
                            a = s[0];
                          }
                          if (!a)
                            return (
                              o.Log.error(
                                'UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys',
                              ),
                              Promise.reject(
                                new Error('No key matching kid or alg found in signing keys'),
                              )
                            );
                          var u = t._settings.client_id,
                            c = t._settings.clockSkew;
                          return (
                            o.Log.debug(
                              'UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ',
                              c,
                            ),
                            t._joseUtil
                              .validateJwt(e.responseText, a, i, u, c, void 0, !0)
                              .then(function () {
                                return (
                                  o.Log.debug(
                                    'UserInfoService._getClaimsFromJwt: JWT validation successful',
                                  ),
                                  r.payload
                                );
                              })
                          );
                        })
                      );
                    });
                  } catch (s) {
                    return (
                      o.Log.error(
                        'UserInfoService._getClaimsFromJwt: Error parsing JWT response',
                        s.message,
                      ),
                      void reject(s)
                    );
                  }
                }),
                (e.prototype._filterByAlg = function (e, t) {
                  var r = null;
                  if (t.startsWith('RS')) r = 'RSA';
                  else if (t.startsWith('PS')) r = 'PS';
                  else {
                    if (!t.startsWith('ES'))
                      return (
                        o.Log.debug('UserInfoService._filterByAlg: alg not supported: ', t), []
                      );
                    r = 'EC';
                  }
                  return (
                    o.Log.debug(
                      'UserInfoService._filterByAlg: Looking for keys that match kty: ',
                      r,
                    ),
                    (e = e.filter(function (e) {
                      return e.kty === r;
                    })),
                    o.Log.debug(
                      'UserInfoService._filterByAlg: Number of keys that match kty: ',
                      r,
                      e.length,
                    ),
                    e
                  );
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.AllowedSigningAlgs =
                t.b64tohex =
                t.hextob64u =
                t.crypto =
                t.X509 =
                t.KeyUtil =
                t.jws =
                  void 0);
            var n = r(27);
            (t.jws = n.jws),
              (t.KeyUtil = n.KEYUTIL),
              (t.X509 = n.X509),
              (t.crypto = n.crypto),
              (t.hextob64u = n.hextob64u),
              (t.b64tohex = n.b64tohex),
              (t.AllowedSigningAlgs = [
                'RS256',
                'RS384',
                'RS512',
                'PS256',
                'PS384',
                'PS512',
                'ES256',
                'ES384',
                'ES512',
              ]);
          },
          function (e, t, r) {
            (function (e) {
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r =
                  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      },
                n = !1,
                i = {};
              /*!
          Copyright (c) 2011, Yahoo! Inc. All rights reserved.
          Code licensed under the BSD License:
          http://developer.yahoo.com/yui/license.html
          version: 2.9.0
          */ if (void 0 === o) var o = {};
              o.lang = {
                extend: function (e, t, r) {
                  if (!t || !e)
                    throw new Error(
                      'YAHOO.lang.extend failed, please check that all dependencies are included.',
                    );
                  var i = function () {};
                  if (
                    ((i.prototype = t.prototype),
                    (e.prototype = new i()),
                    (e.prototype.constructor = e),
                    (e.superclass = t.prototype),
                    t.prototype.constructor == Object.prototype.constructor &&
                      (t.prototype.constructor = t),
                    r)
                  ) {
                    var o;
                    for (o in r) e.prototype[o] = r[o];
                    var s = function () {},
                      a = ['toString', 'valueOf'];
                    try {
                      /MSIE/.test(n) &&
                        (s = function (e, t) {
                          for (o = 0; o < a.length; o += 1) {
                            var r = a[o],
                              n = t[r];
                            'function' == typeof n && n != Object.prototype[r] && (e[r] = n);
                          }
                        });
                    } catch (u) {}
                    s(e.prototype, r);
                  }
                },
              };
              /*! CryptoJS v3.1.2 core-fix.js-demo
               * code.google.com/p/crypto-js-demo
               * (c) 2009-2013 by Jeff Mott. All rights reserved.
               * code.google.com/p/crypto-js-demo/wiki/License
               * THIS IS FIX of 'core.js-demo' to fix Hmac issue.
               * https://code.google.com/p/crypto-js/issues/detail?id=84
               * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
               */
              var s,
                a,
                u,
                c,
                h,
                l,
                f,
                d,
                g,
                p,
                v,
                y,
                m,
                _,
                S,
                b =
                  b ||
                  ((s = Math),
                  (u = (a = {}).lib = {}),
                  (c = u.Base =
                    (function () {
                      function e() {}
                      return {
                        extend: function (t) {
                          e.prototype = this;
                          var r = new e();
                          return (
                            t && r.mixIn(t),
                            r.hasOwnProperty('init') ||
                              (r.init = function () {
                                r.$super.init.apply(this, arguments);
                              }),
                            (r.init.prototype = r),
                            (r.$super = this),
                            r
                          );
                        },
                        create: function () {
                          var e = this.extend();
                          return e.init.apply(e, arguments), e;
                        },
                        init: function () {},
                        mixIn: function (e) {
                          for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                          e.hasOwnProperty('toString') && (this.toString = e.toString);
                        },
                        clone: function () {
                          return this.init.prototype.extend(this);
                        },
                      };
                    })()),
                  (h = u.WordArray =
                    c.extend({
                      init: function (e, t) {
                        (e = this.words = e || []), (this.sigBytes = null != t ? t : 4 * e.length);
                      },
                      toString: function (e) {
                        return (e || f).stringify(this);
                      },
                      concat: function (e) {
                        var t = this.words,
                          r = e.words,
                          n = this.sigBytes,
                          i = e.sigBytes;
                        if ((this.clamp(), n % 4))
                          for (var o = 0; o < i; o++) {
                            var s = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                            t[(n + o) >>> 2] |= s << (24 - ((n + o) % 4) * 8);
                          }
                        else for (o = 0; o < i; o += 4) t[(n + o) >>> 2] = r[o >>> 2];
                        return (this.sigBytes += i), this;
                      },
                      clamp: function () {
                        var e = this.words,
                          t = this.sigBytes;
                        (e[t >>> 2] &= 4294967295 << (32 - (t % 4) * 8)),
                          (e.length = s.ceil(t / 4));
                      },
                      clone: function () {
                        var e = c.clone.call(this);
                        return (e.words = this.words.slice(0)), e;
                      },
                      random: function (e) {
                        for (var t = [], r = 0; r < e; r += 4)
                          t.push((4294967296 * s.random()) | 0);
                        return new h.init(t, e);
                      },
                    })),
                  (l = a.enc = {}),
                  (f = l.Hex =
                    {
                      stringify: function (e) {
                        for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                          var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                          n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
                        }
                        return n.join('');
                      },
                      parse: function (e) {
                        for (var t = e.length, r = [], n = 0; n < t; n += 2)
                          r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << (24 - (n % 8) * 4);
                        return new h.init(r, t / 2);
                      },
                    }),
                  (d = l.Latin1 =
                    {
                      stringify: function (e) {
                        for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                          var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                          n.push(String.fromCharCode(o));
                        }
                        return n.join('');
                      },
                      parse: function (e) {
                        for (var t = e.length, r = [], n = 0; n < t; n++)
                          r[n >>> 2] |= (255 & e.charCodeAt(n)) << (24 - (n % 4) * 8);
                        return new h.init(r, t);
                      },
                    }),
                  (g = l.Utf8 =
                    {
                      stringify: function (e) {
                        try {
                          return decodeURIComponent(escape(d.stringify(e)));
                        } catch (t) {
                          throw new Error('Malformed UTF-8 data');
                        }
                      },
                      parse: function (e) {
                        return d.parse(unescape(encodeURIComponent(e)));
                      },
                    }),
                  (p = u.BufferedBlockAlgorithm =
                    c.extend({
                      reset: function () {
                        (this._data = new h.init()), (this._nDataBytes = 0);
                      },
                      _append: function (e) {
                        'string' == typeof e && (e = g.parse(e)),
                          this._data.concat(e),
                          (this._nDataBytes += e.sigBytes);
                      },
                      _process: function (e) {
                        var t = this._data,
                          r = t.words,
                          n = t.sigBytes,
                          i = this.blockSize,
                          o = n / (4 * i),
                          a = (o = e ? s.ceil(o) : s.max((0 | o) - this._minBufferSize, 0)) * i,
                          u = s.min(4 * a, n);
                        if (a) {
                          for (var c = 0; c < a; c += i) this._doProcessBlock(r, c);
                          var l = r.splice(0, a);
                          t.sigBytes -= u;
                        }
                        return new h.init(l, u);
                      },
                      clone: function () {
                        var e = c.clone.call(this);
                        return (e._data = this._data.clone()), e;
                      },
                      _minBufferSize: 0,
                    })),
                  (u.Hasher = p.extend({
                    cfg: c.extend(),
                    init: function (e) {
                      (this.cfg = this.cfg.extend(e)), this.reset();
                    },
                    reset: function () {
                      p.reset.call(this), this._doReset();
                    },
                    update: function (e) {
                      return this._append(e), this._process(), this;
                    },
                    finalize: function (e) {
                      return e && this._append(e), this._doFinalize();
                    },
                    blockSize: 16,
                    _createHelper: function (e) {
                      return function (t, r) {
                        return new e.init(r).finalize(t);
                      };
                    },
                    _createHmacHelper: function (e) {
                      return function (t, r) {
                        return new v.HMAC.init(e, r).finalize(t);
                      };
                    },
                  })),
                  (v = a.algo = {}),
                  a);
              (m = (y = b).lib),
                (_ = m.Base),
                (S = m.WordArray),
                ((y = y.x64 = {}).Word = _.extend({
                  init: function (e, t) {
                    (this.high = e), (this.low = t);
                  },
                })),
                (y.WordArray = _.extend({
                  init: function (e, t) {
                    (e = this.words = e || []), (this.sigBytes = null != t ? t : 8 * e.length);
                  },
                  toX32: function () {
                    for (var e = this.words, t = e.length, r = [], n = 0; n < t; n++) {
                      var i = e[n];
                      r.push(i.high), r.push(i.low);
                    }
                    return S.create(r, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var e = _.clone.call(this),
                        t = (e.words = this.words.slice(0)),
                        r = t.length,
                        n = 0;
                      n < r;
                      n++
                    )
                      t[n] = t[n].clone();
                    return e;
                  },
                })),
                (function () {
                  var e = b,
                    t = e.lib.WordArray;
                  e.enc.Base64 = {
                    stringify: function (e) {
                      var t = e.words,
                        r = e.sigBytes,
                        n = this._map;
                      e.clamp(), (e = []);
                      for (var i = 0; i < r; i += 3)
                        for (
                          var o =
                              (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                              (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) << 8) |
                              ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                            s = 0;
                          4 > s && i + 0.75 * s < r;
                          s++
                        )
                          e.push(n.charAt((o >>> (6 * (3 - s))) & 63));
                      if ((t = n.charAt(64))) for (; e.length % 4; ) e.push(t);
                      return e.join('');
                    },
                    parse: function (e) {
                      var r = e.length,
                        n = this._map;
                      (i = n.charAt(64)) && -1 != (i = e.indexOf(i)) && (r = i);
                      for (var i = [], o = 0, s = 0; s < r; s++)
                        if (s % 4) {
                          var a = n.indexOf(e.charAt(s - 1)) << ((s % 4) * 2),
                            u = n.indexOf(e.charAt(s)) >>> (6 - (s % 4) * 2);
                          (i[o >>> 2] |= (a | u) << (24 - (o % 4) * 8)), o++;
                        }
                      return t.create(i, o);
                    },
                    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                  };
                })(),
                (function (e) {
                  for (
                    var t = b,
                      r = (i = t.lib).WordArray,
                      n = i.Hasher,
                      i = t.algo,
                      o = [],
                      s = [],
                      a = function (e) {
                        return (4294967296 * (e - (0 | e))) | 0;
                      },
                      u = 2,
                      c = 0;
                    64 > c;

                  ) {
                    var h;
                    e: {
                      h = u;
                      for (var l = e.sqrt(h), f = 2; f <= l; f++)
                        if (!(h % f)) {
                          h = !1;
                          break e;
                        }
                      h = !0;
                    }
                    h && (8 > c && (o[c] = a(e.pow(u, 0.5))), (s[c] = a(e.pow(u, 1 / 3))), c++),
                      u++;
                  }
                  var d = [];
                  (i = i.SHA256 =
                    n.extend({
                      _doReset: function () {
                        this._hash = new r.init(o.slice(0));
                      },
                      _doProcessBlock: function (e, t) {
                        for (
                          var r = this._hash.words,
                            n = r[0],
                            i = r[1],
                            o = r[2],
                            a = r[3],
                            u = r[4],
                            c = r[5],
                            h = r[6],
                            l = r[7],
                            f = 0;
                          64 > f;
                          f++
                        ) {
                          if (16 > f) d[f] = 0 | e[t + f];
                          else {
                            var g = d[f - 15],
                              p = d[f - 2];
                            d[f] =
                              (((g << 25) | (g >>> 7)) ^ ((g << 14) | (g >>> 18)) ^ (g >>> 3)) +
                              d[f - 7] +
                              (((p << 15) | (p >>> 17)) ^ ((p << 13) | (p >>> 19)) ^ (p >>> 10)) +
                              d[f - 16];
                          }
                          (g =
                            l +
                            (((u << 26) | (u >>> 6)) ^
                              ((u << 21) | (u >>> 11)) ^
                              ((u << 7) | (u >>> 25))) +
                            ((u & c) ^ (~u & h)) +
                            s[f] +
                            d[f]),
                            (p =
                              (((n << 30) | (n >>> 2)) ^
                                ((n << 19) | (n >>> 13)) ^
                                ((n << 10) | (n >>> 22))) +
                              ((n & i) ^ (n & o) ^ (i & o))),
                            (l = h),
                            (h = c),
                            (c = u),
                            (u = (a + g) | 0),
                            (a = o),
                            (o = i),
                            (i = n),
                            (n = (g + p) | 0);
                        }
                        (r[0] = (r[0] + n) | 0),
                          (r[1] = (r[1] + i) | 0),
                          (r[2] = (r[2] + o) | 0),
                          (r[3] = (r[3] + a) | 0),
                          (r[4] = (r[4] + u) | 0),
                          (r[5] = (r[5] + c) | 0),
                          (r[6] = (r[6] + h) | 0),
                          (r[7] = (r[7] + l) | 0);
                      },
                      _doFinalize: function () {
                        var t = this._data,
                          r = t.words,
                          n = 8 * this._nDataBytes,
                          i = 8 * t.sigBytes;
                        return (
                          (r[i >>> 5] |= 128 << (24 - (i % 32))),
                          (r[14 + (((i + 64) >>> 9) << 4)] = e.floor(n / 4294967296)),
                          (r[15 + (((i + 64) >>> 9) << 4)] = n),
                          (t.sigBytes = 4 * r.length),
                          this._process(),
                          this._hash
                        );
                      },
                      clone: function () {
                        var e = n.clone.call(this);
                        return (e._hash = this._hash.clone()), e;
                      },
                    })),
                    (t.SHA256 = n._createHelper(i)),
                    (t.HmacSHA256 = n._createHmacHelper(i));
                })(Math),
                (function () {
                  function e() {
                    return n.create.apply(n, arguments);
                  }
                  for (
                    var t = b,
                      r = t.lib.Hasher,
                      n = (o = t.x64).Word,
                      i = o.WordArray,
                      o = t.algo,
                      s = [
                        e(1116352408, 3609767458),
                        e(1899447441, 602891725),
                        e(3049323471, 3964484399),
                        e(3921009573, 2173295548),
                        e(961987163, 4081628472),
                        e(1508970993, 3053834265),
                        e(2453635748, 2937671579),
                        e(2870763221, 3664609560),
                        e(3624381080, 2734883394),
                        e(310598401, 1164996542),
                        e(607225278, 1323610764),
                        e(1426881987, 3590304994),
                        e(1925078388, 4068182383),
                        e(2162078206, 991336113),
                        e(2614888103, 633803317),
                        e(3248222580, 3479774868),
                        e(3835390401, 2666613458),
                        e(4022224774, 944711139),
                        e(264347078, 2341262773),
                        e(604807628, 2007800933),
                        e(770255983, 1495990901),
                        e(1249150122, 1856431235),
                        e(1555081692, 3175218132),
                        e(1996064986, 2198950837),
                        e(2554220882, 3999719339),
                        e(2821834349, 766784016),
                        e(2952996808, 2566594879),
                        e(3210313671, 3203337956),
                        e(3336571891, 1034457026),
                        e(3584528711, 2466948901),
                        e(113926993, 3758326383),
                        e(338241895, 168717936),
                        e(666307205, 1188179964),
                        e(773529912, 1546045734),
                        e(1294757372, 1522805485),
                        e(1396182291, 2643833823),
                        e(1695183700, 2343527390),
                        e(1986661051, 1014477480),
                        e(2177026350, 1206759142),
                        e(2456956037, 344077627),
                        e(2730485921, 1290863460),
                        e(2820302411, 3158454273),
                        e(3259730800, 3505952657),
                        e(3345764771, 106217008),
                        e(3516065817, 3606008344),
                        e(3600352804, 1432725776),
                        e(4094571909, 1467031594),
                        e(275423344, 851169720),
                        e(430227734, 3100823752),
                        e(506948616, 1363258195),
                        e(659060556, 3750685593),
                        e(883997877, 3785050280),
                        e(958139571, 3318307427),
                        e(1322822218, 3812723403),
                        e(1537002063, 2003034995),
                        e(1747873779, 3602036899),
                        e(1955562222, 1575990012),
                        e(2024104815, 1125592928),
                        e(2227730452, 2716904306),
                        e(2361852424, 442776044),
                        e(2428436474, 593698344),
                        e(2756734187, 3733110249),
                        e(3204031479, 2999351573),
                        e(3329325298, 3815920427),
                        e(3391569614, 3928383900),
                        e(3515267271, 566280711),
                        e(3940187606, 3454069534),
                        e(4118630271, 4000239992),
                        e(116418474, 1914138554),
                        e(174292421, 2731055270),
                        e(289380356, 3203993006),
                        e(460393269, 320620315),
                        e(685471733, 587496836),
                        e(852142971, 1086792851),
                        e(1017036298, 365543100),
                        e(1126000580, 2618297676),
                        e(1288033470, 3409855158),
                        e(1501505948, 4234509866),
                        e(1607167915, 987167468),
                        e(1816402316, 1246189591),
                      ],
                      a = [],
                      u = 0;
                    80 > u;
                    u++
                  )
                    a[u] = e();
                  (o = o.SHA512 =
                    r.extend({
                      _doReset: function () {
                        this._hash = new i.init([
                          new n.init(1779033703, 4089235720),
                          new n.init(3144134277, 2227873595),
                          new n.init(1013904242, 4271175723),
                          new n.init(2773480762, 1595750129),
                          new n.init(1359893119, 2917565137),
                          new n.init(2600822924, 725511199),
                          new n.init(528734635, 4215389547),
                          new n.init(1541459225, 327033209),
                        ]);
                      },
                      _doProcessBlock: function (e, t) {
                        for (
                          var r = (l = this._hash.words)[0],
                            n = l[1],
                            i = l[2],
                            o = l[3],
                            u = l[4],
                            c = l[5],
                            h = l[6],
                            l = l[7],
                            f = r.high,
                            d = r.low,
                            g = n.high,
                            p = n.low,
                            v = i.high,
                            y = i.low,
                            m = o.high,
                            _ = o.low,
                            S = u.high,
                            b = u.low,
                            w = c.high,
                            F = c.low,
                            E = h.high,
                            x = h.low,
                            k = l.high,
                            A = l.low,
                            P = f,
                            C = d,
                            T = g,
                            I = p,
                            R = v,
                            D = y,
                            L = m,
                            N = _,
                            U = S,
                            O = b,
                            B = w,
                            j = F,
                            M = E,
                            H = x,
                            V = k,
                            K = A,
                            q = 0;
                          80 > q;
                          q++
                        ) {
                          var J = a[q];
                          if (16 > q)
                            var W = (J.high = 0 | e[t + 2 * q]),
                              z = (J.low = 0 | e[t + 2 * q + 1]);
                          else {
                            W =
                              (((z = (W = a[q - 15]).high) >>> 1) | ((Y = W.low) << 31)) ^
                              ((z >>> 8) | (Y << 24)) ^
                              (z >>> 7);
                            var Y =
                                ((Y >>> 1) | (z << 31)) ^
                                ((Y >>> 8) | (z << 24)) ^
                                ((Y >>> 7) | (z << 25)),
                              G =
                                (((z = (G = a[q - 2]).high) >>> 19) | ((X = G.low) << 13)) ^
                                ((z << 3) | (X >>> 29)) ^
                                (z >>> 6),
                              X =
                                ((X >>> 19) | (z << 13)) ^
                                ((X << 3) | (z >>> 29)) ^
                                ((X >>> 6) | (z << 26)),
                              $ = (z = a[q - 7]).high,
                              Q = (Z = a[q - 16]).high,
                              Z = Z.low;
                            (W =
                              (W =
                                (W = W + $ + ((z = Y + z.low) >>> 0 < Y >>> 0 ? 1 : 0)) +
                                G +
                                ((z += X) >>> 0 < X >>> 0 ? 1 : 0)) +
                              Q +
                              ((z += Z) >>> 0 < Z >>> 0 ? 1 : 0)),
                              (J.high = W),
                              (J.low = z);
                          }
                          ($ = (U & B) ^ (~U & M)),
                            (Z = (O & j) ^ (~O & H)),
                            (J = (P & T) ^ (P & R) ^ (T & R));
                          var ee = (C & I) ^ (C & D) ^ (I & D),
                            te =
                              ((Y =
                                ((P >>> 28) | (C << 4)) ^
                                ((P << 30) | (C >>> 2)) ^
                                ((P << 25) | (C >>> 7))),
                              (G =
                                ((C >>> 28) | (P << 4)) ^
                                ((C << 30) | (P >>> 2)) ^
                                ((C << 25) | (P >>> 7))),
                              (X = s[q]).high),
                            re = X.low;
                          (Q =
                            V +
                            (((U >>> 14) | (O << 18)) ^
                              ((U >>> 18) | (O << 14)) ^
                              ((U << 23) | (O >>> 9))) +
                            ((X =
                              K +
                              (((O >>> 14) | (U << 18)) ^
                                ((O >>> 18) | (U << 14)) ^
                                ((O << 23) | (U >>> 9)))) >>>
                              0 <
                            K >>> 0
                              ? 1
                              : 0)),
                            (V = M),
                            (K = H),
                            (M = B),
                            (H = j),
                            (B = U),
                            (j = O),
                            (U =
                              (L +
                                (Q =
                                  (Q =
                                    (Q = Q + $ + ((X += Z) >>> 0 < Z >>> 0 ? 1 : 0)) +
                                    te +
                                    ((X += re) >>> 0 < re >>> 0 ? 1 : 0)) +
                                  W +
                                  ((X += z) >>> 0 < z >>> 0 ? 1 : 0)) +
                                ((O = (N + X) | 0) >>> 0 < N >>> 0 ? 1 : 0)) |
                              0),
                            (L = R),
                            (N = D),
                            (R = T),
                            (D = I),
                            (T = P),
                            (I = C),
                            (P =
                              (Q +
                                (J = Y + J + ((z = G + ee) >>> 0 < G >>> 0 ? 1 : 0)) +
                                ((C = (X + z) | 0) >>> 0 < X >>> 0 ? 1 : 0)) |
                              0);
                        }
                        (d = r.low = d + C),
                          (r.high = f + P + (d >>> 0 < C >>> 0 ? 1 : 0)),
                          (p = n.low = p + I),
                          (n.high = g + T + (p >>> 0 < I >>> 0 ? 1 : 0)),
                          (y = i.low = y + D),
                          (i.high = v + R + (y >>> 0 < D >>> 0 ? 1 : 0)),
                          (_ = o.low = _ + N),
                          (o.high = m + L + (_ >>> 0 < N >>> 0 ? 1 : 0)),
                          (b = u.low = b + O),
                          (u.high = S + U + (b >>> 0 < O >>> 0 ? 1 : 0)),
                          (F = c.low = F + j),
                          (c.high = w + B + (F >>> 0 < j >>> 0 ? 1 : 0)),
                          (x = h.low = x + H),
                          (h.high = E + M + (x >>> 0 < H >>> 0 ? 1 : 0)),
                          (A = l.low = A + K),
                          (l.high = k + V + (A >>> 0 < K >>> 0 ? 1 : 0));
                      },
                      _doFinalize: function () {
                        var e = this._data,
                          t = e.words,
                          r = 8 * this._nDataBytes,
                          n = 8 * e.sigBytes;
                        return (
                          (t[n >>> 5] |= 128 << (24 - (n % 32))),
                          (t[30 + (((n + 128) >>> 10) << 5)] = Math.floor(r / 4294967296)),
                          (t[31 + (((n + 128) >>> 10) << 5)] = r),
                          (e.sigBytes = 4 * t.length),
                          this._process(),
                          this._hash.toX32()
                        );
                      },
                      clone: function () {
                        var e = r.clone.call(this);
                        return (e._hash = this._hash.clone()), e;
                      },
                      blockSize: 32,
                    })),
                    (t.SHA512 = r._createHelper(o)),
                    (t.HmacSHA512 = r._createHmacHelper(o));
                })(),
                (function () {
                  var e = b,
                    t = (i = e.x64).Word,
                    r = i.WordArray,
                    n = (i = e.algo).SHA512,
                    i = (i.SHA384 = n.extend({
                      _doReset: function () {
                        this._hash = new r.init([
                          new t.init(3418070365, 3238371032),
                          new t.init(1654270250, 914150663),
                          new t.init(2438529370, 812702999),
                          new t.init(355462360, 4144912697),
                          new t.init(1731405415, 4290775857),
                          new t.init(2394180231, 1750603025),
                          new t.init(3675008525, 1694076839),
                          new t.init(1203062813, 3204075428),
                        ]);
                      },
                      _doFinalize: function () {
                        var e = n._doFinalize.call(this);
                        return (e.sigBytes -= 16), e;
                      },
                    }));
                  (e.SHA384 = n._createHelper(i)), (e.HmacSHA384 = n._createHmacHelper(i));
                })();
              /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
               */
              var w = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
              function F(e) {
                var t,
                  r,
                  n = '';
                for (t = 0; t + 3 <= e.length; t += 3)
                  (r = parseInt(e.substring(t, t + 3), 16)),
                    (n += w.charAt(r >> 6) + w.charAt(63 & r));
                for (
                  t + 1 == e.length
                    ? ((r = parseInt(e.substring(t, t + 1), 16)), (n += w.charAt(r << 2)))
                    : t + 2 == e.length &&
                      ((r = parseInt(e.substring(t, t + 2), 16)),
                      (n += w.charAt(r >> 2) + w.charAt((3 & r) << 4)));
                  (3 & n.length) > 0;

                )
                  n += '=';
                return n;
              }
              function E(e) {
                var t,
                  r,
                  n,
                  i = '',
                  o = 0;
                for (t = 0; t < e.length && '=' != e.charAt(t); ++t)
                  (n = w.indexOf(e.charAt(t))) < 0 ||
                    (0 == o
                      ? ((i += I(n >> 2)), (r = 3 & n), (o = 1))
                      : 1 == o
                      ? ((i += I((r << 2) | (n >> 4))), (r = 15 & n), (o = 2))
                      : 2 == o
                      ? ((i += I(r)), (i += I(n >> 2)), (r = 3 & n), (o = 3))
                      : ((i += I((r << 2) | (n >> 4))), (i += I(15 & n)), (o = 0)));
                return 1 == o && (i += I(r << 2)), i;
              }
              function x(e) {
                var t,
                  r = E(e),
                  n = new Array();
                for (t = 0; 2 * t < r.length; ++t)
                  n[t] = parseInt(r.substring(2 * t, 2 * t + 2), 16);
                return n;
              }
              function k(e, t, r) {
                null != e &&
                  ('number' == typeof e
                    ? this.fromNumber(e, t, r)
                    : null == t && 'string' != typeof e
                    ? this.fromString(e, 256)
                    : this.fromString(e, t));
              }
              function A() {
                return new k(null);
              }
              (k.prototype.am = function (e, t, r, n, i, o) {
                for (; --o >= 0; ) {
                  var s = t * this[e++] + r[n] + i;
                  (i = Math.floor(s / 67108864)), (r[n++] = 67108863 & s);
                }
                return i;
              }),
                (k.prototype.DB = 26),
                (k.prototype.DM = 67108863),
                (k.prototype.DV = 1 << 26),
                (k.prototype.FV = Math.pow(2, 52)),
                (k.prototype.F1 = 26),
                (k.prototype.F2 = 0);
              var P,
                C,
                T = new Array();
              for (P = '0'.charCodeAt(0), C = 0; C <= 9; ++C) T[P++] = C;
              for (P = 'a'.charCodeAt(0), C = 10; C < 36; ++C) T[P++] = C;
              for (P = 'A'.charCodeAt(0), C = 10; C < 36; ++C) T[P++] = C;
              function I(e) {
                return '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(e);
              }
              function R(e, t) {
                var r = T[e.charCodeAt(t)];
                return null == r ? -1 : r;
              }
              function D(e) {
                var t = A();
                return t.fromInt(e), t;
              }
              function L(e) {
                var t,
                  r = 1;
                return (
                  0 != (t = e >>> 16) && ((e = t), (r += 16)),
                  0 != (t = e >> 8) && ((e = t), (r += 8)),
                  0 != (t = e >> 4) && ((e = t), (r += 4)),
                  0 != (t = e >> 2) && ((e = t), (r += 2)),
                  0 != (t = e >> 1) && ((e = t), (r += 1)),
                  r
                );
              }
              function N(e) {
                this.m = e;
              }
              function U(e) {
                (this.m = e),
                  (this.mp = e.invDigit()),
                  (this.mpl = 32767 & this.mp),
                  (this.mph = this.mp >> 15),
                  (this.um = (1 << (e.DB - 15)) - 1),
                  (this.mt2 = 2 * e.t);
              }
              function O(e, t) {
                return e & t;
              }
              function B(e, t) {
                return e | t;
              }
              function j(e, t) {
                return e ^ t;
              }
              function M(e, t) {
                return e & ~t;
              }
              function H(e) {
                if (0 == e) return -1;
                var t = 0;
                return (
                  0 == (65535 & e) && ((e >>= 16), (t += 16)),
                  0 == (255 & e) && ((e >>= 8), (t += 8)),
                  0 == (15 & e) && ((e >>= 4), (t += 4)),
                  0 == (3 & e) && ((e >>= 2), (t += 2)),
                  0 == (1 & e) && ++t,
                  t
                );
              }
              function V(e) {
                for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
                return t;
              }
              function K() {}
              function q(e) {
                return e;
              }
              function J(e) {
                (this.r2 = A()),
                  (this.q3 = A()),
                  k.ONE.dlShiftTo(2 * e.t, this.r2),
                  (this.mu = this.r2.divide(e)),
                  (this.m = e);
              }
              (N.prototype.convert = function (e) {
                return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
              }),
                (N.prototype.revert = function (e) {
                  return e;
                }),
                (N.prototype.reduce = function (e) {
                  e.divRemTo(this.m, null, e);
                }),
                (N.prototype.mulTo = function (e, t, r) {
                  e.multiplyTo(t, r), this.reduce(r);
                }),
                (N.prototype.sqrTo = function (e, t) {
                  e.squareTo(t), this.reduce(t);
                }),
                (U.prototype.convert = function (e) {
                  var t = A();
                  return (
                    e.abs().dlShiftTo(this.m.t, t),
                    t.divRemTo(this.m, null, t),
                    e.s < 0 && t.compareTo(k.ZERO) > 0 && this.m.subTo(t, t),
                    t
                  );
                }),
                (U.prototype.revert = function (e) {
                  var t = A();
                  return e.copyTo(t), this.reduce(t), t;
                }),
                (U.prototype.reduce = function (e) {
                  for (; e.t <= this.mt2; ) e[e.t++] = 0;
                  for (var t = 0; t < this.m.t; ++t) {
                    var r = 32767 & e[t],
                      n =
                        (r * this.mpl +
                          (((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
                        e.DM;
                    for (
                      e[(r = t + this.m.t)] += this.m.am(0, n, e, t, 0, this.m.t);
                      e[r] >= e.DV;

                    )
                      (e[r] -= e.DV), e[++r]++;
                  }
                  e.clamp(),
                    e.drShiftTo(this.m.t, e),
                    e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
                }),
                (U.prototype.mulTo = function (e, t, r) {
                  e.multiplyTo(t, r), this.reduce(r);
                }),
                (U.prototype.sqrTo = function (e, t) {
                  e.squareTo(t), this.reduce(t);
                }),
                (k.prototype.copyTo = function (e) {
                  for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
                  (e.t = this.t), (e.s = this.s);
                }),
                (k.prototype.fromInt = function (e) {
                  (this.t = 1),
                    (this.s = e < 0 ? -1 : 0),
                    e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + this.DV) : (this.t = 0);
                }),
                (k.prototype.fromString = function (e, t) {
                  var r;
                  if (16 == t) r = 4;
                  else if (8 == t) r = 3;
                  else if (256 == t) r = 8;
                  else if (2 == t) r = 1;
                  else if (32 == t) r = 5;
                  else {
                    if (4 != t) return void this.fromRadix(e, t);
                    r = 2;
                  }
                  (this.t = 0), (this.s = 0);
                  for (var n = e.length, i = !1, o = 0; --n >= 0; ) {
                    var s = 8 == r ? 255 & e[n] : R(e, n);
                    s < 0
                      ? '-' == e.charAt(n) && (i = !0)
                      : ((i = !1),
                        0 == o
                          ? (this[this.t++] = s)
                          : o + r > this.DB
                          ? ((this[this.t - 1] |= (s & ((1 << (this.DB - o)) - 1)) << o),
                            (this[this.t++] = s >> (this.DB - o)))
                          : (this[this.t - 1] |= s << o),
                        (o += r) >= this.DB && (o -= this.DB));
                  }
                  8 == r &&
                    0 != (128 & e[0]) &&
                    ((this.s = -1), o > 0 && (this[this.t - 1] |= ((1 << (this.DB - o)) - 1) << o)),
                    this.clamp(),
                    i && k.ZERO.subTo(this, this);
                }),
                (k.prototype.clamp = function () {
                  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; ) --this.t;
                }),
                (k.prototype.dlShiftTo = function (e, t) {
                  var r;
                  for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
                  for (r = e - 1; r >= 0; --r) t[r] = 0;
                  (t.t = this.t + e), (t.s = this.s);
                }),
                (k.prototype.drShiftTo = function (e, t) {
                  for (var r = e; r < this.t; ++r) t[r - e] = this[r];
                  (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
                }),
                (k.prototype.lShiftTo = function (e, t) {
                  var r,
                    n = e % this.DB,
                    i = this.DB - n,
                    o = (1 << i) - 1,
                    s = Math.floor(e / this.DB),
                    a = (this.s << n) & this.DM;
                  for (r = this.t - 1; r >= 0; --r)
                    (t[r + s + 1] = (this[r] >> i) | a), (a = (this[r] & o) << n);
                  for (r = s - 1; r >= 0; --r) t[r] = 0;
                  (t[s] = a), (t.t = this.t + s + 1), (t.s = this.s), t.clamp();
                }),
                (k.prototype.rShiftTo = function (e, t) {
                  t.s = this.s;
                  var r = Math.floor(e / this.DB);
                  if (r >= this.t) t.t = 0;
                  else {
                    var n = e % this.DB,
                      i = this.DB - n,
                      o = (1 << n) - 1;
                    t[0] = this[r] >> n;
                    for (var s = r + 1; s < this.t; ++s)
                      (t[s - r - 1] |= (this[s] & o) << i), (t[s - r] = this[s] >> n);
                    n > 0 && (t[this.t - r - 1] |= (this.s & o) << i),
                      (t.t = this.t - r),
                      t.clamp();
                  }
                }),
                (k.prototype.subTo = function (e, t) {
                  for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
                    (n += this[r] - e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                  if (e.t < this.t) {
                    for (n -= e.s; r < this.t; )
                      (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                    n += this.s;
                  } else {
                    for (n += this.s; r < e.t; )
                      (n -= e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                    n -= e.s;
                  }
                  (t.s = n < 0 ? -1 : 0),
                    n < -1 ? (t[r++] = this.DV + n) : n > 0 && (t[r++] = n),
                    (t.t = r),
                    t.clamp();
                }),
                (k.prototype.multiplyTo = function (e, t) {
                  var r = this.abs(),
                    n = e.abs(),
                    i = r.t;
                  for (t.t = i + n.t; --i >= 0; ) t[i] = 0;
                  for (i = 0; i < n.t; ++i) t[i + r.t] = r.am(0, n[i], t, i, 0, r.t);
                  (t.s = 0), t.clamp(), this.s != e.s && k.ZERO.subTo(t, t);
                }),
                (k.prototype.squareTo = function (e) {
                  for (var t = this.abs(), r = (e.t = 2 * t.t); --r >= 0; ) e[r] = 0;
                  for (r = 0; r < t.t - 1; ++r) {
                    var n = t.am(r, t[r], e, 2 * r, 0, 1);
                    (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >= t.DV &&
                      ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1));
                  }
                  e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)), (e.s = 0), e.clamp();
                }),
                (k.prototype.divRemTo = function (e, t, r) {
                  var n = e.abs();
                  if (!(n.t <= 0)) {
                    var i = this.abs();
                    if (i.t < n.t)
                      return null != t && t.fromInt(0), void (null != r && this.copyTo(r));
                    null == r && (r = A());
                    var o = A(),
                      s = this.s,
                      a = e.s,
                      u = this.DB - L(n[n.t - 1]);
                    u > 0 ? (n.lShiftTo(u, o), i.lShiftTo(u, r)) : (n.copyTo(o), i.copyTo(r));
                    var c = o.t,
                      h = o[c - 1];
                    if (0 != h) {
                      var l = h * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
                        f = this.FV / l,
                        d = (1 << this.F1) / l,
                        g = 1 << this.F2,
                        p = r.t,
                        v = p - c,
                        y = null == t ? A() : t;
                      for (
                        o.dlShiftTo(v, y),
                          r.compareTo(y) >= 0 && ((r[r.t++] = 1), r.subTo(y, r)),
                          k.ONE.dlShiftTo(c, y),
                          y.subTo(o, o);
                        o.t < c;

                      )
                        o[o.t++] = 0;
                      for (; --v >= 0; ) {
                        var m = r[--p] == h ? this.DM : Math.floor(r[p] * f + (r[p - 1] + g) * d);
                        if ((r[p] += o.am(0, m, r, v, 0, c)) < m)
                          for (o.dlShiftTo(v, y), r.subTo(y, r); r[p] < --m; ) r.subTo(y, r);
                      }
                      null != t && (r.drShiftTo(c, t), s != a && k.ZERO.subTo(t, t)),
                        (r.t = c),
                        r.clamp(),
                        u > 0 && r.rShiftTo(u, r),
                        s < 0 && k.ZERO.subTo(r, r);
                    }
                  }
                }),
                (k.prototype.invDigit = function () {
                  if (this.t < 1) return 0;
                  var e = this[0];
                  if (0 == (1 & e)) return 0;
                  var t = 3 & e;
                  return (t =
                    ((t =
                      ((t = ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) & 255) *
                        (2 - (((65535 & e) * t) & 65535))) &
                      65535) *
                      (2 - ((e * t) % this.DV))) %
                    this.DV) > 0
                    ? this.DV - t
                    : -t;
                }),
                (k.prototype.isEven = function () {
                  return 0 == (this.t > 0 ? 1 & this[0] : this.s);
                }),
                (k.prototype.exp = function (e, t) {
                  if (e > 4294967295 || e < 1) return k.ONE;
                  var r = A(),
                    n = A(),
                    i = t.convert(this),
                    o = L(e) - 1;
                  for (i.copyTo(r); --o >= 0; )
                    if ((t.sqrTo(r, n), (e & (1 << o)) > 0)) t.mulTo(n, i, r);
                    else {
                      var s = r;
                      (r = n), (n = s);
                    }
                  return t.revert(r);
                }),
                (k.prototype.toString = function (e) {
                  if (this.s < 0) return '-' + this.negate().toString(e);
                  var t;
                  if (16 == e) t = 4;
                  else if (8 == e) t = 3;
                  else if (2 == e) t = 1;
                  else if (32 == e) t = 5;
                  else {
                    if (4 != e) return this.toRadix(e);
                    t = 2;
                  }
                  var r,
                    n = (1 << t) - 1,
                    i = !1,
                    o = '',
                    s = this.t,
                    a = this.DB - ((s * this.DB) % t);
                  if (s-- > 0)
                    for (a < this.DB && (r = this[s] >> a) > 0 && ((i = !0), (o = I(r))); s >= 0; )
                      a < t
                        ? ((r = (this[s] & ((1 << a) - 1)) << (t - a)),
                          (r |= this[--s] >> (a += this.DB - t)))
                        : ((r = (this[s] >> (a -= t)) & n), a <= 0 && ((a += this.DB), --s)),
                        r > 0 && (i = !0),
                        i && (o += I(r));
                  return i ? o : '0';
                }),
                (k.prototype.negate = function () {
                  var e = A();
                  return k.ZERO.subTo(this, e), e;
                }),
                (k.prototype.abs = function () {
                  return this.s < 0 ? this.negate() : this;
                }),
                (k.prototype.compareTo = function (e) {
                  var t = this.s - e.s;
                  if (0 != t) return t;
                  var r = this.t;
                  if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
                  for (; --r >= 0; ) if (0 != (t = this[r] - e[r])) return t;
                  return 0;
                }),
                (k.prototype.bitLength = function () {
                  return this.t <= 0
                    ? 0
                    : this.DB * (this.t - 1) + L(this[this.t - 1] ^ (this.s & this.DM));
                }),
                (k.prototype.mod = function (e) {
                  var t = A();
                  return (
                    this.abs().divRemTo(e, null, t),
                    this.s < 0 && t.compareTo(k.ZERO) > 0 && e.subTo(t, t),
                    t
                  );
                }),
                (k.prototype.modPowInt = function (e, t) {
                  var r;
                  return (r = e < 256 || t.isEven() ? new N(t) : new U(t)), this.exp(e, r);
                }),
                (k.ZERO = D(0)),
                (k.ONE = D(1)),
                (K.prototype.convert = q),
                (K.prototype.revert = q),
                (K.prototype.mulTo = function (e, t, r) {
                  e.multiplyTo(t, r);
                }),
                (K.prototype.sqrTo = function (e, t) {
                  e.squareTo(t);
                }),
                (J.prototype.convert = function (e) {
                  if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
                  if (e.compareTo(this.m) < 0) return e;
                  var t = A();
                  return e.copyTo(t), this.reduce(t), t;
                }),
                (J.prototype.revert = function (e) {
                  return e;
                }),
                (J.prototype.reduce = function (e) {
                  for (
                    e.drShiftTo(this.m.t - 1, this.r2),
                      e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
                      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                    e.compareTo(this.r2) < 0;

                  )
                    e.dAddOffset(1, this.m.t + 1);
                  for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; ) e.subTo(this.m, e);
                }),
                (J.prototype.mulTo = function (e, t, r) {
                  e.multiplyTo(t, r), this.reduce(r);
                }),
                (J.prototype.sqrTo = function (e, t) {
                  e.squareTo(t), this.reduce(t);
                });
              var W,
                z,
                Y,
                G = [
                  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
                  79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
                  167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251,
                  257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
                  353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443,
                  449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557,
                  563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647,
                  653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757,
                  761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
                  877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983,
                  991, 997,
                ],
                X = (1 << 26) / G[G.length - 1];
              /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
               */ function $() {
                (this.i = 0), (this.j = 0), (this.S = new Array());
              }
              /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
               */
              function Q() {
                !(function (e) {
                  (z[Y++] ^= 255 & e),
                    (z[Y++] ^= (e >> 8) & 255),
                    (z[Y++] ^= (e >> 16) & 255),
                    (z[Y++] ^= (e >> 24) & 255),
                    Y >= 256 && (Y -= 256);
                })(new Date().getTime());
              }
              if (
                ((k.prototype.chunkSize = function (e) {
                  return Math.floor((Math.LN2 * this.DB) / Math.log(e));
                }),
                (k.prototype.toRadix = function (e) {
                  if ((null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36)) return '0';
                  var t = this.chunkSize(e),
                    r = Math.pow(e, t),
                    n = D(r),
                    i = A(),
                    o = A(),
                    s = '';
                  for (this.divRemTo(n, i, o); i.signum() > 0; )
                    (s = (r + o.intValue()).toString(e).substr(1) + s), i.divRemTo(n, i, o);
                  return o.intValue().toString(e) + s;
                }),
                (k.prototype.fromRadix = function (e, t) {
                  this.fromInt(0), null == t && (t = 10);
                  for (
                    var r = this.chunkSize(t), n = Math.pow(t, r), i = !1, o = 0, s = 0, a = 0;
                    a < e.length;
                    ++a
                  ) {
                    var u = R(e, a);
                    u < 0
                      ? '-' == e.charAt(a) && 0 == this.signum() && (i = !0)
                      : ((s = t * s + u),
                        ++o >= r && (this.dMultiply(n), this.dAddOffset(s, 0), (o = 0), (s = 0)));
                  }
                  o > 0 && (this.dMultiply(Math.pow(t, o)), this.dAddOffset(s, 0)),
                    i && k.ZERO.subTo(this, this);
                }),
                (k.prototype.fromNumber = function (e, t, r) {
                  if ('number' == typeof t)
                    if (e < 2) this.fromInt(1);
                    else
                      for (
                        this.fromNumber(e, r),
                          this.testBit(e - 1) || this.bitwiseTo(k.ONE.shiftLeft(e - 1), B, this),
                          this.isEven() && this.dAddOffset(1, 0);
                        !this.isProbablePrime(t);

                      )
                        this.dAddOffset(2, 0),
                          this.bitLength() > e && this.subTo(k.ONE.shiftLeft(e - 1), this);
                  else {
                    var n = new Array(),
                      i = 7 & e;
                    (n.length = 1 + (e >> 3)),
                      t.nextBytes(n),
                      i > 0 ? (n[0] &= (1 << i) - 1) : (n[0] = 0),
                      this.fromString(n, 256);
                  }
                }),
                (k.prototype.bitwiseTo = function (e, t, r) {
                  var n,
                    i,
                    o = Math.min(e.t, this.t);
                  for (n = 0; n < o; ++n) r[n] = t(this[n], e[n]);
                  if (e.t < this.t) {
                    for (i = e.s & this.DM, n = o; n < this.t; ++n) r[n] = t(this[n], i);
                    r.t = this.t;
                  } else {
                    for (i = this.s & this.DM, n = o; n < e.t; ++n) r[n] = t(i, e[n]);
                    r.t = e.t;
                  }
                  (r.s = t(this.s, e.s)), r.clamp();
                }),
                (k.prototype.changeBit = function (e, t) {
                  var r = k.ONE.shiftLeft(e);
                  return this.bitwiseTo(r, t, r), r;
                }),
                (k.prototype.addTo = function (e, t) {
                  for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
                    (n += this[r] + e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                  if (e.t < this.t) {
                    for (n += e.s; r < this.t; )
                      (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                    n += this.s;
                  } else {
                    for (n += this.s; r < e.t; )
                      (n += e[r]), (t[r++] = n & this.DM), (n >>= this.DB);
                    n += e.s;
                  }
                  (t.s = n < 0 ? -1 : 0),
                    n > 0 ? (t[r++] = n) : n < -1 && (t[r++] = this.DV + n),
                    (t.t = r),
                    t.clamp();
                }),
                (k.prototype.dMultiply = function (e) {
                  (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)), ++this.t, this.clamp();
                }),
                (k.prototype.dAddOffset = function (e, t) {
                  if (0 != e) {
                    for (; this.t <= t; ) this[this.t++] = 0;
                    for (this[t] += e; this[t] >= this.DV; )
                      (this[t] -= this.DV), ++t >= this.t && (this[this.t++] = 0), ++this[t];
                  }
                }),
                (k.prototype.multiplyLowerTo = function (e, t, r) {
                  var n,
                    i = Math.min(this.t + e.t, t);
                  for (r.s = 0, r.t = i; i > 0; ) r[--i] = 0;
                  for (n = r.t - this.t; i < n; ++i)
                    r[i + this.t] = this.am(0, e[i], r, i, 0, this.t);
                  for (n = Math.min(e.t, t); i < n; ++i) this.am(0, e[i], r, i, 0, t - i);
                  r.clamp();
                }),
                (k.prototype.multiplyUpperTo = function (e, t, r) {
                  --t;
                  var n = (r.t = this.t + e.t - t);
                  for (r.s = 0; --n >= 0; ) r[n] = 0;
                  for (n = Math.max(t - this.t, 0); n < e.t; ++n)
                    r[this.t + n - t] = this.am(t - n, e[n], r, 0, 0, this.t + n - t);
                  r.clamp(), r.drShiftTo(1, r);
                }),
                (k.prototype.modInt = function (e) {
                  if (e <= 0) return 0;
                  var t = this.DV % e,
                    r = this.s < 0 ? e - 1 : 0;
                  if (this.t > 0)
                    if (0 == t) r = this[0] % e;
                    else for (var n = this.t - 1; n >= 0; --n) r = (t * r + this[n]) % e;
                  return r;
                }),
                (k.prototype.millerRabin = function (e) {
                  var t = this.subtract(k.ONE),
                    r = t.getLowestSetBit();
                  if (r <= 0) return !1;
                  var n = t.shiftRight(r);
                  (e = (e + 1) >> 1) > G.length && (e = G.length);
                  for (var i = A(), o = 0; o < e; ++o) {
                    i.fromInt(G[Math.floor(Math.random() * G.length)]);
                    var s = i.modPow(n, this);
                    if (0 != s.compareTo(k.ONE) && 0 != s.compareTo(t)) {
                      for (var a = 1; a++ < r && 0 != s.compareTo(t); )
                        if (0 == (s = s.modPowInt(2, this)).compareTo(k.ONE)) return !1;
                      if (0 != s.compareTo(t)) return !1;
                    }
                  }
                  return !0;
                }),
                (k.prototype.clone = function () {
                  var e = A();
                  return this.copyTo(e), e;
                }),
                (k.prototype.intValue = function () {
                  if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1;
                  } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0;
                  }
                  return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
                }),
                (k.prototype.byteValue = function () {
                  return 0 == this.t ? this.s : (this[0] << 24) >> 24;
                }),
                (k.prototype.shortValue = function () {
                  return 0 == this.t ? this.s : (this[0] << 16) >> 16;
                }),
                (k.prototype.signum = function () {
                  return this.s < 0 ? -1 : this.t <= 0 || (1 == this.t && this[0] <= 0) ? 0 : 1;
                }),
                (k.prototype.toByteArray = function () {
                  var e = this.t,
                    t = new Array();
                  t[0] = this.s;
                  var r,
                    n = this.DB - ((e * this.DB) % 8),
                    i = 0;
                  if (e-- > 0)
                    for (
                      n < this.DB &&
                      (r = this[e] >> n) != (this.s & this.DM) >> n &&
                      (t[i++] = r | (this.s << (this.DB - n)));
                      e >= 0;

                    )
                      n < 8
                        ? ((r = (this[e] & ((1 << n) - 1)) << (8 - n)),
                          (r |= this[--e] >> (n += this.DB - 8)))
                        : ((r = (this[e] >> (n -= 8)) & 255), n <= 0 && ((n += this.DB), --e)),
                        0 != (128 & r) && (r |= -256),
                        0 == i && (128 & this.s) != (128 & r) && ++i,
                        (i > 0 || r != this.s) && (t[i++] = r);
                  return t;
                }),
                (k.prototype.equals = function (e) {
                  return 0 == this.compareTo(e);
                }),
                (k.prototype.min = function (e) {
                  return this.compareTo(e) < 0 ? this : e;
                }),
                (k.prototype.max = function (e) {
                  return this.compareTo(e) > 0 ? this : e;
                }),
                (k.prototype.and = function (e) {
                  var t = A();
                  return this.bitwiseTo(e, O, t), t;
                }),
                (k.prototype.or = function (e) {
                  var t = A();
                  return this.bitwiseTo(e, B, t), t;
                }),
                (k.prototype.xor = function (e) {
                  var t = A();
                  return this.bitwiseTo(e, j, t), t;
                }),
                (k.prototype.andNot = function (e) {
                  var t = A();
                  return this.bitwiseTo(e, M, t), t;
                }),
                (k.prototype.not = function () {
                  for (var e = A(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
                  return (e.t = this.t), (e.s = ~this.s), e;
                }),
                (k.prototype.shiftLeft = function (e) {
                  var t = A();
                  return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
                }),
                (k.prototype.shiftRight = function (e) {
                  var t = A();
                  return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
                }),
                (k.prototype.getLowestSetBit = function () {
                  for (var e = 0; e < this.t; ++e)
                    if (0 != this[e]) return e * this.DB + H(this[e]);
                  return this.s < 0 ? this.t * this.DB : -1;
                }),
                (k.prototype.bitCount = function () {
                  for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r) e += V(this[r] ^ t);
                  return e;
                }),
                (k.prototype.testBit = function (e) {
                  var t = Math.floor(e / this.DB);
                  return t >= this.t ? 0 != this.s : 0 != (this[t] & (1 << e % this.DB));
                }),
                (k.prototype.setBit = function (e) {
                  return this.changeBit(e, B);
                }),
                (k.prototype.clearBit = function (e) {
                  return this.changeBit(e, M);
                }),
                (k.prototype.flipBit = function (e) {
                  return this.changeBit(e, j);
                }),
                (k.prototype.add = function (e) {
                  var t = A();
                  return this.addTo(e, t), t;
                }),
                (k.prototype.subtract = function (e) {
                  var t = A();
                  return this.subTo(e, t), t;
                }),
                (k.prototype.multiply = function (e) {
                  var t = A();
                  return this.multiplyTo(e, t), t;
                }),
                (k.prototype.divide = function (e) {
                  var t = A();
                  return this.divRemTo(e, t, null), t;
                }),
                (k.prototype.remainder = function (e) {
                  var t = A();
                  return this.divRemTo(e, null, t), t;
                }),
                (k.prototype.divideAndRemainder = function (e) {
                  var t = A(),
                    r = A();
                  return this.divRemTo(e, t, r), new Array(t, r);
                }),
                (k.prototype.modPow = function (e, t) {
                  var r,
                    n,
                    i = e.bitLength(),
                    o = D(1);
                  if (i <= 0) return o;
                  (r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6),
                    (n = i < 8 ? new N(t) : t.isEven() ? new J(t) : new U(t));
                  var s = new Array(),
                    a = 3,
                    u = r - 1,
                    c = (1 << r) - 1;
                  if (((s[1] = n.convert(this)), r > 1)) {
                    var h = A();
                    for (n.sqrTo(s[1], h); a <= c; )
                      (s[a] = A()), n.mulTo(h, s[a - 2], s[a]), (a += 2);
                  }
                  var l,
                    f,
                    d = e.t - 1,
                    g = !0,
                    p = A();
                  for (i = L(e[d]) - 1; d >= 0; ) {
                    for (
                      i >= u
                        ? (l = (e[d] >> (i - u)) & c)
                        : ((l = (e[d] & ((1 << (i + 1)) - 1)) << (u - i)),
                          d > 0 && (l |= e[d - 1] >> (this.DB + i - u))),
                        a = r;
                      0 == (1 & l);

                    )
                      (l >>= 1), --a;
                    if (((i -= a) < 0 && ((i += this.DB), --d), g)) s[l].copyTo(o), (g = !1);
                    else {
                      for (; a > 1; ) n.sqrTo(o, p), n.sqrTo(p, o), (a -= 2);
                      a > 0 ? n.sqrTo(o, p) : ((f = o), (o = p), (p = f)), n.mulTo(p, s[l], o);
                    }
                    for (; d >= 0 && 0 == (e[d] & (1 << i)); )
                      n.sqrTo(o, p), (f = o), (o = p), (p = f), --i < 0 && ((i = this.DB - 1), --d);
                  }
                  return n.revert(o);
                }),
                (k.prototype.modInverse = function (e) {
                  var t = e.isEven();
                  if ((this.isEven() && t) || 0 == e.signum()) return k.ZERO;
                  for (
                    var r = e.clone(), n = this.clone(), i = D(1), o = D(0), s = D(0), a = D(1);
                    0 != r.signum();

                  ) {
                    for (; r.isEven(); )
                      r.rShiftTo(1, r),
                        t
                          ? ((i.isEven() && o.isEven()) || (i.addTo(this, i), o.subTo(e, o)),
                            i.rShiftTo(1, i))
                          : o.isEven() || o.subTo(e, o),
                        o.rShiftTo(1, o);
                    for (; n.isEven(); )
                      n.rShiftTo(1, n),
                        t
                          ? ((s.isEven() && a.isEven()) || (s.addTo(this, s), a.subTo(e, a)),
                            s.rShiftTo(1, s))
                          : a.isEven() || a.subTo(e, a),
                        a.rShiftTo(1, a);
                    r.compareTo(n) >= 0
                      ? (r.subTo(n, r), t && i.subTo(s, i), o.subTo(a, o))
                      : (n.subTo(r, n), t && s.subTo(i, s), a.subTo(o, a));
                  }
                  return 0 != n.compareTo(k.ONE)
                    ? k.ZERO
                    : a.compareTo(e) >= 0
                    ? a.subtract(e)
                    : a.signum() < 0
                    ? (a.addTo(e, a), a.signum() < 0 ? a.add(e) : a)
                    : a;
                }),
                (k.prototype.pow = function (e) {
                  return this.exp(e, new K());
                }),
                (k.prototype.gcd = function (e) {
                  var t = this.s < 0 ? this.negate() : this.clone(),
                    r = e.s < 0 ? e.negate() : e.clone();
                  if (t.compareTo(r) < 0) {
                    var n = t;
                    (t = r), (r = n);
                  }
                  var i = t.getLowestSetBit(),
                    o = r.getLowestSetBit();
                  if (o < 0) return t;
                  for (
                    i < o && (o = i), o > 0 && (t.rShiftTo(o, t), r.rShiftTo(o, r));
                    t.signum() > 0;

                  )
                    (i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
                      (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
                      t.compareTo(r) >= 0
                        ? (t.subTo(r, t), t.rShiftTo(1, t))
                        : (r.subTo(t, r), r.rShiftTo(1, r));
                  return o > 0 && r.lShiftTo(o, r), r;
                }),
                (k.prototype.isProbablePrime = function (e) {
                  var t,
                    r = this.abs();
                  if (1 == r.t && r[0] <= G[G.length - 1]) {
                    for (t = 0; t < G.length; ++t) if (r[0] == G[t]) return !0;
                    return !1;
                  }
                  if (r.isEven()) return !1;
                  for (t = 1; t < G.length; ) {
                    for (var n = G[t], i = t + 1; i < G.length && n < X; ) n *= G[i++];
                    for (n = r.modInt(n); t < i; ) if (n % G[t++] == 0) return !1;
                  }
                  return r.millerRabin(e);
                }),
                (k.prototype.square = function () {
                  var e = A();
                  return this.squareTo(e), e;
                }),
                ($.prototype.init = function (e) {
                  var t, r, n;
                  for (t = 0; t < 256; ++t) this.S[t] = t;
                  for (r = 0, t = 0; t < 256; ++t)
                    (r = (r + this.S[t] + e[t % e.length]) & 255),
                      (n = this.S[t]),
                      (this.S[t] = this.S[r]),
                      (this.S[r] = n);
                  (this.i = 0), (this.j = 0);
                }),
                ($.prototype.next = function () {
                  var e;
                  return (
                    (this.i = (this.i + 1) & 255),
                    (this.j = (this.j + this.S[this.i]) & 255),
                    (e = this.S[this.i]),
                    (this.S[this.i] = this.S[this.j]),
                    (this.S[this.j] = e),
                    this.S[(e + this.S[this.i]) & 255]
                  );
                }),
                null == z)
              ) {
                var Z;
                if (((z = new Array()), (Y = 0), void 0 !== i && void 0 !== i.msCrypto)) {
                  var ee = i.msCrypto;
                  if (ee.getRandomValues) {
                    var te = new Uint8Array(32);
                    for (ee.getRandomValues(te), Z = 0; Z < 32; ++Z) z[Y++] = te[Z];
                  }
                }
                for (; Y < 256; )
                  (Z = Math.floor(65536 * Math.random())), (z[Y++] = Z >>> 8), (z[Y++] = 255 & Z);
                (Y = 0), Q();
              }
              function re() {
                if (null == W) {
                  for (Q(), (W = new $()).init(z), Y = 0; Y < z.length; ++Y) z[Y] = 0;
                  Y = 0;
                }
                return W.next();
              }
              function ne() {}
              /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
               */ function ie(e, t) {
                return new k(e, t);
              }
              function oe(e, t, r) {
                for (var n = '', i = 0; n.length < t; )
                  (n += r(
                    String.fromCharCode.apply(
                      String,
                      e.concat([
                        (4278190080 & i) >> 24,
                        (16711680 & i) >> 16,
                        (65280 & i) >> 8,
                        255 & i,
                      ]),
                    ),
                  )),
                    (i += 1);
                return n;
              }
              function se() {
                (this.n = null),
                  (this.e = 0),
                  (this.d = null),
                  (this.p = null),
                  (this.q = null),
                  (this.dmp1 = null),
                  (this.dmq1 = null),
                  (this.coeff = null);
                /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
                 */
              }
              function ae(e, t) {
                (this.x = t), (this.q = e);
              }
              function ue(e, t, r, n) {
                (this.curve = e),
                  (this.x = t),
                  (this.y = r),
                  (this.z = null == n ? k.ONE : n),
                  (this.zinv = null);
              }
              function ce(e, t, r) {
                (this.q = e),
                  (this.a = this.fromBigInteger(t)),
                  (this.b = this.fromBigInteger(r)),
                  (this.infinity = new ue(this, null, null));
              }
              (ne.prototype.nextBytes = function (e) {
                var t;
                for (t = 0; t < e.length; ++t) e[t] = re();
              }),
                (se.prototype.doPublic = function (e) {
                  return e.modPowInt(this.e, this.n);
                }),
                (se.prototype.setPublic = function (e, t) {
                  if (((this.isPublic = !0), (this.isPrivate = !1), 'string' != typeof e))
                    (this.n = e), (this.e = t);
                  else {
                    if (!(null != e && null != t && e.length > 0 && t.length > 0))
                      throw 'Invalid RSA public key';
                    (this.n = ie(e, 16)), (this.e = parseInt(t, 16));
                  }
                }),
                (se.prototype.encrypt = function (e) {
                  var t = (function (e, t) {
                    if (t < e.length + 11) throw 'Message too long for RSA';
                    for (var r = new Array(), n = e.length - 1; n >= 0 && t > 0; ) {
                      var i = e.charCodeAt(n--);
                      i < 128
                        ? (r[--t] = i)
                        : i > 127 && i < 2048
                        ? ((r[--t] = (63 & i) | 128), (r[--t] = (i >> 6) | 192))
                        : ((r[--t] = (63 & i) | 128),
                          (r[--t] = ((i >> 6) & 63) | 128),
                          (r[--t] = (i >> 12) | 224));
                    }
                    r[--t] = 0;
                    for (var o = new ne(), s = new Array(); t > 2; ) {
                      for (s[0] = 0; 0 == s[0]; ) o.nextBytes(s);
                      r[--t] = s[0];
                    }
                    return (r[--t] = 2), (r[--t] = 0), new k(r);
                  })(e, (this.n.bitLength() + 7) >> 3);
                  if (null == t) return null;
                  var r = this.doPublic(t);
                  if (null == r) return null;
                  var n = r.toString(16);
                  return 0 == (1 & n.length) ? n : '0' + n;
                }),
                (se.prototype.encryptOAEP = function (e, t, r) {
                  var n = (function (e, t, r, n) {
                    var i = le.crypto.MessageDigest,
                      o = le.crypto.Util,
                      s = null;
                    if (
                      (r || (r = 'sha1'),
                      'string' == typeof r &&
                        ((s = i.getCanonicalAlgName(r)),
                        (n = i.getHashLength(s)),
                        (r = function (e) {
                          return xe(o.hashHex(ke(e), s));
                        })),
                      e.length + 2 * n + 2 > t)
                    )
                      throw 'Message too long for RSA';
                    var a,
                      u = '';
                    for (a = 0; a < t - e.length - 2 * n - 2; a += 1) u += '\0';
                    var c = r('') + u + '' + e,
                      h = new Array(n);
                    new ne().nextBytes(h);
                    var l = oe(h, c.length, r),
                      f = [];
                    for (a = 0; a < c.length; a += 1) f[a] = c.charCodeAt(a) ^ l.charCodeAt(a);
                    var d = oe(f, h.length, r),
                      g = [0];
                    for (a = 0; a < h.length; a += 1) g[a + 1] = h[a] ^ d.charCodeAt(a);
                    return new k(g.concat(f));
                  })(e, (this.n.bitLength() + 7) >> 3, t, r);
                  if (null == n) return null;
                  var i = this.doPublic(n);
                  if (null == i) return null;
                  var o = i.toString(16);
                  return 0 == (1 & o.length) ? o : '0' + o;
                }),
                (se.prototype.type = 'RSA'),
                (ae.prototype.equals = function (e) {
                  return e == this || (this.q.equals(e.q) && this.x.equals(e.x));
                }),
                (ae.prototype.toBigInteger = function () {
                  return this.x;
                }),
                (ae.prototype.negate = function () {
                  return new ae(this.q, this.x.negate().mod(this.q));
                }),
                (ae.prototype.add = function (e) {
                  return new ae(this.q, this.x.add(e.toBigInteger()).mod(this.q));
                }),
                (ae.prototype.subtract = function (e) {
                  return new ae(this.q, this.x.subtract(e.toBigInteger()).mod(this.q));
                }),
                (ae.prototype.multiply = function (e) {
                  return new ae(this.q, this.x.multiply(e.toBigInteger()).mod(this.q));
                }),
                (ae.prototype.square = function () {
                  return new ae(this.q, this.x.square().mod(this.q));
                }),
                (ae.prototype.divide = function (e) {
                  return new ae(
                    this.q,
                    this.x.multiply(e.toBigInteger().modInverse(this.q)).mod(this.q),
                  );
                }),
                (ue.prototype.getX = function () {
                  return (
                    null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                    this.curve.fromBigInteger(
                      this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q),
                    )
                  );
                }),
                (ue.prototype.getY = function () {
                  return (
                    null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                    this.curve.fromBigInteger(
                      this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q),
                    )
                  );
                }),
                (ue.prototype.equals = function (e) {
                  return (
                    e == this ||
                    (this.isInfinity()
                      ? e.isInfinity()
                      : e.isInfinity()
                      ? this.isInfinity()
                      : !!e.y
                          .toBigInteger()
                          .multiply(this.z)
                          .subtract(this.y.toBigInteger().multiply(e.z))
                          .mod(this.curve.q)
                          .equals(k.ZERO) &&
                        e.x
                          .toBigInteger()
                          .multiply(this.z)
                          .subtract(this.x.toBigInteger().multiply(e.z))
                          .mod(this.curve.q)
                          .equals(k.ZERO))
                  );
                }),
                (ue.prototype.isInfinity = function () {
                  return (
                    (null == this.x && null == this.y) ||
                    (this.z.equals(k.ZERO) && !this.y.toBigInteger().equals(k.ZERO))
                  );
                }),
                (ue.prototype.negate = function () {
                  return new ue(this.curve, this.x, this.y.negate(), this.z);
                }),
                (ue.prototype.add = function (e) {
                  if (this.isInfinity()) return e;
                  if (e.isInfinity()) return this;
                  var t = e.y
                      .toBigInteger()
                      .multiply(this.z)
                      .subtract(this.y.toBigInteger().multiply(e.z))
                      .mod(this.curve.q),
                    r = e.x
                      .toBigInteger()
                      .multiply(this.z)
                      .subtract(this.x.toBigInteger().multiply(e.z))
                      .mod(this.curve.q);
                  if (k.ZERO.equals(r))
                    return k.ZERO.equals(t) ? this.twice() : this.curve.getInfinity();
                  var n = new k('3'),
                    i = this.x.toBigInteger(),
                    o = this.y.toBigInteger(),
                    s = (e.x.toBigInteger(), e.y.toBigInteger(), r.square()),
                    a = s.multiply(r),
                    u = i.multiply(s),
                    c = t.square().multiply(this.z),
                    h = c
                      .subtract(u.shiftLeft(1))
                      .multiply(e.z)
                      .subtract(a)
                      .multiply(r)
                      .mod(this.curve.q),
                    l = u
                      .multiply(n)
                      .multiply(t)
                      .subtract(o.multiply(a))
                      .subtract(c.multiply(t))
                      .multiply(e.z)
                      .add(t.multiply(a))
                      .mod(this.curve.q),
                    f = a.multiply(this.z).multiply(e.z).mod(this.curve.q);
                  return new ue(
                    this.curve,
                    this.curve.fromBigInteger(h),
                    this.curve.fromBigInteger(l),
                    f,
                  );
                }),
                (ue.prototype.twice = function () {
                  if (this.isInfinity()) return this;
                  if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
                  var e = new k('3'),
                    t = this.x.toBigInteger(),
                    r = this.y.toBigInteger(),
                    n = r.multiply(this.z),
                    i = n.multiply(r).mod(this.curve.q),
                    o = this.curve.a.toBigInteger(),
                    s = t.square().multiply(e);
                  k.ZERO.equals(o) || (s = s.add(this.z.square().multiply(o)));
                  var a = (s = s.mod(this.curve.q))
                      .square()
                      .subtract(t.shiftLeft(3).multiply(i))
                      .shiftLeft(1)
                      .multiply(n)
                      .mod(this.curve.q),
                    u = s
                      .multiply(e)
                      .multiply(t)
                      .subtract(i.shiftLeft(1))
                      .shiftLeft(2)
                      .multiply(i)
                      .subtract(s.square().multiply(s))
                      .mod(this.curve.q),
                    c = n.square().multiply(n).shiftLeft(3).mod(this.curve.q);
                  return new ue(
                    this.curve,
                    this.curve.fromBigInteger(a),
                    this.curve.fromBigInteger(u),
                    c,
                  );
                }),
                (ue.prototype.multiply = function (e) {
                  if (this.isInfinity()) return this;
                  if (0 == e.signum()) return this.curve.getInfinity();
                  var t,
                    r = e,
                    n = r.multiply(new k('3')),
                    i = this.negate(),
                    o = this,
                    s = this.curve.q.subtract(e),
                    a = s.multiply(new k('3')),
                    u = new ue(this.curve, this.x, this.y),
                    c = u.negate();
                  for (t = n.bitLength() - 2; t > 0; --t) {
                    o = o.twice();
                    var h = n.testBit(t);
                    h != r.testBit(t) && (o = o.add(h ? this : i));
                  }
                  for (t = a.bitLength() - 2; t > 0; --t) {
                    u = u.twice();
                    var l = a.testBit(t);
                    l != s.testBit(t) && (u = u.add(l ? u : c));
                  }
                  return o;
                }),
                (ue.prototype.multiplyTwo = function (e, t, r) {
                  var n;
                  n = e.bitLength() > r.bitLength() ? e.bitLength() - 1 : r.bitLength() - 1;
                  for (var i = this.curve.getInfinity(), o = this.add(t); n >= 0; )
                    (i = i.twice()),
                      e.testBit(n)
                        ? (i = r.testBit(n) ? i.add(o) : i.add(this))
                        : r.testBit(n) && (i = i.add(t)),
                      --n;
                  return i;
                }),
                (ce.prototype.getQ = function () {
                  return this.q;
                }),
                (ce.prototype.getA = function () {
                  return this.a;
                }),
                (ce.prototype.getB = function () {
                  return this.b;
                }),
                (ce.prototype.equals = function (e) {
                  return (
                    e == this || (this.q.equals(e.q) && this.a.equals(e.a) && this.b.equals(e.b))
                  );
                }),
                (ce.prototype.getInfinity = function () {
                  return this.infinity;
                }),
                (ce.prototype.fromBigInteger = function (e) {
                  return new ae(this.q, e);
                }),
                (ce.prototype.decodePointHex = function (e) {
                  switch (parseInt(e.substr(0, 2), 16)) {
                    case 0:
                      return this.infinity;
                    case 2:
                    case 3:
                      return null;
                    case 4:
                    case 6:
                    case 7:
                      var t = (e.length - 2) / 2,
                        r = e.substr(2, t),
                        n = e.substr(t + 2, t);
                      return new ue(
                        this,
                        this.fromBigInteger(new k(r, 16)),
                        this.fromBigInteger(new k(n, 16)),
                      );
                    default:
                      return null;
                  }
                }),
                (ae.prototype.getByteLength = function () {
                  return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
                }),
                (ue.prototype.getEncoded = function (e) {
                  var t = function (e, t) {
                      var r = e.toByteArrayUnsigned();
                      if (t < r.length) r = r.slice(r.length - t);
                      else for (; t > r.length; ) r.unshift(0);
                      return r;
                    },
                    r = this.getX().toBigInteger(),
                    n = this.getY().toBigInteger(),
                    i = t(r, 32);
                  return (
                    e
                      ? n.isEven()
                        ? i.unshift(2)
                        : i.unshift(3)
                      : (i.unshift(4), (i = i.concat(t(n, 32)))),
                    i
                  );
                }),
                (ue.decodeFrom = function (e, t) {
                  t[0];
                  var r = t.length - 1,
                    n = t.slice(1, 1 + r / 2),
                    i = t.slice(1 + r / 2, 1 + r);
                  n.unshift(0), i.unshift(0);
                  var o = new k(n),
                    s = new k(i);
                  return new ue(e, e.fromBigInteger(o), e.fromBigInteger(s));
                }),
                (ue.decodeFromHex = function (e, t) {
                  t.substr(0, 2);
                  var r = t.length - 2,
                    n = t.substr(2, r / 2),
                    i = t.substr(2 + r / 2, r / 2),
                    o = new k(n, 16),
                    s = new k(i, 16);
                  return new ue(e, e.fromBigInteger(o), e.fromBigInteger(s));
                }),
                (ue.prototype.add2D = function (e) {
                  if (this.isInfinity()) return e;
                  if (e.isInfinity()) return this;
                  if (this.x.equals(e.x))
                    return this.y.equals(e.y) ? this.twice() : this.curve.getInfinity();
                  var t = e.x.subtract(this.x),
                    r = e.y.subtract(this.y).divide(t),
                    n = r.square().subtract(this.x).subtract(e.x),
                    i = r.multiply(this.x.subtract(n)).subtract(this.y);
                  return new ue(this.curve, n, i);
                }),
                (ue.prototype.twice2D = function () {
                  if (this.isInfinity()) return this;
                  if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
                  var e = this.curve.fromBigInteger(k.valueOf(2)),
                    t = this.curve.fromBigInteger(k.valueOf(3)),
                    r = this.x.square().multiply(t).add(this.curve.a).divide(this.y.multiply(e)),
                    n = r.square().subtract(this.x.multiply(e)),
                    i = r.multiply(this.x.subtract(n)).subtract(this.y);
                  return new ue(this.curve, n, i);
                }),
                (ue.prototype.multiply2D = function (e) {
                  if (this.isInfinity()) return this;
                  if (0 == e.signum()) return this.curve.getInfinity();
                  var t,
                    r = e,
                    n = r.multiply(new k('3')),
                    i = this.negate(),
                    o = this;
                  for (t = n.bitLength() - 2; t > 0; --t) {
                    o = o.twice();
                    var s = n.testBit(t);
                    s != r.testBit(t) && (o = o.add2D(s ? this : i));
                  }
                  return o;
                }),
                (ue.prototype.isOnCurve = function () {
                  var e = this.getX().toBigInteger(),
                    t = this.getY().toBigInteger(),
                    r = this.curve.getA().toBigInteger(),
                    n = this.curve.getB().toBigInteger(),
                    i = this.curve.getQ(),
                    o = t.multiply(t).mod(i),
                    s = e.multiply(e).multiply(e).add(r.multiply(e)).add(n).mod(i);
                  return o.equals(s);
                }),
                (ue.prototype.toString = function () {
                  return (
                    '(' +
                    this.getX().toBigInteger().toString() +
                    ',' +
                    this.getY().toBigInteger().toString() +
                    ')'
                  );
                }),
                (ue.prototype.validate = function () {
                  var e = this.curve.getQ();
                  if (this.isInfinity()) throw new Error('Point is at infinity.');
                  var t = this.getX().toBigInteger(),
                    r = this.getY().toBigInteger();
                  if (t.compareTo(k.ONE) < 0 || t.compareTo(e.subtract(k.ONE)) > 0)
                    throw new Error('x coordinate out of bounds');
                  if (r.compareTo(k.ONE) < 0 || r.compareTo(e.subtract(k.ONE)) > 0)
                    throw new Error('y coordinate out of bounds');
                  if (!this.isOnCurve()) throw new Error('Point is not on the curve.');
                  if (this.multiply(e).isInfinity())
                    throw new Error('Point is not a scalar multiple of G.');
                  return !0;
                });
              /*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
               */
              var he = (function () {
                var e = new RegExp(
                    '(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))',
                    'g',
                  ),
                  t = new RegExp('\\\\(?:([^u])|u(.{4}))', 'g'),
                  n = {
                    '"': '"',
                    '/': '/',
                    '\\': '\\',
                    b: '\b',
                    f: '\f',
                    n: '\n',
                    r: '\r',
                    t: '\t',
                  };
                function i(e, t, r) {
                  return t ? n[t] : String.fromCharCode(parseInt(r, 16));
                }
                var o = new String(''),
                  s = Object.hasOwnProperty;
                return function (n, a) {
                  var u,
                    c,
                    h = n.match(e),
                    l = h[0],
                    f = !1;
                  '{' === l ? (u = {}) : '[' === l ? (u = []) : ((u = []), (f = !0));
                  for (var d = [u], g = 1 - f, p = h.length; g < p; ++g) {
                    var v;
                    switch ((l = h[g]).charCodeAt(0)) {
                      default:
                        ((v = d[0])[c || v.length] = +l), (c = void 0);
                        break;
                      case 34:
                        if (
                          (-1 !== (l = l.substring(1, l.length - 1)).indexOf('\\') &&
                            (l = l.replace(t, i)),
                          (v = d[0]),
                          !c)
                        ) {
                          if (!(v instanceof Array)) {
                            c = l || o;
                            break;
                          }
                          c = v.length;
                        }
                        (v[c] = l), (c = void 0);
                        break;
                      case 91:
                        (v = d[0]), d.unshift((v[c || v.length] = [])), (c = void 0);
                        break;
                      case 93:
                        d.shift();
                        break;
                      case 102:
                        ((v = d[0])[c || v.length] = !1), (c = void 0);
                        break;
                      case 110:
                        ((v = d[0])[c || v.length] = null), (c = void 0);
                        break;
                      case 116:
                        ((v = d[0])[c || v.length] = !0), (c = void 0);
                        break;
                      case 123:
                        (v = d[0]), d.unshift((v[c || v.length] = {})), (c = void 0);
                        break;
                      case 125:
                        d.shift();
                    }
                  }
                  if (f) {
                    if (1 !== d.length) throw new Error();
                    u = u[0];
                  } else if (d.length) throw new Error();
                  return (
                    a &&
                      (u = (function e(t, n) {
                        var i = t[n];
                        if (i && 'object' === (void 0 === i ? 'undefined' : r(i))) {
                          var o = null;
                          for (var u in i)
                            if (s.call(i, u) && i !== t) {
                              var c = e(i, u);
                              void 0 !== c ? (i[u] = c) : (o || (o = []), o.push(u));
                            }
                          if (o) for (var h = o.length; --h >= 0; ) delete i[o[h]];
                        }
                        return a.call(t, n, i);
                      })({ '': u }, '')),
                    u
                  );
                };
              })();
              (void 0 !== le && le) || (t.KJUR = le = {}),
                (void 0 !== le.asn1 && le.asn1) || (le.asn1 = {}),
                (le.asn1.ASN1Util = new (function () {
                  (this.integerToByteHex = function (e) {
                    var t = e.toString(16);
                    return t.length % 2 == 1 && (t = '0' + t), t;
                  }),
                    (this.bigIntToMinTwosComplementsHex = function (e) {
                      var t = e.toString(16);
                      if ('-' != t.substr(0, 1))
                        t.length % 2 == 1 ? (t = '0' + t) : t.match(/^[0-7]/) || (t = '00' + t);
                      else {
                        var r = t.substr(1).length;
                        r % 2 == 1 ? (r += 1) : t.match(/^[0-7]/) || (r += 2);
                        for (var n = '', i = 0; i < r; i++) n += 'f';
                        t = new k(n, 16).xor(e).add(k.ONE).toString(16).replace(/^-/, '');
                      }
                      return t;
                    }),
                    (this.getPEMStringFromHex = function (e, t) {
                      return Te(e, t);
                    }),
                    (this.newObject = function (e) {
                      var t = le.asn1,
                        r = t.ASN1Object,
                        n = t.DERBoolean,
                        i = t.DERInteger,
                        o = t.DERBitString,
                        s = t.DEROctetString,
                        a = t.DERNull,
                        u = t.DERObjectIdentifier,
                        c = t.DEREnumerated,
                        h = t.DERUTF8String,
                        l = t.DERNumericString,
                        f = t.DERPrintableString,
                        d = t.DERTeletexString,
                        g = t.DERIA5String,
                        p = t.DERUTCTime,
                        v = t.DERGeneralizedTime,
                        y = t.DERVisibleString,
                        m = t.DERBMPString,
                        _ = t.DERSequence,
                        S = t.DERSet,
                        b = t.DERTaggedObject,
                        w = t.ASN1Util.newObject;
                      if (e instanceof t.ASN1Object) return e;
                      var F = Object.keys(e);
                      if (1 != F.length) throw new Error('key of param shall be only one.');
                      var E = F[0];
                      if (
                        -1 ==
                        ':asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:'.indexOf(
                          ':' + E + ':',
                        )
                      )
                        throw new Error('undefined key: ' + E);
                      if ('bool' == E) return new n(e[E]);
                      if ('int' == E) return new i(e[E]);
                      if ('bitstr' == E) return new o(e[E]);
                      if ('octstr' == E) return new s(e[E]);
                      if ('null' == E) return new a(e[E]);
                      if ('oid' == E) return new u(e[E]);
                      if ('enum' == E) return new c(e[E]);
                      if ('utf8str' == E) return new h(e[E]);
                      if ('numstr' == E) return new l(e[E]);
                      if ('prnstr' == E) return new f(e[E]);
                      if ('telstr' == E) return new d(e[E]);
                      if ('ia5str' == E) return new g(e[E]);
                      if ('utctime' == E) return new p(e[E]);
                      if ('gentime' == E) return new v(e[E]);
                      if ('visstr' == E) return new y(e[E]);
                      if ('bmpstr' == E) return new m(e[E]);
                      if ('asn1' == E) return new r(e[E]);
                      if ('seq' == E) {
                        for (var x = e[E], k = [], A = 0; A < x.length; A++) {
                          var P = w(x[A]);
                          k.push(P);
                        }
                        return new _({ array: k });
                      }
                      if ('set' == E) {
                        for (x = e[E], k = [], A = 0; A < x.length; A++) (P = w(x[A])), k.push(P);
                        return new S({ array: k });
                      }
                      if ('tag' == E) {
                        var C = e[E];
                        if (
                          '[object Array]' === Object.prototype.toString.call(C) &&
                          3 == C.length
                        ) {
                          var T = w(C[2]);
                          return new b({ tag: C[0], explicit: C[1], obj: T });
                        }
                        return new b(C);
                      }
                    }),
                    (this.jsonToASN1HEX = function (e) {
                      return this.newObject(e).getEncodedHex();
                    });
                })()),
                (le.asn1.ASN1Util.oidHexToInt = function (e) {
                  for (
                    var t = '',
                      r = parseInt(e.substr(0, 2), 16),
                      n = ((t = Math.floor(r / 40) + '.' + (r % 40)), ''),
                      i = 2;
                    i < e.length;
                    i += 2
                  ) {
                    var o = ('00000000' + parseInt(e.substr(i, 2), 16).toString(2)).slice(-8);
                    (n += o.substr(1, 7)),
                      '0' == o.substr(0, 1) && ((t = t + '.' + new k(n, 2).toString(10)), (n = ''));
                  }
                  return t;
                }),
                (le.asn1.ASN1Util.oidIntToHex = function (e) {
                  var t = function (e) {
                      var t = e.toString(16);
                      return 1 == t.length && (t = '0' + t), t;
                    },
                    r = function (e) {
                      var r = '',
                        n = new k(e, 10).toString(2),
                        i = 7 - (n.length % 7);
                      7 == i && (i = 0);
                      for (var o = '', s = 0; s < i; s++) o += '0';
                      for (n = o + n, s = 0; s < n.length - 1; s += 7) {
                        var a = n.substr(s, 7);
                        s != n.length - 7 && (a = '1' + a), (r += t(parseInt(a, 2)));
                      }
                      return r;
                    };
                  if (!e.match(/^[0-9.]+$/)) throw 'malformed oid string: ' + e;
                  var n = '',
                    i = e.split('.'),
                    o = 40 * parseInt(i[0]) + parseInt(i[1]);
                  (n += t(o)), i.splice(0, 2);
                  for (var s = 0; s < i.length; s++) n += r(i[s]);
                  return n;
                }),
                (le.asn1.ASN1Object = function (e) {
                  (this.params = null),
                    (this.getLengthHexFromValue = function () {
                      if (void 0 === this.hV || null == this.hV)
                        throw new Error('this.hV is null or undefined');
                      if (this.hV.length % 2 == 1)
                        throw new Error(
                          'value hex must be even length: n=' + ''.length + ',v=' + this.hV,
                        );
                      var e = this.hV.length / 2,
                        t = e.toString(16);
                      if ((t.length % 2 == 1 && (t = '0' + t), e < 128)) return t;
                      var r = t.length / 2;
                      if (r > 15)
                        throw 'ASN.1 length too long to represent by 8x: n = ' + e.toString(16);
                      return (128 + r).toString(16) + t;
                    }),
                    (this.getEncodedHex = function () {
                      return (
                        (null == this.hTLV || this.isModified) &&
                          ((this.hV = this.getFreshValueHex()),
                          (this.hL = this.getLengthHexFromValue()),
                          (this.hTLV = this.hT + this.hL + this.hV),
                          (this.isModified = !1)),
                        this.hTLV
                      );
                    }),
                    (this.getValueHex = function () {
                      return this.getEncodedHex(), this.hV;
                    }),
                    (this.getFreshValueHex = function () {
                      return '';
                    }),
                    (this.setByParam = function (e) {
                      this.params = e;
                    }),
                    null != e && null != e.tlv && ((this.hTLV = e.tlv), (this.isModified = !1));
                }),
                (le.asn1.DERAbstractString = function (e) {
                  le.asn1.DERAbstractString.superclass.constructor.call(this),
                    (this.getString = function () {
                      return this.s;
                    }),
                    (this.setString = function (e) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.s = e),
                        (this.hV = Fe(this.s).toLowerCase());
                    }),
                    (this.setStringHex = function (e) {
                      (this.hTLV = null), (this.isModified = !0), (this.s = null), (this.hV = e);
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== e &&
                      ('string' == typeof e
                        ? this.setString(e)
                        : void 0 !== e.str
                        ? this.setString(e.str)
                        : void 0 !== e.hex && this.setStringHex(e.hex));
                }),
                o.lang.extend(le.asn1.DERAbstractString, le.asn1.ASN1Object),
                (le.asn1.DERAbstractTime = function (e) {
                  le.asn1.DERAbstractTime.superclass.constructor.call(this),
                    (this.localDateToUTC = function (e) {
                      var t = e.getTime() + 6e4 * e.getTimezoneOffset();
                      return new Date(t);
                    }),
                    (this.formatDate = function (e, t, r) {
                      var n = this.zeroPadding,
                        i = this.localDateToUTC(e),
                        o = String(i.getFullYear());
                      'utc' == t && (o = o.substr(2, 2));
                      var s =
                        o +
                        n(String(i.getMonth() + 1), 2) +
                        n(String(i.getDate()), 2) +
                        n(String(i.getHours()), 2) +
                        n(String(i.getMinutes()), 2) +
                        n(String(i.getSeconds()), 2);
                      if (!0 === r) {
                        var a = i.getMilliseconds();
                        if (0 != a) {
                          var u = n(String(a), 3);
                          s = s + '.' + (u = u.replace(/[0]+$/, ''));
                        }
                      }
                      return s + 'Z';
                    }),
                    (this.zeroPadding = function (e, t) {
                      return e.length >= t ? e : new Array(t - e.length + 1).join('0') + e;
                    }),
                    (this.getString = function () {
                      return this.s;
                    }),
                    (this.setString = function (e) {
                      (this.hTLV = null), (this.isModified = !0), (this.s = e), (this.hV = me(e));
                    }),
                    (this.setByDateValue = function (e, t, r, n, i, o) {
                      var s = new Date(Date.UTC(e, t - 1, r, n, i, o, 0));
                      this.setByDate(s);
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    });
                }),
                o.lang.extend(le.asn1.DERAbstractTime, le.asn1.ASN1Object),
                (le.asn1.DERAbstractStructured = function (e) {
                  le.asn1.DERAbstractString.superclass.constructor.call(this),
                    (this.setByASN1ObjectArray = function (e) {
                      (this.hTLV = null), (this.isModified = !0), (this.asn1Array = e);
                    }),
                    (this.appendASN1Object = function (e) {
                      (this.hTLV = null), (this.isModified = !0), this.asn1Array.push(e);
                    }),
                    (this.asn1Array = new Array()),
                    void 0 !== e && void 0 !== e.array && (this.asn1Array = e.array);
                }),
                o.lang.extend(le.asn1.DERAbstractStructured, le.asn1.ASN1Object),
                (le.asn1.DERBoolean = function (e) {
                  le.asn1.DERBoolean.superclass.constructor.call(this),
                    (this.hT = '01'),
                    (this.hTLV = 0 == e ? '010100' : '0101ff');
                }),
                o.lang.extend(le.asn1.DERBoolean, le.asn1.ASN1Object),
                (le.asn1.DERInteger = function (e) {
                  le.asn1.DERInteger.superclass.constructor.call(this),
                    (this.hT = '02'),
                    (this.setByBigInteger = function (e) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.hV = le.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e));
                    }),
                    (this.setByInteger = function (e) {
                      var t = new k(String(e), 10);
                      this.setByBigInteger(t);
                    }),
                    (this.setValueHex = function (e) {
                      this.hV = e;
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== e &&
                      (void 0 !== e.bigint
                        ? this.setByBigInteger(e.bigint)
                        : void 0 !== e.int
                        ? this.setByInteger(e.int)
                        : 'number' == typeof e
                        ? this.setByInteger(e)
                        : void 0 !== e.hex && this.setValueHex(e.hex));
                }),
                o.lang.extend(le.asn1.DERInteger, le.asn1.ASN1Object),
                (le.asn1.DERBitString = function (e) {
                  if (void 0 !== e && void 0 !== e.obj) {
                    var t = le.asn1.ASN1Util.newObject(e.obj);
                    e.hex = '00' + t.getEncodedHex();
                  }
                  le.asn1.DERBitString.superclass.constructor.call(this),
                    (this.hT = '03'),
                    (this.setHexValueIncludingUnusedBits = function (e) {
                      (this.hTLV = null), (this.isModified = !0), (this.hV = e);
                    }),
                    (this.setUnusedBitsAndHexValue = function (e, t) {
                      if (e < 0 || 7 < e) throw 'unused bits shall be from 0 to 7: u = ' + e;
                      var r = '0' + e;
                      (this.hTLV = null), (this.isModified = !0), (this.hV = r + t);
                    }),
                    (this.setByBinaryString = function (e) {
                      var t = 8 - ((e = e.replace(/0+$/, '')).length % 8);
                      8 == t && (t = 0);
                      for (var r = 0; r <= t; r++) e += '0';
                      var n = '';
                      for (r = 0; r < e.length - 1; r += 8) {
                        var i = e.substr(r, 8),
                          o = parseInt(i, 2).toString(16);
                        1 == o.length && (o = '0' + o), (n += o);
                      }
                      (this.hTLV = null), (this.isModified = !0), (this.hV = '0' + t + n);
                    }),
                    (this.setByBooleanArray = function (e) {
                      for (var t = '', r = 0; r < e.length; r++)
                        1 == e[r] ? (t += '1') : (t += '0');
                      this.setByBinaryString(t);
                    }),
                    (this.newFalseArray = function (e) {
                      for (var t = new Array(e), r = 0; r < e; r++) t[r] = !1;
                      return t;
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== e &&
                      ('string' == typeof e && e.toLowerCase().match(/^[0-9a-f]+$/)
                        ? this.setHexValueIncludingUnusedBits(e)
                        : void 0 !== e.hex
                        ? this.setHexValueIncludingUnusedBits(e.hex)
                        : void 0 !== e.bin
                        ? this.setByBinaryString(e.bin)
                        : void 0 !== e.array && this.setByBooleanArray(e.array));
                }),
                o.lang.extend(le.asn1.DERBitString, le.asn1.ASN1Object),
                (le.asn1.DEROctetString = function (e) {
                  if (void 0 !== e && void 0 !== e.obj) {
                    var t = le.asn1.ASN1Util.newObject(e.obj);
                    e.hex = t.getEncodedHex();
                  }
                  le.asn1.DEROctetString.superclass.constructor.call(this, e), (this.hT = '04');
                }),
                o.lang.extend(le.asn1.DEROctetString, le.asn1.DERAbstractString),
                (le.asn1.DERNull = function () {
                  le.asn1.DERNull.superclass.constructor.call(this),
                    (this.hT = '05'),
                    (this.hTLV = '0500');
                }),
                o.lang.extend(le.asn1.DERNull, le.asn1.ASN1Object),
                (le.asn1.DERObjectIdentifier = function (e) {
                  le.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                    (this.hT = '06'),
                    (this.setValueHex = function (e) {
                      (this.hTLV = null), (this.isModified = !0), (this.s = null), (this.hV = e);
                    }),
                    (this.setValueOidString = function (e) {
                      var t = (function (e) {
                        var t = function (e) {
                            var t = e.toString(16);
                            return 1 == t.length && (t = '0' + t), t;
                          },
                          r = function (e) {
                            var r = '',
                              n = parseInt(e, 10).toString(2),
                              i = 7 - (n.length % 7);
                            7 == i && (i = 0);
                            for (var o = '', s = 0; s < i; s++) o += '0';
                            for (n = o + n, s = 0; s < n.length - 1; s += 7) {
                              var a = n.substr(s, 7);
                              s != n.length - 7 && (a = '1' + a), (r += t(parseInt(a, 2)));
                            }
                            return r;
                          };
                        try {
                          if (!e.match(/^[0-9.]+$/)) return null;
                          var n = '',
                            i = e.split('.'),
                            o = 40 * parseInt(i[0], 10) + parseInt(i[1], 10);
                          (n += t(o)), i.splice(0, 2);
                          for (var s = 0; s < i.length; s++) n += r(i[s]);
                          return n;
                        } catch (a) {
                          return null;
                        }
                      })(e);
                      if (null == t) throw new Error('malformed oid string: ' + e);
                      (this.hTLV = null), (this.isModified = !0), (this.s = null), (this.hV = t);
                    }),
                    (this.setValueName = function (e) {
                      var t = le.asn1.x509.OID.name2oid(e);
                      if ('' === t) throw new Error('DERObjectIdentifier oidName undefined: ' + e);
                      this.setValueOidString(t);
                    }),
                    (this.setValueNameOrOid = function (e) {
                      e.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(e) : this.setValueName(e);
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    (this.setByParam = function (e) {
                      'string' == typeof e
                        ? this.setValueNameOrOid(e)
                        : void 0 !== e.oid
                        ? this.setValueNameOrOid(e.oid)
                        : void 0 !== e.name
                        ? this.setValueNameOrOid(e.name)
                        : void 0 !== e.hex && this.setValueHex(e.hex);
                    }),
                    void 0 !== e && this.setByParam(e);
                }),
                o.lang.extend(le.asn1.DERObjectIdentifier, le.asn1.ASN1Object),
                (le.asn1.DEREnumerated = function (e) {
                  le.asn1.DEREnumerated.superclass.constructor.call(this),
                    (this.hT = '0a'),
                    (this.setByBigInteger = function (e) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.hV = le.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e));
                    }),
                    (this.setByInteger = function (e) {
                      var t = new k(String(e), 10);
                      this.setByBigInteger(t);
                    }),
                    (this.setValueHex = function (e) {
                      this.hV = e;
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    void 0 !== e &&
                      (void 0 !== e.int
                        ? this.setByInteger(e.int)
                        : 'number' == typeof e
                        ? this.setByInteger(e)
                        : void 0 !== e.hex && this.setValueHex(e.hex));
                }),
                o.lang.extend(le.asn1.DEREnumerated, le.asn1.ASN1Object),
                (le.asn1.DERUTF8String = function (e) {
                  le.asn1.DERUTF8String.superclass.constructor.call(this, e), (this.hT = '0c');
                }),
                o.lang.extend(le.asn1.DERUTF8String, le.asn1.DERAbstractString),
                (le.asn1.DERNumericString = function (e) {
                  le.asn1.DERNumericString.superclass.constructor.call(this, e), (this.hT = '12');
                }),
                o.lang.extend(le.asn1.DERNumericString, le.asn1.DERAbstractString),
                (le.asn1.DERPrintableString = function (e) {
                  le.asn1.DERPrintableString.superclass.constructor.call(this, e), (this.hT = '13');
                }),
                o.lang.extend(le.asn1.DERPrintableString, le.asn1.DERAbstractString),
                (le.asn1.DERTeletexString = function (e) {
                  le.asn1.DERTeletexString.superclass.constructor.call(this, e), (this.hT = '14');
                }),
                o.lang.extend(le.asn1.DERTeletexString, le.asn1.DERAbstractString),
                (le.asn1.DERIA5String = function (e) {
                  le.asn1.DERIA5String.superclass.constructor.call(this, e), (this.hT = '16');
                }),
                o.lang.extend(le.asn1.DERIA5String, le.asn1.DERAbstractString),
                (le.asn1.DERVisibleString = function (e) {
                  le.asn1.DERIA5String.superclass.constructor.call(this, e), (this.hT = '1a');
                }),
                o.lang.extend(le.asn1.DERVisibleString, le.asn1.DERAbstractString),
                (le.asn1.DERBMPString = function (e) {
                  le.asn1.DERBMPString.superclass.constructor.call(this, e), (this.hT = '1e');
                }),
                o.lang.extend(le.asn1.DERBMPString, le.asn1.DERAbstractString),
                (le.asn1.DERUTCTime = function (e) {
                  le.asn1.DERUTCTime.superclass.constructor.call(this, e),
                    (this.hT = '17'),
                    (this.setByDate = function (e) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.date = e),
                        (this.s = this.formatDate(this.date, 'utc')),
                        (this.hV = me(this.s));
                    }),
                    (this.getFreshValueHex = function () {
                      return (
                        void 0 === this.date &&
                          void 0 === this.s &&
                          ((this.date = new Date()),
                          (this.s = this.formatDate(this.date, 'utc')),
                          (this.hV = me(this.s))),
                        this.hV
                      );
                    }),
                    void 0 !== e &&
                      (void 0 !== e.str
                        ? this.setString(e.str)
                        : 'string' == typeof e && e.match(/^[0-9]{12}Z$/)
                        ? this.setString(e)
                        : void 0 !== e.hex
                        ? this.setStringHex(e.hex)
                        : void 0 !== e.date && this.setByDate(e.date));
                }),
                o.lang.extend(le.asn1.DERUTCTime, le.asn1.DERAbstractTime),
                (le.asn1.DERGeneralizedTime = function (e) {
                  le.asn1.DERGeneralizedTime.superclass.constructor.call(this, e),
                    (this.hT = '18'),
                    (this.withMillis = !1),
                    (this.setByDate = function (e) {
                      (this.hTLV = null),
                        (this.isModified = !0),
                        (this.date = e),
                        (this.s = this.formatDate(this.date, 'gen', this.withMillis)),
                        (this.hV = me(this.s));
                    }),
                    (this.getFreshValueHex = function () {
                      return (
                        void 0 === this.date &&
                          void 0 === this.s &&
                          ((this.date = new Date()),
                          (this.s = this.formatDate(this.date, 'gen', this.withMillis)),
                          (this.hV = me(this.s))),
                        this.hV
                      );
                    }),
                    void 0 !== e &&
                      (void 0 !== e.str
                        ? this.setString(e.str)
                        : 'string' == typeof e && e.match(/^[0-9]{14}Z$/)
                        ? this.setString(e)
                        : void 0 !== e.hex
                        ? this.setStringHex(e.hex)
                        : void 0 !== e.date && this.setByDate(e.date),
                      !0 === e.millis && (this.withMillis = !0));
                }),
                o.lang.extend(le.asn1.DERGeneralizedTime, le.asn1.DERAbstractTime),
                (le.asn1.DERSequence = function (e) {
                  le.asn1.DERSequence.superclass.constructor.call(this, e),
                    (this.hT = '30'),
                    (this.getFreshValueHex = function () {
                      for (var e = '', t = 0; t < this.asn1Array.length; t++)
                        e += this.asn1Array[t].getEncodedHex();
                      return (this.hV = e), this.hV;
                    });
                }),
                o.lang.extend(le.asn1.DERSequence, le.asn1.DERAbstractStructured),
                (le.asn1.DERSet = function (e) {
                  le.asn1.DERSet.superclass.constructor.call(this, e),
                    (this.hT = '31'),
                    (this.sortFlag = !0),
                    (this.getFreshValueHex = function () {
                      for (var e = new Array(), t = 0; t < this.asn1Array.length; t++) {
                        var r = this.asn1Array[t];
                        e.push(r.getEncodedHex());
                      }
                      return 1 == this.sortFlag && e.sort(), (this.hV = e.join('')), this.hV;
                    }),
                    void 0 !== e &&
                      void 0 !== e.sortflag &&
                      0 == e.sortflag &&
                      (this.sortFlag = !1);
                }),
                o.lang.extend(le.asn1.DERSet, le.asn1.DERAbstractStructured),
                (le.asn1.DERTaggedObject = function (e) {
                  le.asn1.DERTaggedObject.superclass.constructor.call(this);
                  var t = le.asn1;
                  (this.hT = 'a0'),
                    (this.hV = ''),
                    (this.isExplicit = !0),
                    (this.asn1Object = null),
                    (this.setASN1Object = function (e, t, r) {
                      (this.hT = t),
                        (this.isExplicit = e),
                        (this.asn1Object = r),
                        this.isExplicit
                          ? ((this.hV = this.asn1Object.getEncodedHex()),
                            (this.hTLV = null),
                            (this.isModified = !0))
                          : ((this.hV = null),
                            (this.hTLV = r.getEncodedHex()),
                            (this.hTLV = this.hTLV.replace(/^../, t)),
                            (this.isModified = !1));
                    }),
                    (this.getFreshValueHex = function () {
                      return this.hV;
                    }),
                    (this.setByParam = function (e) {
                      null != e.tag && (this.hT = e.tag),
                        null != e.explicit && (this.isExplicit = e.explicit),
                        null != e.tage && ((this.hT = e.tage), (this.isExplicit = !0)),
                        null != e.tagi && ((this.hT = e.tagi), (this.isExplicit = !1)),
                        null != e.obj &&
                          (e.obj instanceof t.ASN1Object
                            ? ((this.asn1Object = e.obj),
                              this.setASN1Object(this.isExplicit, this.hT, this.asn1Object))
                            : 'object' == r(e.obj) &&
                              ((this.asn1Object = t.ASN1Util.newObject(e.obj)),
                              this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
                    }),
                    null != e && this.setByParam(e);
                }),
                o.lang.extend(le.asn1.DERTaggedObject, le.asn1.ASN1Object);
              var le,
                fe,
                de,
                ge = new (function () {})();
              function pe(e) {
                for (var t = new Array(), r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                return t;
              }
              function ve(e) {
                for (var t = '', r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                return t;
              }
              function ye(e) {
                for (var t = '', r = 0; r < e.length; r++) {
                  var n = e[r].toString(16);
                  1 == n.length && (n = '0' + n), (t += n);
                }
                return t;
              }
              function me(e) {
                return ye(pe(e));
              }
              function _e(e) {
                return (e = (e = e.replace(/\=/g, '')).replace(/\+/g, '-')).replace(/\//g, '_');
              }
              function Se(e) {
                return (
                  e.length % 4 == 2 ? (e += '==') : e.length % 4 == 3 && (e += '='),
                  (e = e.replace(/-/g, '+')).replace(/_/g, '/')
                );
              }
              function be(e) {
                return e.length % 2 == 1 && (e = '0' + e), _e(F(e));
              }
              function we(e) {
                return E(Se(e));
              }
              function Fe(e) {
                return Le(je(e));
              }
              function Ee(e) {
                return decodeURIComponent(Ne(e));
              }
              function xe(e) {
                for (var t = '', r = 0; r < e.length - 1; r += 2)
                  t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
                return t;
              }
              function ke(e) {
                for (var t = '', r = 0; r < e.length; r++)
                  t += ('0' + e.charCodeAt(r).toString(16)).slice(-2);
                return t;
              }
              function Ae(e) {
                return F(e);
              }
              function Pe(e) {
                var t = Ae(e).replace(/(.{64})/g, '$1\r\n');
                return t.replace(/\r\n$/, '');
              }
              function Ce(e) {
                return E(e.replace(/[^0-9A-Za-z\/+=]*/g, ''));
              }
              function Te(e, t) {
                return '-----BEGIN ' + t + '-----\r\n' + Pe(e) + '\r\n-----END ' + t + '-----\r\n';
              }
              function Ie(e, t) {
                if (-1 == e.indexOf('-----BEGIN ')) throw "can't find PEM header: " + t;
                return Ce(
                  (e =
                    void 0 !== t
                      ? (e = e.replace(new RegExp('^[^]*-----BEGIN ' + t + '-----'), '')).replace(
                          new RegExp('-----END ' + t + '-----[^]*$'),
                          '',
                        )
                      : (e = e.replace(/^[^]*-----BEGIN [^-]+-----/, '')).replace(
                          /-----END [^-]+-----[^]*$/,
                          '',
                        )),
                );
              }
              function Re(e) {
                var t, r, n, i, o, s, a, u, c, h, l;
                if ((l = e.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/)))
                  return (
                    (u = l[1]),
                    (t = parseInt(u)),
                    2 === u.length &&
                      (50 <= t && t < 100 ? (t = 1900 + t) : 0 <= t && t < 50 && (t = 2e3 + t)),
                    (r = parseInt(l[2]) - 1),
                    (n = parseInt(l[3])),
                    (i = parseInt(l[4])),
                    (o = parseInt(l[5])),
                    (s = parseInt(l[6])),
                    (a = 0),
                    '' !== (c = l[7]) &&
                      ((h = (c.substr(1) + '00').substr(0, 3)), (a = parseInt(h))),
                    Date.UTC(t, r, n, i, o, s, a)
                  );
                throw 'unsupported zulu format: ' + e;
              }
              function De(e) {
                return ~~(Re(e) / 1e3);
              }
              function Le(e) {
                return e.replace(/%/g, '');
              }
              function Ne(e) {
                return e.replace(/(..)/g, '%$1');
              }
              function Ue(e) {
                var t = 'malformed IPv6 address';
                if (!e.match(/^[0-9A-Fa-f:]+$/)) throw t;
                var r = (e = e.toLowerCase()).split(':').length - 1;
                if (r < 2) throw t;
                var n = ':'.repeat(7 - r + 2),
                  i = (e = e.replace('::', n)).split(':');
                if (8 != i.length) throw t;
                for (var o = 0; o < 8; o++) i[o] = ('0000' + i[o]).slice(-4);
                return i.join('');
              }
              function Oe(e) {
                if (!e.match(/^[0-9A-Fa-f]{32}$/)) throw 'malformed IPv6 address octet';
                for (var t = (e = e.toLowerCase()).match(/.{1,4}/g), r = 0; r < 8; r++)
                  (t[r] = t[r].replace(/^0+/, '')), '' == t[r] && (t[r] = '0');
                var n = (e = ':' + t.join(':') + ':').match(/:(0:){2,}/g);
                if (null === n) return e.slice(1, -1);
                var i = '';
                for (r = 0; r < n.length; r++) n[r].length > i.length && (i = n[r]);
                return (e = e.replace(i, '::')).slice(1, -1);
              }
              function Be(e) {
                var t = 'malformed hex value';
                if (!e.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw t;
                if (8 != e.length) return 32 == e.length ? Oe(e) : e;
                try {
                  return (
                    parseInt(e.substr(0, 2), 16) +
                    '.' +
                    parseInt(e.substr(2, 2), 16) +
                    '.' +
                    parseInt(e.substr(4, 2), 16) +
                    '.' +
                    parseInt(e.substr(6, 2), 16)
                  );
                } catch (r) {
                  throw t;
                }
              }
              function je(e) {
                for (var t = encodeURIComponent(e), r = '', n = 0; n < t.length; n++)
                  '%' == t[n] ? ((r += t.substr(n, 3)), (n += 2)) : (r = r + '%' + me(t[n]));
                return r;
              }
              function Me(e) {
                return !(e.length % 2 != 0 || (!e.match(/^[0-9a-f]+$/) && !e.match(/^[0-9A-F]+$/)));
              }
              function He(e) {
                return e.length % 2 == 1 ? '0' + e : e.substr(0, 1) > '7' ? '00' + e : e;
              }
              (ge.getLblen = function (e, t) {
                if ('8' != e.substr(t + 2, 1)) return 1;
                var r = parseInt(e.substr(t + 3, 1));
                return 0 == r ? -1 : 0 < r && r < 10 ? r + 1 : -2;
              }),
                (ge.getL = function (e, t) {
                  var r = ge.getLblen(e, t);
                  return r < 1 ? '' : e.substr(t + 2, 2 * r);
                }),
                (ge.getVblen = function (e, t) {
                  var r;
                  return '' == (r = ge.getL(e, t))
                    ? -1
                    : ('8' === r.substr(0, 1) ? new k(r.substr(2), 16) : new k(r, 16)).intValue();
                }),
                (ge.getVidx = function (e, t) {
                  var r = ge.getLblen(e, t);
                  return r < 0 ? r : t + 2 * (r + 1);
                }),
                (ge.getV = function (e, t) {
                  var r = ge.getVidx(e, t),
                    n = ge.getVblen(e, t);
                  return e.substr(r, 2 * n);
                }),
                (ge.getTLV = function (e, t) {
                  return e.substr(t, 2) + ge.getL(e, t) + ge.getV(e, t);
                }),
                (ge.getTLVblen = function (e, t) {
                  return 2 + 2 * ge.getLblen(e, t) + 2 * ge.getVblen(e, t);
                }),
                (ge.getNextSiblingIdx = function (e, t) {
                  return ge.getVidx(e, t) + 2 * ge.getVblen(e, t);
                }),
                (ge.getChildIdx = function (e, t) {
                  var r,
                    n,
                    i,
                    o = ge,
                    s = [];
                  (r = o.getVidx(e, t)),
                    (n = 2 * o.getVblen(e, t)),
                    '03' == e.substr(t, 2) && ((r += 2), (n -= 2)),
                    (i = 0);
                  for (var a = r; i <= n; ) {
                    var u = o.getTLVblen(e, a);
                    if (((i += u) <= n && s.push(a), (a += u), i >= n)) break;
                  }
                  return s;
                }),
                (ge.getNthChildIdx = function (e, t, r) {
                  return ge.getChildIdx(e, t)[r];
                }),
                (ge.getIdxbyList = function (e, t, r, n) {
                  var i,
                    o,
                    s = ge;
                  return 0 == r.length
                    ? void 0 !== n && e.substr(t, 2) !== n
                      ? -1
                      : t
                    : (i = r.shift()) >= (o = s.getChildIdx(e, t)).length
                    ? -1
                    : s.getIdxbyList(e, o[i], r, n);
                }),
                (ge.getIdxbyListEx = function (e, t, r, n) {
                  var i,
                    o,
                    s = ge;
                  if (0 == r.length) return void 0 !== n && e.substr(t, 2) !== n ? -1 : t;
                  (i = r.shift()), (o = s.getChildIdx(e, t));
                  for (var a = 0, u = 0; u < o.length; u++) {
                    var c = e.substr(o[u], 2);
                    if (
                      ('number' == typeof i && !s.isContextTag(c) && a == i) ||
                      ('string' == typeof i && s.isContextTag(c, i))
                    )
                      return s.getIdxbyListEx(e, o[u], r, n);
                    s.isContextTag(c) || a++;
                  }
                  return -1;
                }),
                (ge.getTLVbyList = function (e, t, r, n) {
                  var i = ge,
                    o = i.getIdxbyList(e, t, r, n);
                  return -1 == o || o >= e.length ? null : i.getTLV(e, o);
                }),
                (ge.getTLVbyListEx = function (e, t, r, n) {
                  var i = ge,
                    o = i.getIdxbyListEx(e, t, r, n);
                  return -1 == o ? null : i.getTLV(e, o);
                }),
                (ge.getVbyList = function (e, t, r, n, i) {
                  var o,
                    s,
                    a = ge;
                  return -1 == (o = a.getIdxbyList(e, t, r, n)) || o >= e.length
                    ? null
                    : ((s = a.getV(e, o)), !0 === i && (s = s.substr(2)), s);
                }),
                (ge.getVbyListEx = function (e, t, r, n, i) {
                  var o,
                    s,
                    a = ge;
                  return -1 == (o = a.getIdxbyListEx(e, t, r, n))
                    ? null
                    : ((s = a.getV(e, o)),
                      '03' == e.substr(o, 2) && !1 !== i && (s = s.substr(2)),
                      s);
                }),
                (ge.getInt = function (e, t, r) {
                  null == r && (r = -1);
                  try {
                    var n = e.substr(t, 2);
                    if ('02' != n && '03' != n) return r;
                    var i = ge.getV(e, t);
                    return '02' == n
                      ? parseInt(i, 16)
                      : (function (e) {
                          try {
                            var t = e.substr(0, 2);
                            if ('00' == t) return parseInt(e.substr(2), 16);
                            var r = parseInt(t, 16),
                              n = e.substr(2),
                              i = parseInt(n, 16).toString(2);
                            return (
                              '0' == i && (i = '00000000'), (i = i.slice(0, 0 - r)), parseInt(i, 2)
                            );
                          } catch (o) {
                            return -1;
                          }
                        })(i);
                  } catch (o) {
                    return r;
                  }
                }),
                (ge.getOID = function (e, t, r) {
                  null == r && (r = null);
                  try {
                    return '06' != e.substr(t, 2)
                      ? r
                      : (function (e) {
                          if (!Me(e)) return null;
                          try {
                            var t = [],
                              r = e.substr(0, 2),
                              n = parseInt(r, 16);
                            (t[0] = new String(Math.floor(n / 40))), (t[1] = new String(n % 40));
                            for (var i = e.substr(2), o = [], s = 0; s < i.length / 2; s++)
                              o.push(parseInt(i.substr(2 * s, 2), 16));
                            var a = [],
                              u = '';
                            for (s = 0; s < o.length; s++)
                              128 & o[s]
                                ? (u += Ve((127 & o[s]).toString(2), 7))
                                : ((u += Ve((127 & o[s]).toString(2), 7)),
                                  a.push(new String(parseInt(u, 2))),
                                  (u = ''));
                            var c = t.join('.');
                            return a.length > 0 && (c = c + '.' + a.join('.')), c;
                          } catch (h) {
                            return null;
                          }
                        })(ge.getV(e, t));
                  } catch (n) {
                    return r;
                  }
                }),
                (ge.getOIDName = function (e, t, r) {
                  null == r && (r = null);
                  try {
                    var n = ge.getOID(e, t, r);
                    if (n == r) return r;
                    var i = le.asn1.x509.OID.oid2name(n);
                    return '' == i ? n : i;
                  } catch (o) {
                    return r;
                  }
                }),
                (ge.getString = function (e, t, r) {
                  null == r && (r = null);
                  try {
                    return xe(ge.getV(e, t));
                  } catch (n) {
                    return r;
                  }
                }),
                (ge.hextooidstr = function (e) {
                  var t = function (e, t) {
                      return e.length >= t ? e : new Array(t - e.length + 1).join('0') + e;
                    },
                    r = [],
                    n = e.substr(0, 2),
                    i = parseInt(n, 16);
                  (r[0] = new String(Math.floor(i / 40))), (r[1] = new String(i % 40));
                  for (var o = e.substr(2), s = [], a = 0; a < o.length / 2; a++)
                    s.push(parseInt(o.substr(2 * a, 2), 16));
                  var u = [],
                    c = '';
                  for (a = 0; a < s.length; a++)
                    128 & s[a]
                      ? (c += t((127 & s[a]).toString(2), 7))
                      : ((c += t((127 & s[a]).toString(2), 7)),
                        u.push(new String(parseInt(c, 2))),
                        (c = ''));
                  var h = r.join('.');
                  return u.length > 0 && (h = h + '.' + u.join('.')), h;
                }),
                (ge.dump = function (e, t, r, n) {
                  var i = ge,
                    o = i.getV,
                    s = i.dump,
                    a = i.getChildIdx,
                    u = e;
                  e instanceof le.asn1.ASN1Object && (u = e.getEncodedHex());
                  var c = function (e, t) {
                    return e.length <= 2 * t
                      ? e
                      : e.substr(0, t) +
                          '..(total ' +
                          e.length / 2 +
                          'bytes)..' +
                          e.substr(e.length - t, t);
                  };
                  void 0 === t && (t = { ommit_long_octet: 32 }),
                    void 0 === r && (r = 0),
                    void 0 === n && (n = '');
                  var h,
                    l = t.ommit_long_octet;
                  if ('01' == (h = u.substr(r, 2)))
                    return '00' == (f = o(u, r)) ? n + 'BOOLEAN FALSE\n' : n + 'BOOLEAN TRUE\n';
                  if ('02' == h) return n + 'INTEGER ' + c((f = o(u, r)), l) + '\n';
                  if ('03' == h) {
                    var f = o(u, r);
                    return i.isASN1HEX(f.substr(2))
                      ? (b = n + 'BITSTRING, encapsulates\n') + s(f.substr(2), t, 0, n + '  ')
                      : n + 'BITSTRING ' + c(f, l) + '\n';
                  }
                  if ('04' == h)
                    return (
                      (f = o(u, r)),
                      i.isASN1HEX(f)
                        ? (b = n + 'OCTETSTRING, encapsulates\n') + s(f, t, 0, n + '  ')
                        : n + 'OCTETSTRING ' + c(f, l) + '\n'
                    );
                  if ('05' == h) return n + 'NULL\n';
                  if ('06' == h) {
                    var d = o(u, r),
                      g = le.asn1.ASN1Util.oidHexToInt(d),
                      p = le.asn1.x509.OID.oid2name(g),
                      v = g.replace(/\./g, ' ');
                    return '' != p
                      ? n + 'ObjectIdentifier ' + p + ' (' + v + ')\n'
                      : n + 'ObjectIdentifier (' + v + ')\n';
                  }
                  if ('0a' == h) return n + 'ENUMERATED ' + parseInt(o(u, r)) + '\n';
                  if ('0c' == h) return n + "UTF8String '" + Ee(o(u, r)) + "'\n";
                  if ('13' == h) return n + "PrintableString '" + Ee(o(u, r)) + "'\n";
                  if ('14' == h) return n + "TeletexString '" + Ee(o(u, r)) + "'\n";
                  if ('16' == h) return n + "IA5String '" + Ee(o(u, r)) + "'\n";
                  if ('17' == h) return n + 'UTCTime ' + Ee(o(u, r)) + '\n';
                  if ('18' == h) return n + 'GeneralizedTime ' + Ee(o(u, r)) + '\n';
                  if ('1a' == h) return n + "VisualString '" + Ee(o(u, r)) + "'\n";
                  if ('1e' == h) return n + "BMPString '" + Ee(o(u, r)) + "'\n";
                  if ('30' == h) {
                    if ('3000' == u.substr(r, 4)) return n + 'SEQUENCE {}\n';
                    b = n + 'SEQUENCE\n';
                    var y = t;
                    if (
                      (2 == (S = a(u, r)).length || 3 == S.length) &&
                      '06' == u.substr(S[0], 2) &&
                      '04' == u.substr(S[S.length - 1], 2)
                    ) {
                      p = i.oidname(o(u, S[0]));
                      var m = JSON.parse(JSON.stringify(t));
                      (m.x509ExtName = p), (y = m);
                    }
                    for (var _ = 0; _ < S.length; _++) b += s(u, y, S[_], n + '  ');
                    return b;
                  }
                  if ('31' == h) {
                    b = n + 'SET\n';
                    var S = a(u, r);
                    for (_ = 0; _ < S.length; _++) b += s(u, t, S[_], n + '  ');
                    return b;
                  }
                  if (0 != (128 & (h = parseInt(h, 16)))) {
                    var b,
                      w = 31 & h;
                    if (0 != (32 & h)) {
                      for (b = n + '[' + w + ']\n', S = a(u, r), _ = 0; _ < S.length; _++)
                        b += s(u, t, S[_], n + '  ');
                      return b;
                    }
                    return (
                      (f = o(u, r)),
                      ge.isASN1HEX(f)
                        ? (b = n + '[' + w + ']\n') + s(f, t, 0, n + '  ')
                        : (('68747470' == f.substr(0, 8) ||
                            ('subjectAltName' === t.x509ExtName && 2 == w)) &&
                            (f = Ee(f)),
                          n + '[' + w + '] ' + f + '\n')
                    );
                  }
                  return n + 'UNKNOWN(' + h + ') ' + o(u, r) + '\n';
                }),
                (ge.isContextTag = function (e, t) {
                  var r, n;
                  e = e.toLowerCase();
                  try {
                    r = parseInt(e, 16);
                  } catch (i) {
                    return -1;
                  }
                  if (void 0 === t) return 128 == (192 & r);
                  try {
                    return (
                      null != t.match(/^\[[0-9]+\]$/) &&
                      !((n = parseInt(t.substr(1, t.length - 1), 10)) > 31) &&
                      128 == (192 & r) &&
                      (31 & r) == n
                    );
                  } catch (i) {
                    return !1;
                  }
                }),
                (ge.isASN1HEX = function (e) {
                  var t = ge;
                  if (e.length % 2 == 1) return !1;
                  var r = t.getVblen(e, 0),
                    n = e.substr(0, 2),
                    i = t.getL(e, 0);
                  return e.length - n.length - i.length == 2 * r;
                }),
                (ge.checkStrictDER = function (e, t, r, n, i) {
                  var o = ge;
                  if (void 0 === r) {
                    if ('string' != typeof e) throw new Error('not hex string');
                    if (((e = e.toLowerCase()), !le.lang.String.isHex(e)))
                      throw new Error('not hex string');
                    (r = e.length),
                      (i = (n = e.length / 2) < 128 ? 1 : Math.ceil(n.toString(16)) + 1);
                  }
                  if (o.getL(e, t).length > 2 * i) throw new Error('L of TLV too long: idx=' + t);
                  var s = o.getVblen(e, t);
                  if (s > n) throw new Error('value of L too long than hex: idx=' + t);
                  var a = o.getTLV(e, t),
                    u = a.length - 2 - o.getL(e, t).length;
                  if (u !== 2 * s)
                    throw new Error(
                      "V string length and L's value not the same:" + u + '/' + 2 * s,
                    );
                  if (0 === t && e.length != a.length)
                    throw new Error(
                      'total length and TLV length unmatch:' + e.length + '!=' + a.length,
                    );
                  var c = e.substr(t, 2);
                  if ('02' === c) {
                    var h = o.getVidx(e, t);
                    if ('00' == e.substr(h, 2) && e.charCodeAt(h + 2) < 56)
                      throw new Error('not least zeros for DER INTEGER');
                  }
                  if (32 & parseInt(c, 16)) {
                    for (
                      var l = o.getVblen(e, t), f = 0, d = o.getChildIdx(e, t), g = 0;
                      g < d.length;
                      g++
                    )
                      (f += o.getTLV(e, d[g]).length), o.checkStrictDER(e, d[g], r, n, i);
                    if (2 * l != f)
                      throw new Error(
                        "sum of children's TLV length and L unmatch: " + 2 * l + '!=' + f,
                      );
                  }
                }),
                (ge.oidname = function (e) {
                  var t = le.asn1;
                  le.lang.String.isHex(e) && (e = t.ASN1Util.oidHexToInt(e));
                  var r = t.x509.OID.oid2name(e);
                  return '' === r && (r = e), r;
                }),
                (void 0 !== le && le) || (t.KJUR = le = {}),
                (void 0 !== le.lang && le.lang) || (le.lang = {}),
                (le.lang.String = function () {}),
                'function' == typeof e
                  ? ((t.utf8tob64u = fe =
                      function (t) {
                        return _e(e.from(t, 'utf8').toString('base64'));
                      }),
                    (t.b64utoutf8 = de =
                      function (t) {
                        return e.from(Se(t), 'base64').toString('utf8');
                      }))
                  : ((t.utf8tob64u = fe =
                      function (e) {
                        return be(Le(je(e)));
                      }),
                    (t.b64utoutf8 = de =
                      function (e) {
                        return decodeURIComponent(Ne(we(e)));
                      })),
                (le.lang.String.isInteger = function (e) {
                  return !!e.match(/^[0-9]+$/) || !!e.match(/^-[0-9]+$/);
                }),
                (le.lang.String.isHex = function (e) {
                  return Me(e);
                }),
                (le.lang.String.isBase64 = function (e) {
                  return !(
                    !(e = e.replace(/\s+/g, '')).match(/^[0-9A-Za-z+\/]+={0,3}$/) ||
                    e.length % 4 != 0
                  );
                }),
                (le.lang.String.isBase64URL = function (e) {
                  return !e.match(/[+/=]/) && ((e = Se(e)), le.lang.String.isBase64(e));
                }),
                (le.lang.String.isIntegerArray = function (e) {
                  return !!(e = e.replace(/\s+/g, '')).match(/^\[[0-9,]+\]$/);
                }),
                (le.lang.String.isPrintable = function (e) {
                  return null !== e.match(/^[0-9A-Za-z '()+,-./:=?]*$/);
                }),
                (le.lang.String.isIA5 = function (e) {
                  return null !== e.match(/^[\x20-\x21\x23-\x7f]*$/);
                }),
                (le.lang.String.isMail = function (e) {
                  return (
                    null !==
                    e.match(
                      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                    )
                  );
                });
              var Ve = function (e, t, r) {
                return (
                  null == r && (r = '0'),
                  e.length >= t ? e : new Array(t - e.length + 1).join(r) + e
                );
              };
              (void 0 !== le && le) || (t.KJUR = le = {}),
                (void 0 !== le.crypto && le.crypto) || (le.crypto = {}),
                (le.crypto.Util = new (function () {
                  (this.DIGESTINFOHEAD = {
                    sha1: '3021300906052b0e03021a05000414',
                    sha224: '302d300d06096086480165030402040500041c',
                    sha256: '3031300d060960864801650304020105000420',
                    sha384: '3041300d060960864801650304020205000430',
                    sha512: '3051300d060960864801650304020305000440',
                    md2: '3020300c06082a864886f70d020205000410',
                    md5: '3020300c06082a864886f70d020505000410',
                    ripemd160: '3021300906052b2403020105000414',
                  }),
                    (this.DEFAULTPROVIDER = {
                      md5: 'cryptojs',
                      sha1: 'cryptojs',
                      sha224: 'cryptojs',
                      sha256: 'cryptojs',
                      sha384: 'cryptojs',
                      sha512: 'cryptojs',
                      ripemd160: 'cryptojs',
                      hmacmd5: 'cryptojs',
                      hmacsha1: 'cryptojs',
                      hmacsha224: 'cryptojs',
                      hmacsha256: 'cryptojs',
                      hmacsha384: 'cryptojs',
                      hmacsha512: 'cryptojs',
                      hmacripemd160: 'cryptojs',
                      MD5withRSA: 'cryptojs/jsrsa',
                      SHA1withRSA: 'cryptojs/jsrsa',
                      SHA224withRSA: 'cryptojs/jsrsa',
                      SHA256withRSA: 'cryptojs/jsrsa',
                      SHA384withRSA: 'cryptojs/jsrsa',
                      SHA512withRSA: 'cryptojs/jsrsa',
                      RIPEMD160withRSA: 'cryptojs/jsrsa',
                      MD5withECDSA: 'cryptojs/jsrsa',
                      SHA1withECDSA: 'cryptojs/jsrsa',
                      SHA224withECDSA: 'cryptojs/jsrsa',
                      SHA256withECDSA: 'cryptojs/jsrsa',
                      SHA384withECDSA: 'cryptojs/jsrsa',
                      SHA512withECDSA: 'cryptojs/jsrsa',
                      RIPEMD160withECDSA: 'cryptojs/jsrsa',
                      SHA1withDSA: 'cryptojs/jsrsa',
                      SHA224withDSA: 'cryptojs/jsrsa',
                      SHA256withDSA: 'cryptojs/jsrsa',
                      MD5withRSAandMGF1: 'cryptojs/jsrsa',
                      SHAwithRSAandMGF1: 'cryptojs/jsrsa',
                      SHA1withRSAandMGF1: 'cryptojs/jsrsa',
                      SHA224withRSAandMGF1: 'cryptojs/jsrsa',
                      SHA256withRSAandMGF1: 'cryptojs/jsrsa',
                      SHA384withRSAandMGF1: 'cryptojs/jsrsa',
                      SHA512withRSAandMGF1: 'cryptojs/jsrsa',
                      RIPEMD160withRSAandMGF1: 'cryptojs/jsrsa',
                    }),
                    (this.CRYPTOJSMESSAGEDIGESTNAME = {
                      md5: b.algo.MD5,
                      sha1: b.algo.SHA1,
                      sha224: b.algo.SHA224,
                      sha256: b.algo.SHA256,
                      sha384: b.algo.SHA384,
                      sha512: b.algo.SHA512,
                      ripemd160: b.algo.RIPEMD160,
                    }),
                    (this.getDigestInfoHex = function (e, t) {
                      if (void 0 === this.DIGESTINFOHEAD[t])
                        throw 'alg not supported in Util.DIGESTINFOHEAD: ' + t;
                      return this.DIGESTINFOHEAD[t] + e;
                    }),
                    (this.getPaddedDigestInfoHex = function (e, t, r) {
                      var n = this.getDigestInfoHex(e, t),
                        i = r / 4;
                      if (n.length + 22 > i)
                        throw 'key is too short for SigAlg: keylen=' + r + ',' + t;
                      for (
                        var o = '0001', s = '00' + n, a = '', u = i - o.length - s.length, c = 0;
                        c < u;
                        c += 2
                      )
                        a += 'ff';
                      return o + a + s;
                    }),
                    (this.hashString = function (e, t) {
                      return new le.crypto.MessageDigest({ alg: t }).digestString(e);
                    }),
                    (this.hashHex = function (e, t) {
                      return new le.crypto.MessageDigest({ alg: t }).digestHex(e);
                    }),
                    (this.sha1 = function (e) {
                      return this.hashString(e, 'sha1');
                    }),
                    (this.sha256 = function (e) {
                      return this.hashString(e, 'sha256');
                    }),
                    (this.sha256Hex = function (e) {
                      return this.hashHex(e, 'sha256');
                    }),
                    (this.sha512 = function (e) {
                      return this.hashString(e, 'sha512');
                    }),
                    (this.sha512Hex = function (e) {
                      return this.hashHex(e, 'sha512');
                    }),
                    (this.isKey = function (e) {
                      return (
                        e instanceof se ||
                        e instanceof le.crypto.DSA ||
                        e instanceof le.crypto.ECDSA
                      );
                    });
                })()),
                (le.crypto.Util.md5 = function (e) {
                  return new le.crypto.MessageDigest({ alg: 'md5', prov: 'cryptojs' }).digestString(
                    e,
                  );
                }),
                (le.crypto.Util.ripemd160 = function (e) {
                  return new le.crypto.MessageDigest({
                    alg: 'ripemd160',
                    prov: 'cryptojs',
                  }).digestString(e);
                }),
                (le.crypto.Util.SECURERANDOMGEN = new ne()),
                (le.crypto.Util.getRandomHexOfNbytes = function (e) {
                  var t = new Array(e);
                  return le.crypto.Util.SECURERANDOMGEN.nextBytes(t), ye(t);
                }),
                (le.crypto.Util.getRandomBigIntegerOfNbytes = function (e) {
                  return new k(le.crypto.Util.getRandomHexOfNbytes(e), 16);
                }),
                (le.crypto.Util.getRandomHexOfNbits = function (e) {
                  var t = e % 8,
                    r = new Array((e - t) / 8 + 1);
                  return (
                    le.crypto.Util.SECURERANDOMGEN.nextBytes(r),
                    (r[0] = (((255 << t) & 255) ^ 255) & r[0]),
                    ye(r)
                  );
                }),
                (le.crypto.Util.getRandomBigIntegerOfNbits = function (e) {
                  return new k(le.crypto.Util.getRandomHexOfNbits(e), 16);
                }),
                (le.crypto.Util.getRandomBigIntegerZeroToMax = function (e) {
                  for (var t = e.bitLength(); ; ) {
                    var r = le.crypto.Util.getRandomBigIntegerOfNbits(t);
                    if (-1 != e.compareTo(r)) return r;
                  }
                }),
                (le.crypto.Util.getRandomBigIntegerMinToMax = function (e, t) {
                  var r = e.compareTo(t);
                  if (1 == r) throw 'biMin is greater than biMax';
                  if (0 == r) return e;
                  var n = t.subtract(e);
                  return le.crypto.Util.getRandomBigIntegerZeroToMax(n).add(e);
                }),
                (le.crypto.MessageDigest = function (e) {
                  (this.setAlgAndProvider = function (e, t) {
                    if (
                      (null !== (e = le.crypto.MessageDigest.getCanonicalAlgName(e)) &&
                        void 0 === t &&
                        (t = le.crypto.Util.DEFAULTPROVIDER[e]),
                      -1 != ':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(e) &&
                        'cryptojs' == t)
                    ) {
                      try {
                        this.md = le.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[e].create();
                      } catch (r) {
                        throw 'setAlgAndProvider hash alg set fail alg=' + e + '/' + r;
                      }
                      (this.updateString = function (e) {
                        this.md.update(e);
                      }),
                        (this.updateHex = function (e) {
                          var t = b.enc.Hex.parse(e);
                          this.md.update(t);
                        }),
                        (this.digest = function () {
                          return this.md.finalize().toString(b.enc.Hex);
                        }),
                        (this.digestString = function (e) {
                          return this.updateString(e), this.digest();
                        }),
                        (this.digestHex = function (e) {
                          return this.updateHex(e), this.digest();
                        });
                    }
                    if (-1 != ':sha256:'.indexOf(e) && 'sjcl' == t) {
                      try {
                        this.md = new sjcl.hash.sha256();
                      } catch (r) {
                        throw 'setAlgAndProvider hash alg set fail alg=' + e + '/' + r;
                      }
                      (this.updateString = function (e) {
                        this.md.update(e);
                      }),
                        (this.updateHex = function (e) {
                          var t = sjcl.codec.hex.toBits(e);
                          this.md.update(t);
                        }),
                        (this.digest = function () {
                          var e = this.md.finalize();
                          return sjcl.codec.hex.fromBits(e);
                        }),
                        (this.digestString = function (e) {
                          return this.updateString(e), this.digest();
                        }),
                        (this.digestHex = function (e) {
                          return this.updateHex(e), this.digest();
                        });
                    }
                  }),
                    (this.updateString = function (e) {
                      throw (
                        'updateString(str) not supported for this alg/prov: ' +
                        this.algName +
                        '/' +
                        this.provName
                      );
                    }),
                    (this.updateHex = function (e) {
                      throw (
                        'updateHex(hex) not supported for this alg/prov: ' +
                        this.algName +
                        '/' +
                        this.provName
                      );
                    }),
                    (this.digest = function () {
                      throw (
                        'digest() not supported for this alg/prov: ' +
                        this.algName +
                        '/' +
                        this.provName
                      );
                    }),
                    (this.digestString = function (e) {
                      throw (
                        'digestString(str) not supported for this alg/prov: ' +
                        this.algName +
                        '/' +
                        this.provName
                      );
                    }),
                    (this.digestHex = function (e) {
                      throw (
                        'digestHex(hex) not supported for this alg/prov: ' +
                        this.algName +
                        '/' +
                        this.provName
                      );
                    }),
                    void 0 !== e &&
                      void 0 !== e.alg &&
                      ((this.algName = e.alg),
                      void 0 === e.prov &&
                        (this.provName = le.crypto.Util.DEFAULTPROVIDER[this.algName]),
                      this.setAlgAndProvider(this.algName, this.provName));
                }),
                (le.crypto.MessageDigest.getCanonicalAlgName = function (e) {
                  return 'string' == typeof e && (e = (e = e.toLowerCase()).replace(/-/, '')), e;
                }),
                (le.crypto.MessageDigest.getHashLength = function (e) {
                  var t = le.crypto.MessageDigest,
                    r = t.getCanonicalAlgName(e);
                  if (void 0 === t.HASHLENGTH[r]) throw 'not supported algorithm: ' + e;
                  return t.HASHLENGTH[r];
                }),
                (le.crypto.MessageDigest.HASHLENGTH = {
                  md5: 16,
                  sha1: 20,
                  sha224: 28,
                  sha256: 32,
                  sha384: 48,
                  sha512: 64,
                  ripemd160: 20,
                }),
                (le.crypto.Mac = function (e) {
                  (this.setAlgAndProvider = function (e, t) {
                    if (
                      (null == (e = e.toLowerCase()) && (e = 'hmacsha1'),
                      'hmac' != (e = e.toLowerCase()).substr(0, 4))
                    )
                      throw 'setAlgAndProvider unsupported HMAC alg: ' + e;
                    void 0 === t && (t = le.crypto.Util.DEFAULTPROVIDER[e]),
                      (this.algProv = e + '/' + t);
                    var r = e.substr(4);
                    if (
                      -1 != ':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(r) &&
                      'cryptojs' == t
                    ) {
                      try {
                        var n = le.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[r];
                        this.mac = b.algo.HMAC.create(n, this.pass);
                      } catch (i) {
                        throw 'setAlgAndProvider hash alg set fail hashAlg=' + r + '/' + i;
                      }
                      (this.updateString = function (e) {
                        this.mac.update(e);
                      }),
                        (this.updateHex = function (e) {
                          var t = b.enc.Hex.parse(e);
                          this.mac.update(t);
                        }),
                        (this.doFinal = function () {
                          return this.mac.finalize().toString(b.enc.Hex);
                        }),
                        (this.doFinalString = function (e) {
                          return this.updateString(e), this.doFinal();
                        }),
                        (this.doFinalHex = function (e) {
                          return this.updateHex(e), this.doFinal();
                        });
                    }
                  }),
                    (this.updateString = function (e) {
                      throw 'updateString(str) not supported for this alg/prov: ' + this.algProv;
                    }),
                    (this.updateHex = function (e) {
                      throw 'updateHex(hex) not supported for this alg/prov: ' + this.algProv;
                    }),
                    (this.doFinal = function () {
                      throw 'digest() not supported for this alg/prov: ' + this.algProv;
                    }),
                    (this.doFinalString = function (e) {
                      throw 'digestString(str) not supported for this alg/prov: ' + this.algProv;
                    }),
                    (this.doFinalHex = function (e) {
                      throw 'digestHex(hex) not supported for this alg/prov: ' + this.algProv;
                    }),
                    (this.setPassword = function (e) {
                      if ('string' == typeof e) {
                        var t = e;
                        return (
                          (e.length % 2 != 1 && e.match(/^[0-9A-Fa-f]+$/)) || (t = ke(e)),
                          void (this.pass = b.enc.Hex.parse(t))
                        );
                      }
                      if ('object' != (void 0 === e ? 'undefined' : r(e)))
                        throw 'KJUR.crypto.Mac unsupported password type: ' + e;
                      if (((t = null), void 0 !== e.hex)) {
                        if (e.hex.length % 2 != 0 || !e.hex.match(/^[0-9A-Fa-f]+$/))
                          throw 'Mac: wrong hex password: ' + e.hex;
                        t = e.hex;
                      }
                      if (
                        (void 0 !== e.utf8 && (t = Fe(e.utf8)),
                        void 0 !== e.rstr && (t = ke(e.rstr)),
                        void 0 !== e.b64 && (t = E(e.b64)),
                        void 0 !== e.b64u && (t = we(e.b64u)),
                        null == t)
                      )
                        throw 'KJUR.crypto.Mac unsupported password type: ' + e;
                      this.pass = b.enc.Hex.parse(t);
                    }),
                    void 0 !== e &&
                      (void 0 !== e.pass && this.setPassword(e.pass),
                      void 0 !== e.alg &&
                        ((this.algName = e.alg),
                        void 0 === e.prov &&
                          (this.provName = le.crypto.Util.DEFAULTPROVIDER[this.algName]),
                        this.setAlgAndProvider(this.algName, this.provName)));
                }),
                (le.crypto.Signature = function (e) {
                  var t = null;
                  if (
                    ((this._setAlgNames = function () {
                      var e = this.algName.match(/^(.+)with(.+)$/);
                      e &&
                        ((this.mdAlgName = e[1].toLowerCase()),
                        (this.pubkeyAlgName = e[2].toLowerCase()),
                        'rsaandmgf1' == this.pubkeyAlgName &&
                          'sha' == this.mdAlgName &&
                          (this.mdAlgName = 'sha1'));
                    }),
                    (this._zeroPaddingOfSignature = function (e, t) {
                      for (var r = '', n = t / 4 - e.length, i = 0; i < n; i++) r += '0';
                      return r + e;
                    }),
                    (this.setAlgAndProvider = function (e, t) {
                      if ((this._setAlgNames(), 'cryptojs/jsrsa' != t))
                        throw new Error('provider not supported: ' + t);
                      if (
                        -1 !=
                        ':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(this.mdAlgName)
                      ) {
                        try {
                          this.md = new le.crypto.MessageDigest({ alg: this.mdAlgName });
                        } catch (r) {
                          throw new Error(
                            'setAlgAndProvider hash alg set fail alg=' + this.mdAlgName + '/' + r,
                          );
                        }
                        (this.init = function (e, t) {
                          var r = null;
                          try {
                            r = void 0 === t ? Ke.getKey(e) : Ke.getKey(e, t);
                          } catch (n) {
                            throw 'init failed:' + n;
                          }
                          if (!0 === r.isPrivate) (this.prvKey = r), (this.state = 'SIGN');
                          else {
                            if (!0 !== r.isPublic) throw 'init failed.:' + r;
                            (this.pubKey = r), (this.state = 'VERIFY');
                          }
                        }),
                          (this.updateString = function (e) {
                            this.md.updateString(e);
                          }),
                          (this.updateHex = function (e) {
                            this.md.updateHex(e);
                          }),
                          (this.sign = function () {
                            if (
                              ((this.sHashHex = this.md.digest()),
                              void 0 === this.prvKey &&
                                void 0 !== this.ecprvhex &&
                                void 0 !== this.eccurvename &&
                                void 0 !== le.crypto.ECDSA &&
                                (this.prvKey = new le.crypto.ECDSA({
                                  curve: this.eccurvename,
                                  prv: this.ecprvhex,
                                })),
                              this.prvKey instanceof se && 'rsaandmgf1' === this.pubkeyAlgName)
                            )
                              this.hSign = this.prvKey.signWithMessageHashPSS(
                                this.sHashHex,
                                this.mdAlgName,
                                this.pssSaltLen,
                              );
                            else if (this.prvKey instanceof se && 'rsa' === this.pubkeyAlgName)
                              this.hSign = this.prvKey.signWithMessageHash(
                                this.sHashHex,
                                this.mdAlgName,
                              );
                            else if (this.prvKey instanceof le.crypto.ECDSA)
                              this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                            else {
                              if (!(this.prvKey instanceof le.crypto.DSA))
                                throw (
                                  'Signature: unsupported private key alg: ' + this.pubkeyAlgName
                                );
                              this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                            }
                            return this.hSign;
                          }),
                          (this.signString = function (e) {
                            return this.updateString(e), this.sign();
                          }),
                          (this.signHex = function (e) {
                            return this.updateHex(e), this.sign();
                          }),
                          (this.verify = function (e) {
                            if (
                              ((this.sHashHex = this.md.digest()),
                              void 0 === this.pubKey &&
                                void 0 !== this.ecpubhex &&
                                void 0 !== this.eccurvename &&
                                void 0 !== le.crypto.ECDSA &&
                                (this.pubKey = new le.crypto.ECDSA({
                                  curve: this.eccurvename,
                                  pub: this.ecpubhex,
                                })),
                              this.pubKey instanceof se && 'rsaandmgf1' === this.pubkeyAlgName)
                            )
                              return this.pubKey.verifyWithMessageHashPSS(
                                this.sHashHex,
                                e,
                                this.mdAlgName,
                                this.pssSaltLen,
                              );
                            if (this.pubKey instanceof se && 'rsa' === this.pubkeyAlgName)
                              return this.pubKey.verifyWithMessageHash(this.sHashHex, e);
                            if (
                              void 0 !== le.crypto.ECDSA &&
                              this.pubKey instanceof le.crypto.ECDSA
                            )
                              return this.pubKey.verifyWithMessageHash(this.sHashHex, e);
                            if (void 0 !== le.crypto.DSA && this.pubKey instanceof le.crypto.DSA)
                              return this.pubKey.verifyWithMessageHash(this.sHashHex, e);
                            throw 'Signature: unsupported public key alg: ' + this.pubkeyAlgName;
                          });
                      }
                    }),
                    (this.init = function (e, t) {
                      throw 'init(key, pass) not supported for this alg:prov=' + this.algProvName;
                    }),
                    (this.updateString = function (e) {
                      throw 'updateString(str) not supported for this alg:prov=' + this.algProvName;
                    }),
                    (this.updateHex = function (e) {
                      throw 'updateHex(hex) not supported for this alg:prov=' + this.algProvName;
                    }),
                    (this.sign = function () {
                      throw 'sign() not supported for this alg:prov=' + this.algProvName;
                    }),
                    (this.signString = function (e) {
                      throw 'digestString(str) not supported for this alg:prov=' + this.algProvName;
                    }),
                    (this.signHex = function (e) {
                      throw 'digestHex(hex) not supported for this alg:prov=' + this.algProvName;
                    }),
                    (this.verify = function (e) {
                      throw 'verify(hSigVal) not supported for this alg:prov=' + this.algProvName;
                    }),
                    (this.initParams = e),
                    void 0 !== e &&
                      (void 0 !== e.alg &&
                        ((this.algName = e.alg),
                        void 0 === e.prov
                          ? (this.provName = le.crypto.Util.DEFAULTPROVIDER[this.algName])
                          : (this.provName = e.prov),
                        (this.algProvName = this.algName + ':' + this.provName),
                        this.setAlgAndProvider(this.algName, this.provName),
                        this._setAlgNames()),
                      void 0 !== e.psssaltlen && (this.pssSaltLen = e.psssaltlen),
                      void 0 !== e.prvkeypem))
                  ) {
                    if (void 0 !== e.prvkeypas)
                      throw 'both prvkeypem and prvkeypas parameters not supported';
                    try {
                      (t = Ke.getKey(e.prvkeypem)), this.init(t);
                    } catch (r) {
                      throw 'fatal error to load pem private key: ' + r;
                    }
                  }
                }),
                (le.crypto.Cipher = function (e) {}),
                (le.crypto.Cipher.encrypt = function (e, t, r) {
                  if (t instanceof se && t.isPublic) {
                    var n = le.crypto.Cipher.getAlgByKeyAndName(t, r);
                    if ('RSA' === n) return t.encrypt(e);
                    if ('RSAOAEP' === n) return t.encryptOAEP(e, 'sha1');
                    var i = n.match(/^RSAOAEP(\d+)$/);
                    if (null !== i) return t.encryptOAEP(e, 'sha' + i[1]);
                    throw 'Cipher.encrypt: unsupported algorithm for RSAKey: ' + r;
                  }
                  throw 'Cipher.encrypt: unsupported key or algorithm';
                }),
                (le.crypto.Cipher.decrypt = function (e, t, r) {
                  if (t instanceof se && t.isPrivate) {
                    var n = le.crypto.Cipher.getAlgByKeyAndName(t, r);
                    if ('RSA' === n) return t.decrypt(e);
                    if ('RSAOAEP' === n) return t.decryptOAEP(e, 'sha1');
                    var i = n.match(/^RSAOAEP(\d+)$/);
                    if (null !== i) return t.decryptOAEP(e, 'sha' + i[1]);
                    throw 'Cipher.decrypt: unsupported algorithm for RSAKey: ' + r;
                  }
                  throw 'Cipher.decrypt: unsupported key or algorithm';
                }),
                (le.crypto.Cipher.getAlgByKeyAndName = function (e, t) {
                  if (e instanceof se) {
                    if (
                      -1 != ':RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:'.indexOf(t)
                    )
                      return t;
                    if (null == t) return 'RSA';
                    throw 'getAlgByKeyAndName: not supported algorithm name for RSAKey: ' + t;
                  }
                  throw 'getAlgByKeyAndName: not supported algorithm name: ' + t;
                }),
                (le.crypto.OID = new (function () {
                  this.oidhex2name = {
                    '2a864886f70d010101': 'rsaEncryption',
                    '2a8648ce3d0201': 'ecPublicKey',
                    '2a8648ce380401': 'dsa',
                    '2a8648ce3d030107': 'secp256r1',
                    '2b8104001f': 'secp192k1',
                    '2b81040021': 'secp224r1',
                    '2b8104000a': 'secp256k1',
                    '2b81040023': 'secp521r1',
                    '2b81040022': 'secp384r1',
                    '2a8648ce380403': 'SHA1withDSA',
                    '608648016503040301': 'SHA224withDSA',
                    '608648016503040302': 'SHA256withDSA',
                  };
                })()),
                (void 0 !== le && le) || (t.KJUR = le = {}),
                (void 0 !== le.crypto && le.crypto) || (le.crypto = {}),
                (le.crypto.ECDSA = function (e) {
                  var t = Error,
                    n = k,
                    i = ue,
                    o = le.crypto.ECDSA,
                    s = le.crypto.ECParameterDB,
                    a = o.getName,
                    u = ge,
                    c = u.getVbyListEx,
                    h = u.isASN1HEX,
                    l = new ne();
                  (this.type = 'EC'),
                    (this.isPrivate = !1),
                    (this.isPublic = !1),
                    (this.getBigRandom = function (e) {
                      return new n(e.bitLength(), l).mod(e.subtract(n.ONE)).add(n.ONE);
                    }),
                    (this.setNamedCurve = function (e) {
                      (this.ecparams = s.getByName(e)),
                        (this.prvKeyHex = null),
                        (this.pubKeyHex = null),
                        (this.curveName = e);
                    }),
                    (this.setPrivateKeyHex = function (e) {
                      (this.isPrivate = !0), (this.prvKeyHex = e);
                    }),
                    (this.setPublicKeyHex = function (e) {
                      (this.isPublic = !0), (this.pubKeyHex = e);
                    }),
                    (this.getPublicKeyXYHex = function () {
                      var e = this.pubKeyHex;
                      if ('04' !== e.substr(0, 2))
                        throw 'this method supports uncompressed format(04) only';
                      var t = this.ecparams.keylen / 4;
                      if (e.length !== 2 + 2 * t) throw 'malformed public key hex length';
                      var r = {};
                      return (r.x = e.substr(2, t)), (r.y = e.substr(2 + t)), r;
                    }),
                    (this.getShortNISTPCurveName = function () {
                      var e = this.curveName;
                      return 'secp256r1' === e ||
                        'NIST P-256' === e ||
                        'P-256' === e ||
                        'prime256v1' === e
                        ? 'P-256'
                        : 'secp384r1' === e || 'NIST P-384' === e || 'P-384' === e
                        ? 'P-384'
                        : null;
                    }),
                    (this.generateKeyPairHex = function () {
                      var e = this.ecparams.n,
                        t = this.getBigRandom(e),
                        r = this.ecparams.G.multiply(t),
                        n = r.getX().toBigInteger(),
                        i = r.getY().toBigInteger(),
                        o = this.ecparams.keylen / 4,
                        s = ('0000000000' + t.toString(16)).slice(-o),
                        a =
                          '04' +
                          ('0000000000' + n.toString(16)).slice(-o) +
                          ('0000000000' + i.toString(16)).slice(-o);
                      return (
                        this.setPrivateKeyHex(s),
                        this.setPublicKeyHex(a),
                        { ecprvhex: s, ecpubhex: a }
                      );
                    }),
                    (this.signWithMessageHash = function (e) {
                      return this.signHex(e, this.prvKeyHex);
                    }),
                    (this.signHex = function (e, t) {
                      var r = new n(t, 16),
                        i = this.ecparams.n,
                        s = new n(e.substring(0, this.ecparams.keylen / 4), 16);
                      do {
                        var a = this.getBigRandom(i),
                          u = this.ecparams.G.multiply(a).getX().toBigInteger().mod(i);
                      } while (u.compareTo(n.ZERO) <= 0);
                      var c = a
                        .modInverse(i)
                        .multiply(s.add(r.multiply(u)))
                        .mod(i);
                      return o.biRSSigToASN1Sig(u, c);
                    }),
                    (this.sign = function (e, t) {
                      var r = t,
                        i = this.ecparams.n,
                        o = n.fromByteArrayUnsigned(e);
                      do {
                        var s = this.getBigRandom(i),
                          a = this.ecparams.G.multiply(s).getX().toBigInteger().mod(i);
                      } while (a.compareTo(k.ZERO) <= 0);
                      var u = s
                        .modInverse(i)
                        .multiply(o.add(r.multiply(a)))
                        .mod(i);
                      return this.serializeSig(a, u);
                    }),
                    (this.verifyWithMessageHash = function (e, t) {
                      return this.verifyHex(e, t, this.pubKeyHex);
                    }),
                    (this.verifyHex = function (e, t, r) {
                      try {
                        var s,
                          a,
                          u = o.parseSigHex(t);
                        (s = u.r), (a = u.s);
                        var c = i.decodeFromHex(this.ecparams.curve, r),
                          h = new n(e.substring(0, this.ecparams.keylen / 4), 16);
                        return this.verifyRaw(h, s, a, c);
                      } catch (l) {
                        return !1;
                      }
                    }),
                    (this.verify = function (e, t, o) {
                      var s, a, u;
                      if (Bitcoin.Util.isArray(t)) {
                        var c = this.parseSig(t);
                        (s = c.r), (a = c.s);
                      } else {
                        if ('object' !== (void 0 === t ? 'undefined' : r(t)) || !t.r || !t.s)
                          throw 'Invalid value for signature';
                        (s = t.r), (a = t.s);
                      }
                      if (o instanceof ue) u = o;
                      else {
                        if (!Bitcoin.Util.isArray(o))
                          throw 'Invalid format for pubkey value, must be byte array or ECPointFp';
                        u = i.decodeFrom(this.ecparams.curve, o);
                      }
                      var h = n.fromByteArrayUnsigned(e);
                      return this.verifyRaw(h, s, a, u);
                    }),
                    (this.verifyRaw = function (e, t, r, i) {
                      var o = this.ecparams.n,
                        s = this.ecparams.G;
                      if (t.compareTo(n.ONE) < 0 || t.compareTo(o) >= 0) return !1;
                      if (r.compareTo(n.ONE) < 0 || r.compareTo(o) >= 0) return !1;
                      var a = r.modInverse(o),
                        u = e.multiply(a).mod(o),
                        c = t.multiply(a).mod(o);
                      return s
                        .multiply(u)
                        .add(i.multiply(c))
                        .getX()
                        .toBigInteger()
                        .mod(o)
                        .equals(t);
                    }),
                    (this.serializeSig = function (e, t) {
                      var r = e.toByteArraySigned(),
                        n = t.toByteArraySigned(),
                        i = [];
                      return (
                        i.push(2),
                        i.push(r.length),
                        (i = i.concat(r)).push(2),
                        i.push(n.length),
                        (i = i.concat(n)).unshift(i.length),
                        i.unshift(48),
                        i
                      );
                    }),
                    (this.parseSig = function (e) {
                      var t;
                      if (48 != e[0]) throw new Error('Signature not a valid DERSequence');
                      if (2 != e[(t = 2)])
                        throw new Error('First element in signature must be a DERInteger');
                      var r = e.slice(t + 2, t + 2 + e[t + 1]);
                      if (2 != e[(t += 2 + e[t + 1])])
                        throw new Error('Second element in signature must be a DERInteger');
                      var i = e.slice(t + 2, t + 2 + e[t + 1]);
                      return (
                        (t += 2 + e[t + 1]),
                        { r: n.fromByteArrayUnsigned(r), s: n.fromByteArrayUnsigned(i) }
                      );
                    }),
                    (this.parseSigCompact = function (e) {
                      if (65 !== e.length) throw 'Signature has the wrong length';
                      var t = e[0] - 27;
                      if (t < 0 || t > 7) throw 'Invalid signature type';
                      var r = this.ecparams.n;
                      return {
                        r: n.fromByteArrayUnsigned(e.slice(1, 33)).mod(r),
                        s: n.fromByteArrayUnsigned(e.slice(33, 65)).mod(r),
                        i: t,
                      };
                    }),
                    (this.readPKCS5PrvKeyHex = function (e) {
                      if (!1 === h(e)) throw new Error('not ASN.1 hex string');
                      var t, r, n;
                      try {
                        (t = c(e, 0, ['[0]', 0], '06')), (r = c(e, 0, [1], '04'));
                        try {
                          n = c(e, 0, ['[1]', 0], '03');
                        } catch (i) {}
                      } catch (i) {
                        throw new Error('malformed PKCS#1/5 plain ECC private key');
                      }
                      if (((this.curveName = a(t)), void 0 === this.curveName))
                        throw 'unsupported curve name';
                      this.setNamedCurve(this.curveName),
                        this.setPublicKeyHex(n),
                        this.setPrivateKeyHex(r),
                        (this.isPublic = !1);
                    }),
                    (this.readPKCS8PrvKeyHex = function (e) {
                      if (!1 === h(e)) throw new t('not ASN.1 hex string');
                      var r, n, i;
                      try {
                        c(e, 0, [1, 0], '06'),
                          (r = c(e, 0, [1, 1], '06')),
                          (n = c(e, 0, [2, 0, 1], '04'));
                        try {
                          i = c(e, 0, [2, 0, '[1]', 0], '03');
                        } catch (o) {}
                      } catch (o) {
                        throw new t('malformed PKCS#8 plain ECC private key');
                      }
                      if (((this.curveName = a(r)), void 0 === this.curveName))
                        throw new t('unsupported curve name');
                      this.setNamedCurve(this.curveName),
                        this.setPublicKeyHex(i),
                        this.setPrivateKeyHex(n),
                        (this.isPublic = !1);
                    }),
                    (this.readPKCS8PubKeyHex = function (e) {
                      if (!1 === h(e)) throw new t('not ASN.1 hex string');
                      var r, n;
                      try {
                        c(e, 0, [0, 0], '06'),
                          (r = c(e, 0, [0, 1], '06')),
                          (n = c(e, 0, [1], '03'));
                      } catch (i) {
                        throw new t('malformed PKCS#8 ECC public key');
                      }
                      if (((this.curveName = a(r)), null === this.curveName))
                        throw new t('unsupported curve name');
                      this.setNamedCurve(this.curveName), this.setPublicKeyHex(n);
                    }),
                    (this.readCertPubKeyHex = function (e, r) {
                      if (!1 === h(e)) throw new t('not ASN.1 hex string');
                      var n, i;
                      try {
                        (n = c(e, 0, [0, 5, 0, 1], '06')), (i = c(e, 0, [0, 5, 1], '03'));
                      } catch (o) {
                        throw new t('malformed X.509 certificate ECC public key');
                      }
                      if (((this.curveName = a(n)), null === this.curveName))
                        throw new t('unsupported curve name');
                      this.setNamedCurve(this.curveName), this.setPublicKeyHex(i);
                    }),
                    void 0 !== e && void 0 !== e.curve && (this.curveName = e.curve),
                    void 0 === this.curveName && (this.curveName = 'secp256r1'),
                    this.setNamedCurve(this.curveName),
                    void 0 !== e &&
                      (void 0 !== e.prv && this.setPrivateKeyHex(e.prv),
                      void 0 !== e.pub && this.setPublicKeyHex(e.pub));
                }),
                (le.crypto.ECDSA.parseSigHex = function (e) {
                  var t = le.crypto.ECDSA.parseSigHexInHexRS(e);
                  return { r: new k(t.r, 16), s: new k(t.s, 16) };
                }),
                (le.crypto.ECDSA.parseSigHexInHexRS = function (e) {
                  var t = ge,
                    r = t.getChildIdx,
                    n = t.getV;
                  if ((t.checkStrictDER(e, 0), '30' != e.substr(0, 2)))
                    throw new Error('signature is not a ASN.1 sequence');
                  var i = r(e, 0);
                  if (2 != i.length) throw new Error('signature shall have two elements');
                  var o = i[0],
                    s = i[1];
                  if ('02' != e.substr(o, 2)) throw new Error('1st item not ASN.1 integer');
                  if ('02' != e.substr(s, 2)) throw new Error('2nd item not ASN.1 integer');
                  return { r: n(e, o), s: n(e, s) };
                }),
                (le.crypto.ECDSA.asn1SigToConcatSig = function (e) {
                  var t = le.crypto.ECDSA.parseSigHexInHexRS(e),
                    r = t.r,
                    n = t.s;
                  if (
                    ('00' == r.substr(0, 2) && r.length % 32 == 2 && (r = r.substr(2)),
                    '00' == n.substr(0, 2) && n.length % 32 == 2 && (n = n.substr(2)),
                    r.length % 32 == 30 && (r = '00' + r),
                    n.length % 32 == 30 && (n = '00' + n),
                    r.length % 32 != 0)
                  )
                    throw 'unknown ECDSA sig r length error';
                  if (n.length % 32 != 0) throw 'unknown ECDSA sig s length error';
                  return r + n;
                }),
                (le.crypto.ECDSA.concatSigToASN1Sig = function (e) {
                  if (((e.length / 2) * 8) % 128 != 0)
                    throw 'unknown ECDSA concatinated r-s sig  length error';
                  var t = e.substr(0, e.length / 2),
                    r = e.substr(e.length / 2);
                  return le.crypto.ECDSA.hexRSSigToASN1Sig(t, r);
                }),
                (le.crypto.ECDSA.hexRSSigToASN1Sig = function (e, t) {
                  var r = new k(e, 16),
                    n = new k(t, 16);
                  return le.crypto.ECDSA.biRSSigToASN1Sig(r, n);
                }),
                (le.crypto.ECDSA.biRSSigToASN1Sig = function (e, t) {
                  var r = le.asn1,
                    n = new r.DERInteger({ bigint: e }),
                    i = new r.DERInteger({ bigint: t });
                  return new r.DERSequence({ array: [n, i] }).getEncodedHex();
                }),
                (le.crypto.ECDSA.getName = function (e) {
                  return '2b8104001f' === e
                    ? 'secp192k1'
                    : '2a8648ce3d030107' === e
                    ? 'secp256r1'
                    : '2b8104000a' === e
                    ? 'secp256k1'
                    : '2b81040021' === e
                    ? 'secp224r1'
                    : '2b81040022' === e
                    ? 'secp384r1'
                    : -1 !== '|secp256r1|NIST P-256|P-256|prime256v1|'.indexOf(e)
                    ? 'secp256r1'
                    : -1 !== '|secp256k1|'.indexOf(e)
                    ? 'secp256k1'
                    : -1 !== '|secp224r1|NIST P-224|P-224|'.indexOf(e)
                    ? 'secp224r1'
                    : -1 !== '|secp384r1|NIST P-384|P-384|'.indexOf(e)
                    ? 'secp384r1'
                    : null;
                }),
                (void 0 !== le && le) || (t.KJUR = le = {}),
                (void 0 !== le.crypto && le.crypto) || (le.crypto = {}),
                (le.crypto.ECParameterDB = new (function () {
                  var e = {},
                    t = {};
                  function r(e) {
                    return new k(e, 16);
                  }
                  (this.getByName = function (r) {
                    var n = r;
                    if ((void 0 !== t[n] && (n = t[r]), void 0 !== e[n])) return e[n];
                    throw 'unregistered EC curve name: ' + n;
                  }),
                    (this.regist = function (n, i, o, s, a, u, c, h, l, f, d, g) {
                      e[n] = {};
                      var p = r(o),
                        v = r(s),
                        y = r(a),
                        m = r(u),
                        _ = r(c),
                        S = new ce(p, v, y),
                        b = S.decodePointHex('04' + h + l);
                      (e[n].name = n),
                        (e[n].keylen = i),
                        (e[n].curve = S),
                        (e[n].G = b),
                        (e[n].n = m),
                        (e[n].h = _),
                        (e[n].oid = d),
                        (e[n].info = g);
                      for (var w = 0; w < f.length; w++) t[f[w]] = n;
                    });
                })()),
                le.crypto.ECParameterDB.regist(
                  'secp128r1',
                  128,
                  'FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF',
                  'FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC',
                  'E87579C11079F43DD824993C2CEE5ED3',
                  'FFFFFFFE0000000075A30D1B9038A115',
                  '1',
                  '161FF7528B899B2D0C28607CA52C5B86',
                  'CF5AC8395BAFEB13C02DA292DDED7A83',
                  [],
                  '',
                  'secp128r1 : SECG curve over a 128 bit prime field',
                ),
                le.crypto.ECParameterDB.regist(
                  'secp160k1',
                  160,
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73',
                  '0',
                  '7',
                  '0100000000000000000001B8FA16DFAB9ACA16B6B3',
                  '1',
                  '3B4C382CE37AA192A4019E763036F4F5DD4D7EBB',
                  '938CF935318FDCED6BC28286531733C3F03C4FEE',
                  [],
                  '',
                  'secp160k1 : SECG curve over a 160 bit prime field',
                ),
                le.crypto.ECParameterDB.regist(
                  'secp160r1',
                  160,
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF',
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC',
                  '1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45',
                  '0100000000000000000001F4C8F927AED3CA752257',
                  '1',
                  '4A96B5688EF573284664698968C38BB913CBFC82',
                  '23A628553168947D59DCC912042351377AC5FB32',
                  [],
                  '',
                  'secp160r1 : SECG curve over a 160 bit prime field',
                ),
                le.crypto.ECParameterDB.regist(
                  'secp192k1',
                  192,
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37',
                  '0',
                  '3',
                  'FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D',
                  '1',
                  'DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D',
                  '9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D',
                  [],
                ),
                le.crypto.ECParameterDB.regist(
                  'secp192r1',
                  192,
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF',
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC',
                  '64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1',
                  'FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831',
                  '1',
                  '188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012',
                  '07192B95FFC8DA78631011ED6B24CDD573F977A11E794811',
                  [],
                ),
                le.crypto.ECParameterDB.regist(
                  'secp224r1',
                  224,
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001',
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE',
                  'B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4',
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D',
                  '1',
                  'B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21',
                  'BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34',
                  [],
                ),
                le.crypto.ECParameterDB.regist(
                  'secp256k1',
                  256,
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F',
                  '0',
                  '7',
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141',
                  '1',
                  '79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798',
                  '483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8',
                  [],
                ),
                le.crypto.ECParameterDB.regist(
                  'secp256r1',
                  256,
                  'FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF',
                  'FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC',
                  '5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B',
                  'FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551',
                  '1',
                  '6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296',
                  '4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5',
                  ['NIST P-256', 'P-256', 'prime256v1'],
                ),
                le.crypto.ECParameterDB.regist(
                  'secp384r1',
                  384,
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF',
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC',
                  'B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF',
                  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973',
                  '1',
                  'AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7',
                  '3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f',
                  ['NIST P-384', 'P-384'],
                ),
                le.crypto.ECParameterDB.regist(
                  'secp521r1',
                  521,
                  '1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
                  '1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC',
                  '051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00',
                  '1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409',
                  '1',
                  'C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66',
                  '011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650',
                  ['NIST P-521', 'P-521'],
                );
              var Ke = (function () {
                var e = function (e, r, n) {
                    return t(b.AES, e, r, n);
                  },
                  t = function (e, t, r, n) {
                    var i = b.enc.Hex.parse(t),
                      o = b.enc.Hex.parse(r),
                      s = b.enc.Hex.parse(n),
                      a = {};
                    (a.key = o), (a.iv = s), (a.ciphertext = i);
                    var u = e.decrypt(a, o, { iv: s });
                    return b.enc.Hex.stringify(u);
                  },
                  r = function (e, t, r) {
                    return n(b.AES, e, t, r);
                  },
                  n = function (e, t, r, n) {
                    var i = b.enc.Hex.parse(t),
                      o = b.enc.Hex.parse(r),
                      s = b.enc.Hex.parse(n),
                      a = e.encrypt(i, o, { iv: s }),
                      u = b.enc.Hex.parse(a.toString());
                    return b.enc.Base64.stringify(u);
                  },
                  i = {
                    'AES-256-CBC': { proc: e, eproc: r, keylen: 32, ivlen: 16 },
                    'AES-192-CBC': { proc: e, eproc: r, keylen: 24, ivlen: 16 },
                    'AES-128-CBC': { proc: e, eproc: r, keylen: 16, ivlen: 16 },
                    'DES-EDE3-CBC': {
                      proc: function (e, r, n) {
                        return t(b.TripleDES, e, r, n);
                      },
                      eproc: function (e, t, r) {
                        return n(b.TripleDES, e, t, r);
                      },
                      keylen: 24,
                      ivlen: 8,
                    },
                    'DES-CBC': {
                      proc: function (e, r, n) {
                        return t(b.DES, e, r, n);
                      },
                      eproc: function (e, t, r) {
                        return n(b.DES, e, t, r);
                      },
                      keylen: 8,
                      ivlen: 8,
                    },
                  },
                  o = function (e) {
                    var t = {},
                      r = e.match(new RegExp('DEK-Info: ([^,]+),([0-9A-Fa-f]+)', 'm'));
                    r && ((t.cipher = r[1]), (t.ivsalt = r[2]));
                    var n = e.match(new RegExp('-----BEGIN ([A-Z]+) PRIVATE KEY-----'));
                    n && (t.type = n[1]);
                    var i = -1,
                      o = 0;
                    -1 != e.indexOf('\r\n\r\n') && ((i = e.indexOf('\r\n\r\n')), (o = 2)),
                      -1 != e.indexOf('\n\n') && ((i = e.indexOf('\n\n')), (o = 1));
                    var s = e.indexOf('-----END');
                    if (-1 != i && -1 != s) {
                      var a = e.substring(i + 2 * o, s - o);
                      (a = a.replace(/\s+/g, '')), (t.data = a);
                    }
                    return t;
                  },
                  s = function (e, t, r) {
                    for (
                      var n = r.substring(0, 16),
                        o = b.enc.Hex.parse(n),
                        s = b.enc.Utf8.parse(t),
                        a = i[e].keylen + i[e].ivlen,
                        u = '',
                        c = null;
                      ;

                    ) {
                      var h = b.algo.MD5.create();
                      if (
                        (null != c && h.update(c),
                        h.update(s),
                        h.update(o),
                        (c = h.finalize()),
                        (u += b.enc.Hex.stringify(c)).length >= 2 * a)
                      )
                        break;
                    }
                    var l = {};
                    return (
                      (l.keyhex = u.substr(0, 2 * i[e].keylen)),
                      (l.ivhex = u.substr(2 * i[e].keylen, 2 * i[e].ivlen)),
                      l
                    );
                  },
                  a = function (e, t, r, n) {
                    var o = b.enc.Base64.parse(e),
                      s = b.enc.Hex.stringify(o);
                    return (0, i[t].proc)(s, r, n);
                  };
                return {
                  version: '1.0.0',
                  parsePKCS5PEM: function (e) {
                    return o(e);
                  },
                  getKeyAndUnusedIvByPasscodeAndIvsalt: function (e, t, r) {
                    return s(e, t, r);
                  },
                  decryptKeyB64: function (e, t, r, n) {
                    return a(e, t, r, n);
                  },
                  getDecryptedKeyHex: function (e, t) {
                    var r = o(e),
                      n = (r.type, r.cipher),
                      i = r.ivsalt,
                      u = r.data,
                      c = s(n, t, i).keyhex;
                    return a(u, n, c, i);
                  },
                  getEncryptedPKCS5PEMFromPrvKeyHex: function (e, t, r, n, o) {
                    var a,
                      u,
                      c = '';
                    if (((void 0 !== n && null != n) || (n = 'AES-256-CBC'), void 0 === i[n]))
                      throw 'KEYUTIL unsupported algorithm: ' + n;
                    return (
                      (void 0 !== o && null != o) ||
                        (o = ((a = i[n].ivlen),
                        (u = b.lib.WordArray.random(a)),
                        b.enc.Hex.stringify(u)).toUpperCase()),
                      (c = '-----BEGIN ' + e + ' PRIVATE KEY-----\r\n'),
                      (c += 'Proc-Type: 4,ENCRYPTED\r\n'),
                      (c += 'DEK-Info: ' + n + ',' + o + '\r\n'),
                      (c += '\r\n'),
                      (c += (function (e, t, r, n) {
                        return (0, i[t].eproc)(e, r, n);
                      })(t, n, s(n, r, o).keyhex, o).replace(/(.{64})/g, '$1\r\n')) +
                        '\r\n-----END ' +
                        e +
                        ' PRIVATE KEY-----\r\n'
                    );
                  },
                  parseHexOfEncryptedPKCS8: function (e) {
                    var t = ge,
                      r = t.getChildIdx,
                      n = t.getV,
                      i = {},
                      o = r(e, 0);
                    if (2 != o.length)
                      throw 'malformed format: SEQUENCE(0).items != 2: ' + o.length;
                    i.ciphertext = n(e, o[1]);
                    var s = r(e, o[0]);
                    if (2 != s.length)
                      throw 'malformed format: SEQUENCE(0.0).items != 2: ' + s.length;
                    if ('2a864886f70d01050d' != n(e, s[0])) throw 'this only supports pkcs5PBES2';
                    var a = r(e, s[1]);
                    if (2 != s.length)
                      throw 'malformed format: SEQUENCE(0.0.1).items != 2: ' + a.length;
                    var u = r(e, a[1]);
                    if (2 != u.length)
                      throw 'malformed format: SEQUENCE(0.0.1.1).items != 2: ' + u.length;
                    if ('2a864886f70d0307' != n(e, u[0])) throw 'this only supports TripleDES';
                    (i.encryptionSchemeAlg = 'TripleDES'), (i.encryptionSchemeIV = n(e, u[1]));
                    var c = r(e, a[0]);
                    if (2 != c.length)
                      throw 'malformed format: SEQUENCE(0.0.1.0).items != 2: ' + c.length;
                    if ('2a864886f70d01050c' != n(e, c[0])) throw 'this only supports pkcs5PBKDF2';
                    var h = r(e, c[1]);
                    if (h.length < 2)
                      throw 'malformed format: SEQUENCE(0.0.1.0.1).items < 2: ' + h.length;
                    i.pbkdf2Salt = n(e, h[0]);
                    var l = n(e, h[1]);
                    try {
                      i.pbkdf2Iter = parseInt(l, 16);
                    } catch (f) {
                      throw 'malformed format pbkdf2Iter: ' + l;
                    }
                    return i;
                  },
                  getPBKDF2KeyHexFromParam: function (e, t) {
                    var r = b.enc.Hex.parse(e.pbkdf2Salt),
                      n = e.pbkdf2Iter,
                      i = b.PBKDF2(t, r, { keySize: 6, iterations: n });
                    return b.enc.Hex.stringify(i);
                  },
                  _getPlainPKCS8HexFromEncryptedPKCS8PEM: function (e, t) {
                    var r = Ie(e, 'ENCRYPTED PRIVATE KEY'),
                      n = this.parseHexOfEncryptedPKCS8(r),
                      i = Ke.getPBKDF2KeyHexFromParam(n, t),
                      o = {};
                    o.ciphertext = b.enc.Hex.parse(n.ciphertext);
                    var s = b.enc.Hex.parse(i),
                      a = b.enc.Hex.parse(n.encryptionSchemeIV),
                      u = b.TripleDES.decrypt(o, s, { iv: a });
                    return b.enc.Hex.stringify(u);
                  },
                  getKeyFromEncryptedPKCS8PEM: function (e, t) {
                    var r = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(e, t);
                    return this.getKeyFromPlainPrivatePKCS8Hex(r);
                  },
                  parsePlainPrivatePKCS8Hex: function (e) {
                    var t = ge,
                      r = t.getChildIdx,
                      n = t.getV,
                      i = { algparam: null };
                    if ('30' != e.substr(0, 2)) throw 'malformed plain PKCS8 private key(code:001)';
                    var o = r(e, 0);
                    if (3 != o.length) throw 'malformed plain PKCS8 private key(code:002)';
                    if ('30' != e.substr(o[1], 2)) throw 'malformed PKCS8 private key(code:003)';
                    var s = r(e, o[1]);
                    if (2 != s.length) throw 'malformed PKCS8 private key(code:004)';
                    if ('06' != e.substr(s[0], 2)) throw 'malformed PKCS8 private key(code:005)';
                    if (
                      ((i.algoid = n(e, s[0])),
                      '06' == e.substr(s[1], 2) && (i.algparam = n(e, s[1])),
                      '04' != e.substr(o[2], 2))
                    )
                      throw 'malformed PKCS8 private key(code:006)';
                    return (i.keyidx = t.getVidx(e, o[2])), i;
                  },
                  getKeyFromPlainPrivatePKCS8PEM: function (e) {
                    var t = Ie(e, 'PRIVATE KEY');
                    return this.getKeyFromPlainPrivatePKCS8Hex(t);
                  },
                  getKeyFromPlainPrivatePKCS8Hex: function (e) {
                    var t,
                      r = this.parsePlainPrivatePKCS8Hex(e);
                    if ('2a864886f70d010101' == r.algoid) t = new se();
                    else if ('2a8648ce380401' == r.algoid) t = new le.crypto.DSA();
                    else {
                      if ('2a8648ce3d0201' != r.algoid) throw 'unsupported private key algorithm';
                      t = new le.crypto.ECDSA();
                    }
                    return t.readPKCS8PrvKeyHex(e), t;
                  },
                  _getKeyFromPublicPKCS8Hex: function (e) {
                    var t,
                      r = ge.getVbyList(e, 0, [0, 0], '06');
                    if ('2a864886f70d010101' === r) t = new se();
                    else if ('2a8648ce380401' === r) t = new le.crypto.DSA();
                    else {
                      if ('2a8648ce3d0201' !== r) throw 'unsupported PKCS#8 public key hex';
                      t = new le.crypto.ECDSA();
                    }
                    return t.readPKCS8PubKeyHex(e), t;
                  },
                  parsePublicRawRSAKeyHex: function (e) {
                    var t = ge,
                      r = t.getChildIdx,
                      n = t.getV,
                      i = {};
                    if ('30' != e.substr(0, 2)) throw 'malformed RSA key(code:001)';
                    var o = r(e, 0);
                    if (2 != o.length) throw 'malformed RSA key(code:002)';
                    if ('02' != e.substr(o[0], 2)) throw 'malformed RSA key(code:003)';
                    if (((i.n = n(e, o[0])), '02' != e.substr(o[1], 2)))
                      throw 'malformed RSA key(code:004)';
                    return (i.e = n(e, o[1])), i;
                  },
                  parsePublicPKCS8Hex: function (e) {
                    var t = ge,
                      r = t.getChildIdx,
                      n = t.getV,
                      i = { algparam: null },
                      o = r(e, 0);
                    if (2 != o.length) throw 'outer DERSequence shall have 2 elements: ' + o.length;
                    var s = o[0];
                    if ('30' != e.substr(s, 2)) throw 'malformed PKCS8 public key(code:001)';
                    var a = r(e, s);
                    if (2 != a.length) throw 'malformed PKCS8 public key(code:002)';
                    if ('06' != e.substr(a[0], 2)) throw 'malformed PKCS8 public key(code:003)';
                    if (
                      ((i.algoid = n(e, a[0])),
                      '06' == e.substr(a[1], 2)
                        ? (i.algparam = n(e, a[1]))
                        : '30' == e.substr(a[1], 2) &&
                          ((i.algparam = {}),
                          (i.algparam.p = t.getVbyList(e, a[1], [0], '02')),
                          (i.algparam.q = t.getVbyList(e, a[1], [1], '02')),
                          (i.algparam.g = t.getVbyList(e, a[1], [2], '02'))),
                      '03' != e.substr(o[1], 2))
                    )
                      throw 'malformed PKCS8 public key(code:004)';
                    return (i.key = n(e, o[1]).substr(2)), i;
                  },
                };
              })();
              (Ke.getKey = function (e, t, r) {
                var n,
                  i = (y = ge).getChildIdx,
                  o = (y.getV, y.getVbyList),
                  s = le.crypto,
                  a = s.ECDSA,
                  u = s.DSA,
                  c = se,
                  h = Ie,
                  l = Ke;
                if (void 0 !== c && e instanceof c) return e;
                if (void 0 !== a && e instanceof a) return e;
                if (void 0 !== u && e instanceof u) return e;
                if (void 0 !== e.curve && void 0 !== e.xy && void 0 === e.d)
                  return new a({ pub: e.xy, curve: e.curve });
                if (void 0 !== e.curve && void 0 !== e.d)
                  return new a({ prv: e.d, curve: e.curve });
                if (void 0 === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 === e.d)
                  return (C = new c()).setPublic(e.n, e.e), C;
                if (
                  void 0 === e.kty &&
                  void 0 !== e.n &&
                  void 0 !== e.e &&
                  void 0 !== e.d &&
                  void 0 !== e.p &&
                  void 0 !== e.q &&
                  void 0 !== e.dp &&
                  void 0 !== e.dq &&
                  void 0 !== e.co &&
                  void 0 === e.qi
                )
                  return (C = new c()).setPrivateEx(e.n, e.e, e.d, e.p, e.q, e.dp, e.dq, e.co), C;
                if (
                  void 0 === e.kty &&
                  void 0 !== e.n &&
                  void 0 !== e.e &&
                  void 0 !== e.d &&
                  void 0 === e.p
                )
                  return (C = new c()).setPrivate(e.n, e.e, e.d), C;
                if (
                  void 0 !== e.p &&
                  void 0 !== e.q &&
                  void 0 !== e.g &&
                  void 0 !== e.y &&
                  void 0 === e.x
                )
                  return (C = new u()).setPublic(e.p, e.q, e.g, e.y), C;
                if (
                  void 0 !== e.p &&
                  void 0 !== e.q &&
                  void 0 !== e.g &&
                  void 0 !== e.y &&
                  void 0 !== e.x
                )
                  return (C = new u()).setPrivate(e.p, e.q, e.g, e.y, e.x), C;
                if ('RSA' === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 === e.d)
                  return (C = new c()).setPublic(we(e.n), we(e.e)), C;
                if (
                  'RSA' === e.kty &&
                  void 0 !== e.n &&
                  void 0 !== e.e &&
                  void 0 !== e.d &&
                  void 0 !== e.p &&
                  void 0 !== e.q &&
                  void 0 !== e.dp &&
                  void 0 !== e.dq &&
                  void 0 !== e.qi
                )
                  return (
                    (C = new c()).setPrivateEx(
                      we(e.n),
                      we(e.e),
                      we(e.d),
                      we(e.p),
                      we(e.q),
                      we(e.dp),
                      we(e.dq),
                      we(e.qi),
                    ),
                    C
                  );
                if ('RSA' === e.kty && void 0 !== e.n && void 0 !== e.e && void 0 !== e.d)
                  return (C = new c()).setPrivate(we(e.n), we(e.e), we(e.d)), C;
                if (
                  'EC' === e.kty &&
                  void 0 !== e.crv &&
                  void 0 !== e.x &&
                  void 0 !== e.y &&
                  void 0 === e.d
                ) {
                  var f = (P = new a({ curve: e.crv })).ecparams.keylen / 4,
                    d =
                      '04' +
                      ('0000000000' + we(e.x)).slice(-f) +
                      ('0000000000' + we(e.y)).slice(-f);
                  return P.setPublicKeyHex(d), P;
                }
                if (
                  'EC' === e.kty &&
                  void 0 !== e.crv &&
                  void 0 !== e.x &&
                  void 0 !== e.y &&
                  void 0 !== e.d
                ) {
                  (f = (P = new a({ curve: e.crv })).ecparams.keylen / 4),
                    (d =
                      '04' +
                      ('0000000000' + we(e.x)).slice(-f) +
                      ('0000000000' + we(e.y)).slice(-f));
                  var g = ('0000000000' + we(e.d)).slice(-f);
                  return P.setPublicKeyHex(d), P.setPrivateKeyHex(g), P;
                }
                if ('pkcs5prv' === r) {
                  var p,
                    v = e,
                    y = ge;
                  if (9 === (p = i(v, 0)).length) (C = new c()).readPKCS5PrvKeyHex(v);
                  else if (6 === p.length) (C = new u()).readPKCS5PrvKeyHex(v);
                  else {
                    if (!(p.length > 2 && '04' === v.substr(p[1], 2)))
                      throw 'unsupported PKCS#1/5 hexadecimal key';
                    (C = new a()).readPKCS5PrvKeyHex(v);
                  }
                  return C;
                }
                if ('pkcs8prv' === r) return l.getKeyFromPlainPrivatePKCS8Hex(e);
                if ('pkcs8pub' === r) return l._getKeyFromPublicPKCS8Hex(e);
                if ('x509pub' === r) return Ye.getPublicKeyFromCertHex(e);
                if (
                  -1 != e.indexOf('-END CERTIFICATE-', 0) ||
                  -1 != e.indexOf('-END X509 CERTIFICATE-', 0) ||
                  -1 != e.indexOf('-END TRUSTED CERTIFICATE-', 0)
                )
                  return Ye.getPublicKeyFromCertPEM(e);
                if (-1 != e.indexOf('-END PUBLIC KEY-')) {
                  var m = Ie(e, 'PUBLIC KEY');
                  return l._getKeyFromPublicPKCS8Hex(m);
                }
                if (-1 != e.indexOf('-END RSA PRIVATE KEY-') && -1 == e.indexOf('4,ENCRYPTED')) {
                  var _ = h(e, 'RSA PRIVATE KEY');
                  return l.getKey(_, null, 'pkcs5prv');
                }
                if (-1 != e.indexOf('-END DSA PRIVATE KEY-') && -1 == e.indexOf('4,ENCRYPTED')) {
                  var S = o((n = h(e, 'DSA PRIVATE KEY')), 0, [1], '02'),
                    b = o(n, 0, [2], '02'),
                    w = o(n, 0, [3], '02'),
                    F = o(n, 0, [4], '02'),
                    E = o(n, 0, [5], '02');
                  return (
                    (C = new u()).setPrivate(
                      new k(S, 16),
                      new k(b, 16),
                      new k(w, 16),
                      new k(F, 16),
                      new k(E, 16),
                    ),
                    C
                  );
                }
                if (-1 != e.indexOf('-END EC PRIVATE KEY-') && -1 == e.indexOf('4,ENCRYPTED'))
                  return (_ = h(e, 'EC PRIVATE KEY')), l.getKey(_, null, 'pkcs5prv');
                if (-1 != e.indexOf('-END PRIVATE KEY-'))
                  return l.getKeyFromPlainPrivatePKCS8PEM(e);
                if (-1 != e.indexOf('-END RSA PRIVATE KEY-') && -1 != e.indexOf('4,ENCRYPTED')) {
                  var x = l.getDecryptedKeyHex(e, t),
                    A = new se();
                  return A.readPKCS5PrvKeyHex(x), A;
                }
                if (-1 != e.indexOf('-END EC PRIVATE KEY-') && -1 != e.indexOf('4,ENCRYPTED')) {
                  var P,
                    C = o((n = l.getDecryptedKeyHex(e, t)), 0, [1], '04'),
                    T = o(n, 0, [2, 0], '06'),
                    I = o(n, 0, [3, 0], '03').substr(2);
                  if (void 0 === le.crypto.OID.oidhex2name[T])
                    throw 'undefined OID(hex) in KJUR.crypto.OID: ' + T;
                  return (
                    (P = new a({ curve: le.crypto.OID.oidhex2name[T] })).setPublicKeyHex(I),
                    P.setPrivateKeyHex(C),
                    (P.isPublic = !1),
                    P
                  );
                }
                if (-1 != e.indexOf('-END DSA PRIVATE KEY-') && -1 != e.indexOf('4,ENCRYPTED'))
                  return (
                    (S = o((n = l.getDecryptedKeyHex(e, t)), 0, [1], '02')),
                    (b = o(n, 0, [2], '02')),
                    (w = o(n, 0, [3], '02')),
                    (F = o(n, 0, [4], '02')),
                    (E = o(n, 0, [5], '02')),
                    (C = new u()).setPrivate(
                      new k(S, 16),
                      new k(b, 16),
                      new k(w, 16),
                      new k(F, 16),
                      new k(E, 16),
                    ),
                    C
                  );
                if (-1 != e.indexOf('-END ENCRYPTED PRIVATE KEY-'))
                  return l.getKeyFromEncryptedPKCS8PEM(e, t);
                throw new Error('not supported argument');
              }),
                (Ke.generateKeypair = function (e, t) {
                  if ('RSA' == e) {
                    var r = t;
                    (s = new se()).generate(r, '10001'), (s.isPrivate = !0), (s.isPublic = !0);
                    var n = new se(),
                      i = s.n.toString(16),
                      o = s.e.toString(16);
                    return (
                      n.setPublic(i, o),
                      (n.isPrivate = !1),
                      (n.isPublic = !0),
                      ((a = {}).prvKeyObj = s),
                      (a.pubKeyObj = n),
                      a
                    );
                  }
                  if ('EC' == e) {
                    var s,
                      a,
                      u = t,
                      c = new le.crypto.ECDSA({ curve: u }).generateKeyPairHex();
                    return (
                      (s = new le.crypto.ECDSA({ curve: u })).setPublicKeyHex(c.ecpubhex),
                      s.setPrivateKeyHex(c.ecprvhex),
                      (s.isPrivate = !0),
                      (s.isPublic = !1),
                      (n = new le.crypto.ECDSA({ curve: u })).setPublicKeyHex(c.ecpubhex),
                      (n.isPrivate = !1),
                      (n.isPublic = !0),
                      ((a = {}).prvKeyObj = s),
                      (a.pubKeyObj = n),
                      a
                    );
                  }
                  throw 'unknown algorithm: ' + e;
                }),
                (Ke.getPEM = function (e, t, r, n, i, o) {
                  var s = le,
                    a = s.asn1,
                    u = a.DERObjectIdentifier,
                    c = a.DERInteger,
                    h = a.ASN1Util.newObject,
                    l = a.x509.SubjectPublicKeyInfo,
                    f = s.crypto,
                    d = f.DSA,
                    g = f.ECDSA,
                    p = se;
                  function v(e) {
                    return h({
                      seq: [
                        { int: 0 },
                        { int: { bigint: e.n } },
                        { int: e.e },
                        { int: { bigint: e.d } },
                        { int: { bigint: e.p } },
                        { int: { bigint: e.q } },
                        { int: { bigint: e.dmp1 } },
                        { int: { bigint: e.dmq1 } },
                        { int: { bigint: e.coeff } },
                      ],
                    });
                  }
                  function y(e) {
                    return h({
                      seq: [
                        { int: 1 },
                        { octstr: { hex: e.prvKeyHex } },
                        { tag: ['a0', !0, { oid: { name: e.curveName } }] },
                        { tag: ['a1', !0, { bitstr: { hex: '00' + e.pubKeyHex } }] },
                      ],
                    });
                  }
                  function m(e) {
                    return h({
                      seq: [
                        { int: 0 },
                        { int: { bigint: e.p } },
                        { int: { bigint: e.q } },
                        { int: { bigint: e.g } },
                        { int: { bigint: e.y } },
                        { int: { bigint: e.x } },
                      ],
                    });
                  }
                  if (
                    ((void 0 !== p && e instanceof p) ||
                      (void 0 !== d && e instanceof d) ||
                      (void 0 !== g && e instanceof g)) &&
                    1 == e.isPublic &&
                    (void 0 === t || 'PKCS8PUB' == t)
                  )
                    return Te((F = new l(e).getEncodedHex()), 'PUBLIC KEY');
                  if (
                    'PKCS1PRV' == t &&
                    void 0 !== p &&
                    e instanceof p &&
                    (void 0 === r || null == r) &&
                    1 == e.isPrivate
                  )
                    return Te((F = v(e).getEncodedHex()), 'RSA PRIVATE KEY');
                  if (
                    'PKCS1PRV' == t &&
                    void 0 !== g &&
                    e instanceof g &&
                    (void 0 === r || null == r) &&
                    1 == e.isPrivate
                  ) {
                    var _ = new u({ name: e.curveName }).getEncodedHex(),
                      S = y(e).getEncodedHex(),
                      w = '';
                    return (w += Te(_, 'EC PARAMETERS')) + Te(S, 'EC PRIVATE KEY');
                  }
                  if (
                    'PKCS1PRV' == t &&
                    void 0 !== d &&
                    e instanceof d &&
                    (void 0 === r || null == r) &&
                    1 == e.isPrivate
                  )
                    return Te((F = m(e).getEncodedHex()), 'DSA PRIVATE KEY');
                  if (
                    'PKCS5PRV' == t &&
                    void 0 !== p &&
                    e instanceof p &&
                    void 0 !== r &&
                    null != r &&
                    1 == e.isPrivate
                  ) {
                    var F = v(e).getEncodedHex();
                    return (
                      void 0 === n && (n = 'DES-EDE3-CBC'),
                      this.getEncryptedPKCS5PEMFromPrvKeyHex('RSA', F, r, n, o)
                    );
                  }
                  if (
                    'PKCS5PRV' == t &&
                    void 0 !== g &&
                    e instanceof g &&
                    void 0 !== r &&
                    null != r &&
                    1 == e.isPrivate
                  )
                    return (
                      (F = y(e).getEncodedHex()),
                      void 0 === n && (n = 'DES-EDE3-CBC'),
                      this.getEncryptedPKCS5PEMFromPrvKeyHex('EC', F, r, n, o)
                    );
                  if (
                    'PKCS5PRV' == t &&
                    void 0 !== d &&
                    e instanceof d &&
                    void 0 !== r &&
                    null != r &&
                    1 == e.isPrivate
                  )
                    return (
                      (F = m(e).getEncodedHex()),
                      void 0 === n && (n = 'DES-EDE3-CBC'),
                      this.getEncryptedPKCS5PEMFromPrvKeyHex('DSA', F, r, n, o)
                    );
                  var E = function (e, t) {
                      var r = x(e, t);
                      return new h({
                        seq: [
                          {
                            seq: [
                              { oid: { name: 'pkcs5PBES2' } },
                              {
                                seq: [
                                  {
                                    seq: [
                                      { oid: { name: 'pkcs5PBKDF2' } },
                                      {
                                        seq: [
                                          { octstr: { hex: r.pbkdf2Salt } },
                                          { int: r.pbkdf2Iter },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    seq: [
                                      { oid: { name: 'des-EDE3-CBC' } },
                                      { octstr: { hex: r.encryptionSchemeIV } },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          { octstr: { hex: r.ciphertext } },
                        ],
                      }).getEncodedHex();
                    },
                    x = function (e, t) {
                      var r = b.lib.WordArray.random(8),
                        n = b.lib.WordArray.random(8),
                        i = b.PBKDF2(t, r, { keySize: 6, iterations: 100 }),
                        o = b.enc.Hex.parse(e),
                        s = b.TripleDES.encrypt(o, i, { iv: n }) + '',
                        a = {};
                      return (
                        (a.ciphertext = s),
                        (a.pbkdf2Salt = b.enc.Hex.stringify(r)),
                        (a.pbkdf2Iter = 100),
                        (a.encryptionSchemeAlg = 'DES-EDE3-CBC'),
                        (a.encryptionSchemeIV = b.enc.Hex.stringify(n)),
                        a
                      );
                    };
                  if ('PKCS8PRV' == t && null != p && e instanceof p && 1 == e.isPrivate) {
                    var k = v(e).getEncodedHex();
                    return (
                      (F = h({
                        seq: [
                          { int: 0 },
                          { seq: [{ oid: { name: 'rsaEncryption' } }, { null: !0 }] },
                          { octstr: { hex: k } },
                        ],
                      }).getEncodedHex()),
                      void 0 === r || null == r
                        ? Te(F, 'PRIVATE KEY')
                        : Te((S = E(F, r)), 'ENCRYPTED PRIVATE KEY')
                    );
                  }
                  if ('PKCS8PRV' == t && void 0 !== g && e instanceof g && 1 == e.isPrivate)
                    return (
                      (k = new h({
                        seq: [
                          { int: 1 },
                          { octstr: { hex: e.prvKeyHex } },
                          { tag: ['a1', !0, { bitstr: { hex: '00' + e.pubKeyHex } }] },
                        ],
                      }).getEncodedHex()),
                      (F = h({
                        seq: [
                          { int: 0 },
                          {
                            seq: [{ oid: { name: 'ecPublicKey' } }, { oid: { name: e.curveName } }],
                          },
                          { octstr: { hex: k } },
                        ],
                      }).getEncodedHex()),
                      void 0 === r || null == r
                        ? Te(F, 'PRIVATE KEY')
                        : Te((S = E(F, r)), 'ENCRYPTED PRIVATE KEY')
                    );
                  if ('PKCS8PRV' == t && void 0 !== d && e instanceof d && 1 == e.isPrivate)
                    return (
                      (k = new c({ bigint: e.x }).getEncodedHex()),
                      (F = h({
                        seq: [
                          { int: 0 },
                          {
                            seq: [
                              { oid: { name: 'dsa' } },
                              {
                                seq: [
                                  { int: { bigint: e.p } },
                                  { int: { bigint: e.q } },
                                  { int: { bigint: e.g } },
                                ],
                              },
                            ],
                          },
                          { octstr: { hex: k } },
                        ],
                      }).getEncodedHex()),
                      void 0 === r || null == r
                        ? Te(F, 'PRIVATE KEY')
                        : Te((S = E(F, r)), 'ENCRYPTED PRIVATE KEY')
                    );
                  throw new Error('unsupported object nor format');
                }),
                (Ke.getKeyFromCSRPEM = function (e) {
                  var t = Ie(e, 'CERTIFICATE REQUEST');
                  return Ke.getKeyFromCSRHex(t);
                }),
                (Ke.getKeyFromCSRHex = function (e) {
                  var t = Ke.parseCSRHex(e);
                  return Ke.getKey(t.p8pubkeyhex, null, 'pkcs8pub');
                }),
                (Ke.parseCSRHex = function (e) {
                  var t = ge,
                    r = t.getChildIdx,
                    n = t.getTLV,
                    i = {},
                    o = e;
                  if ('30' != o.substr(0, 2)) throw 'malformed CSR(code:001)';
                  var s = r(o, 0);
                  if (s.length < 1) throw 'malformed CSR(code:002)';
                  if ('30' != o.substr(s[0], 2)) throw 'malformed CSR(code:003)';
                  var a = r(o, s[0]);
                  if (a.length < 3) throw 'malformed CSR(code:004)';
                  return (i.p8pubkeyhex = n(o, a[2])), i;
                }),
                (Ke.getKeyID = function (e) {
                  var t = Ke,
                    r = ge;
                  'string' == typeof e && -1 != e.indexOf('BEGIN ') && (e = t.getKey(e));
                  var n = Ie(t.getPEM(e)),
                    i = r.getIdxbyList(n, 0, [1]),
                    o = r.getV(n, i).substring(2);
                  return le.crypto.Util.hashHex(o, 'sha1');
                }),
                (Ke.getJWKFromKey = function (e) {
                  var t = {};
                  if (e instanceof se && e.isPrivate)
                    return (
                      (t.kty = 'RSA'),
                      (t.n = be(e.n.toString(16))),
                      (t.e = be(e.e.toString(16))),
                      (t.d = be(e.d.toString(16))),
                      (t.p = be(e.p.toString(16))),
                      (t.q = be(e.q.toString(16))),
                      (t.dp = be(e.dmp1.toString(16))),
                      (t.dq = be(e.dmq1.toString(16))),
                      (t.qi = be(e.coeff.toString(16))),
                      t
                    );
                  if (e instanceof se && e.isPublic)
                    return (
                      (t.kty = 'RSA'), (t.n = be(e.n.toString(16))), (t.e = be(e.e.toString(16))), t
                    );
                  if (e instanceof le.crypto.ECDSA && e.isPrivate) {
                    if ('P-256' !== (n = e.getShortNISTPCurveName()) && 'P-384' !== n)
                      throw 'unsupported curve name for JWT: ' + n;
                    var r = e.getPublicKeyXYHex();
                    return (
                      (t.kty = 'EC'),
                      (t.crv = n),
                      (t.x = be(r.x)),
                      (t.y = be(r.y)),
                      (t.d = be(e.prvKeyHex)),
                      t
                    );
                  }
                  if (e instanceof le.crypto.ECDSA && e.isPublic) {
                    var n;
                    if ('P-256' !== (n = e.getShortNISTPCurveName()) && 'P-384' !== n)
                      throw 'unsupported curve name for JWT: ' + n;
                    return (
                      (r = e.getPublicKeyXYHex()),
                      (t.kty = 'EC'),
                      (t.crv = n),
                      (t.x = be(r.x)),
                      (t.y = be(r.y)),
                      t
                    );
                  }
                  throw 'not supported key object';
                }),
                (se.getPosArrayOfChildrenFromHex = function (e) {
                  return ge.getChildIdx(e, 0);
                }),
                (se.getHexValueArrayOfChildrenFromHex = function (e) {
                  var t,
                    r = ge.getV,
                    n = r(e, (t = se.getPosArrayOfChildrenFromHex(e))[0]),
                    i = r(e, t[1]),
                    o = r(e, t[2]),
                    s = r(e, t[3]),
                    a = r(e, t[4]),
                    u = r(e, t[5]),
                    c = r(e, t[6]),
                    h = r(e, t[7]),
                    l = r(e, t[8]);
                  return (t = new Array()).push(n, i, o, s, a, u, c, h, l), t;
                }),
                (se.prototype.readPrivateKeyFromPEMString = function (e) {
                  var t = Ie(e),
                    r = se.getHexValueArrayOfChildrenFromHex(t);
                  this.setPrivateEx(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]);
                }),
                (se.prototype.readPKCS5PrvKeyHex = function (e) {
                  var t = se.getHexValueArrayOfChildrenFromHex(e);
                  this.setPrivateEx(t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
                }),
                (se.prototype.readPKCS8PrvKeyHex = function (e) {
                  var t,
                    r,
                    n,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c = ge,
                    h = c.getVbyListEx;
                  if (!1 === c.isASN1HEX(e)) throw new Error('not ASN.1 hex string');
                  try {
                    (t = h(e, 0, [2, 0, 1], '02')),
                      (r = h(e, 0, [2, 0, 2], '02')),
                      (n = h(e, 0, [2, 0, 3], '02')),
                      (i = h(e, 0, [2, 0, 4], '02')),
                      (o = h(e, 0, [2, 0, 5], '02')),
                      (s = h(e, 0, [2, 0, 6], '02')),
                      (a = h(e, 0, [2, 0, 7], '02')),
                      (u = h(e, 0, [2, 0, 8], '02'));
                  } catch (l) {
                    throw new Error('malformed PKCS#8 plain RSA private key');
                  }
                  this.setPrivateEx(t, r, n, i, o, s, a, u);
                }),
                (se.prototype.readPKCS5PubKeyHex = function (e) {
                  var t = ge,
                    r = t.getV;
                  if (!1 === t.isASN1HEX(e)) throw new Error('keyHex is not ASN.1 hex string');
                  var n = t.getChildIdx(e, 0);
                  if (2 !== n.length || '02' !== e.substr(n[0], 2) || '02' !== e.substr(n[1], 2))
                    throw new Error('wrong hex for PKCS#5 public key');
                  var i = r(e, n[0]),
                    o = r(e, n[1]);
                  this.setPublic(i, o);
                }),
                (se.prototype.readPKCS8PubKeyHex = function (e) {
                  var t = ge;
                  if (!1 === t.isASN1HEX(e)) throw new Error('not ASN.1 hex string');
                  if ('06092a864886f70d010101' !== t.getTLVbyListEx(e, 0, [0, 0]))
                    throw new Error('not PKCS8 RSA public key');
                  var r = t.getTLVbyListEx(e, 0, [1, 0]);
                  this.readPKCS5PubKeyHex(r);
                }),
                (se.prototype.readCertPubKeyHex = function (e, t) {
                  var r, n;
                  (r = new Ye()).readCertHex(e),
                    (n = r.getPublicKeyHex()),
                    this.readPKCS8PubKeyHex(n);
                });
              var qe = new RegExp('[^0-9a-f]', 'gi');
              function Je(e, t) {
                for (var r = '', n = t / 4 - e.length, i = 0; i < n; i++) r += '0';
                return r + e;
              }
              function We(e, t, r) {
                for (var n = '', i = 0; n.length < t; )
                  (n += xe(
                    r(
                      ke(
                        e +
                          String.fromCharCode.apply(String, [
                            (4278190080 & i) >> 24,
                            (16711680 & i) >> 16,
                            (65280 & i) >> 8,
                            255 & i,
                          ]),
                      ),
                    ),
                  )),
                    (i += 1);
                return n;
              }
              function ze(e) {
                for (var t in le.crypto.Util.DIGESTINFOHEAD) {
                  var r = le.crypto.Util.DIGESTINFOHEAD[t],
                    n = r.length;
                  if (e.substring(0, n) == r) return [t, e.substring(n)];
                }
                return [];
              }
              function Ye(e) {
                var t,
                  r = ge,
                  n = r.getChildIdx,
                  i = r.getV,
                  o = r.getTLV,
                  s = r.getVbyList,
                  a = r.getVbyListEx,
                  u = r.getTLVbyList,
                  c = r.getTLVbyListEx,
                  h = r.getIdxbyList,
                  l = r.getIdxbyListEx,
                  f = r.getVidx,
                  d = r.oidname,
                  g = r.hextooidstr,
                  p = Ye,
                  v = Ie;
                try {
                  t = le.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
                } catch (y) {}
                (this.HEX2STAG = { '0c': 'utf8', 13: 'prn', 16: 'ia5', '1a': 'vis', '1e': 'bmp' }),
                  (this.hex = null),
                  (this.version = 0),
                  (this.foffset = 0),
                  (this.aExtInfo = null),
                  (this.getVersion = function () {
                    return null === this.hex || 0 !== this.version
                      ? this.version
                      : 'a003020102' !== u(this.hex, 0, [0, 0])
                      ? ((this.version = 1), (this.foffset = -1), 1)
                      : ((this.version = 3), 3);
                  }),
                  (this.getSerialNumberHex = function () {
                    return a(this.hex, 0, [0, 0], '02');
                  }),
                  (this.getSignatureAlgorithmField = function () {
                    var e = c(this.hex, 0, [0, 1]);
                    return this.getAlgorithmIdentifierName(e);
                  }),
                  (this.getAlgorithmIdentifierName = function (e) {
                    for (var r in t) if (e === t[r]) return r;
                    return d(a(e, 0, [0], '06'));
                  }),
                  (this.getIssuer = function () {
                    return this.getX500Name(this.getIssuerHex());
                  }),
                  (this.getIssuerHex = function () {
                    return u(this.hex, 0, [0, 3 + this.foffset], '30');
                  }),
                  (this.getIssuerString = function () {
                    return p.hex2dn(this.getIssuerHex());
                  }),
                  (this.getSubject = function () {
                    return this.getX500Name(this.getSubjectHex());
                  }),
                  (this.getSubjectHex = function () {
                    return u(this.hex, 0, [0, 5 + this.foffset], '30');
                  }),
                  (this.getSubjectString = function () {
                    return p.hex2dn(this.getSubjectHex());
                  }),
                  (this.getNotBefore = function () {
                    var e = s(this.hex, 0, [0, 4 + this.foffset, 0]);
                    return (e = e.replace(/(..)/g, '%$1')), decodeURIComponent(e);
                  }),
                  (this.getNotAfter = function () {
                    var e = s(this.hex, 0, [0, 4 + this.foffset, 1]);
                    return (e = e.replace(/(..)/g, '%$1')), decodeURIComponent(e);
                  }),
                  (this.getPublicKeyHex = function () {
                    return r.getTLVbyList(this.hex, 0, [0, 6 + this.foffset], '30');
                  }),
                  (this.getPublicKeyIdx = function () {
                    return h(this.hex, 0, [0, 6 + this.foffset], '30');
                  }),
                  (this.getPublicKeyContentIdx = function () {
                    var e = this.getPublicKeyIdx();
                    return h(this.hex, e, [1, 0], '30');
                  }),
                  (this.getPublicKey = function () {
                    return Ke.getKey(this.getPublicKeyHex(), null, 'pkcs8pub');
                  }),
                  (this.getSignatureAlgorithmName = function () {
                    var e = u(this.hex, 0, [1], '30');
                    return this.getAlgorithmIdentifierName(e);
                  }),
                  (this.getSignatureValueHex = function () {
                    return s(this.hex, 0, [2], '03', !0);
                  }),
                  (this.verifySignature = function (e) {
                    var t = this.getSignatureAlgorithmField(),
                      r = this.getSignatureValueHex(),
                      n = u(this.hex, 0, [0], '30'),
                      i = new le.crypto.Signature({ alg: t });
                    return i.init(e), i.updateHex(n), i.verify(r);
                  }),
                  (this.parseExt = function (e) {
                    var t, o, a;
                    if (void 0 === e) {
                      if (((a = this.hex), 3 !== this.version)) return -1;
                      (t = h(a, 0, [0, 7, 0], '30')), (o = n(a, t));
                    } else {
                      a = Ie(e);
                      var u = h(a, 0, [0, 3, 0, 0], '06');
                      if ('2a864886f70d01090e' != i(a, u))
                        return void (this.aExtInfo = new Array());
                      (t = h(a, 0, [0, 3, 0, 1, 0], '30')), (o = n(a, t)), (this.hex = a);
                    }
                    this.aExtInfo = new Array();
                    for (var c = 0; c < o.length; c++) {
                      var l = { critical: !1 },
                        d = 0;
                      3 === n(a, o[c]).length && ((l.critical = !0), (d = 1)),
                        (l.oid = r.hextooidstr(s(a, o[c], [0], '06')));
                      var g = h(a, o[c], [1 + d]);
                      (l.vidx = f(a, g)), this.aExtInfo.push(l);
                    }
                  }),
                  (this.getExtInfo = function (e) {
                    var t = this.aExtInfo,
                      r = e;
                    if ((e.match(/^[0-9.]+$/) || (r = le.asn1.x509.OID.name2oid(e)), '' !== r))
                      for (var n = 0; n < t.length; n++) if (t[n].oid === r) return t[n];
                  }),
                  (this.getExtBasicConstraints = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('basicConstraints');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var n = { extname: 'basicConstraints' };
                    if ((t && (n.critical = !0), '3000' === e)) return n;
                    if ('30030101ff' === e) return (n.cA = !0), n;
                    if ('30060101ff02' === e.substr(0, 12)) {
                      var s = i(e, 10),
                        a = parseInt(s, 16);
                      return (n.cA = !0), (n.pathLen = a), n;
                    }
                    throw new Error('hExtV parse error: ' + e);
                  }),
                  (this.getExtKeyUsage = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('keyUsage');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var n = { extname: 'keyUsage' };
                    return (
                      t && (n.critical = !0), (n.names = this.getExtKeyUsageString(e).split(',')), n
                    );
                  }),
                  (this.getExtKeyUsageBin = function (e) {
                    if (void 0 === e) {
                      var t = this.getExtInfo('keyUsage');
                      if (void 0 === t) return '';
                      e = o(this.hex, t.vidx);
                    }
                    if (8 != e.length && 10 != e.length)
                      throw new Error('malformed key usage value: ' + e);
                    var r = '000000000000000' + parseInt(e.substr(6), 16).toString(2);
                    return (
                      8 == e.length && (r = r.slice(-8)),
                      10 == e.length && (r = r.slice(-16)),
                      '' == (r = r.replace(/0+$/, '')) && (r = '0'),
                      r
                    );
                  }),
                  (this.getExtKeyUsageString = function (e) {
                    for (
                      var t = this.getExtKeyUsageBin(e), r = new Array(), n = 0;
                      n < t.length;
                      n++
                    )
                      '1' == t.substr(n, 1) && r.push(Ye.KEYUSAGE_NAME[n]);
                    return r.join(',');
                  }),
                  (this.getExtSubjectKeyIdentifier = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('subjectKeyIdentifier');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var n = { extname: 'subjectKeyIdentifier' };
                    t && (n.critical = !0);
                    var s = i(e, 0);
                    return (n.kid = { hex: s }), n;
                  }),
                  (this.getExtAuthorityKeyIdentifier = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('authorityKeyIdentifier');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var s = { extname: 'authorityKeyIdentifier' };
                    t && (s.critical = !0);
                    for (var a = n(e, 0), u = 0; u < a.length; u++) {
                      var c = e.substr(a[u], 2);
                      if (('80' === c && (s.kid = { hex: i(e, a[u]) }), 'a1' === c)) {
                        var h = o(e, a[u]),
                          l = this.getGeneralNames(h);
                        s.issuer = l[0].dn;
                      }
                      '82' === c && (s.sn = { hex: i(e, a[u]) });
                    }
                    return s;
                  }),
                  (this.getExtExtKeyUsage = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('extKeyUsage');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var s = { extname: 'extKeyUsage', array: [] };
                    t && (s.critical = !0);
                    for (var a = n(e, 0), u = 0; u < a.length; u++) s.array.push(d(i(e, a[u])));
                    return s;
                  }),
                  (this.getExtExtKeyUsageName = function () {
                    var e = this.getExtInfo('extKeyUsage');
                    if (void 0 === e) return e;
                    var t = new Array(),
                      r = o(this.hex, e.vidx);
                    if ('' === r) return t;
                    for (var s = n(r, 0), a = 0; a < s.length; a++) t.push(d(i(r, s[a])));
                    return t;
                  }),
                  (this.getExtSubjectAltName = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('subjectAltName');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var n = { extname: 'subjectAltName', array: [] };
                    return t && (n.critical = !0), (n.array = this.getGeneralNames(e)), n;
                  }),
                  (this.getExtIssuerAltName = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('issuerAltName');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var n = { extname: 'issuerAltName', array: [] };
                    return t && (n.critical = !0), (n.array = this.getGeneralNames(e)), n;
                  }),
                  (this.getGeneralNames = function (e) {
                    for (var t = n(e, 0), r = [], i = 0; i < t.length; i++) {
                      var s = this.getGeneralName(o(e, t[i]));
                      void 0 !== s && r.push(s);
                    }
                    return r;
                  }),
                  (this.getGeneralName = function (e) {
                    var t = e.substr(0, 2),
                      r = i(e, 0),
                      n = xe(r);
                    return '81' == t
                      ? { rfc822: n }
                      : '82' == t
                      ? { dns: n }
                      : '86' == t
                      ? { uri: n }
                      : '87' == t
                      ? { ip: Be(r) }
                      : 'a4' == t
                      ? { dn: this.getX500Name(r) }
                      : void 0;
                  }),
                  (this.getExtSubjectAltName2 = function () {
                    var e,
                      t,
                      r,
                      s = this.getExtInfo('subjectAltName');
                    if (void 0 === s) return s;
                    for (
                      var a = new Array(), u = o(this.hex, s.vidx), c = n(u, 0), h = 0;
                      h < c.length;
                      h++
                    )
                      (r = u.substr(c[h], 2)),
                        (e = i(u, c[h])),
                        '81' === r && ((t = Ee(e)), a.push(['MAIL', t])),
                        '82' === r && ((t = Ee(e)), a.push(['DNS', t])),
                        '84' === r && ((t = Ye.hex2dn(e, 0)), a.push(['DN', t])),
                        '86' === r && ((t = Ee(e)), a.push(['URI', t])),
                        '87' === r && ((t = Be(e)), a.push(['IP', t]));
                    return a;
                  }),
                  (this.getExtCRLDistributionPoints = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('cRLDistributionPoints');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var i = { extname: 'cRLDistributionPoints', array: [] };
                    t && (i.critical = !0);
                    for (var s = n(e, 0), a = 0; a < s.length; a++) {
                      var u = o(e, s[a]);
                      i.array.push(this.getDistributionPoint(u));
                    }
                    return i;
                  }),
                  (this.getDistributionPoint = function (e) {
                    for (var t = {}, r = n(e, 0), i = 0; i < r.length; i++) {
                      var s = e.substr(r[i], 2),
                        a = o(e, r[i]);
                      'a0' == s && (t.dpname = this.getDistributionPointName(a));
                    }
                    return t;
                  }),
                  (this.getDistributionPointName = function (e) {
                    for (var t = {}, r = n(e, 0), i = 0; i < r.length; i++) {
                      var s = e.substr(r[i], 2),
                        a = o(e, r[i]);
                      'a0' == s && (t.full = this.getGeneralNames(a));
                    }
                    return t;
                  }),
                  (this.getExtCRLDistributionPointsURI = function () {
                    var e = this.getExtInfo('cRLDistributionPoints');
                    if (void 0 === e) return e;
                    for (var t = new Array(), r = n(this.hex, e.vidx), i = 0; i < r.length; i++)
                      try {
                        var o = Ee(s(this.hex, r[i], [0, 0, 0], '86'));
                        t.push(o);
                      } catch (a) {}
                    return t;
                  }),
                  (this.getExtAIAInfo = function () {
                    var e = this.getExtInfo('authorityInfoAccess');
                    if (void 0 === e) return e;
                    for (
                      var t = { ocsp: [], caissuer: [] }, r = n(this.hex, e.vidx), i = 0;
                      i < r.length;
                      i++
                    ) {
                      var o = s(this.hex, r[i], [0], '06'),
                        a = s(this.hex, r[i], [1], '86');
                      '2b06010505073001' === o && t.ocsp.push(Ee(a)),
                        '2b06010505073002' === o && t.caissuer.push(Ee(a));
                    }
                    return t;
                  }),
                  (this.getExtAuthorityInfoAccess = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('authorityInfoAccess');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var i = { extname: 'authorityInfoAccess', array: [] };
                    t && (i.critical = !0);
                    for (var u = n(e, 0), c = 0; c < u.length; c++) {
                      var h = a(e, u[c], [0], '06'),
                        l = Ee(s(e, u[c], [1], '86'));
                      if ('2b06010505073001' == h) i.array.push({ ocsp: l });
                      else {
                        if ('2b06010505073002' != h) throw new Error('unknown method: ' + h);
                        i.array.push({ caissuer: l });
                      }
                    }
                    return i;
                  }),
                  (this.getExtCertificatePolicies = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('certificatePolicies');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var i = { extname: 'certificatePolicies', array: [] };
                    t && (i.critical = !0);
                    for (var s = n(e, 0), a = 0; a < s.length; a++) {
                      var u = o(e, s[a]),
                        c = this.getPolicyInformation(u);
                      i.array.push(c);
                    }
                    return i;
                  }),
                  (this.getPolicyInformation = function (e) {
                    var t = {},
                      r = s(e, 0, [0], '06');
                    t.policyoid = d(r);
                    var i = l(e, 0, [1], '30');
                    if (-1 != i) {
                      t.array = [];
                      for (var a = n(e, i), u = 0; u < a.length; u++) {
                        var c = o(e, a[u]),
                          h = this.getPolicyQualifierInfo(c);
                        t.array.push(h);
                      }
                    }
                    return t;
                  }),
                  (this.getPolicyQualifierInfo = function (e) {
                    var t = {},
                      r = s(e, 0, [0], '06');
                    if ('2b06010505070201' === r) {
                      var n = a(e, 0, [1], '16');
                      t.cps = xe(n);
                    } else if ('2b06010505070202' === r) {
                      var i = u(e, 0, [1], '30');
                      t.unotice = this.getUserNotice(i);
                    }
                    return t;
                  }),
                  (this.getUserNotice = function (e) {
                    for (var t = {}, r = n(e, 0), i = 0; i < r.length; i++) {
                      var s = o(e, r[i]);
                      '30' != s.substr(0, 2) && (t.exptext = this.getDisplayText(s));
                    }
                    return t;
                  }),
                  (this.getDisplayText = function (e) {
                    var t = {};
                    return (
                      (t.type = { '0c': 'utf8', 16: 'ia5', '1a': 'vis', '1e': 'bmp' }[
                        e.substr(0, 2)
                      ]),
                      (t.str = xe(i(e, 0))),
                      t
                    );
                  }),
                  (this.getExtCRLNumber = function (e, t) {
                    var r = { extname: 'cRLNumber' };
                    if ((t && (r.critical = !0), '02' == e.substr(0, 2)))
                      return (r.num = { hex: i(e, 0) }), r;
                    throw new Error('hExtV parse error: ' + e);
                  }),
                  (this.getExtCRLReason = function (e, t) {
                    var r = { extname: 'cRLReason' };
                    if ((t && (r.critical = !0), '0a' == e.substr(0, 2)))
                      return (r.code = parseInt(i(e, 0), 16)), r;
                    throw new Error('hExtV parse error: ' + e);
                  }),
                  (this.getExtOcspNonce = function (e, t) {
                    var r = { extname: 'ocspNonce' };
                    t && (r.critical = !0);
                    var n = i(e, 0);
                    return (r.hex = n), r;
                  }),
                  (this.getExtOcspNoCheck = function (e, t) {
                    var r = { extname: 'ocspNoCheck' };
                    return t && (r.critical = !0), r;
                  }),
                  (this.getExtAdobeTimeStamp = function (e, t) {
                    if (void 0 === e && void 0 === t) {
                      var r = this.getExtInfo('adobeTimeStamp');
                      if (void 0 === r) return;
                      (e = o(this.hex, r.vidx)), (t = r.critical);
                    }
                    var i = { extname: 'adobeTimeStamp' };
                    t && (i.critical = !0);
                    var s = n(e, 0);
                    if (s.length > 1) {
                      var a = o(e, s[1]),
                        u = this.getGeneralName(a);
                      null != u.uri && (i.uri = u.uri);
                    }
                    if (s.length > 2) {
                      var c = o(e, s[2]);
                      '0101ff' == c && (i.reqauth = !0), '010100' == c && (i.reqauth = !1);
                    }
                    return i;
                  }),
                  (this.getX500NameRule = function (e) {
                    for (var t = null, r = [], n = 0; n < e.length; n++)
                      for (var i = e[n], o = 0; o < i.length; o++) r.push(i[o]);
                    for (n = 0; n < r.length; n++) {
                      var s = r[n],
                        a = s.ds,
                        u = s.value,
                        c = s.type;
                      if ('prn' != a && 'utf8' != a && 'ia5' != a) return 'mixed';
                      if ('ia5' == a) {
                        if ('CN' != c) return 'mixed';
                        if (le.lang.String.isMail(u)) continue;
                        return 'mixed';
                      }
                      if ('C' == c) {
                        if ('prn' == a) continue;
                        return 'mixed';
                      }
                      if (null == t) t = a;
                      else if (t !== a) return 'mixed';
                    }
                    return null == t ? 'prn' : t;
                  }),
                  (this.getX500Name = function (e) {
                    var t = this.getX500NameArray(e);
                    return { array: t, str: this.dnarraytostr(t) };
                  }),
                  (this.getX500NameArray = function (e) {
                    for (var t = [], r = n(e, 0), i = 0; i < r.length; i++)
                      t.push(this.getRDN(o(e, r[i])));
                    return t;
                  }),
                  (this.getRDN = function (e) {
                    for (var t = [], r = n(e, 0), i = 0; i < r.length; i++)
                      t.push(this.getAttrTypeAndValue(o(e, r[i])));
                    return t;
                  }),
                  (this.getAttrTypeAndValue = function (e) {
                    var t = { type: null, value: null, ds: null },
                      r = n(e, 0),
                      i = s(e, r[0], [], '06'),
                      o = s(e, r[1], []),
                      a = le.asn1.ASN1Util.oidHexToInt(i);
                    return (
                      (t.type = le.asn1.x509.OID.oid2atype(a)),
                      (t.value = xe(o)),
                      (t.ds = this.HEX2STAG[e.substr(r[1], 2)]),
                      t
                    );
                  }),
                  (this.readCertPEM = function (e) {
                    this.readCertHex(v(e));
                  }),
                  (this.readCertHex = function (e) {
                    (this.hex = e), this.getVersion();
                    try {
                      h(this.hex, 0, [0, 7], 'a3'), this.parseExt();
                    } catch (t) {}
                  }),
                  (this.getParam = function () {
                    var e = {};
                    return (
                      (e.version = this.getVersion()),
                      (e.serial = { hex: this.getSerialNumberHex() }),
                      (e.sigalg = this.getSignatureAlgorithmField()),
                      (e.issuer = this.getIssuer()),
                      (e.notbefore = this.getNotBefore()),
                      (e.notafter = this.getNotAfter()),
                      (e.subject = this.getSubject()),
                      (e.sbjpubkey = Te(this.getPublicKeyHex(), 'PUBLIC KEY')),
                      this.aExtInfo.length > 0 && (e.ext = this.getExtParamArray()),
                      (e.sighex = this.getSignatureValueHex()),
                      e
                    );
                  }),
                  (this.getExtParamArray = function (e) {
                    null == e &&
                      -1 != l(this.hex, 0, [0, '[3]']) &&
                      (e = c(this.hex, 0, [0, '[3]', 0], '30'));
                    for (var t = [], r = n(e, 0), i = 0; i < r.length; i++) {
                      var s = o(e, r[i]),
                        a = this.getExtParam(s);
                      null != a && t.push(a);
                    }
                    return t;
                  }),
                  (this.getExtParam = function (e) {
                    var t = n(e, 0).length;
                    if (2 != t && 3 != t)
                      throw new Error('wrong number elements in Extension: ' + t + ' ' + e);
                    var r = g(s(e, 0, [0], '06')),
                      i = !1;
                    3 == t && '0101ff' == u(e, 0, [1]) && (i = !0);
                    var o = u(e, 0, [t - 1, 0]),
                      a = void 0;
                    if (
                      ('2.5.29.14' == r
                        ? (a = this.getExtSubjectKeyIdentifier(o, i))
                        : '2.5.29.15' == r
                        ? (a = this.getExtKeyUsage(o, i))
                        : '2.5.29.17' == r
                        ? (a = this.getExtSubjectAltName(o, i))
                        : '2.5.29.18' == r
                        ? (a = this.getExtIssuerAltName(o, i))
                        : '2.5.29.19' == r
                        ? (a = this.getExtBasicConstraints(o, i))
                        : '2.5.29.31' == r
                        ? (a = this.getExtCRLDistributionPoints(o, i))
                        : '2.5.29.32' == r
                        ? (a = this.getExtCertificatePolicies(o, i))
                        : '2.5.29.35' == r
                        ? (a = this.getExtAuthorityKeyIdentifier(o, i))
                        : '2.5.29.37' == r
                        ? (a = this.getExtExtKeyUsage(o, i))
                        : '1.3.6.1.5.5.7.1.1' == r
                        ? (a = this.getExtAuthorityInfoAccess(o, i))
                        : '2.5.29.20' == r
                        ? (a = this.getExtCRLNumber(o, i))
                        : '2.5.29.21' == r
                        ? (a = this.getExtCRLReason(o, i))
                        : '1.3.6.1.5.5.7.48.1.2' == r
                        ? (a = this.getExtOcspNonce(o, i))
                        : '1.3.6.1.5.5.7.48.1.5' == r
                        ? (a = this.getExtOcspNoCheck(o, i))
                        : '1.2.840.113583.1.1.9.1' == r && (a = this.getExtAdobeTimeStamp(o, i)),
                      null != a)
                    )
                      return a;
                    var c = { extname: r, extn: o };
                    return i && (c.critical = !0), c;
                  }),
                  (this.findExt = function (e, t) {
                    for (var r = 0; r < e.length; r++) if (e[r].extname == t) return e[r];
                    return null;
                  }),
                  (this.updateExtCDPFullURI = function (e, t) {
                    var r = this.findExt(e, 'cRLDistributionPoints');
                    if (null != r && null != r.array)
                      for (var n = r.array, i = 0; i < n.length; i++)
                        if (null != n[i].dpname && null != n[i].dpname.full)
                          for (var o = n[i].dpname.full, s = 0; s < o.length; s++) {
                            var a = o[i];
                            null != a.uri && (a.uri = t);
                          }
                  }),
                  (this.updateExtAIAOCSP = function (e, t) {
                    var r = this.findExt(e, 'authorityInfoAccess');
                    if (null != r && null != r.array)
                      for (var n = r.array, i = 0; i < n.length; i++)
                        null != n[i].ocsp && (n[i].ocsp = t);
                  }),
                  (this.updateExtAIACAIssuer = function (e, t) {
                    var r = this.findExt(e, 'authorityInfoAccess');
                    if (null != r && null != r.array)
                      for (var n = r.array, i = 0; i < n.length; i++)
                        null != n[i].caissuer && (n[i].caissuer = t);
                  }),
                  (this.dnarraytostr = function (e) {
                    return (
                      '/' +
                      e
                        .map(function (e) {
                          return e
                            .map(function (e) {
                              return (t = e).type + '=' + t.value;
                              var t;
                            })
                            .join('+');
                        })
                        .join('/')
                    );
                  }),
                  (this.getInfo = function () {
                    var e,
                      t,
                      r,
                      n,
                      i = function (e) {
                        for (var t = '', r = e.array, n = 0; n < r.length; n++) {
                          var i = r[n];
                          if (((t += '    policy oid: ' + i.policyoid + '\n'), void 0 !== i.array))
                            for (var o = 0; o < i.array.length; o++) {
                              var s = i.array[o];
                              void 0 !== s.cps && (t += '    cps: ' + s.cps + '\n');
                            }
                        }
                        return t;
                      },
                      o = function (e) {
                        for (var t = '', r = e.array, n = 0; n < r.length; n++) {
                          var i = r[n];
                          try {
                            void 0 !== i.dpname.full[0].uri &&
                              (t += '    ' + i.dpname.full[0].uri + '\n');
                          } catch (o) {}
                          try {
                            void 0 !== i.dname.full[0].dn.hex &&
                              (t += '    ' + Ye.hex2dn(i.dpname.full[0].dn.hex) + '\n');
                          } catch (o) {}
                        }
                        return t;
                      },
                      s = function (e) {
                        for (var t = '', r = e.array, n = 0; n < r.length; n++) {
                          var i = r[n];
                          void 0 !== i.caissuer && (t += '    caissuer: ' + i.caissuer + '\n'),
                            void 0 !== i.ocsp && (t += '    ocsp: ' + i.ocsp + '\n');
                        }
                        return t;
                      };
                    if (
                      ((e = 'Basic Fields\n'),
                      (e += '  serial number: ' + this.getSerialNumberHex() + '\n'),
                      (e += '  signature algorithm: ' + this.getSignatureAlgorithmField() + '\n'),
                      (e += '  issuer: ' + this.getIssuerString() + '\n'),
                      (e += '  notBefore: ' + this.getNotBefore() + '\n'),
                      (e += '  notAfter: ' + this.getNotAfter() + '\n'),
                      (e += '  subject: ' + this.getSubjectString() + '\n'),
                      (e += '  subject public key info: \n'),
                      (e += '    key algorithm: ' + (t = this.getPublicKey()).type + '\n'),
                      'RSA' === t.type &&
                        ((e += '    n=' + He(t.n.toString(16)).substr(0, 16) + '...\n'),
                        (e += '    e=' + He(t.e.toString(16)) + '\n')),
                      null != (r = this.aExtInfo))
                    ) {
                      e += 'X509v3 Extensions:\n';
                      for (var a = 0; a < r.length; a++) {
                        var u = r[a],
                          c = le.asn1.x509.OID.oid2name(u.oid);
                        '' === c && (c = u.oid);
                        var h = '';
                        if (
                          (!0 === u.critical && (h = 'CRITICAL'),
                          (e += '  ' + c + ' ' + h + ':\n'),
                          'basicConstraints' === c)
                        ) {
                          var l = this.getExtBasicConstraints();
                          void 0 === l.cA
                            ? (e += '    {}\n')
                            : ((e += '    cA=true'),
                              void 0 !== l.pathLen && (e += ', pathLen=' + l.pathLen),
                              (e += '\n'));
                        } else if ('keyUsage' === c)
                          e += '    ' + this.getExtKeyUsageString() + '\n';
                        else if ('subjectKeyIdentifier' === c)
                          e += '    ' + this.getExtSubjectKeyIdentifier().kid.hex + '\n';
                        else if ('authorityKeyIdentifier' === c) {
                          var f = this.getExtAuthorityKeyIdentifier();
                          void 0 !== f.kid && (e += '    kid=' + f.kid.hex + '\n');
                        } else
                          'extKeyUsage' === c
                            ? (e += '    ' + this.getExtExtKeyUsage().array.join(', ') + '\n')
                            : 'subjectAltName' === c
                            ? (e +=
                                '    ' +
                                ((n = this.getExtSubjectAltName()),
                                JSON.stringify(n.array).replace(/[\[\]\{\}\"]/g, '') + '\n'))
                            : 'cRLDistributionPoints' === c
                            ? (e += o(this.getExtCRLDistributionPoints()))
                            : 'authorityInfoAccess' === c
                            ? (e += s(this.getExtAuthorityInfoAccess()))
                            : 'certificatePolicies' === c &&
                              (e += i(this.getExtCertificatePolicies()));
                      }
                    }
                    return (
                      (e += 'signature algorithm: ' + this.getSignatureAlgorithmName() + '\n') +
                      'signature: ' +
                      this.getSignatureValueHex().substr(0, 16) +
                      '...\n'
                    );
                  }),
                  'string' == typeof e &&
                    (-1 != e.indexOf('-----BEGIN')
                      ? this.readCertPEM(e)
                      : le.lang.String.isHex(e) && this.readCertHex(e));
              }
              (se.prototype.sign = function (e, t) {
                var r,
                  n = ((r = e), le.crypto.Util.hashString(r, t));
                return this.signWithMessageHash(n, t);
              }),
                (se.prototype.signWithMessageHash = function (e, t) {
                  var r = ie(le.crypto.Util.getPaddedDigestInfoHex(e, t, this.n.bitLength()), 16);
                  return Je(this.doPrivate(r).toString(16), this.n.bitLength());
                }),
                (se.prototype.signPSS = function (e, t, r) {
                  var n,
                    i = ((n = ke(e)), le.crypto.Util.hashHex(n, t));
                  return void 0 === r && (r = -1), this.signWithMessageHashPSS(i, t, r);
                }),
                (se.prototype.signWithMessageHashPSS = function (e, t, r) {
                  var n,
                    i = xe(e),
                    o = i.length,
                    s = this.n.bitLength() - 1,
                    a = Math.ceil(s / 8),
                    u = function (e) {
                      return le.crypto.Util.hashHex(e, t);
                    };
                  if (-1 === r || void 0 === r) r = o;
                  else if (-2 === r) r = a - o - 2;
                  else if (r < -2) throw new Error('invalid salt length');
                  if (a < o + r + 2) throw new Error('data too long');
                  var c = '';
                  r > 0 &&
                    ((c = new Array(r)),
                    new ne().nextBytes(c),
                    (c = String.fromCharCode.apply(String, c)));
                  var h = xe(u(ke('\0\0\0\0\0\0\0\0' + i + c))),
                    l = [];
                  for (n = 0; n < a - r - o - 2; n += 1) l[n] = 0;
                  var f = String.fromCharCode.apply(String, l) + '' + c,
                    d = We(h, f.length, u),
                    g = [];
                  for (n = 0; n < f.length; n += 1) g[n] = f.charCodeAt(n) ^ d.charCodeAt(n);
                  var p = (65280 >> (8 * a - s)) & 255;
                  for (g[0] &= ~p, n = 0; n < o; n++) g.push(h.charCodeAt(n));
                  return g.push(188), Je(this.doPrivate(new k(g)).toString(16), this.n.bitLength());
                }),
                (se.prototype.verify = function (e, t) {
                  var r = ie((t = (t = t.replace(qe, '')).replace(/[ \n]+/g, '')), 16);
                  if (r.bitLength() > this.n.bitLength()) return 0;
                  var n = ze(
                    this.doPublic(r)
                      .toString(16)
                      .replace(/^1f+00/, ''),
                  );
                  if (0 == n.length) return !1;
                  var i,
                    o = n[0];
                  return n[1] == ((i = e), le.crypto.Util.hashString(i, o));
                }),
                (se.prototype.verifyWithMessageHash = function (e, t) {
                  if (t.length != Math.ceil(this.n.bitLength() / 4)) return !1;
                  var r = ie(t, 16);
                  if (r.bitLength() > this.n.bitLength()) return 0;
                  var n = ze(
                    this.doPublic(r)
                      .toString(16)
                      .replace(/^1f+00/, ''),
                  );
                  return 0 != n.length && (n[0], n[1] == e);
                }),
                (se.prototype.verifyPSS = function (e, t, r, n) {
                  var i,
                    o = ((i = ke(e)), le.crypto.Util.hashHex(i, r));
                  return void 0 === n && (n = -1), this.verifyWithMessageHashPSS(o, t, r, n);
                }),
                (se.prototype.verifyWithMessageHashPSS = function (e, t, r, n) {
                  if (t.length != Math.ceil(this.n.bitLength() / 4)) return !1;
                  var i,
                    o = new k(t, 16),
                    s = function (e) {
                      return le.crypto.Util.hashHex(e, r);
                    },
                    a = xe(e),
                    u = a.length,
                    c = this.n.bitLength() - 1,
                    h = Math.ceil(c / 8);
                  if (-1 === n || void 0 === n) n = u;
                  else if (-2 === n) n = h - u - 2;
                  else if (n < -2) throw new Error('invalid salt length');
                  if (h < u + n + 2) throw new Error('data too long');
                  var l = this.doPublic(o).toByteArray();
                  for (i = 0; i < l.length; i += 1) l[i] &= 255;
                  for (; l.length < h; ) l.unshift(0);
                  if (188 !== l[h - 1]) throw new Error('encoded message does not end in 0xbc');
                  var f = (l = String.fromCharCode.apply(String, l)).substr(0, h - u - 1),
                    d = l.substr(f.length, u),
                    g = (65280 >> (8 * h - c)) & 255;
                  if (0 != (f.charCodeAt(0) & g)) throw new Error('bits beyond keysize not zero');
                  var p = We(d, f.length, s),
                    v = [];
                  for (i = 0; i < f.length; i += 1) v[i] = f.charCodeAt(i) ^ p.charCodeAt(i);
                  v[0] &= ~g;
                  var y = h - u - n - 2;
                  for (i = 0; i < y; i += 1)
                    if (0 !== v[i]) throw new Error('leftmost octets not zero');
                  if (1 !== v[y]) throw new Error('0x01 marker not found');
                  return (
                    d ===
                    xe(
                      s(
                        ke('\0\0\0\0\0\0\0\0' + a + String.fromCharCode.apply(String, v.slice(-n))),
                      ),
                    )
                  );
                }),
                (se.SALT_LEN_HLEN = -1),
                (se.SALT_LEN_MAX = -2),
                (se.SALT_LEN_RECOVER = -2),
                (Ye.hex2dn = function (e, t) {
                  if ((void 0 === t && (t = 0), '30' !== e.substr(t, 2)))
                    throw new Error('malformed DN');
                  for (var r = new Array(), n = ge.getChildIdx(e, t), i = 0; i < n.length; i++)
                    r.push(Ye.hex2rdn(e, n[i]));
                  return (
                    '/' +
                    (r = r.map(function (e) {
                      return e.replace('/', '\\/');
                    })).join('/')
                  );
                }),
                (Ye.hex2rdn = function (e, t) {
                  if ((void 0 === t && (t = 0), '31' !== e.substr(t, 2)))
                    throw new Error('malformed RDN');
                  for (var r = new Array(), n = ge.getChildIdx(e, t), i = 0; i < n.length; i++)
                    r.push(Ye.hex2attrTypeValue(e, n[i]));
                  return (r = r.map(function (e) {
                    return e.replace('+', '\\+');
                  })).join('+');
                }),
                (Ye.hex2attrTypeValue = function (e, t) {
                  var r = ge,
                    n = r.getV;
                  if ((void 0 === t && (t = 0), '30' !== e.substr(t, 2)))
                    throw new Error('malformed attribute type and value');
                  var i = r.getChildIdx(e, t);
                  2 !== i.length || e.substr(i[0], 2);
                  var o = n(e, i[0]),
                    s = le.asn1.ASN1Util.oidHexToInt(o);
                  return le.asn1.x509.OID.oid2atype(s) + '=' + xe(n(e, i[1]));
                }),
                (Ye.getPublicKeyFromCertHex = function (e) {
                  var t = new Ye();
                  return t.readCertHex(e), t.getPublicKey();
                }),
                (Ye.getPublicKeyFromCertPEM = function (e) {
                  var t = new Ye();
                  return t.readCertPEM(e), t.getPublicKey();
                }),
                (Ye.getPublicKeyInfoPropOfCertPEM = function (e) {
                  var t,
                    r,
                    n = ge.getVbyList,
                    i = { algparam: null };
                  return (
                    (t = new Ye()).readCertPEM(e),
                    (r = t.getPublicKeyHex()),
                    (i.keyhex = n(r, 0, [1], '03').substr(2)),
                    (i.algoid = n(r, 0, [0, 0], '06')),
                    '2a8648ce3d0201' === i.algoid && (i.algparam = n(r, 0, [0, 1], '06')),
                    i
                  );
                }),
                (Ye.KEYUSAGE_NAME = [
                  'digitalSignature',
                  'nonRepudiation',
                  'keyEncipherment',
                  'dataEncipherment',
                  'keyAgreement',
                  'keyCertSign',
                  'cRLSign',
                  'encipherOnly',
                  'decipherOnly',
                ]),
                (void 0 !== le && le) || (t.KJUR = le = {}),
                (void 0 !== le.jws && le.jws) || (le.jws = {}),
                (le.jws.JWS = function () {
                  var e = le.jws.JWS.isSafeJSONString;
                  this.parseJWS = function (t, r) {
                    if (void 0 === this.parsedJWS || (!r && void 0 === this.parsedJWS.sigvalH)) {
                      var n = t.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
                      if (null == n)
                        throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                      var i = n[1],
                        o = n[2],
                        s = n[3],
                        a = i + '.' + o;
                      if (
                        ((this.parsedJWS = {}),
                        (this.parsedJWS.headB64U = i),
                        (this.parsedJWS.payloadB64U = o),
                        (this.parsedJWS.sigvalB64U = s),
                        (this.parsedJWS.si = a),
                        !r)
                      ) {
                        var u = we(s),
                          c = ie(u, 16);
                        (this.parsedJWS.sigvalH = u), (this.parsedJWS.sigvalBI = c);
                      }
                      var h = de(i),
                        l = de(o);
                      if (
                        ((this.parsedJWS.headS = h),
                        (this.parsedJWS.payloadS = l),
                        !e(h, this.parsedJWS, 'headP'))
                      )
                        throw 'malformed JSON string for JWS Head: ' + h;
                    }
                  };
                }),
                (le.jws.JWS.sign = function (e, t, n, i, o) {
                  var s,
                    a,
                    u,
                    c = le,
                    h = c.jws.JWS,
                    l = h.readSafeJSONString,
                    f = h.isSafeJSONString,
                    d = c.crypto,
                    g = (d.ECDSA, d.Mac),
                    p = d.Signature,
                    v = JSON;
                  if ('string' != typeof t && 'object' != (void 0 === t ? 'undefined' : r(t)))
                    throw 'spHeader must be JSON string or object: ' + t;
                  if (
                    ('object' == (void 0 === t ? 'undefined' : r(t)) &&
                      ((a = t), (s = v.stringify(a))),
                    'string' == typeof t)
                  ) {
                    if (!f((s = t))) throw 'JWS Head is not safe JSON string: ' + s;
                    a = l(s);
                  }
                  if (
                    ((u = n),
                    'object' == (void 0 === n ? 'undefined' : r(n)) && (u = v.stringify(n)),
                    ('' != e && null != e) || void 0 === a.alg || (e = a.alg),
                    '' != e && null != e && void 0 === a.alg && ((a.alg = e), (s = v.stringify(a))),
                    e !== a.alg)
                  )
                    throw "alg and sHeader.alg doesn't match: " + e + '!=' + a.alg;
                  var y = null;
                  if (void 0 === h.jwsalg2sigalg[e]) throw 'unsupported alg name: ' + e;
                  y = h.jwsalg2sigalg[e];
                  var m = fe(s) + '.' + fe(u),
                    _ = '';
                  if ('Hmac' == y.substr(0, 4)) {
                    if (void 0 === i) throw 'mac key shall be specified for HS* alg';
                    var S = new g({ alg: y, prov: 'cryptojs', pass: i });
                    S.updateString(m), (_ = S.doFinal());
                  } else if (-1 != y.indexOf('withECDSA')) {
                    (w = new p({ alg: y })).init(i, o), w.updateString(m);
                    var b = w.sign();
                    _ = le.crypto.ECDSA.asn1SigToConcatSig(b);
                  } else {
                    var w;
                    'none' != y &&
                      ((w = new p({ alg: y })).init(i, o), w.updateString(m), (_ = w.sign()));
                  }
                  return m + '.' + be(_);
                }),
                (le.jws.JWS.verify = function (e, t, n) {
                  var i,
                    o = le,
                    s = o.jws.JWS,
                    a = s.readSafeJSONString,
                    u = o.crypto,
                    c = u.ECDSA,
                    h = u.Mac,
                    l = u.Signature;
                  void 0 !== r(se) && (i = se);
                  var f = e.split('.');
                  if (3 !== f.length) return !1;
                  var d,
                    g = f[0] + '.' + f[1],
                    p = we(f[2]),
                    v = a(de(f[0])),
                    y = null;
                  if (void 0 === v.alg) throw 'algorithm not specified in header';
                  if (
                    ((d = (y = v.alg).substr(0, 2)),
                    null != n &&
                      '[object Array]' === Object.prototype.toString.call(n) &&
                      n.length > 0 &&
                      -1 == (':' + n.join(':') + ':').indexOf(':' + y + ':'))
                  )
                    throw "algorithm '" + y + "' not accepted in the list";
                  if ('none' != y && null === t) throw 'key shall be specified to verify.';
                  if (
                    ('string' == typeof t && -1 != t.indexOf('-----BEGIN ') && (t = Ke.getKey(t)),
                    !(('RS' != d && 'PS' != d) || t instanceof i))
                  )
                    throw 'key shall be a RSAKey obj for RS* and PS* algs';
                  if ('ES' == d && !(t instanceof c)) throw 'key shall be a ECDSA obj for ES* algs';
                  var m = null;
                  if (void 0 === s.jwsalg2sigalg[v.alg]) throw 'unsupported alg name: ' + y;
                  if ('none' == (m = s.jwsalg2sigalg[y])) throw 'not supported';
                  if ('Hmac' == m.substr(0, 4)) {
                    if (void 0 === t) throw 'hexadecimal key shall be specified for HMAC';
                    var _ = new h({ alg: m, pass: t });
                    return _.updateString(g), p == _.doFinal();
                  }
                  if (-1 != m.indexOf('withECDSA')) {
                    var S,
                      b = null;
                    try {
                      b = c.concatSigToASN1Sig(p);
                    } catch (w) {
                      return !1;
                    }
                    return (S = new l({ alg: m })).init(t), S.updateString(g), S.verify(b);
                  }
                  return (S = new l({ alg: m })).init(t), S.updateString(g), S.verify(p);
                }),
                (le.jws.JWS.parse = function (e) {
                  var t,
                    r,
                    n,
                    i = e.split('.'),
                    o = {};
                  if (2 != i.length && 3 != i.length)
                    throw "malformed sJWS: wrong number of '.' splitted elements";
                  return (
                    (t = i[0]),
                    (r = i[1]),
                    3 == i.length && (n = i[2]),
                    (o.headerObj = le.jws.JWS.readSafeJSONString(de(t))),
                    (o.payloadObj = le.jws.JWS.readSafeJSONString(de(r))),
                    (o.headerPP = JSON.stringify(o.headerObj, null, '  ')),
                    null == o.payloadObj
                      ? (o.payloadPP = de(r))
                      : (o.payloadPP = JSON.stringify(o.payloadObj, null, '  ')),
                    void 0 !== n && (o.sigHex = we(n)),
                    o
                  );
                }),
                (le.jws.JWS.verifyJWT = function (e, t, n) {
                  var i = le.jws,
                    o = i.JWS,
                    s = o.readSafeJSONString,
                    a = o.inArray,
                    u = o.includedArray,
                    c = e.split('.'),
                    h = c[0],
                    l = c[1],
                    f = (we(c[2]), s(de(h))),
                    d = s(de(l));
                  if (void 0 === f.alg) return !1;
                  if (void 0 === n.alg) throw 'acceptField.alg shall be specified';
                  if (!a(f.alg, n.alg)) return !1;
                  if (void 0 !== d.iss && 'object' === r(n.iss) && !a(d.iss, n.iss)) return !1;
                  if (void 0 !== d.sub && 'object' === r(n.sub) && !a(d.sub, n.sub)) return !1;
                  if (void 0 !== d.aud && 'object' === r(n.aud))
                    if ('string' == typeof d.aud) {
                      if (!a(d.aud, n.aud)) return !1;
                    } else if ('object' == r(d.aud) && !u(d.aud, n.aud)) return !1;
                  var g = i.IntDate.getNow();
                  return (
                    void 0 !== n.verifyAt && 'number' == typeof n.verifyAt && (g = n.verifyAt),
                    (void 0 !== n.gracePeriod && 'number' == typeof n.gracePeriod) ||
                      (n.gracePeriod = 0),
                    !(
                      (void 0 !== d.exp && 'number' == typeof d.exp && d.exp + n.gracePeriod < g) ||
                      (void 0 !== d.nbf && 'number' == typeof d.nbf && g < d.nbf - n.gracePeriod) ||
                      (void 0 !== d.iat && 'number' == typeof d.iat && g < d.iat - n.gracePeriod) ||
                      (void 0 !== d.jti && void 0 !== n.jti && d.jti !== n.jti) ||
                      !o.verify(e, t, n.alg)
                    )
                  );
                }),
                (le.jws.JWS.includedArray = function (e, t) {
                  var n = le.jws.JWS.inArray;
                  if (null === e) return !1;
                  if ('object' !== (void 0 === e ? 'undefined' : r(e))) return !1;
                  if ('number' != typeof e.length) return !1;
                  for (var i = 0; i < e.length; i++) if (!n(e[i], t)) return !1;
                  return !0;
                }),
                (le.jws.JWS.inArray = function (e, t) {
                  if (null === t) return !1;
                  if ('object' !== (void 0 === t ? 'undefined' : r(t))) return !1;
                  if ('number' != typeof t.length) return !1;
                  for (var n = 0; n < t.length; n++) if (t[n] == e) return !0;
                  return !1;
                }),
                (le.jws.JWS.jwsalg2sigalg = {
                  HS256: 'HmacSHA256',
                  HS384: 'HmacSHA384',
                  HS512: 'HmacSHA512',
                  RS256: 'SHA256withRSA',
                  RS384: 'SHA384withRSA',
                  RS512: 'SHA512withRSA',
                  ES256: 'SHA256withECDSA',
                  ES384: 'SHA384withECDSA',
                  PS256: 'SHA256withRSAandMGF1',
                  PS384: 'SHA384withRSAandMGF1',
                  PS512: 'SHA512withRSAandMGF1',
                  none: 'none',
                }),
                (le.jws.JWS.isSafeJSONString = function (e, t, n) {
                  var i = null;
                  try {
                    return 'object' != (void 0 === (i = he(e)) ? 'undefined' : r(i)) ||
                      i.constructor === Array
                      ? 0
                      : (t && (t[n] = i), 1);
                  } catch (o) {
                    return 0;
                  }
                }),
                (le.jws.JWS.readSafeJSONString = function (e) {
                  var t = null;
                  try {
                    return 'object' != (void 0 === (t = he(e)) ? 'undefined' : r(t)) ||
                      t.constructor === Array
                      ? null
                      : t;
                  } catch (n) {
                    return null;
                  }
                }),
                (le.jws.JWS.getEncodedSignatureValueFromJWS = function (e) {
                  var t = e.match(/^[^.]+\.[^.]+\.([^.]+)$/);
                  if (null == t) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                  return t[1];
                }),
                (le.jws.JWS.getJWKthumbprint = function (e) {
                  if ('RSA' !== e.kty && 'EC' !== e.kty && 'oct' !== e.kty)
                    throw 'unsupported algorithm for JWK Thumprint';
                  var t = '{';
                  if ('RSA' === e.kty) {
                    if ('string' != typeof e.n || 'string' != typeof e.e)
                      throw 'wrong n and e value for RSA key';
                    (t += '"e":"' + e.e + '",'),
                      (t += '"kty":"' + e.kty + '",'),
                      (t += '"n":"' + e.n + '"}');
                  } else if ('EC' === e.kty) {
                    if (
                      'string' != typeof e.crv ||
                      'string' != typeof e.x ||
                      'string' != typeof e.y
                    )
                      throw 'wrong crv, x and y value for EC key';
                    (t += '"crv":"' + e.crv + '",'),
                      (t += '"kty":"' + e.kty + '",'),
                      (t += '"x":"' + e.x + '",'),
                      (t += '"y":"' + e.y + '"}');
                  } else if ('oct' === e.kty) {
                    if ('string' != typeof e.k) throw 'wrong k value for oct(symmetric) key';
                    (t += '"kty":"' + e.kty + '",'), (t += '"k":"' + e.k + '"}');
                  }
                  var r = ke(t);
                  return be(le.crypto.Util.hashHex(r, 'sha256'));
                }),
                (le.jws.IntDate = {}),
                (le.jws.IntDate.get = function (e) {
                  var t = le.jws.IntDate,
                    r = t.getNow,
                    n = t.getZulu;
                  if ('now' == e) return r();
                  if ('now + 1hour' == e) return r() + 3600;
                  if ('now + 1day' == e) return r() + 86400;
                  if ('now + 1month' == e) return r() + 2592e3;
                  if ('now + 1year' == e) return r() + 31536e3;
                  if (e.match(/Z$/)) return n(e);
                  if (e.match(/^[0-9]+$/)) return parseInt(e);
                  throw 'unsupported format: ' + e;
                }),
                (le.jws.IntDate.getZulu = function (e) {
                  return De(e);
                }),
                (le.jws.IntDate.getNow = function () {
                  return ~~(new Date() / 1e3);
                }),
                (le.jws.IntDate.intDate2UTCString = function (e) {
                  return new Date(1e3 * e).toUTCString();
                }),
                (le.jws.IntDate.intDate2Zulu = function (e) {
                  var t = new Date(1e3 * e);
                  return (
                    ('0000' + t.getUTCFullYear()).slice(-4) +
                    ('00' + (t.getUTCMonth() + 1)).slice(-2) +
                    ('00' + t.getUTCDate()).slice(-2) +
                    ('00' + t.getUTCHours()).slice(-2) +
                    ('00' + t.getUTCMinutes()).slice(-2) +
                    ('00' + t.getUTCSeconds()).slice(-2) +
                    'Z'
                  );
                }),
                (t.SecureRandom = ne),
                (t.rng_seed_time = Q),
                (t.BigInteger = k),
                (t.RSAKey = se);
              var Ge = le.crypto.EDSA;
              t.EDSA = Ge;
              var Xe = le.crypto.DSA;
              t.DSA = Xe;
              var $e = le.crypto.Signature;
              t.Signature = $e;
              var Qe = le.crypto.MessageDigest;
              t.MessageDigest = Qe;
              var Ze = le.crypto.Mac;
              t.Mac = Ze;
              var et = le.crypto.Cipher;
              (t.Cipher = et),
                (t.KEYUTIL = Ke),
                (t.ASN1HEX = ge),
                (t.X509 = Ye),
                (t.CryptoJS = b),
                (t.b64tohex = E),
                (t.b64toBA = x),
                (t.stoBA = pe),
                (t.BAtos = ve),
                (t.BAtohex = ye),
                (t.stohex = me),
                (t.stob64 = function (e) {
                  return F(me(e));
                }),
                (t.stob64u = function (e) {
                  return _e(F(me(e)));
                }),
                (t.b64utos = function (e) {
                  return ve(x(Se(e)));
                }),
                (t.b64tob64u = _e),
                (t.b64utob64 = Se),
                (t.hex2b64 = F),
                (t.hextob64u = be),
                (t.b64utohex = we),
                (t.utf8tob64u = fe),
                (t.b64utoutf8 = de),
                (t.utf8tob64 = function (e) {
                  return F(Le(je(e)));
                }),
                (t.b64toutf8 = function (e) {
                  return decodeURIComponent(Ne(E(e)));
                }),
                (t.utf8tohex = Fe),
                (t.hextoutf8 = Ee),
                (t.hextorstr = xe),
                (t.rstrtohex = ke),
                (t.hextob64 = Ae),
                (t.hextob64nl = Pe),
                (t.b64nltohex = Ce),
                (t.hextopem = Te),
                (t.pemtohex = Ie),
                (t.hextoArrayBuffer = function (e) {
                  if (e.length % 2 != 0) throw 'input is not even length';
                  if (null == e.match(/^[0-9A-Fa-f]+$/)) throw 'input is not hexadecimal';
                  for (
                    var t = new ArrayBuffer(e.length / 2), r = new DataView(t), n = 0;
                    n < e.length / 2;
                    n++
                  )
                    r.setUint8(n, parseInt(e.substr(2 * n, 2), 16));
                  return t;
                }),
                (t.ArrayBuffertohex = function (e) {
                  for (var t = '', r = new DataView(e), n = 0; n < e.byteLength; n++)
                    t += ('00' + r.getUint8(n).toString(16)).slice(-2);
                  return t;
                }),
                (t.zulutomsec = Re),
                (t.zulutosec = De),
                (t.zulutodate = function (e) {
                  return new Date(Re(e));
                }),
                (t.datetozulu = function (e, t, r) {
                  var n,
                    i = e.getUTCFullYear();
                  if (t) {
                    if (i < 1950 || 2049 < i) throw 'not proper year for UTCTime: ' + i;
                    n = ('' + i).slice(-2);
                  } else n = ('000' + i).slice(-4);
                  if (
                    ((n += ('0' + (e.getUTCMonth() + 1)).slice(-2)),
                    (n += ('0' + e.getUTCDate()).slice(-2)),
                    (n += ('0' + e.getUTCHours()).slice(-2)),
                    (n += ('0' + e.getUTCMinutes()).slice(-2)),
                    (n += ('0' + e.getUTCSeconds()).slice(-2)),
                    r)
                  ) {
                    var o = e.getUTCMilliseconds();
                    0 !== o && (n += '.' + (o = (o = ('00' + o).slice(-3)).replace(/0+$/g, '')));
                  }
                  return n + 'Z';
                }),
                (t.uricmptohex = Le),
                (t.hextouricmp = Ne),
                (t.ipv6tohex = Ue),
                (t.hextoipv6 = Oe),
                (t.hextoip = Be),
                (t.iptohex = function (e) {
                  var t = 'malformed IP address';
                  if (!(e = e.toLowerCase(e)).match(/^[0-9.]+$/)) {
                    if (e.match(/^[0-9a-f:]+$/) && -1 !== e.indexOf(':')) return Ue(e);
                    throw t;
                  }
                  var r = e.split('.');
                  if (4 !== r.length) throw t;
                  var n = '';
                  try {
                    for (var i = 0; i < 4; i++) n += ('0' + parseInt(r[i]).toString(16)).slice(-2);
                    return n;
                  } catch (o) {
                    throw t;
                  }
                }),
                (t.encodeURIComponentAll = je),
                (t.newline_toUnix = function (e) {
                  return e.replace(/\r\n/gm, '\n');
                }),
                (t.newline_toDos = function (e) {
                  return (e = e.replace(/\r\n/gm, '\n')).replace(/\n/gm, '\r\n');
                }),
                (t.hextoposhex = He),
                (t.intarystrtohex = function (e) {
                  e = (e = (e = e.replace(/^\s*\[\s*/, '')).replace(/\s*\]\s*$/, '')).replace(
                    /\s*/g,
                    '',
                  );
                  try {
                    return e
                      .split(/,/)
                      .map(function (e, t, r) {
                        var n = parseInt(e);
                        if (n < 0 || 255 < n) throw 'integer not in range 0-255';
                        return ('00' + n.toString(16)).slice(-2);
                      })
                      .join('');
                  } catch (t) {
                    throw 'malformed integer array string: ' + t;
                  }
                }),
                (t.strdiffidx = function (e, t) {
                  var r = e.length;
                  e.length > t.length && (r = t.length);
                  for (var n = 0; n < r; n++) if (e.charCodeAt(n) != t.charCodeAt(n)) return n;
                  return e.length != t.length ? r : -1;
                }),
                (t.KJUR = le);
              var tt = le.crypto;
              t.crypto = tt;
              var rt = le.asn1;
              t.asn1 = rt;
              var nt = le.jws;
              t.jws = nt;
              var it = le.lang;
              t.lang = it;
            }.call(this, r(28).Buffer));
          },
          function (e, t, r) {
            (function (e) {
              /*!
               * The buffer module from node.js-demo, for the browser.
               *
               * @author   Feross Aboukhadijeh <http://feross.org>
               * @license  MIT
               */
              var n = r(30),
                i = r(31),
                o = r(32);
              function s() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
              }
              function a(e, t) {
                if (s() < t) throw new RangeError('Invalid typed array length');
                return (
                  u.TYPED_ARRAY_SUPPORT
                    ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
                    : (null === e && (e = new u(t)), (e.length = t)),
                  e
                );
              }
              function u(e, t, r) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, r);
                if ('number' == typeof e) {
                  if ('string' == typeof t)
                    throw new Error(
                      'If encoding is specified then the first argument must be a string',
                    );
                  return l(this, e);
                }
                return c(this, e, t, r);
              }
              function c(e, t, r, n) {
                if ('number' == typeof t)
                  throw new TypeError('"value" argument must not be a number');
                return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
                  ? (function (e, t, r, n) {
                      if ((t.byteLength, r < 0 || t.byteLength < r))
                        throw new RangeError("'offset' is out of bounds");
                      if (t.byteLength < r + (n || 0))
                        throw new RangeError("'length' is out of bounds");
                      return (
                        (t =
                          void 0 === r && void 0 === n
                            ? new Uint8Array(t)
                            : void 0 === n
                            ? new Uint8Array(t, r)
                            : new Uint8Array(t, r, n)),
                        u.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = u.prototype) : (e = f(e, t)),
                        e
                      );
                    })(e, t, r, n)
                  : 'string' == typeof t
                  ? (function (e, t, r) {
                      if ((('string' == typeof r && '' !== r) || (r = 'utf8'), !u.isEncoding(r)))
                        throw new TypeError('"encoding" must be a valid string encoding');
                      var n = 0 | g(t, r),
                        i = (e = a(e, n)).write(t, r);
                      return i !== n && (e = e.slice(0, i)), e;
                    })(e, t, r)
                  : (function (e, t) {
                      if (u.isBuffer(t)) {
                        var r = 0 | d(t.length);
                        return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e;
                      }
                      if (t) {
                        if (
                          ('undefined' != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) ||
                          'length' in t
                        )
                          return 'number' != typeof t.length || (n = t.length) != n
                            ? a(e, 0)
                            : f(e, t);
                        if ('Buffer' === t.type && o(t.data)) return f(e, t.data);
                      }
                      var n;
                      throw new TypeError(
                        'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
                      );
                    })(e, t);
              }
              function h(e) {
                if ('number' != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative');
              }
              function l(e, t) {
                if ((h(t), (e = a(e, t < 0 ? 0 : 0 | d(t))), !u.TYPED_ARRAY_SUPPORT))
                  for (var r = 0; r < t; ++r) e[r] = 0;
                return e;
              }
              function f(e, t) {
                var r = t.length < 0 ? 0 : 0 | d(t.length);
                e = a(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e;
              }
              function d(e) {
                if (e >= s())
                  throw new RangeError(
                    'Attempt to allocate Buffer larger than maximum size: 0x' +
                      s().toString(16) +
                      ' bytes',
                  );
                return 0 | e;
              }
              function g(e, t) {
                if (u.isBuffer(e)) return e.length;
                if (
                  'undefined' != typeof ArrayBuffer &&
                  'function' == typeof ArrayBuffer.isView &&
                  (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
                )
                  return e.byteLength;
                'string' != typeof e && (e = '' + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1; ; )
                  switch (t) {
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                      return r;
                    case 'utf8':
                    case 'utf-8':
                    case void 0:
                      return H(e).length;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return 2 * r;
                    case 'hex':
                      return r >>> 1;
                    case 'base64':
                      return V(e).length;
                    default:
                      if (n) return H(e).length;
                      (t = ('' + t).toLowerCase()), (n = !0);
                  }
              }
              function p(e, t, r) {
                var n = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
                if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return '';
                if ((r >>>= 0) <= (t >>>= 0)) return '';
                for (e || (e = 'utf8'); ; )
                  switch (e) {
                    case 'hex':
                      return T(this, t, r);
                    case 'utf8':
                    case 'utf-8':
                      return k(this, t, r);
                    case 'ascii':
                      return P(this, t, r);
                    case 'latin1':
                    case 'binary':
                      return C(this, t, r);
                    case 'base64':
                      return x(this, t, r);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return I(this, t, r);
                    default:
                      if (n) throw new TypeError('Unknown encoding: ' + e);
                      (e = (e + '').toLowerCase()), (n = !0);
                  }
              }
              function v(e, t, r) {
                var n = e[t];
                (e[t] = e[r]), (e[r] = n);
              }
              function y(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if (
                  ('string' == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  (r = +r),
                  isNaN(r) && (r = i ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                ) {
                  if (i) return -1;
                  r = e.length - 1;
                } else if (r < 0) {
                  if (!i) return -1;
                  r = 0;
                }
                if (('string' == typeof t && (t = u.from(t, n)), u.isBuffer(t)))
                  return 0 === t.length ? -1 : m(e, t, r, n, i);
                if ('number' == typeof t)
                  return (
                    (t &= 255),
                    u.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf
                      ? i
                        ? Uint8Array.prototype.indexOf.call(e, t, r)
                        : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                      : m(e, [t], r, n, i)
                  );
                throw new TypeError('val must be string, number or Buffer');
              }
              function m(e, t, r, n, i) {
                var o,
                  s = 1,
                  a = e.length,
                  u = t.length;
                if (
                  void 0 !== n &&
                  ('ucs2' === (n = String(n).toLowerCase()) ||
                    'ucs-2' === n ||
                    'utf16le' === n ||
                    'utf-16le' === n)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (s = 2), (a /= 2), (u /= 2), (r /= 2);
                }
                function c(e, t) {
                  return 1 === s ? e[t] : e.readUInt16BE(t * s);
                }
                if (i) {
                  var h = -1;
                  for (o = r; o < a; o++)
                    if (c(e, o) === c(t, -1 === h ? 0 : o - h)) {
                      if ((-1 === h && (h = o), o - h + 1 === u)) return h * s;
                    } else -1 !== h && (o -= o - h), (h = -1);
                } else
                  for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                    for (var l = !0, f = 0; f < u; f++)
                      if (c(e, o + f) !== c(t, f)) {
                        l = !1;
                        break;
                      }
                    if (l) return o;
                  }
                return -1;
              }
              function _(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : (n = i);
                var o = t.length;
                if (o % 2 != 0) throw new TypeError('Invalid hex string');
                n > o / 2 && (n = o / 2);
                for (var s = 0; s < n; ++s) {
                  var a = parseInt(t.substr(2 * s, 2), 16);
                  if (isNaN(a)) return s;
                  e[r + s] = a;
                }
                return s;
              }
              function S(e, t, r, n) {
                return K(H(t, e.length - r), e, r, n);
              }
              function b(e, t, r, n) {
                return K(
                  (function (e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t;
                  })(t),
                  e,
                  r,
                  n,
                );
              }
              function w(e, t, r, n) {
                return b(e, t, r, n);
              }
              function F(e, t, r, n) {
                return K(V(t), e, r, n);
              }
              function E(e, t, r, n) {
                return K(
                  (function (e, t) {
                    for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                      (n = (r = e.charCodeAt(s)) >> 8), (i = r % 256), o.push(i), o.push(n);
                    return o;
                  })(t, e.length - r),
                  e,
                  r,
                  n,
                );
              }
              function x(e, t, r) {
                return 0 === t && r === e.length
                  ? n.fromByteArray(e)
                  : n.fromByteArray(e.slice(t, r));
              }
              function k(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r; ) {
                  var o,
                    s,
                    a,
                    u,
                    c = e[i],
                    h = null,
                    l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                  if (i + l <= r)
                    switch (l) {
                      case 1:
                        c < 128 && (h = c);
                        break;
                      case 2:
                        128 == (192 & (o = e[i + 1])) &&
                          (u = ((31 & c) << 6) | (63 & o)) > 127 &&
                          (h = u);
                        break;
                      case 3:
                        (o = e[i + 1]),
                          (s = e[i + 2]),
                          128 == (192 & o) &&
                            128 == (192 & s) &&
                            (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 &&
                            (u < 55296 || u > 57343) &&
                            (h = u);
                        break;
                      case 4:
                        (o = e[i + 1]),
                          (s = e[i + 2]),
                          (a = e[i + 3]),
                          128 == (192 & o) &&
                            128 == (192 & s) &&
                            128 == (192 & a) &&
                            (u = ((15 & c) << 18) | ((63 & o) << 12) | ((63 & s) << 6) | (63 & a)) >
                              65535 &&
                            u < 1114112 &&
                            (h = u);
                    }
                  null === h
                    ? ((h = 65533), (l = 1))
                    : h > 65535 &&
                      ((h -= 65536), n.push(((h >>> 10) & 1023) | 55296), (h = 56320 | (1023 & h))),
                    n.push(h),
                    (i += l);
                }
                return (function (e) {
                  var t = e.length;
                  if (t <= A) return String.fromCharCode.apply(String, e);
                  for (var r = '', n = 0; n < t; )
                    r += String.fromCharCode.apply(String, e.slice(n, (n += A)));
                  return r;
                })(n);
              }
              (t.Buffer = u),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), u.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (u.TYPED_ARRAY_SUPPORT =
                  void 0 !== e.TYPED_ARRAY_SUPPORT
                    ? e.TYPED_ARRAY_SUPPORT
                    : (function () {
                        try {
                          var e = new Uint8Array(1);
                          return (
                            (e.__proto__ = {
                              __proto__: Uint8Array.prototype,
                              foo: function () {
                                return 42;
                              },
                            }),
                            42 === e.foo() &&
                              'function' == typeof e.subarray &&
                              0 === e.subarray(1, 1).byteLength
                          );
                        } catch (t) {
                          return !1;
                        }
                      })()),
                (t.kMaxLength = s()),
                (u.poolSize = 8192),
                (u._augment = function (e) {
                  return (e.__proto__ = u.prototype), e;
                }),
                (u.from = function (e, t, r) {
                  return c(null, e, t, r);
                }),
                u.TYPED_ARRAY_SUPPORT &&
                  ((u.prototype.__proto__ = Uint8Array.prototype),
                  (u.__proto__ = Uint8Array),
                  'undefined' != typeof Symbol &&
                    Symbol.species &&
                    u[Symbol.species] === u &&
                    Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })),
                (u.alloc = function (e, t, r) {
                  return (
                    (n = null),
                    (o = t),
                    (s = r),
                    h((i = e)),
                    i <= 0
                      ? a(n, i)
                      : void 0 !== o
                      ? 'string' == typeof s
                        ? a(n, i).fill(o, s)
                        : a(n, i).fill(o)
                      : a(n, i)
                  );
                  var n, i, o, s;
                }),
                (u.allocUnsafe = function (e) {
                  return l(null, e);
                }),
                (u.allocUnsafeSlow = function (e) {
                  return l(null, e);
                }),
                (u.isBuffer = function (e) {
                  return !(null == e || !e._isBuffer);
                }),
                (u.compare = function (e, t) {
                  if (!u.isBuffer(e) || !u.isBuffer(t))
                    throw new TypeError('Arguments must be Buffers');
                  if (e === t) return 0;
                  for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                      (r = e[i]), (n = t[i]);
                      break;
                    }
                  return r < n ? -1 : n < r ? 1 : 0;
                }),
                (u.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                    case 'base64':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (u.concat = function (e, t) {
                  if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                  if (0 === e.length) return u.alloc(0);
                  var r;
                  if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                  var n = u.allocUnsafe(t),
                    i = 0;
                  for (r = 0; r < e.length; ++r) {
                    var s = e[r];
                    if (!u.isBuffer(s))
                      throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(n, i), (i += s.length);
                  }
                  return n;
                }),
                (u.byteLength = g),
                (u.prototype._isBuffer = !0),
                (u.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
                  for (var t = 0; t < e; t += 2) v(this, t, t + 1);
                  return this;
                }),
                (u.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
                  for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2);
                  return this;
                }),
                (u.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
                  for (var t = 0; t < e; t += 8)
                    v(this, t, t + 7),
                      v(this, t + 1, t + 6),
                      v(this, t + 2, t + 5),
                      v(this, t + 3, t + 4);
                  return this;
                }),
                (u.prototype.toString = function () {
                  var e = 0 | this.length;
                  return 0 === e
                    ? ''
                    : 0 === arguments.length
                    ? k(this, 0, e)
                    : p.apply(this, arguments);
                }),
                (u.prototype.equals = function (e) {
                  if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
                  return this === e || 0 === u.compare(this, e);
                }),
                (u.prototype.inspect = function () {
                  var e = '',
                    r = t.INSPECT_MAX_BYTES;
                  return (
                    this.length > 0 &&
                      ((e = this.toString('hex', 0, r).match(/.{2}/g).join(' ')),
                      this.length > r && (e += ' ... ')),
                    '<Buffer ' + e + '>'
                  );
                }),
                (u.prototype.compare = function (e, t, r, n, i) {
                  if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    t < 0 || r > e.length || n < 0 || i > this.length)
                  )
                    throw new RangeError('out of range index');
                  if (n >= i && t >= r) return 0;
                  if (n >= i) return -1;
                  if (t >= r) return 1;
                  if (this === e) return 0;
                  for (
                    var o = (i >>>= 0) - (n >>>= 0),
                      s = (r >>>= 0) - (t >>>= 0),
                      a = Math.min(o, s),
                      c = this.slice(n, i),
                      h = e.slice(t, r),
                      l = 0;
                    l < a;
                    ++l
                  )
                    if (c[l] !== h[l]) {
                      (o = c[l]), (s = h[l]);
                      break;
                    }
                  return o < s ? -1 : s < o ? 1 : 0;
                }),
                (u.prototype.includes = function (e, t, r) {
                  return -1 !== this.indexOf(e, t, r);
                }),
                (u.prototype.indexOf = function (e, t, r) {
                  return y(this, e, t, r, !0);
                }),
                (u.prototype.lastIndexOf = function (e, t, r) {
                  return y(this, e, t, r, !1);
                }),
                (u.prototype.write = function (e, t, r, n) {
                  if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0);
                  else if (void 0 === r && 'string' == typeof t)
                    (n = t), (r = this.length), (t = 0);
                  else {
                    if (!isFinite(t))
                      throw new Error(
                        'Buffer.write(string, encoding, offset[, length]) is no longer supported',
                      );
                    (t |= 0),
                      isFinite(r)
                        ? ((r |= 0), void 0 === n && (n = 'utf8'))
                        : ((n = r), (r = void 0));
                  }
                  var i = this.length - t;
                  if (
                    ((void 0 === r || r > i) && (r = i),
                    (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                  )
                    throw new RangeError('Attempt to write outside buffer bounds');
                  n || (n = 'utf8');
                  for (var o = !1; ; )
                    switch (n) {
                      case 'hex':
                        return _(this, e, t, r);
                      case 'utf8':
                      case 'utf-8':
                        return S(this, e, t, r);
                      case 'ascii':
                        return b(this, e, t, r);
                      case 'latin1':
                      case 'binary':
                        return w(this, e, t, r);
                      case 'base64':
                        return F(this, e, t, r);
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return E(this, e, t, r);
                      default:
                        if (o) throw new TypeError('Unknown encoding: ' + n);
                        (n = ('' + n).toLowerCase()), (o = !0);
                    }
                }),
                (u.prototype.toJSON = function () {
                  return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
                });
              var A = 4096;
              function P(e, t, r) {
                var n = '';
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n;
              }
              function C(e, t, r) {
                var n = '';
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n;
              }
              function T(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = '', o = t; o < r; ++o) i += M(e[o]);
                return i;
              }
              function I(e, t, r) {
                for (var n = e.slice(t, r), i = '', o = 0; o < n.length; o += 2)
                  i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i;
              }
              function R(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
                if (e + t > r) throw new RangeError('Trying to access beyond buffer length');
              }
              function D(e, t, r, n, i, o) {
                if (!u.isBuffer(e))
                  throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError('Index out of range');
              }
              function L(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
                  e[r + i] = (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
              }
              function N(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
                  e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
              }
              function U(e, t, r, n, i, o) {
                if (r + n > e.length) throw new RangeError('Index out of range');
                if (r < 0) throw new RangeError('Index out of range');
              }
              function O(e, t, r, n, o) {
                return o || U(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
              }
              function B(e, t, r, n, o) {
                return o || U(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
              }
              (u.prototype.slice = function (e, t) {
                var r,
                  n = this.length;
                if (
                  ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                  (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                  t < e && (t = e),
                  u.TYPED_ARRAY_SUPPORT)
                )
                  (r = this.subarray(e, t)).__proto__ = u.prototype;
                else {
                  var i = t - e;
                  r = new u(i, void 0);
                  for (var o = 0; o < i; ++o) r[o] = this[o + e];
                }
                return r;
              }),
                (u.prototype.readUIntLE = function (e, t, r) {
                  (e |= 0), (t |= 0), r || R(e, t, this.length);
                  for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) n += this[e + o] * i;
                  return n;
                }),
                (u.prototype.readUIntBE = function (e, t, r) {
                  (e |= 0), (t |= 0), r || R(e, t, this.length);
                  for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); ) n += this[e + --t] * i;
                  return n;
                }),
                (u.prototype.readUInt8 = function (e, t) {
                  return t || R(e, 1, this.length), this[e];
                }),
                (u.prototype.readUInt16LE = function (e, t) {
                  return t || R(e, 2, this.length), this[e] | (this[e + 1] << 8);
                }),
                (u.prototype.readUInt16BE = function (e, t) {
                  return t || R(e, 2, this.length), (this[e] << 8) | this[e + 1];
                }),
                (u.prototype.readUInt32LE = function (e, t) {
                  return (
                    t || R(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
                  );
                }),
                (u.prototype.readUInt32BE = function (e, t) {
                  return (
                    t || R(e, 4, this.length),
                    16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (u.prototype.readIntLE = function (e, t, r) {
                  (e |= 0), (t |= 0), r || R(e, t, this.length);
                  for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) n += this[e + o] * i;
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
                }),
                (u.prototype.readIntBE = function (e, t, r) {
                  (e |= 0), (t |= 0), r || R(e, t, this.length);
                  for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
                    o += this[e + --n] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                }),
                (u.prototype.readInt8 = function (e, t) {
                  return (
                    t || R(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                  );
                }),
                (u.prototype.readInt16LE = function (e, t) {
                  t || R(e, 2, this.length);
                  var r = this[e] | (this[e + 1] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (u.prototype.readInt16BE = function (e, t) {
                  t || R(e, 2, this.length);
                  var r = this[e + 1] | (this[e] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (u.prototype.readInt32LE = function (e, t) {
                  return (
                    t || R(e, 4, this.length),
                    this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
                  );
                }),
                (u.prototype.readInt32BE = function (e, t) {
                  return (
                    t || R(e, 4, this.length),
                    (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
                  );
                }),
                (u.prototype.readFloatLE = function (e, t) {
                  return t || R(e, 4, this.length), i.read(this, e, !0, 23, 4);
                }),
                (u.prototype.readFloatBE = function (e, t) {
                  return t || R(e, 4, this.length), i.read(this, e, !1, 23, 4);
                }),
                (u.prototype.readDoubleLE = function (e, t) {
                  return t || R(e, 8, this.length), i.read(this, e, !0, 52, 8);
                }),
                (u.prototype.readDoubleBE = function (e, t) {
                  return t || R(e, 8, this.length), i.read(this, e, !1, 52, 8);
                }),
                (u.prototype.writeUIntLE = function (e, t, r, n) {
                  (e = +e), (t |= 0), (r |= 0), n || D(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                  var i = 1,
                    o = 0;
                  for (this[t] = 255 & e; ++o < r && (i *= 256); ) this[t + o] = (e / i) & 255;
                  return t + r;
                }),
                (u.prototype.writeUIntBE = function (e, t, r, n) {
                  (e = +e), (t |= 0), (r |= 0), n || D(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                  var i = r - 1,
                    o = 1;
                  for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); ) this[t + i] = (e / o) & 255;
                  return t + r;
                }),
                (u.prototype.writeUInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 1, 255, 0),
                    u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (u.prototype.writeUInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 2, 65535, 0),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                      : L(this, e, t, !0),
                    t + 2
                  );
                }),
                (u.prototype.writeUInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 2, 65535, 0),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                      : L(this, e, t, !1),
                    t + 2
                  );
                }),
                (u.prototype.writeUInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 4, 4294967295, 0),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((this[t + 3] = e >>> 24),
                        (this[t + 2] = e >>> 16),
                        (this[t + 1] = e >>> 8),
                        (this[t] = 255 & e))
                      : N(this, e, t, !0),
                    t + 4
                  );
                }),
                (u.prototype.writeUInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 4, 4294967295, 0),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 24),
                        (this[t + 1] = e >>> 16),
                        (this[t + 2] = e >>> 8),
                        (this[t + 3] = 255 & e))
                      : N(this, e, t, !1),
                    t + 4
                  );
                }),
                (u.prototype.writeIntLE = function (e, t, r, n) {
                  if (((e = +e), (t |= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    D(this, e, t, r, i - 1, -i);
                  }
                  var o = 0,
                    s = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++o < r && (s *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                      (this[t + o] = (((e / s) >> 0) - a) & 255);
                  return t + r;
                }),
                (u.prototype.writeIntBE = function (e, t, r, n) {
                  if (((e = +e), (t |= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    D(this, e, t, r, i - 1, -i);
                  }
                  var o = r - 1,
                    s = 1,
                    a = 0;
                  for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                      (this[t + o] = (((e / s) >> 0) - a) & 255);
                  return t + r;
                }),
                (u.prototype.writeInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 1, 127, -128),
                    u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (u.prototype.writeInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 2, 32767, -32768),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                      : L(this, e, t, !0),
                    t + 2
                  );
                }),
                (u.prototype.writeInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 2, 32767, -32768),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                      : L(this, e, t, !1),
                    t + 2
                  );
                }),
                (u.prototype.writeInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 4, 2147483647, -2147483648),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & e),
                        (this[t + 1] = e >>> 8),
                        (this[t + 2] = e >>> 16),
                        (this[t + 3] = e >>> 24))
                      : N(this, e, t, !0),
                    t + 4
                  );
                }),
                (u.prototype.writeInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t |= 0),
                    r || D(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    u.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = e >>> 24),
                        (this[t + 1] = e >>> 16),
                        (this[t + 2] = e >>> 8),
                        (this[t + 3] = 255 & e))
                      : N(this, e, t, !1),
                    t + 4
                  );
                }),
                (u.prototype.writeFloatLE = function (e, t, r) {
                  return O(this, e, t, !0, r);
                }),
                (u.prototype.writeFloatBE = function (e, t, r) {
                  return O(this, e, t, !1, r);
                }),
                (u.prototype.writeDoubleLE = function (e, t, r) {
                  return B(this, e, t, !0, r);
                }),
                (u.prototype.writeDoubleBE = function (e, t, r) {
                  return B(this, e, t, !1, r);
                }),
                (u.prototype.copy = function (e, t, r, n) {
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    n > 0 && n < r && (n = r),
                    n === r)
                  )
                    return 0;
                  if (0 === e.length || 0 === this.length) return 0;
                  if (t < 0) throw new RangeError('targetStart out of bounds');
                  if (r < 0 || r >= this.length) throw new RangeError('sourceStart out of bounds');
                  if (n < 0) throw new RangeError('sourceEnd out of bounds');
                  n > this.length && (n = this.length),
                    e.length - t < n - r && (n = e.length - t + r);
                  var i,
                    o = n - r;
                  if (this === e && r < t && t < n)
                    for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                  else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) e[i + t] = this[i + r];
                  else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
                  return o;
                }),
                (u.prototype.fill = function (e, t, r, n) {
                  if ('string' == typeof e) {
                    if (
                      ('string' == typeof t
                        ? ((n = t), (t = 0), (r = this.length))
                        : 'string' == typeof r && ((n = r), (r = this.length)),
                      1 === e.length)
                    ) {
                      var i = e.charCodeAt(0);
                      i < 256 && (e = i);
                    }
                    if (void 0 !== n && 'string' != typeof n)
                      throw new TypeError('encoding must be a string');
                    if ('string' == typeof n && !u.isEncoding(n))
                      throw new TypeError('Unknown encoding: ' + n);
                  } else 'number' == typeof e && (e &= 255);
                  if (t < 0 || this.length < t || this.length < r)
                    throw new RangeError('Out of range index');
                  if (r <= t) return this;
                  var o;
                  if (
                    ((t >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    e || (e = 0),
                    'number' == typeof e)
                  )
                    for (o = t; o < r; ++o) this[o] = e;
                  else {
                    var s = u.isBuffer(e) ? e : H(new u(e, n).toString()),
                      a = s.length;
                    for (o = 0; o < r - t; ++o) this[o + t] = s[o % a];
                  }
                  return this;
                });
              var j = /[^+\/0-9A-Za-z-_]/g;
              function M(e) {
                return e < 16 ? '0' + e.toString(16) : e.toString(16);
              }
              function H(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
                  if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      if (s + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = r;
                      continue;
                    }
                    if (r < 56320) {
                      (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                      continue;
                    }
                    r = 65536 + (((i - 55296) << 10) | (r - 56320));
                  } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), r < 128)) {
                    if ((t -= 1) < 0) break;
                    o.push(r);
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                  } else {
                    if (!(r < 1114112)) throw new Error('Invalid code point');
                    if ((t -= 4) < 0) break;
                    o.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128,
                    );
                  }
                }
                return o;
              }
              function V(e) {
                return n.toByteArray(
                  (function (e) {
                    if (
                      (e = ((t = e), t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '')).replace(
                        j,
                        '',
                      )).length < 2
                    )
                      return '';
                    for (var t; e.length % 4 != 0; ) e += '=';
                    return e;
                  })(e),
                );
              }
              function K(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
                  t[i + r] = e[i];
                return i;
              }
            }.call(this, r(29)));
          },
          function (e, t) {
            var r;
            r = (function () {
              return this;
            })();
            try {
              r = r || new Function('return this')();
            } catch (n) {
              'object' == typeof window && (r = window);
            }
            e.exports = r;
          },
          function (e, t, r) {
            (t.byteLength = function (e) {
              var t = c(e),
                r = t[0],
                n = t[1];
              return (3 * (r + n)) / 4 - n;
            }),
              (t.toByteArray = function (e) {
                var t,
                  r,
                  n,
                  s = c(e),
                  a = s[0],
                  u = s[1],
                  h = new o((3 * (a + (n = u))) / 4 - n),
                  l = 0,
                  f = u > 0 ? a - 4 : a;
                for (r = 0; r < f; r += 4)
                  (t =
                    (i[e.charCodeAt(r)] << 18) |
                    (i[e.charCodeAt(r + 1)] << 12) |
                    (i[e.charCodeAt(r + 2)] << 6) |
                    i[e.charCodeAt(r + 3)]),
                    (h[l++] = (t >> 16) & 255),
                    (h[l++] = (t >> 8) & 255),
                    (h[l++] = 255 & t);
                return (
                  2 === u &&
                    ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
                    (h[l++] = 255 & t)),
                  1 === u &&
                    ((t =
                      (i[e.charCodeAt(r)] << 10) |
                      (i[e.charCodeAt(r + 1)] << 4) |
                      (i[e.charCodeAt(r + 2)] >> 2)),
                    (h[l++] = (t >> 8) & 255),
                    (h[l++] = 255 & t)),
                  h
                );
              }),
              (t.fromByteArray = function (e) {
                for (
                  var t, r = e.length, i = r % 3, o = [], s = 16383, a = 0, u = r - i;
                  a < u;
                  a += s
                )
                  o.push(h(e, a, a + s > u ? u : a + s));
                return (
                  1 === i
                    ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + '=='))
                    : 2 === i &&
                      ((t = (e[r - 2] << 8) + e[r - 1]),
                      o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '=')),
                  o.join('')
                );
              });
            for (
              var n = [],
                i = [],
                o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
                s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                a = 0,
                u = s.length;
              a < u;
              ++a
            )
              (n[a] = s[a]), (i[s.charCodeAt(a)] = a);
            function c(e) {
              var t = e.length;
              if (t % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
              var r = e.indexOf('=');
              return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
            }
            function h(e, t, r) {
              for (var i, o, s = [], a = t; a < r; a += 3)
                (i = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
                  s.push(
                    n[((o = i) >> 18) & 63] + n[(o >> 12) & 63] + n[(o >> 6) & 63] + n[63 & o],
                  );
              return s.join('');
            }
            (i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
          },
          function (e, t) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            (t.read = function (e, t, r, n, i) {
              var o,
                s,
                a = 8 * i - n - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                h = -7,
                l = r ? i - 1 : 0,
                f = r ? -1 : 1,
                d = e[t + l];
              for (
                l += f, o = d & ((1 << -h) - 1), d >>= -h, h += a;
                h > 0;
                o = 256 * o + e[t + l], l += f, h -= 8
              );
              for (
                s = o & ((1 << -h) - 1), o >>= -h, h += n;
                h > 0;
                s = 256 * s + e[t + l], l += f, h -= 8
              );
              if (0 === o) o = 1 - c;
              else {
                if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
                (s += Math.pow(2, n)), (o -= c);
              }
              return (d ? -1 : 1) * s * Math.pow(2, o - n);
            }),
              (t.write = function (e, t, r, n, i, o) {
                var s,
                  a,
                  u,
                  c = 8 * o - i - 1,
                  h = (1 << c) - 1,
                  l = h >> 1,
                  f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  d = n ? 0 : o - 1,
                  g = n ? 1 : -1,
                  p = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                for (
                  t = Math.abs(t),
                    isNaN(t) || t === 1 / 0
                      ? ((a = isNaN(t) ? 1 : 0), (s = h))
                      : ((s = Math.floor(Math.log(t) / Math.LN2)),
                        t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                        (t += s + l >= 1 ? f / u : f * Math.pow(2, 1 - l)) * u >= 2 &&
                          (s++, (u /= 2)),
                        s + l >= h
                          ? ((a = 0), (s = h))
                          : s + l >= 1
                          ? ((a = (t * u - 1) * Math.pow(2, i)), (s += l))
                          : ((a = t * Math.pow(2, l - 1) * Math.pow(2, i)), (s = 0)));
                  i >= 8;
                  e[r + d] = 255 & a, d += g, a /= 256, i -= 8
                );
                for (s = (s << i) | a, c += i; c > 0; e[r + d] = 255 & s, d += g, s /= 256, c -= 8);
                e[r + d - g] |= 128 * p;
              });
          },
          function (e, t) {
            var r = {}.toString;
            e.exports =
              Array.isArray ||
              function (e) {
                return '[object Array]' == r.call(e);
              };
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function (e) {
                var t = e.jws,
                  r = e.KeyUtil,
                  i = e.X509,
                  o = e.crypto,
                  s = e.hextob64u,
                  a = e.b64tohex,
                  u = e.AllowedSigningAlgs;
                return (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function');
                    })(this, e);
                  }
                  return (
                    (e.parseJwt = function (e) {
                      n.Log.debug('JoseUtil.parseJwt');
                      try {
                        var r = t.JWS.parse(e);
                        return { header: r.headerObj, payload: r.payloadObj };
                      } catch (i) {
                        n.Log.error(i);
                      }
                    }),
                    (e.validateJwt = function (t, o, s, u, c, h, l) {
                      n.Log.debug('JoseUtil.validateJwt');
                      try {
                        if ('RSA' === o.kty)
                          if (o.e && o.n) o = r.getKey(o);
                          else {
                            if (!o.x5c || !o.x5c.length)
                              return (
                                n.Log.error(
                                  'JoseUtil.validateJwt: RSA key missing key material',
                                  o,
                                ),
                                Promise.reject(new Error('RSA key missing key material'))
                              );
                            var f = a(o.x5c[0]);
                            o = i.getPublicKeyFromCertHex(f);
                          }
                        else {
                          if ('EC' !== o.kty)
                            return (
                              n.Log.error('JoseUtil.validateJwt: Unsupported key type', o && o.kty),
                              Promise.reject(new Error(o.kty))
                            );
                          if (!(o.crv && o.x && o.y))
                            return (
                              n.Log.error('JoseUtil.validateJwt: EC key missing key material', o),
                              Promise.reject(new Error('EC key missing key material'))
                            );
                          o = r.getKey(o);
                        }
                        return e._validateJwt(t, o, s, u, c, h, l);
                      } catch (d) {
                        return (
                          n.Log.error((d && d.message) || d),
                          Promise.reject('JWT validation failed')
                        );
                      }
                    }),
                    (e.validateJwtAttributes = function (t, r, i, o, s, a) {
                      o || (o = 0), s || (s = parseInt(Date.now() / 1e3));
                      var u = e.parseJwt(t).payload;
                      if (!u.iss)
                        return (
                          n.Log.error('JoseUtil._validateJwt: issuer was not provided'),
                          Promise.reject(new Error('issuer was not provided'))
                        );
                      if (u.iss !== r)
                        return (
                          n.Log.error('JoseUtil._validateJwt: Invalid issuer in token', u.iss),
                          Promise.reject(new Error('Invalid issuer in token: ' + u.iss))
                        );
                      if (!u.aud)
                        return (
                          n.Log.error('JoseUtil._validateJwt: aud was not provided'),
                          Promise.reject(new Error('aud was not provided'))
                        );
                      if (!(u.aud === i || (Array.isArray(u.aud) && u.aud.indexOf(i) >= 0)))
                        return (
                          n.Log.error('JoseUtil._validateJwt: Invalid audience in token', u.aud),
                          Promise.reject(new Error('Invalid audience in token: ' + u.aud))
                        );
                      if (u.azp && u.azp !== i)
                        return (
                          n.Log.error('JoseUtil._validateJwt: Invalid azp in token', u.azp),
                          Promise.reject(new Error('Invalid azp in token: ' + u.azp))
                        );
                      if (!a) {
                        var c = s + o,
                          h = s - o;
                        if (!u.iat)
                          return (
                            n.Log.error('JoseUtil._validateJwt: iat was not provided'),
                            Promise.reject(new Error('iat was not provided'))
                          );
                        if (c < u.iat)
                          return (
                            n.Log.error('JoseUtil._validateJwt: iat is in the future', u.iat),
                            Promise.reject(new Error('iat is in the future: ' + u.iat))
                          );
                        if (u.nbf && c < u.nbf)
                          return (
                            n.Log.error('JoseUtil._validateJwt: nbf is in the future', u.nbf),
                            Promise.reject(new Error('nbf is in the future: ' + u.nbf))
                          );
                        if (!u.exp)
                          return (
                            n.Log.error('JoseUtil._validateJwt: exp was not provided'),
                            Promise.reject(new Error('exp was not provided'))
                          );
                        if (u.exp < h)
                          return (
                            n.Log.error('JoseUtil._validateJwt: exp is in the past', u.exp),
                            Promise.reject(new Error('exp is in the past:' + u.exp))
                          );
                      }
                      return Promise.resolve(u);
                    }),
                    (e._validateJwt = function (r, i, o, s, a, c, h) {
                      return e.validateJwtAttributes(r, o, s, a, c, h).then(function (e) {
                        try {
                          return t.JWS.verify(r, i, u)
                            ? e
                            : (n.Log.error('JoseUtil._validateJwt: signature validation failed'),
                              Promise.reject(new Error('signature validation failed')));
                        } catch (o) {
                          return (
                            n.Log.error((o && o.message) || o),
                            Promise.reject(new Error('signature validation failed'))
                          );
                        }
                      });
                    }),
                    (e.hashString = function (e, t) {
                      try {
                        return o.Util.hashString(e, t);
                      } catch (r) {
                        n.Log.error(r);
                      }
                    }),
                    (e.hexToBase64Url = function (e) {
                      try {
                        return s(e);
                      } catch (t) {
                        n.Log.error(t);
                      }
                    }),
                    e
                  );
                })();
              });
            var n = r(0);
            e.exports = t.default;
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SigninResponse = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(3);
            function o(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            t.SigninResponse = (function () {
              function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '#';
                o(this, e);
                var n = i.UrlUtility.parseUrlFragment(t, r);
                (this.error = n.error),
                  (this.error_description = n.error_description),
                  (this.error_uri = n.error_uri),
                  (this.code = n.code),
                  (this.state = n.state),
                  (this.id_token = n.id_token),
                  (this.session_state = n.session_state),
                  (this.access_token = n.access_token),
                  (this.token_type = n.token_type),
                  (this.scope = n.scope),
                  (this.profile = void 0),
                  (this.expires_in = n.expires_in);
              }
              return (
                n(e, [
                  {
                    key: 'expires_in',
                    get: function () {
                      if (this.expires_at) {
                        var e = parseInt(Date.now() / 1e3);
                        return this.expires_at - e;
                      }
                    },
                    set: function (e) {
                      var t = parseInt(e);
                      if ('number' == typeof t && t > 0) {
                        var r = parseInt(Date.now() / 1e3);
                        this.expires_at = r + t;
                      }
                    },
                  },
                  {
                    key: 'expired',
                    get: function () {
                      var e = this.expires_in;
                      if (void 0 !== e) return e <= 0;
                    },
                  },
                  {
                    key: 'scopes',
                    get: function () {
                      return (this.scope || '').split(' ');
                    },
                  },
                  {
                    key: 'isOpenIdConnect',
                    get: function () {
                      return this.scopes.indexOf('openid') >= 0 || !!this.id_token;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SignoutRequest = void 0);
            var n = r(0),
              i = r(3),
              o = r(9);
            t.SignoutRequest = function e(t) {
              var r = t.url,
                s = t.id_token_hint,
                a = t.post_logout_redirect_uri,
                u = t.data,
                c = t.extraQueryParams,
                h = t.request_type;
              if (
                ((function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                !r)
              )
                throw (n.Log.error('SignoutRequest.ctor: No url passed'), new Error('url'));
              for (var l in (s && (r = i.UrlUtility.addQueryParam(r, 'id_token_hint', s)),
              a &&
                ((r = i.UrlUtility.addQueryParam(r, 'post_logout_redirect_uri', a)),
                u &&
                  ((this.state = new o.State({ data: u, request_type: h })),
                  (r = i.UrlUtility.addQueryParam(r, 'state', this.state.id)))),
              c))
                r = i.UrlUtility.addQueryParam(r, l, c[l]);
              this.url = r;
            };
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SignoutResponse = void 0);
            var n = r(3);
            t.SignoutResponse = function e(t) {
              !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, e);
              var r = n.UrlUtility.parseUrlFragment(t, '?');
              (this.error = r.error),
                (this.error_description = r.error_description),
                (this.error_uri = r.error_uri),
                (this.state = r.state);
            };
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.InMemoryWebStorage = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0);
            t.InMemoryWebStorage = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this._data = {});
              }
              return (
                (e.prototype.getItem = function (e) {
                  return i.Log.debug('InMemoryWebStorage.getItem', e), this._data[e];
                }),
                (e.prototype.setItem = function (e, t) {
                  i.Log.debug('InMemoryWebStorage.setItem', e), (this._data[e] = t);
                }),
                (e.prototype.removeItem = function (e) {
                  i.Log.debug('InMemoryWebStorage.removeItem', e), delete this._data[e];
                }),
                (e.prototype.key = function (e) {
                  return Object.getOwnPropertyNames(this._data)[e];
                }),
                n(e, [
                  {
                    key: 'length',
                    get: function () {
                      return Object.getOwnPropertyNames(this._data).length;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.UserManager = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0),
              o = r(10),
              s = r(39),
              a = r(15),
              u = r(45),
              c = r(47),
              h = r(18),
              l = r(8),
              f = r(20),
              d = r(11),
              g = r(4);
            function p(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function v(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            }
            t.UserManager = (function (e) {
              function t() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : c.SilentRenewService,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : h.SessionMonitor,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : f.TokenRevocationClient,
                  l =
                    arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.TokenClient,
                  y = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : g.JoseUtil;
                p(this, t),
                  r instanceof s.UserManagerSettings || (r = new s.UserManagerSettings(r));
                var m = v(this, e.call(this, r));
                return (
                  (m._events = new u.UserManagerEvents(r)),
                  (m._silentRenewService = new n(m)),
                  m.settings.automaticSilentRenew &&
                    (i.Log.debug(
                      'UserManager.ctor: automaticSilentRenew is configured, setting up silent renew',
                    ),
                    m.startSilentRenew()),
                  m.settings.monitorSession &&
                    (i.Log.debug(
                      'UserManager.ctor: monitorSession is configured, setting up session monitor',
                    ),
                    (m._sessionMonitor = new o(m))),
                  (m._tokenRevocationClient = new a(m._settings)),
                  (m._tokenClient = new l(m._settings)),
                  (m._joseUtil = y),
                  m
                );
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.getUser = function () {
                  var e = this;
                  return this._loadUser().then(function (t) {
                    return t
                      ? (i.Log.info('UserManager.getUser: user loaded'), e._events.load(t, !1), t)
                      : (i.Log.info('UserManager.getUser: user not found in storage'), null);
                  });
                }),
                (t.prototype.removeUser = function () {
                  var e = this;
                  return this.storeUser(null).then(function () {
                    i.Log.info('UserManager.removeUser: user removed from storage'),
                      e._events.unload();
                  });
                }),
                (t.prototype.signinRedirect = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (e = Object.assign({}, e)).request_type = 'si:r';
                  var t = { useReplaceToNavigate: e.useReplaceToNavigate };
                  return this._signinStart(e, this._redirectNavigator, t).then(function () {
                    i.Log.info('UserManager.signinRedirect: successful');
                  });
                }),
                (t.prototype.signinRedirectCallback = function (e) {
                  return this._signinEnd(e || this._redirectNavigator.url).then(function (e) {
                    return (
                      e.profile && e.profile.sub
                        ? i.Log.info(
                            'UserManager.signinRedirectCallback: successful, signed in sub: ',
                            e.profile.sub,
                          )
                        : i.Log.info('UserManager.signinRedirectCallback: no sub'),
                      e
                    );
                  });
                }),
                (t.prototype.signinPopup = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (e = Object.assign({}, e)).request_type = 'si:p';
                  var t =
                    e.redirect_uri ||
                    this.settings.popup_redirect_uri ||
                    this.settings.redirect_uri;
                  return t
                    ? ((e.redirect_uri = t),
                      (e.display = 'popup'),
                      this._signin(e, this._popupNavigator, {
                        startUrl: t,
                        popupWindowFeatures:
                          e.popupWindowFeatures || this.settings.popupWindowFeatures,
                        popupWindowTarget: e.popupWindowTarget || this.settings.popupWindowTarget,
                      }).then(function (e) {
                        return (
                          e &&
                            (e.profile && e.profile.sub
                              ? i.Log.info(
                                  'UserManager.signinPopup: signinPopup successful, signed in sub: ',
                                  e.profile.sub,
                                )
                              : i.Log.info('UserManager.signinPopup: no sub')),
                          e
                        );
                      }))
                    : (i.Log.error(
                        'UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured',
                      ),
                      Promise.reject(
                        new Error('No popup_redirect_uri or redirect_uri configured'),
                      ));
                }),
                (t.prototype.signinPopupCallback = function (e) {
                  return this._signinCallback(e, this._popupNavigator)
                    .then(function (e) {
                      return (
                        e &&
                          (e.profile && e.profile.sub
                            ? i.Log.info(
                                'UserManager.signinPopupCallback: successful, signed in sub: ',
                                e.profile.sub,
                              )
                            : i.Log.info('UserManager.signinPopupCallback: no sub')),
                        e
                      );
                    })
                    .catch(function (e) {
                      i.Log.error(e.message);
                    });
                }),
                (t.prototype.signinSilent = function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return (
                    (t = Object.assign({}, t)),
                    this._loadUser().then(function (r) {
                      return r && r.refresh_token
                        ? ((t.refresh_token = r.refresh_token), e._useRefreshToken(t))
                        : ((t.request_type = 'si:s'),
                          (t.id_token_hint =
                            t.id_token_hint ||
                            (e.settings.includeIdTokenInSilentRenew && r && r.id_token)),
                          r &&
                            e._settings.validateSubOnSilentRenew &&
                            (i.Log.debug(
                              'UserManager.signinSilent, subject prior to silent renew: ',
                              r.profile.sub,
                            ),
                            (t.current_sub = r.profile.sub)),
                          e._signinSilentIframe(t));
                    })
                  );
                }),
                (t.prototype._useRefreshToken = function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return this._tokenClient.exchangeRefreshToken(t).then(function (t) {
                    return t
                      ? t.access_token
                        ? e._loadUser().then(function (r) {
                            if (r) {
                              var n = Promise.resolve();
                              return (
                                t.id_token &&
                                  (n = e._validateIdTokenFromTokenRefreshToken(
                                    r.profile,
                                    t.id_token,
                                  )),
                                n.then(function () {
                                  return (
                                    i.Log.debug(
                                      'UserManager._useRefreshToken: refresh token response success',
                                    ),
                                    (r.id_token = t.id_token || r.id_token),
                                    (r.access_token = t.access_token),
                                    (r.refresh_token = t.refresh_token || r.refresh_token),
                                    (r.expires_in = t.expires_in),
                                    e.storeUser(r).then(function () {
                                      return e._events.load(r), r;
                                    })
                                  );
                                })
                              );
                            }
                            return null;
                          })
                        : (i.Log.error(
                            'UserManager._useRefreshToken: No access token returned from token endpoint',
                          ),
                          Promise.reject('No access token returned from token endpoint'))
                      : (i.Log.error(
                          'UserManager._useRefreshToken: No response returned from token endpoint',
                        ),
                        Promise.reject('No response returned from token endpoint'));
                  });
                }),
                (t.prototype._validateIdTokenFromTokenRefreshToken = function (e, t) {
                  var r = this;
                  return this._metadataService.getIssuer().then(function (n) {
                    return r.settings.getEpochTime().then(function (o) {
                      return r._joseUtil
                        .validateJwtAttributes(
                          t,
                          n,
                          r._settings.client_id,
                          r._settings.clockSkew,
                          o,
                        )
                        .then(function (t) {
                          return t
                            ? t.sub !== e.sub
                              ? (i.Log.error(
                                  'UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub',
                                ),
                                Promise.reject(
                                  new Error('sub in id_token does not match current sub'),
                                ))
                              : t.auth_time && t.auth_time !== e.auth_time
                              ? (i.Log.error(
                                  'UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time',
                                ),
                                Promise.reject(
                                  new Error(
                                    'auth_time in id_token does not match original auth_time',
                                  ),
                                ))
                              : t.azp && t.azp !== e.azp
                              ? (i.Log.error(
                                  'UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp',
                                ),
                                Promise.reject(
                                  new Error('azp in id_token does not match original azp'),
                                ))
                              : !t.azp && e.azp
                              ? (i.Log.error(
                                  'UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token',
                                ),
                                Promise.reject(
                                  new Error(
                                    'azp not in id_token, but present in original id_token',
                                  ),
                                ))
                              : void 0
                            : (i.Log.error(
                                'UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token',
                              ),
                              Promise.reject(new Error('Failed to validate id_token')));
                        });
                    });
                  });
                }),
                (t.prototype._signinSilentIframe = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t =
                      e.redirect_uri ||
                      this.settings.silent_redirect_uri ||
                      this.settings.redirect_uri;
                  return t
                    ? ((e.redirect_uri = t),
                      (e.prompt = e.prompt || 'none'),
                      this._signin(e, this._iframeNavigator, {
                        startUrl: t,
                        silentRequestTimeout:
                          e.silentRequestTimeout || this.settings.silentRequestTimeout,
                      }).then(function (e) {
                        return (
                          e &&
                            (e.profile && e.profile.sub
                              ? i.Log.info(
                                  'UserManager.signinSilent: successful, signed in sub: ',
                                  e.profile.sub,
                                )
                              : i.Log.info('UserManager.signinSilent: no sub')),
                          e
                        );
                      }))
                    : (i.Log.error('UserManager.signinSilent: No silent_redirect_uri configured'),
                      Promise.reject(new Error('No silent_redirect_uri configured')));
                }),
                (t.prototype.signinSilentCallback = function (e) {
                  return this._signinCallback(e, this._iframeNavigator).then(function (e) {
                    return (
                      e &&
                        (e.profile && e.profile.sub
                          ? i.Log.info(
                              'UserManager.signinSilentCallback: successful, signed in sub: ',
                              e.profile.sub,
                            )
                          : i.Log.info('UserManager.signinSilentCallback: no sub')),
                      e
                    );
                  });
                }),
                (t.prototype.signinCallback = function (e) {
                  var t = this;
                  return this.readSigninResponseState(e).then(function (r) {
                    var n = r.state;
                    return (
                      r.response,
                      'si:r' === n.request_type
                        ? t.signinRedirectCallback(e)
                        : 'si:p' === n.request_type
                        ? t.signinPopupCallback(e)
                        : 'si:s' === n.request_type
                        ? t.signinSilentCallback(e)
                        : Promise.reject(new Error('invalid response_type in state'))
                    );
                  });
                }),
                (t.prototype.signoutCallback = function (e, t) {
                  var r = this;
                  return this.readSignoutResponseState(e).then(function (n) {
                    var i = n.state,
                      o = n.response;
                    return i
                      ? 'so:r' === i.request_type
                        ? r.signoutRedirectCallback(e)
                        : 'so:p' === i.request_type
                        ? r.signoutPopupCallback(e, t)
                        : Promise.reject(new Error('invalid response_type in state'))
                      : o;
                  });
                }),
                (t.prototype.querySessionStatus = function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (t = Object.assign({}, t)).request_type = 'si:s';
                  var r =
                    t.redirect_uri ||
                    this.settings.silent_redirect_uri ||
                    this.settings.redirect_uri;
                  return r
                    ? ((t.redirect_uri = r),
                      (t.prompt = 'none'),
                      (t.response_type =
                        t.response_type || this.settings.query_status_response_type),
                      (t.scope = t.scope || 'openid'),
                      (t.skipUserInfo = !0),
                      this._signinStart(t, this._iframeNavigator, {
                        startUrl: r,
                        silentRequestTimeout:
                          t.silentRequestTimeout || this.settings.silentRequestTimeout,
                      }).then(function (t) {
                        return e
                          .processSigninResponse(t.url)
                          .then(function (e) {
                            if (
                              (i.Log.debug('UserManager.querySessionStatus: got signin response'),
                              e.session_state && e.profile.sub)
                            )
                              return (
                                i.Log.info(
                                  'UserManager.querySessionStatus: querySessionStatus success for sub: ',
                                  e.profile.sub,
                                ),
                                {
                                  session_state: e.session_state,
                                  sub: e.profile.sub,
                                  sid: e.profile.sid,
                                }
                              );
                            i.Log.info('querySessionStatus successful, user not authenticated');
                          })
                          .catch(function (t) {
                            if (
                              t.session_state &&
                              e.settings.monitorAnonymousSession &&
                              ('login_required' == t.message ||
                                'consent_required' == t.message ||
                                'interaction_required' == t.message ||
                                'account_selection_required' == t.message)
                            )
                              return (
                                i.Log.info(
                                  'UserManager.querySessionStatus: querySessionStatus success for anonymous user',
                                ),
                                { session_state: t.session_state }
                              );
                            throw t;
                          });
                      }))
                    : (i.Log.error(
                        'UserManager.querySessionStatus: No silent_redirect_uri configured',
                      ),
                      Promise.reject(new Error('No silent_redirect_uri configured')));
                }),
                (t.prototype._signin = function (e, t) {
                  var r = this,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return this._signinStart(e, t, n).then(function (t) {
                    return r._signinEnd(t.url, e);
                  });
                }),
                (t.prototype._signinStart = function (e, t) {
                  var r = this,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return t.prepare(n).then(function (t) {
                    return (
                      i.Log.debug('UserManager._signinStart: got navigator window handle'),
                      r
                        .createSigninRequest(e)
                        .then(function (e) {
                          return (
                            i.Log.debug('UserManager._signinStart: got signin request'),
                            (n.url = e.url),
                            (n.id = e.state.id),
                            t.navigate(n)
                          );
                        })
                        .catch(function (e) {
                          throw (
                            (t.close &&
                              (i.Log.debug(
                                'UserManager._signinStart: Error after preparing navigator, closing navigator window',
                              ),
                              t.close()),
                            e)
                          );
                        })
                    );
                  });
                }),
                (t.prototype._signinEnd = function (e) {
                  var t = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return this.processSigninResponse(e).then(function (e) {
                    i.Log.debug('UserManager._signinEnd: got signin response');
                    var n = new a.User(e);
                    if (r.current_sub) {
                      if (r.current_sub !== n.profile.sub)
                        return (
                          i.Log.debug(
                            'UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ',
                            n.profile.sub,
                          ),
                          Promise.reject(new Error('login_required'))
                        );
                      i.Log.debug(
                        'UserManager._signinEnd: current user matches user returned from signin',
                      );
                    }
                    return t.storeUser(n).then(function () {
                      return (
                        i.Log.debug('UserManager._signinEnd: user stored'), t._events.load(n), n
                      );
                    });
                  });
                }),
                (t.prototype._signinCallback = function (e, t) {
                  i.Log.debug('UserManager._signinCallback');
                  var r =
                    'query' === this._settings.response_mode ||
                    (!this._settings.response_mode &&
                      l.SigninRequest.isCode(this._settings.response_type))
                      ? '?'
                      : '#';
                  return t.callback(e, void 0, r);
                }),
                (t.prototype.signoutRedirect = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (e = Object.assign({}, e)).request_type = 'so:r';
                  var t = e.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
                  t && (e.post_logout_redirect_uri = t);
                  var r = { useReplaceToNavigate: e.useReplaceToNavigate };
                  return this._signoutStart(e, this._redirectNavigator, r).then(function () {
                    i.Log.info('UserManager.signoutRedirect: successful');
                  });
                }),
                (t.prototype.signoutRedirectCallback = function (e) {
                  return this._signoutEnd(e || this._redirectNavigator.url).then(function (e) {
                    return i.Log.info('UserManager.signoutRedirectCallback: successful'), e;
                  });
                }),
                (t.prototype.signoutPopup = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (e = Object.assign({}, e)).request_type = 'so:p';
                  var t =
                    e.post_logout_redirect_uri ||
                    this.settings.popup_post_logout_redirect_uri ||
                    this.settings.post_logout_redirect_uri;
                  return (
                    (e.post_logout_redirect_uri = t),
                    (e.display = 'popup'),
                    e.post_logout_redirect_uri && (e.state = e.state || {}),
                    this._signout(e, this._popupNavigator, {
                      startUrl: t,
                      popupWindowFeatures:
                        e.popupWindowFeatures || this.settings.popupWindowFeatures,
                      popupWindowTarget: e.popupWindowTarget || this.settings.popupWindowTarget,
                    }).then(function () {
                      i.Log.info('UserManager.signoutPopup: successful');
                    })
                  );
                }),
                (t.prototype.signoutPopupCallback = function (e, t) {
                  return (
                    void 0 === t && 'boolean' == typeof e && ((t = e), (e = null)),
                    this._popupNavigator.callback(e, t, '?').then(function () {
                      i.Log.info('UserManager.signoutPopupCallback: successful');
                    })
                  );
                }),
                (t.prototype._signout = function (e, t) {
                  var r = this,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return this._signoutStart(e, t, n).then(function (e) {
                    return r._signoutEnd(e.url);
                  });
                }),
                (t.prototype._signoutStart = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = this,
                    r = arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  return r.prepare(n).then(function (r) {
                    return (
                      i.Log.debug('UserManager._signoutStart: got navigator window handle'),
                      t
                        ._loadUser()
                        .then(function (o) {
                          return (
                            i.Log.debug(
                              'UserManager._signoutStart: loaded current user from storage',
                            ),
                            (t._settings.revokeAccessTokenOnSignout
                              ? t._revokeInternal(o)
                              : Promise.resolve()
                            ).then(function () {
                              var s = e.id_token_hint || (o && o.id_token);
                              return (
                                s &&
                                  (i.Log.debug(
                                    'UserManager._signoutStart: Setting id_token into signout request',
                                  ),
                                  (e.id_token_hint = s)),
                                t.removeUser().then(function () {
                                  return (
                                    i.Log.debug(
                                      'UserManager._signoutStart: user removed, creating signout request',
                                    ),
                                    t.createSignoutRequest(e).then(function (e) {
                                      return (
                                        i.Log.debug(
                                          'UserManager._signoutStart: got signout request',
                                        ),
                                        (n.url = e.url),
                                        e.state && (n.id = e.state.id),
                                        r.navigate(n)
                                      );
                                    })
                                  );
                                })
                              );
                            })
                          );
                        })
                        .catch(function (e) {
                          throw (
                            (r.close &&
                              (i.Log.debug(
                                'UserManager._signoutStart: Error after preparing navigator, closing navigator window',
                              ),
                              r.close()),
                            e)
                          );
                        })
                    );
                  });
                }),
                (t.prototype._signoutEnd = function (e) {
                  return this.processSignoutResponse(e).then(function (e) {
                    return i.Log.debug('UserManager._signoutEnd: got signout response'), e;
                  });
                }),
                (t.prototype.revokeAccessToken = function () {
                  var e = this;
                  return this._loadUser()
                    .then(function (t) {
                      return e._revokeInternal(t, !0).then(function (r) {
                        if (r)
                          return (
                            i.Log.debug(
                              'UserManager.revokeAccessToken: removing token properties from user and re-storing',
                            ),
                            (t.access_token = null),
                            (t.refresh_token = null),
                            (t.expires_at = null),
                            (t.token_type = null),
                            e.storeUser(t).then(function () {
                              i.Log.debug('UserManager.revokeAccessToken: user stored'),
                                e._events.load(t);
                            })
                          );
                      });
                    })
                    .then(function () {
                      i.Log.info(
                        'UserManager.revokeAccessToken: access token revoked successfully',
                      );
                    });
                }),
                (t.prototype._revokeInternal = function (e, t) {
                  var r = this;
                  if (e) {
                    var n = e.access_token,
                      o = e.refresh_token;
                    return this._revokeAccessTokenInternal(n, t).then(function (e) {
                      return r._revokeRefreshTokenInternal(o, t).then(function (t) {
                        return (
                          e ||
                            t ||
                            i.Log.debug(
                              'UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format',
                            ),
                          e || t
                        );
                      });
                    });
                  }
                  return Promise.resolve(!1);
                }),
                (t.prototype._revokeAccessTokenInternal = function (e, t) {
                  return !e || e.indexOf('.') >= 0
                    ? Promise.resolve(!1)
                    : this._tokenRevocationClient.revoke(e, t).then(function () {
                        return !0;
                      });
                }),
                (t.prototype._revokeRefreshTokenInternal = function (e, t) {
                  return e
                    ? this._tokenRevocationClient.revoke(e, t, 'refresh_token').then(function () {
                        return !0;
                      })
                    : Promise.resolve(!1);
                }),
                (t.prototype.startSilentRenew = function () {
                  this._silentRenewService.start();
                }),
                (t.prototype.stopSilentRenew = function () {
                  this._silentRenewService.stop();
                }),
                (t.prototype._loadUser = function () {
                  return this._userStore.get(this._userStoreKey).then(function (e) {
                    return e
                      ? (i.Log.debug('UserManager._loadUser: user storageString loaded'),
                        a.User.fromStorageString(e))
                      : (i.Log.debug('UserManager._loadUser: no user storageString'), null);
                  });
                }),
                (t.prototype.storeUser = function (e) {
                  if (e) {
                    i.Log.debug('UserManager.storeUser: storing user');
                    var t = e.toStorageString();
                    return this._userStore.set(this._userStoreKey, t);
                  }
                  return (
                    i.Log.debug('storeUser.storeUser: removing user'),
                    this._userStore.remove(this._userStoreKey)
                  );
                }),
                n(t, [
                  {
                    key: '_redirectNavigator',
                    get: function () {
                      return this.settings.redirectNavigator;
                    },
                  },
                  {
                    key: '_popupNavigator',
                    get: function () {
                      return this.settings.popupNavigator;
                    },
                  },
                  {
                    key: '_iframeNavigator',
                    get: function () {
                      return this.settings.iframeNavigator;
                    },
                  },
                  {
                    key: '_userStore',
                    get: function () {
                      return this.settings.userStore;
                    },
                  },
                  {
                    key: 'events',
                    get: function () {
                      return this._events;
                    },
                  },
                  {
                    key: '_userStoreKey',
                    get: function () {
                      return 'user:' + this.settings.authority + ':' + this.settings.client_id;
                    },
                  },
                ]),
                t
              );
            })(o.OidcClient);
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.UserManagerSettings = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = (r(0), r(5)),
              o = r(40),
              s = r(41),
              a = r(43),
              u = r(6),
              c = r(1),
              h = r(8);
            function l(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function f(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            }
            t.UserManagerSettings = (function (e) {
              function t() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = r.popup_redirect_uri,
                  i = r.popup_post_logout_redirect_uri,
                  d = r.popupWindowFeatures,
                  g = r.popupWindowTarget,
                  p = r.silent_redirect_uri,
                  v = r.silentRequestTimeout,
                  y = r.automaticSilentRenew,
                  m = void 0 !== y && y,
                  _ = r.validateSubOnSilentRenew,
                  S = void 0 !== _ && _,
                  b = r.includeIdTokenInSilentRenew,
                  w = void 0 === b || b,
                  F = r.monitorSession,
                  E = void 0 === F || F,
                  x = r.monitorAnonymousSession,
                  k = void 0 !== x && x,
                  A = r.checkSessionInterval,
                  P = void 0 === A ? 2e3 : A,
                  C = r.stopCheckSessionOnError,
                  T = void 0 === C || C,
                  I = r.query_status_response_type,
                  R = r.revokeAccessTokenOnSignout,
                  D = void 0 !== R && R,
                  L = r.accessTokenExpiringNotificationTime,
                  N = void 0 === L ? 60 : L,
                  U = r.redirectNavigator,
                  O = void 0 === U ? new o.RedirectNavigator() : U,
                  B = r.popupNavigator,
                  j = void 0 === B ? new s.PopupNavigator() : B,
                  M = r.iframeNavigator,
                  H = void 0 === M ? new a.IFrameNavigator() : M,
                  V = r.userStore,
                  K =
                    void 0 === V
                      ? new u.WebStorageStateStore({ store: c.Global.sessionStorage })
                      : V;
                l(this, t);
                var q = f(this, e.call(this, arguments[0]));
                return (
                  (q._popup_redirect_uri = n),
                  (q._popup_post_logout_redirect_uri = i),
                  (q._popupWindowFeatures = d),
                  (q._popupWindowTarget = g),
                  (q._silent_redirect_uri = p),
                  (q._silentRequestTimeout = v),
                  (q._automaticSilentRenew = m),
                  (q._validateSubOnSilentRenew = S),
                  (q._includeIdTokenInSilentRenew = w),
                  (q._accessTokenExpiringNotificationTime = N),
                  (q._monitorSession = E),
                  (q._monitorAnonymousSession = k),
                  (q._checkSessionInterval = P),
                  (q._stopCheckSessionOnError = T),
                  I
                    ? (q._query_status_response_type = I)
                    : arguments[0] && arguments[0].response_type
                    ? (q._query_status_response_type = h.SigninRequest.isOidc(
                        arguments[0].response_type,
                      )
                        ? 'id_token'
                        : 'code')
                    : (q._query_status_response_type = 'id_token'),
                  (q._revokeAccessTokenOnSignout = D),
                  (q._redirectNavigator = O),
                  (q._popupNavigator = j),
                  (q._iframeNavigator = H),
                  (q._userStore = K),
                  q
                );
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                n(t, [
                  {
                    key: 'popup_redirect_uri',
                    get: function () {
                      return this._popup_redirect_uri;
                    },
                  },
                  {
                    key: 'popup_post_logout_redirect_uri',
                    get: function () {
                      return this._popup_post_logout_redirect_uri;
                    },
                  },
                  {
                    key: 'popupWindowFeatures',
                    get: function () {
                      return this._popupWindowFeatures;
                    },
                  },
                  {
                    key: 'popupWindowTarget',
                    get: function () {
                      return this._popupWindowTarget;
                    },
                  },
                  {
                    key: 'silent_redirect_uri',
                    get: function () {
                      return this._silent_redirect_uri;
                    },
                  },
                  {
                    key: 'silentRequestTimeout',
                    get: function () {
                      return this._silentRequestTimeout;
                    },
                  },
                  {
                    key: 'automaticSilentRenew',
                    get: function () {
                      return this._automaticSilentRenew;
                    },
                  },
                  {
                    key: 'validateSubOnSilentRenew',
                    get: function () {
                      return this._validateSubOnSilentRenew;
                    },
                  },
                  {
                    key: 'includeIdTokenInSilentRenew',
                    get: function () {
                      return this._includeIdTokenInSilentRenew;
                    },
                  },
                  {
                    key: 'accessTokenExpiringNotificationTime',
                    get: function () {
                      return this._accessTokenExpiringNotificationTime;
                    },
                  },
                  {
                    key: 'monitorSession',
                    get: function () {
                      return this._monitorSession;
                    },
                  },
                  {
                    key: 'monitorAnonymousSession',
                    get: function () {
                      return this._monitorAnonymousSession;
                    },
                  },
                  {
                    key: 'checkSessionInterval',
                    get: function () {
                      return this._checkSessionInterval;
                    },
                  },
                  {
                    key: 'stopCheckSessionOnError',
                    get: function () {
                      return this._stopCheckSessionOnError;
                    },
                  },
                  {
                    key: 'query_status_response_type',
                    get: function () {
                      return this._query_status_response_type;
                    },
                  },
                  {
                    key: 'revokeAccessTokenOnSignout',
                    get: function () {
                      return this._revokeAccessTokenOnSignout;
                    },
                  },
                  {
                    key: 'redirectNavigator',
                    get: function () {
                      return this._redirectNavigator;
                    },
                  },
                  {
                    key: 'popupNavigator',
                    get: function () {
                      return this._popupNavigator;
                    },
                  },
                  {
                    key: 'iframeNavigator',
                    get: function () {
                      return this._iframeNavigator;
                    },
                  },
                  {
                    key: 'userStore',
                    get: function () {
                      return this._userStore;
                    },
                  },
                ]),
                t
              );
            })(i.OidcClientSettings);
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.RedirectNavigator = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0);
            t.RedirectNavigator = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
              }
              return (
                (e.prototype.prepare = function () {
                  return Promise.resolve(this);
                }),
                (e.prototype.navigate = function (e) {
                  return e && e.url
                    ? (e.useReplaceToNavigate
                        ? window.location.replace(e.url)
                        : (window.location = e.url),
                      Promise.resolve())
                    : (i.Log.error('RedirectNavigator.navigate: No url provided'),
                      Promise.reject(new Error('No url provided')));
                }),
                n(e, [
                  {
                    key: 'url',
                    get: function () {
                      return window.location.href;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.PopupNavigator = void 0);
            var n = r(0),
              i = r(42);
            t.PopupNavigator = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
              }
              return (
                (e.prototype.prepare = function (e) {
                  var t = new i.PopupWindow(e);
                  return Promise.resolve(t);
                }),
                (e.prototype.callback = function (e, t, r) {
                  n.Log.debug('PopupNavigator.callback');
                  try {
                    return i.PopupWindow.notifyOpener(e, t, r), Promise.resolve();
                  } catch (o) {
                    return Promise.reject(o);
                  }
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.PopupWindow = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0),
              o = r(3);
            t.PopupWindow = (function () {
              function e(t) {
                var r = this;
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this._promise = new Promise(function (e, t) {
                    (r._resolve = e), (r._reject = t);
                  }));
                var n = t.popupWindowTarget || '_blank',
                  o =
                    t.popupWindowFeatures ||
                    'location=no,toolbar=no,width=500,height=500,left=100,top=100;';
                (this._popup = window.open('', n, o)),
                  this._popup &&
                    (i.Log.debug('PopupWindow.ctor: popup successfully created'),
                    (this._checkForPopupClosedTimer = window.setInterval(
                      this._checkForPopupClosed.bind(this),
                      500,
                    )));
              }
              return (
                (e.prototype.navigate = function (e) {
                  return (
                    this._popup
                      ? e && e.url
                        ? (i.Log.debug('PopupWindow.navigate: Setting URL in popup'),
                          (this._id = e.id),
                          this._id && (window['popupCallback_' + e.id] = this._callback.bind(this)),
                          this._popup.focus(),
                          (this._popup.window.location = e.url))
                        : (this._error('PopupWindow.navigate: no url provided'),
                          this._error('No url provided'))
                      : this._error('PopupWindow.navigate: Error opening popup window'),
                    this.promise
                  );
                }),
                (e.prototype._success = function (e) {
                  i.Log.debug('PopupWindow.callback: Successful response from popup window'),
                    this._cleanup(),
                    this._resolve(e);
                }),
                (e.prototype._error = function (e) {
                  i.Log.error('PopupWindow.error: ', e),
                    this._cleanup(),
                    this._reject(new Error(e));
                }),
                (e.prototype.close = function () {
                  this._cleanup(!1);
                }),
                (e.prototype._cleanup = function (e) {
                  i.Log.debug('PopupWindow.cleanup'),
                    window.clearInterval(this._checkForPopupClosedTimer),
                    (this._checkForPopupClosedTimer = null),
                    delete window['popupCallback_' + this._id],
                    this._popup && !e && this._popup.close(),
                    (this._popup = null);
                }),
                (e.prototype._checkForPopupClosed = function () {
                  (this._popup && !this._popup.closed) || this._error('Popup window closed');
                }),
                (e.prototype._callback = function (e, t) {
                  this._cleanup(t),
                    e
                      ? (i.Log.debug('PopupWindow.callback success'), this._success({ url: e }))
                      : (i.Log.debug('PopupWindow.callback: Invalid response from popup'),
                        this._error('Invalid response from popup'));
                }),
                (e.notifyOpener = function (e, t, r) {
                  if (window.opener) {
                    if ((e = e || window.location.href)) {
                      var n = o.UrlUtility.parseUrlFragment(e, r);
                      if (n.state) {
                        var s = 'popupCallback_' + n.state,
                          a = window.opener[s];
                        a
                          ? (i.Log.debug('PopupWindow.notifyOpener: passing url message to opener'),
                            a(e, t))
                          : i.Log.warn(
                              'PopupWindow.notifyOpener: no matching callback found on opener',
                            );
                      } else i.Log.warn('PopupWindow.notifyOpener: no state found in response url');
                    }
                  } else
                    i.Log.warn(
                      "PopupWindow.notifyOpener: no window.opener. Can't complete notification.",
                    );
                }),
                n(e, [
                  {
                    key: 'promise',
                    get: function () {
                      return this._promise;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.IFrameNavigator = void 0);
            var n = r(0),
              i = r(44);
            t.IFrameNavigator = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
              }
              return (
                (e.prototype.prepare = function (e) {
                  var t = new i.IFrameWindow(e);
                  return Promise.resolve(t);
                }),
                (e.prototype.callback = function (e) {
                  n.Log.debug('IFrameNavigator.callback');
                  try {
                    return i.IFrameWindow.notifyParent(e), Promise.resolve();
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.IFrameWindow = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0);
            t.IFrameWindow = (function () {
              function e(t) {
                var r = this;
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this._promise = new Promise(function (e, t) {
                    (r._resolve = e), (r._reject = t);
                  })),
                  (this._boundMessageEvent = this._message.bind(this)),
                  window.addEventListener('message', this._boundMessageEvent, !1),
                  (this._frame = window.document.createElement('iframe')),
                  (this._frame.style.visibility = 'hidden'),
                  (this._frame.style.position = 'absolute'),
                  (this._frame.width = 0),
                  (this._frame.height = 0),
                  window.document.body.appendChild(this._frame);
              }
              return (
                (e.prototype.navigate = function (e) {
                  if (e && e.url) {
                    var t = e.silentRequestTimeout || 1e4;
                    i.Log.debug('IFrameWindow.navigate: Using timeout of:', t),
                      (this._timer = window.setTimeout(this._timeout.bind(this), t)),
                      (this._frame.src = e.url);
                  } else this._error('No url provided');
                  return this.promise;
                }),
                (e.prototype._success = function (e) {
                  this._cleanup(),
                    i.Log.debug('IFrameWindow: Successful response from frame window'),
                    this._resolve(e);
                }),
                (e.prototype._error = function (e) {
                  this._cleanup(), i.Log.error(e), this._reject(new Error(e));
                }),
                (e.prototype.close = function () {
                  this._cleanup();
                }),
                (e.prototype._cleanup = function () {
                  this._frame &&
                    (i.Log.debug('IFrameWindow: cleanup'),
                    window.removeEventListener('message', this._boundMessageEvent, !1),
                    window.clearTimeout(this._timer),
                    window.document.body.removeChild(this._frame),
                    (this._timer = null),
                    (this._frame = null),
                    (this._boundMessageEvent = null));
                }),
                (e.prototype._timeout = function () {
                  i.Log.debug('IFrameWindow.timeout'), this._error('Frame window timed out');
                }),
                (e.prototype._message = function (e) {
                  if (
                    (i.Log.debug('IFrameWindow.message'),
                    this._timer &&
                      e.origin === this._origin &&
                      e.source === this._frame.contentWindow &&
                      'string' == typeof e.data &&
                      (e.data.startsWith('http://') || e.data.startsWith('https://')))
                  ) {
                    var t = e.data;
                    t ? this._success({ url: t }) : this._error('Invalid response from frame');
                  }
                }),
                (e.notifyParent = function (e) {
                  i.Log.debug('IFrameWindow.notifyParent'),
                    (e = e || window.location.href) &&
                      (i.Log.debug('IFrameWindow.notifyParent: posting url message to parent'),
                      window.parent.postMessage(e, location.protocol + '//' + location.host));
                }),
                n(e, [
                  {
                    key: 'promise',
                    get: function () {
                      return this._promise;
                    },
                  },
                  {
                    key: '_origin',
                    get: function () {
                      return location.protocol + '//' + location.host;
                    },
                  },
                ]),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.UserManagerEvents = void 0);
            var n = r(0),
              i = r(16),
              o = r(17);
            t.UserManagerEvents = (function (e) {
              function t(r) {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, t);
                var n = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
                })(this, e.call(this, r));
                return (
                  (n._userLoaded = new o.Event('User loaded')),
                  (n._userUnloaded = new o.Event('User unloaded')),
                  (n._silentRenewError = new o.Event('Silent renew error')),
                  (n._userSignedIn = new o.Event('User signed in')),
                  (n._userSignedOut = new o.Event('User signed out')),
                  (n._userSessionChanged = new o.Event('User session changed')),
                  n
                );
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.load = function (t) {
                  var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  n.Log.debug('UserManagerEvents.load'),
                    e.prototype.load.call(this, t),
                    r && this._userLoaded.raise(t);
                }),
                (t.prototype.unload = function () {
                  n.Log.debug('UserManagerEvents.unload'),
                    e.prototype.unload.call(this),
                    this._userUnloaded.raise();
                }),
                (t.prototype.addUserLoaded = function (e) {
                  this._userLoaded.addHandler(e);
                }),
                (t.prototype.removeUserLoaded = function (e) {
                  this._userLoaded.removeHandler(e);
                }),
                (t.prototype.addUserUnloaded = function (e) {
                  this._userUnloaded.addHandler(e);
                }),
                (t.prototype.removeUserUnloaded = function (e) {
                  this._userUnloaded.removeHandler(e);
                }),
                (t.prototype.addSilentRenewError = function (e) {
                  this._silentRenewError.addHandler(e);
                }),
                (t.prototype.removeSilentRenewError = function (e) {
                  this._silentRenewError.removeHandler(e);
                }),
                (t.prototype._raiseSilentRenewError = function (e) {
                  n.Log.debug('UserManagerEvents._raiseSilentRenewError', e.message),
                    this._silentRenewError.raise(e);
                }),
                (t.prototype.addUserSignedIn = function (e) {
                  this._userSignedIn.addHandler(e);
                }),
                (t.prototype.removeUserSignedIn = function (e) {
                  this._userSignedIn.removeHandler(e);
                }),
                (t.prototype._raiseUserSignedIn = function () {
                  n.Log.debug('UserManagerEvents._raiseUserSignedIn'), this._userSignedIn.raise();
                }),
                (t.prototype.addUserSignedOut = function (e) {
                  this._userSignedOut.addHandler(e);
                }),
                (t.prototype.removeUserSignedOut = function (e) {
                  this._userSignedOut.removeHandler(e);
                }),
                (t.prototype._raiseUserSignedOut = function () {
                  n.Log.debug('UserManagerEvents._raiseUserSignedOut'), this._userSignedOut.raise();
                }),
                (t.prototype.addUserSessionChanged = function (e) {
                  this._userSessionChanged.addHandler(e);
                }),
                (t.prototype.removeUserSessionChanged = function (e) {
                  this._userSessionChanged.removeHandler(e);
                }),
                (t.prototype._raiseUserSessionChanged = function () {
                  n.Log.debug('UserManagerEvents._raiseUserSessionChanged'),
                    this._userSessionChanged.raise();
                }),
                t
              );
            })(i.AccessTokenEvents);
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.Timer = void 0);
            var n = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })(),
              i = r(0),
              o = r(1),
              s = r(17);
            function a(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function u(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            }
            t.Timer = (function (e) {
              function t(r) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Global.timer,
                  i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                a(this, t);
                var s = u(this, e.call(this, r));
                return (
                  (s._timer = n),
                  (s._nowFunc =
                    i ||
                    function () {
                      return Date.now() / 1e3;
                    }),
                  s
                );
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' + typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.init = function (e) {
                  e <= 0 && (e = 1), (e = parseInt(e));
                  var t = this.now + e;
                  if (this.expiration === t && this._timerHandle)
                    i.Log.debug(
                      'Timer.init timer ' +
                        this._name +
                        ' skipping initialization since already initialized for expiration:',
                      this.expiration,
                    );
                  else {
                    this.cancel(),
                      i.Log.debug('Timer.init timer ' + this._name + ' for duration:', e),
                      (this._expiration = t);
                    var r = 5;
                    e < r && (r = e),
                      (this._timerHandle = this._timer.setInterval(
                        this._callback.bind(this),
                        1e3 * r,
                      ));
                  }
                }),
                (t.prototype.cancel = function () {
                  this._timerHandle &&
                    (i.Log.debug('Timer.cancel: ', this._name),
                    this._timer.clearInterval(this._timerHandle),
                    (this._timerHandle = null));
                }),
                (t.prototype._callback = function () {
                  var t = this._expiration - this.now;
                  i.Log.debug('Timer.callback; ' + this._name + ' timer expires in:', t),
                    this._expiration <= this.now && (this.cancel(), e.prototype.raise.call(this));
                }),
                n(t, [
                  {
                    key: 'now',
                    get: function () {
                      return parseInt(this._nowFunc());
                    },
                  },
                  {
                    key: 'expiration',
                    get: function () {
                      return this._expiration;
                    },
                  },
                ]),
                t
              );
            })(s.Event);
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SilentRenewService = void 0);
            var n = r(0);
            t.SilentRenewService = (function () {
              function e(t) {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this._userManager = t);
              }
              return (
                (e.prototype.start = function () {
                  this._callback ||
                    ((this._callback = this._tokenExpiring.bind(this)),
                    this._userManager.events.addAccessTokenExpiring(this._callback),
                    this._userManager
                      .getUser()
                      .then(function (e) {})
                      .catch(function (e) {
                        n.Log.error('SilentRenewService.start: Error from getUser:', e.message);
                      }));
                }),
                (e.prototype.stop = function () {
                  this._callback &&
                    (this._userManager.events.removeAccessTokenExpiring(this._callback),
                    delete this._callback);
                }),
                (e.prototype._tokenExpiring = function () {
                  var e = this;
                  this._userManager.signinSilent().then(
                    function (e) {
                      n.Log.debug(
                        'SilentRenewService._tokenExpiring: Silent token renewal successful',
                      );
                    },
                    function (t) {
                      n.Log.error(
                        'SilentRenewService._tokenExpiring: Error from signinSilent:',
                        t.message,
                      ),
                        e._userManager.events._raiseSilentRenewError(t);
                    },
                  );
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.CordovaPopupNavigator = void 0);
            var n = r(21);
            t.CordovaPopupNavigator = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
              }
              return (
                (e.prototype.prepare = function (e) {
                  var t = new n.CordovaPopupWindow(e);
                  return Promise.resolve(t);
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.CordovaIFrameNavigator = void 0);
            var n = r(21);
            t.CordovaIFrameNavigator = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e);
              }
              return (
                (e.prototype.prepare = function (e) {
                  e.popupWindowFeatures = 'hidden=yes';
                  var t = new n.CordovaPopupWindow(e);
                  return Promise.resolve(t);
                }),
                e
              );
            })();
          },
          function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.Version = '1.11.5');
          },
        ]);
      }),
        (e.exports = r());
    }),
    u =
      (s = a) && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s,
    c = o(function (e, t) {
      (function () {
        var t, r, n, i, o, s, a, u, c, h, l, f, d, g, p, v;
        e.exports =
          ((u = {}),
          (n = document),
          (h = !1),
          (l = 'active'),
          (s = 6e4),
          (o = !1),
          (v = {}),
          (p = '__ceGUID'),
          (r = {
            add: function (e, t, r) {
              return (
                (e[p] = void 0),
                e[p] || (e[p] = 'ifvisible.object.event.identifier'),
                v[e[p]] || (v[e[p]] = {}),
                v[e[p]][t] || (v[e[p]][t] = []),
                v[e[p]][t].push(r)
              );
            },
            remove: function (e, t, r) {
              var n, i, o, s, a;
              if (r) {
                if (e[p] && v[e[p]] && v[e[p]][t])
                  for (i = o = 0, s = (a = v[e[p]][t]).length; o < s; i = ++o)
                    if ((n = a[i]) === r) return v[e[p]][t].splice(i, 1), n;
              } else if (e[p] && v[e[p]] && v[e[p]][t]) return delete v[e[p]][t];
            },
            fire: function (e, t, r) {
              var n, i, o, s, a;
              if (e[p] && v[e[p]] && v[e[p]][t]) {
                for (a = [], i = 0, o = (s = v[e[p]][t]).length; i < o; i++)
                  (n = s[i]), a.push(n(r || {}));
                return a;
              }
            },
          }),
          (g = !1),
          (t = function (e, t, r) {
            return (
              g ||
                (g = e.addEventListener
                  ? function (e, t, r) {
                      return e.addEventListener(t, r, !1);
                    }
                  : e.attachEvent
                  ? function (e, t, r) {
                      return e.attachEvent('on' + t, r, !1);
                    }
                  : function (e, t, r) {
                      return (e['on' + t] = r);
                    }),
              g(e, t, r)
            );
          }),
          (a = (function () {
            var e, t, r, i, o;
            for (
              i = void 0,
                o = 3,
                r = n.createElement('div'),
                e = r.getElementsByTagName('i'),
                t = function () {
                  return (
                    (r.innerHTML = '\x3c!--[if gt IE ' + ++o + ']><i></i><![endif]--\x3e'), e[0]
                  );
                };
              t();

            );
            return o > 4 ? o : i;
          })()),
          (i = !1),
          (d = void 0),
          void 0 !== n.hidden
            ? ((i = 'hidden'), (d = 'visibilitychange'))
            : void 0 !== n.mozHidden
            ? ((i = 'mozHidden'), (d = 'mozvisibilitychange'))
            : void 0 !== n.msHidden
            ? ((i = 'msHidden'), (d = 'msvisibilitychange'))
            : void 0 !== n.webkitHidden && ((i = 'webkitHidden'), (d = 'webkitvisibilitychange')),
          (f = function () {
            var e, r;
            return (
              (e = !1),
              (r = function () {
                return (
                  clearTimeout(e),
                  'active' !== l && u.wakeup(),
                  (o = +new Date()),
                  (e = setTimeout(function () {
                    if ('active' === l) return u.idle();
                  }, s))
                );
              })(),
              t(n, 'mousemove', r),
              t(n, 'keyup', r),
              t(n, 'touchstart', r),
              t(window, 'scroll', r),
              u.focus(r),
              u.wakeup(r)
            );
          }),
          (c = function () {
            var e;
            return (
              !!h ||
              (!1 === i
                ? ((e = 'blur'),
                  a < 9 && (e = 'focusout'),
                  t(window, e, function () {
                    return u.blur();
                  }),
                  t(window, 'focus', function () {
                    return u.focus();
                  }))
                : t(
                    n,
                    d,
                    function () {
                      return n[i] ? u.blur() : u.focus();
                    },
                    !1,
                  ),
              (h = !0),
              f())
            );
          }),
          (u = {
            setIdleDuration: function (e) {
              return (s = 1e3 * e);
            },
            getIdleDuration: function () {
              return s;
            },
            getIdleInfo: function () {
              var e, t;
              return (
                (e = +new Date()),
                (t = {}),
                'idle' === l
                  ? ((t.isIdle = !0), (t.idleFor = e - o), (t.timeLeft = 0), (t.timeLeftPer = 100))
                  : ((t.isIdle = !1),
                    (t.idleFor = e - o),
                    (t.timeLeft = o + s - e),
                    (t.timeLeftPer = (100 - (100 * t.timeLeft) / s).toFixed(2))),
                t
              );
            },
            focus: function (e) {
              return (
                'function' == typeof e
                  ? this.on('focus', e)
                  : ((l = 'active'),
                    r.fire(this, 'focus'),
                    r.fire(this, 'wakeup'),
                    r.fire(this, 'statusChanged', { status: l })),
                this
              );
            },
            blur: function (e) {
              return (
                'function' == typeof e
                  ? this.on('blur', e)
                  : ((l = 'hidden'),
                    r.fire(this, 'blur'),
                    r.fire(this, 'idle'),
                    r.fire(this, 'statusChanged', { status: l })),
                this
              );
            },
            idle: function (e) {
              return (
                'function' == typeof e
                  ? this.on('idle', e)
                  : ((l = 'idle'),
                    r.fire(this, 'idle'),
                    r.fire(this, 'statusChanged', { status: l })),
                this
              );
            },
            wakeup: function (e) {
              return (
                'function' == typeof e
                  ? this.on('wakeup', e)
                  : ((l = 'active'),
                    r.fire(this, 'wakeup'),
                    r.fire(this, 'statusChanged', { status: l })),
                this
              );
            },
            on: function (e, t) {
              return c(), r.add(this, e, t), this;
            },
            off: function (e, t) {
              return c(), r.remove(this, e, t), this;
            },
            onEvery: function (e, t) {
              var r, n;
              return (
                c(),
                (r = !1),
                t &&
                  (n = setInterval(function () {
                    if ('active' === l && !1 === r) return t();
                  }, 1e3 * e)),
                {
                  stop: function () {
                    return clearInterval(n);
                  },
                  pause: function () {
                    return (r = !0);
                  },
                  resume: function () {
                    return (r = !1);
                  },
                  code: n,
                  callback: t,
                }
              );
            },
            now: function (e) {
              return c(), l === (e || 'active');
            },
          }));
      }.call(i));
    }),
    h = {
      zh: {
        refreshToken: '????????????token??????',
        sessionExpiredTitle: '????????????',
        sessionExpired: '????????????????????????????????????',
        ok: '??????',
        getTokenFailed: '??????token??????',
        actionLog: {
          actionLog: '????????????',
          placeholder: '?????????????????????',
          query: '??????',
          actionContent: '????????????',
          actionTime: '????????????',
          close: '??????',
        },
        hintModalForDevice: {
          title: '??????????????????',
          content: '???????????????????????????????????????',
          okText: '??????',
        },
        hintModalForToken: {
          title: '??????????????????',
          content: '??????????????????????????????????????????',
          okText: '??????',
        },
        getTokenFailedTexts: {
          title: '????????????',
          content: '??????token???????????????????????????????????????????????????',
          ok: '??????',
        },
      },
      en: {
        refreshToken: 'Automatic token update failed',
        sessionExpiredTitle: 'Session Expired',
        sessionExpired: 'The session has expired, please log in again!',
        ok: 'OK',
        getTokenFailed: 'Get token failed???',
        actionLog: {
          actionLog: 'Operation log',
          placeholder: 'Please select log type',
          query: 'Query',
          actionContent: 'Operation content',
          actionTime: 'Operating time',
          close: 'Close',
        },
        hintModalForDevice: {
          title: 'Login device notification',
          content: 'You have been logged out of the system or have been forced offline',
          okText: 'Confirm',
        },
        hintModalForToken: {
          title: 'Login device notification',
          content: 'You have been logged out of the system or the access token has expired',
          okText: 'Confirm',
        },
        getTokenFailedTexts: {
          title: 'Error message',
          content: 'Failed to obtain token, you can click the button below to log in again',
          ok: 'OK',
        },
      },
      ja: {
        refreshToken: '?????????????????????????????????????????????',
        sessionExpiredTitle: '???????????????????????????????????????',
        sessionExpired: '????????????????????????????????????????????????????????????????????????????????????????????????',
        ok: '??????',
        getTokenFailed: '??????????????????????????????????????????',
        actionLog: {
          actionLog: '????????????',
          placeholder: '??????????????????????????????????????????',
          query: '??????????????????',
          actionContent: '????????????',
          actionTime: '????????????',
          close: '??????',
        },
        hintModalForDevice: {
          title: '?????????????????????????????????',
          content: '???????????????????????????????????????????????????????????????????????????????????????????????????',
          okText: '??????',
        },
        hintModalForToken: {
          title: '?????????????????????????????????',
          content: '???????????????????????????????????????????????????????????????????????????????????????????????????????????????',
          okText: '??????',
        },
        getTokenFailedTexts: {
          title: '????????????????????????',
          content: '???????????????????????????????????????????????????????????????????????????????????????????????????????????????',
          ok: '??????',
        },
      },
    };
  let l = 'zh';
  function f() {
    return l;
  }
  function d(e) {
    l = e;
  }
  let g = null;
  function p() {
    return g;
  }
  function v() {
    if (!p()) return null;
    const e = window.localStorage.getItem(p());
    return e ? JSON.parse(e) : null;
  }
  const y = '/dashboard/modify/init',
    m = 'IAM:last-login',
    _ = 'IAM:deviceId',
    S = ['oidc.user:', 'IAM:', 'EASI:', 'SELF:'];
  let b = 'development';
  function w() {
    return b;
  }
  function F() {
    return 'production' === b ? 'https://iam.easi.com.au' : 'https://iam.melbdelivery.com';
  }
  let E,
    x = null,
    k = null,
    A = null,
    P = null,
    C = null;
  function T() {
    return k;
  }
  function I() {
    return C;
  }
  const R = window.localStorage.getItem(_);
  function D() {
    return E;
  }
  function L() {
    const e = new Date();
    return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e.getTime() + '';
  }
  function N(e, t) {
    return e(() => {
      new u.UserManager({
        userStore: new u.WebStorageStateStore({ store: window.localStorage }),
        loadUserInfo: !0,
        filterProtocolClaims: !0,
        response_mode: 'query',
      })
        .signinRedirectCallback()
        .then(e => {
          var r;
          (r = e.profile.acr || ''),
            window.localStorage.setItem(_, r),
            (E = r),
            window.localStorage.setItem(m, L()),
            (window.location.href = t || '/');
        })
        .catch(e => {
          var r, n, i, o, s, a;
          throw (
            (I()(
              {
                title:
                  null === (r = h[f()]) ||
                  void 0 === r ||
                  null === (n = r.getTokenFailedTexts) ||
                  void 0 === n
                    ? void 0
                    : n.title,
                content:
                  null === (i = h[f()]) ||
                  void 0 === i ||
                  null === (o = i.getTokenFailedTexts) ||
                  void 0 === o
                    ? void 0
                    : o.content,
                okText:
                  null === (s = h[f()]) ||
                  void 0 === s ||
                  null === (a = s.getTokenFailedTexts) ||
                  void 0 === a
                    ? void 0
                    : a.ok,
              },
              () => {
                window.location.href = t || '/';
              },
            ),
            e)
          );
        });
    });
  }
  E = R || '';
  let U = 0;
  const O = n.default.create({ timeout: 2e4 });
  O.interceptors.request.use(
    function (e) {
      return __spreadProps(__spreadValues({}, e), {
        headers: __spreadValues({}, e.headers),
        params: __spreadProps(__spreadValues({}, e.params), { _t: Date.now() }),
      });
    },
    function (e) {
      return Promise.reject(e);
    },
  ),
    O.interceptors.response.use(
      function (e) {
        const { data: t } = e;
        return Promise.resolve(t);
      },
      function (e) {
        var t;
        return null != e && null !== (t = e.response) && void 0 !== t && t.data
          ? Promise.reject(e.response.data)
          : Promise.reject(e);
      },
    );
  const B = e =>
      O({
        url: F() + '/v1/admin/logs/timeline',
        headers: { 'Easi-Device-Id': D(), Authorization: e.token },
        params: {
          application_id: e.application_id,
          function_type: e.function_type,
          data_id: e.data_id,
          log_type_id: e.log_type,
          page: e.page,
          page_size: e.page_size,
        },
      }),
    j = e =>
      O({
        url: F() + '/v1/admin/logs/timeline-types',
        headers: { 'Easi-Device-Id': D(), Authorization: e.token },
        params: { application_id: e.application_id, function_type: e.function_type },
      });
  (e.IAMClient = function (e) {
    var t, r, n, i, o, s;
    if (
      (e.lang && d(e.lang),
      (t = e.env),
      (b = t),
      (u.Log.logger = console),
      (u.Log.level = 'development' === w() ? u.Log.INFO : u.Log.NONE),
      !(
        e.UI.showErrorMsg &&
        e.UI.showTokenExpiredModal &&
        e.UI.codeExchangeTokenPage &&
        e.UI.hintModalComp
      ))
    )
      throw new Error('??????UI??????????????????');
    (r = e.UI.showTokenExpiredModal),
      (x = r),
      (n = e.UI.showErrorMsg),
      (k = n),
      (i = e.UI.codeExchangeTokenPage),
      (A = i),
      (o = e.UI.dataActionLogComp),
      (P = o),
      (s = e.UI.hintModalComp),
      (C = s);
    const a = e.client_id[w()],
      l = new u.UserManager({
        userStore: new u.WebStorageStateStore({ store: window.localStorage }),
        authority: F(),
        client_id: a,
        redirect_uri: e.callbackUrl,
        response_type: 'code',
        scope: 'openid offline',
        post_logout_redirect_uri: e.homePageUrl,
        accessTokenExpiringNotificationTime: 120,
        filterProtocolClaims: !0,
        loadUserInfo: !0,
      });
    var p;
    (p = l._settings._userStore._prefix + l._userStoreKey), (g = p);
    let _ = !1;
    const E = () => {
      var e, t, r;
      if (_) return;
      x(
        {
          title: null === (e = h[f()]) || void 0 === e ? void 0 : e.sessionExpiredTitle,
          content: null == h || null === (t = h[f()]) || void 0 === t ? void 0 : t.sessionExpired,
          okText: null == h || null === (r = h[f()]) || void 0 === r ? void 0 : r.ok,
        },
        () => {
          l
            .signoutRedirect()
            .then(function (e) {
              u.Log.logger.info('signed out', e);
            })
            .catch(function (e) {
              u.Log.logger.error(e);
            }),
            (_ = !1);
        },
      ),
        (_ = !0);
    };
    l.clearStaleState(),
      l.events.addAccessTokenExpiring(() => {
        l.signinSilent()
          .then(() => {})
          .catch(() => {
            setTimeout(() => {
              var e;
              T()(null === (e = h[f()]) || void 0 === e ? void 0 : e.refreshToken);
            }, 2e3);
          });
      }),
      l.events.addSilentRenewError(function () {
        var e;
        T()(null == h || null === (e = h[f()]) || void 0 === e ? void 0 : e.refreshToken);
      });
    let R = 0;
    return {
      getOidcClientInstance: () => l,
      getCurrentEnv: () => w(),
      codeExchangeTokenPage: e => N(A, e),
      ajaxErrorCheck(e, t) {
        return (function (e, t, r, n) {
          var i;
          const o =
              (null == e || null === (i = e.error) || void 0 === i ? void 0 : i.details) || [],
            s = JSON.stringify(e);
          return o.some(e => 'NOT_MATCHED_ACTIVE_DEVICE' === e.reason) ||
            s.includes('NOT_MATCHED_ACTIVE_DEVICE')
            ? (0 === U && I()(t, n), U++, !0)
            : !(
                (!o.some(e => 'ACCESS_TOKEN_NOT_ACTIVE' === e.reason) &&
                  !s.includes('ACCESS_TOKEN_NOT_ACTIVE')) ||
                (0 === U && I()(r, n), U++, 0)
              );
        })(
          e,
          null == h ? void 0 : h[f()].hintModalForDevice,
          null == h ? void 0 : h[f()].hintModalForToken,
          () => {
            t && t(), this.signOut();
          },
        );
      },
      getDeviceId: () => D(),
      dataActionLogComp(t, r) {
        var n;
        return P(
          {
            application_id: e.applicationId,
            function_type: t,
            token: this.getAuthorization(),
            title: r,
          },
          B,
          j,
          null === (n = h[f()]) || void 0 === n ? void 0 : n.actionLog,
          this.ajaxErrorCheck.bind(this),
        );
      },
      setLang(e) {
        d(e);
      },
      getLang: () => f(),
      checkTodayLogged() {
        let e = window.localStorage.getItem(m);
        if (e && !isNaN(e)) {
          e = Number(e);
          const t = L();
          if (Number(t) - e > 0) return E(), !1;
        }
        return !0;
      },
      async routerGuard() {
        var e;
        return this.getAuthInfoSync()
          ? (null === (e = this.getAuthInfoSync()) || void 0 === e ? void 0 : e.expires_at) <=
            Number(parseInt(new Date().getTime() / 1e3 + ''))
            ? !!this.checkTodayLogged() && (this.clearOidcLocalStorageData(), this.signIn(), !1)
            : !!this.checkTodayLogged() && (this.addEveryDayLoginListener(), !0)
          : (this.signIn(), !1);
      },
      clearLocalStorageDataExcludeOidc(e) {
        const t = [];
        for (let r = 0; r < localStorage.length; r++) {
          const n = localStorage.key(r);
          (null != e && e.includes(n)) || S.some(e => n.includes(e)) || t.push(n);
        }
        t.forEach(e => localStorage.removeItem(e));
      },
      clearOidcLocalStorageData() {
        localStorage.removeItem(`oidc.user:${F()}:${a}`);
      },
      getAuthInfoSync: () => v(),
      getAuthInfo: () =>
        new Promise((e, t) => {
          l.getUser()
            .then(t => e(null == t ? null : t))
            .catch(function (e) {
              return t(e);
            });
        }),
      getUserInfo() {
        return ((t = { token: this.getAuthorization() }),
        O({
          url: F() + '/v1/admin/userinfo',
          headers: { Authorization: t.token, 'Easi-Device-Id': D() },
        }).then(
          e => (
            null != e &&
              e.set_password &&
              !window.location.href.includes(y) &&
              window.location.replace(F() + y),
            e
          ),
        ))
          .then(t => ((t.application_id = e.applicationId), Promise.resolve(t)))
          .catch(e => (this.ajaxErrorCheck(e), Promise.reject(e)));
        var t;
      },
      getPermissionsData(t) {
        return ((r = {
          token: this.getAuthorization(),
          application_id: e.applicationId,
          scope_id: t.scopeId,
        }),
        O({
          url:
            F() +
            (r.scope_id
              ? `/v1/admin/users/menus?application_id=${r.application_id}&scope_id=${r.scope_id}`
              : `/v1/admin/users/menus?application_id=${r.application_id}`),
          headers: { 'Easi-Device-Id': D(), Authorization: r.token },
        })).catch(e => (this.ajaxErrorCheck(e), Promise.reject(e)));
        var r;
      },
      getSignedIn() {
        return new Promise((e, t) => {
          l.getUser()
            .then(t => (null == t ? (this.signIn(), e(!1)) : e(!0)))
            .catch(function (e) {
              return t(e);
            });
        });
      },
      signIn() {
        ('development' === w() && !1 === e.needIntercept) ||
          l
            .signinRedirect()
            .then(() => {})
            .catch(function (e) {
              u.Log.logger.error(e);
            });
      },
      signOut(e) {
        'function' == typeof (null == e ? void 0 : e.logoutBeforeCallback) &&
          e.logoutBeforeCallback(),
          this.removeEveryDayLoginListener(),
          l
            .signoutRedirect()
            .then(function (t) {
              'function' == typeof (null == e ? void 0 : e.logoutSuccessCallback) &&
                e.logoutSuccessCallback(),
                u.Log.logger.info('signed out', t);
            })
            .catch(function (t) {
              'function' == typeof (null == e ? void 0 : e.logoutErrorCallback) &&
                e.logoutErrorCallback(),
                u.Log.logger.error(t);
            });
      },
      getAuthorization() {
        const e = v();
        return e ? `Bearer ${e.access_token}` : '';
      },
      getIAMHomeUrl: () => F() + '/dashboard',
      addEveryDayLoginListener() {
        if (0 == R) {
          const e = this;
          c.on('wakeup', e.checkTodayLogged), R++;
        }
      },
      removeEveryDayLoginListener() {
        for (let e = 0; e < R; e++) c.off('wakeup');
        R = 0;
      },
    };
  }),
    (e.version = '0.0.46'),
    Object.defineProperty(e, '__esModule', { value: !0 }),
    (e[Symbol.toStringTag] = 'Module');
});
