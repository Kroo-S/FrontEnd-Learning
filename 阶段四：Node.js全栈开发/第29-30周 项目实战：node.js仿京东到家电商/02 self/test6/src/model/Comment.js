// 留言的模型

const mongoose = require("../db/db")

const CommentSchema = mongoose.Schema({
    content:{
        type:String,
        required:true   //必需
    },
    username:String
})

const Comment = mongoose.model('comment',CommentSchema)

module.exports = Comment