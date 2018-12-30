const app=getApp();
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    nav: [
      { id: 1, categoryName: '要闻'},
      { id: 2, categoryName: '政治' },
      { id: 3, categoryName: '经济' },
      { id: 4, categoryName: '体育' },
      { id: 5, categoryName: '娱乐' },
      { id: 6, categoryName: '音乐' },
      { id: 7, categoryName: '科技' },
      { id: 8, categoryName: '历史' },
      { id: 9, categoryName: '汽车' },
      { id: 10,categoryName: '直播' },
    ]
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var categoryId = options.categoryId;
    this.setData({categoryId});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})