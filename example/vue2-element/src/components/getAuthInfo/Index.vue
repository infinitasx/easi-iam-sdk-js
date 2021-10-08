<template>
  <div>
    方法：
    <br>
    1、IAM.getAuthInfo() 异步
    <br>
    2、IAM.getAuthInfoSync() 同步
    <br>
    调用：
    <el-button @click="getAuthInfoSync">getAuthInfoSync</el-button>
    <el-divider></el-divider>

    方法：
    IAM.getAuthorization()（只获取token 串儿）
    <br>
    调用：
    <el-button @click="getAuthorization">getAuthorization</el-button>

    <div>
      {{loading ? 'loading...':'结果：'}}
      <JsonEditorVue :modelValue.sync="authInfo"></JsonEditorVue>
    </div>
  </div>

</template>

<script>
import { IAM } from '../../utils/iam'

export default {
  data () {
    return {
      authInfo: '',
      loading: false
    }
  },
  methods: {
    getAuthorization () {
      this.authInfo = IAM.getAuthorization()
    },
    getAuthInfoSync () {
      this.loading = true
      IAM.getAuthInfo().then(res => {
        this.authInfo = res
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
