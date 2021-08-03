interface ILangText {
  refreshToken: string; // 刷新token失败的提示
  sessionExpiredTitle: string; // 会话过期提示标题
  sessionExpired: string; // 会话过期内容
}


export default {
  // 中文
  zh: {
    refreshToken: '自动更新token失败',
    sessionExpiredTitle: '会话到期',
    sessionExpired:  '会话已到期，请重新登录！',
    ok: '确定',
    getTokenFailed: '获取token失败',
  },
  // 英文
  en: {
    refreshToken: 'Automatic token update failed',
    sessionExpiredTitle: 'Session Expired',
    sessionExpired:  'The session has expired, please log in again!',
    ok: 'OK',
    getTokenFailed: 'Get token failed！',
  },
  // 日文
  ja: {
    refreshToken: '自動トークン更新に失敗しました',
    sessionExpiredTitle: 'セッションの有効期限が切れ',
    sessionExpired:  'セッションの有効期限が切れました。もう一度ログインしてください。',
    ok: '確認',
    getTokenFailed: 'Get token failed！',
  }
}

