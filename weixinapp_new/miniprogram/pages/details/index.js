const utils = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    details: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsById(options.id);
  },

  getNewsById: function (_id) {
    const db = wx.cloud.database()
    db.collection('news').where({ 
      _id  
    }).get({
        success: res => {
          let details = res.data[0];

          // 使用微信开发者工具自带插件格式化时间格式
          details.createtime = utils.formatTime(details.createtime);

          this.setData({details});
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