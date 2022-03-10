(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/enter_products_statistics/enter_products_statistics"],
  {
    "2bd0": function (t, e, s) {
      "use strict";
      (function (t) {
        s("a10a");
        n(s("66fd"));
        var e = n(s("6be5"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, s("543d")["createPage"]));
    },
    "3f8b": function (t, e, s) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = s("2f62");
        function o(t) {
          return u(t) || a(t) || r(t) || i();
        }
        function i() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function r(t, e) {
          if (t) {
            if ("string" === typeof t) return c(t, e);
            var s = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === s && t.constructor && (s = t.constructor.name),
              "Map" === s || "Set" === s
                ? Array.from(t)
                : "Arguments" === s ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                ? c(t, e)
                : void 0
            );
          }
        }
        function a(t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function u(t) {
          if (Array.isArray(t)) return c(t);
        }
        function c(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var s = 0, n = new Array(e); s < e; s++) n[s] = t[s];
          return n;
        }
        function l(t, e) {
          var s = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              s.push.apply(s, n);
          }
          return s;
        }
        function d(t) {
          for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? l(Object(s), !0).forEach(function (e) {
                  h(t, e, s[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
              : l(Object(s)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(s, e)
                  );
                });
          }
          return t;
        }
        function h(t, e, s) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = s),
            t
          );
        }
        const app = getApp()
        var f = {
          data: function () {
            return {
              start_time_show: !1,
              end_time_show: !1,
              mode: "date",
              start_time: "",
              end_time: "",
              status: "合计",
              status_code: 1,
              icon1: "arrow-down",
              icon2: "arrow-down",
              icon3: "arrow-down",
              keyword: "",
              placeholder_color: "#999999",
              status_show: !1,
              user_id: "",
              page: 1,
              pagesize: 10,
              result_list: [],
              isloadshow: !1,
              loadstatus: "loadmore",
              refreshstatus: !1,
              statusList: [
                { text: "合计" },
                { text: "进货" },
                { text: "退货" },
              ],
            };
          },
          onLoad: function (t) {
            (this.user_id = t.user_id), this.getResultList(1, this.pagesize);
          },
          onPullDownRefresh: function () {
            (this.refreshstatus = !0), this.getResultList(1, this.pagesize);
          },
          computed: d({}, (0, n.mapState)(["token"])),
          methods: {
            scrollToBottom: function () {
              (this.isloadshow = !0), this.loadmore();
            },
            loadmore: function () {
              "nomore" != this.loadstatus &&
                ((this.loadstatus = "loading"),
                this.page++,
                this.getResultList(this.page, this.pagesize));
            },
            getResultList: function (e, s) {
              var n = this;
              this.myRequest({
                url:app.globalData.baseUrl +  "member/goods/get_stock_list",
                method: "POST",
                data: {
                  token: n.token,
                  page: e,
                  pagesize: s,
                  start_date: n.start_time,
                  end_date: n.end_time,
                  goods_name: n.keyword,
                  stock_status: n.status_code,
                  user_id: n.user_id,
                },
              }).then(function (s) {
                switch (s.data.code) {
                  case 1:
                    var i,
                      r = s.data.data.cur_page.total_count,
                      a = Math.ceil(r / 10);
                    if (1 == e) n.result_list = s.data.data.list;
                    else (i = n.result_list).push.apply(i, o(s.data.data.list));
                    (n.loadstatus = e == a || e > a ? "nomore" : "loadmore"),
                      1 == n.refreshstatus &&
                        setTimeout(function () {
                          t.stopPullDownRefresh();
                        }, 1e3);
                    break;
                  case 210:
                    (n.result_list = []),
                      1 == n.refreshstatus &&
                        setTimeout(function () {
                          t.stopPullDownRefresh();
                        }, 1e3);
                    break;
                  default:
                    break;
                }
              });
            },
            selStatus: function () {
              this.status_show = !0;
            },
            clickItem: function (t) {
              switch (
                ((this.status = this.statusList[t].text),
                (this.isloadshow = !1),
                this.status)
              ) {
                case "合计":
                  this.status_code = 1;
                  break;
                case "进货":
                  this.status_code = 2;
                  break;
                case "退货":
                  this.status_code = 3;
                  break;
                default:
                  this.status_code = 1;
                  break;
              }
              (this.page = 1),
                this.getResultList(this.page, this.pagesize, this.keyword);
            },
            startChange: function (t) {
              (this.start_time = t.result),
                (this.page = 1),
                (this.isloadshow = !1),
                this.getResultList(this.page, this.pagesize, this.keyword);
            },
            endChange: function (t) {
              (this.end_time = t.result),
                (this.page = 1),
                (this.isloadshow = !1),
                this.getResultList(this.page, this.pagesize, this.keyword);
            },
            search: function (t) {
              (this.keyword = t),
                (this.page = 1),
                (this.isloadshow = !1),
                this.getResultList(this.page, this.pagesize, this.keyword);
            },
            sel_start_time: function () {
              this.start_time_show = !0;
            },
            sel_end_time: function () {
              this.end_time_show = !0;
            },
          },
          watch: {
            status_show: function (t) {
              this.icon3 = 1 == t ? "arrow-up" : "arrow-down";
            },
            start_time_show: function (t) {
              this.icon1 = 1 == t ? "arrow-up" : "arrow-down";
            },
            end_time_show: function (t) {
              this.icon2 = 1 == t ? "arrow-up" : "arrow-down";
            },
          },
        };
        e.default = f;
      }.call(this, s("543d")["default"]));
    },
    "6be5": function (t, e, s) {
      "use strict";
      s.r(e);
      var n = s("fa85"),
        o = s("e3b3");
      for (var i in o)
        "default" !== i &&
          (function (t) {
            s.d(e, t, function () {
              return o[t];
            });
          })(i);
      s("9883");
      var r,
        a = s("f0c5"),
        u = Object(a["a"])(
          o["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "3b692125",
          null,
          !1,
          n["a"],
          r
        );
      e["default"] = u.exports;
    },
    9883: function (t, e, s) {
      "use strict";
      var n = s("f957"),
        o = s.n(n);
      o.a;
    },
    e3b3: function (t, e, s) {
      "use strict";
      s.r(e);
      var n = s("3f8b"),
        o = s.n(n);
      for (var i in n)
        "default" !== i &&
          (function (t) {
            s.d(e, t, function () {
              return n[t];
            });
          })(i);
      e["default"] = o.a;
    },
    f957: function (t, e, s) {},
    fa85: function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return o;
      }),
        s.d(e, "c", function () {
          return i;
        }),
        s.d(e, "a", function () {
          return n;
        });
      var n = {
          uIcon: function () {
            return s
              .e("uview-ui/components/u-icon/u-icon")
              .then(s.bind(null, "f93f"));
          },
          uCalendar: function () {
            return s
              .e("uview-ui/components/u-calendar/u-calendar")
              .then(s.bind(null, "b8cf"));
          },
          uActionSheet: function () {
            return s
              .e("uview-ui/components/u-action-sheet/u-action-sheet")
              .then(s.bind(null, "f680"));
          },
          uSearch: function () {
            return s
              .e("uview-ui/components/u-search/u-search")
              .then(s.bind(null, "4d31"));
          },
          uLoadmore: function () {
            return s
              .e("uview-ui/components/u-loadmore/u-loadmore")
              .then(s.bind(null, "0921"));
          },
        },
        o = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
        },
        i = [];
    },
  },
  [["2bd0", "common/runtime", "common/vendor"]],
]);
