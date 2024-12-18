/*
 * @Author: wjs
 * @Date: 2022-03-21 14:20:03
 * @Description: 配置文件
 * @FilePath: \ele-customer\vue.config.js
 * 
 */
const path = require('path')
const webpack = require('webpack')
const WebpackObfuscator = require("webpack-obfuscator")
const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

//静态资源目录
function fnStatic() {
  if (process.env.VUE_APP_ENV === 'test') {
    return "/test/"
  } else if (process.env.VUE_APP_ENV === 'build') {
    return "/build/"
  } else {
    return "/"
  }
}

module.exports = {
  // transpileDependencies: ["*"] ,
  // transpileDependencies: ["crypto-js", 'resize-detector',"@vant","vue-puzzle-verification","vue-socket.io"],
  publicPath: fnStatic(),
  productionSourceMap: false,
  configureWebpack: () => {
    const res = {
      resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      },
      plugins: [
        // new webpack.ProvidePlugin({
        //   $: "jquery",
        //   jQuery: "jquery",
        //   "windows.jQuery": "jquery"
        // }),
        
        // 使用gzip解压缩静态文件
        new CompressionPlugin({
          cache: false, // 不启用文件缓存
          test: /\.(js|css|html)?$/i, // 压缩文件格式
          filename: '[path].gz[query]', // 压缩后的文件名
          algorithm: 'gzip', // 使用gzip压缩
          minRatio: 0.8 // 压缩率小于1才会压缩
        })
      ],
    };
    const IS_PROD = ["production", "test", "uat"].includes(process.env.VUE_APP_ENV);
    if (false) {
      res.plugins.push(
        new WebpackObfuscator({
          rotateUnicodeArray: true,
          reservedStrings: [" "],
          unicodeEscapeSequence: true
        }, [])
      );
    }

    return res;
  },
  /////////////////////////////
  // configureWebpack: {
  //   resolve: {
  //     extensions: ['.js', '.json', '.vue'],
  //     alias: {
  //       '@': path.resolve(__dirname, './src')
  //     }
  //   },
  // },
  chainWebpack(config) {
    config.plugin('html')
      .tap(args => {
        //网站的tabs的标题
        args[0].title = "电子保函系统";
        return args;
      })
  }
}