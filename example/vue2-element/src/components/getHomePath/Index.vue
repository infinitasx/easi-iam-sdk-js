<template>
  <div>
    IAM.getIAMHomeUrl()
    <br>
    <el-button @click="getIAMHomeUrl">getIAMHomeUrl</el-button>

    <div>
      当前环境：{{env}}
      <JsonEditorVue :modelValue.sync="url"></JsonEditorVue>
    </div>
  </div>

</template>

<script>
import { IAM } from '../../utils/iam'

export default {
  data () {
    return {
      url: '',
      env: IAM.getCurrentEnv()
    }
  },
  methods: {
    getIAMHomeUrl () {
      this.url = IAM.getIAMHomeUrl()
    }
  }
}
</script>
