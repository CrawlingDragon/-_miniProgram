import { authorizeAndGetLocation } from "../common/local.js";
const app = getApp();

function getScanCodeResult() {
  wx.scanCode({
    onlyFromCamera: true,
    success: (res) => {
      // 获得扫码结果
      // console.log("扫红包res", res);
      let { result: goods_code } = res;
      let token = wx.getStorageSync("token");
      let location = wx.getStorageSync("geoAddress");
      // debugger;
      // 发送扫码完成请求，获得红包
      wx.request({
        url: app.globalData.baseUrl + "member/redpacket/get_product_redpacket",
        method: "POST",
        data: { token, goods_code, user_location: location },
        success: (res) => {
          console.log("get goods_code:", res, res.data.msg);

          wx.showToast({
            icon: "none",
            title: res.data.msg,
            duration: 1500,
          });
          // debugger;
        },
        fail() {
          wx.showToast({
            icon: "error",
            title: "请求失败！",
            duration: 1500,
          });
        },
      });
    },
  });
}

export default function scanCodeFn() {
  let address = wx.getStorageSync("geoAddress");
  let openid = wx.getStorageSync("openid");

  if (!openid) {
    // 缺少openid，提示，并重新登录
    wx.showModal({
      title: "错误",
      content: "缺少openid,无法使用扫码功能,重新登录获取",
      showCancel: false,
      cancelText: "知道了",
      success: () => {
        wx.clearStorageSync();
        wx.navigateTo({
          url: "/pages/login/login",
        });
      },
    });
  }
  // console.log(address);

  if (!address) {
    //如果没有定位地址，则重新定位
    authorizeAndGetLocation(() => {
      // todo 调用摄像头，扫二维码
      getScanCodeResult();
    });
  } else {
    // todo 调用摄像头，扫二维码
    getScanCodeResult();
  }
}
