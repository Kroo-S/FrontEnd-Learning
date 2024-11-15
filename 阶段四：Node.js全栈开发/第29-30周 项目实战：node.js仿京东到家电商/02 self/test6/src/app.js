const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

//4-2项目开发 引入cors
const cors = require('koa2-cors')

//koa中封装的session引入
const session = require('koa-generic-session')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

//4-2 服务端支持跨域
app.use(cors({
  origin: "http://localhost:8080", //支持前端哪个域，可以跨域
  credentials: true    // 允许跨域的时候带着cookie
}))


// 配置session
app.keys = ['dssUII^*(*123123']
app.use(session({
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000   //一天
  }
}))




// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
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

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
