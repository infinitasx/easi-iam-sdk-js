<template>
  <div>
    方法：
    IAM.clearLocalStorageDataExcludeOidc(excludeKey?: string[])
    <br>
    注意：默认排除'oidc.user:'、'IAM:'、'EASI:'、'SELF:'开头的localStorage的数据
    <br>
    <br>
    <el-button @click="randomAddDataHandler">随机添加数据</el-button>
    &nbsp;
    <el-button @click="addKeyDataHandler">添加Key的数据</el-button>
    <br>
    <br>
    调用：
    <el-button @click="clearAll">clearLocalStorageDataExcludeOidc()</el-button>
    &nbsp;
    <el-button @click="clearExcludeKeyData">clearLocalStorageDataExcludeOidc(['Key'])</el-button>
    <el-divider></el-divider>

    <div>
      <p>
        已有的数据：
      </p>
      <div>
        <el-table bordered size="mini" :data="objList">
          <el-table-column width="400px" label="key" prop="key">
            <template scope="scope">
              <template v-if="keysList.some(item=>scope.row.key.includes(item))">
                <span>{{ scope.row.key }}</span>
              </template>
              <template v-else>
                <span style="color:red">{{ scope.row.key }}</span>
              </template>
            </template>
          </el-table-column>
          <el-table-column width="400px" label="value" prop="value"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { IAM } from '../../utils/iam'

export default {
  name: 'ClearLocalStorageDataExcludeOidc',
  data () {
    return {
      objList: [],
      keysList: ['oidc.user:', 'IAM:', 'EASI:', 'SELF:']
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      const list = []
      const index = localStorage.length
      for (let i = 0; i < index; i++) {
        const key = localStorage.key(i)
        list.unshift({
          key,
          value: localStorage.getItem(key)
        })
      }
      this.$set(this, 'objList', list)
    },
    // 随机添加数据
    randomAddDataHandler () {
      localStorage.setItem('a-' + (Math.random() + '').slice(-1), Math.random())
      this.getData()
    },
    // 添加self数据
    addKeyDataHandler () {
      localStorage.setItem('Key', Math.random())
      this.getData()
    },
    // 删除所有数据
    clearAll () {
      IAM.clearLocalStorageDataExcludeOidc()
      this.getData()
    },
    clearExcludeKeyData () {
      IAM.clearLocalStorageDataExcludeOidc(['Key'])
      this.getData()
    }
  }
}
</script>
