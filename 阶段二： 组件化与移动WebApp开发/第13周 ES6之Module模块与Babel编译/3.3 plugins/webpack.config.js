const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode:'development',
  
  //1. 单入口：
  // entry:{
  //   index:'./src/index.js'
  // },


  //2. 多入口
  entry:{
    index:'./src/index.js',
    search:'./src/search.js'
  },


  output:{
    path:path.resolve(__dirname,'dist'),    //这里是两个下划线！！！
    filename:'[name].js'
  },


  plugins:[
    
    // 1. 单入口：
    // new HtmlWebpackPlugin({   //实例化一下
    //   template:'./3.3 plugins.html'
    // })

    //2. 多入口
    new HtmlWebpackPlugin({
      template:'./index.html',  //模版文件，不是dist里面的
      filename:'index.html',     //最终命名
      chunks:['index'],          //指定入口文件引入index.js

      minify:{     //删除插件
        //删除index.html中的注释
        removeComments:true,

        //删除index.html中的空格
        collapseWhitespace:true,

        //删除各种html标签属性值的双引号
        removeAttributeQuotes:true
      }

    }),

    new HtmlWebpackPlugin({
      template:'./search.html',
      filename:'search.html',
      chunks:['search'],      //指定入口文件引入search.js

      minify:{     //删除插件
        //删除index.html中的注释
        removeComments:true,

        //删除index.html中的空格
        collapseWhitespace:true,

        //删除各种html标签属性值的双引号
        removeAttributeQuotes:true
      }
    })

  ]
};