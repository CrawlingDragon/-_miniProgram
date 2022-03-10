(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/apply_need/apply_need"],
  {
    "405e": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return u;
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
        },
        o = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
        },
        u = [];
    },
    "59c2": function (t, e, n) {},
    "5ef0": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("405e"),
        o = n("b3af");
      for (var u in o)
        "default" !== u &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(u);
      n("d155");
      var c,
        i = n("f0c5"),
        a = Object(i["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "18bb840e",
          null,
          !1,
          r["a"],
          c
        );
      e["default"] = a.exports;
    },
    "6c8a": function (t, e, n) {
      "use strict";
      (function (t) {
        n("a10a");
        r(n("66fd"));
        var e = r(n("5ef0"));
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, n("543d")["createPage"]));
    },
    "8ebf": function (t, e, n) {
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
        function u(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? o(Object(n), !0).forEach(function (e) {
                  c(t, e, n[e]);
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
        const app = getApp();
        var i = {
          data: function () {
            return {
              support_text: "",
              type: "textarea",
              border: !0,
              height: 260,
              autoHeight: !0,
              maxlength: 200,
              placeholder: "请输入您希望获得的平台支持",
              count: 0,
              input_style: {
                fontSize: "30rpx",
                fontFamily: "Microsoft YaHei",
                fontWeight: "Regular",
                paddingTop: "30rpx",
              },
              placeholder_style:
                "color:#99999;font-size:30rpx;font-family: Microsoft YaHei;font-weight: 400;",
              isactive: !1,
            };
          },
          computed: u({}, (0, r.mapState)(["token"])),
          methods: {
            submit: function () {
              var e = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/support/apply_support",
                method: "POST",
                data: { token: e.token, content: e.support_text },
              }).then(function (e) {
                1 == e.data.code &&
                  t.navigateBack({ url: "../need_supports/need_supports" });
              });
            },
          },
          watch: {
            support_text: function (t) {
              (this.count = t.length),
                t.length > 0 ? (this.isactive = !0) : (this.isactive = !1);
            },
          },
        };
        e.default = i;
      }.call(this, n("543d")["default"]));
    },
    b3af: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("8ebf"),
        o = n.n(r);
      for (var u in r)
        "default" !== u &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(u);
      e["default"] = o.a;
    },
    d155: function (t, e, n) {
      "use strict";
      var r = n("59c2"),
        o = n.n(r);
      o.a;
    },
  },
  [["6c8a", "common/runtime", "common/vendor"]],
]);
