var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function o(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
    }
    var n = {};
    return o.m = t, o.c = n, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, o.t = function(t, n) {
        if (1 & n && (t = o(t)), 8 & n) return t;
        if (4 & n && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var u in t) o.d(r, u, function(e) {
            return t[e];
        }.bind(null, u));
        return r;
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return o.d(t, "a", t), t;
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, o.p = "", o(o.s = 17);
}({
    17: function(e, t, o) {
        Component({
            options: {
                multipleSlots: !0,
                addGlobalClass: !0
            },
            properties: {
                closabled: {
                    type: Boolean,
                    value: !0
                },
                title: {
                    type: String,
                    value: ""
                },
                subTitle: {
                    type: String,
                    value: ""
                },
                extClass: {
                    type: String,
                    value: ""
                },
                desc: {
                    type: String,
                    value: ""
                },
                tips: {
                    type: String,
                    value: ""
                },
                maskClosable: {
                    type: Boolean,
                    value: !0
                },
                mask: {
                    type: Boolean,
                    value: !0
                },
                show: {
                    type: Boolean,
                    value: !1,
                    observer: "_showChange"
                },
                buttons: {
                    type: Array,
                    value: []
                }
            },
            methods: {
                close: function(e) {
                    var t = e.currentTarget.dataset.type;
                    (this.data.maskClosable || "close" === t) && (this.setData({
                        show: !1
                    }), this.triggerEvent("close"));
                },
                buttonTap: function(e) {
                    var t = e.currentTarget.dataset.index;
                    this.triggerEvent("buttontap", {
                        index: t,
                        item: this.data.buttons[t]
                    }, {});
                },
                onMaskMouseMove: function(e) {}
            }
        });
    }
});