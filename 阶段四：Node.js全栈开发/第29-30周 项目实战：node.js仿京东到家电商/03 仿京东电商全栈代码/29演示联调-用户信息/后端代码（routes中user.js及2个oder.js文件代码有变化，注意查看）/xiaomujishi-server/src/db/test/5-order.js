/**
 * @description 订单数据操作
 * @author 双越老师
 */

const Order = require('../../models/Order')
const Product = require('../../models/Product')
const Address = require('../../models/Address')


!(async () => {

    //创建订单
    const requestBody = {
        addressId: '6163febaf62ca535011e16e0',
        shopId: '6163fefabc9cb69351b8750d',
        shopName: '沃尔玛',
        isCanceled: false, //订单是否被取消
        products: [
            {
                id: '6163ffdd5fe5c3ab9d7afe0d',
                num: 3 //购买数量
            },
            {
                id: '6163ffdd5fe5c3ab9d7afe10',
                num: 5 //购买数量
            }
        ]
    }
    // 获取 address
    const address = await Address.findById(requestBody.addressId)

    // 获取商品列表
    const pIds = requestBody.products.map(p => p.id) //['商品1 id'],['商品2 id']
    const productList = await Product.find({
        shopId: requestBody.shopId, //沃尔玛的商品
        _id: {
            $in: pIds
        }
    })
    // console.log(pIds)    
    // console.log(productList)
    //整合订单购买数量
    const productListWidthSales = productList.map(p => {
        // 商品 id
        const id = p._id.toString()

        // 找到商品的购买数量
        const filterProducts = requestBody.products.filter(item => item.id === id)
        if (filterProducts.length === 0) {
            // 没有找到匹配的数量，报错
            throw new Error('未找到匹配的销量数据')
        }

        return {
            orderSales: filterProducts[0].num, // 销量
            // product: p,
            product: {
                shopId: p.shopId,
                name: p.name,
                imgUrl: p.imgUrl,
                sales: p.sales,
                price: p.price,
                oldPrice: p.oldPrice
            }
        }
    })
    // console.log(productListWidthSales)
    // 创建订单
    await Order.create({
        username: 'zhangsan',//已添加
        shopId:requestBody.shopId,//已添加
        shopName:requestBody.shopName,//已添加
        isCanceled:requestBody.isCanceled,//已添加
        products:productListWidthSales, 
        // address
        address: {
            username: address.username,
            city: address.city,
            department: address.department,
            houseNumber: address.houseNumber,
            name: address.name,
            phone: address.phone
        },
    })
    // console.log(address)
})()