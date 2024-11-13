Page({
  data: {
    showIcon: true
  },
  handleInputChange(e) {
    const value = e.detail.value;
    this.setData({showIcon: value? false: true})
  }
})