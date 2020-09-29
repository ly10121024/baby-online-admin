// pages/teacher/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: {
      1: '我的班级',
      2: '其他班级'
    },
    currentType: 1,

    classes: [
      {
        id: 1,
        text: '大班01班'
      },
      {
        id: 2,
        text: '大班02班'
      }
    ],
    currentClass: 1,

    cameras: [
      {
        id: 1,
        desc: '左侧摄像头',
        poster: '../../../static/images/teacher/temporary/camera.png'
      },
      {
        id: 2,
        desc: '右侧摄像头',
        poster: '../../../static/images/teacher/temporary/camera.png'
      }
    ]
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

  },

  /**
   * 改变班级选项
   */
  changeType(e) {
    this.setData({ currentType: e.currentTarget.dataset.type })
  },

  /**
   * 改变班级
   */
  changeClass(e) {
    this.setData({ currentClass: e.currentTarget.dataset.class })
  }
})