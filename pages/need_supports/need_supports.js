(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/need_supports/need_supports"],
  {
    "28a3": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("e102"),
        o = n("fe06");
      for (var i in o)
        "default" !== i &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
      n("3578");
      var a,
        s = n("f0c5"),
        u = Object(s["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "3ac9d132",
          null,
          !1,
          r["a"],
          a
        );
      e["default"] = u.exports;
    },
    3578: function (t, e, n) {
      "use strict";
      var r = n("6ce3"),
        o = n.n(r);
      o.a;
    },
    "4a07": function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var r = n("2f62");
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
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
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
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function f(t, e) {
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
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(n), !0).forEach(function (e) {
                  d(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function d(t, e, n) {
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
        const app = getApp()
        var p = function () {
            n.e("components/popup")
              .then(
                function () {
                  return resolve(n("c577"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
          h = {
            data: function () {
              return {
                title: "确定要删除吗？",
                list: [],
                page: 1,
                pagesize: 10,
                supportid: "",
                isloadshow: !1,
                status: "loadmore",
                isshow: !1,
                refreshstatus: !1,
              };
            },
            computed: l({}, (0, r.mapState)(["token", "usertype"])),
            components: { Popup: p },
            onShow: function () {
              this.getNeedList(1, this.pagesize);
            },
            methods: {
              pullDownRefresh: function () {
                this.refreshstatus ||
                  ((this.refreshstatus = !0),
                  this.getNeedList(1, this.pagesize));
              },
              getNeedList: function (t, e) {
                var n = this;
                this.myRequest({
                  url:app.globalData.baseUrl +  "member/support/get_support_list",
                  method: "POST",
                  data: { token: n.token, page: t, pagesize: e },
                }).then(function (e) {
                  switch (e.data.code) {
                    case 1:
                      var r,
                        i = e.data.data.cur_page.total_count,
                        a = Math.ceil(i / 10);
                      if (1 == t) n.list = e.data.data.list;
                      else (r = n.list).push.apply(r, o(e.data.data.list));
                      (n.status = t == a || t > a ? "nomore" : "loadmore"),
                        setTimeout(function () {
                          n.refreshstatus = !1;
                        }, 1e3);
                      break;
                    case 210:
                      (n.list = []),
                        setTimeout(function () {
                          n.refreshstatus = !1;
                        }, 1e3);
                      break;
                    default:
                      break;
                  }
                });
              },
              deleteSupport: function (t) {
                var e = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/support/delete_support",
                  method: "POST",
                  data: { token: e.token, support_id: t },
                }).then(function (t) {
                  1 == t.data.code &&
                    "删除成功" == t.data.msg &&
                    ((e.isloadshow = !1), e.getNeedList(1, e.pagesize));
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
              getClickItem: function (t) {
                "确定" == t && this.deleteSupport(this.supportid);
              },
              deleted: function (t) {
                (this.isshow = !0), (this.supportid = t.supportid);
              },
              getShowStatus: function (t) {
                this.isshow = t;
              },
              addRecord: function () {
                t.navigateTo({ url: "../apply_need/apply_need" });
              },
            },
          };
        e.default = h;
      }.call(this, n("543d")["default"]));
    },
    "4f71": function (t, e, n) {
      "use strict";
      (function (t) {
        n("a10a");
        r(n("66fd"));
        var e = r(n("28a3"));
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, n("543d")["createPage"]));
    },
    "6ce3": function (t, e, n) {},
    e102: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return r;
        });
      var r = {
          uLoadmore: function () {
            return n
              .e("uview-ui/components/u-loadmore/u-loadmore")
              .then(n.bind(null, "0921"));
          },
        },
        o = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
        },
        i = [];
    },
    fe06: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("4a07"),
        o = n.n(r);
      for (var i in r)
        "default" !== i &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      e["default"] = o.a;
    },
  },
  [["4f71", "common/runtime", "common/vendor"]],
]);
