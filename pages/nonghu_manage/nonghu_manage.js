(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/nonghu_manage/nonghu_manage"],
  {
    "19b0": function (t, e, r) {
      "use strict";
      var n = r("2432"),
        o = r.n(n);
      o.a;
    },
    2432: function (t, e, r) {},
    "268e": function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return o;
      }),
        r.d(e, "c", function () {
          return a;
        }),
        r.d(e, "a", function () {
          return n;
        });
      var n = {
          uSearch: function () {
            return r
              .e("uview-ui/components/u-search/u-search")
              .then(r.bind(null, "4d31"));
          },
          uImage: function () {
            return r
              .e("uview-ui/components/u-image/u-image")
              .then(r.bind(null, "9601"));
          },
          uLoadmore: function () {
            return r
              .e("uview-ui/components/u-loadmore/u-loadmore")
              .then(r.bind(null, "0921"));
          },
        },
        o = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
        },
        a = [];
    },
    "2a4d": function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = r("2f62");
        function o(t) {
          return s(t) || u(t) || i(t) || a();
        }
        function a() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function i(t, e) {
          if (t) {
            if ("string" === typeof t) return c(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? c(t, e)
                : void 0
            );
          }
        }
        function u(t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function s(t) {
          if (Array.isArray(t)) return c(t);
        }
        function c(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function f(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(r), !0).forEach(function (e) {
                  d(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function d(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        const app = getApp();
        var m = function () {
            r.e("components/popup")
              .then(
                function () {
                  return resolve(r("c577"));
                }.bind(null, r)
              )
              .catch(r.oe);
          },
          h = {
            data: function () {
              return {
                popuptype: "",
                title: "确定要删除吗？",
                isshow: !1,
                placeholder_color: "#999999",
                farmer_list: [],
                farmer_id: "",
                addfarmer: "",
                status: "loadmore",
                isloadshow: !1,
                refreshstatus: !1,
                page: 1,
                pagesize: 10,
              };
            },
            computed: l({}, (0, n.mapState)(["token"])),
            components: { Popup: m },
            onLoad: function () {
              this.getFarmerList(1, this.pagesize, "");
            },
            onPullDownRefresh: function () {
              (this.refreshstatus = !0),
                this.getFarmerList(1, this.pagesize, "");
            },
            methods: {
              scrollToBottom: function () {
                (this.isloadshow = !0), this.loadmore();
              },
              loadmore: function () {
                "nomore" != this.status &&
                  ((this.status = "loading"),
                  this.page++,
                  this.getFarmerList(this.page, this.pagesize));
              },
              watchNongDetail: function (e) {
                console.log(e),
                  t.navigateTo({
                    url: "../nonghu_detail/nonghu_detail?user_id=" + e.user_id,
                  });
              },
              search: function (t) {
                this.getFarmerList(1, this.pagesize, t);
              },
              addNonghu: function () {
                (this.title = "添加农户"),
                  (this.popuptype = "addpopup"),
                  (this.isshow = !0);
              },
              addFarmer: function () {
                var t = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/farmer/add_farmer",
                  method: "POST",
                  data: { token: t.token, farmer_mobile: t.addfarmer },
                }).then(function (e) {
                  "添加成功" == e.data.msg
                    ? (setTimeout(function () {
                        (t.isshow = !0),
                          (t.title = "添加成功"),
                          (t.popuptype = "tongzhi");
                      }, 1e3),
                      setTimeout(function () {
                        t.getFarmerList(1, 10, "");
                      }, 2e3))
                    : setTimeout(function () {
                        (t.isshow = !0),
                          (t.title = e.data.msg),
                          (t.popuptype = "tongzhi");
                      }, 1e3);
                });
              },
              getShowStatus: function (t) {
                this.isshow = t;
              },
              getFarmerList: function (e, r, n) {
                var a = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/farmer/get_farmers",
                  method: "POST",
                  data: { token: a.token, page: e, pagesize: r, keywords: n },
                }).then(function (r) {
                  switch (r.data.code) {
                    case 1:
                      var n,
                        i = r.data.data.cur_page.total_count,
                        u = Math.ceil(i / 10);
                      if (1 == e) a.farmer_list = r.data.data.list;
                      else
                        (n = a.farmer_list).push.apply(n, o(r.data.data.list));
                      (a.status = e == u || e > u ? "nomore" : "loadmore"),
                        1 == a.refreshstatus &&
                          setTimeout(function () {
                            t.stopPullDownRefresh();
                          }, 1e3);
                      break;
                    case 210:
                      1 == a.page && (a.farmer_list = []),
                        (a.status = "nomore");
                      break;
                    default:
                      break;
                  }
                });
              },
              delFarmerList: function () {
                var t = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/farmer/delete_farmer",
                  method: "POST",
                  data: { token: t.token, farmer_id: t.farmer_id },
                }).then(function (e) {
                  1 == e.data.code &&
                    "删除成功" == e.data.msg &&
                    t.getFarmerList(1, t.pagesize, "");
                });
              },
              deleted: function (t) {
                (this.isshow = !0),
                  (this.title = "确定要删除吗？"),
                  (this.popuptype = "del"),
                  (this.farmer_id = t.farmer_id);
              },
              clickItem: function (t) {
                "确定" == t
                  ? this.delFarmerList()
                  : "增加" == t && console.log("增加");
              },
              getaddValue: function (t) {
                (this.addfarmer = t), this.addFarmer();
              },
              setExpert(e) {
                //设置或取消专家
                let is_expert = e.is_expert; //0是非专家，1是专家
                let user_id = e.user_id; //用户id
                let set_val = ""; //1是设置专家，2是取消专家
                let modalTitle = "";
                if (is_expert === 0) {
                  //0表示非专家
                  modalTitle = "确定设置为农技示范户吗？";
                  set_val = 1;
                } else {
                  modalTitle = "确定取消设置吗？";
                  set_val = 2;
                }
                wx.showModal({
                  content: modalTitle,
                  success: (res) => {
                    if (res.confirm) {
                      this.ajaxSetExpert(user_id, set_val);
                    }
                    if (res.cancel) {
                    }
                  },
                });
              },
              ajaxSetExpert(user_id, set_val) {
                let token = wx.getStorageSync("token");
                wx.request({
                  url: app.globalData.baseUrl + "/member/farmer/set_expert",
                  method: "POST",
                  data: { token, user_id, set_val },
                  success: (res) => {
                    // console.log(res);
                    let data = res.data;
                    wx.showToast({
                      icon: "none",
                      title: data.msg,
                    });
                    if (data.code === 1) {
                      this.page = 1;
                      this.getFarmerList(this.page, this.pagesize, "");
                    }
                  },
                });
              },
            },
          };
        e.default = h;
      }.call(this, r("543d")["default"]));
    },
    5942: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("268e"),
        o = r("5d1a");
      for (var a in o)
        "default" !== a &&
          (function (t) {
            r.d(e, t, function () {
              return o[t];
            });
          })(a);
      r("19b0");
      var i,
        u = r("f0c5"),
        s = Object(u["a"])(
          o["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "e6da11ee",
          null,
          !1,
          n["a"],
          i
        );
      e["default"] = s.exports;
    },
    "5d1a": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("2a4d"),
        o = r.n(n);
      for (var a in n)
        "default" !== a &&
          (function (t) {
            r.d(e, t, function () {
              return n[t];
            });
          })(a);
      e["default"] = o.a;
    },
    9483: function (t, e, r) {
      "use strict";
      (function (t) {
        r("a10a");
        n(r("66fd"));
        var e = n(r("5942"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, r("543d")["createPage"]));
    },
  },
  [["9483", "common/runtime", "common/vendor"]],
]);
