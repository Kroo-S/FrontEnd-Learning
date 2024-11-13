/**
 * @description User Model
 * @author 双越老师
 */

const momgoose = require('../db/db')

const Schema = momgoose.Schema({
    username: {
        type: String,
        require: true, //必需
        unique: true, //唯一，不可重复
    },
    password: String
}, { timestamps: true })

const User = momgoose.model('user', Schema)

module.exports = User