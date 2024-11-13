// user controller

const User = require('../model/User')

//2. 登陆
async function login(username,password){
    const user = await User.findOne((username,password)=>{
        if(user!==null) return true     //  存在返回真
        else return false               //不存在返回假
    })



}


//1. 注册
async function register(userInfo = {}){

    //插入数据库
    const newUser = await User.create(userInfo)

    //返回注册的用户信息
    return newUser

}

module.exports = {
    register,
    login
}