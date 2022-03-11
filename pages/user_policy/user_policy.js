(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user_policy/user_policy"],
  {
    "199b": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("53d2"),
        o = n("f9e7");
      for (var u in o)
        "default" !== u &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(u);
      n("eed5");
      var c,
        a = n("f0c5"),
        i = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "07866650",
          null,
          !1,
          r["a"],
          c
        );
      t["default"] = i.exports;
    },
    "53d2": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return r;
        });
      var r = {
          uParse: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("uview-ui/components/u-parse/u-parse"),
            ]).then(n.bind(null, "912e"));
          },
        },
        o = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        u = [];
    },
    "7df5": function (e, t, n) {},
    "98bd": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("199b"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    ee20: function (e, t, n) {
      "use strict";
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
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
      function c(e, t, n) {
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
          return { content: "", title: "" };
        },
        computed: u({}, (0, r.mapState)(["token"])),
        onLoad: function () {
          this.getUserAgreement();
        },
        methods: {
          getUserAgreement: function () {
            var e = this;
            this.myRequest({
              url: app.globalData.baseUrl + "api/app/service_agreement",
              method: "POST",
            }).then(function (t) {
              (e.content = t.data.data.content), (e.title = t.data.data.title);
            });
          },
        },
      };
      t.default = a;
    },
    eed5: function (e, t, n) {
      "use strict";
      var r = n("7df5"),
        o = n.n(r);
      o.a;
    },
    f9e7: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("ee20"),
        o = n.n(r);
      for (var u in r)
        "default" !== u &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(u);
      t["default"] = o.a;
    },
  },
  [["98bd", "common/runtime", "common/vendor"]],
]);
