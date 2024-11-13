const router = require('koa-router')()
const { register, login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-module/index')

router.prefix('/api/user')

// router.get('/', function(ctx, next) {
//     ctx.body = 'this is a users response!'
// })

// router.get('/bar', function(ctx, next) {
//     ctx.body = 'this is a users/bar response'
// })
router.post('/register', async function (ctx, next) {
    const { username, password } = ctx.request.body;

    try {
        const newUser = await register(username, password);
        // 返回成功
        // ctx.body = {
        //     errno: 0,
        //     data: newUser //多返回一个信息，防止前端有需求变动，再来找后端修改代码
        // }
        ctx.body = new SuccessModel(newUser)
    } catch (ex) {
        console.error(ex);
        // 返回失败
        // ctx.body = {
        //     errno: 10001,
        //     message: `注册失败 - ${ex.message}`
        // }
        ctx.body = new ErrorModel(10001, `注册失败 - ${ex.message}`)
    }
});

//登录 
router.post('/login', async function (ctx, next) {
    const { username, password } = ctx.request.body

    // 查询单个用户（登录验证）
    const res = await login(username, password)

    if (res) {
        // 验证成功，设置 session.userInfo
        ctx.session.userInfo = { username }
        // 登录成功
        ctx.body = new SuccessModel()
    } else {
        // 登录失败
        ctx.body = new ErrorModel(10002, `登录验证失败`)
    }
});
module.exports = router