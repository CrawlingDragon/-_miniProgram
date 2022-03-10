(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/regesiter/regesiter"],
  {
    "3aa9": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("b26d"),
        a = n("d301");
      for (var i in a)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      n("badb");
      var o,
        s = n("f0c5"),
        c = Object(s["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "86443310",
          null,
          !1,
          r["a"],
          o
        );
      t["default"] = c.exports;
    },
    5637: function (e, t, n) {},
    b26d: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return r;
        });
      var r = {
          uPicker: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("uview-ui/components/u-picker/u-picker"),
            ]).then(n.bind(null, "64f0"));
          },
          uCheckbox: function () {
            return n
              .e("uview-ui/components/u-checkbox/u-checkbox")
              .then(n.bind(null, "6f05"));
          },
        },
        a = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        i = [];
    },
    badb: function (e, t, n) {
      "use strict";
      var r = n("5637"),
        a = n.n(r);
      a.a;
    },
    c9a8: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n("2f62");
        function a(e, t) {
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
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  o(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function o(e, t, n) {
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
        var s = {
          data: function () {
            return {
              cur_index: "1",
              avatar: "",
              name: "",
              shopname: "",
              show: !1,
              address: "请选择地址",
              address0: "",
              detailAddress0: "", //详细地址
              address1: "",
              isChecked: !1,
              params: { province: !0, city: !0, area: !0 },
            };
          },
          onShow: function () {
            // console.log(wxinfo);
            // var e = JSON.parse(this.wxinfo);
            // this.avatar = e.avatarUrl;
          },
          computed: i(
            i({}, (0, r.mapState)(["token", "usertype", "wxinfo"])),
            {},
            {
              isactive: function () {
                return "1" == this.cur_index
                  ? 1 == this.isChecked &&
                      "" !== this.name &&
                      "" !== this.detailAddress0 &&
                      "请选择地址" !== this.address
                  : "2" == this.cur_index &&
                      1 == this.isChecked &&
                      "" !== this.name &&
                      this.detailAddress0 !== "" &&
                      "请选择地址" !== this.address &&
                      "" !== this.shopname;
              },
            }
          ),
          methods: i(
            i({}, (0, r.mapMutations)(["setUsertype", "setToken"])),
            {},
            {
              writeDetailAddress: function () {
                console.log(1);
              },
              selOption: function (e) {
                this.cur_index = e;
              },
              selAddress: function () {
                (this.show = !0), console.log(this.show, this.icon_name);
              },
              cancel: function (e) {
                console.log("cancle", e, this.address);
              },
              confirm: function (e) {
                (this.address = e.province.label + e.city.label + e.area.label),
                  (this.address0 =
                    e.province.label + e.city.label + e.area.label),
                  (this.address1 =
                    e.province.value + "," + e.city.value + "," + e.area.value);
              },
              watchAgreement: function (t) {
                "1" == t
                  ? e.navigateTo({ url: "../user_agreement/user_agreement" })
                  : e.navigateTo({ url: "../user_policy/user_policy" });
              },
              updateInfo: function (t) {
                var n = this;
                this.myRequest({
                  url: app.globalData.baseUrl + "member/user/update_user_info",
                  method: "POST",
                  data: {
                    token: n.token,
                    user_type: t,
                    realname: n.name,
                    address: [n.address0, n.address1],
                    shop_name: "1" == t ? "" : n.shopname,
                    avatar: n.avatar,
                  },
                }).then(function (r) {
                  n.setUsertype(r.data.data.user_type),
                    n.setToken(r.data.data.token),
                    "1" == t
                      ? e.navigateTo({ url: "../nonghu_index/nonghu_index" })
                      : "2" == t &&
                        e.navigateTo({
                          url: "../retailer_index/retailer_index",
                        });
                });
              },
              regesiter: function () {
                if (0 == this.isactive)
                  console.log("现在被禁用了，什么也不能做");
                else
                  switch (this.cur_index) {
                    case "1":
                      this.updateInfo(this.cur_index);
                      break;
                    case "2":
                      this.updateInfo(this.cur_index);
                      break;
                    default:
                      console.log("此处有错误");
                      break;
                  }
              },
            }
          ),
        };
        t.default = s;
      }.call(this, n("543d")["default"]));
    },
    d301: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("c9a8"),
        a = n.n(r);
      for (var i in r)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      t["default"] = a.a;
    },
    dd3d: function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("3aa9"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
  },
  [["dd3d", "common/runtime", "common/vendor"]],
]);
