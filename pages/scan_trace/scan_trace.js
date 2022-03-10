(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/scan_trace/scan_trace"],
  {
    "09d2": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("a048"),
        c = n("c16e");
      for (var s in c)
        "default" !== s &&
          (function (e) {
            n.d(t, e, function () {
              return c[e];
            });
          })(s);
      n("1e72");
      var r,
        a = n("f0c5"),
        i = Object(a["a"])(
          c["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "b2c00ad4",
          null,
          !1,
          o["a"],
          r
        );
      t["default"] = i.exports;
    },
    "1e72": function (e, t, n) {
      "use strict";
      var o = n("511b"),
        c = n.n(o);
      c.a;
    },
    "511b": function (e, t, n) {},
    a048: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return o;
        });
      var o = {
          uIcon: function () {
            return n
              .e("uview-ui/components/u-icon/u-icon")
              .then(n.bind(null, "f93f"));
          },
          uToast: function () {
            return n
              .e("uview-ui/components/u-toast/u-toast")
              .then(n.bind(null, "c8b2"));
          },
        },
        c = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        s = [];
    },
    bbcf: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = n("2f62");
        function c(e, t) {
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
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(n), !0).forEach(function (t) {
                  r(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function r(e, t, n) {
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
        const app = getApp()
        var a = {
          data: function () {
            return {
              scanFunctionIsUseable: !0,
              show: !1,
              good_code: "",
              limitroute: !0,
            };
          },
          computed: s({}, (0, o.mapState)(["token"])),
          onShow: function () {
            (this.limitroute = !0), (this.scanFunctionIsUseable = !0);
          },
          methods: {
            showToast: function (e) {
              this.$refs.uToast.show({
                title: e,
                type: "error",
                position: "bottom",
                icon: !1,
              });
            },
            getTraceResult: function (t) {
              var n = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/goods/get_goods_flow",
                method: "POST",
                data: { token: n.token, goods_code: t },
              }).then(function (o) {
                switch (o.data.code) {
                  case 1:
                    1 == n.limitroute &&
                      ((n.scanFunctionIsUseable = !0),
                      e.navigateTo({
                        url:
                          "../product_trace_detail/product_trace_detail?trace_code=" +
                          t,
                      }),
                      (n.limitroute = !1));
                    break;
                  case 0:
                    (n.scanFunctionIsUseable = !0), n.showToast(o.data.msg);
                    break;
                  default:
                    n.scanFunctionIsUseable = !0;
                    break;
                }
              });
            },
            scancode: function (e) {
              if (1 == this.scanFunctionIsUseable)
                if (
                  ((this.scanFunctionIsUseable = !1),
                  "qrcode" == e.detail.type || "QR_CODE" == e.detail.type)
                ) {
                  console.log("这边应该执行的");
                  var t = e.detail.result.indexOf("syjn="),
                    n = e.detail.result.substring(t + 5);
                  -1 == t
                    ? (this.showToast("该商品不是石原金牛商品"),
                      (this.scanFunctionIsUseable = !0))
                    : ((this.good_code = n), this.getTraceResult(n));
                } else {
                  n = e.detail.result;
                  n.length >= 30
                    ? this.getTraceResult(n)
                    : (this.scanFunctionIsUseable = !0);
                }
            },
            cameraError: function (e) {
              this.showToast("该条码不是商品条码");
            },
            scancodeAlbum: function () {
              var t = this;
              e.scanCode({
                scanType: ["qrCode", "barCode"],
                success: function (e) {
                  if (
                    (console.log("客户端扫码获取到的信息", e),
                    "QR_CODE" == e.scanType)
                  ) {
                    var n = e.result.indexOf("syjn="),
                      o = e.result.substring(n + 5);
                    -1 == n
                      ? t.showToast("该商品不是石原金牛商品")
                      : ((t.good_code = o), t.getTraceResult(o));
                  } else {
                    o = e.result;
                    o.length >= 30 && this.getTraceResult(o);
                  }
                },
                fail: function (e) {
                  "scanCode:fail" == e.errMsg &&
                    (console.log("扫码出错了", e),
                    t.showToast("该条码不是商品条码"));
                },
              });
            },
          },
        };
        t.default = a;
      }.call(this, n("543d")["default"]));
    },
    c16e: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("bbcf"),
        c = n.n(o);
      for (var s in o)
        "default" !== s &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(s);
      t["default"] = c.a;
    },
    f56f: function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        o(n("66fd"));
        var t = o(n("09d2"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
  },
  [["f56f", "common/runtime", "common/vendor"]],
]);
