// pages/message_detail/message_detail.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    detailData: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id } = options;
    this.getMessageDetail(id);
  },
  getMessageDetail(id) {
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "member/notice/notice_detail",
      method: "Post",
      data: { id, token },
      success: (res) => {
        let data = res.data;
        if (data.code === 1) {
          this.setData({
            detailData: data.data,
          });
        }
      },
    });
  },
});
