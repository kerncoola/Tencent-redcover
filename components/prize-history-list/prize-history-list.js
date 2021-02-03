(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 30 ], {
    79: function _(t, e, a) {
        var i = a(26);
        Component({
            properties: {
                prizeList: {
                    type: Object
                }
            },
            data: {
                prizesData: []
            },
            methods: {
                _closePrizeHistory: function _closePrizeHistory() {
                    this.triggerEvent("closePrizeHistoryList", {
                        state: !1
                    });
                },
                dealData: function dealData() {
                    var t = [], e = this.data.prizeList, a = {
                        red: {
                            type: "bag",
                            title: [ "我的奖品", "红包封面" ],
                            extra: [],
                            img: "",
                            btn: "去设置"
                        },
                        wallwarpper: {
                            type: "bg",
                            title: [ "我的奖品", "精美壁纸" ],
                            extra: [],
                            img: "",
                            btn: "保存壁纸"
                        },
                        vip: {
                            type: "member",
                            title: [],
                            extra: [],
                            img: "//static.taishan.qq.com/editor/users-upload/5e612c6235203610aba230bc/f205e2c4433e273fd4d8a7c84f93e305.png",
                            btn: "去使用",
                            link: "https://mp.weixin.qq.com/s/yMwwCjD0JgVcbSzLld8kZA"
                        }
                    };
                    e["red"] && t.push(i(i({}, a.red), {}, {
                        img: e["red"].imgUrl,
                        link: e["red"].link
                    })), e["vip"] && e["vip"].length && e["vip"].forEach(function(e) {
                        t.push(i(i({}, a.vip), {}, {
                            title: [ "我的奖品", "泰山".concat(e.day, "日会员") ]
                        }));
                    }), e["wallwarpper"] && e["wallwarpper"].length && e["wallwarpper"].forEach(function(e) {
                        t.push(i(i({}, a.wallwarpper), {}, {
                            img: e.url
                        }));
                    }), this.setData({
                        prizesData: t
                    });
                }
            },
            ready: function ready() {
                this.dealData();
            }
        });
    }
}, [ [ 79, 0, 1 ] ] ]);