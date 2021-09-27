<template>
  <div class="box">
    <div class="nav">
      <a-menu :selectedKeys="['home']" mode="horizontal">
        <a-menu-item key="home">
          <router-link to="/home">
            api功能操作介绍
          </router-link>
        </a-menu-item>
        <a-menu-item @click="logoutHandler">
          退出登录
        </a-menu-item>
      </a-menu>
    </div>
    <router-view/>
  </div>
</template>

<script setup>
import { IAM } from '@/utils/iamUtils'

const logoutHandler = () => {
  const b = window.confirm('您确定退出登录吗？')
  if (b) {
    IAM.signOut()
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
</style>
