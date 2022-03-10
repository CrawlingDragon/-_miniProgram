(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/enter_products_bysale/enter_products_bysale"],
  {
    3332: function (t, e, s) {
      "use strict";
      (function (t) {
        s("a10a");
        n(s("66fd"));
        var e = n(s("7f19"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(e.default);
      }.call(this, s("543d")["createPage"]));
    },
    "65d6": function (t, e, s) {
      "use strict";
      s.r(e);
      var n = s("7cf1"),
        o = s.n(n);
      for (var r in n)
        "default" !== r &&
          (function (t) {
            s.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = o.a;
    },
    "771c": function (t, e, s) {},
    "7cf1": function (t, e, s) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = s("2f62");
        function o(t) {
          return u(t) || a(t) || i(t) || r();
        }
        function r() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function i(t, e) {
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
              result_list: [],
              page: 1,
              pagesize: 10,
              status_show: !1,
              user_id: "",
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
            (this.user_id = t.user_id),
              this.getResultList(this.page, this.pagesize);
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
                url: app.globalData.baseUrl + "member/goods/get_user_stock",
                method: "POST",
                data: {
                  token: n.token,
                  page: e,
                  pagesize: s,
                  start_date: n.start_time,
                  end_date: n.end_time,
                  user_keywords: n.keyword,
                  stock_status: n.status_code,
                },
              }).then(function (s) {
                switch (s.data.code) {
                  case 1:
                    var r,
                      i = s.data.data.cur_page.total_count,
                      a = Math.ceil(i / 10);
                    if (1 == e) n.result_list = s.data.data.list;
                    else (r = n.result_list).push.apply(r, o(s.data.data.list));
                    (n.loadstatus = e == a || e > a ? "nomore" : "loadmore"),
                      1 == n.refreshstatus &&
                        setTimeout(function () {
                          t.stopPullDownRefresh();
                        }, 1e3);
                    break;
                  case 210:
                    1 == n.page && (n.result_list = []),
                      (n.loadstatus = "nomore"),
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
              (this.isloadshow = !1),
                (this.start_time = t.result),
                (this.page = 1),
                this.getResultList(this.page, this.pagesize, this.keyword);
            },
            endChange: function (t) {
              (this.isloadshow = !1),
                (this.end_time = t.result),
                (this.page = 1),
                this.getResultList(this.page, this.pagesize, this.keyword);
            },
            search: function (t) {
              (this.isloadshow = !1),
                (this.keyword = t),
                (this.page = 1),
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
    "7f19": function (t, e, s) {
      "use strict";
      s.r(e);
      var n = s("e626"),
        o = s("65d6");
      for (var r in o)
        "default" !== r &&
          (function (t) {
            s.d(e, t, function () {
              return o[t];
            });
          })(r);
      s("e22a");
      var i,
        a = s("f0c5"),
        u = Object(a["a"])(
          o["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "08ea7fcd",
          null,
          !1,
          n["a"],
          i
        );
      e["default"] = u.exports;
    },
    e22a: function (t, e, s) {
      "use strict";
      var n = s("771c"),
        o = s.n(n);
      o.a;
    },
    e626: function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return o;
      }),
        s.d(e, "c", function () {
          return r;
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
        r = [];
    },
  },
  [["3332", "common/runtime", "common/vendor"]],
]);
