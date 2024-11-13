/**
 * @description 商店数据操作
 * @author 双越老师
 */

const Shop = require('../../models/Shop')

// images/shop/sam.jpeg
// images/shop/wmt.jpeg

!(async() => {

    //创建两个商店
    // await Shop.create({
    //     name: '沃尔玛',
    //     imgUrl: 'images/shop/wmt.jpeg',
    //     sales: 10000,
    //     expressLimit: 0,
    //     expressPrice: 5,
    //     slogan: 'VIP尊享满89元减4元运费券'
    // })
    // await Shop.create({
    //     name: '山姆会员商店',
    //     imgUrl: 'images/shop/sam.jpeg',
    //     sales: 2000,
    //     expressLimit: 0,
    //     expressPrice: 5,
    //     slogan: '联合利华洗护满10减5'
    // })

    // 附近商店
    // const shopList = await Shop.find().sort({ _id: -1 })
    // console.log(shopList)

    // 获取商店详情
    const id = '6162b97e226bf13191c1207f'
    const shop = await Shop.findById(id)
    console.log(shop)
})()