/**
 * @description 地址数据操作
 * @author 双越老师
 */
const Address = require('../../models/Address')

!(async() => {
    // 创建收货地址
    // await Address.create({
    //     username: 'zhangsan',
    //     city: '北京',
    //     department: 'xxx小区',
    //     houseNumber: '门牌号1',
    //     name: '张三',
    //     phone: '18677778888'
    // })

    // 再创建一个地址
    // await Address.create({
    //     username: 'zhangsan',
    //     city: '北京',
    //     department: 'yyy小区',
    //     houseNumber: '门牌号2',
    //     name: '张三',
    //     phone: '18632452342'
    // })

    // 获取收货地址列表（获取 zhangsan 的）
    // const addressList = await Address.find({
    //     username: 'zhangsan'
    // }).sort({
    //     updateAt: -1
    // })
    // console.log(addressList)

    //根据id获取单个收货地址
    // const id = '6162b2bd58f74f7168c7d3cf'
    // const address = await Address.findById(id)
    // console.log(address)

    // 更新收货地址
    const id = '6162b2bd58f74f7168c7d3cf'
    const newData = {
        username: 'zhangsan',
        city: '北京',
        department: 'yyy小区A',
        houseNumber: '门牌号2A',
        name: '张三A',
        phone: '18632451111'
    }
    const address = await Address.findOneAndUpdate({ _id: id, username: 'zhangsan' },
        newData, {
            new: true //返回更新之后的最新数据（默认是false，返回更新之前的数据）
        }
    )
    console.log(address)
})()