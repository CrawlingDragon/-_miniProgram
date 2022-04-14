(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/retailer_detail/retailer_detail"],
  {
    "12bd": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("2987"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    2987: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("48d2"),
        i = n("bce3");
      for (var o in i)
        "default" !== o &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(o);
      n("2ff8");
      var u,
        a = n("f0c5"),
        c = Object(a["a"])(
          i["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "6837db62",
          null,
          !1,
          r["a"],
          u
        );
      t["default"] = c.exports;
    },
    "2ff8": function (e, t, n) {
      "use strict";
      var r = n("5b30"),
        i = n.n(r);
      i.a;
    },
    "48d2": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return o;
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
        },
        i = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        o = [];
    },
    "5b30": function (e, t, n) {},
    "8f3b": function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n("2f62");
        function i(e, t) {
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
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function u(e, t, n) {
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
              perinfo: "",
              points: [
                { index: "1", text: "进货情况" },
                { index: "2", text: "销售支持" },
                { index: "3", text: "积分日志" },
              ],
              user_id: "",
            };
          },
          onLoad: function (e) {
            (this.user_id = e.user_id), this.getPerInfo(e.user_id);
          },
          computed: o({}, (0, r.mapState)(["token"])),
          methods: {
            getPerInfo: function (t) {
              var n = this,
                r = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/user/get_user_info",
                method: "POST",
                data: { token: r.token, user_id: t },
              }).then(function (t) {
                1 == t.data.code
                  ? (n.perinfo = t.data.data)
                  : 510 == t.data.code &&
                    "无效的token参数！" == t.data.msg &&
                    e.navigateTo({ url: "../login/login?operation=relogin" });
              });
            },
            modefiy: function () {
              e.navigateTo({ url: "../personal/personal" });
            },
            selPoints: function (t) {
              "进货情况" == t.text
                ? e.navigateTo({
                    url:
                      "../enter_products_statistics/enter_products_statistics?user_id=" +
                      this.user_id,
                  })
                : e.navigateTo({
                    url: "../sale_support/sale_support?user_id=" + this.user_id,
                  });
            },
          },
        };
        t.default = a;
      }.call(this, n("543d")["default"]));
    },
    bce3: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("8f3b"),
        i = n.n(r);
      for (var o in r)
        "default" !== o &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
      t["default"] = i.a;
    },
  },
  [["12bd", "common/runtime", "common/vendor"]],
]);
