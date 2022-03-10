(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/nonghu_index/nonghu_index"],
  {
    "3ae7": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("72b8"),
        r = n("ad97");
      for (var u in r)
        "default" !== u &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(u);
      n("8a17");
      var i,
        a = n("f0c5"),
        c = Object(a["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "3235c4e5",
          null,
          !1,
          o["a"],
          i
        );
      t["default"] = c.exports;
    },
    "4fb5": function (e, t, n) {
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
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  i(e, t, n[t]);
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
        var a = {
          data: function () {
            return {
              perinfo: "",
              points: [
                { index: "1", text: "用药记录" },
                { index: "2", text: "上传分享截图" },
              ],
            };
          },
          onShow: function () {
            this.getPerInfo(), e.hideHomeButton();
          },
          computed: u({}, (0, o.mapState)(["token", "userinfo", "wxinfo"])),
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
              "用药记录" == t.text
                ? e.navigateTo({
                    url: "../medication_record/medication_record",
                  })
                : e.navigateTo({ url: "../upload_share/upload_share" });
            },
          },
        };
        t.default = a;
      }.call(this, n("543d")["default"]));
    },
    "72b8": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return o;
        });
      var o = {
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
        r = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        u = [];
    },
    "7de9": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        o(n("66fd"));
        var t = o(n("3ae7"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    "8a17": function (e, t, n) {
      "use strict";
      var o = n("987e"),
        r = n.n(o);
      r.a;
    },
    "987e": function (e, t, n) {},
    ad97: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("4fb5"),
        r = n.n(o);
      for (var u in o)
        "default" !== u &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(u);
      t["default"] = r.a;
    },
  },
  [["7de9", "common/runtime", "common/vendor"]],
]);
