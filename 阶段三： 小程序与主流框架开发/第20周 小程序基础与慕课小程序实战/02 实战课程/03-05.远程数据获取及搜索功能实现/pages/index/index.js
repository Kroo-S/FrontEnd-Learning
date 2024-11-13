Page({
  data: {
    showIcon: true,
    swiperList: [],
    courses: [],
    searchList: null
  },
  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/d22601a7b7ca7289450964c221e93d19/weixin/api/getData',
      success:(res) => {
        const { data: { data } } = res;
        const { swiperList, courses } = data;
        this.setData({
          swiperList,
          courses
        })
      }
    })
  },
  handleInputChange(e) {
    const value = e.detail.value;
    let searchList = null;
    if(value) {
      searchList = this.data.courses.filter(item => item.title.indexOf(value) > -1)
    }
    this.setData({
      showIcon: value? false: true,
      searchList
    })
  }
})