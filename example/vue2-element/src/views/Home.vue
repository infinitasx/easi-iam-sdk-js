<template>
  <div class="home" v-loading="loading">
    <nav>
      <div>
        用户名：{{ username }}
      </div>
      <div>
        <el-button @click="logoutHandler">退出登录</el-button>
      </div>
    </nav>
    <el-collapse>
      <el-collapse-item title="获取用户信息（在iam系统中的，账号信息和所拥有系统的权限信息）" name="1">
        <GetUserInfo/>
      </el-collapse-item>
      <el-collapse-item title="获取认证信息（auth2.0返回的token等信息）" name="2">
        <GetAuthInfo/>
      </el-collapse-item>
      <el-collapse-item title="获取权限信息（当前系统-iam管理台的系统的权限在iam中的菜单按钮权限）" name="3">
        <GetPermissionInfo/>
      </el-collapse-item>
      <el-collapse-item title="获取首页地址（当前环境下的对应的iam-dashboard的地址，注意：iam 没有开发环境，开发环境、测试环境均对应iam的测试环境）" name="4">
        <GetHomePath/>
      </el-collapse-item>
      <el-collapse-item title="检测错误的响应json，提供检测是否存在token失效，设备被挤，被强制退出" name="5">
        <CheckErrorString/>
      </el-collapse-item>
      <el-collapse-item title="日志查询组件功能" name="6">
        <ActionLog/>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { IAM } from '../utils/iam'
import GetUserInfo from '../components/getUserInfo/Index.vue'
import GetAuthInfo from '../components/getAuthInfo/Index.vue'
import GetPermissionInfo from '../components/getPermissionInfo/Index.vue'
import GetHomePath from '../components/getHomePath/Index.vue'
import CheckErrorString from '../components/checkErrorString/Index.vue'
import ActionLog from '../components/actionLogComponent/Index.vue'

export default {
  name: 'Home',
  components: {
    GetUserInfo,
    GetAuthInfo,
    GetPermissionInfo,
    GetHomePath,
    CheckErrorString,
    ActionLog
  },
  computed: {
    username () {
      return this.$store.state?.userInfo?.name
    },
    loading: {
      get () {
        return this.$store.state.globalLoading
      },
      set (val) {
        this.$store.commit('SET_LOADING', val)
      }
    }
  },
  methods: {
    logoutHandler () {
      const b = window.confirm('您确定退出登录吗？')
      if (b) {
        this.loading = true
        IAM.signOut({
          logoutBeforeCallback () {
            alert('马上就要退出了，别激动！')
          },
          logoutSuccessCallback () {
            alert('退出登录成功！')
          },
          logoutErrorCallback () {
            alert('退出登录错误的回调')
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 1080px;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}
</style>
