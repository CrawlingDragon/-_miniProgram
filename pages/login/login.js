import getOpenId from "../../common/getOpenid";
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/login/login"],
  {
    "0969": function (e, t, n) {},
    1350: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = n("2f62");
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function s(e, t, n) {
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
        var a = {
          data: function () {
            return {
              isloading: !1,
              iPhoneNumber: "",
              yanzhengma: "",
              msg: "获取验证码",
              times: null,
              inputStyle: {
                backgroundColor: "#FFFFFF",
                wdith: "100%",
                padding: "0 20rpx",
                fontSize: "36rpx",
                fontFamily: "Microsoft YaHei",
                borderTopLeftRadius: "7rpx",
                borderBottomLeftRadius: "7rpx",
              },
              placeholderStyle:
                "color:#C0C4CD;font-family:Microsoft YaHei;font-size:28rpx",
              operation: "",
            };
          },
          onLoad: function (e) {
            // console.log("this", app.globalData.baseUrl);

            this.operation = e?.operation;
          },
          onShow: function (t) {
            "relogin" == this.operation
              ? console.log("relogin")
              : this.token && "1" == this.usertype
              ? e.redirectTo({ url: "../nonghu_index/nonghu_index" })
              : this.token && "2" == this.usertype
              ? e.redirectTo({ url: "../retailer_index/retailer_index" })
              : this.token &&
                "3" == this.usertype &&
                e.redirectTo({ url: "../salesman_index/salesman_index" });
          },
          computed: i(
            i({}, (0, o.mapState)(["token", "usertype"])),
            {},
            {
              islimit: function () {
                return !this.isPhoneNumber || 4 != this.yanzhengma.length;
              },
              watching: function () {
                return !(
                  !this.isPhoneNumber ||
                  null != this.times ||
                  1 != this.isPhoneNumber
                );
              },
              isPhoneNumber: function () {
                var e =
                  /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[0,1,2,3,4,5,6,7,8,9])\d{8}$/;
                return e.test(this.iPhoneNumber);
              },
            }
          ),
          methods: i(
            i(
              {},
              (0, o.mapMutations)(["setToken", "setUsertype", "setWxInfo"])
            ),
            {},
            {
              showToast: function (e) {
                this.$refs.uToast.show({
                  title: e,
                  type: "error",
                  icon: !1,
                  position: "bottom",
                });
              },
              getfocus: function () {
                var t = this;
                e.getClipboardData({
                  success: function (e) {
                    4 == e.data.length && (t.yanzhengma = e.data);
                  },
                });
              },
              getUserinfo: function () {
                this.loginOperation();
              },
              getMsgCode: function () {
                var e = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/login/sendsms",
                  method: "POST",
                  data: { mobile: e.iPhoneNumber },
                }).then(function (t) {
                  1 == t.data.code
                    ? console.log("验证码发送成功了")
                    : e.showToast("验证码发送失败，请稍后重试");
                });
              },
              getMsginfo: function () {
                if (1 == this.watching) {
                  var t = this;
                  e.getNetworkType({
                    success: function (e) {
                      if ((console.log(e.networkType), "none" == e.networkType))
                        console.log("当前断网了"),
                          t.showToast("验证码发送失败，请稍后重试");
                      else {
                        t.getMsgCode();
                        var n = 61;
                        t.times = setInterval(function () {
                          n > 0
                            ? (n--, (t.msg = n + "s"))
                            : ((t.msg = "获取验证码"),
                              clearInterval(t.times),
                              (t.times = null));
                        }, 1e3);
                      }
                    },
                  });
                } else console.log("暂时不能操作");
              },
              loginOperation: function () {
                var t = this,
                  n = this;

                this.myRequest({
                  url: app.globalData.baseUrl + "/member/login/login",
                  methods: "post",
                  data: { mobile: n.iPhoneNumber, code: n.yanzhengma },
                }).then(function (o) {
                  var r = "";
                  switch (((n.isloading = !1), o.data.msg)) {
                    case "手机号不正确":
                      (r = "手机号格式错误，请重新填写"), n.showToast(r);
                      break;
                    case "短信验证码验证失败！":
                      (r = "验证码错误，请重新填写"), n.showToast(r);
                      break;
                    case "已登录":
                      getOpenId(o.data.data.token);
                      switch (
                        (n.setToken(o.data.data.token),
                        n.setUsertype(o.data.data.user_type),
                        console.log(o.data.data.user_type),
                        o.data.data.user_type)
                      ) {
                        case 0:
                          e.getUserProfile({
                            desc: "用于完善会员资料",
                            success: function (n) {
                              "getUserProfile:ok" == n.errMsg &&
                                (t.setWxInfo(JSON.stringify(n.userInfo)),
                                e.redirectTo({
                                  url: "../regesiter/regesiter",
                                }));
                            },
                            fail: function (e) {
                              conso.log("取消了选择");
                            },
                          });
                          break;
                        case 1:
                          e.redirectTo({ url: "../nonghu_index/nonghu_index" });
                          break;
                        case 2:
                          e.redirectTo({
                            url: "../retailer_index/retailer_index",
                          });
                          break;
                        case 3:
                          e.redirectTo({
                            url: "../salesman_index/salesman_index",
                          });
                          break;
                        case 5:
                          e.redirectTo({
                            url: "../salesman_index/salesman_index",
                          });
                          break;
                        case 6:
                          e.redirectTo({
                            url: "../salesman_index/salesman_index",
                          });
                          break;
                        case 99:
                          e.redirectTo({
                            url: "../salesman_index/salesman_index",
                          });
                          break;
                        default:
                          break;
                      }
                      break;
                    default:
                      break;
                  }
                });
              },
              login: function () {
                0 == this.isloading && this.getUserinfo();
              },
            }
          ),
          watch: {
            iPhoneNumber: function (e) {
              if (11 == e.length && 0 == this.isPhoneNumber) {
                var t = "手机号格式错误，请重新填写";
                this.showToast(t);
              }
            },
          },
        };
        t.default = a;
      }.call(this, n("543d")["default"]));
    },
    2071: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("1350"),
        r = n.n(o);
      for (var i in o)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      t["default"] = r.a;
    },
    "825d": function (e, t, n) {
      "use strict";
      var o = n("0969"),
        r = n.n(o);
      r.a;
    },
    b761: function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        o(n("66fd"));
        var t = o(n("ef7e"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    d3af: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return o;
        });
      var o = {
          uInput: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("uview-ui/components/u-input/u-input"),
            ]).then(n.bind(null, "5f31"));
          },
          uToast: function () {
            return n
              .e("uview-ui/components/u-toast/u-toast")
              .then(n.bind(null, "c8b2"));
          },
          uLoading: function () {
            return n
              .e("uview-ui/components/u-loading/u-loading")
              .then(n.bind(null, "d662"));
          },
        },
        r = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        i = [];
    },
    ef7e: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("d3af"),
        r = n("2071");
      for (var i in r)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      n("825d");
      var s,
        a = n("f0c5"),
        u = Object(a["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "e24ad6f2",
          null,
          !1,
          o["a"],
          s
        );
      t["default"] = u.exports;
    },
  },
  [["b761", "common/runtime", "common/vendor"]],
]);
