//webpack的所有配置，都要放到这个文件中

const path = require('path');

module.exports = {

  mode:'development',
  
  //1. 单入口：
  //entry: './src/index.js',    //等价于下面的多入口形式

  //2. 多入口：
  // entry:{
  //   main:'./src/index.js',
  //   search:'./src/search.js'  //搜索入口（举例）
  // },

  //1. 单入口对应的  出口：
  // output: {
  //   path: path.resolve(__dirname, 'dist'),//通过这个方法可以得到一个绝对路径
  //   filename: 'bundle.js',      //创建一个bundle.js的文件
  // },

  //2. 多入口对应的  出口：
  // output: {
  //   path: path.resolve(__dirname, 'dist'),//通过这个方法可以得到一个绝对路径
  //   filename: '[name].js',      //动态输出名，创建多个文件文件，对应入口的名称：main、search
  // },

  entry:{
    index:'./src/index.js'
  },

  output:{
    path:path.resolve(__dirname,'dist'),    //这里是两个下划线！！！
    filename:'[name].js'
  },

  module:{  //module是模块的意思，后面是一个对象
    rules:[
      //不同的loader放在不同的对象中
      {
        test:/\.js$/,
        exclude:/node_modules/,   //防止工作量大，排除在node_modules文件中的查找
        loader:'babel-loader'     //用来连通webpack和babel
      }
    ]
  }





};