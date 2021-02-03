(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 14 ], {
    72: function _(t, e, a) {
        var i = a(26);
        Component({
            properties: {
                lottery: {
                    type: Object,
                    value: {
                        type: 1,
                        data: {
                            link: ""
                        }
                    }
                },
                chooseRedBagUrl: {
                    type: String
                },
                mode: {
                    type: String,
                    value: "aspectFill"
                }
            },
            data: {
                showAnima: !1,
                showDialog: !1,
                cardSrc: "//static.taishan.qq.com/editor/users-upload/5e612c6235203610aba230bc/82d83960879dd5a58219e7e59b46353b.png",
                circleBag: [],
                lotteryMap: {
                    1: {
                        type: "bag",
                        title: [ "恭喜你，抽中红包封面！", "你是今日0.001%的幸运儿" ],
                        extra: [],
                        img: "",
                        btn: "去设置",
                        link: ""
                    },
                    2: {
                        type: "member",
                        title: [ "很遗憾，本次没有抽到红包封面", "送你泰山7日会员，免费制作新年卡片" ],
                        extra: [],
                        img: "//static.taishan.qq.com/editor/users-upload/5e612c6235203610aba230bc/f205e2c4433e273fd4d8a7c84f93e305.png",
                        btn: "去使用",
                        link: "https://mp.weixin.qq.com/s/yMwwCjD0JgVcbSzLld8kZA"
                    },
                    3: {
                        type: "bg",
                        title: [ "很遗憾，本次没有抽到红包封面", "送你一份新年壁纸，新年新气象" ],
                        extra: [],
                        img: "",
                        btn: "保存壁纸"
                    }
                }
            },
            methods: {
                createCircleBag: function createCircleBag() {
                    for (var t = 12, e = 360 / t, a = [], i = 0; i < t; i++) {
                        a.push({
                            transform: "translate(0, -50%) rotateZ(".concat(i * e, "deg)")
                        });
                    }
                    this.setData({
                        circleBag: a
                    });
                },
                vibrateShort: function vibrateShort() {
                    var t = 1, e = setInterval(i, 10);
                    function a(t) {
                        return ~~(1.23 * t * t - 2.66 * t + 22.75);
                    }
                    function i() {
                        var r = a(t);
                        15 === t || 16 === t ? wx.vibrateShort({
                            type: "heavy"
                        }) : wx.vibrateShort({
                            type: "medium"
                        }), clearInterval(e), t <= 16 && (e = setInterval(i, r), t++);
                    }
                },
                closeLuckDraw: function closeLuckDraw(t) {
                    this.triggerEvent("showLuckDraw", {
                        state: !1
                    });
                },
                dealDialogText: function dealDialogText() {
                    var t, e = this.data.lotteryMap, a = this.data.lottery;
                    return 1 === a.type ? (t = i({}, e[a.type]), t.img = this.data.chooseRedBagUrl, 
                    t.title[1] = a.data.title, t.link = a.data.link) : 3 === a.type ? (t = i({}, e[a.type]), 
                    t.img = a.data.url) : 2 === a.type && (t = i({}, e[a.type]), t.title[1] = "送你泰山".concat(a.data.day, "日会员，免费制作新年卡片")), 
                    t;
                }
            },
            ready: function ready() {
                this.createCircleBag();
            },
            attached: function attached() {
                var t = this;
                this.setData({
                    showAnima: !0
                }), this.setData({
                    dialogText: this.dealDialogText()
                }), this.vibrateShort(), setTimeout(function() {
                    t.setData({
                        showDialog: !0
                    });
                }, 2e3);
            }
        });
    }
}, [ [ 72, 0, 1 ] ] ]);