const app = getApp();
import { getLocation } from "../../common/local.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    perinfo: "",
    // 0 为一般农户，1为农技示范户
    isExpert: 0,
    points: [
      {
        index: "1",
        text: "用药记录",
        url: "../medication_record/medication_record",
        isExpert: false,
      },
      {
        index: "2",
        text: "上传分享截图",
        url: "../upload_share/upload_share",
        isExpert: true,
      },
      {
        index: "3",
        text: "扫码领红包",
        url: "../upload_share/upload_share",
        isExpert: false,
      },
      {
        index: "4",
        text: "红包日志",
        url: "../redbag_log/redbag_log",
        isExpert: false,
      },
      {
        index: "5",
        text: "信息提醒",
        url: "../upload_share/upload_share",
        isExpert: true,
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
  onReady: function () {
    getLocation();
    // wx.getLocation({
    //   type: "wgs84",
    //   success(res) {
    //     const latitude = res.latitude;
    //     const longitude = res.longitude;
    //     const speed = res.speed;
    //     const accuracy = res.accuracy;
    //     console.log(res);
    //     qqmapsdk.reverseGeocoder({
    //       location: { latitude, longitude }, //获取表单传入的位置坐标,不填默认当前位置,示例为string格式
    //       //get_poi: 1, //是否返回周边POI列表：1.返回；0不返回(默认),非必须参数
    //       success: function (res) {
    //         //成功后的回调
    //         console.log("res", res);
    //         var res = res.result;
    //       },
    //       fail(e) {
    //         console.log(e);
    //       },
    //     });
    //   },
    // });
  },

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
            isExpert: res.data.data.is_expert,
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
