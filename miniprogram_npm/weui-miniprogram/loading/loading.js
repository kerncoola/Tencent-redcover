var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function n(t) {
        if (o[t]) return o[t].exports;
        var a = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
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
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & o && "string" != typeof e) for (var i in e) n.d(a, i, function(t) {
            return e[t];
        }.bind(null, i));
        return a;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 14);
}({
    14: function(t, e, n) {
        Component({
            options: {
                addGlobalClass: !0
            },
            properties: {
                extClass: {
                    type: String,
                    value: ""
                },
                show: {
                    type: Boolean,
                    value: !0,
                    observer: function(t) {
                        this._computedStyle(t, this.data.animated);
                    }
                },
                animated: {
                    type: Boolean,
                    value: !1,
                    observer: function(t) {
                        this._computedStyle(this.data.show, t);
                    }
                },
                duration: {
                    type: Number,
                    value: 350
                },
                type: {
                    type: String,
                    value: "dot-gray"
                },
                tips: {
                    type: String,
                    value: "加载中"
                }
            },
            data: {
                animationData: {},
                animationInstance: {},
                displayStyle: "none"
            },
            methods: {
                _computedStyle: function(t, e) {
                    t ? this.setData({
                        displayStyle: ""
                    }) : e ? this._startAnimation() : this.setData({
                        displayStyle: "none"
                    });
                },
                _startAnimation: function() {
                    var t = this;
                    setTimeout(function() {
                        var e = t.data.animationInstance;
                        e.height(0).step(), t.setData({
                            animationData: e.export()
                        });
                    }, 0);
                }
            },
            lifetimes: {
                attached: function() {
                    var t = this.data, e = wx.createAnimation({
                        duration: t.duration,
                        timingFunction: "ease"
                    });
                    this.setData({
                        animationInstance: e
                    }), this._computedStyle(this.data.show, this.data.animated);
                }
            }
        });
    }
});