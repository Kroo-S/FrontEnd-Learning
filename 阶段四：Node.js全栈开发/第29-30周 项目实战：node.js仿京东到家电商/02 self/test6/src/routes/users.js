const router = require('koa-router')()

//引入register
const { register } = require('../controller/user')

router.prefix('/users')

//2. 登陆
router.post('/login', async (ctx, next) => {
  //获取登陆信息
  const { username, password } = ctx.request.body   //从发送的body中得到username、password

  //验证登陆在controller中进行
  const res = await login(username, password)
  if (res) {  //登陆成功

    // 设置session
    ctx.session.userInfo={
      username
    }

    //返回登陆成功
    ctx.body = {
      errno: 0
    }
  } else {    //登陆失败
    ctx.body = {
      errno: -1,
      message: '登陆验证失败'
    }
  }



})



//1. 注册
router.post('/register', async (ctx, next) => {

  //获取注册信息
  const userInfo = ctx.request.body

  //提交注册
  try {
    const newUser = await register(userInfo)  //调用controller

    //成功
    ctx.body = {
      errno: 0,
      data: newUser
    }
  } catch (ex) {

    //失败
    console.error('注册失败', ex)
    ctx.body = {
      errno: -1,
      message: '注册失败'
    }
  }

})

module.exports = router
