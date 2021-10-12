<template>
  <div>
    方法：
    IAM.dataActionLogComp(moduleName: string,title?: string)
    <br>
    <div>
      <LogComp key="1" :data_id="10009">
        <template v-slot:left>
          left
        </template>
        <template v-slot:right>
          right
        </template>
        <el-button>
          ceshi-t 账号的操作日志 （拥有左右slot）
        </el-button>
      </LogComp>
    </div>
    <br>
    <div>
      <LoginLogComp key="2" :data_id="10009" title="ceshi-t 账号登入登出日志">
        <el-button>
          ceshi-t 账号登入登出日志（传递自定义title）
        </el-button>
      </LoginLogComp>
    </div>

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
