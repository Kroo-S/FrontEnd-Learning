# 数据模型设计

列举各个数据模型的示例，写明属性

## 用户

```js
{
    _id:'xxx',
    username:'18677778888',
    password:'123'
}
```

## 地址

```js
{
    _id:'xxx',
    username:'18677778888',//就和用户产生关联
    city:'北京',
    department:'xxx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'18655566666'
}
```

## 商店

```js
{
    _id:'xxxxx',
    name:'沃尔玛',
    imgUrl:'xxx.png',
    sales:10000,
    expressLimt:0,
    expressPrice:5,
    slogan:'红色的宣传标语'
}
```

## 商品

```js
{
    _id:'xxx',
    shopId:'xxxxx' //对应商店的_id
    name:'番茄',
    imgUrl:'xxx.png',
    sales:10,
    price:33.6,
    oldPrice:40.6,
    tabs:['all','seckill'] //左侧 tab 类型
}
```

## 订单

订单具有特殊性，待定