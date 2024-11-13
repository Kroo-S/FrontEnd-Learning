// nodejs 连接 mongodb
// 体会 nodejs 连接 mongodb 的能力，不会真正的用到路由上
// mongoose 对接路由的功能

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017' // 本地启动的 mongodb 服务
const dbName = 'comment1' // 数据库（留言板项目的数据库 ）

MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        console.error('mongodb 连接出错', err)
        return
    }
    console.log('mongodb 连接成功')

    // 切换数据库 database
    const db = client.db(dbName)

    // 切换到指定的集合 collection
    const userCollection = db.collection('users')

    // // 查询数据
    // userCollection.find().sort({ _id: -1 }).toArray((err, result) => {
    //     if (err) {
    //         console.error('查询数据出错', err)
    //         return
    //     }
    //     console.log('查询结果', result)
    // })

    // // 新增数据
    // userCollection.insertOne({
    //     username: 'shuangyue',
    //     password: 'abc',
    //     age: 30,
    //     city: 'beijing'
    // }, (err, result) => {
    //     if (err) {
    //         console.error('插入数据出错', err)
    //         return
    //     }
    //     console.log('插入后的返回结果', result.insertedCount, result.insertedId)
    // })

    // // 修改数据
    // userCollection.updateOne(
    //     { username: 'zhangsan' }, // 修改的条件
    //     { $set: { age: 21 , city: 'beijing'} }, // 修改的内容
    //     (err, result) => {
    //         if (err) {
    //             console.error('修改数据出错', err)
    //             return
    //         }
    //         console.log('修改后的返回结果', result.modifiedCount)
    //     }
    // )

    // 删除数据
    userCollection.deleteOne({ username: 'wangwu' }, (err, result) => {
        if (err) {
            console.error('删除数据出错', err)
            return
        }
        console.log('删除成功')
    })

    // 关闭
    // client.close()
})
