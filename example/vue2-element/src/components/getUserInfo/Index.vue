<template>
  <div>
    方法：IAM.getUserInfo()
    <br>
    调用：<el-button @click="getUserInfo">getUserInfo</el-button>
    <div>
      {{loading ? 'loading...':'结果：'}}
      <JsonEditorVue :modelValue.sync="userInfo"/>
    </div>
  </div>
</template>

<script>
import { IAM } from '../../utils/iam'

export default {
  data () {
    return {
      userInfo: '',
      loading: false
    }
  },
  methods: {
    getUserInfo () {
      this.loading = true
      IAM.getUserInfo().then(res => {
        this.userInfo = res
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
