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
    realname: "用户甲",
    shopname: "",
    addressValue: "浙江省杭州市滨江区", //所在地
    addressCode: "", //所在地行政id ，3311，3321
    detailAddress: "", //详细地址
    actionshow: !1,
    right_icon: "arrow-right",
    inputAlign: "right",
    fieldstyle: {
      fontSize: "30rpx",
      color: "#333333",
      paddingLeft: "30rpx",
    },
    usertype: 0, //用户识别，1是农户，2是零售商
    is_shop_auth: 0, //身份认证状态：（0未认证1认证中2认证通过3认证失败）
    params: { province: !0, city: !0, area: !0 },
    options: [
      { text: "用户协议", url: "../user_agreement/user_agreement" },
      { text: "用户隐私", url: "../user_policy/user_policy" },
    ],
    crop: [], //作物
    cropList: [],
    pageContainerShow: false, //选择作物的弹窗
    chooseCropContentShow: false, //作物排列的选择内容框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPerInfo();
  },

  onChooseAvatar(e) {
    //修改头像图片
    const token = wx.getStorageSync("token");
    const { avatarUrl } = e.detail;
    wx.uploadFile({
      url: app.globalData.baseUrl + "member/upload/image",
      filePath: avatarUrl,
      name: "file",
      formData: { token: token },
      success: (res) => {
        var data = JSON.parse(res.data);
        this.setData({
          src: data.data.url,
        });
      },
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
          realname: data.realname,
          shopname: data.shop_name,
          addressValue: data.address[0],
          addressCode: data.address[1],
          src: data.avatar,
          mobile: data.mobile,
          detailAddress: data.detailed_address,
          crop: data.user_crop,
          usertype: data.user_type,
          is_shop_auth:
            data.is_shop_auth === 0
              ? "未认证"
              : data.is_shop_auth === 1
              ? "认证中"
              : data.is_shop_auth === 2
              ? "认证通过"
              : "认证失败",
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
    let addressValue = e.detail.value.join("");
    let addressCode = e.detail.code.join(",");
    this.setData({
      addressValue,
      addressCode,
    });
  },
  writeDetailAddress(e) {
    // 修改详细地址
    this.setData({
      detailAddress: e.detail.__args__[0],
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
          debugger;
          wx.uploadFile({
            url: app.globalData.baseUrl + "member/upload/image",
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
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "member/user/update_user_info",
      method: "POST",
      data: {
        token: token,
        realname: this.data.realname,
        avatar: this.data.src,
        address: [this.data.addressValue, this.data.addressCode],
        // address:
        //   "1" == t.usertype || "2" == t.usertype ? [t.address, t.address1] : "",
        detailed_address: this.data.detailAddress,
        shop_name: this.data.usertype == 2 ? this.data.shopname : "",
        user_crop: this.data.crop,
        shop_name: this.data.shopname,
      },
      success: (res) => {
        if (res.data.code === 1) {
          wx.showToast({
            title: res.data.msg,
          });
        } else if (res.data.code == 500) {
          wx.clearStorageSync();
          setTimeout(function () {
            wx.reLaunch({ url: "../login/login?operation=relogin" });
          }, 500);
        }
      },
    });
  },
  getShowStatus: function (e) {
    this.isshow = e;
  },
  reserve: function () {
    this.updataInfo();
  },
  chooseCrop() {
    // 添加作物，二级展示页
    this.setData({
      pageContainerShow: true,
    });
  },
  closeCrop() {
    // 关闭选择作物，二级展示页
    this.setData({ pageContainerShow: false });
  },
  addCrop() {
    // 添加作物，弹出弹出框
    let disabled = this.data.crop.length >= 3;
    if (disabled) {
      // 超过选中3个作物就置灰，不让点击
      return;
    }
    this.setData({
      chooseCropContentShow: true,
    });
  },
  onChoose(e) {
    //选中的作物
    let { value } = e.detail;
    this.setData({
      chooseCropContentShow: false,
    });

    // 判断是否有重复添加作物，是就不再添加
    let hasCrop = this.data.crop.includes(value);
    if (hasCrop) {
      return;
    }
    // 正常添加作物到crop数据中
    this.data.crop.push(value);
    this.setData({
      crop: this.data.crop,
    });
  },
  deleteCrop(e) {
    // 获得选中的作物
    let crop = e.currentTarget.dataset.crop;
    // 找到选择作物在数据crop中的index
    let index = this.data.crop.findIndex((item) => item == crop);
    // splice删除他
    this.data.crop.splice(index, 1);
    this.setData({
      crop: this.data.crop,
    });
  },
  __l(e) {
    console.log(e);
  },
  setInputValue(e) {
    let key = e.currentTarget.dataset.key;
    let val = e.detail.__args__[0];
    console.log(val, key);
    this.setData({
      [key]: val,
    });
  },
  goToApprove() {
    wx.navigateTo({
      url: "/pages/approve/approve",
    });
  },
});
