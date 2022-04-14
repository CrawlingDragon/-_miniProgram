// pages/salesman_retailer_index/salesman_retailer_index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    has_auth: "", //时候有零售商身份审核
    has_support: "", //是否有销售支持
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.has_auth && options.has_support) {
      this.setData({
        has_auth: options.has_auth,
        has_support: options.has_support,
      });
    }
  },
  navgativeFn(e) {
    //路由函数
    let text = e.currentTarget.dataset.text;
    switch (text) {
      case "零售商管理":
        wx.navigateTo({
          url: "/pages/retailer_manage/retailer_manage",
        });
        break;
      case "零售商身份审核":
        wx.navigateTo({
          url: "/pages/salesman_retailer_check_user_list/salesman_retailer_check_user_listx",
        });
        break;
      case "销售支持":
        wx.navigateTo({
          url: "/pages/sale_support/sale_support",
        });
        break;
      case "进货情况":
        wx.navigateTo({
          url: "/pages/enter_products_bysale/enter_products_bysale",
        });
        break;
      case "零售商积分日志":
        wx.navigateTo({
          url: "url",
        });
        break;
    }
  },
});
