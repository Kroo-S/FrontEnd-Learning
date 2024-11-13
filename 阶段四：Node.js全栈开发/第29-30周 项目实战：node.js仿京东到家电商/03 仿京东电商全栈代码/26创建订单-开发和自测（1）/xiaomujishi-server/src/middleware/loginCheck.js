/**
 * @description 登录验证中间件
 * @author 双越讲师
 */

 const { ErrorModel } = require('../res-module/index')

 module.exports = async (ctx, next) => {
     const session = ctx.session
     if (session && session.userInfo) {
         await next()
         return
     }
     ctx.body = new ErrorModel(10003, '登录验证失败')
 }
 

// module.exports = async (ctx, next) => {
//     const session = ctx.session
//     if (session && session.userInfo) {
//         await next()
//         return
//     }
//     ctx.body = {
//         errno:-1,
//         message:'登录验证失败'
//     }
// }