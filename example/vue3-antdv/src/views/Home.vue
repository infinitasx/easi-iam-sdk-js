<template>
  <div class="home">
    {{ environment }}
  </div>
</template>

<script setup>
import { IAM } from '../utils/iamUtils'

// 当前环境
const environment = IAM
</script>
