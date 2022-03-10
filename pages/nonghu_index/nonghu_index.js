const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    perinfo: "",
    points: [
      {
        index: "1",
        text: "用药记录",
        url: "../medication_record/medication_record",
      },
      {
        index: "2",
        text: "上传分享截图",
        url: "../upload_share/upload_share",
      },
      {
        index: "3",
        text: "扫码领红包",
        url: "../upload_share/upload_share",
      },
      {
        index: "4",
        text: "红包日志",
        url: "../redbag_log/redbag_log",
      },
      {
        index: "5",
        text: "信息提醒",
        url: "../upload_share/upload_share",
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getPerInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  getPerInfo: function () {
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "member/user/get_user_info",
      method: "POST",
      data: { token: token },
      success: (res) => {
        let data = res.data;
        if (data.code === 1) {
          //设置个人信息
          this.setData({
            perinfo: res.data.data,
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

  selPoints: function (e) {
    console.log(e);
    // 用药记录，上传分享截图等功能去的页面
    wx.navigateTo({ url: e.currentTarget.dataset.url });
  },
  modefiy: function () {
    // 路由到个人信息编辑主页
    wx.navigateTo({ url: "../personal/personal" });
  },
});
