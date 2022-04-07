const app = getApp();
import { getLocation } from "../../common/local.js";
import scanCodeFn from "../../common/scanCode.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    perinfo: "",
    // 0 为一般农户，1为农技示范户
    isExpert: 0,
    is_notice: 0,
    points: [
      {
        index: "1",
        text: "用药记录",
        url: "../medication_record/medication_record",
        isExpert: true,
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
        url: "../saomalinghongbao/saomalinghongbao",
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
        url: "../message_list/message_list",
        isExpert: false,
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
    //获取定位权限，并完成坐标逆分析，
    getLocation();
  },
  onShow() {},
  getPerInfo: function () {
    // 获取用户信息接口
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
            is_notice: res.data.data.is_notice,
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
    // 点击农户首页的功能列表
    const isRedBagPage = e.currentTarget.dataset.text === "红包日志"; //判断是否是 红包日志页
    const isGetRedBag = e.currentTarget.dataset.text === "扫码领红包"; //判断是否是 扫码领红包页
    const url = e.currentTarget.dataset.url;

    if (isRedBagPage) {
      //如果是信息提醒，点击取消红点
      this.setData({
        is_notice: 0,
      });
    }

    if (isGetRedBag) {
      // 如果是扫码领红包item
      scanCodeFn();
      return;
    }
    // 用药记录，上传分享截图等功能去的页面
    wx.navigateTo({
      url: url,
    });
  },
  modefiy: function () {
    // 路由到个人信息编辑主页
    wx.navigateTo({ url: "../personal/personal" });
  },
});
