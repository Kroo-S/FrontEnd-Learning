const router = require('koa-router')()
const { register } = require('../controller/user')

router.prefix('/api/user')

// router.get('/', function(ctx, next) {
//     ctx.body = 'this is a users response!'
// })

// router.get('/bar', function(ctx, next) {
//     ctx.body = 'this is a users/bar response'
// })
router.post('/register', async function(ctx, next) {
    const { username, password } = ctx.request.body;

    try {
        const newUser = await register(username, password);
        // 返回成功
        ctx.body = {
            errno: 0,
            data: newUser //多返回一个信息，防止前端有需求变动，再来找后端修改代码
        }
    } catch (ex) {
        console.error(ex);
        // 返回失败
        ctx.body = {
            errno: 10001,
            message: `注册失败 - ${ex.message}`
        }
    }
})

module.exports = router