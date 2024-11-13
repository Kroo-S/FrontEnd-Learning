const router = require('koa-router')()
const { User } = require('../db/model')

router.prefix('/users') // 前缀

router.get('/', function(ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router