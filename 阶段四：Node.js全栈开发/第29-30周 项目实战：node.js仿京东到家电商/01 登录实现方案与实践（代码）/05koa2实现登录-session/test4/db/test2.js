// 使用 model 操作数据

const { User } = require('./model')

// 定义一个 async 的匿名函数，并执行。为了里面能用 await
!(async () => {
    // // 更新
    // const updateResult = await User.findOneAndUpdate(
    //     { username: 'zhangsan' }, // 条件
    //     { age: 30 }, // 更新的内容
    //     {
    //         new: true // 返回更新后的数据
    //     }
    // )
    // console.log('更新的返回结果', updateResult)

    // // 删除
    // const removeResult = await User.remove({ username: 'lisi' })
    // console.log('删除的返回结果', removeResult)
})()
