(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 26 ], {
    66: function _(t, e) {
        Component({
            options: {
                multipleSlots: !0,
                addGlobalClass: !0
            },
            properties: {
                extClass: {
                    type: String,
                    value: ""
                },
                dbclickBackTop: {
                    type: Boolean,
                    value: !0
                },
                show: {
                    type: Boolean,
                    value: !0,
                    observer: "_showChange"
                }
            },
            data: {
                displayStyle: ""
            },
            attached: function attached() {
                var t = this;
                wx.getSystemInfo({
                    success: function success(e) {
                        var i = e.windowWidth, a = wx.getMenuButtonBoundingClientRect(), n = e.statusBarHeight, o = a.top - n, s = n + 2 * o + a.height + 2, h = i - a.left, p = i - a.right, u = a.width;
                        t.setData({
                            statusBarHeight: n,
                            gap: o,
                            menuButtonRight: p,
                            menuButtonWidth: u,
                            innerRight: h,
                            innerHeight: s
                        }), t.triggerEvent("getBarInfo", {
                            height: s,
                            windowWidth: i,
                            menuButtonRight: p,
                            menuButtonWidth: u,
                            gap: o,
                            statusBarHeight: n
                        });
                    }
                });
            },
            methods: {
                _showChange: function _showChange(t) {
                    var e = "opacity: " + (t ? "1" : "0") + ";transition:opacity 0.5s;";
                    this.setData({
                        displayStyle: e
                    });
                },
                doubleClick: function doubleClick(t) {
                    this.data.dbclickBackTop && (this.timeStamp && t.timeStamp - this.timeStamp < 300 ? (this.timeStamp = 0, 
                    wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 300
                    })) : this.timeStamp = t.timeStamp);
                }
            }
        });
    }
}, [ [ 66, 0 ] ] ]);