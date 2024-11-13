// Koa2 操作 cookie

const Koa = require('koa')
const app = new Koa()

// 模拟 session
const SESSION_DATA = {
    '123': {
        user: 'zhangsan',
        age: 20
    },
    '456': {
        user: 'lisi'
    },
    '789': {
        user: 'shuangyue'
    }
}

app.use(async (ctx) => {

    // // 设置 cookie
    // ctx.cookies.set('a', '100')

    // // 获取 cookie
    // console.log('cookie is', ctx.cookies.get('a'))

    // // 结构化，koa2 已经做好了

    // 加入用户登录成功，服务端设置 cookie （userId ，不能泄露用户信息）
    ctx.cookies.set('userId', '123')

    // 其他接口，获取 cookie
    const userId = ctx.cookies.get('userId')
    const userInfo = SESSION_DATA[userId]
    userInfo.user // 用户名

    ctx.body = 'cookie test by Koa2'
})

app.listen(3000)
