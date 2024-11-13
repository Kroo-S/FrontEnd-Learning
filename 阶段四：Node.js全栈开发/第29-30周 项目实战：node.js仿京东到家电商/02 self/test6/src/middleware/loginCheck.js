// 登陆验证中间件

async function loginCheck(ctx, next) {
    const session = ctx.session || {}
    const userInfo = session.userInfo
    if (userInfo && userInfo.username) {
        //登陆验证通过
        await next()
        return
    }

    //登陆验证失败
    ctx.body = {
        errno: -1,
        message: '用户尚未登陆'
    }
}

module.exports = loginCheck