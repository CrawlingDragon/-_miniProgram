require("./common/runtime.js");
require("./common/vendor.js");
require("./common/main.js");
App({
  globalData: {
    env: "",
    baseUrl: "",
  },
  onLaunch() {
    // 获取当前账号信息
    // envVersion = develop|trial|release
    let { envVersion } = wx.getAccountInfoSync().miniProgram;

    let baseUrl = {
      develop: "http://syjn.nzsoso.com/", //测试接口地址
      release: "https://www.zitcchem.com", //正式接口地址
    };
    this.globalData.env = envVersion;
    this.globalData.baseUrl = baseUrl[envVersion];
  },
  onUnload() {
    //小程序关闭后，情况定位
    wx.setStorageSync("token", "");
  },
});
// wx.navigateTo({
//   url: "/pages/login/login?operation=relogin",
// });
