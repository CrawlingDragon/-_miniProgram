// pages/salesman_nonghu_index/salesman_nonghu_index.js
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    has_share: 0, //技术分析的红点显示
    has_crop: 0, //农机示范记录的红点显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let { has_crop, has_share } = options;
    this.setData({ has_share, has_crop });
  },
  navgiatePage(e) {
    // 各个模块的导航
    let index = e.currentTarget.dataset.index;
    switch (index) {
      case "1":
        wx.navigateTo({
          url: "/pages/nonghu_manage/nonghu_manage",
        });
        break;
      case "2":
        wx.navigateTo({
          url: "/pages/technology_share/technology_share",
        });
        break;
      case "3":
        wx.navigateTo({
          url: "/pages/nong_technology_record/nong_technology_record",
        });
        break;
      case "4":
        wx.navigateTo({
          url: "/pages/redbag_log/redbag_log",
        });
        break;
    }
  },
  getUserInfo() {
    wx.request({
      url: app.globalData.baseUrl + "url",
      method: "",
      data: {},
      success: () => {},
    });
  },
});
