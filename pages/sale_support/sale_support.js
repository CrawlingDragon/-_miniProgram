(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/sale_support/sale_support"],
  {
    "3d37": function (t, e, r) {},
    5959: function (t, e, r) {
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
          uLoadmore: function () {
            return r
              .e("uview-ui/components/u-loadmore/u-loadmore")
              .then(r.bind(null, "0921"));
          },
        },
        o = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
        },
        i = [];
    },
    6223: function (t, e, r) {
      "use strict";
      (function (t) {
        r("a10a");
        n(r("66fd"));
        var e = n(r("c610"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, r("543d")["createPage"]));
    },
    "873f": function (t, e, r) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = r("2f62");
        function o(t) {
          return u(t) || s(t) || a(t) || i();
        }
        function i() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function a(t, e) {
          if (t) {
            if ("string" === typeof t) return c(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? c(t, e)
                : void 0
            );
          }
        }
        function s(t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function u(t) {
          if (Array.isArray(t)) return c(t);
        }
        function c(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function f(t, e) {
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
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(r), !0).forEach(function (e) {
                  d(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (e) {
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
        const app = getApp()
        var p = {
          data: function () {
            return {
              title: "确定要删除吗？",
              isshow: !1,
              list: [],
              status: "loadmore",
              isloadshow: !1,
              refreshstatus: !1,
              page: 1,
              pagesize: 10,
              supportid: "",
              user_id: "",
            };
          },
          computed: l({}, (0, n.mapState)(["token"])),
          onLoad: function (t) {
            this.user_id = t.user_id;
          },
          onShow: function () {
            this.getNeedList(1, this.pagesize);
          },
          methods: {
            pullDownRefresh: function () {
              this.isloadshow = !1;
              this.refreshstatus ||
                ((this.refreshstatus = !0), this.getNeedList(1, this.pagesize));
            },
            getNeedList: function (t, e) {
              var r = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/support/get_support_list",
                method: "POST",
                data: {
                  token: r.token,
                  page: t,
                  pagesize: e,
                  user_id: r.user_id ? r.user_id : "",
                },
              }).then(function (e) {
                switch (e.data.code) {
                  case 1:
                    var n,
                      i = e.data.data.cur_page.total_count,
                      a = Math.ceil(i / 10);
                    if (1 == t) r.list = e.data.data.list;
                    else (n = r.list).push.apply(n, o(e.data.data.list));
                    (r.status = t == a || t > a ? "nomore" : "loadmore"),
                      setTimeout(function () {
                        r.refreshstatus = !1;
                      }, 1e3);
                    break;
                  case 210:
                    1 == r.page && (r.list = []),
                      (r.status = "nomore"),
                      setTimeout(function () {
                        r.refreshstatus = !1;
                      }, 1e3);
                    break;
                  default:
                    setTimeout(function () {
                      r.refreshstatus = !1;
                    }, 1e3);
                    break;
                }
              });
            },
            scrollToBottom: function () {
              (this.isloadshow = !0), this.loadmore();
            },
            loadmore: function () {
              "nomore" != this.status &&
                ((this.status = "loading"),
                this.page++,
                this.getNeedList(this.page, this.pagesize));
            },
            goRetilerDetail: function (e) {
              t.navigateTo({
                url: "../retailer_detail/retailer_detail?user_id=" + e.user_id,
              });
            },
          },
        };
        e.default = p;
      }.call(this, r("543d")["default"]));
    },
    c402: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("873f"),
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
    c610: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("5959"),
        o = r("c402");
      for (var i in o)
        "default" !== i &&
          (function (t) {
            r.d(e, t, function () {
              return o[t];
            });
          })(i);
      r("f61d");
      var a,
        s = r("f0c5"),
        u = Object(s["a"])(
          o["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "b986aa2a",
          null,
          !1,
          n["a"],
          a
        );
      e["default"] = u.exports;
    },
    f61d: function (t, e, r) {
      "use strict";
      var n = r("3d37"),
        o = r.n(n);
      o.a;
    },
  },
  [["6223", "common/runtime", "common/vendor"]],
]);
