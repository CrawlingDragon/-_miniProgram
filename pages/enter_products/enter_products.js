(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/enter_products/enter_products"],
  {
    "0a84": function (t, e, n) {
      "use strict";
      (function (t) {
        n("a10a");
        o(n("66fd"));
        var e = o(n("24d4"));
        function o(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, n("543d")["createPage"]));
    },
    "17b6": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return s;
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
        s = [];
    },
    "24d4": function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("17b6"),
        r = n("acd3");
      for (var s in r)
        "default" !== s &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(s);
      n("af1d");
      var c,
        u = n("f0c5"),
        a = Object(u["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "e851067c",
          null,
          !1,
          o["a"],
          c
        );
      e["default"] = a.exports;
    },
    "65a7": function (t, e, n) {
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
        function s(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? r(Object(n), !0).forEach(function (e) {
                  c(t, e, n[e]);
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
        function c(t, e, n) {
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
        var u = {
          data: function () {
            return {
              scanFunctionIsUseable: !0,
              show: !1,
              goods_list: [],
              count: "",
              height: "400",
            };
          },
          onShow: function () {},
          computed: s({}, (0, o.mapState)(["token"])),
          methods: {
            showToast: function (t) {
              this.$refs.uToast.show({
                title: t,
                type: "error",
                position: "bottom",
                icon: !1,
              });
            },
            enterProduct: function (t) {
              var e = this;
              this.myRequest({
                url:app.globalData.baseUrl +  "member/goods/stock",
                method: "POST",
                data: { token: e.token, goods_code: t },
              }).then(function (t) {
                var n = t.data.msg;
                e.showToast(n),
                  (t.data.code = 1) &&
                    ((e.goods_list = t.data.data.list),
                    (e.count = t.data.data.count)),
                  setTimeout(function () {
                    e.scanFunctionIsUseable = !0;
                  }, 300);
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
                    : this.enterProduct(n);
                } else {
                  n = t.detail.result;
                  var o = /^(U\d{29}|\d{32}|[0-9,A-Z]{30})$/,
                    r = o.test(n);
                  n.length >= 30 && 1 == r
                    ? this.enterProduct(n)
                    : (this.showToast("该商品不是石原金牛商品"),
                      (this.scanFunctionIsUseable = !0));
                }
            },
            cameraError: function (t) {
              console.log(t.detail), this.showToast("该条码不是商品条码");
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
                      : e.enterProduct(o);
                  } else {
                    o = t.result;
                    var r = /^(U\d{29}|\d{32}|[0-9,A-Z]{30})$/,
                      s = r.test(o);
                    o.length >= 30 && 1 == s && this.enterProduct(o);
                  }
                },
                fail: function (t) {
                  e.showToast("请重新扫码");
                },
              });
            },
          },
          watch: {
            count: function (t) {
              t > 0 && (this.show = !0);
            },
          },
        };
        e.default = u;
      }.call(this, n("543d")["default"]));
    },
    acd3: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("65a7"),
        r = n.n(o);
      for (var s in o)
        "default" !== s &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(s);
      e["default"] = r.a;
    },
    af1d: function (t, e, n) {
      "use strict";
      var o = n("f299"),
        r = n.n(o);
      r.a;
    },
    f299: function (t, e, n) {},
  },
  [["0a84", "common/runtime", "common/vendor"]],
]);
