const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    from: "",
    recordlist: [],
    crop_code: "",
    mobile: "",
    realname: "",
  },
  onLoad: function (t) {
    console.log(t);
    // 缺少点击大图效果
    if (t?.crop_code) {
      this.setData({
        crop_code: t.crop_code,
      });
      this.getRecordDetail(t.crop_code);
    }
    if (t?.from === "yewuyuan") {
      this.setData({
        from: t.from,
      });
    }
    wx.setNavigationBarTitle({ title: "农技示范记录详情" });
  },

  addRecord: function () {
    wx.navigateTo({
      url: "../continue_record/continue_record?crop_code=".concat(
        this.crop_code
      ),
    });
  },
  getRecordDetail: function (e) {
    // 获取农技示范数据接口
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "/member/crop/get_crop_detail",
      method: "POST",
      data: { token: token, crop_code: e },
      success: (e) => {
        if (e.data.code === 1) {
          this.setData({
            recordlist: e.data.data.list,
            mobile: e.data.data.list[0].mobile,
            realname: e.data.data.list[0].realname,
          });
        }
      },
    });
  },
  checkCrop(e) {
    //验收和取消验收的操作按钮
    let checkStatus = e.currentTarget.dataset.checkStatus;
    let crop_id = e.currentTarget.dataset.cropId;
    let modeltitle = ""; //弹窗的content文案
    let opt = ""; //请求的方式，pass表示验收，cancel表示取消验收
    if (checkStatus === "checked") {
      // checkStatus == checked,表示已经验收
      modeltitle = "确定取消验收吗？";
      opt = "cancel";
    } else {
      //表示未验收
      modeltitle = "确定验收吗？";
      opt = "pass";
    }
    wx.showModal({
      content: modeltitle,
      success: (res) => {
        if (res.confirm) {
          this.ajaxCheckCrop(crop_id, opt);
        } else if (res.cancel) {
          //点击取消，不操作
        }
      },
    });
  },
  ajaxCheckCrop(crop_id, opt) {
    //验收和取消验收的接口请求
    let token = wx.getStorageSync("token");
    wx.request({
      url: app.globalData.baseUrl + "/member/crop/adopt_crop",
      method: "POST",
      data: { token, crop_id, opt },
      success: (res) => {
        console.log(res);
        let data = res.data;
        if (data.code === 1) {
          //操作成功后，重新加载数据
          this.getRecordDetail(this.data.crop_code);
        }
        //不管结果如果，都弹出提示
        wx.showToast({
          icon: "none",
          title: data.msg,
        });
      },
    });
  },
});
