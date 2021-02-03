var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function r(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }
    var o = {};
    return r.m = t, r.c = o, r.d = function(e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        });
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.t = function(t, o) {
        if (1 & o && (t = r(t)), 8 & o) return t;
        if (4 & o && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & o && "string" != typeof t) for (var l in t) r.d(n, l, function(e) {
            return t[e];
        }.bind(null, l));
        return n;
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return r.d(t, "a", t), t;
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 2);
}({
    2: function(e, t, r) {
        Component({
            options: {
                addGlobalClass: !0,
                multipleSlots: !0
            },
            properties: {
                title: {
                    type: String,
                    value: ""
                },
                subtitle: {
                    type: String,
                    value: ""
                }
            },
            relations: {
                "../cells/cells": {
                    type: "descendant",
                    linked: function(e) {
                        this.data.firstItem || (this.data.firstItem = e), e.setOuterClass("weui-cells__group weui-cells__group_form weui-cells_form"), 
                        e !== this.data.firstItem && e.setOuterClass("weui-cells__group_wxss weui-cells__group weui-cells__group_form weui-cells_form");
                    }
                }
            },
            data: {
                firstItem: null
            }
        });
    }
});