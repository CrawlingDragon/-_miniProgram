const app = getApp();
export default function getOpenId(token) {
  // let token = wx.getStorageSync("token");
  wx.login({
    success: (res) => {
      if (res.code) {
        // wx.login 获取code
        const { code } = res;
        wx.request({
          url: app.globalData.baseUrl + "member/user/update_wx_openid",
          method: "POST",
          data: {
            wxcode: code,
            token,
          },
          success: (res) => {
            // console.log("res", res);
            let data = res.data;
            if (data.code === 1) {
              // 获取并缓存openid
              let { openid } = data.data;
              wx.setStorageSync("openid", openid);
            }
          },
        });
      } else {
        wx.showToast({
          title: "获取openId失败",
        });
      }
    },
  });
}
