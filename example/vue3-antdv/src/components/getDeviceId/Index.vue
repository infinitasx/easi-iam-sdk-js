<template>
  <a-typography-paragraph>
    方法：
    <br>
    IAM.getDeviceId()
    调用：
    <a-button @click="getDeviceId">getDeviceId</a-button>
    <a-divider></a-divider>

    方法：
    IAM.getDeviceId(): string（获取设备ID）
  </a-typography-paragraph>

  <a-typography-paragraph>
    <JsonEditorVue v-model:modelValue="deviceId"></JsonEditorVue>
  </a-typography-paragraph>
</template>

<script setup>
import { ref } from 'vue'

import { IAM } from '../../utils/iamUtils'

const deviceId = ref('')

const getDeviceId = () => {
  deviceId.value = IAM.getDeviceId()
}

</script>
