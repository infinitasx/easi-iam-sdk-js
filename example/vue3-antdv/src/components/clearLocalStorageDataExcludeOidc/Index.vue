<template>
  <a-typography-paragraph>
    方法：
    IAM.clearLocalStorageDataExcludeOidc(excludeKey?: string[])
    <br>
    注意：默认排除'oidc.user:'、'IAM:'、'EASI:'、'SELF:'开头的localStorage的数据
    <br>
    <br>
    <a-space>
      <a-button @click="randomAddDataHandler">随机添加数据</a-button>
      <a-button @click="addKeyDataHandler">添加Key的数据</a-button>
    </a-space>
    <br>
    <br>
    调用：
    <a-space>
      <a-button @click="clearAll">clearLocalStorageDataExcludeOidc()</a-button>
      <a-button @click="clearExcludeKeyData">clearLocalStorageDataExcludeOidc(['Key'])</a-button>
    </a-space>
    <a-divider></a-divider>

    <div>
      <p>
        已有的数据：
      </p>
      <div>
        <a-table bordered size="small" :pagination="false" :dataSource="objList">
          <a-table-column width="400px" title="key" key="key" data-index="key">
            <template #default="{record}">
              <template v-if="keysList.some(item=>record.key.includes(item))">
                <span>{{ record.key }}</span>
              </template>
              <template v-else>
                <span style="color:red">{{ record.key }}</span>
              </template>
            </template>
          </a-table-column>
          <a-table-column width="400px" title="value" key="value" data-index="value"></a-table-column>
        </a-table>
      </div>
    </div>
  </a-typography-paragraph>
</template>

<script setup>
import { ref } from 'vue'
import { IAM } from '../../utils/iamUtils'

const objList = ref([])

const keysList = ['oidc.user:', 'IAM:', 'EASI:', 'SELF:']

const getData = () => {
  objList.value = []
  const index = localStorage.length
  for (let i = 0; i < index; i++) {
    const key = localStorage.key(i)
    objList.value.unshift({
      key,
      value: localStorage.getItem(key)
    })
  }
}

// 获取已有的数据
getData()

// 随机添加数据
const randomAddDataHandler = () => {
  localStorage.setItem('a-' + (Math.random() + '').slice(-1), Math.random())
  getData()
}

// 添加self数据
const addKeyDataHandler = () => {
  localStorage.setItem('Key', Math.random())
  getData()
}

// 删除所有数据
const clearAll = () => {
  IAM.clearLocalStorageDataExcludeOidc()
  getData()
}

const clearExcludeKeyData = () => {
  IAM.clearLocalStorageDataExcludeOidc(['Key'])
  getData()
}

</script>
