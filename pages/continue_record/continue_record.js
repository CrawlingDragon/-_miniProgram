(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/continue_record/continue_record"],
  {
    "22ce": function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = n("2f62");
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  c(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
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
        var u = {
          data: function () {
            return {
              prescription: "",
              effect: "",
              width: "150",
              height: "150",
              maxcount: "5",
              show: !1,
              right_icon: "arrow-right",
              size_type: ["original", "compressed"],
              effectList: [{ text: "好" }, { text: "一般" }, { text: "差" }],
              fieldstyle: {
                fontSize: "30rpx",
                color: "#333333",
                paddingLeft: "30rpx",
              },
              placehold_style:
                "color:#999999;font-size:30rpx;font-family: Microsoft YaHei;font-weight: Regular;",
              fileList: [],
              sourceType: ["camera"],
              color: "#999999",
              crop_code: "",
            };
          },
          computed: i(
            i({}, (0, o.mapState)(["token"])),
            {},
            {
              action: function () {
                return this.url + "member/upload/image_multi";
              },
              formData: function () {
                return { token: this.token, file: this.fileList };
              },
              length: function () {
                return this.fileList.length;
              },
              isactive: function () {
                return (
                  "" !== this.effect &&
                  "" !== this.prescription &&
                  this.length >= 2
                );
              },
            }
          ),
          onLoad: function (e) {
            this.crop_code = e.crop_code;
          },
          methods: {
            chooseUpload: function (e, t) {
              this.fileList = e;
            },
            removeUpload: function (e, t, n) {
              this.fileList = t;
            },
            addContinueRecord: function (t) {
              var n = this,
                o = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/crop/add_crop_track",
                method: "POST",
                data: {
                  token: o.token,
                  crop_code: o.crop_code,
                  crop_effect: o.effect,
                  crop_recipel: o.prescription,
                  crop_img: t,
                },
              }).then(function (t) {
                1 == t.data.code &&
                  "添加用药跟踪记录成功" == t.data.msg &&
                  e.navigateTo({
                    url: "../medication_record_detail/medication_record_detail?crop_code=".concat(
                      n.crop_code
                    ),
                  });
              });
            },
            submit: function () {
              1 == this.isactive
                ? this.$refs.uUpload.upload()
                : console.log("现在按钮被禁用了");
            },
            showAction: function () {
              (this.show = !0), (this.right_icon = "arrow-down");
            },
            clickItem: function (e) {
              this.effect = this.effectList[e].text;
            },
            uploadsuccess: function (e, t, n, o) {
              var r = [];
              r = n.filter(function (e) {
                return 100 == e.progress;
              });
              var i = r.reduce(function (e, t) {
                return e.push(t.response.data[0].url), e;
              }, []);
              this.fileList.length == r.length &&
                (console.log("点击上传以后的数据：", r, i),
                this.addContinueRecord(i));
            },
          },
          watch: {
            show: function (e) {
              this.right_icon = 0 == e ? "arrow-right" : "arrow-down";
            },
          },
        };
        t.default = u;
      }.call(this, n("543d")["default"]));
    },
    6454: function (e, t, n) {},
    a491: function (e, t, n) {
      "use strict";
      var o = n("6454"),
        r = n.n(o);
      r.a;
    },
    aee3: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("c78c"),
        r = n("b79f");
      for (var i in r)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      n("a491");
      var c,
        u = n("f0c5"),
        a = Object(u["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "e3217e08",
          null,
          !1,
          o["a"],
          c
        );
      t["default"] = a.exports;
    },
    b79f: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("22ce"),
        r = n.n(o);
      for (var i in o)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      t["default"] = r.a;
    },
    c78c: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return o;
        });
      var o = {
          uField: function () {
            return n
              .e("uview-ui/components/u-field/u-field")
              .then(n.bind(null, "29d2"));
          },
          uActionSheet: function () {
            return n
              .e("uview-ui/components/u-action-sheet/u-action-sheet")
              .then(n.bind(null, "f680"));
          },
          uUpload: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("uview-ui/components/u-upload/u-upload"),
            ]).then(n.bind(null, "9906"));
          },
          uIcon: function () {
            return n
              .e("uview-ui/components/u-icon/u-icon")
              .then(n.bind(null, "f93f"));
          },
        },
        r = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        i = [];
    },
    d1ae: function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        o(n("66fd"));
        var t = o(n("aee3"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
  },
  [["d1ae", "common/runtime", "common/vendor"]],
]);
