<template>
  <div>
    方法：
    IAM.dataActionLogComp(moduleName: string,title?: string)
    <br>
    <LogComp key="1" :data_id="10009">
      <el-button>
        ceshi-t 账号的操作日志
      </el-button>
    </LogComp>
    &nbsp;
    <LoginLogComp key="2" :data_id="10009" title="ceshi-t 账号登入登出日志">
      <el-button>
        ceshi-t 账号登入登出日志
      </el-button>
    </LoginLogComp>
  </div>
</template>

<script>
import { IAM } from '../../utils/iam'

const LogComp = IAM.dataActionLogComp('users')
const LoginLogComp = IAM.dataActionLogComp('users-security')

export default {
  components: {
    LogComp,
    LoginLogComp
  }
}
</script>
