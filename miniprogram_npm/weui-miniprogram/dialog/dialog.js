var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function o(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
    }
    var n = {};
    return o.m = e, o.c = n, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        });
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, o.t = function(e, n) {
        if (1 & n && (e = o(e)), 8 & n) return e;
        if (4 & n && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var a in e) o.d(r, a, function(t) {
            return e[t];
        }.bind(null, a));
        return r;
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return o.d(e, "a", e), e;
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, o.p = "", o(o.s = 20);
}({
    20: function(t, e, o) {
        Component({
            options: {
                multipleSlots: !0,
                addGlobalClass: !0
            },
            properties: {
                title: {
                    type: String,
                    value: ""
                },
                extClass: {
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
            data: {
                innerShow: !1
            },
            ready: function() {
                var t = this.data.buttons, e = t.length;
                t.forEach(function(t, o) {
                    t.className = 1 === e ? "weui-dialog__btn_primary" : 0 === o ? "weui-dialog__btn_default" : "weui-dialog__btn_primary";
                }), this.setData({
                    buttons: t
                });
            },
            methods: {
                buttonTap: function(t) {
                    var e = t.currentTarget.dataset.index;
                    this.triggerEvent("buttontap", {
                        index: e,
                        item: this.data.buttons[e]
                    }, {});
                },
                close: function() {
                    this.data.maskClosable && (this.setData({
                        show: !1
                    }), this.triggerEvent("close", {}, {}));
                },
                stopEvent: function() {}
            }
        });
    }
});