(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/personal/personal"],
  {
    "3e06": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("c21e"),
        o = n.n(r);
      for (var a in r)
        "default" !== a &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(a);
      t["default"] = o.a;
    },
    "7a62": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("7fe9"),
        o = n("3e06");
      for (var a in o)
        "default" !== a &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(a);
      n("824b");
      var i,
        u = n("f0c5"),
        c = Object(u["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "09a960fa",
          null,
          !1,
          r["a"],
          i
        );
      t["default"] = c.exports;
    },
    "7fe9": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return r;
        });
      var r = {
          uImage: function () {
            return n
              .e("uview-ui/components/u-image/u-image")
              .then(n.bind(null, "9601"));
          },
          uIcon: function () {
            return n
              .e("uview-ui/components/u-icon/u-icon")
              .then(n.bind(null, "f93f"));
          },
          uField: function () {
            return n
              .e("uview-ui/components/u-field/u-field")
              .then(n.bind(null, "29d2"));
          },
          uPicker: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("uview-ui/components/u-picker/u-picker"),
            ]).then(n.bind(null, "64f0"));
          },
          uActionSheet: function () {
            return n
              .e("uview-ui/components/u-action-sheet/u-action-sheet")
              .then(n.bind(null, "f680"));
          },
        },
        o = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        a = [];
    },
    "824b": function (e, t, n) {
      "use strict";
      var r = n("c0b9"),
        o = n.n(r);
      o.a;
    },
    c0b9: function (e, t, n) {},
    c21e: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n("2f62");
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function a(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  i(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const app = getApp();
        var u = function () {
            n.e("components/popup")
              .then(
                function () {
                  return resolve(n("c577"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
          c = {
            data: function () {
              return {
                src: "",
                title: "确定要退出登录吗？",
                isshow: !1,
                show_address: !1,
                mobile: "18888888888",
                username: "用户甲",
                shopname: "",
                address: "浙江省杭州市滨江区",
                address1: "",
                actionshow: !1,
                right_icon: "arrow-right",
                inputAlign: "right",
                fieldstyle: {
                  fontSize: "30rpx",
                  color: "#333333",
                  paddingLeft: "30rpx",
                },
                params: { province: !0, city: !0, area: !0 },
                options: [
                  { text: "用户协议" },
                  { text: "用户隐私" },
                  { text: "退出登录" },
                ],
                selList: [{ text: "拍照" }, { text: "从手机相册选择" }],
              };
            },
            onLoad: function () {
              this.getPerInfo();
            },
            computed: a({}, (0, r.mapState)(["token", "userinfo", "usertype"])),
            components: { Popup: u },
            methods: {
              modefiyImg: function () {
                this.actionshow = !0;
              },
              getPerInfo: function () {
                var e = this,
                  t = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/user/get_user_info",
                  method: "POST",
                  data: { token: t.token },
                }).then(function (t) {
                  if (1 == t.data.code) {
                    var n = t.data.data;
                    (e.username = n.realname),
                      (e.mobile = n.mobile),
                      (e.shopname = n.shop_name),
                      (e.address = n.address[0]),
                      (e.address1 = n.address[1]),
                      (e.src = n.avatar);
                  }
                });
              },
              getclickItem: function (t) {
                if ("确定" == t)
                  try {
                    e.clearStorageSync(),
                      setTimeout(function () {
                        e.reLaunch({ url: "../login/login?operation=relogin" });
                      }, 1e3);
                  } catch (n) {}
              },
              clickItem: function (t) {
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
                this.show_address = !0;
              },
              updataInfo: function () {
                var t = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/user/update_user_info",
                  method: "POST",
                  data: {
                    token: t.token,
                    realname: t.username,
                    avatar: t.src,
                    address:
                      "1" == t.usertype || "2" == t.usertype
                        ? [t.address, t.address1]
                        : "",
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
              watchAgreement: function (t) {
                switch (t) {
                  case 0:
                    e.navigateTo({ url: "../user_agreement/user_agreement" });
                    break;
                  case 1:
                    e.navigateTo({ url: "../user_policy/user_policy" });
                    break;
                  case 2:
                    this.isshow = !0;
                    break;
                  default:
                    break;
                }
              },
              reserve: function () {
                this.updataInfo();
              },
            },
          };
        t.default = c;
      }.call(this, n("543d")["default"]));
    },
    f353: function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("7a62"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
  },
  [["f353", "common/runtime", "common/vendor"]],
]);
