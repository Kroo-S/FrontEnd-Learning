// Koa2 操作 cookie

const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {

    // 设置 cookie
    ctx.cookies.set('a', '100')

    // 获取 cookie
    console.log('cookie is', ctx.cookies.get('a'))

    // 结构化，koa2 已经做好了

    ctx.body = 'cookie test by Koa2'
})

app.listen(3000)