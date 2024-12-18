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
const TimeStamp = new Date().getTime();
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
      // output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      //   filename: `js/[name].${TimeStamp}.js`,
      //   chunkFilename: `js/[name].${TimeStamp}.js`
      // },
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
        // new CompressionPlugin({
        //   cache: false, // 不启用文件缓存
        //   test: /\.(js|css|html)?$/i, // 压缩文件格式
        //   filename: '[path].gz[query]', // 压缩后的文件名
        //   algorithm: 'gzip', // 使用gzip压缩
        //   minRatio: 0.8 // 压缩率小于1才会压缩
        // })
      ],
    };
    const IS_PROD = ["production", "test", "uat"].includes(process.env.VUE_APP_ENV);
    if (false) {
      res.plugins.push(
        new WebpackObfuscator({
          // 压缩代码
          compact: true,
          // 里面很多参数，我都是用默认的，如果需要知道更多，可以参考下面的文章或者官网。
          rotateUnicodeArray: true,
          // 空格不进行加密，因为项目中有空格的时候，也会加密，则会影响展示，所以排除空格；
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