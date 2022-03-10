(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/nonghu_detail/nonghu_detail"],
  {
    "0732": function (e, t, n) {
      "use strict";
      var r = n("e9dd"),
        o = n.n(r);
      o.a;
    },
    "14ab": function (e, t, n) {
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
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
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
        var a = {
          data: function () {
            return {
              perinfo: "",
              points: [
                { index: "1", text: "农技示范记录" },
                { index: "2", text: "技术分享" },
              ],
              user_id: "",
            };
          },
          onLoad: function (e) {
            this.getPerInfo(e.user_id), (this.user_id = e.user_id);
          },
          computed: i({}, (0, r.mapState)(["token", "userinfo", "wxinfo"])),
          methods: {
            modefiy: function () {
              e.navigateTo({ url: "../personal/personal" });
            },
            selPoints: function (t) {
              "农技示范记录" == t.text
                ? e.navigateTo({
                    url: "../nong_technology_record/nong_technology_record?user_id=".concat(
                      this.user_id,
                      "&from=",
                      "nonghu_detail"
                    ),
                  })
                : e.navigateTo({
                    url: "../technology_share/technology_share?user_id=".concat(
                      this.user_id,
                      "&from=",
                      "nonghu_detail"
                    ),
                  });
            },
            getPerInfo: function (t) {
              var n = this,
                r = this;
              this.myRequest({
                url: "member/user/get_user_info",
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
          },
        };
        t.default = a;
      }.call(this, n("543d")["default"]));
    },
    "1e25": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("f9f2"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    4269: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("14ab"),
        o = n.n(r);
      for (var i in r)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      t["default"] = o.a;
    },
    c294: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return i;
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
        o = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        i = [];
    },
    e9dd: function (e, t, n) {},
    f9f2: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("c294"),
        o = n("4269");
      for (var i in o)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      n("0732");
      var u,
        a = n("f0c5"),
        c = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "fe8bc8b4",
          null,
          !1,
          r["a"],
          u
        );
      t["default"] = c.exports;
    },
  },
  [["1e25", "common/runtime", "common/vendor"]],
]);
