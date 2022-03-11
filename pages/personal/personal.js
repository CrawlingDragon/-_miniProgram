const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    src: "",
    title: "确定要退出登录吗？",
    isshow: !1,
    show_address: !1,
    mobile: "18888888888",
    username: "用户甲",
    shopname: "",
    address: "浙江省杭州市滨江区", //所在地
    address1: "",
    detailAddress: "", //详细地址
    actionshow: !1,
    right_icon: "arrow-right",
    inputAlign: "right",
    crop: "", //作物
    fieldstyle: {
      fontSize: "30rpx",
      color: "#333333",
      paddingLeft: "30rpx",
    },
    params: { province: !0, city: !0, area: !0 },
    options: [
      { text: "用户协议", url: "../user_agreement/user_agreement" },
      { text: "用户隐私", url: "../user_policy/user_policy" },
    ],
    pageContainerShow: false, //选择作物的弹窗
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPerInfo();
  },

  onChooseAvatar(e) {
    //修改头像图片
    const { avatarUrl } = e.detail;
    this.setData({
      src: avatarUrl,
    });
  },
  chooseRouter(e) {
    // 选择用户协议，用户隐私
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    });
  },

  getPerInfo: async function () {
    const token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "member/user/get_user_info",
      method: "POST",
      data: { token: token },
      success: (res) => {
        let data = res.data.data;
        this.setData({
          username: data.nickname,
          shopname: data.shop_name,
          address: data.address[0],
          address1: data.address[1],
          src: data.avatar,
          mobile: data.mobile,
          detailAddress: data.detailed_address,
          crop: data.user_crop,
        });
      },
    });
  },
  loginOut() {
    //退出登录
    wx.showModal({
      content: "确定要退出登录吗？",
      success: (res) => {
        if (res.confirm) {
          //用户点击确定
          wx.clearStorageSync();
          setTimeout(function () {
            wx.reLaunch({ url: "../login/login?operation=relogin" });
          }, 500);
        } else if (res.cancel) {
          // 用户点击取消
        }
      },
    });
  },

  modefiyImg: function () {
    this.actionshow = !0;
  },
  bindRegionChange(e) {
    //选择了所在地
    let address = e.detail.value.join("");
    this.setData({
      address,
    });
  },
  writeDetailAddress(e) {
    // 修改详细地址
    this.setData({
      detailAddress: e.detail.__args__[0],
    });
  },
  chooseCrop() {
    //选择作物
    this.setData({
      pageContainerShow: true,
    });
  },
  clickItem: function (t) {
    //选择图片
    var n = this,
      r = "";
    (r = 0 == t ? "camera" : "album"),
      e.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: [r],
        success: function (t) {
          e.uploadFile({
            url: n.url + "member/upload/image",
            filePath: t.tempFilePaths[0],
            name: "file",
            formData: { token: n.token },
            success: function (e) {
              var t = JSON.parse(e.data);
              n.src = t.data.url;
            },
          });
        },
        fail: function (e) {
          console.log("选择失败了", e);
        },
      });
  },
  cancel: function (e) {
    console.log("cancle", e, this.address);
  },
  confirm: function (e) {
    (this.address = e.province.label + e.city.label + e.area.label),
      (this.address1 =
        e.province.value + "," + e.city.value + "," + e.area.value);
  },
  selAddress: function () {
    console.log(1);
    this.setData({
      show_address: true,
    });
  },
  updataInfo: function () {
    //更新用户资料
    var t = this;
    this.myRequest({
      url: app.globalData.baseUrl + "member/user/update_user_info",
      method: "POST",
      data: {
        token: t.token,
        realname: t.username,
        avatar: t.src,
        address:
          "1" == t.usertype || "2" == t.usertype ? [t.address, t.address1] : "",
        shop_name: "2" == t.usertype ? t.shopname : "",
      },
    }).then(function (t) {
      1 == t.data.code &&
        "用户资料更新成功" == t.data.msg &&
        e.navigateBack({
          delta: 1,
          success: function (e) {
            console.log(e);
          },
        });
    });
  },
  getShowStatus: function (e) {
    this.isshow = e;
  },
  reserve: function () {
    this.updataInfo();
  },
});
