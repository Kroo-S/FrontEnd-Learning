const router = require('koa-router')()
    //const { User } = require('../db/model')

router.prefix('/users') // 前缀

router.get('/', function(ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
});
// 模拟登录
router.get('/login-mock', async(ctx, next) => {
    let str = ''
    const query = ctx.query // url 参数，querystring
    if (query.username) {
        // 模拟登录成功
        ctx.session.userInfo = {
            username: query.username
        }
        str = 'login ok'
    } else {
        // 模拟登录失败，不用处理 session
        str = 'login failed'
    }

    ctx.body = str
});

//模拟登录验证
router.get('/login-check-mock', async(ctx, next) => {
    ctx.body = ctx.session.userInfo || {}
});

module.exports = router