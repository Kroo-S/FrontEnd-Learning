Page({
  data: {
    showIcon: true,
    swiperList: [{
      imgUrl: '//img2.mukewang.com/5dce83ec082b5e1209000300.jpg' 
    },{
      imgUrl: '//img4.mukewang.com/5eece0c6091fb1d718000600.png' 
    },{
      imgUrl: '//img2.mukewang.com/5e6391c909a34be518000600.png' 
    }],
    courses: [{
      imgUrl: 'https://img1.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
      title: 'Vue2.5开发去哪儿网App 从零基础入门到实战项目',
      promotion: false,
      price: 266,
      level: '中级',
      sales: 8422
    },{
      imgUrl: 'https://img2.mukewang.com/szimg/5f1936e0086cc1ea06000338.jpg',
      title: 'Activiti7精讲+Java通用型工作流开发实战',
      promotion: true,
      price: 298,
      notice: '限时优惠',
      level: '初级',
      sales: 131
    },{
      imgUrl: 'https://img2.mukewang.com/szimg/5e26a9f909ef95b512000676.png',
      title: '2020 重学C++ 重构你的C++知识体系',
      promotion: false,
      price: 198,
      level: '中级',
      sales: 1336
    },{
      imgUrl: 'https://img2.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
      title: '全面系统Python3.8入门+进阶  (程序员必备第二语言)',
      promotion: false,
      price: 198,
      level: '初级',
      sales: 11826
    },{
      imgUrl: 'https://img1.mukewang.com/szimg/5e3cfea008e9a61b06000338.jpg',
      title: '前端框架及项目面试 聚焦Vue/React/Webpack',
      promotion: false,
      price: 399,
      level: '中级',
      sales: 1401
    }]
  },
  handleInputChange(e) {
    const value = e.detail.value;
    this.setData({showIcon: value? false: true})
  }
})