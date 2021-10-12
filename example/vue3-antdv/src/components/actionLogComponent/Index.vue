<template>
  <a-typography-paragraph>
    方法：
    IAM.dataActionLogComp(moduleName: string,title?: string)
    <br>
    <div class="wrapper">
      <LogComp :data_id="10009">
        <template #left>
          左边
        </template>
        <template #right>
          右边
        </template>
        <a-button>
          ceshi-t 账号的操作日志
        </a-button>
      </LogComp>
    </div>
    <br/>
    <div class="wrapper">
      <LoginLogComp :data_id="10009" title="ceshi-t 账号登入登出日志">
        <a-button>
          ceshi-t 账号登入登出日志
        </a-button>
      </LoginLogComp>
    </div>
  </a-typography-paragraph>
</template>

<script setup>
import { IAM } from '../../utils/iamUtils'

const LogComp = IAM.dataActionLogComp('users')
const LoginLogComp = IAM.dataActionLogComp('users-security')

</script>

<style scoped>

</style>
