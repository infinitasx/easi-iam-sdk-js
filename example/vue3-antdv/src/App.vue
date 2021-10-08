<template>
  <a-config-provider :locale="zhCN">
    <div class="box">
      <a-spin :spinning="spinning">
        <div class="nav">
          <div>
            用户名：{{userInfo?.name}}
          </div>
          <a-button @click="logoutHandler">退出登录</a-button>
        </div>
        <router-view/>
      </a-spin>
    </div>
  </a-config-provider>
</template>

<script setup>
import { IAM } from '@/utils/iamUtils'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

import zhCN from 'ant-design-vue/es/locale/zh_CN'

const store = useStore()
const spinning = ref(false)

const userInfo = computed(() => {
  return store.state.userInfo
})

const logoutHandler = () => {
  const b = window.confirm('您确定退出登录吗？')
  if (b) {
    spinning.value = true
    IAM.signOut({
      logoutBeforeCallback () {
        alert('马上就要退出了，别激动！')
      },
      logoutSuccessCallback () {
        alert('退出登录成功！')
      },
      logoutErrorCallback () {
        alert('退出登录错误的回调')
      }
    })
  }
}

</script>

<style lang="scss">
.box{
  height: 100vh;
  width: 1000px;
  margin: 0 auto;
  overflow: auto;
}

.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
