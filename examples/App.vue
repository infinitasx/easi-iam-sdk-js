<template>
  <div class="app">
    hello world
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    const authInfo = ref()
    const userInfo = ref('')
    return {
      authInfo,
      userInfo
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.app{
  width: 1000px;
  margin:0 auto;
}
</style>
