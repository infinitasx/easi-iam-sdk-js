<template>
  <div>
    方法：
    <br>
    IAM.getDeviceId(): string
    <br>
    调用：
    <el-button @click="getDeviceId">getDeviceId</el-button>
    <el-divider></el-divider>

    <div>
      <JsonEditorVue :modelValue.sync="deviceId"></JsonEditorVue>
    </div>
  </div>
</template>

<script>
import { IAM } from '../../utils/iam'

export default {
  name: 'GetDeviceId',
  data () {
    return {
      deviceId: ''
    }
  },
  methods: {
    getDeviceId () {
      this.deviceId = IAM.getDeviceId()
    }
  }
}
</script>

<style scoped>

</style>
