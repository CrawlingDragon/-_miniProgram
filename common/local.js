var QQMapWX = require("../common/qqmap-wx-jssdk.js");
var qqmapsdk;
export function getLocation() {
  qqmapsdk = new QQMapWX({
    key: "QBKBZ-G5PRX-NWG4E-7DMOT-KBNYF-EGFP3",
  });

  // wx.getSetting({
  //   success(res) {
  //     if (!res.authSetting["scope.userLocation"]) {
  //       console.log(res.authSetting["scope.userLocation"]);
  //       wx.authorize({
  //         scope: "scope.userLocation",
  //         success(res) {
  //           console.log(res);
  //         },
  //         fail(e) {
  //           console.log("e", e);
  //         },
  //       });
  //     }
  //   },
  // });

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
          // console.log(res.result);
          const { province, city, district } = res.result.address_component;
          let town = res.result.address_reference.town.title;
          //拼接省市区
          let geoAddress = province + "," + city + "," + district + "," + town;
          //缓存地址
          wx.setStorageSync("geoAddress", geoAddress);
        },
        fail(e) {
          console.log("err", e);
        },
      });
    },
    fail(e) {
      // errMsg :"getLocation:fail auth deny"
      wx.showToast({
        title: "定位失败",
        icon: "error",
        duration: 2000,
      });
    },
  });
}

export function authorizeAndGetLocation(callback) {
  // 如果拒绝授权定位，则调用授权设置页，通过后再跳转
  wx.openSetting({
    success(res) {
      // console.log("res", res);
      // console.log("userLocation", res.authSetting["scope.userLocation"]);
      if (res.authSetting["scope.userLocation"]) {
        getLocation();
        callback && callback();
      }
    },
  });
}
