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
        }), 2 & o && "string" != typeof e) for (var a in e) n.d(r, a, function(t) {
            return e[t];
        }.bind(null, a));
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
    }, n.p = "", n(n.s = 25);
}({
    25: function(t, e, n) {
        Component({
            options: {
                addGlobalClass: !0,
                multipleSlots: !0
            },
            properties: {
                multi: {
                    type: Boolean,
                    value: !0
                },
                checked: {
                    type: Boolean,
                    value: !1
                },
                value: {
                    type: String,
                    value: ""
                },
                label: {
                    type: String,
                    value: "label"
                },
                extClass: {
                    type: String,
                    value: ""
                }
            },
            data: {},
            relations: {
                "../checkbox-group/checkbox-group": {
                    type: "ancestor",
                    linked: function(t) {
                        this.data.group = t;
                    },
                    unlinked: function() {
                        this.data.group = null;
                    }
                }
            },
            methods: {
                setMulti: function(t) {
                    this.setData({
                        multi: t
                    });
                },
                setOuterClass: function(t) {
                    this.setData({
                        outerClass: t
                    });
                },
                checkedChange: function() {
                    if (this.data.multi) {
                        var t = !this.data.checked;
                        this.setData({
                            checked: t
                        }), this.data.group && this.data.group.checkedChange(t, this);
                    } else {
                        var e = this.data.checked;
                        if (e) return;
                        this.setData({
                            checked: !0
                        }), this.data.group && this.data.group.checkedChange(e, this);
                    }
                    this.triggerEvent("change", {
                        value: this.data.value,
                        checked: this.data.checked
                    });
                }
            }
        });
    }
});