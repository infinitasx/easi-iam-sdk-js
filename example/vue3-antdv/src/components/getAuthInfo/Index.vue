<template>
  <a-typography-paragraph>
    方法：
    <br>
    1、IAM.getAuthInfo() 异步
    <br>
    2、IAM.getAuthInfoSync() 同步
    <br>
    调用：
    <a-button @click="getAuthInfoSync">getAuthInfoSync</a-button>
    <a-divider></a-divider>

    方法：
    IAM.getAuthorization()（只获取token 串儿）
    <br>
    调用：
    <a-button @click="getAuthorization">getAuthorization</a-button>
  </a-typography-paragraph>

  <a-typography-paragraph>
    {{loading ? 'loading...':'结果：'}}
    <JsonEditorVue v-model:modelValue="authInfo"></JsonEditorVue>
  </a-typography-paragraph>
</template>

<script setup>
import { ref } from 'vue'

import { IAM } from '../../utils/iamUtils'

const authInfo = ref('')
const loading = ref(false)

const getAuthInfoSync = () => {
  loading.value = true
  IAM.getAuthInfo().then(res => {
    authInfo.value = res
  }).finally(() => {
    loading.value = false
  })
}

const getAuthorization = () => {
  authInfo.value = IAM.getAuthorization()
}
</script>

<style scoped>

</style>
