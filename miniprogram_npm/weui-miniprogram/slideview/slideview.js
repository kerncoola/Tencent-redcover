var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function n(t) {
        if (o[t]) return o[t].exports;
        var r = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
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
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & o && "string" != typeof e) for (var u in e) n.d(r, u, function(t) {
            return e[t];
        }.bind(null, u));
        return r;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 18);
}({
    18: function(t, e, n) {
        Component({
            options: {
                addGlobalClass: !0,
                multipleSlots: !0
            },
            properties: {
                extClass: {
                    type: String,
                    value: ""
                },
                buttons: {
                    type: Array,
                    value: [],
                    observer: function() {
                        this.addClassNameForButton();
                    }
                },
                disable: {
                    type: Boolean,
                    value: !1
                },
                icon: {
                    type: Boolean,
                    value: !1
                },
                show: {
                    type: Boolean,
                    value: !1
                },
                duration: {
                    type: Number,
                    value: 350
                },
                throttle: {
                    type: Number,
                    value: 40
                },
                rebounce: {
                    type: Number,
                    value: 0
                }
            },
            data: {
                size: null
            },
            ready: function() {
                this.updateRight(), this.addClassNameForButton();
            },
            methods: {
                updateRight: function() {
                    var t = this, e = this.data;
                    wx.createSelectorQuery().in(this).select(".left").boundingClientRect(function(n) {
                        wx.createSelectorQuery().in(t).selectAll(".btn").boundingClientRect(function(o) {
                            t.setData({
                                size: {
                                    buttons: o,
                                    button: n,
                                    show: e.show,
                                    disable: e.disable,
                                    throttle: e.throttle,
                                    rebounce: e.rebounce
                                }
                            });
                        }).exec();
                    }).exec();
                },
                addClassNameForButton: function() {
                    var t = this.data, e = t.buttons, n = t.icon;
                    e.forEach(function(t) {
                        n ? t.className = "" : "warn" === t.type ? t.className = "weui-slideview__btn-group_warn" : t.className = "weui-slideview__btn-group_default";
                    }), this.setData({
                        buttons: e
                    });
                },
                buttonTapByWxs: function(t) {
                    this.triggerEvent("buttontap", t, {});
                },
                hide: function() {
                    this.triggerEvent("hide", {}, {});
                },
                show: function() {
                    this.triggerEvent("show", {}, {});
                },
                transitionEnd: function() {}
            }
        });
    }
});