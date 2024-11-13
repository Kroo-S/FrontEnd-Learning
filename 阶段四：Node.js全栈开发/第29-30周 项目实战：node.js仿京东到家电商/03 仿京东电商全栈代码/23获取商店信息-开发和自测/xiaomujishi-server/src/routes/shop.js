/**
 * @description shop router
 * @author 双越老师
 */
const router = require('koa-router')()

const { SuccessModel,ErrorModel } = require('../res-module/index')
const {
    getHotList,
    getShopInfo
} = require('../controller/shop')

router.prefix('/api/shop')

// 热门商店（首页商店列表）
router.get('/hot-list', async function(ctx, next) {
    const list = await getHotList()
    ctx.body = new SuccessModel(list)
})

// 根据 id 查询单个商店信息
router.get('/:id', async function(ctx, next) {
    const id = ctx.params.id // 商店 id
    const shop = await getShopInfo(id)
    ctx.body = new SuccessModel(shop)
})
// 获取商店的商品

module.exports = router
