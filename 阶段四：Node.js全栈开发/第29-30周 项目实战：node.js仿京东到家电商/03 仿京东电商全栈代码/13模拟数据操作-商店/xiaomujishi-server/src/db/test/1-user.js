/**
 * @description 用户数据操作
 * @author 双越老师
 */
const User = require('../../models/User')

!(async() => {
    //注册:创建一个新的用户
    // await User.create({
    //     username: 'zhangsan',
    //     password: '123'
    // })

    //再建一个新的用户
    // await User.create({
    //     username: '186999888',
    //     password: '123'
    // })

    // 登录：查询单个用户
    const zhansgan = await User.findOne({
        username: 'zhangsan',
        password: '123'
    })
    console.log('zhangsan', zhangsan)
})()