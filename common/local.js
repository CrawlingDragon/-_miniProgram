var QQMapWX = require("../common/qqmap-wx-jssdk.js");
var qqmapsdk;
export function getLocation() {
  qqmapsdk = new QQMapWX({
    key: "QBKBZ-G5PRX-NWG4E-7DMOT-KBNYF-EGFP3",
  });
  // 获取缓存的定位地址
  let geoAddress = wx.getStorageSync("geoAddress");
  // console.log("geoAddress", geoAddress);
  if (geoAddress) {
    //如果已经获取地址，不再定位
    return;
  }
  //开始定位
  wx.getLocation({
    type: "wgs84",
    success(res) {
      //获取经纬度
      const latitude = res.latitude;
      const longitude = res.longitude;
      qqmapsdk.reverseGeocoder({
        //使用腾讯位置服务，把经纬度转换成详细地址
        location: { latitude, longitude },
        success: function (res) {
          const { province, city, district } = res.result.address_component;
          //拼接省市区
          let geoAddress = province + city + district;
          //缓存地址
          wx.setStorageSync("geoAddress", geoAddress);
        },
        fail(e) {
          console.log("err", e);
        },
      });
    },
    fail() {
      wx.showToast({
        title: "获取地址失败",
        icon: "error",
        duration: 2000,
      });
    },
  });
}
// 把地址保存在缓存
// 在小程序退出情况地址（不是后台钩子）
