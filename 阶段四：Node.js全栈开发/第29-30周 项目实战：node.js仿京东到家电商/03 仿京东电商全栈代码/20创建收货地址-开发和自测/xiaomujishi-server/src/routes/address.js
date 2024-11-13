/**
 * @description address router
 * @author 双越老师
 */
const router = require('koa-router')()

const { SuccessModel, ErrorModel } = require('../res-module/index')
const loginCheck = require('../middleware/loginCheck')
const { createAddress } = require('../controller/address')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/', loginCheck, async function (ctx, next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    const data = ctx.request.body || {} // 前端传来的数据

    // 创建数据
    try {
        const newAddress = await createAddress(username, data)
        ctx.body = new SuccessModel(newAddress)
    } catch (ex) {
        console.error(ex)
        // 返回失败
        ctx.body = new ErrorModel(10004, `创建地址失败`)
    }

})

// 获取收货地址列表

// 获取单个收货地址

// 更新收货地址

module.exports = router
