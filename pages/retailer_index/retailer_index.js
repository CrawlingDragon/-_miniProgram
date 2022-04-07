const app = getApp();
import { getLocation, authorizeAndGetLocation } from "../../common/local.js";

Page({
  data: {
    perinfo: "",
    points: [
      { index: "1", text: "扫码入库" },
      { index: "2", text: "扫码退货" },
      { index: "3", text: "手工输入入库/退货" },
      { index: "4", text: "进货统计" },
      { index: "5", text: "需要的支持" },
      { index: "6", text: "信息提醒" },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPerInfo();
    getLocation();
  },
  modefiy: function () {
    wx.navigateTo({ url: "../personal/personal" });
  },
  getPerInfo: function () {
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "member/user/get_user_info",
      method: "POST",
      data: { token: token },
      success: (res) => {
        if (res.data.code === 1) {
          this.setData({
            perinfo: res.data.data,
          });
        } else if (res.data.code === 510) {
          wx.navigateTo({ url: "../login/login?operation=relogin" });
        }
      },
    });
  },
  selPoints: function (e) {
    // 提取用户的认证状态
    let approve = this.data.perinfo.is_shop_auth;
    let text = e.currentTarget.dataset.text;
    let address = wx.getStorageSync("geoAddress");
    if (
      (text == "扫码入库" ||
        text == "扫码退货" ||
        text == "手工输入入库/退货") &&
      approve !== 2
    ) {
      //当点击进入扫码入库，扫码退货，手工输入入库/退货三个页面，且认证不是通过（也就是approve不为2时,需要弹窗）
      this.approve(approve);
      return;
    }
    if (
      (text == "扫码入库" ||
        text == "扫码退货" ||
        text == "手工输入入库/退货") &&
      !address
    ) {
      authorizeAndGetLocation(() => {
        switch (text) {
          case "扫码入库":
            wx.navigateTo({ url: "../enter_products/enter_products" });
            break;
          case "扫码退货":
            wx.navigateTo({ url: "../out_products/out_products" });
            break;
          case "手工输入入库/退货":
            wx.navigateTo({
              url: "../enter_out_products/enter_out_products",
            });
            break;
        }
      });
      return;
    }

    switch (text) {
      case "扫码入库":
        wx.navigateTo({ url: "../enter_products/enter_products" });
        break;
      case "扫码退货":
        wx.navigateTo({ url: "../out_products/out_products" });
        break;
      case "手工输入入库/退货":
        wx.navigateTo({
          url: "../enter_out_products/enter_out_products",
        });
        break;
      case "进货统计":
        wx.navigateTo({
          url:
            "../enter_products_statistics/enter_products_statistics?user_id=" +
            this.data.perinfo.userid,
        });
        break;
      case "需要的支持":
        wx.navigateTo({ url: "../need_supports/need_supports" });
        break;
      case "信息提醒":
        wx.navigateTo({ url: "../message_list/message_list" });
        break;
      default:
        console.log("点错了");
        break;
    }
  },
  approve(approveStatus) {
    //认证弹窗效果
    //身份认证状态：（0未认证1认证中2认证通过3认证失败）
    if (approveStatus === 2) {
      //说明通过认证，什么都不显示
      return;
    }
    let content =
      approveStatus === 0
        ? "您的身份尚未认证，请先上传营业执照进行身份认证"
        : approveStatus === 1
        ? "您的身份正在认证中，请稍后"
        : "您的身份认证失败，请重新认证";
    wx.showModal({
      content: content,
      showCancel: approveStatus === 1 ? false : true,
      confirmText: approveStatus === 1 ? "确定" : "去认证",
      confirmColor: "#1AA93A",
      success(res) {
        if (res.confirm) {
          if (approveStatus === 1) {
            //认证中，不做处理
            return;
          }
          console.log("用户点击确定,去到认证页面");
        } else if (res.cancel) {
          console.log("用户点击取消，就直接取消了");
        }
      },
    });
  },
});
