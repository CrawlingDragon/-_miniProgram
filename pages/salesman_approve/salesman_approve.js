// pages/approve/approve.js
import relogin from "../../common/relogin";
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    rules: [
      {
        name: "name",
        rules: { required: true, message: "名字是必填项" },
      },
      {
        name: "shopName",
        rules: { required: true, message: "店铺名是必填项" },
      },
      {
        name: "address",
        rules: { required: true, message: "所在地是必填项" },
      },
      {
        name: "detailAddress",
        rules: { required: true, message: "详细地址是必填项" },
      },
      {
        name: "license",
        rules: { required: true, message: "营业执照是必填项" },
      },
      {
        name: "remark",
        rules: { required: true, message: "拒绝理由是必填项" },
      },
    ],
    formData: {
      name: "", //名字
      shopName: "0", //店铺名
      address: "", //所在地
      // addressCode: "", //所在地的对应code
      detailAddress: "", //详细地址
      license: "", //营业执照
      remark: "", //拒绝理由
    },
    auth_id: 0,
    userName: "",
    name: "",
    shopName: "",
    address: "", //所在地
    addressCode: "", //所在地的对应code
    detailAddress: "",
    license: "", //营业执照
    show: false,
    remark: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.auth_id) {
      this.setData({
        auth_id: options.auth_id,
      });
    }
    // 请求身份审核数据
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
          url: app.globalData.baseUrl + "/member/upload/image",
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
      data: { token, auth_id: this.data.auth_id },
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
            license: data.data.license,
            remark: data.data.remark,
          });
        } else if (data.code === 510) {
          relogin();
        }
      },
    });
  },

  approve(e) {
    // 点击提交/拒绝按钮
    let status = e.currentTarget.dataset.status;
    this.setFormData(status); // 把formData和表格数据相关联
    this.selectComponent("#form").validate((valid, errors) => {
      if (!valid) {
        const firstError = Object.keys(errors);
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message,
          });
        }
      } else {
        // 通过验证
        this.approveAjax(status);
      }
    });
    console.log(this.data, status);
  },
  approveAjax(status) {
    //提交认证请求
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
        auth_id: this.data.auth_id,
        status,
        remark: this.data.remark,
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
  setFormData(status) {
    //formData验证数据填充，形成验证效果
    if (status === 2) {
      // 通过按钮，无需验证拒绝理由
      this.setData({
        [`formData.name`]: this.data.name,
        [`formData.shopName`]: this.data.shopName,
        [`formData.address`]: this.data.address,
        [`formData.detailAddress`]: this.data.detailAddress,
        [`formData.license`]: this.data.license,
        [`formData.remark`]: this.data.remark,
        [`rules[5].rules.required`]: false,
      });
    } else {
      // 拒绝按钮，必须提供 拒绝理由
      this.setData({
        [`formData.name`]: this.data.name,
        [`formData.shopName`]: this.data.shopName,
        [`formData.address`]: this.data.address,
        [`formData.detailAddress`]: this.data.detailAddress,
        [`formData.license`]: this.data.license,
        [`formData.remark`]: this.data.remark,
        [`rules[5].rules.required`]: true,
      });
    }
  },
  bindRegionChange(e) {
    //选择完成所在地
    let address = e.detail.value.join("");
    let addressCode = e.detail.code.join(",");
    this.setData({
      address,
      addressCode,
    });
  },
});
