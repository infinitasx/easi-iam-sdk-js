<template>
  <a-typography-paragraph>
    IAM.getIAMHomeUrl()
    <br>
    <a-button @click="getIAMHomeUrl">getIAMHomeUrl</a-button>
  </a-typography-paragraph>

  <a-typography-paragraph>
    当前环境：{{env}}
    <JsonEditorVue v-model:modelValue="url"></JsonEditorVue>
  </a-typography-paragraph>
</template>

<script setup>
import { ref } from 'vue'

import { IAM } from '../../utils/iamUtils'

const url = ref('')

const env = IAM.getCurrentEnv()

const getIAMHomeUrl = () => {
  url.value = IAM.getIAMHomeUrl()
}
</script>

<style scoped>

</style>
