<template>
  <a-typography-paragraph>
    方法：IAM.getUserInfo()
    <br>
    调用：<a-button @click="getUserInfo">getUserInfo</a-button>
  </a-typography-paragraph>

  <a-typography-paragraph>
    {{loading ? 'loading...':'结果：'}}
    <JsonEditorVue v-model:modelValue="userInfo"></JsonEditorVue>
  </a-typography-paragraph>
  <a-divider></a-divider>
</template>

<script setup>
import { ref } from 'vue'

import { IAM } from '../../utils/iamUtils'

const userInfo = ref('')
const loading = ref(false)

const getUserInfo = () => {
  loading.value = true
  IAM.getUserInfo().then(res => {
    userInfo.value = res
  }).finally(() => {
    loading.value = false
  })
}
</script>

<style scoped>

</style>
