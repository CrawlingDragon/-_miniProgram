(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/medication_record_detail/medication_record_detail"],
  {
    "2d57": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("f974"),
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
    "44b1": function (e, t, n) {},
    "4f95": function (e, t, n) {
      "use strict";
      var r = n("44b1"),
        o = n.n(r);
      o.a;
    },
    "879b": function (e, t, n) {
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
          uImage: function () {
            return n
              .e("uview-ui/components/u-image/u-image")
              .then(n.bind(null, "9601"));
          },
          uLoading: function () {
            return n
              .e("uview-ui/components/u-loading/u-loading")
              .then(n.bind(null, "d662"));
          },
        },
        o = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        c = [];
    },
    "9f3f": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("a109"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    a109: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("879b"),
        o = n("2d57");
      for (var c in o)
        "default" !== c &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(c);
      n("4f95");
      var a,
        i = n("f0c5"),
        u = Object(i["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "c6589be2",
          null,
          !1,
          r["a"],
          a
        );
      t["default"] = u.exports;
    },
    f974: function (e, t, n) {
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
              from: "",
              recordlist: [],
              crop_code: "",
              mobile: "",
              realname: "",
            };
          },
          onLoad: function (t) {
            (this.crop_code = t.crop_code),
              t.crop_code && this.getRecordDetail(t.crop_code),
              (this.from = t.from),
              "yewuyuan" == t.from &&
                e.setNavigationBarTitle({ title: "农技示范记录详情" });
          },
          computed: c({}, (0, r.mapState)(["token"])),
          methods: {
            watchBigPic: function (t) {
              var n = [];
              n.push(t), e.previewImage({ urls: n });
            },
            addRecord: function () {
              e.navigateTo({
                url: "../continue_record/continue_record?crop_code=".concat(
                  this.crop_code
                ),
              });
            },
            getRecordDetail: function (e) {
              var t = this;
              this.myRequest({
                url:app.globalData.baseUrl +  "member/crop/get_crop_detail",
                method: "POST",
                data: { token: t.token, crop_code: e },
              }).then(function (e) {
                1 == e.data.code &&
                  ((t.recordlist = e.data.data.list),
                  (t.mobile = e.data.data.list[0].mobile),
                  (t.realname = e.data.data.list[0].realname));
              });
            },
          },
        };
        t.default = i;
      }.call(this, n("543d")["default"]));
    },
  },
  [["9f3f", "common/runtime", "common/vendor"]],
]);
