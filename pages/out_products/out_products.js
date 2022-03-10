(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/out_products/out_products"],
  {
    "304a": function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("c6ac"),
        r = n.n(o);
      for (var c in o)
        "default" !== c &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(c);
      e["default"] = r.a;
    },
    "8cbd": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {
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
        r = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
        },
        c = [];
    },
    abf2: function (t, e, n) {},
    c63e: function (t, e, n) {
      "use strict";
      (function (t) {
        n("a10a");
        o(n("66fd"));
        var e = o(n("d30d"));
        function o(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, n("543d")["createPage"]));
    },
    c6ac: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var o = n("2f62");
        function r(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function c(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? r(Object(n), !0).forEach(function (e) {
                  u(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function u(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        const app = getApp()
        var s = {
          data: function () {
            return { scanFunctionIsUseable: !0 };
          },
          computed: c({}, (0, o.mapState)(["token"])),
          methods: {
            showToast: function (t) {
              this.$refs.uToast.show({
                title: t,
                type: "error",
                position: "bottom",
                icon: !1,
              });
            },
            outProduct: function (t) {
              var e = this;
              this.myRequest({
                url:app.globalData.baseUrl +  "member/goods/back_stock",
                method: "POST",
                data: { token: e.token, goods_code: t },
              }).then(function (t) {
                e.showToast(t.data.msg),
                  setTimeout(function () {
                    e.scanFunctionIsUseable = !0;
                  }, 1e3);
              });
            },
            scancode: function (t) {
              if (1 == this.scanFunctionIsUseable)
                if (
                  ((this.scanFunctionIsUseable = !1),
                  "qrcode" == t.detail.type || "QR_CODE" == t.detail.type)
                ) {
                  var e = t.detail.result.indexOf("syjn="),
                    n = t.detail.result.substring(e + 5);
                  -1 == e
                    ? (this.showToast("该商品不是石原金牛商品"),
                      (this.scanFunctionIsUseable = !0))
                    : this.outProduct(n);
                } else {
                  n = t.detail.result;
                  var o = /^(U\d{29}|\d{32}|[0-9,A-Z]{30})$/,
                    r = o.test(n);
                  console.log("条码信息为：", n, r),
                    n.length >= 30 && 1 == r
                      ? this.outProduct(n)
                      : (this.scanFunctionIsUseable = !0);
                }
            },
            cameraError: function (t) {
              this.showToast("请重新扫码");
            },
            scancodeAlbum: function () {
              var e = this;
              t.scanCode({
                scanType: ["qrCode", "barCode"],
                success: function (t) {
                  if ("QR_CODE" == t.scanType) {
                    var n = t.result.indexOf("syjn="),
                      o = t.result.substring(n + 5);
                    -1 == n
                      ? e.showToast("该商品不是石原金牛商品")
                      : e.outProduct(o);
                  } else {
                    o = t.result;
                    var r = /^(U\d{29}|\d{32}|[0-9,A-Z]{30})$/,
                      c = r.test(o);
                    o.length >= 30 && 1 == c && e.enterProduct(o);
                  }
                },
                fail: function (t) {
                  console.log("扫码出错了"), e.showToast("该条码不是商品条码");
                },
              });
            },
          },
        };
        e.default = s;
      }.call(this, n("543d")["default"]));
    },
    d30d: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("8cbd"),
        r = n("304a");
      for (var c in r)
        "default" !== c &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(c);
      n("f690");
      var u,
        s = n("f0c5"),
        a = Object(s["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "bbdffbda",
          null,
          !1,
          o["a"],
          u
        );
      e["default"] = a.exports;
    },
    f690: function (t, e, n) {
      "use strict";
      var o = n("abf2"),
        r = n.n(o);
      r.a;
    },
  },
  [["c63e", "common/runtime", "common/vendor"]],
]);
