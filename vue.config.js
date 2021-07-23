/* eslint-disable */
const path = require('path')

const IS_PRO = process.env.NODE_ENV !== 'development'

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.ts', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryTarget: 'window',
    },
    externals: IS_PRO ? {
      vue: 'Vue',
      axios: 'axios',
      'oidc-client': 'Oidc',
      'ant-design-vue': 'antd',
      'ant-design-vue/dist/antd.css': 'antd',
    }: {}
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app');

    // @ 默认指向 examples 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .rule('ts')
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
