// pages/points/points.js
let app = getApp();
import relogin from "../../common/relogin.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    noData: false,
    list: [], //积分列表
    total_score: 0, //总积分
    end: "",
  },

  onLoad: function (options) {
    // 时间其实为当年
    let date = new Date().getFullYear();
    this.setData({
      date,
      end: date,
    });

    //获取机会兑换列表
    this.getPointList();
  },
  onReady: function () {},
  bindDateChange(e) {
    let date = e.detail.value;
    if (date == this.data.date) {
      return;
    }
    this.setData({
      date,
    });
    setTimeout(() => {
      this.getPointList();
    }, 0);
  },
  getPointList() {
    let token = wx.getStorageSync("token");
    wx.showLoading({
      title: "加载中",
    });
    wx.request({
      url: app.globalData.baseUrl + "/member/score/user_score_list",
      method: "POST",
      data: { token, year: this.data.date },
      success: (res) => {
        let data = res.data;
        // console.log(data);
        if (data.code === 1) {
          this.setData({
            list: data.data.list,
            total_score: data.data.total_score,
            noData: false,
          });
        } else if (data.code === 510) {
          relogin();
        } else if (data.code === 210) {
          //暂无数据
          this.setData({
            noData: true,
            list: [],
            total_score: 0,
          });
        }
        wx.hideLoading();
      },
    });
  },
  ajaxCheckPoint(distributor_id) {
    // 积分兑换求情
    let token = wx.getStorageSync("token");
    let year = this.data.date;
    wx.request({
      url: app.globalData.baseUrl + "/member/score/exchange_score",
      method: "POST",
      data: { token, year, distributor_id },
      success: (res) => {
        let data = res.data;
        if (data.code === 1) {
          wx.showToast({
            title: data.msg,
          });
          setTimeout(() => {
            this.getPointList();
          }, 50);
        } else {
          wx.showToast({
            title: data.msg,
            icon: "none",
          });
        }
      },
    });
  },
  checkPoint(e) {
    // 点击兑换积分
    let distributor_id = e.currentTarget.dataset.distributorid;
    wx.showModal({
      content: "是否确认兑换积分？",
      success: (res) => {
        if (res.confirm) {
          this.ajaxCheckPoint(distributor_id);
        } else if (res.cancel) {
          console.log("用户点击取消");
        }
      },
    });
  },
  deductPointList(e) {
    // 经销商id
    let distributor_id = e.currentTarget.dataset.distributor_id;
    // 年份
    let year = this.data.date;
    let deduct = e.currentTarget.dataset.deduct_score;
    if (deduct == 0) {
      return;
    }
    wx.navigateTo({
      url: `/pages/point_deduct/point_deduct?distributor_id=${distributor_id}&year=${year}`,
    });
  },
});
