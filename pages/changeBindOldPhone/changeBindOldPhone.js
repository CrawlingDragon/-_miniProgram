// pages/changeBindPhone/changeBindPhone.js
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    rules: [
      {
        name: "vcode", // 验证码
        rules: { required: true, message: "验证码必填" },
      },
    ],
    disabled: false,
    submitBtnDisabled: true,
    formData: {},
    getCodeText: "获取验证码",
    mobile: 15206528527,
  },
  onLoad(options) {
    this.setData({
      mobile: options?.mobile,
    });
  },
  formInputChange(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      [`formData.${field}`]: e.detail.value,
    });
    this.validFn();
  },
  validFn() {
    this.selectComponent("#form").validate((valid, errors) => {
      if (errors) {
        let r = errors.findIndex((item) => {
          return item.name === "mobile";
        });
        if (r === -1) {
          // r为-1，说明找不到错误，验证通过
          this.setData({
            disabled: false,
          });
        } else {
          this.setData({
            disabled: true,
          });
        }
        this.setData({
          submitBtnDisabled: true,
        });
      } else {
        this.setData({
          disabled: false,
          submitBtnDisabled: false,
        });
      }
    });
  },
  submitForm() {
    this.selectComponent("#form").validate((valid, errors) => {
      console.log("valid", valid, errors);
      if (!valid) {
        this.setData({
          submitBtnDisabled: true,
        });
      } else {
        this.setData({
          submitBtnDisabled: false,
        });
        this.ajaxBindPhone();
      }
    });
  },
  getPhoneCode() {
    if (this.data.disabled) {
      return;
    }
    this.changeTime();
    wx.request({
      url: app.globalData.baseUrl + "/member/login/sendsms",
      method: "POST",
      data: { mobile: this.data.mobile },
      success: (res) => {
        if (res.data.code === 1) {
          this.setData({
            disabled: true,
          });
        }
        wx.showToast({
          title: res.data.msg,
          icon: "none",
        });
      },
    });
  },
  changeTime() {
    let timer;
    let num = 60;
    this.setData({
      disabled: true,
    });
    timer = setInterval(() => {
      num--;
      this.setData({
        getCodeText: num + "S",
      });
      if (num === 1) {
        clearInterval(timer);
        this.setData({
          getCodeText: "获取验证码",
        });
        this.validFn();
      }
    }, 1000);
  },
  ajaxBindPhone() {
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "/member/user/unbind_mobile",
      method: "POST",
      data: {
        token,
        mobile: this.data.formData.mobile,
        code: this.data.formData.vcode,
      },
      success: (res) => {
        if (res.data.code === 1) {
          // todo
          wx.navigateTo({
            url: "/pages/changeBindPhone/changeBindPhone",
          });
        }
        wx.showToast({
          title: res.data.msg,
          icon: "none",
        });
      },
    });
  },
});
