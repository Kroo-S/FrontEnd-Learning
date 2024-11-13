const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// 模拟登录（为了使用中间件）
app.use(async (ctx, next) => {
  const query = ctx.query
  if (query.user === 'zhangsan') {
    // 模拟登录成功
    await next() // 执行下一步中间件
  } else {
    // 模拟登录失败
    ctx.body = '请登录'
  }
})
// app.use(loginCheck) // 全部的路由，都要校验



// routes 注册理由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comments.routes(), comments.allowedMethods())
//allowedMethods() 对404 或者返回是空的情况，的一种补充


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
