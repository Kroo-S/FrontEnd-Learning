const Koa = require('koa')
const app = new Koa()

// ctx 读音 context 上下文
app.use(async (ctx) => {
    ctx.body = 'hello world'
})

app.listen(3000) // web server 监听的 3000 端口
