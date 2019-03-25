const app=getApp();
const systemInfo = wx.getSystemInfoSync();
var windowHeight = systemInfo.windowHeight,
    windowWidth = systemInfo.windowWidth;
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    windowHeight: windowHeight,
    windowWidth: windowWidth,
    nav: [
      { id: 1, categoryName: '要闻', list: [], counters: 'news', },
      { id: 2, categoryName: '政治', list: [], counters: 'policy', },
      { id: 3, categoryName: '经济', list: [], counters: 'economy', },
      { id: 4, categoryName: '体育', list: [], counters: 'sports', },
      { id: 5, categoryName: '娱乐', list: [], counters: 'entertainment', },
      { id: 6, categoryName: '音乐', list: [], counters: 'music', },
      { id: 7, categoryName: '科技', list: [], counters: 'tecnology', },
      { id: 8, categoryName: '历史', list: [], counters: 'history', },
      { id: 9, categoryName: '汽车', list: [], counters: 'cars', },
      { id: 10, categoryName: '直播', list: [], counters: 'live', },
    ],
    lock: 0,
    list:[],
    currentIndex: 0,
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

  swiperChange: function(event){
    this.setData({currentIndex: event.detail.current});
    this.onQuery(1);
  },

  changeItem: function (event) {
    var id = event.target.dataset.id;
    let currentIndex = event.target.dataset.index;
    this.setData({currentIndex});
    // wx.navigateTo({
    //   url: `/pages/list/index?categoryId=${id}`
    // })
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
    let lock = this.data.lock;
    if(lock) {  //申请数据库最后一条数据后不再向数据库发出申请
      return;
    }
    let pages = this.data.pages+1;
    this.onQuery(pages);
    this.setData({pages});
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

  // 写完数据库数据之后记得修改数据库读写权限，否则前台无法进行数据请求
  onQuery: function (pages) {
    var pages = pages||1;
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    var counterName = this.data.nav[this.data.currentIndex].counters;
    db.collection(counterName).where({ //此处根据名字'news'绑定数据库集合
      _openid: this.data.openid
    }).skip((pages-1)*2).limit(2).get({ //skip limt进行分页操作
      success: res => {
        var navList = "nav[" + this.data.currentIndex + "].list";//先用一个变量，把(nav[0].list)用字符串拼接起来 详见https://blog.csdn.net/namecz/article/details/79623550
        if(res.data.length == 0) {
          this.setData({lock:1});
        }
        this.setData({
          // list: this.data.list.concat(res.data)
          [navList]: this.data.nav[this.data.currentIndex].list.concat(res.data),
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