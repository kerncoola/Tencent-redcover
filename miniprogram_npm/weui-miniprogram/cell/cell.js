var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function o(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
    }
    var r = {};
    return o.m = t, o.c = r, o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, o.t = function(t, r) {
        if (1 & r && (t = o(t)), 8 & r) return t;
        if (4 & r && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & r && "string" != typeof t) for (var l in t) o.d(n, l, function(e) {
            return t[e];
        }.bind(null, l));
        return n;
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return o.d(t, "a", t), t;
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, o.p = "", o(o.s = 9);
}({
    9: function(e, t, o) {
        Component({
            options: {
                addGlobalClass: !0,
                multipleSlots: !0
            },
            properties: {
                hover: {
                    type: Boolean,
                    value: !1
                },
                link: {
                    type: Boolean,
                    value: !1
                },
                extClass: {
                    type: String,
                    value: ""
                },
                iconClass: {
                    type: String,
                    value: ""
                },
                bodyClass: {
                    type: String,
                    value: ""
                },
                icon: {
                    type: String,
                    value: ""
                },
                title: {
                    type: String,
                    value: ""
                },
                value: {
                    type: String,
                    value: ""
                },
                showError: {
                    type: Boolean,
                    value: !1
                },
                prop: {
                    type: String,
                    value: ""
                },
                url: {
                    type: String,
                    value: ""
                },
                footerClass: {
                    type: String,
                    value: ""
                },
                footer: {
                    type: String,
                    value: ""
                },
                inline: {
                    type: Boolean,
                    value: !0
                },
                hasHeader: {
                    type: Boolean,
                    value: !0
                },
                hasFooter: {
                    type: Boolean,
                    value: !0
                },
                hasBody: {
                    type: Boolean,
                    value: !0
                },
                extHoverClass: {
                    type: String,
                    value: ""
                }
            },
            relations: {
                "../form/form": {
                    type: "ancestor"
                },
                "../cells/cells": {
                    type: "ancestor"
                }
            },
            data: {
                inForm: !1
            },
            methods: {
                setError: function(e) {
                    this.setData({
                        error: e || !1
                    });
                },
                setInForm: function() {
                    this.setData({
                        inForm: !0
                    });
                },
                setOuterClass: function(e) {
                    this.setData({
                        outerClass: e
                    });
                },
                navigateTo: function() {
                    var e = this, t = this.data;
                    t.url && t.link && wx.navigateTo({
                        url: t.url,
                        success: function(t) {
                            e.triggerEvent("navigatesuccess", t, {});
                        },
                        fail: function(t) {
                            e.triggerEvent("navigateerror", t, {});
                        }
                    });
                }
            }
        });
    }
});