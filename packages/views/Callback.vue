<template>
  <callback-loading/>
</template>

<script>
import Oidc from 'oidc-client'
import CallbackLoading from '../components/callbackLoading.vue'
import {getLang} from "../utils/i18n";
import langText from '../lang'
import {getIsDefaultUI,getMessage} from "../utils/UI";

/**
 * code 换 token的中转页面
 */


export default {
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
  created(){
    const mgr = new Oidc.UserManager({
      userStore: new Oidc.WebStorageStateStore(),
      loadUserInfo: true,
      filterProtocolClaims: true,
      response_mode: 'query'
    })

    // code ==》 token
    mgr
      .signinRedirectCallback()
      .then(() => {
        window.location.href = this.homePageUrl || '/'
      })
      .catch((err) => {
        getIsDefaultUI() ? getMessage().error(langText[getLang()]?.getTokenFailed)
          : getMessage()(langText[getLang()]?.getTokenFailed)
        throw err;
      })
  }
}
</script>
