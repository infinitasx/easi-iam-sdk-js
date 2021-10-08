<template>
  <a-typography-paragraph>
    IAM.getPermissionsData()
    <br>
    <a-button @click="getPermissionInfo">getAuthorization</a-button>
  </a-typography-paragraph>

  <a-typography-paragraph>
    {{loading ? 'loading...':'结果：'}}
    <JsonEditorVue v-model:modelValue="permissionInfo"></JsonEditorVue>
  </a-typography-paragraph>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

import { IAM } from '../../utils/iamUtils'

const store = useStore()
const permissionInfo = ref('')
const loading = ref(false)

const getPermissionInfo = () => {
  const currentObj = store.state.userInfo.apps.find(item => {
    return item.application_id === 'iam'
  })
  const scopeId = currentObj.scopes[0]?.id
  loading.value = true
  IAM.getPermissionsData({
    scopeId
  }).then(res => {
    permissionInfo.value = res
  }).finally(() => {
    loading.value = false
  })
}
</script>

<style scoped>

</style>
