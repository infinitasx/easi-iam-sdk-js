<template>
  <div>
    方法：
    <br>
    IAM.addEveryDayLoginListener() 添加每日登录约束校验
    <br>
    IAM.removeEveryDayLoginListener() 去除每日登录约束校验
    <br>
    <el-button @click="updateLoginTime">修改保存的年月日登录时间戳</el-button>
    <br>

    <br>
    调用：
    <el-button @click="addEveryDayLoginListener">addEveryDayLoginListener</el-button>
    <el-button @click="removeEveryDayLoginListener">removeEveryDayLoginListener</el-button>
  </div>
</template>

<script>
import { IAM } from '../../utils/iam'

export default {
  name: 'EveryDayLoginListener',
  methods: {
    updateLoginTime () {
      const loginTime = Number(localStorage.getItem('IAM:last-login'))
      localStorage.setItem('IAM:last-login', loginTime - 24 * 60 * 60 * 1000)
    },
    addEveryDayLoginListener () {
      IAM.addEveryDayLoginListener()
    },
    removeEveryDayLoginListener () {
      IAM.removeEveryDayLoginListener()
    }
  }
}
</script>

<style scoped>

</style>
