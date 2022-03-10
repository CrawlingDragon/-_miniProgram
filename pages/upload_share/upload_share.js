(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/upload_share/upload_share"],
  {
    "0557": function (e, t, r) {
      "use strict";
      var n = r("f25c"),
        o = r.n(n);
      o.a;
    },
    "31e1": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("3f6b"),
        o = r("3a13");
      for (var a in o)
        "default" !== a &&
          (function (e) {
            r.d(t, e, function () {
              return o[e];
            });
          })(a);
      r("0557");
      var i,
        s = r("f0c5"),
        u = Object(s["a"])(
          o["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "53c8b317",
          null,
          !1,
          n["a"],
          i
        );
      t["default"] = u.exports;
    },
    "3a13": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("98fd"),
        o = r.n(n);
      for (var a in n)
        "default" !== a &&
          (function (e) {
            r.d(t, e, function () {
              return n[e];
            });
          })(a);
      t["default"] = o.a;
    },
    "3f6b": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "a", function () {
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
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        a = [];
    },
    "4c2c": function (e, t, r) {
      "use strict";
      (function (e) {
        r("a10a");
        n(r("66fd"));
        var t = n(r("31e1"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, r("543d")["createPage"]));
    },
    "98fd": function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = r("2f62");
        function o(e) {
          return u(e) || s(e) || i(e) || a();
        }
        function a() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function i(e, t) {
          if (e) {
            if ("string" === typeof e) return c(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? c(e, t)
                : void 0
            );
          }
        }
        function s(e) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        }
        function u(e) {
          if (Array.isArray(e)) return c(e);
        }
        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function d(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(r), !0).forEach(function (t) {
                  f(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        function f(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        const app = getApp()
        var h = function () {
            r.e("components/popup")
              .then(
                function () {
                  return resolve(r("c577"));
                }.bind(null, r)
              )
              .catch(r.oe);
          },
          m = {
            data: function () {
              var e;
              return (
                (e = {
                  title: "确定要删除吗？",
                  isshow: !1,
                  page: 1,
                  pagesize: 10,
                  record_list: [],
                  maskshow: !1,
                  sid: "",
                  isloadshow: !1,
                  status: "loadmore",
                }),
                f(e, "isshow", !1),
                f(e, "refreshstatus", !1),
                e
              );
            },
            components: { Popup: h },
            onLoad: function () {
              this.getShareRecord(1, this.pagesize);
            },
            computed: l({}, (0, n.mapState)(["token"])),
            methods: {
              pullDownRefresh: function () {
                (this.isloadshow = !1),
                  this.refreshstatus ||
                    ((this.refreshstatus = !0),
                    this.getShareRecord(1, this.pagesize));
              },
              getShowStatus: function (e) {
                this.isshow = e;
              },
              deleted: function (e) {
                (this.isshow = !0), (this.sid = e.sid);
              },
              clickItem: function (e) {
                console.log(e), "确定" == e && this.delShareRecord();
              },
              scrollToBottom: function () {
                (this.isloadshow = !0), this.loadmore();
              },
              loadmore: function () {
                "nomore" != this.status &&
                  ((this.status = "loading"),
                  this.page++,
                  this.getShareRecord(this.page, this.pagesize));
              },
              watchBigPic: function (t) {
                var r = [];
                r.push(t), e.previewImage({ urls: r });
              },
              delShareRecord: function () {
                var e = this,
                  t = this;
                this.myRequest({
                  url:
                    app.globalData.baseUrl + "member/user/delete_share_image",
                  method: "POST",
                  data: { token: t.token, sid: t.sid },
                }).then(function (r) {
                  1 == r.data.code &&
                    "删除分享截图成功" == r.data.msg &&
                    ((t.isloadshow = !1), t.getShareRecord(1, e.pagesize));
                });
              },
              getShareRecord: function (e, t) {
                var r = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/user/get_share_image",
                  method: "POST",
                  data: { token: r.token, page: e, pagesize: t },
                }).then(function (t) {
                  var n = t.data.data.cur_page.total_count,
                    a = Math.ceil(n / 10);
                  switch (t.data.code) {
                    case 210:
                      "暂无数据" == t.data.msg &&
                        ((r.record_list = []),
                        setTimeout(function () {
                          r.refreshstatus = !1;
                        }, 1e3));
                      break;
                    case 1:
                      var i;
                      if (
                        (setTimeout(function () {
                          r.refreshstatus = !1;
                        }, 1e3),
                        (r.status = e == a || e > a ? "nomore" : "loadmore"),
                        1 == e)
                      )
                        r.record_list = t.data.data.list;
                      else
                        (i = r.record_list).push.apply(i, o(t.data.data.list));
                      break;
                    default:
                      break;
                  }
                });
              },
              addShareImage: function (e) {
                var t = this,
                  r = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/user/add_share_image",
                  method: "POST",
                  data: { token: r.token, image: e },
                }).then(function (e) {
                  1 == e.data.code &&
                    "上传分享截图成功" == e.data.msg &&
                    r.getShareRecord(1, t.pagesize);
                });
              },
              addRecord: function () {
                var t = this;
                e.chooseImage({
                  count: 1,
                  sizeType: ["original", "compressed"],
                  sourceType: ["album"],
                  success: function (r) {
                    e.uploadFile({
                      url: t.url + "member/upload/image",
                      filePath: r.tempFilePaths[0],
                      name: "file",
                      formData: { token: t.token },
                      success: function (e) {
                        var r = JSON.parse(e.data);
                        t.addShareImage(r.data.url);
                      },
                    });
                  },
                  fail: function (e) {
                    console.log(e);
                  },
                });
              },
            },
          };
        t.default = m;
      }.call(this, r("543d")["default"]));
    },
    f25c: function (e, t, r) {},
  },
  [["4c2c", "common/runtime", "common/vendor"]],
]);
