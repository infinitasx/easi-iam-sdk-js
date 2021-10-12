<template>
  <a-typography-paragraph>
    方法：
    <br>
    IAM.addEveryDayLoginListener() 添加每日登录约束校验
    <br>
    IAM.removeEveryDayLoginListener() 去除每日登录约束校验
    <br>
    <a-button @click="updateLoginTime">修改保存的年月日登录时间戳</a-button>
    <br>

    <br>
    调用：
    <a-space>
      <a-button @click="addEveryDayLoginListener">addEveryDayLoginListener</a-button>
      <a-button @click="removeEveryDayLoginListener">removeEveryDayLoginListener</a-button>
    </a-space>
  </a-typography-paragraph>
</template>

<script setup>
import { IAM } from '../../utils/iamUtils'

const updateLoginTime = () => {
  const loginTime = Number(localStorage.getItem('IAM:last-login'))
  localStorage.setItem('IAM:last-login', loginTime - 24 * 60 * 60 * 1000)
}

const addEveryDayLoginListener = () => {
  IAM.addEveryDayLoginListener()
}

const removeEveryDayLoginListener = () => {
  IAM.removeEveryDayLoginListener()
}
</script>
