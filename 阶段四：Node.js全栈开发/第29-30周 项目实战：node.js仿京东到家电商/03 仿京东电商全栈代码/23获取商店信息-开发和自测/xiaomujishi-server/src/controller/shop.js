/**
 * @description shop controller
 * @author 双越老师
 */

const Shop = require('../models/Shop')


/**
 * 获取商店列表（热门商店） 
 */
async function getHotList() {
    const list = await Shop.find().sort({ _id: -1 }) // 逆序
    return list
}

/**
 * 获取商店信息
 * @param {string} id id
 */
async function getShopInfo(id) {
    const shop = await Shop.findById(id)
    return shop
}
// 获取商店的商品

module.exports = {
    getHotList,
    getShopInfo
}
