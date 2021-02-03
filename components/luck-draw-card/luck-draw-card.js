(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 10 ], {
    28: function _(t, n) {
        function o(t) {
            wx.showToast({
                title: t,
                icon: "none",
                mask: !0
            });
        }
        function e() {
            wx.showModal({
                title: "提示",
                content: "请先授权同意保存图片到相册",
                confirmText: "确定授权",
                success: function success(t) {
                    t.confirm && wx.openSetting({
                        fail: function fail(t) {
                            o("打开授权设置页面失败");
                        }
                    });
                }
            });
        }
        function i(t) {
            wx.getSetting({
                success: function success(n) {
                    console.log(n), n.authSetting["scope.writePhotosAlbum"] ? c(t) : void 0 !== n.authSetting["scope.writePhotosAlbum"] ? e() : c(t);
                },
                fail: function fail(t) {
                    o("获取授权信息失败"), console.log(t);
                }
            });
        }
        function c(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (t) {
                var i = t;
                0 === t.indexOf("//") ? i = "https:" + t : 0 === t.indexOf("http://") ? i = "https://" + t.split("http://")[1] : 0 === t.indexOf("static") && (i = "https://" + t), 
                console.log("%c [ _url ]", "font-size:13; background:pink; color:#bf2c9f;", i), 
                wx.getImageInfo({
                    src: i,
                    success: function success(t) {
                        var i = t.path;
                        i && wx.saveImageToPhotosAlbum({
                            filePath: i,
                            success: function success(t) {
                                o("保存成功"), n && n();
                            },
                            fail: function fail() {
                                e && e();
                            }
                        });
                    },
                    fail: function fail(t) {
                        o("获取图片地址失败");
                    }
                });
            } else o("缺少图片路径");
        }
        t.exports = {
            authUserJuris: i
        };
    },
    76: function _(t, n, o) {
        "use strict";
        o.r(n);
        var e = o(28), i = o(1), c = o.n(i);
        Component({
            properties: {
                dialogText: {
                    type: Object,
                    value: {}
                }
            },
            data: {},
            methods: {
                saveImg: function saveImg() {
                    var t = this.data.dialogText;
                    t && "bg" === t.type && Object(e["authUserJuris"])(t.img), c.a.beacon.onDirectUserAction("save_wallpaper", {
                        user_id: ""
                    });
                },
                toWebView: function toWebView() {
                    var t = this.data.dialogText.link;
                    t || (t = "https://mp.weixin.qq.com/s/yMwwCjD0JgVcbSzLld8kZA"), wx.navigateTo({
                        url: "../follow/index?path=".concat(t),
                        complete: function complete(t) {
                            console.log(t);
                        },
                        success: function success() {}
                    }), c.a.beacon.onDirectUserAction("get_taishan_vip", {
                        user_id: ""
                    });
                },
                reciveBag: function reciveBag() {
                    c.a.beacon.onDirectUserAction("get_red_bag", {
                        user_id: ""
                    }), wx.showRedPackage({
                        url: this.data.dialogText.link,
                        success: function success(t) {},
                        fail: function fail(t) {
                            console.log(t);
                        }
                    });
                }
            },
            ready: function ready() {}
        });
    }
}, [ [ 76, 0, 2, 1 ] ] ]);