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
    ],
    list:[],
    pages: 1,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
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
    this.onQuery(1);
  },

  changeItem: function (event) {
    console.log(event);
    var id = event.target.dataset.id;
    wx.navigateTo({
      url: `/pages/list/index?categoryId=${id}`
    })
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
    let pages = this.data.pages+1;
    this.onQuery(pages);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  showDetails: function(){
    wx.navigateTo({
      url: '/pages/details/index',
    })
  },

  onQuery: function (pages) {
    var pages = pages||1;
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('news').where({ //此处根据名字'news'绑定数据库集合
      _openid: this.data.openid
    }).skip((pages-1)*10).limit(10).get({ //skip limt进行分页操作
      success: res => {
        // this.setData({
        //   queryResult: JSON.stringify(res.data, null, 2)
        // })
        this.setData({
          list:this.data.list.concat(res.data)
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
})