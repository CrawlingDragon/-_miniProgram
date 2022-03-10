(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/input_trace/input_trace"],
  {
    "0042": function (t, e, n) {
      "use strict";
      (function (t) {
        n("a10a");
        r(n("66fd"));
        var e = r(n("0be4"));
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, n("543d")["createPage"]));
    },
    "0be4": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("7bb7"),
        o = n("340c");
      for (var c in o)
        "default" !== c &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(c);
      n("156c");
      var a,
        u = n("f0c5"),
        i = Object(u["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "894b1046",
          null,
          !1,
          r["a"],
          a
        );
      e["default"] = i.exports;
    },
    "156c": function (t, e, n) {
      "use strict";
      var r = n("7e0a"),
        o = n.n(r);
      o.a;
    },
    "340c": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("3fa9"),
        o = n.n(r);
      for (var c in r)
        "default" !== c &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(c);
      e["default"] = o.a;
    },
    "3fa9": function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var r = n("2f62");
        function o(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function c(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? o(Object(n), !0).forEach(function (e) {
                  a(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function a(t, e, n) {
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
              bar_code: "",
              type: "text",
              text1: "请输入条形码下方30位条码",
              border: !0,
              height: 100,
              input_style: {
                fontSize: "30rpx",
                fontFamily: "Microsoft YaHei",
                fontWeight: "Regular",
                paddingLeft: "28rpx",
                paddingRight: "28rpx",
              },
              placeholder_style: "color:#99999;font-size:28rpx",
              isactive: !1,
            };
          },
          computed: c({}, (0, r.mapState)(["token"])),
          methods: {
            showToast: function (t) {
              this.$refs.uToast.show({
                title: t,
                type: "error",
                position: "bottom",
                icon: !1,
              });
            },
            getTraceResult: function (e) {
              var n = this;
              this.myRequest({
                url:app.globalData.baseUrl +  "member/goods/get_goods_flow",
                method: "POST",
                data: { token: n.token, goods_code: e },
              }).then(function (e) {
                switch (e.data.code) {
                  case 1:
                    (n.scanFunctionIsUseable = !0),
                      t.navigateTo({
                        url:
                          "../product_trace_detail/product_trace_detail?trace_code=" +
                          n.bar_code,
                      });
                    break;
                  case 0:
                    (n.scanFunctionIsUseable = !0), n.showToast(e.data.msg);
                    break;
                  default:
                    n.scanFunctionIsUseable = !0;
                    break;
                }
              });
            },
            submit: function () {
              this.getTraceResult(this.bar_code);
            },
          },
          watch: {
            bar_code: function (t) {
              t.length >= 30 ? (this.isactive = !0) : (this.isactive = !1);
            },
          },
        };
        e.default = u;
      }.call(this, n("543d")["default"]));
    },
    "7bb7": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return r;
        });
      var r = {
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
        },
        o = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
        },
        c = [];
    },
    "7e0a": function (t, e, n) {},
  },
  [["0042", "common/runtime", "common/vendor"]],
]);
