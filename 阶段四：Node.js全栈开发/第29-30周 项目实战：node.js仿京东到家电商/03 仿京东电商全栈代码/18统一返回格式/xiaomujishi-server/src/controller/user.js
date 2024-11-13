/**
 * @description user controller
 * @author 双越老师
 */

const User = require('../models/User');

/**
 * 注册
 * @param {string} username 用户名
 * @param {string} password 密码
 */

async function register(username, password) {
    // 保存到数据库
    const newUser = await User.create({ username, password })
    return newUser
}

module.exports = {
    register
}