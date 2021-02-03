var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function n(e) {
        if (r[e]) return r[e].exports;
        var o = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    var r = {};
    return n.m = t, n.c = r, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(t, r) {
        if (1 & r && (t = n(t)), 8 & r) return t;
        if (4 & r && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & r && "string" != typeof t) for (var u in t) n.d(o, u, function(e) {
            return t[e];
        }.bind(null, u));
        return o;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 19);
}({
    19: function(e, t, n) {
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
                type: {
                    type: String,
                    value: ""
                },
                icon: {
                    type: String,
                    value: ""
                },
                desc: {
                    type: String,
                    value: ""
                },
                extClass: {
                    type: String,
                    value: ""
                },
                size: {
                    type: Number,
                    value: 64
                }
            },
            data: {}
        });
    }
});