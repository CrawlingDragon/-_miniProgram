// pages/redbag_log.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    redBag_list: [],
    loading_text: "加载更多...",
    noMore_text: "无更多数据",
    loading: false,
    noMore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRedBagList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  getRedBagList() {
    // 获取列表数据
    let token = wx.getStorageSync("token");
    this.setData({
      loading: true,
    });
    wx.request({
      url: app.globalData.baseUrl + "/member/redpacket/get_user_redpacket_log",
      method: "POST",
      data: {
        token: token,
        page: this.data.page,
        pagesize: 10,
      },
      success: (res) => {
        let data = res.data;
        if (data.code === 1) {
          this.setData({
            redBag_list: this.data.redBag_list.concat(data.data.list),
            page: data.data.cur_page.page + 1,
            loading: false,
          });
        } else if (data.code === 210) {
          this.setData({
            noMore: true,
            loading: false,
          });
        } else if (data.code === 510) {
          //token 过期的情况
          wx.showToast({
            title: data.msg,
            icon: "error",
            duration: 2000,
          });
          setTimeout(() => {
            wx.navigateTo({ url: "../login/login?operation=relogin" });
          }, 300);
        } else {
          this.setData({
            loading: false,
          });
        }
      },
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.noMore) {
      return;
    }
    this.getRedBagList();
  },
});
