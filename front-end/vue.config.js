const { defineConfig } = require('@vue/cli-service')

// 处理文件和目录路径的工具
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,

  // 关闭eslint
  lintOnSave: false,

  devServer: {
    port: 3000
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 设置需要引入less样式的文件
      // _dirname为当前项目的绝对路径。path.join方法自动拼接路径，会识别./
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
})
