// pages/changeBindPhone/changeBindPhone.js
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    rules: [
      {
        name: "mobile", //手机号
        rules: [
          { required: true, message: "mobile必填" },
          { mobile: true, message: "mobile格式不对" },
        ],
      },
      {
        name: "vcode", // 验证码
        rules: { required: true, message: "验证码必填" },
      },
    ],
    disabled: true,
    submitBtnDisabled: true,
    formData: {},
    getCodeText: "获取验证码",
  },
  onLoad(options) {},
  formInputChange(e) {
    // input框输入内容
    const { field } = e.currentTarget.dataset;
    //绑定数据到formData内
    this.setData({
      [`formData.${field}`]: e.detail.value,
    });
    //验证函数
    this.validFn();
  },
  validFn() {
    //验证函数
    this.selectComponent("#form").validate((valid, errors) => {
      if (errors) {
        // 查找错误内是否有手机号码的验证不通过
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
        // 手机号 和验证码都通过验证
        this.setData({
          disabled: false,
          submitBtnDisabled: false,
        });
      }
    });
  },
  submitForm() {
    // 确认按钮
    this.selectComponent("#form").validate((valid, errors) => {
      console.log("valid", valid, errors);
      if (!valid) {
        this.setData({
          submitBtnDisabled: true,
        });
      } else {
        // 通过验证
        // 发送更改手机的请求
        this.setData({
          submitBtnDisabled: false,
        });
        this.ajaxBindPhone();
      }
    });
  },
  getPhoneCode() {
    //点击获取验证码-发送手机验证码
    if (this.data.disabled) {
      return;
    }
    // 倒计时函数
    this.changeTime();
    wx.request({
      url: app.globalData.baseUrl + "/member/login/sendsms",
      method: "POST",
      data: { mobile: this.data.formData.mobile },
      success: (res) => {
        if (res.data.code === 1) {
          //手机验证码发送成功
        }
        wx.showToast({
          title: res.data.msg,
          icon: "none",
        });
      },
    });
  },
  changeTime() {
    // 倒计时效果函数
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
    // 确认修改手机号码的 函数
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
          // 成功更换绑定手机后，跳转到个人信息主页
          setTimeout(() => {
            wx.navigateTo({
              url: "/pages/personal/personal",
            });
          }, 500);
        }
        wx.showToast({
          title: res.data.msg,
          icon: "none",
        });
      },
    });
  },
});
