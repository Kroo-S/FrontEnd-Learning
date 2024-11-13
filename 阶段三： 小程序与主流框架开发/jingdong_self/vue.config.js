const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
//   devServer:{
//     port, //端口号就是自己设置的值
//     public: require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[0]][1].address + ':' + port //设置访问ip端口
// }

})
// module.exports = { 
//   devServer: {
//     public:'0.0.0.0:8080',
//     hot:true,
//     disableHostCheck:true,
//   }

