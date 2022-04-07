// pages/point_deduct/point_deduct.js
let app = getApp();
Page({
  data: {
    distributor_id: "", // 经销商id
    year: "", // 请求的年份
    list: [], //扣减理由列表
  },
  onLoad: function (options) {
    // 通过路由的参数，获取经销商id和年份
    let distributor_id = options.distributor_id;
    let year = options.year;
    this.setData({
      distributor_id,
      year,
    });
  },

  onReady: function () {
    this.getDeductCause();
  },

  onShow: function () {},
  getDeductCause() {
    // 获取积分的扣减理由
    let token = wx.getStorageSync("token");
    let distributor_id = this.data.distributor_id;
    let year = this.data.year;
    wx.request({
      url: app.globalData.baseUrl + "/member/score/user_deduct_scroe_log",
      method: "POST",
      data: { token, distributor_id, year },
      success: (res) => {
        let data = res.data;
        // console.log(data);
        if (data.code === 1) {
          this.setData({
            list: data.data,
          });
        } else {
        }
      },
    });
  },
});
