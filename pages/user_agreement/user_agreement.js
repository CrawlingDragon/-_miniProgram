(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user_agreement/user_agreement"],
  {
    "074f": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n("2f62");
      function u(e, t) {
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
            ? u(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
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
      const app = getApp()
      var a = {
        data: function () {
          return { content: "", title: "" };
        },
        computed: o({}, (0, r.mapState)(["token"])),
        onLoad: function () {
          this.getUserAgreement();
        },
        methods: {
          getUserAgreement: function () {
            var e = this;
            this.myRequest({
              url: app.globalData.baseUrl + "api/app/user_agreement",
              method: "POST",
            }).then(function (t) {
              (e.content = t.data.data.content), (e.title = t.data.data.title);
            });
          },
        },
      };
      t.default = a;
    },
    "0eb9": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("2f4b"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    "2f4b": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("95e6"),
        u = n("910a");
      for (var o in u)
        "default" !== o &&
          (function (e) {
            n.d(t, e, function () {
              return u[e];
            });
          })(o);
      n("7360");
      var c,
        a = n("f0c5"),
        i = Object(a["a"])(
          u["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "05ed5c16",
          null,
          !1,
          r["a"],
          c
        );
      t["default"] = i.exports;
    },
    7360: function (e, t, n) {
      "use strict";
      var r = n("9dec"),
        u = n.n(r);
      u.a;
    },
    "910a": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("074f"),
        u = n.n(r);
      for (var o in r)
        "default" !== o &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
      t["default"] = u.a;
    },
    "95e6": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "c", function () {
          return o;
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
        u = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        o = [];
    },
    "9dec": function (e, t, n) {},
  },
  [["0eb9", "common/runtime", "common/vendor"]],
]);
