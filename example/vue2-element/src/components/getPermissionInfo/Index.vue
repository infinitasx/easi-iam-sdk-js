<template>
  <div>
    IAM.getPermissionsData()
    <br>
    <el-button @click="getPermissionInfo">getAuthorization</el-button>

    <div>
      {{loading ? 'loading...':'结果：'}}
      <JsonEditorVue :modelValue.sync="permissionInfo"></JsonEditorVue>
    </div>
  </div>

</template>

<script>
import { IAM } from '../../utils/iam'

export default {
  data () {
    return {
      permissionInfo: '',
      loading: ''
    }
  },
  methods: {
    getPermissionInfo () {
      const currentObj = this.$store.state.userInfo.apps.find(item => {
        return item.application_id === 'iam'
      })
      const scopeId = currentObj.scopes[0]?.id
      this.loading = true
      IAM.getPermissionsData({
        scopeId
      }).then(res => {
        this.permissionInfo = res
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
