(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/product_trace_detail/product_trace_detail"],
  {
    "026f": function (e, t, n) {},
    "0a54": function (e, t, n) {
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
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
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
        function a(e, t, n) {
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
        var i = {
          data: function () {
            return {
              trace_code: "",
              goods: "",
              trace_list: "",
              nodeheight: "",
            };
          },
          computed: c({}, (0, r.mapState)(["token"])),
          onLoad: function (e) {
            this.trace_code = e.trace_code;
          },
          onReady: function () {
            var t = e.createSelectorQuery().in(this).select("#product-info"),
              n = this;
            t.fields({ size: !0, scrollOffset: !0 }, function (e) {
              n.nodeheight = e.height;
            }).exec();
          },
          onShow: function () {
            this.getTraceResult();
          },
          methods: {
            goRetailerDetail: function (t) {
              e.navigateTo({
                url: "../retailer_detail/retailer_detail?user_id=" + t.user_id,
              });
            },
            getTraceResult: function () {
              var e = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/goods/get_goods_flow",
                method: "POST",
                data: { token: e.token, goods_code: e.trace_code },
              }).then(function (t) {
                1 == t.data.code &&
                  ((e.goods = t.data.data.goods),
                  (e.trace_list = t.data.data.list));
              });
            },
          },
        };
        t.default = i;
      }.call(this, n("543d")["default"]));
    },
    "16cf": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return r;
        });
      var r = {
          uIcon: function () {
            return n
              .e("uview-ui/components/u-icon/u-icon")
              .then(n.bind(null, "f93f"));
          },
        },
        o = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        c = [];
    },
    3260: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("0a54"),
        o = n.n(r);
      for (var c in r)
        "default" !== c &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(c);
      t["default"] = o.a;
    },
    "3b1b": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("7a2d"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    "7a2d": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("16cf"),
        o = n("3260");
      for (var c in o)
        "default" !== c &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(c);
      n("ef59");
      var a,
        i = n("f0c5"),
        u = Object(i["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "88b2ee4c",
          null,
          !1,
          r["a"],
          a
        );
      t["default"] = u.exports;
    },
    ef59: function (e, t, n) {
      "use strict";
      var r = n("026f"),
        o = n.n(r);
      o.a;
    },
  },
  [["3b1b", "common/runtime", "common/vendor"]],
]);
