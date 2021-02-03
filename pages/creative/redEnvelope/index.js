require("../../../@babel/runtime/helpers/Objectvalues");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 38 ], {
    11: function _(t, e, a) {
        t.exports = a(50);
    },
    83: function _(t, e, a) {
        "use strict";
        a.r(e);
        var i = a(7), o = a(11), n = a.n(o), s = a(2);
        function r(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), a.push.apply(a, i);
            }
            return a;
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(a), !0).forEach(function(e) {
                    Object(s["a"])(t, e, a[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                });
            }
            return t;
        }
        function d(t, e, a, i, o, n, s) {
            try {
                var r = t[n](s), c = r.value;
            } catch (t) {
                return void a(t);
            }
            r.done ? e(c) : Promise.resolve(c).then(i, o);
        }
        function u(t) {
            return function() {
                var e = this, a = arguments;
                return new Promise(function(i, o) {
                    var n = t.apply(e, a);
                    function s(t) {
                        d(n, i, o, s, r, "next", t);
                    }
                    function r(t) {
                        d(n, i, o, s, r, "throw", t);
                    }
                    s(void 0);
                });
            };
        }
        var l = a(1), h = a.n(l), f = encodeURIComponent("https://mp.weixin.qq.com/s/PPbPVxUOl6k1qT6zwd40pA"), p = encodeURIComponent("https://mp.weixin.qq.com/s?__biz=Mzg5MzU2MDE0OA==&mid=2247483818&idx=1&sn=360ce9e7daad73fc2aca91516f5485f2&chksm=c02db591f75a3c879baf0e08fddffcd8e56cc0a1630d3f0aa500709a3b03654184f959407c11&token=1118609443&lang=zh_CN&st=CC2CFD36D826DFF2E6004ED2781139287E55322C90D257E2CAD18CF82348DF4A42B7897E001CC03FA829690DBD68114747A9999A8181C2DB824F4D7441CC1317FF6F8955121F621DA90C8B4A87F7C731DBA52ADB505EF46E20CE4905652192E4611EDBF9332A50319C72C375C48426F21808A179036E70F3CB594148C888A16953FADC71CB8E8B78EDC8D2157D01AAF0&vid=1688850551762922&cst=D8CAF2D70E1718BF695208FBD514D8F24665CC12300CAAB2C928A1126700AA7F2D595F9D2E4FB83A89E5B4D4CA8F5A71&deviceid=99e9b67b-5eef-431a-984f-d8965dccac4d&version=3.0.30.2300&platform=mac#rd"), g = encodeURIComponent("https://mp.weixin.qq.com/s?__biz=Mzg3MDU0NDQwNQ==&mid=2247483722&idx=1&sn=1ab4e4b898b0bfff757eb47c2dbb9043&chksm=ce8d6430f9faed26a320d486dbc4fe8a3c22794873b73cfec8d2eb9bce208afe6fecbb4a1063&token=924422222&lang=zh_CN#rd"), w = getApp();
        function D() {
            return {
                "content-type": "application/json",
                "X-Taishan-Authorization": w.user ? w.user.authorization : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI1ZWM3OGI1YTE1NWUwNGYwMGIyNGY3NDQiLCJleHBpcmVzIjoxNjExNTYwNDEyODg5fQ.TC7uQ-FK5bM1UBursifCu8IJQEMkD1yI_eViYasYYz4"
            };
        }
        var b, m, x = {
            url: "https://taishan.qq.com/api/",
            tempUrl: "https://gawin.natapp4.cc/api/"
        };
        Page({
            data: {
                init: !1,
                redBagNav: "",
                redBagList: "",
                activeTab: 0,
                activeTabKey: "",
                swiperIndexpre: 0,
                swiperIndex: 0,
                swipeDuration: 300,
                isTabNext: !1,
                chooseRedBag: "",
                chooseRedBagUrl: "",
                followed: !1,
                taishan: !1,
                coscat: !1,
                nexIconshow: "none",
                getButtonState: {
                    text: [ "抽取该款", "今日剩余", "次机会" ],
                    disable: !1
                },
                chance: 1,
                received: "",
                isAllEmpty: !1,
                follwedHalfDialog: !1,
                halfDialogInfo: "group",
                unionid: "",
                openid: "",
                startDraw: !1,
                groupLoading: !1,
                isShowHistory: !1,
                lottery: null,
                prizeList: {},
                prizeListShow: !1,
                toptipsMsg: "",
                fadeShow: !1,
                lockLottery: !1,
                showChancePlus: !1,
                platform: "ios",
                isCopyWxId: !1,
                buttonLoading: !0
            },
            onShow: function() {
                var t = u(n.a.mark(function t() {
                    var e, a, i, o;
                    return n.a.wrap(function(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                              case 0:
                                if (!this.data.init) {
                                    t.next = 15;
                                    break;
                                }
                                return this.setData({
                                    buttonLoading: !0
                                }), t.next = 4, this.initState("upload");

                              case 4:
                                e = t.sent, this.data.chance < e.chance && (e.showChancePlus = !0), a = wx.getStorageSync("local_record"), 
                                i = new Date().getHours(), o = new Date().getHours(), o < 10 && (1 === i ? i = 31 : i -= 1), 
                                e.unionid || (a && a[i] ? e.chance = 2 - a[i].length : e.chance = 2), this.data.received == this.data.chooseRedBag && (e = c(c({}, e), {}, {
                                    getButtonState: {
                                        text: [ "你已领取本款", "去公众号，领取更多红包封面" ],
                                        disable: !1
                                    }
                                })), this.setData(c(c({}, e), {}, {
                                    buttonLoading: !1
                                })), t.next = 16;
                                break;

                              case 15:
                                this.setData({
                                    init: !0
                                });

                              case 16:
                              case "end":
                                return t.stop();
                            }
                        }
                    }, t, this);
                }));
                function e() {
                    return t.apply(this, arguments);
                }
                return e;
            }(),
            onLoad: function() {
                var t = u(n.a.mark(function t() {
                    var e, a, i;
                    return n.a.wrap(function(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                              case 0:
                                return wx.showLoading({
                                    title: "加载中...",
                                    mask: !0
                                }), t.prev = 1, t.next = 4, this.getRedbagdata();

                              case 4:
                                e = t.sent, a = {}, e.totalNum && 0 == e.totalNum.left && (a = c(c({}, a), {}, {
                                    isAllEmpty: !0,
                                    getButtonState: {
                                        text: [ "今日红包已全部抢完", "记得明日10:00am来哦" ],
                                        disable: !0
                                    }
                                })), i = e.redBagNav[0].key, e.redBagList[i].items[0].have || (a = c(c({}, a), {}, {
                                    getButtonState: {
                                        text: [ "这款太抢手了", "看看其他的吧" ],
                                        disable: !0
                                    }
                                })), this.getSysInfo(), a = c(c({}, a), {}, {
                                    redBagNav: e.redBagNav,
                                    redBagList: e.redBagList,
                                    activeTabKey: i,
                                    chooseRedBag: e.redBagList[i].items[0].title,
                                    chooseRedBagUrl: e.redBagList[i].items[0].imgUrl
                                }), this.setData(a), t.next = 17;
                                break;

                              case 14:
                                t.prev = 14, t.t0 = t["catch"](1), console.log(t.t0, "err");

                              case 17:
                                wx.hideLoading(), h.a.beacon.onDirectUserAction("page_load", {
                                    user_id: this.data.openid
                                });

                              case 19:
                              case "end":
                                return t.stop();
                            }
                        }
                    }, t, this, [ [ 1, 14 ] ]);
                }));
                function e() {
                    return t.apply(this, arguments);
                }
                return e;
            }(),
            onReady: function() {
                var t = u(n.a.mark(function t() {
                    var e, a, i, o;
                    return n.a.wrap(function(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.initState();

                              case 2:
                                e = t.sent, a = wx.getStorageSync("local_record"), i = new Date().getHours(), o = new Date().getHours(), 
                                console.log("hour", o), o < 10 && (1 === i ? i = 31 : i -= 1), console.log("day", i), 
                                e.unionid ? this.getLotteryRecord(e.unionid) : a && a[i] ? e.chance = 2 - a[i].length : e.chance = 2, 
                                this.setData(c(c({}, e), {}, {
                                    buttonLoading: !1
                                }));

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }
                    }, t, this);
                }));
                function e() {
                    return t.apply(this, arguments);
                }
                return e;
            }(),
            bindGetUserInfo: function bindGetUserInfo(t) {
                var e = this;
                if (0 !== this.data.chance) {
                    if (this.data.received !== this.data.chooseRedBag) {
                        if (t.detail.userInfo && this.data.chance) {
                            var a = t.detail.userInfo;
                            if (w.followData && w.followData.unionid) {
                                var i = w.followData, o = i.openid, n = i.unionid;
                                a.openid = o, n && (a.unionid = n);
                            }
                            if (h.a.beacon.onDirectUserAction("get_user_info", {
                                user_id: this.data.openid
                            }), !this.data.unionid || w.user && w.user.authorization) return void this.getRedBag();
                            wx.request({
                                url: x.url + "account/miniprogram/callback",
                                method: "POST",
                                data: {
                                    wxdata: a
                                },
                                success: function success(t) {
                                    if (console.log("success"), 200 === t.statusCode && 200 === t.data.code) {
                                        var a = t.data.data.data;
                                        wx.request({
                                            url: x.url + "account/signup",
                                            method: "POST",
                                            data: {
                                                data: a,
                                                type: "miniprogram"
                                            },
                                            success: function success(t) {
                                                console.log("signupRes", t), 200 === t.statusCode && (w.user = t.data, e.getRedBag());
                                            },
                                            fail: function fail(t) {
                                                console.log(t);
                                            }
                                        });
                                    }
                                },
                                fail: function fail(t) {
                                    console.log(t);
                                }
                            });
                        } else console.log("用户按了拒绝按钮");
                    } else this.routerFollow({
                        currentTarget: {
                            dataset: "taishan"
                        }
                    });
                } else this.inGroupChance();
            },
            getLotteryRecord: function getLotteryRecord(t) {
                var e = this;
                t = t || this.data.unionid, t && wx.request({
                    url: x.url + "lottery/record",
                    header: D(),
                    method: "POST",
                    data: {
                        unionid: t
                    },
                    success: function success(t) {
                        if (200 === t.statusCode) {
                            var a = wx.getStorageSync("local_record"), o = [];
                            if (a) {
                                var n = Object.values(a);
                                n.forEach(function(t) {
                                    o.push.apply(o, Object(i["a"])(t));
                                });
                            }
                            var s = t.data && t.data.record ? t.data.record : null, r = {};
                            s && (r = JSON.parse(s)), r && r.wallwarpper ? (console.log("parseData.wallwarpper", r.wallwarpper), 
                            o.length && (r.wallwarpper = [].concat(o, Object(i["a"])(r.wallwarpper))), console.log("parseData.wallwarpper", r.wallwarpper)) : o.length && (r.wallwarpper = [].concat(o));
                            var d = {};
                            r.red && r.red.key && (d.received = r.red.title, r.red.title == e.data.chooseRedBag && (d.getButtonState = {
                                text: [ "你已领取本款", "去公众号，领取更多红包封面" ],
                                disable: !1
                            })), d.prizeList = r, e.setData(c(c({}, d), {}, {
                                prizeListShow: !0
                            }));
                        }
                    },
                    fail: function fail(t) {
                        reject(t);
                    }
                });
            },
            getUnionID: function getUnionID() {
                return new Promise(function(t, e) {
                    wx.login({
                        success: function success(a) {
                            a.code ? wx.request({
                                url: x.url + "redPacket/login",
                                header: D(),
                                method: "POST",
                                data: {
                                    js_code: a.code
                                },
                                success: function success(e) {
                                    t(e);
                                },
                                fail: function fail(t) {
                                    e(t);
                                },
                                complete: function complete(t) {
                                    200 == t.statusCode && (w.followData = t.data);
                                }
                            }) : e(a);
                        },
                        fail: function fail(t) {
                            e(t);
                        }
                    });
                });
            },
            reloadState: function reloadState() {
                var t = this;
                return new Promise(function(e, a) {
                    t.data.unionid && wx.request({
                        url: x.url + "redPacket/login",
                        header: D(),
                        method: "POST",
                        data: {
                            unionid: t.data.unionid
                        },
                        success: function success(t) {
                            e(t);
                        },
                        fail: function fail(t) {
                            a(t);
                        }
                    });
                });
            },
            initState: function initState() {
                var t = arguments, e = this;
                return u(n.a.mark(function a() {
                    var i, o, s;
                    return n.a.wrap(function(a) {
                        while (1) {
                            switch (a.prev = a.next) {
                              case 0:
                                if (i = t.length > 0 && void 0 !== t[0] ? t[0] : "init", s = {}, "upload" !== i) {
                                    a.next = 14;
                                    break;
                                }
                                if (!e.data.unionid) {
                                    a.next = 9;
                                    break;
                                }
                                return a.next = 6, e.reloadState();

                              case 6:
                                o = a.sent, a.next = 12;
                                break;

                              case 9:
                                return a.next = 11, e.getUnionID();

                              case 11:
                                o = a.sent;

                              case 12:
                                a.next = 17;
                                break;

                              case 14:
                                return a.next = 16, e.getUnionID();

                              case 16:
                                o = a.sent;

                              case 17:
                                return o.data.unionid && (s.unionid = o.data.unionid), s.openid = o.data.openid, 
                                s = c(c({}, s), {}, {
                                    coscat: o.data.coscat,
                                    taishan: o.data.taishan,
                                    followed: o.data.VASD,
                                    chance: o.data.count < 0 ? 0 : o.data.count
                                }), a.abrupt("return", s);

                              case 21:
                              case "end":
                                return a.stop();
                            }
                        }
                    }, a);
                }))();
            },
            getRedbagdata: function getRedbagdata() {
                return new Promise(function(t, e) {
                    wx.request({
                        url: x.url + "redPacket/getdata",
                        header: D(),
                        method: "POST",
                        success: function success(e) {
                            t(e.data);
                        },
                        fail: function fail(t) {
                            e(t);
                        }
                    });
                });
            },
            onTabCLick: function onTabCLick(t) {
                var e = this, a = this.data.redBagNav[t.detail.index].key, i = {};
                0 === this.data.swiperIndex && this.data.received !== this.data.redBagList[a].items[0].title && (i.getButtonState = {
                    text: [ "抽取该款", "今日剩余", "次机会" ],
                    disable: !1
                }), 0 === this.data.swiperIndex && this.data.received === this.data.redBagList[a].items[0].title && (i.getButtonState = {
                    text: [ "你已领取本款", "去公众号，领取更多红包封面" ],
                    disable: !1
                }), i.swipeDuration = 0, this.setData(i), setTimeout(function() {
                    e.setData({
                        activeTab: t.detail.index,
                        activeTabKey: a,
                        isTabNext: !1,
                        fadeShow: !0,
                        swiperIndex: 0
                    });
                }), setTimeout(function() {
                    e.setData({
                        swipeDuration: 300
                    });
                }, 300), h.a.beacon.onDirectUserAction("click_tab", {
                    user_id: this.data.openid,
                    tabkey: a
                });
            },
            changeSwiper: function changeSwiper(t) {
                var e, a = t.detail.current;
                if ("touch" == t.detail.source && 0 == this.data.swiperIndex && this.data.swiperIndexpre > 1 && this.setData({
                    swiperIndex: this.data.swiperIndexpre
                }), e = t.detail.current == this.data.redBagList[this.data.activeTabKey].items.length ? "custom" : this.data.redBagList[this.data.activeTabKey].items[a].title, 
                this.data.isAllEmpty) this.setData({
                    swiperIndex: a,
                    swiperIndexpre: this.data.swiperIndex
                }); else {
                    var i = {
                        swiperIndexpre: this.data.swiperIndex,
                        swiperIndex: a,
                        chooseRedBag: e,
                        chooseRedBagUrl: this.data.redBagList[this.data.activeTabKey].items[a] && this.data.redBagList[this.data.activeTabKey].items[a].imgUrl || this.data.redBagList[this.data.activeTabKey].background,
                        getButtonState: {
                            text: [ "抽取该款", "今日剩余", "次机会" ],
                            disable: !1
                        },
                        nexIconshow: "none"
                    };
                    0 == this.data.swiperIndex && 0 === a ? i.fadeShow = !0 : i.fadeShow = !1, "custom" === e || this.data.redBagList[this.data.activeTabKey].items[a].have || (i.getButtonState = {
                        text: [ "这款太抢手了", "看看其他的吧" ],
                        disable: !0
                    }), e === this.data.received && (i.getButtonState = {
                        text: [ "你已领取本款", "去群探索更多红包封面" ],
                        disable: !1
                    }), "custom" === e && (i.nexIconshow = "show"), a < this.data.swiperIndex && (i.isTabNext = !1), 
                    this.setData(i);
                }
            },
            toNextTab: function toNextTab(t) {
                var e = this.data.activeTab + 1;
                e >= this.data.redBagNav.length && (e = 0);
                var a = {
                    detail: {
                        index: e
                    }
                };
                "tap" !== t.type || this.onTabCLick(a);
            },
            routerFollow: function routerFollow(t) {
                var e = f, a = t.currentTarget.dataset.key;
                if (!t.currentTarget.dataset.disable) {
                    var i = {};
                    switch (a) {
                      case "coscat":
                        e = p, h.a.beacon.onDirectUserAction("go_coscat", {
                            user_id: this.data.openid
                        });
                        break;

                      case "taishan":
                        e = g, h.a.beacon.onDirectUserAction("go_taishan", {
                            user_id: this.data.openid
                        });
                        break;

                      case "VASD":
                        h.a.beacon.onDirectUserAction("go_VASD", {
                            user_id: this.data.openid
                        }), e = f;

                      default:
                        h.a.beacon.onDirectUserAction("go_VASD", {
                            user_id: this.data.openid
                        }), e = f;
                    }
                    i.follwedHalfDialog = !1, this.setData(i), setTimeout(function() {
                        wx.navigateTo({
                            url: "../follow/index?path=".concat(e),
                            complete: function complete(t) {
                                console.log(t);
                            },
                            success: function success() {}
                        });
                    }), h.a.beacon.onDirectUserAction("go_follow", {
                        user_id: this.data.openi,
                        name: a
                    });
                }
            },
            inGroupChance: function inGroupChance() {
                this.setData({
                    follwedHalfDialog: !0,
                    halfDialogInfo: "group"
                });
            },
            showMoreChance: function showMoreChance() {
                this.setData({
                    follwedHalfDialog: !0,
                    halfDialogInfo: "video",
                    isCopyWxId: !1
                }), h.a.beacon.onDirectUserAction("click_easter_egg", {
                    user_id: this.data.openid
                });
            },
            showhalfPublic: function showhalfPublic() {
                this.setData({
                    follwedHalfDialog: !0,
                    halfDialogInfo: "public"
                }), h.a.beacon.onDirectUserAction("follow_VASD_1", {
                    user_id: this.data.openid
                });
            },
            showLuckDraw: function showLuckDraw(t) {
                var e = t.detail.state;
                e || this.getLotteryRecord(), this.setData({
                    startDraw: e
                });
            },
            openPrizeHistoryList: function openPrizeHistoryList() {
                this.setData({
                    isShowHistory: !0
                }), h.a.beacon.onDirectUserAction("open_history", {
                    user_id: this.data.openid
                });
            },
            closePrizeHistoryList: function closePrizeHistoryList(t) {
                this.setData({
                    isShowHistory: t.detail.state
                });
            },
            getRedBag: function getRedBag() {
                var t = this;
                if (this.data.chance > 0 && !this.data.lockLottery) {
                    this.setData({
                        lockLottery: !0
                    }), wx.showLoading({
                        title: "抽奖中..."
                    });
                    var e = {
                        theme: this.data.activeTabKey,
                        key: this.data.redBagList[this.data.activeTabKey].items[this.data.swiperIndex].key
                    };
                    return this.data.unionid ? (e.unionid = this.data.unionid, h.a.beacon.onDirectUserAction("click_lucky_btn", {
                        user_id: this.data.openid,
                        redBagName: this.data.chooseRedBag
                    })) : h.a.beacon.onDirectUserAction("click_lucky_btn_fake", {
                        user_id: this.data.openid,
                        redBagName: this.data.chooseRedBag
                    }), wx.request({
                        url: x.url + "lottery",
                        header: D(),
                        data: e,
                        success: function success(e) {
                            if (200 === e.statusCode) {
                                if (!t.data.unionid) {
                                    var a = wx.getStorageSync("local_record"), i = new Date().getHours(), o = new Date().getHours();
                                    o < 10 && (1 === i ? i = 31 : i -= 1), a ? a[i] ? a[i].push({
                                        url: e.data.data.url,
                                        time: new Date().getTime()
                                    }) : a[i] = [ {
                                        url: e.data.data.url,
                                        time: new Date().getTime()
                                    } ] : (a = {}, a[i] = [ {
                                        url: e.data.data.url,
                                        time: new Date().getTime()
                                    } ]), wx.setStorageSync("local_record", a);
                                }
                                t.setData({
                                    startDraw: !0,
                                    chance: t.data.chance - 1,
                                    lottery: e.data,
                                    chooseRedBagUrl: t.data.redBagList[t.data.activeTabKey].items[t.data.swiperIndex].imgUrl
                                });
                            } else wx.showToast({
                                title: "抱歉，出现了点错误，请重试",
                                icon: "none"
                            });
                        },
                        complete: function complete() {
                            setTimeout(function() {
                                t.setData({
                                    lockLottery: !1
                                });
                            }, 2e3), wx.hideLoading();
                        }
                    }), void h.a.beacon.onDirectUserAction("click_lucky_btn", {
                        user_id: this.data.openid,
                        redBagName: this.data.chooseRedBag
                    });
                }
            },
            onShareTimeline: function onShareTimeline() {
                return h.a.beacon.onDirectUserAction("click_share", {
                    user_id: this.data.openid
                }), {
                    title: "微信红包封面限量抽",
                    path: "/pages/creative/redEnvelope/index"
                };
            },
            completemessage: function completemessage(t) {
                this.setData({
                    groupLoading: !1,
                    toptipsMsg: "已给你发送微信服务通知，请查收"
                }), clearTimeout(m), h.a.beacon.onDirectUserAction("router_group_success", {
                    user_id: this.data.openid
                });
            },
            completemessageOK: function completemessageOK() {
                this.setData({
                    follwedHalfDialog: !1
                });
            },
            onShare: function onShare() {
                var t = this;
                wx.navigateTo({
                    url: "../../login/login?type=2",
                    complete: function complete(t) {
                        console.log(t);
                    },
                    success: function success() {
                        h.a.beacon.onDirectUserAction("click_share", {
                            user_id: t.data.openid
                        });
                    }
                });
            },
            startmessage: function startmessage() {
                var t = this;
                console.log("进群"), this.setData({
                    groupLoading: !0
                }), m = setTimeout(function() {
                    wx.navigateTo({
                        url: "../../login/login?type=1",
                        complete: function complete(t) {
                            console.log(t);
                        },
                        success: function success() {}
                    });
                }, 2e3), setTimeout(function() {
                    t.setData({
                        groupLoading: !1,
                        toptipsMsg: "",
                        follwedHalfDialog: !1
                    });
                }, 4e3), h.a.beacon.onDirectUserAction("router_group", {
                    user_id: this.data.openid
                });
            },
            copyWxId: function copyWxId() {
                var t = this;
                this.isCopyWxId || wx.setClipboardData({
                    data: "MoneyPlusDream",
                    success: function success() {
                        t.setData({
                            isCopyWxId: !0
                        });
                    },
                    fail: function fail() {
                        wx.showToast({
                            title: "复制失败，请重试"
                        });
                    }
                });
            },
            scrollBottom: function scrollBottom() {
                wx.createSelectorQuery().select(".red-envelope-page").boundingClientRect(function(t) {
                    wx.pageScrollTo({
                        scrollTop: t.bottom
                    });
                }).exec();
            },
            tapChancePlus: function tapChancePlus() {
                this.setData({
                    showChancePlus: !1
                });
            },
            onPageScroll: function onPageScroll(t) {
                clearTimeout(b), b = setTimeout(function() {
                    t.scrollTop > 170 ? wx.setNavigationBarColor({
                        backgroundColor: "#FFF5F1",
                        frontColor: "#000000",
                        animation: {
                            duration: 200
                        }
                    }) : wx.setNavigationBarColor({
                        backgroundColor: "#f04730",
                        frontColor: "#ffffff",
                        animation: {
                            duration: 200
                        }
                    });
                }, 200);
            },
            getSysInfo: function getSysInfo() {
                var t = this;
                wx.getSystemInfo({
                    success: function success(e) {
                        var a = "";
                        "devtools" == e.platform || "ios" == e.platform ? a = "ios" : "android" == e.platform && (a = "android"), 
                        t.setData({
                            platform: a
                        });
                    }
                });
            },
            closeHalfDialog: function closeHalfDialog() {
                this.setData({
                    follwedHalfDialog: !1
                });
            }
        });
    }
}, [ [ 83, 0, 2, 1 ] ] ]);