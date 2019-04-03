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
    // nav: [
    //   { id: 1, categoryName: '要闻', list: [], counters: 'news', pages: 1,},
    //   { id: 2, categoryName: '政治', list: [], counters: 'policy', pages: 1,},
    //   { id: 3, categoryName: '经济', list: [], counters: 'economy', pages: 1,},
    //   { id: 4, categoryName: '体育', list: [], counters: 'sports', pages: 1,},
    //   { id: 5, categoryName: '娱乐', list: [], counters: 'entertainment', pages: 1,},
    //   { id: 6, categoryName: '音乐', list: [], counters: 'music', pages: 1,},
    //   { id: 7, categoryName: '科技', list: [], counters: 'tecnology', pages: 1,},
    //   { id: 8, categoryName: '历史', list: [], counters: 'history', pages: 1,},
    //   { id: 9, categoryName: '汽车', list: [], counters: 'cars', pages: 1,},
    //   { id: 10, categoryName: '直播', list: [], counters: 'live', pages: 1,},
    // ],
    category: [],
    lock: 0,
    pages: 1,
    currentIndex: 0,
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
    
  },
  lower: function (e) {
    
  },
  scroll: function (e) {
    
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getCategory();
  },

  swiperChange: function(event){
    let currentIndex = event.detail.current;
    let category = this.data.category;
    this.setData({currentIndex,pages: 1,});
    this.getNews(category[currentIndex]['_id']);
  },

  changeItem: function (event) {
    var id = event.target.dataset.id;
    let currentIndex = event.target.dataset.index;
    this.setData({
      currentIndex,
    });
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

bindscrolltolower: function() {
  var pages = this.data.pages + 1;
  this.setData({ pages })
  let categoryId = this.data.category[this.data.currentIndex]['_id']
  if (this.data.listIsEnd[this.data.currentIndex]) {return 0;}
  const db = wx.cloud.database()
  // 查询当前用户所有的 counters
  db.collection('news').where({
    categoryId
  })
    .skip((pages - 1) * 2) // 跳过结果集中的前 2 条，从第 3 条开始返回
    .limit(2) // 限制返回数量为 2 条
    .get({
      success: res => {
        if (res.data.length == 0) {
          let tempObj = {}
          let tempKey = 'listIsEnd[' + this.data.currentIndex + ']'
          tempObj[tempKey] = 1
          this.setData(tempObj)
        }
        let currentIndex = this.data.currentIndex;
        let tempObj = {};
        let tempkey = 'category[' + currentIndex + '].list';
        tempObj[tempkey] = this.data.category[this.data.currentIndex].list.concat(res.data);
        // tempObj[tempkey] = res.data;
        this.setData(tempObj);

        console.log('[数据库] [查询记录] 成功: ', res);
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  // let pages = this.data.nav[this.data.currentIndex].pages + 1;
  // var navPages = "nav[" + this.data.currentIndex + "].pages";
  // this.onQuery(pages);
  // this.setData({ 
  //   [navPages]: this.data.nav[this.data.currentIndex].pages + 1,
  // });
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
  getCategory: function () {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('category').where({ //此处根据名字'news'绑定数据库集合
      _openid: this.data.openid
    }).get({ 
      success: res => {
        var listIsEnd = res.data.map(function(){
          return 0;
        });
        this.setData({
          category: res.data,
          listIsEnd,
        });
        this.getNews(res.data[0]['_id']);
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

  getNews: function (categoryId) {
    // var pages = pages||1;
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    // var counterName = this.data.nav[this.data.currentIndex].counters;
    db.collection('news').where({ //此处根据名字'news'绑定数据库集合
      categoryId  //在news集合中根据categoryId取数据附到不同分类中
    })
    // .limit(2)
    .get({
      success: res => {
        // var navList = "nav[" + this.data.currentIndex + "].list";先用一个变量，把(nav[0].list)用字符串拼接起来 详见https://blog.csdn.net/namecz/article/details/79623550
        let currentIndex = this.data.currentIndex;
        let tempObj = {};
        let tempkey = 'category[' + currentIndex + '].list';
        tempObj[tempkey] = res.data;
        this.setData(tempObj);
        // this.setData({
        //   // [navList]: this.data.nav[this.data.currentIndex].list.concat(res.data),
        // })
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