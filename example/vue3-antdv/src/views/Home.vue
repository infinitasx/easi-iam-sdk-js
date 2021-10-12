<template>
  <div class="home" style="margin-top: 20px;">
    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel key="1" header="获取用户信息（在iam系统中的，账号信息和所拥有系统的权限信息）">
        <GetUserInfo/>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="获取认证信息（auth2.0返回的token等信息）" >
        <GetAuthInfo/>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="获取权限信息（当前系统-iam管理台的系统的权限在iam中的菜单按钮权限）" >
        <GetPermissionInfo/>
      </a-collapse-panel>
      <a-collapse-panel key="4" header="获取首页地址（当前环境下的对应的iam-dashboard的地址，注意：iam 没有开发环境，开发环境、测试环境均对应iam的测试环境）" >
        <GetHomePath/>
      </a-collapse-panel>
      <a-collapse-panel key="5" header="检测错误的响应json，提供检测是否存在token失效，设备被挤，被强制退出" >
        <CheckErrorString/>
      </a-collapse-panel>
      <a-collapse-panel key="6" header="日志查询组件功能" >
        <ActionLog/>
      </a-collapse-panel>
      <a-collapse-panel key="7" header="获取设备id" >
        <GetDeviceId/>
      </a-collapse-panel>
      <a-collapse-panel key="8" header="清除localStorage的数据，除了oidc里保存的东西" >
        <ClearLocalStorageDataExcludeOidc/>
      </a-collapse-panel>
      <a-collapse-panel key="9" header="每日登录校验约束" >
        <EveryDayLoginListener/>
      </a-collapse-panel>

    </a-collapse>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import GetUserInfo from '../components/getUserInfo/Index.vue'
import GetAuthInfo from '../components/getAuthInfo/Index.vue'
import GetPermissionInfo from '../components/getPermissionInfo/Index.vue'
import GetHomePath from '../components/getHomePath/Index.vue'
import CheckErrorString from '../components/checkErrorString/Index.vue'
import ActionLog from '../components/actionLogComponent/Index.vue'
import GetDeviceId from '../components/getDeviceId/Index.vue'
import ClearLocalStorageDataExcludeOidc from '../components/clearLocalStorageDataExcludeOidc/Index.vue'
import EveryDayLoginListener from '../components/everyDayLoginListener/Index.vue'

const activeKey = ref('')
</script>
