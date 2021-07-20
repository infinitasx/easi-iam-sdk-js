<template>
  <callback-loading/>
</template>

<script lang="ts">
import Oidc from 'oidc-client'
import { defineComponent } from 'vue'
import { message } from 'ant-design-vue'
import CallbackLoading from '../components/callbackLoading.vue'

/**
 * code 换 token的中转页面
 */

export default defineComponent({
  name: 'Callback',
  components: {
    CallbackLoading
  },
  props: {
    // 登录成功后，主页url
    homePageUrl: {
      type: String
    }
  },
  setup (props) {
    const mgr = new Oidc.UserManager({
      userStore: new (Oidc as any).WebStorageStateStore(),
      loadUserInfo: true,
      filterProtocolClaims: true,
      response_mode: 'query'
    })

    // code ==》 token
    mgr
      .signinRedirectCallback()
      .then(() => {
        window.location.href = props.homePageUrl || '/'
      })
      .catch(() => {
        message.error('获取token失败！')
      })
  }
})
</script>
