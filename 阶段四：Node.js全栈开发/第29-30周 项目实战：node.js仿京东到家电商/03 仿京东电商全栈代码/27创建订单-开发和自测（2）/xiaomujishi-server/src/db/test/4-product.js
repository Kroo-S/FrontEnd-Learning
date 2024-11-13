/**
 * @description 商品数据操作
 * @author 双越老师
 */

const Product = require('../../models/Product')

!(async () => {
    // 创建
    await Product.create({
        shopId: '6163fefabc9cb69351b8750d', // 沃尔玛
        name: '葡萄',
        imgUrl: '/images/product/grape.jpg',
        sales: 100, // 月售多少
        price: 33, // 当前价格
        oldPrice: 36, // 原价
        tabs: ['all', 'seckill', 'fruit']
    })
    // 创建
    await Product.create({
        shopId: '6163fefabc9cb69351b8750d', // 沃尔玛
        name: '苹果',
        imgUrl: '/images/product/apple.jpeg',
        sales: 200, // 月售多少
        price: 25, // 当前价格
        oldPrice: 27, // 原价
        tabs: ['all', 'seckill', 'fruit']
    })
    // 创建
    await Product.create({
        shopId: '6163fefabc9cb69351b87510', // 山姆会员店
        name: '桃子',
        imgUrl: '/images/product/peach.jpg',
        sales: 50, // 月售多少
        price: 16, // 当前价格
        oldPrice: 19, // 原价
        tabs: ['all', 'seckill', 'fruit']
    })
    // 创建
    await Product.create({
        shopId: '6163fefabc9cb69351b87510', // 山姆会员店
        name: '西瓜',
        imgUrl: '/images/product/watermelon.jpg',
        sales: 180, // 月售多少
        price: 13, // 当前价格
        oldPrice: 15, // 原价
        tabs: ['all', 'seckill', 'fruit']
    })

    // 查询某个商店，某个tab的商品列表
    // const list = await Product.find({
    //     shopId: '6162b97e226bf13191c1207f'
    // })
    // const list = await Product.find({
    //     shopId: '6162b97e226bf13191c1207f', //沃尔玛
    //     tabs: {
    //         $in: 'seckill' // 秒杀
    //     }
    // })
    // console.log(list)
})()