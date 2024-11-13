// 使用 model 操作数据

const { User } = require('./model')

// 定义一个 async 的匿名函数，并执行。为了里面能用 await
!(async () => {
    // // 新增数据 - 1
    // const zhangsan = new User({
    //     username: 'zhangsan',
    //     password: 'abc',
    //     age: 20,
    //     city: 'beijing',
    //     gender: 1
    // })
    // zhangsan.save()

    // // 新增数据 - 2
    // const lisi = await User.create({
    //     username: 'lisi',
    //     password: '123',
    //     age: 23,
    //     city: 'shanghai'
    // })
    // console.log('lisi 创建完成', lisi)

    // // 查询列表数据，返回的是数组
    // const userList = await User.find({ username: 'zhangsan' })
    // const userList = await User.find().sort({ _id: -1 })
    // console.log('userList 查询结果', userList)

    // 查询单条数据，返回的对象
    const user = await User.findOne({ username: 'zhang' })
    console.log('user 查询结果', user)
})()
