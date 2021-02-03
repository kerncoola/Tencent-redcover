var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function n(t) {
        if (o[t]) return o[t].exports;
        var i = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    var o = {};
    return n.m = e, n.c = o, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        });
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(e, o) {
        if (1 & o && (e = n(e)), 8 & o) return e;
        if (4 & o && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & o && "string" != typeof e) for (var a in e) n.d(i, a, function(t) {
            return e[t];
        }.bind(null, a));
        return i;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 3);
}({
    3: function(t, e, n) {
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
                title: {
                    type: String,
                    value: ""
                },
                background: {
                    type: String,
                    value: ""
                },
                color: {
                    type: String,
                    value: ""
                },
                back: {
                    type: Boolean,
                    value: !0
                },
                loading: {
                    type: Boolean,
                    value: !1
                },
                animated: {
                    type: Boolean,
                    value: !0
                },
                show: {
                    type: Boolean,
                    value: !0,
                    observer: "_showChange"
                },
                delta: {
                    type: Number,
                    value: 1
                }
            },
            data: {
                displayStyle: ""
            },
            attached: function() {
                var t = this, e = !!wx.getMenuButtonBoundingClientRect, n = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
                wx.getSystemInfo({
                    success: function(o) {
                        var i = !!(o.system.toLowerCase().search("ios") + 1);
                        t.setData({
                            ios: i,
                            statusBarHeight: o.statusBarHeight,
                            innerWidth: e ? "width:" + n.left + "px" : "",
                            innerPaddingRight: e ? "padding-right:" + (o.windowWidth - n.left) + "px" : "",
                            leftWidth: e ? "width:" + (o.windowWidth - n.left) + "px" : ""
                        });
                    }
                });
            },
            methods: {
                _showChange: function(t) {
                    var e = "";
                    e = this.data.animated ? "opacity: " + (t ? "1" : "0") + ";-webkit-transition:opacity 0.5s;transition:opacity 0.5s;" : "display: " + (t ? "" : "none"), 
                    this.setData({
                        displayStyle: e
                    });
                },
                back: function() {
                    var t = this.data;
                    t.delta && wx.navigateBack({
                        delta: t.delta
                    }), this.triggerEvent("back", {
                        delta: t.delta
                    }, {});
                }
            }
        });
    }
});