const router = require('koa-router')()

router.prefix('/api')  //前缀

// 定义路由：模拟获取留言板列表
router.get('/list', async (ctx, next) => {
    const query = ctx.query // req 功能
    console.log('query', query)
    // ctx.body = 'api list' // res 功能
    ctx.body = {
        errno: 0,
        data: [
            { content: '留言1', user: '张三' },
            { content: '留言2', user: '李四' },
            { content: '留言3', user: '王二' }
        ]
    }
})

// 定义路由：模拟创建留言
router.post('/create', async (ctx) => {
    const body = ctx.request.body // request body
    console.log('body', body)
    // ctx.body="api create"
    ctx.body = {
        errno: 0,
        message: '成功'
    }
})

module.exports = router // 输出
