/**
 * @description address controller
 * @author 双越老师
 */

const Address = require('../models/Address')

/**
 * 创建地址
 * @param {string} username 用户名
 * @param {Object} data 地址的详细信息
 */
async function createAddress(username, data) {
    const address = await Address.create({
        username, // 把 username 拼接上，因为前端传入的数据没有 username
        ...data
    })
    return address
}


module.exports = {
    createAddress
}
