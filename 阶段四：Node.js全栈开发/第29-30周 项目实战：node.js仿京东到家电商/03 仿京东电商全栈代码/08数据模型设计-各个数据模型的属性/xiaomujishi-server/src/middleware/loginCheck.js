/**
 * @description 登录验证中间件
 * @author 双越讲师
 */
module.exports = async (ctx, next) => {
    const session = ctx.session
    if (session && session.userInfo) {
        await next()
        return
    }
    ctx.body = {
        errno:-1,
        message:'登录验证失败'
    }
}