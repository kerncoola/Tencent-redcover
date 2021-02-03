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
    }, o.p = "", o(o.s = 13);
}({
    13: function(t, e, o) {
        Component({
            options: {
                addGlobalClass: !0
            },
            properties: {
                type: {
                    type: String,
                    value: "error",
                    observer: "_typeChange"
                },
                show: {
                    type: Boolean,
                    value: !1,
                    observer: "_showChange"
                },
                msg: {
                    type: String,
                    value: ""
                },
                delay: {
                    type: Number,
                    value: 2e3
                },
                extClass: {
                    type: String,
                    value: ""
                }
            },
            data: {
                typeClassMap: {
                    warn: "weui-toptips_warn",
                    info: "weui-toptips_info",
                    success: "weui-toptips_success",
                    error: "weui-toptips_error"
                }
            },
            attached: function() {
                var t = this.data;
                this.setData({
                    className: t.typeClassMap[t.type] || ""
                });
            },
            methods: {
                _typeChange: function(t) {
                    return this.setData({
                        className: this.data.typeClassMap[t] || ""
                    }), t;
                },
                _showChange: function(t) {
                    this._showToptips(t);
                },
                _showToptips: function(t) {
                    var e = this;
                    t && this.data.delay && setTimeout(function() {
                        e.setData({
                            show: !1
                        }, function() {
                            e.triggerEvent("hide", {}, {});
                        });
                    }, this.data.delay), this.setData({
                        show: t
                    });
                }
            }
        });
    }
});