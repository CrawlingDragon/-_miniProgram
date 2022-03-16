// pages/message_list/message_list.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message_list: [],
    page: 1,
    loading_text: "加载更多...",
    noMore_text: "无更多数据",
    loading: true,
    noMore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMessageList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  getMessageList() {
    // 获取列表数据
    let token = wx.getStorageSync("token");
    this.setData({
      loading: true,
    });
    wx.request({
      url: app.globalData.baseUrl + "member/notice/get_notice",
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
            message_list: this.data.message_list.concat(data.data.list),
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
        }
      },
    });
  },
  openMessageDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/message_detail/message_detail?id=${id}`,
    });
  },

  onReachBottom: function () {
    if (this.data.noMore) {
      return;
    }
    this.getMessageList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
