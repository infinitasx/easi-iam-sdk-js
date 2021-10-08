import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { IAM } from '../utils/iamUtils.js'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/callback',
    name: 'Callback',
    component: IAM.codeExchangeTokenPage('/')
  }
]

const router = createRouter({
  history: createWebHistory('/iam'),
  routes
})

// 判断用户是否有登录
router.beforeEach(async (to, from, next) => {
  if (to.name === 'Callback') {
    if (to.query.code) {
      next()
      return
    } else {
      // 不允许直接进入callback页面
      next({
        name: 'Index'
      })
      return
    }
  }

  // 判断是否已经存在认证信息
  let canGo = false
  try {
    canGo = await IAM.routerGuard()
  } catch (e) {
    canGo = false
  }
  if (!canGo) {
    store.commit('SET_LOADING', true)
    return
  }

  // store不存在用户信息与权限信息
  if (!store.state.userInfo) {
    store.commit('SET_LOADING', true)
    try {
      await store.dispatch('fetchUserInfo')
    } catch (e) {
      next(false)
    }
    store.commit('SET_LOADING', false)
  }

  next()
})

export default router
