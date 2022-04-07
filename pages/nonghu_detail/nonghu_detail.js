let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    perinfo: "",
    points: [
      { index: "1", text: "农技示范记录" },
      { index: "2", text: "技术分享" },
      { index: "3", text: "红包日志" },
    ],
    user_id: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (options?.user_id) {
      this.setData({
        user_id: options.user_id,
      });
      this.getPerInfo();
    }
  },
  modefiy: function () {
    e.navigateTo({ url: "../personal/personal" });
  },
  selPoints: function (e) {
    let text = e.currentTarget.dataset.text;
    if (text == "农技示范记录") {
      wx.navigateTo({
        url: "../nong_technology_record/nong_technology_record?user_id=".concat(
          this.data.user_id,
          "&from=",
          "nonghu_detail"
        ),
      });
    } else if (text == "技术分享") {
      wx.navigateTo({
        url: "../technology_share/technology_share?user_id=".concat(
          this.data.user_id,
          "&from=",
          "nonghu_detail"
        ),
      });
    } else if (text == "红包日志") {
      wx.navigateTo({
        url: "../redbag_log/redbag_log?user_id=".concat(
          this.user_id,
          "&from=",
          "nonghu_detail"
        ),
      });
    }
  },
  getPerInfo: function () {
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "member/user/get_user_info",
      method: "POST",
      data: { token, user_id: this.data.user_id },
      success: (res) => {
        if (res.data.code === 1) {
          this.setData({
            perinfo: res.data.data,
          });
        } else if (
          res.data.code === 510 &&
          res.data.msg === "无效的token参数！"
        ) {
          wx.navigateTo({ url: "../login/login?operation=relogin" });
        }
      },
    });
  },
});
