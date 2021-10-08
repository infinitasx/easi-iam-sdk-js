const path = require('path')// 引入path模块
function resolve (dir) {
  console.log(path.join(__dirname, dir))
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = {
  devServer: {
    port: 8091
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
  },
  configureWebpack: {
    externals: {
      'easi-iam-sdk-js': 'easiIamSdkJs',
      axios: 'axios'
    }
  }

}
