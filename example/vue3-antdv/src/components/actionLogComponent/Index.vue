<template>
  <a-typography-paragraph>
    方法：
    IAM.dataActionLogComp(moduleName: string,title?: string)
    <br>
    <LogComp :data_id="10009">
      <a-button>
        ceshi-t 账号的操作日志
      </a-button>
    </LogComp>
    &nbsp;
    <LogComp :data_id="10009" title="ceshi-t 账号登入登出日志">
      <a-button>
        ceshi-t 账号登入登出日志
      </a-button>
    </LogComp>
  </a-typography-paragraph>
</template>

<script setup>
import { IAM } from '../../utils/iamUtils'

const LogComp = IAM.dataActionLogComp('users', '测试title')

</script>

<style scoped>

</style>
