(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/nong_technology_record/nong_technology_record"],
  {
    "2ec0": function (t, e, r) {
      "use strict";
      (function (t) {
        r("a10a");
        n(r("66fd"));
        var e = n(r("8f5e"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, r("543d")["createPage"]));
    },
    4934: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("6165"),
        o = r.n(n);
      for (var i in n)
        "default" !== i &&
          (function (t) {
            r.d(e, t, function () {
              return n[t];
            });
          })(i);
      e["default"] = o.a;
    },
    6165: function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = r("2f62");
        function o(t) {
          return c(t) || u(t) || a(t) || i();
        }
        function i() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function a(t, e) {
          if (t) {
            if ("string" === typeof t) return s(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? s(t, e)
                : void 0
            );
          }
        }
        function u(t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function c(t) {
          if (Array.isArray(t)) return s(t);
        }
        function s(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function l(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function f(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? l(Object(r), !0).forEach(function (e) {
                  d(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function d(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        const app = getApp();
        var p = {
          data: function () {
            return {
              record_list: [],
              page: 1,
              pagesize: 10,
              form: "",
              user_id: "",
              isloadshow: !1,
              status: "loadmore",
              refreshstatus: !1,
            };
          },
          computed: f({}, (0, n.mapState)(["token"])),
          onLoad: function (t) {
            this.user_id = t.user_id - 0;
          },
          onShow: function () {
            this.getCropList(1, this.pagesize);
          },
          onReachBottom: function () {
            (this.status = "loadmore"), (this.isloadshow = !0), this.loadmore();
          },
          onPullDownRefresh: function () {
            (this.refreshstatus = !0), this.getCropList(1, this.pagesize);
          },
          methods: {
            loadmore: function () {
              (this.status = "loading"),
                this.page++,
                this.getCropList(this.page, this.pagesize);
            },
            getCropList: function (e, r) {
              var n = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/crop/get_crop_list",
                method: "POST",
                data: {
                  token: n.token,
                  page: e,
                  pagesize: r,
                  user_id: n.user_id,
                },
              }).then(function (r) {
                switch (r.data.code) {
                  case 1:
                    var i,
                      a = r.data.data.cur_page.total_count;
                    Math.ceil(a / 10);
                    if (1 == e) n.record_list = r.data.data.list;
                    else (i = n.record_list).push.apply(i, o(r.data.data.list));
                    1 == n.refreshstatus &&
                      setTimeout(function () {
                        t.stopPullDownRefresh();
                      }, 1e3);
                    break;
                  case 210:
                    1 == n.page && (n.record_list = []), (n.status = "nomore");
                    break;
                  default:
                    break;
                }
              });
            },
            watchDetail: function (e) {
              t.navigateTo({
                url:
                  "../medication_record_detail/medication_record_detail?crop_code=" +
                  e.crop_code +
                  "&from=yewuyuan",
              });
            },
          },
        };
        e.default = p;
      }.call(this, r("543d")["default"]));
    },
    "8f5e": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("e688"),
        o = r("4934");
      for (var i in o)
        "default" !== i &&
          (function (t) {
            r.d(e, t, function () {
              return o[t];
            });
          })(i);
      r("c357");
      var a,
        u = r("f0c5"),
        c = Object(u["a"])(
          o["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "47090d03",
          null,
          !1,
          n["a"],
          a
        );
      e["default"] = c.exports;
    },
    "9d99": function (t, e, r) {},
    c357: function (t, e, r) {
      "use strict";
      var n = r("9d99"),
        o = r.n(n);
      o.a;
    },
    e688: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return o;
      }),
        r.d(e, "c", function () {
          return i;
        }),
        r.d(e, "a", function () {
          return n;
        });
      var n = {
          uImage: function () {
            return r
              .e("uview-ui/components/u-image/u-image")
              .then(r.bind(null, "9601"));
          },
          uLoadmore: function () {
            return r
              .e("uview-ui/components/u-loadmore/u-loadmore")
              .then(r.bind(null, "0921"));
          },
        },
        o = function () {
          var t = this,
            e = t.$createElement,
            r =
              (t._self._c,
              0 !== t.record_list.length
                ? t.__map(t.record_list, function (e, r) {
                    var n = t.__get_orig(e),
                      o = e.frist_img.replace(/[\\]/g, "/");
                    return { $orig: n, g0: o };
                  })
                : null);
          t.$mp.data = Object.assign({}, { $root: { l0: r } });
        },
        i = [];
    },
  },
  [["2ec0", "common/runtime", "common/vendor"]],
]);
