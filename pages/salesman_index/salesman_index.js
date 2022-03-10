(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/salesman_index/salesman_index"],
  {
    "08a4": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("ba0e"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    "0d5e": function (e, t, n) {
      "use strict";
      var r = n("8693"),
        a = n.n(r);
      a.a;
    },
    "191c": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("9b00"),
        a = n.n(r);
      for (var o in r)
        "default" !== o &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
      t["default"] = a.a;
    },
    "5c88": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
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
          uIcon: function () {
            return n
              .e("uview-ui/components/u-icon/u-icon")
              .then(n.bind(null, "f93f"));
          },
        },
        a = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        o = [];
    },
    8693: function (e, t, n) {},
    "9b00": function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n("2f62");
        function a(e, t) {
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
              ? a(Object(n), !0).forEach(function (t) {
                  i(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
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
        const app = getApp()
        var u = {
          data: function () {
            return {
              perinfo: "",
              points: [
                { index: "1", text: "农技示范户管理" },
                { index: "2", text: "零售商管理" },
                { index: "3", text: "农技示范记录" },
                { index: "4", text: "进货情况" },
                { index: "5", text: "技术分享" },
                { index: "6", text: "销售支持" },
                { index: "7", text: "扫码追溯" },
                { index: "8", text: "手工输入追溯" },
              ],
            };
          },
          onShow: function () {
            this.getPerInfo(), e.hideHomeButton();
          },
          computed: o({}, (0, r.mapState)(["token", "userinfo", "wxinfo"])),
          methods: {
            modefiy: function () {
              e.navigateTo({ url: "../personal/personal" });
            },
            getPerInfo: function () {
              var t = this,
                n = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/user/get_user_info",
                method: "POST",
                data: { token: n.token },
              }).then(function (n) {
                1 == n.data.code
                  ? (t.perinfo = n.data.data)
                  : 510 == n.data.code &&
                    "无效的token参数！" == n.data.msg &&
                    e.navigateTo({ url: "../login/login?operation=relogin" });
              });
            },
            selPoints: function (t) {
              switch (t.text) {
                case "农技示范户管理":
                  e.navigateTo({ url: "../nonghu_manage/nonghu_manage" });
                  break;
                case "零售商管理":
                  e.navigateTo({ url: "../retailer_manage/retailer_manage" });
                  break;
                case "农技示范记录":
                  e.navigateTo({
                    url: "../nong_technology_record/nong_technology_record",
                  });
                  break;
                case "进货情况":
                  e.navigateTo({
                    url: "../enter_products_bysale/enter_products_bysale",
                  });
                  break;
                case "技术分享":
                  e.navigateTo({
                    url: "../technology_share/technology_share?from=salesman_index",
                  });
                  break;
                case "销售支持":
                  e.navigateTo({ url: "../sale_support/sale_support" });
                  break;
                case "扫码追溯":
                  e.navigateTo({ url: "../scan_trace/scan_trace" });
                  break;
                case "手工输入追溯":
                  e.navigateTo({ url: "../input_trace/input_trace" });
                  break;
                default:
                  console.log("点错了");
                  break;
              }
            },
          },
        };
        t.default = u;
      }.call(this, n("543d")["default"]));
    },
    ba0e: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("5c88"),
        a = n("191c");
      for (var o in a)
        "default" !== o &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      n("0d5e");
      var i,
        u = n("f0c5"),
        c = Object(u["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "71df09ff",
          null,
          !1,
          r["a"],
          i
        );
      t["default"] = c.exports;
    },
  },
  [["08a4", "common/runtime", "common/vendor"]],
]);
