// User model  用户的模型

const mongoose = require("../db/db")

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,   //必需
        unique:true,    //唯一，不可重复
    },
    password:String,
    age:Number,
    city:String,
    gender:{
        type:Number,
        default:0   //0 保密, 1 男, 2 女
    }
},{timestamps: true // 时间戳，自动添加文档的创建时间、更新时间
})

const User = mongoose.model('user',UserSchema)

module.exports = User