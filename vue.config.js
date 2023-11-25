/*
 * @Author: wjs
 * @Date: 2022-03-21 14:20:03
 * @Description: 配置文件
 * @FilePath: \ele-customer\vue.config.js
 * 
 */
const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // transpileDependencies: ["*"] ,
  transpileDependencies: ["crypto-js", 'resize-detector',"@vant","vue-puzzle-verification","vue-socket.io"],
  publicPath: process.env.ENV === 'test' ? '/ele/' : '/',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
  },
  chainWebpack(config) {
    config.plugin('html')
      .tap(args => {
        args[0].title = "电子保函系统";
        return args;
      })
  }
}
