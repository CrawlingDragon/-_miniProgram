// pages/approve/approve.js
import relogin from "../../common/relogin";
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    is_shop_auth: 0, //认证状态:未认证:0，认证中:1，认证通过:2，认证失败:3
    remark: "失败的原因", //认证失败的原因
    userName: "",
    name: "",
    shopName: "",
    address: "", //所在地
    addressCode: "", //所在地的对应code
    detailAddress: "",
    license: "", //营业执照
    show: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getApproveInfo();
  },

  chooseImageMedia() {
    //如果是认证中，不让选择图片
    if (this.data.is_shop_auth === 1) {
      // 认证中，就选展示大图
      wx.previewImage({
        current: this.data.license, // 当前显示图片的http链接
        urls: [this.data.license], // 需要预览的图片http链接列表
      });
      return;
    }
    if (this.data.show) {
      //说明在上传图片中，避免重复点击
      return;
    }
    let token = wx.getStorageSync("token");
    wx.chooseMedia({
      mediaType: ["image"],
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // console.log("res", res);
        this.setData({
          show: true,
        });
        wx.uploadFile({
          url: app.globalData.baseUrl + "/member/upload/image", //仅为示例，非真实的接口地址
          filePath: res.tempFiles[0].tempFilePath,
          name: "file",
          formData: {
            token: token,
          },
          success: (res) => {
            let data = JSON.parse(res.data);
            console.log(data, data.code);
            if (data.code === 1) {
              // 图片上传成功

              this.setData({
                license: data.data.url,
              });
            }
            this.setData({
              show: false,
            });
          },
        });
      },
      fail: (e) => {
        console.log("e", e);
      },
    });
  },
  getApproveInfo() {
    // 获取认证信息
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "/member/user/shop_auth_info",
      method: "POST",
      data: { token },
      success: (res) => {
        let data = res.data;
        if (data.code === 1) {
          this.setData({
            name: data.data.realname,
            userName: data.data.mobile,
            shopName: data.data.shop_name,
            address: data.data.address[0],
            addressCode: data.data.address[1],
            detailAddress: data.data.detailed_address,
            is_shop_auth: data.data.is_shop_auth,
            remark: data.data.remark,
            license: data.data.license,
          });
        } else if (data.code === 510) {
          relogin();
        }
      },
    });
  },

  approve() {
    if (this.data.is_shop_auth === 1) {
      // 认证中，禁止点击按钮
      return;
    }
    this.approveAjax();
  },
  approveAjax() {
    //提交认证
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "/member/user/add_shop_auth",
      method: "POST",
      data: {
        token,
        realname: this.data.userName,
        shop_name: this.data.shopName,
        detailed_address: this.data.detailAddress,
        address: [this.data.address, this.data.addressCode],
        license: this.data.license,
      },
      success: (res) => {
        let data = res.data;
        if (data.code === 1) {
        } else {
        }
        wx.showToast({
          title: data.msg,
          icon: "none",
        });
        console.log(data);
      },
    });
  },
  bindRegionChange(e) {
    //选择了所在地
    let address = e.detail.value.join("");
    let addressCode = e.detail.code.join(",");
    this.setData({
      address,
      addressCode,
    });
  },
});
