(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/add_medication_record/add_medication_record"],
  {
    "09cd": function (e, t, n) {
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
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  c(e, t, n[t]);
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
        const app = getApp();
        var u = {
          data: function () {
            return {
              cropname: "",
              cropdiseases: "",
              prescription: "",
              width: "150",
              size_type: ["original", "compressed"],
              height: "150",
              maxcount: "5",
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
            };
          },
          computed: i(
            i({}, (0, r.mapState)(["token"])),
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
                  "" !== this.cropname &&
                  "" !== this.cropdiseases &&
                  "" !== this.prescription &&
                  this.length >= 2
                );
              },
            }
          ),
          methods: {
            chooseUpload: function (e, t) {
              this.fileList = e;
            },
            removeUpload: function (e, t, n) {
              this.fileList = t;
            },
            addRecord: function (t) {
              var n = this;
              this.myRequest({
                url: app.globalData.baseUrl + "member/crop/add_crop",
                method: "POST",
                data: {
                  token: n.token,
                  crop_name: n.cropname,
                  crop_disease: n.cropdiseases,
                  crop_recipel: n.prescription,
                  crop_img: t,
                },
              }).then(function (t) {
                1 == t.data.code &&
                  "添加用药记录成功" == t.data.msg &&
                  e.navigateBack({
                    url: "../medication_record/medication_record",
                  });
              });
            },
            submit: function () {
              1 == this.isactive
                ? this.$refs.uUpload.upload()
                : console.log("现在按钮被禁用了");
            },
            uploadsuccess: function (e, t, n, r) {
              console.log(e, t, n, r);
              var o = [];
              o = n.filter(function (e) {
                return 100 == e.progress;
              });
              var i = o.reduce(function (e, t) {
                return e.push(t.response.data[0].url), e;
              }, []);
              this.fileList.length == o.length && this.addRecord(i);
            },
          },
        };
        t.default = u;
      }.call(this, n("543d")["default"]));
    },
    "1a14": function (e, t, n) {
      "use strict";
      (function (e) {
        n("a10a");
        r(n("66fd"));
        var t = r(n("ec69"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(t.default);
      }.call(this, n("543d")["createPage"]));
    },
    9715: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return r;
        });
      var r = {
          uField: function () {
            return n
              .e("uview-ui/components/u-field/u-field")
              .then(n.bind(null, "29d2"));
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
        o = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
        },
        i = [];
    },
    a86e: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("09cd"),
        o = n.n(r);
      for (var i in r)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      t["default"] = o.a;
    },
    c499: function (e, t, n) {
      "use strict";
      var r = n("fa88"),
        o = n.n(r);
      o.a;
    },
    ec69: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("9715"),
        o = n("a86e");
      for (var i in o)
        "default" !== i &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      n("c499");
      var c,
        u = n("f0c5"),
        a = Object(u["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "04c351d7",
          null,
          !1,
          r["a"],
          c
        );
      t["default"] = a.exports;
    },
    fa88: function (e, t, n) {},
  },
  [["1a14", "common/runtime", "common/vendor"]],
]);
