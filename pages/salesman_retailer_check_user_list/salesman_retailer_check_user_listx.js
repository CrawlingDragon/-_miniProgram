// pages/salesman_retailer_check_user_list/salesman_retailer_check_user_listx.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    list: [],
    loading_text: "加载更多...",
    noMore_text: "无更多数据",
    loading: false,
    noMore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ajaxGetList();
  },
  ajaxGetList() {
    let token = wx.getStorageSync("token");
    this.setData({
      loading: true,
    });
    wx.request({
      url: app.globalData.baseUrl + "/member/retail/get_retails_auth_list",
      method: "POST",
      data: { token, page: this.data.page },
      success: (res) => {
        let data = res.data;
        if (data.code === 1) {
          this.setData({
            list: [...this.data.list, ...data.data.list],
            page: data.data.cur_page.page + 1,
            loading: false,
          });
        } else if (data.code === 210) {
          this.setData({
            noMore: true,
            loading: false,
          });
        } else if (data.code === 510) {
          //token 过期的情况
          wx.showToast({
            title: data.msg,
            icon: "error",
            duration: 2000,
          });
          setTimeout(() => {
            wx.navigateTo({ url: "../login/login?operation=relogin" });
          }, 300);
        } else {
          this.setData({
            loading: false,
          });
        }
      },
    });
  },
  navigateFn(e) {
    let auth_id = e.currentTarget.dataset.auth_id;
    //点击列表，导航到审核页面
    wx.navigateTo({
      url: `/pages/salesman_approve/salesman_approve?auth_id=${auth_id}`,
    });
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.noMore) {
      return;
    }
    this.ajaxGetList();
  },
});
